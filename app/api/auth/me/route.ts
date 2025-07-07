import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    console.log("Cookie " , cookieHeader)
    const backendResponse = await axios.get(
      `${process.env.SERVER_URL}/api/auth/me`,
      {
        headers: {
          Cookie: cookieHeader, // ✅ forward cookie to backend
        },
        withCredentials: true,
      }
    );

    return NextResponse.json(backendResponse.data, {
      status: backendResponse.status,
    });
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.error || "Internal error";

    const res = NextResponse.json({ error: error }, { status });

    // 🔥 Clear cookie if token is invalid or expired (401)
    if (status === 401) {
      res.headers.set(
        "set-cookie",
        "token=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax"
      );
    }

    return res;
  }
}
