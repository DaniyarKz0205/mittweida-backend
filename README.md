# Review App Backend (Node.js + TypeScript)

This is the backend for the Mittweida Day-Trip Guide. It handles feedback submitted by users from the frontend app.

---

## 🚀 How to Run the Backend

1. **Clone this repository**:
   ```bash
   git clone <this-repo-url>
   cd review-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npx ts-node src/main.ts
   ```

> ⚠️ The server runs locally on port `3000`.

---

## 📥 API Endpoint

### POST `/reviews`

Receives feedback data from the frontend and logs or stores it.

#### Sample Payload:
```json
{
  "routeId": "city-tour",
  "review": "Really enjoyed the walk!",
  "stars": 4,
  "timestamp": "2025-07-16T18:45:00Z"
}
```

---

## 🧠 Tech Stack

- Node.js
- TypeScript
- ts-node
- Express (if applicable)

---

## 🌐 Use with Frontend

You must also clone and run the frontend repo:  
👉 [Mittweida Guide](https://github.com/DaniyarKz0205/mittweida-frontend)

Make sure both frontend and backend are on the same local network.

---
