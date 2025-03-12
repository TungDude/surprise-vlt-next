import { NextResponse } from "next/server";

export async function GET() {
    const messages = process.env.ANNIVERSARY_CLOCK_PAGE || "";
    const data = messages.split(",");

    return NextResponse.json({
        data: data
    }, { status: 200 });
}