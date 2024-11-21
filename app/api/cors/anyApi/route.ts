import { NextResponse, NextRequest } from "next/server";
import serverSideApiCall from "@/services/generate/server-index"; // Assuming the function is saved here

export async function GET(req: NextRequest) {
  try {
    // Access query parameters from the incoming request
    const searchParams = req.nextUrl.searchParams;

    // Extract parameters from query string
    const base = searchParams.get("base");
    const to = searchParams.get("to");

    // Prepare params for the API call (this could be expanded as needed)
    const params = {
      base,
      to,
      amount: 1, // Static parameter for the amount
      apiKey: process.env.NEXT_PUBLIC_ANY_API_IO, // Your API key
    };

    // If 'base' is provided in query params, pass it to the API call
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_ANY_API_BASE_URL;

    // Make the API call dynamically
    const ApiCall = await serverSideApiCall(
      `/api/v1/exchange/convert`, // Endpoint URL
      "GET", // HTTP Method
      {}, // No body data for GET
      {}, // Headers (if any)
      params, // Query parameters for the API call
      apiBaseUrl // Base URL (optional)
    );

    return NextResponse.json(ApiCall);
  } catch (err: any) {
    console.log("Error:", err);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
