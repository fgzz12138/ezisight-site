import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        console.log("API KEY:", process.env.RESEND_API_KEY);
        console.log("CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL);

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: "RESEND_API_KEY is missing" },
                { status: 500 }
            );
        }

        if (!process.env.CONTACT_TO_EMAIL) {
            return NextResponse.json(
                { error: "CONTACT_TO_EMAIL is missing" },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: "Website Enquiry <onboarding@resend.dev>",
            to: [process.env.CONTACT_TO_EMAIL],
            subject: `New enquiry${subject ? `: ${subject}` : ""}`,
            replyTo: email,
            html: `
                <h2>New Enquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || "-"}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br />")}</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}