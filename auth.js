// University Job Portal & ERP - Shared Authentication & Role-Based Access Control

const DEMO_USERS = {
  admin: {
    id: "ADM-001",
    name: "Dr. Sarah Jenkins",
    email: "admin@university.edu",
    role: "admin",
    roleLabel: "🛡 Administrator",
    title: "University Director & System Admin",
    avatar: "👩‍💼",
    department: "Executive Academic Council",
    badgeColor: "#7c3aed"
  },
  student: {
    id: "24CS101",
    name: "Kathar Hussain",
    email: "student@university.edu",
    role: "student",
    roleLabel: "🎓 Student",
    title: "Computer Science & Engineering • Class of 2024",
    avatar: "👨‍💻",
    department: "Computer Science & Engineering",
    badgeColor: "#2563eb"
  },
  alumni: {
    id: "ALUM-2024-001",
    name: "Aarav Sharma",
    email: "alumni@university.edu",
    role: "alumni",
    roleLabel: "💼 Alumni / Recruiter",
    title: "Senior SWE @ Google • Class of 2024 Alum",
    avatar: "👨‍🎓",
    department: "Computer Science & Engineering",
    company: "Google",
    badgeColor: "#0284c7"
  }
};

// Retrieve current logged-in user
function getCurrentUser() {
  const stored = localStorage.getItem("u_portal_user");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Invalid session", e);
    }
  }
  // Default to Student Kathar Hussain if no prior session exists
  return DEMO_USERS.student;
}

// Log in as a role or credentials
function loginUser(roleKey, customData = null) {
  const user = customData || DEMO_USERS[roleKey] || DEMO_USERS.student;
  localStorage.setItem("u_portal_user", JSON.stringify(user));
  return user;
}

// Log out user
function logoutUser() {
  localStorage.removeItem("u_portal_user");
  window.location.href = "login.html";
}

// Dynamically render the user session bar into the navbar
function renderAuthNavbar() {
  const user = getCurrentUser();
  const navRight = document.querySelector(".nav-right");
  if (!navRight) return;

  // Check if session widget already exists
  let authWidget = document.getElementById("navAuthWidget");
  if (!authWidget) {
    authWidget = document.createElement("div");
    authWidget.id = "navAuthWidget";
    authWidget.style.display = "flex";
    authWidget.style.alignItems = "center";
    authWidget.style.gap = "12px";
    navRight.appendChild(authWidget);
  }

  authWidget.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px; background: #eff6ff; padding: 4px 12px 4px 6px; border-radius: 9999px; border: 1px solid #bfdbfe;">
      <span style="font-size: 1.4rem;">${user.avatar}</span>
      <div style="display: flex; flex-direction: column; line-height: 1.2;">
        <span style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">${user.name}</span>
        <span style="font-size: 0.68rem; font-weight: 700; color: ${user.badgeColor};">${user.roleLabel}</span>
      </div>
    </div>
    <a href="login.html" title="Switch User Role / Sign In" style="text-decoration: none; font-size: 0.8rem; font-weight: 600; color: #2563eb; background: #ffffff; border: 1px solid #cbd5e1; padding: 6px 12px; border-radius: 6px; transition: all 0.2s ease;">
      ⇄ Switch Role
    </a>
    <button id="logoutBtn" type="button" title="Sign Out" style="background: transparent; border: 1px solid #ef4444; color: #ef4444; font-size: 0.8rem; font-weight: 600; padding: 6px 12px; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
      Sign Out
    </button>
  `;

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutUser();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderAuthNavbar();
});
