import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const passcodeString = process.env.PASSCODE || "";
    const passcodes: Record<string, string> = Object.fromEntries(
        passcodeString.split(",").map(entry => entry.split(":"))
    );

    try {
        const { code } = await req.json();
        const isValid = Object.keys(passcodes).includes(code);

        return NextResponse.json({ 
            valid: isValid, 
            route: isValid ? passcodes[code] : "", 
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ 
            valid: false, 
            error: error, 
        }, { status: 400 });
    }
}