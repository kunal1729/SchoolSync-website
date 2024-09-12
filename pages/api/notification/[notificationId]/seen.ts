import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import {
  AdminNotificationCol,
  MySession,
  UserCol,
  userProjection,
} from "@/lib/types";
import { clientPromise } from "@/lib/DB";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(403).send("Not logged in");
  }
  if (req.method === "PATCH") {
    return PATCH(req, res, session);
  } else {
    return res.status(405).send("Method not allowed");
  }
}

export async function markAsSeen(req: NextApiRequest, session: MySession) {
  const userId = new ObjectId(session!.user.id);
  const notificationId = req.query.notificationId as string;
  const db = (await clientPromise).db("School_App");

  let notifProjection: any = {
    seenBy: 0,
  };
  if (session?.user.role !== "Admin") {
    notifProjection = {
      ...notifProjection,
      seenByCount: 0,
    };
  }
  const notificationCollection =
    db.collection<AdminNotificationCol>("AdminNotifications");
  const notifDoc = (
    await notificationCollection
      .aggregate([
        {
          $match: { _id: new ObjectId(notificationId) },
        },
        {
          $lookup: {
            from: "Users",
            localField: "creatorId",
            foreignField: "_id",
            as: "creator",
            pipeline: [
              {
                $project: userProjection,
              },
              {
                $limit: 1, // Limit the number of creators to 1
              },
            ],
          },
        },
        {
          $addFields: {
            creator: { $arrayElemAt: ["$creator", 0] }, // Get the first creator from the 'creators' array
          },
        },
        {
          $project: notifProjection,
        },
      ])

      .toArray()
  )[0];

  const usersCollection = db.collection<UserCol>("Users");
  const userUpdate = await usersCollection.updateOne(
    {
      _id: new ObjectId(userId),
      [`notifications.${notificationId}`]: { $exists: true },
      [`notifications.${notificationId}.seen`]: false,
    },

    {
      $set: { [`notifications.${notificationId}.seen`]: true },
      $inc: {
        unseenNotificationsCount: -1,
      },
    }
  );
  const noficUpdate = await notificationCollection.updateOne(
    {
      _id: new ObjectId(notificationId),
      seenBy: { $nin: [userId.toString()] },
    },
    {
      $addToSet: { seenBy: userId.toString() },
      $inc: {
        seenByCount: 1,
      },
    }
  );

  return { userUpdate, noficUpdate, notifDoc };
}

async function PATCH(
  req: NextApiRequest,
  res: NextApiResponse,
  session: MySession
) {
  const { userUpdate, noficUpdate, notifDoc } = await markAsSeen(req, session);
  if (!notifDoc) {
    return res.status(404).send("Notification not found");
  } else if (!userUpdate.acknowledged || !noficUpdate.acknowledged) {
    return res.status(500).json("Something went wrong");
  }

  return res.status(200).send("Notification seen");
}
