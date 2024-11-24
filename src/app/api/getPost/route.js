import connectToDb from "@/lib/mongodb";
import Post from "@/models/Post.model";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDb();
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit")) || 30;
    const page = parseInt(url.searchParams.get("page")) || 1;
    // const sort = url.searchParams.get("sort") || "createdAt";
    // const order = url.searchParams.get("order") || "desc";

    const startIndex = (page - 1) * limit;

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(startIndex)
      .populate("user", "fullname photoURL")
      .populate("likedBy.user", "fullname");

    const totalPosts = await Post.countDocuments();

    return NextResponse.json({
      data: posts,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Error fetching posts, please try again later." },
      { status: 500 }
    );
  }
}
