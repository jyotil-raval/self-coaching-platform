# API Specifications - Self-Coaching Platform

## 1. Base URLs

| Environment | Base URL              |
| ----------- | --------------------- |
| Local       | http://localhost:4000 |
| Staging     | TBD                   |
| Production  | TBD                   |

---

## 2. Auth Service

### 2.1 Login / OAuth

```
POST /auth/login
Body: { "email": "user@example.com
", "password": "*****" }
Response: { "token": "jwt-token" }

POST /auth/oauth
Body: { "provider": "google|icloud|outlook", "code": "oauth-code" }
Response: { "token": "jwt-token" }
```

### 2.2 OTP / 2FA

```
POST /auth/otp
Body: { "email": "user@example.com" }
Response: { "status": "otp-sent" }
```

---

## 3. Chat Service

### 3.1 Send Prompt

```
POST /chat
Headers: Authorization: Bearer <token>
Body: {
"provider": "openai|copilot|gemini",
"prompt": "Explain TypeScript interfaces",
"system": "role instructions",
"options": { "temperature": 0.7 }
}
Response: {
"response": "TypeScript interfaces are ..."
}
```

### 3.2 Streaming Response

```
GET /chat/stream?promptId=xyz
Headers: Authorization: Bearer <token>
```

---

## 4. Templates & History

```
GET /templates
GET /history
POST /templates
POST /history
```

---

## 5. Error Codes

| Code | Description                  |
| ---- | ---------------------------- |
| 400  | Bad request                  |
| 401  | Unauthorized / Invalid token |
| 403  | Forbidden                    |
| 404  | Not found                    |
| 500  | Internal server error        |
