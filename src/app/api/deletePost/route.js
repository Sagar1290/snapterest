import connectToDb from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { verifyToken } from "../middleware/verifyToken";
import Post from "@/models/Post.model";

export async function DELETE(request) {
  try {
    await connectToDb();
    const auth = request.headers.get("authorization");
    const token = auth.split(" ")[1];
    const decoded = verifyToken(token);

    const req = await request.json();

    const postData = await Post.findById(req.postID);
    if (!postData) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    let postCreateBy = postData.user.toString();

    if (decoded.role === "admin" || decoded.userID === postCreateBy) {
      await Post.deleteOne({ _id: req.postID });
      return NextResponse.json(
        { data: "Deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Unauthorized to delete" },
        { status: 403 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Unable to Delete" }, { status: 500 });
  }
}
