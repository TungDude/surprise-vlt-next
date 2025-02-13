import { NextResponse } from "next/server";

export async function GET() {
    const message = process.env.VALENTINE_MESSAGE || "";

    return NextResponse.json({
        message: message
    }, { status: 200 });
}