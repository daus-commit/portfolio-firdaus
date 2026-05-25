import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const serviceId  = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey  = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return new NextResponse("Please configure the EmailJS env variables", {
      status: 500,
    });
  }

  try {
    const body = await req.json();
    const { name, email, number, subject, message, social } = body;

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id:  serviceId,
        template_id: templateId,
        user_id:     publicKey,
        accessToken: privateKey,
        template_params: {
          name,
          from_email: email,
          phone:      number || 'Tidak diberikan',
          subject:    subject || "Tiada subjek",
          message,
          social:     social  || "Tiada",
          time:       new Date().toLocaleString("ms-MY"),
        },
      }),
    });

    const responseText = await response.text();
    console.log("EmailJS status:", response.status);
    console.log("EmailJS response:", responseText);

    if (!response.ok) {
      return new NextResponse(responseText, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Internal error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}