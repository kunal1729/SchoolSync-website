import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { getRoleAndId, validateLogin } from "../../../lib/functions";

import { mongoUri } from "../../../lib/DB";
import { MongoClient } from "mongodb";
import { UserCol } from "../../../lib/types";
const secret = process.env.SECRET;
import { clientPromise } from "../../../lib/DB";

if (!secret) {
  throw new Error(
    "Missing SECRET environment variable. Add it and restart the server"
  );
}
export const authOptions = {
  secret: secret,
  pages: {
    signIn: "/Auth/Signin",
  },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        try {
          console.log(credentials);
          const usersCollection = (await clientPromise)
            .db("School_App")
            .collection<UserCol>("Users");

          console.log(usersCollection);
          const user = await validateLogin(
            credentials.email,
            credentials.password,
            usersCollection
          );

          console.log(user);
          if (user) {
            return user as any;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error in authorize:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],

  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      try {
        console.log("Session started for user:", session.user.email);
        const usersCollection = (await clientPromise)
          .db("School_App")
          .collection<UserCol>("Users");
  
        const { role, id } = await getRoleAndId(
          session.user.email,
          usersCollection
        );
  
        if (!role || !id) {
          console.error("Failed to find role or id for session:", session.user.email);
          throw new Error("Role or ID not found");
        }
  
        session.user.id = id;
        session.user.role = role;
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return null; // Return a null session if something fails
      }
    },
  },
};

export default NextAuth(authOptions);
