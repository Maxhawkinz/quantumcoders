# Skill Submission Guide

## 🎯 **How to Submit a Skill**

### **Prerequisites:**
1. ✅ **You must be logged in** (create account and login first)
2. ✅ **Your account must be verified** (complete student verification)
3. ✅ **Database must be set up** (MongoDB connection)

### **Step-by-Step Process:**

#### **1. Login to Your Account**
- Go to `http://localhost:3000/login`
- Enter your NMIET email and password
- You should see your name in the header

#### **2. Go to Share Skill Page**
- Click "Share Your Skill" button on the skills page, OR
- Go directly to `http://localhost:3000/share-skill`

#### **3. Fill Out the Skill Form**
- **Title**: e.g., "Python Programming Basics"
- **Category**: Select from dropdown (Programming, Design, etc.)
- **Level**: Beginner, Intermediate, or Advanced
- **Duration**: e.g., "6 weeks (2 hours/week)"
- **Price**: Enter amount in ₹ (e.g., 500)
- **Availability**: e.g., "Weekends, 5-7 PM"
- **Description**: Detailed description of what you'll teach
- **Tags**: e.g., "python, programming, beginner"

#### **4. Submit the Skill**
- Click "Submit Skill"
- You'll see a success message
- The skill will be saved to the database
- It will be marked as "pending approval"

### **What Happens After Submission:**

1. **✅ Skill Saved**: Your skill is stored in MongoDB
2. **✅ Pending Status**: Skill is marked as `isApproved: false`
3. **✅ Added to Your Profile**: Skill appears in your instructor profile
4. **⏳ Admin Review**: Admin can approve/reject the skill
5. **🚀 Goes Live**: Once approved, skill appears in the skills list

### **Database Storage:**

Your skill gets stored with:
```json
{
  "title": "Python Programming Basics",
  "description": "Learn Python from scratch...",
  "instructor": "your_user_id",
  "category": "coding",
  "level": "beginner",
  "duration": "6 weeks",
  "price": 500,
  "availability": "Weekends, 5-7 PM",
  "tags": ["python", "programming", "beginner"],
  "isActive": true,
  "isApproved": false,
  "currentStudents": 0,
  "maxStudents": 20
}
```

### **Testing the Flow:**

1. **Create Account**: Use `/signup` with NMIET email
2. **Login**: Use `/login` with your credentials
3. **Submit Skill**: Use `/share-skill` to create a skill
4. **Check Database**: Verify skill appears in MongoDB
5. **View Skills**: Check `/skills` page (may not show until approved)

### **Current Status:**

- ✅ **Form Validation**: All fields validated
- ✅ **Authentication**: Requires login
- ✅ **Database Storage**: Saves to MongoDB
- ✅ **User Association**: Links skill to instructor
- ✅ **Success Feedback**: Shows confirmation message

### **Next Steps:**

After skill submission works:
1. **Admin Panel**: Create admin interface to approve skills
2. **Skill Display**: Show approved skills on skills page
3. **Enrollment**: Allow students to enroll in skills
4. **Payment**: Integrate payment for skill enrollment

---

**You can now submit skills! Just make sure you're logged in first.** 🚀
