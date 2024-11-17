import { User } from "@/models/User.model";
import connectToDb from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectToDb();

  try {
    const data = await request.json();

    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use. Please try with a different email." },
        { status: 409 } // Conflict
      );
    }
    const newUser = new User(data);
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "User Registration Failed", details: error.message },
      { status: 500 }
    );
  }
}
