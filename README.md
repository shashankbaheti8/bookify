# 🏨 Bookify - Room Booking Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Appwrite](https://img.shields.io/badge/Appwrite-Cloud-f02e65?style=for-the-badge&logo=appwrite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Bookify** is a comprehensive, full-stack room booking application designed to streamline the management and reservation of conference rooms and workspaces. Built with performance and scalability in mind, it leverages the power of Next.js 14 for the frontend and Appwrite for a robust, secure backend.

🔗 **Live Demo:** [https://bookify-ruddy.vercel.app/](https://bookify-ruddy.vercel.app/)

---

## ✨ Key Features

- **🔐 Role-Based Authentication**: Secure login and registration with distinct roles for **Admins** and **Users**.
- **🏠 Room Management**: Admins can easily create, update, and delete rooms with image uploads.
- **📅 Real-Time Availability**: Users can check room availability instantly and book slots.
- **📱 Responsive Design**: A mobile-first interface ensuring a seamless experience across all devices.
- **⚡ High Performance**: Utilizing Next.js Server Actions and Server Components for fast load times and SEO optimization.
- **� Interactive Notifications**: Instant feedback for user actions using React Toastify.
- **🛡️ Secure Storage**: Image assets are securely stored and served via Appwrite Storage.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Appwrite](https://appwrite.io/) (Auth, Database, Storage)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```bash
bookify/
├── app/                  # Next.js App Router
│   ├── actions/          # Server Actions (Auth, Room Logic)
│   ├── bookings/         # Booking pages
│   ├── rooms/            # Room listing and management
│   ├── layout.jsx        # Root layout with AuthWrapper
│   └── page.jsx          # Homepage
├── components/           # Reusable UI Components
│   ├── Header.jsx        # Navigation bar
│   ├── Footer.jsx        # Application footer
│   └── ...
├── config/               # Configuration files
│   └── appwrite.js       # Appwrite SDK client setup
├── context/              # React Context Providers
│   └── authContext.js    # Authentication state management
├── middleware.js         # Edge-compatible route protection
└── public/               # Static assets
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18+
- An [Appwrite](https://appwrite.io/) account and project.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shashankbaheti8/bookify.git
    cd bookify
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    Create a `.env.local` file in the root directory and add your Appwrite credentials:

    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
    NEXT_APPWRITE_KEY=your_api_key_with_admin_scopes
    NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=your_rooms_collection_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS=your_bookings_collection_id
    NEXT_PUBLIC_APPWRITE_ROOMS_STORAGE_BUCKET=your_storage_bucket_id
    NEXT_PUBLIC_URL=http://localhost:3000
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app.

---