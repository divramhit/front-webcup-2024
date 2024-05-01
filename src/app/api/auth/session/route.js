import { NextResponse } from "next/server";
import { getSession } from "@/actions/actions";

export async function GET(request) {
    const session = await getSession();
    return NextResponse.json(session);
}