import connectToDb from "@/lib/mongodb";
import Post from "@/models/Post.model";
import { User } from "@/models/User.model";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();

    const limit = parseInt(request?.query?.limit) || 30;
    const page = parseInt(request?.query?.page) || 1;
    const sort = request?.query?.sort || "createdAt";
    const order = request?.query?.order || "desc";

    let query = {};
    const startIndex = (page - 1) * limit;
    const posts = await Post.find(query)
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex)
      .populate("user", "fullname")
      .populate("likedBy.user",'fullname')
    
    
    return NextResponse.json({"data": posts }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
