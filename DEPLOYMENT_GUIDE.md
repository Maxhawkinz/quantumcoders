# 🚀 Deployment Guide for Skill Share Platform

## **Why Not GitHub Pages?**
GitHub Pages only supports static websites, but your platform now has:
- ✅ Database backend (MongoDB)
- ✅ API routes for authentication
- ✅ Server-side functionality

## **Recommended: Vercel Deployment (Free)**

Vercel is perfect for Next.js apps with databases and offers:
- ✅ **Free hosting** for personal projects
- ✅ **Automatic deployments** from GitHub
- ✅ **Database support** (MongoDB Atlas)
- ✅ **Custom domain** support
- ✅ **Environment variables** management

---

## **Step-by-Step Vercel Deployment**

### **Step 1: Set Up MongoDB Atlas (Production Database)**

1. **Go to [MongoDB Atlas](https://www.mongodb.com/atlas)**
2. **Create a production cluster** (free tier M0)
3. **Create database user** with read/write permissions
4. **Set network access** to allow all IPs (0.0.0.0/0)
5. **Get connection string** - you'll need this for Vercel

### **Step 2: Deploy to Vercel**

#### **Option A: Deploy via Vercel Dashboard**

1. **Go to [Vercel](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository** (`Maxhawkinz/skill-share`)
5. **Configure project settings:**
   - Framework Preset: **Next.js**
   - Root Directory: **./** (default)
   - Build Command: **npm run build**
   - Output Directory: **.next** (default)

#### **Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? skill-share
# - Directory? ./
```

### **Step 3: Configure Environment Variables**

In your Vercel dashboard:

1. **Go to your project**
2. **Click "Settings" tab**
3. **Click "Environment Variables"**
4. **Add these variables:**

```
MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/skillshare?retryWrites=true&w=majority
JWT_SECRET = your-super-secret-jwt-key-2024-nmiet-platform-secure
RAZORPAY_KEY_ID = your_razorpay_key_id
RAZORPAY_KEY_SECRET = your_razorpay_key_secret
```

### **Step 4: Deploy**

1. **Click "Deploy"** in Vercel dashboard
2. **Wait for deployment** to complete
3. **Get your live URL** (e.g., `https://skill-share-abc123.vercel.app`)

---

## **Alternative: Netlify Deployment**

If you prefer Netlify:

### **Step 1: Prepare for Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

### **Step 2: Configure Environment Variables**

In Netlify dashboard:
- Go to Site Settings → Environment Variables
- Add the same variables as Vercel

---

## **Testing Your Deployed App**

### **1. Test Registration**
- Go to your live URL
- Click "Get Started"
- Create an account with NMIET email
- Verify account creation

### **2. Test Login**
- Login with your credentials
- Verify header shows your name
- Check profile dropdown

### **3. Test Skill Submission**
- Go to "Share Your Skill"
- Fill out the form
- Submit and verify success

### **4. Test Database**
- Check MongoDB Atlas dashboard
- Verify user data is stored
- Check skills collection

---

## **Custom Domain (Optional)**

### **Vercel Custom Domain:**
1. **Go to Vercel dashboard**
2. **Click "Domains" tab**
3. **Add your domain** (e.g., `skillshare.nmiet.edu`)
4. **Configure DNS** as instructed
5. **SSL certificate** is automatic

### **Domain Configuration:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

---

## **Monitoring & Maintenance**

### **Vercel Analytics:**
- **View deployment logs**
- **Monitor performance**
- **Check error rates**
- **View usage statistics**

### **MongoDB Monitoring:**
- **Monitor database performance**
- **Check connection limits**
- **View query performance**
- **Set up alerts**

---

## **Production Checklist**

- ✅ **Environment variables** configured
- ✅ **Database** connected and working
- ✅ **Authentication** working
- ✅ **Skill submission** working
- ✅ **Custom domain** (optional)
- ✅ **SSL certificate** (automatic)
- ✅ **Error monitoring** set up

---

## **Troubleshooting**

### **Common Issues:**

1. **Build Fails:**
   - Check environment variables
   - Verify all dependencies installed
   - Check build logs in Vercel

2. **Database Connection Fails:**
   - Verify MongoDB URI
   - Check network access settings
   - Verify database user permissions

3. **Authentication Not Working:**
   - Check JWT_SECRET is set
   - Verify API routes are deployed
   - Check browser console for errors

### **Support:**
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

**Your Skill Share platform will be live and fully functional with database support!** 🎉
