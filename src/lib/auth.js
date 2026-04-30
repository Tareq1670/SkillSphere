import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.DATABASE_URI);
const db = client.db("SkillSphere");

export const auth = betterAuth({
    emailAndPassword:{
        enabled : true,
        autoSignIn : false
    },
  database: mongodbAdapter(db, {
    client
  }),
});