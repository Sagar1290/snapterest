import connectToDb from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { verifyToken } from "../middleware/verifyToken";
import Post from "@/models/Post.model";

export async function POST(request) {
  try {
    
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Unauthorized: No token provided", { status: 401 });
    }
    
    const token = authHeader.split(" ")[1]; // Remove 'Bearer ' part
    const decoded = verifyToken(token);
    const {imageURL, caption, location} = await request.json()
    if (!imageURL) {
      return new Response("Image is Required to Create Post", { status: 404 });
    }
    await connectToDb();
    const newPost = new Post({
      user: decoded.userID,
      imageURL: imageURL,
      location: location,
      caption: caption      
    })
    await newPost.save()
    return NextResponse.json({ data: "successfully uploaded photo" }, {status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Unable to Upload the photo", data: error },
      { status: 400 }
    );
  }
}
