import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("✅ Login request reached Next Backend");

    const backendResponse = await axios.post(
      `${process.env.SERVER_URL}/api/auth/login`,
      body,
      {
        withCredentials: true,
      }
    );

    const res = NextResponse.json(backendResponse.data, {
      status: backendResponse.status,
    });

    // ✅ Forward Set-Cookie header(s)
    const setCookieHeader = backendResponse.headers["set-cookie"];
    if (setCookieHeader) {
      if (Array.isArray(setCookieHeader)) {
        for (const cookie of setCookieHeader) {
          res.headers.append("set-cookie", cookie);
        }
      } else {
        res.headers.set("set-cookie", setCookieHeader);
      }
    }

    return res;
  } catch (error: any) {
    const message = error.response?.data?.error || "Internal error";
    const status = error.response?.status || 500;

    console.error("❌ Login Proxy Error:", message);
    return NextResponse.json({ error: message }, { status });
  }
}
