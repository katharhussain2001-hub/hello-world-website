document.addEventListener("DOMContentLoaded", () => {
  // Navigation tabs
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

  // Like interaction on posts
  const likeButtons = document.querySelectorAll(".btn-like");
  likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      const countSpan = btn.querySelector(".like-count");
      if (countSpan) {
        let count = parseInt(countSpan.textContent, 10);
        if (btn.classList.contains("liked")) {
          countSpan.textContent = count + 1;
        } else {
          countSpan.textContent = count - 1;
        }
      }
    });
  });

  // Easy Apply button handling
  const applyButtons = document.querySelectorAll(".btn-apply");
  applyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "✓ Applied";
      btn.classList.add("applied");
      btn.disabled = true;

      // Update notifications counter
      const notifBadge = document.querySelector('.nav-item[data-tab="notification"] .nav-badge');
      if (notifBadge) {
        let count = parseInt(notifBadge.textContent, 10) || 0;
        notifBadge.textContent = count + 1;
      }
    });
  });

  // Interactive Messaging Chat Simulator
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatMessages = document.getElementById("chatMessages");
  const chatUsers = document.querySelectorAll(".chat-user-item");
  const activeChatUser = document.getElementById("activeChatUser");

  // User chat switching
  chatUsers.forEach(user => {
    user.addEventListener("click", () => {
      chatUsers.forEach(u => u.classList.remove("active"));
      user.classList.add("active");
      const userName = user.querySelector(".chat-user-name").textContent;
      activeChatUser.textContent = userName;

      chatMessages.innerHTML = `
        <div class="msg-bubble msg-received">
          Hello Kathar! Great to connect with you. How can I assist you regarding tech careers or campus guidance?
        </div>
      `;
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

    // Simulate response after 800ms
    setTimeout(() => {
      const replyBubble = document.createElement("div");
      replyBubble.className = "msg-bubble msg-received";
      replyBubble.textContent = "Thanks for your message! Let's schedule a mentorship sync soon. Also check our active openings in the Job Posting tab!";
      chatMessages.appendChild(replyBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
  }

  if (sendBtn && chatInput) {
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }

  // Quick Post Creator
  const postInputMock = document.querySelector(".input-post-mock");
  if (postInputMock) {
    postInputMock.addEventListener("click", () => {
      const text = prompt("What would you like to share with the campus network?");
      if (text && text.trim()) {
        const postsContainer = document.getElementById("postsFeed");
        const newPost = document.createElement("div");
        newPost.className = "card post-card";
        newPost.innerHTML = `
          <div class="post-header">
            <span class="post-avatar">👨‍🎓</span>
            <div>
              <div class="post-author-name">Kathar Hussain (You)</div>
              <div class="post-author-headline">Computer Science & Engineering • Class of 2024</div>
              <div class="post-time">Just now • 🌐</div>
            </div>
          </div>
          <div class="post-content">${text}</div>
          <div class="post-actions-bar">
            <button class="btn-interaction btn-like" type="button">👍 Like (<span class="like-count">0</span>)</button>
            <button class="btn-interaction" type="button">💬 Comment</button>
            <button class="btn-interaction" type="button">↗ Share</button>
          </div>
        `;
        postsContainer.insertBefore(newPost, postsContainer.firstChild);
      }
    });
  }
});
