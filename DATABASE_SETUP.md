# Database Setup Guide for Skill Share Platform

## 🗄️ Database Architecture

This guide will help you set up a complete database system for the Skill Share platform with user management, enrollment tracking, and payment processing.

## 📋 Prerequisites

1. **MongoDB Atlas Account** (or local MongoDB)
2. **Razorpay Account** for payment processing
3. **Node.js and npm** installed

## 🚀 Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install bcryptjs jsonwebtoken razorpay crypto
npm install --save-dev @types/bcryptjs @types/jsonwebtoken
```

### 2. Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillshare?retryWrites=true&w=majority

# JWT Secret (generate a strong secret)
JWT_SECRET=your-super-secret-jwt-key-here

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

### 3. MongoDB Atlas Setup

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account

2. **Create a Cluster**
   - Choose the free tier (M0)
   - Select a region close to your users
   - Create cluster

3. **Set Up Database Access**
   - Go to "Database Access"
   - Add a new database user
   - Create a strong password
   - Give "Read and write to any database" permissions

4. **Set Up Network Access**
   - Go to "Network Access"
   - Add IP address (0.0.0.0/0 for all IPs, or your specific IP)
   - Or use "Allow access from anywhere" for development

5. **Get Connection String**
   - Go to "Clusters"
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `skillshare`

### 4. Razorpay Setup

1. **Create Razorpay Account**
   - Go to [Razorpay](https://razorpay.com)
   - Sign up for a free account

2. **Get API Keys**
   - Go to Dashboard → Settings → API Keys
   - Generate API Keys
   - Copy Key ID and Key Secret

3. **Set Up Webhooks** (Optional but recommended)
   - Go to Dashboard → Settings → Webhooks
   - Add webhook URL: `https://yourdomain.com/api/payments/verify`
   - Select events: `payment.captured`
   - Copy webhook secret

## 📊 Database Schema Overview

### User Model
- **Personal Info**: email, fullName, studentId, department, academicYear
- **Verification**: isVerified, verificationStatus, verificationDocuments
- **Skills**: skills (teaching), enrolledSkills (learning)
- **Stats**: rating, totalStudents, totalEarnings
- **Activity**: badges, lastLogin, isActive

### Skill Model
- **Basic Info**: title, description, category, level, duration, price
- **Instructor**: instructor (User ID), availability, schedule
- **Content**: prerequisites, learningOutcomes, tags
- **Stats**: currentStudents, maxStudents, rating, totalRatings
- **Status**: isActive, isApproved

### Enrollment Model
- **Participants**: student, instructor, skill
- **Status**: status, paymentStatus, progress
- **Payment**: amount, currency, paymentId
- **Tracking**: attendance, assignments, certificate
- **Dates**: enrolledAt, startDate, endDate, completionDate

### Payment Model
- **Transaction**: amount, currency, status, paymentMethod
- **Gateway**: paymentGateway, gatewayPaymentId, gatewayOrderId
- **Refunds**: refundId, refundAmount, refundReason
- **Metadata**: student/instructor info, skill details

### Review Model
- **Rating**: rating (1-5), title, comment
- **Verification**: isVerified, helpful, reported
- **Relations**: enrollment, student, instructor, skill

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Skills
- `GET /api/skills` - Get all skills (with filters)
- `POST /api/skills` - Create new skill

### Enrollments
- `GET /api/enrollments` - Get enrollments (with filters)
- `POST /api/enrollments` - Create enrollment

### Payments
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment (webhook)
- `PUT /api/payments/verify` - Manual payment verification

## 💳 Payment Flow

1. **User enrolls** in a skill
2. **Create payment order** via Razorpay
3. **User pays** through Razorpay gateway
4. **Webhook verifies** payment automatically
5. **Enrollment activated** and instructor notified
6. **Instructor earnings** updated

## 🔐 Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based auth
- **Email Validation**: NMIET email domain only
- **Payment Verification**: Razorpay signature verification
- **Data Validation**: Mongoose schema validation

## 📱 Frontend Integration

### User Registration
```javascript
const response = await fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'student@nmiet.edu.in',
    password: 'password123',
    fullName: 'John Doe',
    studentId: 'NM2024001',
    department: 'Computer Engineering',
    academicYear: 'Second Year'
  })
})
```

### Skill Enrollment
```javascript
const response = await fetch('/api/enrollments', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    studentId: 'user_id',
    skillId: 'skill_id'
  })
})
```

### Payment Processing
```javascript
// Create order
const orderResponse = await fetch('/api/payments/create-order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ enrollmentId: 'enrollment_id' })
})

// Verify payment (after Razorpay success)
const verifyResponse = await fetch('/api/payments/verify', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    paymentId: 'payment_id',
    razorpayPaymentId: 'razorpay_payment_id',
    razorpayOrderId: 'razorpay_order_id',
    razorpaySignature: 'razorpay_signature'
  })
})
```

## 🚨 Important Notes

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Database Security**: Use strong passwords and limit network access
3. **Payment Security**: Always verify payments server-side
4. **Data Validation**: Validate all inputs on both client and server
5. **Error Handling**: Implement proper error handling and logging

## 🔍 Testing

1. **Test Registration**: Create test users with NMIET emails
2. **Test Skills**: Create sample skills and verify approval process
3. **Test Enrollments**: Enroll users in skills
4. **Test Payments**: Use Razorpay test mode for payment testing

## 📈 Monitoring

- **Database Performance**: Monitor query performance in MongoDB Atlas
- **Payment Logs**: Check Razorpay dashboard for transaction logs
- **Error Logs**: Monitor server logs for any issues
- **User Activity**: Track user registrations and enrollments

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check connection string format
   - Verify network access settings
   - Ensure database user has correct permissions

2. **Payment Verification Failed**
   - Check Razorpay API keys
   - Verify webhook URL and secret
   - Ensure signature verification logic

3. **JWT Token Issues**
   - Check JWT_SECRET environment variable
   - Verify token expiration settings
   - Ensure proper token format

### Support

For issues with this setup, check:
- MongoDB Atlas documentation
- Razorpay API documentation
- Next.js API routes documentation

---

**Your Skill Share platform is now ready with a complete database system!** 🎉
