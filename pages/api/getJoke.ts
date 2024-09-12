import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

const schoolJokes : string[] = [
  "Why was the math book sad? Because it had too many problems!",
  "What is a teacher’s favorite nation? Expla-nation!",
  "Why did the student eat his homework? Because the teacher told him it was a piece of cake!",
  "Why dont we ever tell secrets in a school? Because the walls have ears!",
  "Why did the kid bring a ladder to school? Because he wanted to go to high school!",
  "What did the pencil say to the paper? You’ve got a good point!",
  "Why did the teacher wear sunglasses? Because her students were so bright!",
  "Why do history teachers love to tell jokes? Because they always go over our heads!",
  "Why didn’t the sun go to college? It already had a million degrees!",
  "What kind of school do surfers go to? Boarding school!",
  "Why don’t skeletons fight each other? They don’t have the guts!",
  "What is a math teacher’s favorite place in New York? Times Square!",
  "Why did the music teacher need a ladder? To reach the high notes!",
  "Why don’t you do arithmetic in the jungle? Because if you add 4 and 4, you get ate!",
  "Why was the broom late to school? It swept in!",
  "Why did the computer go to school? To improve its byte-size education!",
  "Why can’t a nose be 12 inches long? Because then it would be a foot!",
  "Why was the geometry class always tired? They were working around the clock!",
  "What do you call a teacher who never farts in public? A private tutor!",
  "Why did the student take a ruler to bed? To see how long they slept!",
  "Why did the teacher go to the beach? To test the waters!",
  "Why was the math teacher such a good cook? They knew how to add seasoning!",
  "Why didn’t the quarter roll down the hill with the nickel? Because it had more cents!",
  "Why do teachers wear sunglasses? Because their class is so bright!",
  "Why did the student do multiplication problems on the floor? The teacher told him not to use tables!",
  "Why did the biology book look so sad? It was full of cells!",
  "Why did the students eat their desks? They wanted to know what knowledge tasted like!",
  "Why was the geometry book so happy? It was well-rounded!",
  "Why do math teachers love parks? Because of all the natural logs!",
  "Why did the student sit on the clock? He wanted to be on time!",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow become a successful student? Because he was outstanding in his field!",
  "Why was the equal sign so humble? It wasn’t less than or greater than anyone else!",
  "What do you get when you cross a math teacher with a clock? Times tables!",
  "What’s the best way to stay warm in a classroom? Sit in the corner—it’s always 90 degrees!",
  "Why don’t you ever see zebras doing well in school? They always get black-and-white answers!",
  "What did the buffalo say when his son left for college? Bison!",
  "Why do music teachers need ladders? To reach the high notes!",
  "Why did the student bring a rope to class? To tie up loose ends!",
  "Why don’t we tell jokes in chemistry class? All the reactions are explosive!",
  "Why did the clock go to school? It wanted to learn time management!",
  "Why did the student study in an airplane? He wanted a higher education!",
  "What kind of fish goes to school? A tuna fish!",
  "Why did the teacher bring birdseed to class? Because she was teaching tweets!",
  "Why do teachers love summer vacation? No class!",
  "Why don’t math problems ever get old? Because they always add up!",
  "Why did the banana go to school? It wanted to learn how to split!",
  "Why don’t we see elephants in school? Because they’re so good at avoiding the trunk line!",
  "What do you get when you cross a teacher and a vampire? Lots of blood tests!",
  "Why do teachers love riding bikes to school? They enjoy cycling through lessons!",
  "Why was the chalk always breaking in class? It couldn’t handle the pressure!",
  "What is a math teacher’s favorite movie? The Sum of All Fears!",
  "Why was the student so good at art? Because she always drew attention!",
  "Why don’t books ever go to school? They have too much shelf-esteem!",
  "Why did the skeleton not do his homework? He didn’t have the backbone to do it!",
  "Why did the egg go to school? To get an egg-ucation!",
  "Why did the student carry a pencil to bed? Because he wanted to draw his dreams!",
  "Why did the teacher cross the road? To get to the other syllabus!",
  "Why was the science teacher always calm? Because they had a lot of chemistry with the students!",
  "What did the student say to the teacher after class? See you in detention!",
  "Why was the English teacher always late? She lost track of the plot!",
  "Why do chemistry teachers love bad puns? They always get a reaction!",
  "Why was the geometry class so entertaining? Because it was full of angles!",
  "Why don’t pirates do well in school? Because they’re always swiping things!",
  "Why did the library book look sad? Because it was overdue for some attention!",
  "Why did the geography student bring a map to class? To find out where in the world she was going wrong!",
  "Why did the history book join the band? It had a great past to play!",
  "Why do algebra teachers love equations? Because they always have solutions!",
  "What’s a student’s favorite candy? Nerds!",
  "Why do chemistry students like bananas? They have a lot of potassium!",
  "Why was the art teacher so calm? Because she was well-drawn!",
  "Why was the biology student always in trouble? He kept dividing cells!",
  "Why do computers do so well in school? They follow all the commands!",
  "What’s a teacher’s favorite sport? Tennis, because they love teaching their students to serve!",
  "Why did the grammar book go to the hospital? It had too many commas!",
  "Why don’t you ever play hide and seek with a teacher? Because good teachers always find their students!",
  "Why did the pencil fail math class? Because it couldn’t draw a straight line!",
  "Why was the teacher’s joke a hit? Because it had great delivery!",
  "Why was the student looking at the globe? He wanted to see where his future lies!",
  "Why do students love geometry? Because it’s so plane and simple!",
  "Why did the clock go to therapy? Because it was having a hard time moving forward!",
  "Why don’t history teachers tell jokes? They never get any new material!",
  "Why don’t students like fractions? They always feel divided!",
  "Why did the teacher bring a ladder to class? To help her students reach higher!",
  "Why did the lightbulb go to school? It wanted to get bright ideas!",
  "Why was the pencil the best student? It always stayed sharp!",
  "Why did the chemistry student excel? He had all the right reactions!",
  "Why don’t we ever tell jokes in algebra class? It’s too hard to get a positive result!",
  "Why did the geography teacher never get lost? She had great direction!",
  "Why did the student study outside? He wanted a higher degree of learning!",
  "Why do teachers love apple products? Because an apple a day keeps bad grades away!",
  "Why was the student so cool? Because she knew all the right angles!"
];


function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return GET(req, res);
  } else {
    res.status(405).send("Method not allowed");
  }
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { jokeType } = req.query;

  const joke =
    shuffleArray(schoolJokes)[
      Math.floor(Math.random() * schoolJokes.length)
    ];
  return res.status(200).json(joke);
}
