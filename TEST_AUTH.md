# Authentication System Test Guide

## 🧪 **How to Test the Database Authentication**

### **Step 1: Set Up Environment Variables**

Create a `.env.local` file in your project root:

```env
# Database - Replace with your MongoDB connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillshare?retryWrites=true&w=majority

# JWT Secret
JWT_SECRET=skillshare-super-secret-jwt-key-2024-nmiet-platform-secure

# Razorpay (for payments later)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### **Step 2: Install Dependencies**

```bash
npm install
```

### **Step 3: Start the Server**

```bash
npm run dev
```

### **Step 4: Test Registration**

1. Go to `http://localhost:3000/signup`
2. Fill out the form with:
   - **Name**: Your full name
   - **Email**: `test@nmiet.edu.in` (must end with @nmiet.edu.in)
   - **Password**: Any password (min 6 characters)
   - **Student ID**: `NM2024001`
   - **Department**: Select any department
   - **Academic Year**: Select any year
3. Click "Create Account"

**What happens:**
- ✅ Password gets hashed with bcrypt
- ✅ User data gets stored in MongoDB
- ✅ Success message appears
- ✅ Redirects to login page

### **Step 5: Test Login**

1. Go to `http://localhost:3000/login`
2. Enter the same email and password
3. Click "Login"

**What happens:**
- ✅ System checks email in database
- ✅ Compares password with hashed version
- ✅ Creates JWT token
- ✅ Stores token in localStorage
- ✅ Header shows your name and profile icon
- ✅ Dropdown menu appears with logout option

### **Step 6: Verify Database Storage**

Check your MongoDB Atlas dashboard:
1. Go to your cluster
2. Click "Browse Collections"
3. Look for the `users` collection
4. You should see your user document with:
   - `email`: "test@nmiet.edu.in"
   - `password`: Hashed string (not plain text)
   - `fullName`, `studentId`, `department`, etc.

## 🔍 **What the System Does**

### **Registration Process:**
1. **Validates** NMIET email format
2. **Hashes** password with bcrypt (12 salt rounds)
3. **Stores** user in MongoDB
4. **Returns** success message

### **Login Process:**
1. **Finds** user by email in database
2. **Compares** password with hashed version
3. **Creates** JWT token (7-day expiry)
4. **Stores** token in localStorage
5. **Updates** user's lastLogin timestamp

### **Authentication State:**
- **Header** shows user name and profile icon when logged in
- **Profile dropdown** shows email, student ID, and logout option
- **Token** persists across browser sessions
- **Automatic logout** when token expires

## 🚨 **Security Features**

- ✅ **Password Hashing**: bcrypt with 12 salt rounds
- ✅ **JWT Tokens**: Secure token-based authentication
- ✅ **Email Validation**: Only @nmiet.edu.in emails allowed
- ✅ **Input Validation**: Server-side validation for all fields
- ✅ **Token Expiry**: 7-day token expiration
- ✅ **Secure Storage**: Tokens stored in localStorage

## 🐛 **Troubleshooting**

### **If registration fails:**
- Check MongoDB connection string
- Ensure all required fields are filled
- Verify email ends with @nmiet.edu.in

### **If login fails:**
- Check if user exists in database
- Verify password is correct
- Check browser console for errors

### **If header doesn't update:**
- Check if AuthProvider is wrapping the app
- Verify localStorage has token
- Check browser console for errors

## 📱 **Frontend Integration**

The authentication system is fully integrated:

- **Signup Page**: Uses `useAuth().register()`
- **Login Page**: Uses `useAuth().login()`
- **Header**: Uses `useAuth().user` and `useAuth().logout()`
- **Protected Routes**: Can use `useAuth().user` to check login status

## 🎯 **Next Steps**

After authentication works:
1. **Test skill creation** (requires login)
2. **Test enrollment** (requires login)
3. **Test payment flow** (requires login)
4. **Add protected routes** for user-specific pages

---

**Your authentication system is ready! The database will store passwords securely and handle login validation automatically.** 🚀
