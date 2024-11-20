import connectToDb from "@/lib/mongodb";
import { verifyToken } from "../middleware/verifyToken";
import Post from "@/models/Post.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDb();

    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Unauthorized: No token provided", { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    const { postId, liked } = await request.json();

    const update = liked
      ? { $push: { likedBy: { user: decoded.userID } } }
      : { $pull: { likedBy: { user: decoded.userID } } };

    const post = await Post.findByIdAndUpdate(postId, update, { new: true });

    return NextResponse.json(
      { data: "Post Liked Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Unable to Like the post", data: error },
      { status: 400 }
    );
  }
}
