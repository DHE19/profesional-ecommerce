import { NextApiRequest, NextApiResponse } from "next";
import  User  from "../../models/User";
import { data } from "../../src/database/db";
import db from "../../utils/db"

 const handler = async (req:NextApiRequest,res:NextApiResponse) =>{
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    res.send({message:'seeded successfully'});
}

export default handler;


