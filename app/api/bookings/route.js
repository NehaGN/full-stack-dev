import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all bookings from the database
    const bookings = await prisma.booking.findMany();
    
    // If no bookings are found
    if (bookings.length === 0) {
      return new Response(JSON.stringify({ message: "No bookings found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return the bookings in a success response
    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch bookings" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const data = await req.json(); // Parse JSON request body

    // Extract fields from request
    const { date, time, fullName, email, phone, callNotes, consent } = data;

    // Validate the required fields
    if (!date || !time || !fullName || !email || !phone) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create a new booking
    const booking = await prisma.booking.create({
      data: {
        date: new Date(date), // Ensure date is converted correctly
        time,
        fullName,
        email,
        phone,
        callNotes,
        consent,
      },
    });

    // Return a success response
    return new Response(JSON.stringify(booking), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to create booking:", error);
    return new Response(JSON.stringify({ error: "Failed to create booking" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
