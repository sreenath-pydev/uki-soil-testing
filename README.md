# UKI Soil Testing – Beckn Protocol + Frontend Application

This project demonstrates a full DOFP (Discovery → Order → Fulfillment → Post-Fulfillment) journey for a farmer (Smita) using a Beckn-enabled soil testing service. It includes backend payloads simulating the Beckn protocol and a custom frontend built with React, Vite, and Tailwind CSS for farmer/buyer onboarding.

---

##  Project Objectives

- **Simulate an agriculture-based use case** using the Beckn Protocol — focusing on soil testing and service discovery.
- Provide **mock JSON API flows** between BAP (Beckn App Provider) and BPP (Beckn Provider Platform).
- Build a **modern, responsive frontend** for onboarding farmers and buyers outside the Beckn framework using React + Vite + Tailwind CSS.

---


##  Live Demo 🟢

 [Click here to view the live app](https://uki-soil-testing-git-main-sreenaths-projects-6ddb61a2.vercel.app/)

> Hosted using [Vercel](https://vercel.com) for fast, global deployment.

---

##  Part 1: Beckn Protocol Implementation (Backend)

###  Roles & Entities

- **Farmer (Smita)**: Initiates search for soil testing centers via BAP.
- **BAP**: Handles user input, search requests, selections, and orders.
- **BPP (e.g. Krishi Kendra)**: Responds with services, quotes, fulfillment options, and reports.

###  DOFP Journey

| Stage           | BAP Action       | BPP Response      |
|-----------------|------------------|-------------------|
| **Discovery**   | `search`          | `on_search`       |
| **Order**       | `select`, `init`, `confirm` | `on_select`, `on_init`, `on_confirm` |
| **Fulfillment** | `status`          | `on_status`       |
| **Post-Fulfillment** | `rating`       | `on_rating`       |

###  Included JSON Payloads

Located in: `backend/api_payloads/`

- `search.json`, `on_search.json`
- `select.json`, `on_select.json`
- `init.json`, `on_init.json`
- `confirm.json`, `on_confirm.json`
- `status.json`, `on_status.json`
- `rating.json`, `on_rating.json`

###  Assumptions & Challenges

- Static sample payloads — no live gateway.
- Geolocation hardcoded (Nashik GPS).
- Multilingual search assumed at the app level.
- Cash on delivery payment.
- No actual report generation API — simulated via URL in `on_status`.

---

##  Part 2: Frontend (Non-Beckn)

###  Objective

To simulate a basic signup and onboarding portal for farmers and buyers — no Beckn integration required.

###  Tech Stack

- **React** (for component-based UI)
- **Vite** (for fast development & build)
- **Tailwind CSS** (for utility-first styling and responsive design)

###  Pages / Components

| Page / Component     | Description                            |
|---------------------|--------------------------------------|
| `Home`              | Introduction to the soil testing service with calls-to-action |
| `SignupForm`        | Form capturing Name, Role, Phone, District/State |
| `ThankYou`          | Confirmation page after form submission |

###  Data Handling

- Frontend form submits data to Google Sheets backend or other no-code APIs.
- Optionally extendable with Node.js backend for persistent data storage.

## Flowchart Diagram: Beckn DOFP Journey
The diagram below illustrates the interaction between the Farmer, Farmer BAP, and Soil Testing BPP across the four key phases of a Beckn transaction: Discovery, Order, Fulfillment, and Post-Fulfillment.
![flowchart](https://github.com/user-attachments/assets/8c6e81a0-e3be-4d75-8f92-35697966f453)


### 1. Setup & Installation Instructions
---

##  Setup Instructions

###  Frontend (React + Vite)

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/uki-soil-testing.git
   cd uki-soil-testing/frontend
   
2.Install dependencies:

    ```bash
    npm install


3.Start the development server:

    ```bash
    npm run dev
4. Visit: http://localhost:5173

##  Future Improvements

- Add multilingual support (e.g., Hindi, Marathi).
- Enable live Beckn Gateway integration for real-time service exchange.
- Use Firebase or Supabase for dynamic form data storage.
- Implement a dashboard for BPP to manage bookings and reports.
