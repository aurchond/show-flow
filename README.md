# 📺 TV Show Tracker

A modern, responsive web app to track your favorite TV shows — built with **React**, **TypeScript**, and powered by a full serverless AWS backend.

---

## 🚀 Features

- ✅ Browse and track your favorite shows
- ✅ Secure user authentication via AWS Cognito
- ✅ Responsive and performant frontend powered by Vite + TailwindCSS
- ✅ Fast and scalable backend built with AWS services like Lambda, API Gateway, and DynamoDB

---

## 🧱 Frontend Overview

### ⚛ React + TypeScript

- Modular component-based architecture
- Built using React 19 with TypeScript
- Error boundaries and `Suspense` for smooth UX
- Custom hooks and reusable UI components

### 🧭 Routing

- Powered by `react-router-dom` v7
- URL parameter handling and nested routes
- Protected routes for authenticated users

### 📦 State Management

- Server state handled via `@tanstack/react-query`
- Optimistic updates and caching
- Local UI state via `useState` and context patterns

---

## ☁ AWS Architecture

| Service         | Purpose                                       |
| --------------- | --------------------------------------------- |
| **Route 53**    | DNS and domain routing                        |
| **CloudFront**  | CDN and SSL termination                       |
| **S3**          | Static site hosting and asset storage         |
| **API Gateway** | Entry point for all API calls                 |
| **Cognito**     | Authentication and user management            |
| **Lambda**      | Serverless compute for all backend logic      |
| **DynamoDB**    | NoSQL database for storing user and show data |

---

## 🛠 Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start local dev server via Vite        |
| `npm run build`   | Type-check and build production bundle |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint on the project              |

---

## 📦 Tech Stack

- **React 19**, **React DOM**
- **TypeScript**
- **Vite** (build + dev tooling)
- **TailwindCSS**
- **React Query** for data fetching
- **React Router DOM** v7
- **Headless UI** for accessible UI primitives
- **Axios** for HTTP requests
- **ESLint** with TypeScript support

---

## 🧪 Dev Setup

1. Clone the repo:
   ```bash
   git clone git@github.com:aurchond/show-tracker.git
   cd show-tracker
   ```
