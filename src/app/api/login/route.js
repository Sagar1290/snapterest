import { NextResponse } from "next/server";
import connectToDb from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import { User } from "@/models/User.model";

export async function POST(request) {
    await connectToDb();

    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        const isPasswordValid = password === user.password;
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        const userToBeReturned = {
            fullname: user.fullname,
            email: user.email,
            photoURL: user.photoURL,
        };

        const token = jwt.sign(
            { username: user.fullname, useremail: user.email },
            process.env.JWT_SECRET
        );

        return NextResponse.json(
            { message: "User Logged in", data: userToBeReturned, token },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "User Not Found", data: { error } },
            { status: 400 }
        );
    }
}
