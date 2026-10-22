# UniConnect & University Master ERP Portal

A full-fledged, multi-page campus community network and master ERP portal featuring modern LinkedIn-style social and career networking alongside an authentic Excel spreadsheet database.

## Project Architecture

### 1. Community & Career Network (`index.html`)
The main entry page featuring:
- **🏠 Home**:
  - Live feed with alumni placement celebrations, campus announcements, and student posts.
  - Interactive like counters, comment options, and post creation.
  - Profile snapshot and network stats.
- **💼 Job Posting**:
  - Direct opportunities posted by alumni working at top tech firms (Google, Amazon AWS, Meta AI, Tesla, Microsoft, Boeing).
  - Includes monthly salaries ($10,500 – $14,000/mo), locations, and interactive **Easy Apply** buttons.
- **💬 Messaging**:
  - Interactive chat interface to connect with alumni mentors (Aarav Sharma @ Google, Priya Iyer @ Microsoft, Amazon Recruiter) with real-time response simulation.
- **🔔 Notification**:
  - Live alerts for job postings, alumni connections, profile views, and ERP sync updates.
- **👤 Me**:
  - Complete personal profile card with headline, about me, skills, and direct link to the ERP record.
- **Direct Link**: Seamless button to launch the **📊 Student & Alumni ERP Portal** (`erp.html`).

### 2. Master ERP Portal (`erp.html`)
- **🎓 Student Details**: Single continuous sheet with 500 student records and multi-criteria filters (Roll No, Name, Department).
- **💼 Alumni Details**: Master directory with **1,000 Alumni records** including all Happy Exit Graduates, monthly salaries, and multi-criteria filters (Name, Department, Designation/Company).
- **🎓 Happy Exit Students Gallery**: Convocation photo cards celebrating top graduates stepping into industry careers.
- **📥 Export to CSV**: One-click download for both datasets into Microsoft Excel.
- **🏠 Navigation Bar**: One-click return back to `index.html`.

## Project Files

- [index.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/index.html) — Campus Network (Home, Jobs, Messages, Notifications, Me)
- [home.css](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/home.css) — Community network styles
- [home.js](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/home.js) — Network tab switcher, messaging simulator, job apply logic
- [erp.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/erp.html) — Master ERP spreadsheets (500 students & 1,000 alumni)
- [style.css](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/style.css) — ERP Excel styling
- [script.js](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/script.js) — 500 student & 1,000 alumni data engine

## How to View

- Open [index.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/index.html) to enter the Community Network.
- Open [erp.html](file:///C:/Users/HP/.gemini/antigravity/scratch/hello-world-website/erp.html) directly for the master ERP spreadsheet.
