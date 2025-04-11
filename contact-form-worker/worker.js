export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle preflight request (OPTIONS)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Handle POST to /api/contact
    if (request.method === "POST" && url.pathname === "/api/contact") {
      try {
        const data = await request.json();
        const {
          full_name,
          email,
          phone,
          company,
          website_url,
          message,
          consent
        } = data;

        if (!full_name || !email || !message || consent !== true) {
          return new Response("Missing required fields or consent", {
            status: 400,
            headers: corsHeaders,
          });
        }

        await env.DB.prepare(
          `INSERT INTO contacts (full_name, email, phone, company, website_url, message, consent) VALUES (?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          full_name,
          email,
          phone || "",
          company || "",
          website_url || "",
          message,
          1
        ).run();

        // Optional: send email using Resend
        if (env.RESEND_API_KEY && env.NOTIFY_EMAIL) {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${env.RESEND_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              from: "Contact Form <no-reply@yourdomain.com>",
              to: env.NOTIFY_EMAIL,
              subject: "New Contact Form Submission",
              html: `
                <h3>New Submission Received</h3>
                <p><strong>Full Name:</strong> ${full_name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Website URL:</strong> ${website_url}</p>
                <p><strong>Message:</strong><br>${message}</p>
              `
            })
          });
        }

        return new Response("Message sent and stored!", {
          status: 200,
          headers: corsHeaders,
        });
      } catch (err) {
        return new Response("Server error: " + err.message, {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    return new Response("Not Found", {
      status: 404,
      headers: corsHeaders,
    });
  }
};

// CORS Headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // <-- allow all origins for now
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
