import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET Request - Fetch all leads
export async function GET() {
  try {
    // Fetch all leads from the database
    const leads = await prisma.lead.findMany();

    if (leads.length === 0) {
      return new Response(JSON.stringify({ message: "No leads found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return the leads in a success response
    return new Response(JSON.stringify(leads), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch leads" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// POST Request - Create a new lead
export async function POST(req) {
  try {
    const data = await req.json(); // Parse JSON request body

    // Extract fields from request
    const { fullName, email, consent } = data;

    // Validate the required fields
    if (!fullName || !email || consent === undefined) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create a new lead in the database
    const newLead = await prisma.lead.create({
      data: {
        fullName,
        email,
        consent,
      },
    });

    // Return a success response
    return new Response(JSON.stringify(newLead), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to create lead:", error);
    return new Response(JSON.stringify({ error: "Failed to create lead" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
