import { NextResponse } from "next/server";

export async function GET() {
    const messages = process.env.ANNIVERSARY_QUIZ_ANSWERKEYS || "";

    // Split the messages by commas to get each question|answer pair
    const data = messages.split(",").map((item) => {
        // Split each pair by the pipe symbol to separate question and answer
        const [question, answer] = item.split("|");

        // Convert answer to an integer (0 or 1)
        return {
            question: question.trim(),
            answer: parseInt(answer.trim(), 10),
        };
    });

    return NextResponse.json({
        data: data
    }, { status: 200 });
}