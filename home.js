document.addEventListener("DOMContentLoaded", () => {
  // --- TOAST NOTIFICATION UTILITY ---
  function showToast(message, icon = "✓") {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Retrieve active authenticated user from auth.js
  const currentUser = typeof getCurrentUser === "function" ? getCurrentUser() : {
    name: "Kathar Hussain",
    role: "student",
    roleLabel: "🎓 Student",
    title: "Computer Science & Engineering • Class of 2024",
    avatar: "👨‍💻"
  };

  // Sync Profile Card with active user
  const profileName = document.querySelector(".user-name");
  const profileRole = document.querySelector(".user-role");
  const profileAvatar = document.querySelector(".profile-avatar-wrap span");
  if (profileName) profileName.textContent = currentUser.name;
  if (profileRole) profileRole.textContent = currentUser.title;
  if (profileAvatar) profileAvatar.textContent = currentUser.avatar;

  // Role-specific sections visibility
  const adminPanel = document.getElementById("adminModerationPanel");
  const alumniPostJobBtn = document.getElementById("alumniPostJobBtn");
  const applicantReviewSection = document.getElementById("applicantReviewSection");
  const studentApplicationsTracker = document.getElementById("studentApplicationsTracker");

  if (currentUser.role === "admin") {
    if (adminPanel) adminPanel.style.display = "block";
    if (alumniPostJobBtn) alumniPostJobBtn.style.display = "inline-flex";
    if (applicantReviewSection) applicantReviewSection.style.display = "block";
  } else if (currentUser.role === "alumni") {
    if (alumniPostJobBtn) alumniPostJobBtn.style.display = "inline-flex";
    if (applicantReviewSection) applicantReviewSection.style.display = "block";
    if (adminPanel) adminPanel.style.display = "none";
  } else {
    // Student
    if (adminPanel) adminPanel.style.display = "none";
    if (alumniPostJobBtn) alumniPostJobBtn.style.display = "none";
    if (applicantReviewSection) applicantReviewSection.style.display = "none";
    if (studentApplicationsTracker) studentApplicationsTracker.style.display = "block";
  }

  // --- TAB NAVIGATION (Home, Jobs, Messaging, Notification, Me) ---
  const navItems = document.querySelectorAll(".nav-item[data-tab]");
  const tabViews = document.querySelectorAll(".tab-view");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetTab = item.dataset.tab;

      navItems.forEach(nav => nav.classList.remove("active"));
      tabViews.forEach(view => view.classList.remove("active"));

      item.classList.add("active");
      const targetView = document.getElementById(`${targetTab}View`);
      if (targetView) {
        targetView.classList.add("active");
      }
    });
  });

  // --- LIKE INTERACTION ON POSTS ---
  document.addEventListener("click", (e) => {
    const likeBtn = e.target.closest(".btn-like");
    if (likeBtn) {
      likeBtn.classList.toggle("liked");
      const countSpan = likeBtn.querySelector(".like-count");
      if (countSpan) {
        let count = parseInt(countSpan.textContent, 10);
        if (likeBtn.classList.contains("liked")) {
          countSpan.textContent = count + 1;
          showToast("You liked this post!", "👍");
        } else {
          countSpan.textContent = count - 1;
        }
      }
    }
  });

  // --- JOB FILTER PILLS ---
  const filterPills = document.querySelectorAll(".job-filter-pill");
  const jobCards = document.querySelectorAll(".job-card");

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const category = pill.dataset.filter;
      jobCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
      showToast(`Showing ${pill.textContent} opportunities`, "💼");
    });
  });

  // --- EASY APPLY MODAL ---
  const applyModal = document.getElementById("applyModal");
  const modalJobTitle = document.getElementById("modalJobTitle");
  const modalJobCompany = document.getElementById("modalJobCompany");
  const modalCandidateName = document.getElementById("modalCandidateName");
  const confirmApplyBtn = document.getElementById("confirmApplyBtn");
  const closeApplyModal = document.getElementById("closeApplyModal");
  let currentTargetJobBtn = null;

  document.addEventListener("click", (e) => {
    const applyBtn = e.target.closest(".btn-apply");
    if (applyBtn && !applyBtn.classList.contains("applied")) {
      currentTargetJobBtn = applyBtn;
      const jobCard = applyBtn.closest(".job-card");
      const role = jobCard.querySelector(".job-role").textContent;
      const comp = jobCard.querySelector(".job-company").textContent;

      modalJobTitle.textContent = role;
      modalJobCompany.textContent = comp;
      if (modalCandidateName) modalCandidateName.textContent = currentUser.name;
      applyModal.classList.add("open");
    }
  });

  if (closeApplyModal) {
    closeApplyModal.addEventListener("click", () => applyModal.classList.remove("open"));
  }

  if (confirmApplyBtn) {
    confirmApplyBtn.addEventListener("click", () => {
      if (currentTargetJobBtn) {
        currentTargetJobBtn.textContent = "✓ Applied";
        currentTargetJobBtn.classList.add("applied");
        currentTargetJobBtn.disabled = true;

        applyModal.classList.remove("open");
        showToast("Application submitted successfully to " + modalJobTitle.textContent, "🎉");

        // Add to Student Applications tracker live
        const appList = document.getElementById("myApplicationsList");
        if (appList) {
          const item = document.createElement("div");
          item.className = "app-item";
          item.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 8px;";
          item.innerHTML = `
            <div>
              <div style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">${modalJobTitle.textContent}</div>
              <div style="font-size: 0.8rem; color: #2563eb;">${modalJobCompany.textContent} • Submitted Just Now</div>
            </div>
            <span style="background: #fef3c7; color: #92400e; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 9999px;">Under Review</span>
          `;
          appList.insertBefore(item, appList.firstChild);
        }

        // Bump notification badge
        const notifBadge = document.querySelector('.nav-item[data-tab="notification"] .nav-badge');
        if (notifBadge) {
          let count = parseInt(notifBadge.textContent, 10) || 0;
          notifBadge.textContent = count + 1;
        }
      }
    });
  }

  // --- RECRUITER / ALUMNI POST NEW JOB MODAL ---
  const newJobModal = document.getElementById("newJobModal");
  const openNewJobBtn = document.getElementById("alumniPostJobBtn");
  const closeNewJobModal = document.getElementById("closeNewJobModal");
  const submitNewJobBtn = document.getElementById("submitNewJobBtn");

  if (openNewJobBtn && newJobModal) {
    openNewJobBtn.addEventListener("click", () => {
      newJobModal.classList.add("open");
    });
  }

  if (closeNewJobModal && newJobModal) {
    closeNewJobModal.addEventListener("click", () => {
      newJobModal.classList.remove("open");
    });
  }

  if (submitNewJobBtn) {
    submitNewJobBtn.addEventListener("click", () => {
      const title = document.getElementById("newJobTitle").value.trim();
      const comp = document.getElementById("newJobCompany").value.trim();
      const sal = document.getElementById("newJobSalary").value.trim() || "$11,500 / month";
      const cat = document.getElementById("newJobCategory").value;

      if (!title || !comp) {
        showToast("Please enter job title and company", "⚠️");
        return;
      }

      const jobsList = document.querySelector(".jobs-list");
      const card = document.createElement("div");
      card.className = "job-card";
      card.dataset.category = cat;
      card.innerHTML = `
        <div>
          <div class="job-role">${title}</div>
          <div class="job-company">${comp} • University Campus Hiring</div>
          <div class="job-meta">
            <span>Posted by: ${currentUser.name}</span>
            <span>• Full-time</span>
            <span>• Just Now</span>
          </div>
        </div>
        <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
          <span class="job-salary-badge">${sal}</span>
          <button class="btn-apply" type="button">Easy Apply</button>
        </div>
      `;
      jobsList.insertBefore(card, jobsList.firstChild);

      newJobModal.classList.remove("open");
      showToast("New job posting published live to portal!", "💼");
    });
  }

  // --- CANDIDATE PIPELINE STAGE CHANGER (Recruiter / Alumni Feature) ---
  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("stage-selector")) {
      const newStage = e.target.value;
      const candidateName = e.target.dataset.candidate;
      showToast(`${candidateName}'s application stage updated to: ${newStage}`, "📋");
    }
  });

  // --- CREATE POST MODAL ---
  const postModal = document.getElementById("postModal");
  const openPostModalBtn = document.getElementById("openPostModalBtn");
  const closePostModal = document.getElementById("closePostModal");
  const submitPostBtn = document.getElementById("submitPostBtn");
  const postTextarea = document.getElementById("postTextarea");

  if (openPostModalBtn) {
    openPostModalBtn.addEventListener("click", () => {
      postModal.classList.add("open");
      postTextarea.focus();
    });
  }

  if (closePostModal) {
    closePostModal.addEventListener("click", () => postModal.classList.remove("open"));
  }

  if (submitPostBtn) {
    submitPostBtn.addEventListener("click", () => {
      const text = postTextarea.value.trim();
      if (!text) return;

      const postsContainer = document.getElementById("postsFeed");
      const newPost = document.createElement("article");
      newPost.className = "card post-card";
      newPost.innerHTML = `
        <div class="post-header">
          <span class="post-avatar">${currentUser.avatar}</span>
          <div>
            <div class="post-author-name">${currentUser.name} ★</div>
            <div class="post-author-headline">${currentUser.title}</div>
            <div class="post-time">Just now • 🌐</div>
          </div>
        </div>
        <div class="post-content">${text}</div>
        <div class="post-actions-bar">
          <button class="btn-interaction btn-like" type="button">👍 Like (<span class="like-count">0</span>)</button>
          <button class="btn-interaction" type="button">💬 Comment (0)</button>
          <button class="btn-interaction" type="button">↗ Repost</button>
          <button class="btn-interaction" type="button">✈ Send</button>
        </div>
      `;
      postsContainer.insertBefore(newPost, postsContainer.firstChild);

      postTextarea.value = "";
      postModal.classList.remove("open");
      showToast("Your post has been published to the campus feed!", "🚀");
    });
  }

  // Close modals on overlay background click
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      e.target.classList.remove("open");
    }
  });

  // --- INTERACTIVE MESSAGING CHAT SIMULATOR ---
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatMessages = document.getElementById("chatMessages");
  const chatUsers = document.querySelectorAll(".chat-user-item");
  const activeChatUser = document.getElementById("activeChatUser");

  chatUsers.forEach(user => {
    user.addEventListener("click", () => {
      chatUsers.forEach(u => u.classList.remove("active"));
      user.classList.add("active");
      const userName = user.querySelector(".chat-user-name").textContent;
      activeChatUser.textContent = userName;

      chatMessages.innerHTML = `
        <div class="msg-bubble msg-received">
          Hello ${currentUser.name}! Great to connect with you. How can I assist you regarding tech careers or campus guidance?
        </div>
      `;
      showToast(`Chat opened with ${userName}`, "💬");
    });
  });

  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    const sentBubble = document.createElement("div");
    sentBubble.className = "msg-bubble msg-sent";
    sentBubble.textContent = text;
    chatMessages.appendChild(sentBubble);
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      const replies = [
        "That's great! Let's schedule a 15-minute mentorship sync this week.",
        "Impressive project! I'd recommend reviewing distributed systems design for the technical rounds.",
        "Feel free to submit your application on the Job Posting tab—I can review your referral internally!"
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      const replyBubble = document.createElement("div");
      replyBubble.className = "msg-bubble msg-received";
      replyBubble.textContent = randomReply;
      chatMessages.appendChild(replyBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      showToast("New message received", "💬");
    }, 900);
  }

  if (sendBtn && chatInput) {
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }
});
