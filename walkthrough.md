# Salon Management System Setup and Walkthrough

I have successfully generated the foundational Phase 1, Phase 2, and the new **Phase 3 Booking System** for your Salon Management app, including a fully customized responsive frontend (Vite+React) and a secure Spring Boot REST API for the backend. 

## Project Structure Overview
- `<WORKSPACE>/frontend`
  - React + TypeScript
  - Tailwind CSS configured with your custom dark `#212219` and light `#9ed83c` aesthetic
  - `react-i18next` for instant English to Telugu translation.
  - `UserDashboard` component that allows viewing history and executing **Razorpay Mock payments**.
- `<WORKSPACE>/backend`
  - Java 11 + Spring Boot 2.7.18
  - Spring Security with Stateless JWT token generation.
  - Robust `AppointmentController` handling double-booking prevention, `WELCOME10` coupon ingestion, and a generic Razorpay callback endpoint!

---

## 🚀 Setup & Execution Instructions

### 1. Run the Backend API
The backend works out-of-the-box using the embedded H2 database (no installation needed):

```bash
cd backend
mvnw.cmd clean spring-boot:run
```
> [!NOTE] 
> The backend server will start at `http://localhost:8080`. 

### 2. Run the Frontend App

```bash
cd frontend
# (Make sure to run npm install if you haven't after the new additions)
npm run dev -- --force
```
> [!NOTE] 
> The frontend application will start at `http://localhost:5173`. 
> Toggle the language to Telugu at the top navigation bar to see the translation in action!

---

## 🎯 Booking Features
1. Navigate to `/services`.
2. Click **Book Now**.
3. A modal appears to select a Date, Stylist, and a Coupon (Enter `WELCOME10`).
4. Upon clicking Confirm, it will book it securely connected to your user account!
5. Navigate to your **Dashboard**.
6. View your booking. Click **Pay Now (Razorpay)** to execute the secure mock transaction changing the status to `CONFIRMED`.

---

## 🔗 Latest API Endpoints 

| Endpoint | Method | Visibility | Payload Body |
|----------|--------|------------|--------------|
| `/api/appointments/book` | `POST` | Customer | `{ serviceId, date, timeSlot, stylist, coupon }` |
| `/api/appointments/me` | `GET` | Customer | *(none)* |
| `/api/appointments/{id}/pay` | `POST` | Customer | *(mock payment trigger)* |
| `/api/appointments/{id}/cancel` | `DELETE` | Customer | *(none)* |

--- 

## ☁️ Deployment Guide

### Database (Production)
1. Set up an AWS RDS MySQL database or an Aiven PostgreSQL instance.
2. In `backend/src/main/resources/application.properties`, swap the H2 properties over:
```properties
spring.datasource.url=jdbc:mysql://[RDS-ENDPOINT]:3306/salondb
spring.datasource.username=[USER]
spring.datasource.password=[PASSWORD]
spring.jpa.hibernate.ddl-auto=update
```
