# 🚀 Skill Share - NMIET College Platform

> **By [Maxhawkinz](https://github.com/Maxhawkinz)** | A modern, engaging, and immersive website for a College-Only Student Platform at NMIET.

[![GitHub](https://img.shields.io/badge/GitHub-Maxhawkinz-blue?style=for-the-badge&logo=github)](https://github.com/Maxhawkinz)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## ✨ **New Features Added!**

### 🆕 **Community & Discussion Forums**
- **Interactive Discussions**: Start conversations, ask questions, share knowledge
- **Study Groups**: Form and join study groups for various subjects
- **Workshop Announcements**: Share and discover free workshops
- **Real-time Comments**: Engage with fellow students through comments and likes

### 🏆 **Gamification & Badges System**
- **Achievement Badges**: Earn badges for learning, teaching, and community participation
- **Progress Tracking**: Monitor your completion rate and total points
- **Rarity Levels**: Common, Rare, Epic, and Legendary badges
- **Leaderboards**: Compete with friends and see who's most active

### 🔐 **Enhanced Authentication**
- **NMIET Email Validation**: Only @nmiet.edu emails allowed
- **Secure Student Verification**: Built-in verification system
- **Profile Management**: Complete student profiles with skills and achievements

---

## 🌟 **Core Platform Features**

### **Skill Sharing Section**
- Students can offer lessons in coding, drawing, languages, music, and more
- Browse lessons by category, skill level, or popularity
- Student profiles with bio, skills, availability, and ratings
- Booking/enrollment system with optional chat for coordination

### **Second-Hand Marketplace**
- Students can list items for sale (books, gadgets, stationery, etc.)
- Search and filter items by category, price, or condition
- Secure communication for buying/selling between verified students
- Price comparison and discount calculations

### **Community & Engagement**
- Discussion forums with trending, recent, and popular tabs
- Reviews and testimonials to encourage interaction
- Gamification: badges for active skill sharers, learners, and traders
- Notifications for new lessons, items, or messages

---

## 🛠️ **Tech Stack**

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React, Heroicons
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Authentication**: Firebase (ready for integration)
- **Database**: Firebase Firestore (ready for integration)

---

## 📱 **Pages & Components**

### **Pages**
- **Homepage**: Hero section, features, stats, testimonials
- **Skills**: Browse and search for available lessons
- **Marketplace**: Buy and sell second-hand items
- **Community**: Discussion forums and student interactions ✨ **NEW!**
- **Badges**: Gamification and achievements system ✨ **NEW!**

### **Components**
- **Header**: Navigation and authentication
- **Footer**: Links and company information
- **AuthModal**: Login and registration forms
- **SkillCard**: Individual skill offerings
- **ItemCard**: Marketplace item listings
- **CategoryFilter**: Filter by categories
- **FeatureCard**: Platform features showcase
- **StatsCard**: Platform statistics
- **TestimonialCard**: Student reviews

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Maxhawkinz/skill-share.git
   cd skill-share
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**

```bash
npm run build
npm start
```

---

## 🌐 **GitHub Pages Deployment**

### **Automatic Deployment**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Skill Share Platform"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/docs" folder
   - Click "Save"

3. **Build and Deploy**
   ```bash
   npm run build
   npm run export
   # Copy .next/out to docs/ folder
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### **Manual Deployment**

```bash
# Build the project
npm run build

# Export static files
npm run export

# Copy to docs folder for GitHub Pages
cp -r .next/out/* docs/

# Commit and push
git add docs/
git commit -m "Update GitHub Pages deployment"
git push origin main
```

---

## 🔧 **Configuration**

### **Environment Variables**
Create a `.env.local` file in the root directory:

```env
# Firebase Configuration (for production)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### **GitHub Pages Configuration**
Add this to your `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  // For GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/skill-share' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/skill-share' : '',
}

module.exports = nextConfig
```

---

## 🎨 **Design System**

### **Colors**
- **Primary**: Blue gradient (#3B82F6 to #1D4ED8)
- **Secondary**: Purple gradient (#D946EF to #A21CAF)
- **Accent**: Yellow gradient (#FACC15 to #CA8A04)

### **Typography**
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Medium weight, readable

### **Components**
- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, hover animations
- **Forms**: Clean inputs with focus states
- **Animations**: Smooth transitions, hover effects

---

## 📱 **Responsive Design**

The platform is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized layouts for all screen sizes

---

## 🔐 **Authentication**

### **Student Verification**
- Only @nmiet.edu email addresses are accepted
- Secure password requirements
- Profile creation with student information
- Verification system for college students

### **Security Features**
- Password hashing (Firebase Auth)
- Secure session management
- Input validation and sanitization
- CSRF protection

---

## 🚀 **Deployment Options**

### **GitHub Pages (Recommended)**
- Free hosting
- Automatic deployment from main branch
- Custom domain support
- Perfect for student projects

### **Vercel**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### **Other Platforms**
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Connect repository and configure build settings

---

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **NMIET**: For providing the platform requirements
- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons

---

## 📞 **Support**

For support and questions:
- **GitHub Issues**: [Create an issue](https://github.com/Maxhawkinz/skill-share/issues)
- **Email**: support@skillshare.nmiet.edu
- **Phone**: +91 20 1234 5678
- **Location**: NMIET Campus, Pune

---

## 🌟 **Live Demo**

Visit the live platform: [https://maxhawkinz.github.io/skill-share](https://maxhawkinz.github.io/skill-share)

---

**Made with ❤️ by [Maxhawkinz](https://github.com/Maxhawkinz) for NMIET students**
