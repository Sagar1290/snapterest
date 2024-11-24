import connectToDb from "@/lib/mongodb";
import Comment from "@/models/Comment.model";
import { NextResponse } from "next/server";
import { verifyToken } from "../middleware/verifyToken";

export async function POST(request) {
  try {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Unauthorized: No token provided", { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    const data = await request.json();

    await connectToDb();
    const newComment = new Comment({ ...data, user: decoded.userID });
    const comment = await newComment.save();
    const populatedComment = await comment.populate(
      "user",
      "fullname photoURL"
    );

    return NextResponse.json({ data: populatedComment }, { status: 200 });
  } catch (error) {
    console.error("Error Commenting Post:", error);
    return NextResponse.json(
      { message: "Error commenting post, please try again later." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Unauthorized: No token provided", { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    await connectToDb();

    const url = new URL(request.url);
    const postID = url.searchParams.get("post");

    const comment = await Comment.find({ post: postID })
      .sort({ createdAt: -1 })
      .populate("user", "fullname photoURL");

    return NextResponse.json({ data: comment }, { status: 200 });
  } catch (error) {
    console.error("Error Fetching Comment: ", error);
    return NextResponse.json(
      { message: "Error fetching comment, please try again later." },
      { status: 500 }
    );
  }
}

// export const handler as ('GET', 'POST')
