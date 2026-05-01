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
     socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_SECRET,
        }, 
        github: { 
            clientId: process.env.GIT_ID, 
            clientSecret: process.env.GIT_SECRET, 
        }, 
    },
  database: mongodbAdapter(db, {
    client
  }),
});