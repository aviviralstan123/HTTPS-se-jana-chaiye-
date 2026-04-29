# Viralstan System (CRM + CMS + Billing)

A professional, production-ready system for Digital Marketing Agencies.

## 📁 Project Structure
- `client admin/`: Frontend Admin Dashboard (React + Vite + Shadcn).
- `client-website/`: Public facing agency website.
- `server/`: Production-ready Express.js backend.
- `database/`: MySQL schema and connection logic.
- `docs/`: System documentation.

## 🚀 Getting Started

### 1. Database Setup (MySQL)
1. Create a database named `viralstan_db`.
2. Import the schema:
   ```bash
   mysql -u root -p viralstan_db < database/schema.sql
   ```
3. (Optional) Import dummy data:
   ```bash
   mysql -u root -p viralstan_db < database/seed.sql
   ```

### 2. Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your MySQL and Email credentials
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the client folder:
   ```bash
   cd "client admin"
   ```
2. Install dependencies and start:
   ```bash
   npm install
   ```

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js, MySQL (Raw Queries).
- **Security:** JWT (Access/Refresh Tokens), Bcrypt, Helmet, Rate Limiting.
- **Utils:** Nodemailer (Emails), PDFKit (Invoices), Multer (Uploads).
- **Validation:** Joi.

## 📖 Documentation
- [API Documentation](docs/API_DOCUMENTATION.md)
- [Backend Structure](docs/BACKEND_STRUCTURE.md)
- [Database Design](docs/DATABASE_DESIGN.md)
