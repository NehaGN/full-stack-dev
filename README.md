This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


(or)




# Lead Booking System

## Project Overview
This is a simple lead generation and booking system built using **Next.js**, **Prisma**, and **PostgreSQL**.

## Technologies Used
- **Next.js** for the frontend and backend.
- **Prisma** as the ORM.
- **PostgreSQL** for the database.
- **Tailwind CSS** for styling.

## Installation Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/username/project-name.git
    cd project-name
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables:
   - Create a `.env` file in the root directory based on `.env.example`.
   - Add your PostgreSQL connection string.
  
4. Run database migrations:
    ```bash
    npx prisma migrate dev --name init
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

## API Endpoints

### Bookings API

- **GET** `/api/bookings`: Fetch all bookings.
- **POST** `/api/bookings`: Create a new booking.
  - Sample Request:
    ```json
    {
      "date": "2024-09-30",
      "time": "10:00 AM",
      "fullName": "Jane Doe",
      "email": "jane@example.com",
      "phone": "1234567890",
      "callNotes": "Looking for marketing consultation",
      "consent": true
    }
    ```

## Error Handling
- All API endpoints handle errors gracefully, returning appropriate HTTP status codes (e.g., `400 Bad Request`, `500 Internal Server Error`).




