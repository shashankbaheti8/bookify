Thanks! Based on your earlier feature list and preferences, here's a **detailed, crisp, and professional GitHub README** for your **Room Booking Web App**:

---

# 🏨 Room Booking Web App

A full-stack, role-based room booking platform built with **Next.js**, **React**, and **Appwrite**, offering real-time availability, user authentication, and image uploads. Designed to simplify room management and streamline the booking experience for users and admins.

🔗 **Live App:**
➡️ [https://your-app.vercel.app](https://your-app.vercel.app) *(replace with actual URL)*

---

## ✨ Features

* 🔐 User authentication with role-based access (admin, user)
* 🏠 Browse, view, and book available rooms
* 🖼 Upload and display room images via Appwrite storage
* 📅 Check availability and manage bookings
* ⚙️ Admin-only room creation and deletion
* 📬 React Toast notifications for user feedback
* 📌 Responsive UI with TailwindCSS
* 🌐 Fully deployed on Vercel (frontend) and Appwrite cloud backend

---

## 🛠 Tech Stack

| Frontend        | Backend/Auth       | DevOps / Services |
| --------------- | ------------------ | ----------------- |
| Next.js + React | Appwrite           | Vercel            |
| Tailwind CSS    | Appwrite Functions | Appwrite (Cloud)  |
| React Toastify  | JWT Auth           | GitHub            |

---

## 🧠 Architecture Overview

### 🔐 Authentication & Route Protection

* Users and admins are authenticated using Appwrite’s session-based auth.
* Middleware and global context ensure protected routes based on user roles.

### 📦 Room & Booking Management

* Room data is stored in Appwrite collections with attributes like title, description, price, and availability.
* Users can book available rooms and view/cancel bookings from a dedicated "My Rooms" dashboard.

### 🖼 Image Upload

* Admins can upload images to Appwrite Storage when adding new rooms.
* Images are retrieved and displayed on the single room detail page.

---

## 🚀 Deployment

### ✅ Frontend (Vercel)

* Deployed to Vercel with environment variables for backend base URL and Appwrite config.

### ✅ Backend (Appwrite)

* Collections: Rooms, Users, Bookings
* Functions: Check availability, Book room, Cancel booking
* Permissions: Fine-grained access for read/write based on role

---

## 🧪 Challenges & Learnings

### 🔄 Route Protection with Middleware

Learned how to secure dynamic pages and redirect unauthorized users using Next.js middleware and global auth context.

### 🧰 Appwrite Integration

Gained deep experience working with Appwrite’s Database, Storage, and Auth modules, and managing secure client sessions.

### 📷 File Upload & Storage

Handled image uploads and optimized image rendering from Appwrite's buckets while managing file permissions programmatically.

---

## 📝 Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/your-username/room-booking-app.git
cd room-booking-app
```

2. Add your `.env` with:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=...
NEXT_PUBLIC_APPWRITE_PROJECT_ID=...
NEXT_PUBLIC_APPWRITE_DATABASE_ID=...
NEXT_PUBLIC_APPWRITE_COLLECTION_ID=...
```

3. Install and run:

```bash
npm install
npm run dev
```