# University Job Portal & Master ERP Portal

A modern, full-featured campus networking and master ERP portal with **Role-Based Authentication (Admin, Student, Alumni)** and a clean **White & Blue SaaS UI/UX**.

## 🌐 Live Website (GitHub Pages)

👉 **[https://katharhussain2001-hub.github.io/hello-world-website/](https://katharhussain2001-hub.github.io/hello-world-website/)**

---

## 🔑 Multi-Role Authentication ([login.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/login.html))

Dedicated login portal with **1-Click Instant Demo Logins** and custom credential sign-in for three distinct roles:

1. **🛡 Administrator (`admin@university.edu`)**:
   - Access to **Admin Moderation Console** on the Home feed.
   - Oversee audit logs and verified job approvals.
   - Full master management permissions over 500 students and 1,000 alumni records.
2. **🎓 Student (`student@university.edu`)**:
   - Search tech jobs by department and category.
   - 1-Click **Easy Apply** with auto-attached resume.
   - Live **"My Applications" pipeline tracker** (*Applied → Under Review → Shortlisted → Interview → Offer*).
   - Direct access to student ERP records and convocation highlights.
3. **💼 Alumni / Recruiter (`alumni@university.edu`)**:
   - Post new jobs & referrals directly to the campus job board.
   - **Candidate Review Dashboard**: Inspect incoming student applicants, view resumes, and advance recruitment stages (*Applied → Under Review → Shortlisted → Interview → Selected / Rejected*).
   - Connect with students via mentorship chat.

---

## Key Modules

### 1. Campus Career Network (`index.html`)
- **🏠 Home**: Feed featuring placement celebrations, campus announcements, interactive like counters, and post creation dialog.
- **💼 Job Posting**: Tech career opportunities with category filters (`Software & AI`, `Hardware & Systems`, `Mechanical & Aero`), monthly salaries, and an interactive **Easy Apply** modal.
- **💬 Messaging**: Real-time chat interface with alumni mentors (*Google, Microsoft, Amazon AWS*).
- **🔔 Notification**: Live notification alerts for jobs, profile views, and connections.
- **👤 Me**: Comprehensive user profile card with skills, background, and direct ERP links.

### 2. Master ERP Portal (`erp.html`)
- **📊 Live Placement Metrics**: Active students (500), alumni placed (1,000), average salary ($12,450/mo), and highest package ($18,500/mo).
- **🎓 Student Details**: 500 complete records with multi-criteria filters (Roll No, Name, Department).
- **💼 Alumni Details**: 1,000 alumni records (featuring Happy Exit Graduates at the top with monthly salaries) and multi-criteria filters.
- **🎓 Happy Exit Students Gallery**: Convocation photo cards and placement testimonials.
- **📥 Export to CSV**: One-click download for both datasets into Excel.

---

## Files

- [login.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/login.html) — Dedicated multi-role authentication page
- [auth.js](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/auth.js) — Session management & role-based access control
- [index.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/index.html) — Main portal page with role-tailored dashboards
- [home.css](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/home.css) — White & Blue styles for the network
- [home.js](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/home.js) — Network tab, chat, job apply & candidate pipeline logic
- [erp.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/erp.html) — Master ERP spreadsheets
- [style.css](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/style.css) — White & Blue styles for the ERP system
- [script.js](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/script.js) — 500 students & 1,000 alumni data engine
