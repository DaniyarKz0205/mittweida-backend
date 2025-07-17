# Review App Backend (Node.js + NestJS + TypeScript)

This is the backend for the Mittweida Day-Trip Guide. It handles feedback submitted by users from the frontend app and provides a REST API documented via Swagger.

---

## 🚀 How to Run the Backend

1. **Clone this repository**:
   ```bash
   git clone https://github.com/DaniyarKz0205/mittweida-backend.git
   cd mittweida-backend


2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the server**:

   ```bash
   npm run start
   ```

> ⚠️ The server runs locally on port `3000`.

---

## 📥 API Endpoints

Available endpoints for managing user feedback:

* `POST /reviews` – Create a new review
* `GET /reviews` – Get all reviews
* `PUT /reviews/:id` – Update a review by ID
* `DELETE /reviews/:id` – Delete a review by ID

You can interact with the API via the Swagger UI:

👉 [http://localhost:3000/api](http://localhost:3000/api)

#### Sample Payload:

```json
{
  "routeId": "city-tour",
  "review": "Really enjoyed the walk!",
  "stars": 4
}
```

---

## 🧠 Tech Stack

* Node.js
* NestJS
* TypeScript
* Swagger
* `class-validator`
* JSON file storage (temporary, for demo purposes)

---

## 🌐 Use with Frontend

You must also clone and run the frontend repo:
👉 [Mittweida Guide Frontend](https://github.com/DaniyarKz0205/mittweida-frontend)

Make sure both frontend and backend run on the same local network or environment.
