import { User } from "@/models/User.model";
import connectToDb from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectToDb();

    try {
        const data = await request.json();

        const newUser = new User(data);
        await newUser.save();

        return NextResponse.json(
            { message: "User created successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: "Login failed", details: error.message }, { status: 500 });
    }
}
