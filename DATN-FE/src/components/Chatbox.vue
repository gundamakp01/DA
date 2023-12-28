<template>
  <div class="chatbox-wrapper">
    <div class="chatbox-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="chatbox-icon" viewBox="0 0 512 512">
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
      </svg>
    </div>
    <div class="chatbox-message-wrapper">
      <div class="chatbox-message-header">
        <div class="chatbox-message-profile">
          <img
            src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png  "
            alt="" class="chatbox-message-image" />
          <div>
            <h4 class="chatbox-message-name">Admin</h4>
            <p class="chatbox-message-status">
              <span class="online-dot"></span>online
            </p>
          </div>
        </div>
        <div class="chatbox-message-dropdown">
          <i class="bx bx-dots-vertical-rounded chatbox-message-dropdown-toggle"></i>
          <ul class="chatbox-message-dropdown-menu">
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Report</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="chatbox-message-content">
        <h4 class="chatbox-message-no-message">You don't have message yet!</h4>
        <div v-for="message in messages" :key="message.id"
          :class="`chatbox-message-item ${message.senderId == 1 ? 'received' : 'sent'}`">
          <span class="chatbox-message-item-text">{{ message.content }}</span>
          <span class="chatbox-message-item-time">{{ message.timestamp }}</span>
        </div>
      </div>
      <div class="chatbox-message-bottom">
        <form action="#" class="chatbox-message-form">
          <textarea rows="1" placeholder="Type message..." class="chatbox-message-input"></textarea>
          <button type="submit" class="chatbox-message-submit">
            <svg class="xsrhx6k" height="20px" viewBox="0 0 24 24" width="20px">
              <path
                d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z">
              </path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
let chatboxMessageWrapper;
let chatboxNoMessage;
let chatboxForm;
import { userStore } from "@/stores/userStore";
import { ChatService } from "@/services";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
Pusher.logToConsole = true;

var pusher = new Pusher("d26d4469335093847d19", {
  cluster: "ap1",
});

export default {
  data() {
    return {
      messages: [],
      userId: userStore().user.id
    };
  },
  methods: {
    addZero(num) {
      return num < 10 ? "0" + num : num;
    },

    async writeMessage(textarea) {
      var formatMessage = textarea.value.trim().replace(/\n/g, "<br>\n");
      const admin_id = 1;
      var data = {
        message: formatMessage,
        user_id: admin_id,
      };
      await ChatService.createChat(data);
      const today = new Date();
      let message = `
            <div style="
                width: 90%;
                padding: 1rem;
                align-self: flex-end;
                background: #fb774b;
                color: #FFF;
                border-radius: .75rem 0 .75rem .75rem;">
            <span class="chatbox-message-item-text">
            	${formatMessage}
            </span>
            <span class="chatbox-message-item-time" 
                style="float: right;
                font-size: .75rem;
                margin-top: .5rem;
                display: inline-block;">
                ${this.addZero(today.getHours())}:${this.addZero(
        today.getMinutes()
      )}</span>
            </div>`;
      chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
      chatboxForm.style.alignItems = "center";
      textarea.rows = 1;
      textarea.focus();
      textarea.value = "";
      chatboxNoMessage.style.display = "none";
      this.scrollBottom();
    },

    autoReply(data) {
      const today = new Date();
      let message = `
		<div style="
                width: 90%;
                padding: 1rem;
                background: #FFF;
                border-radius: 0 .75rem .75rem .75rem;
                box-shadow: .25rem .25rem 1.5rem rgba(0, 0, 0, .05);">
			<span class="chatbox-message-item-text">
				${data}
			</span>
			<span 
                style="float: right;
                font-size: .75rem;
                margin-top: .5rem;
                display: inline-block;">
                    ${this.addZero(today.getHours())}:${this.addZero(
        today.getMinutes()
      )}</span>
		</div>`;
      chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
      this.scrollBottom();
    },

    scrollBottom() {
      chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
    },

    isValid(value) {
      let text = value.replace(/\n/g, "");
      text = text.replace(/\s/g, "");

      return text.length > 0;
    },
    async getChat() {
      const response = await ChatService.getChat()
      this.messages = response.data.data.conversation
    }
  },
  watch: {
    userId: function (val) {
      if (!val) {
        const dropdownMenu = self.$el.querySelector(
          ".chatbox-message-dropdown-menu"
        );
        dropdownMenu.classList.remove("show");
      }
    },
  },
  mounted() {
    const self = this;
    self.getChat();
    var channel = pusher.subscribe(`chat.${userStore().user.id}`);
    channel.bind("chat-event", function (data) {
      if (data.conversation.send !== userStore().user.id) {
        self.autoReply(data.conversation.content);
      }
    });
    const textarea = self.$el.querySelector(".chatbox-message-input");
    chatboxForm = self.$el.querySelector(".chatbox-message-form");

    textarea.addEventListener("input", function () {
      let line = textarea.value.split("\n").length;

      if (textarea.rows < 6 || line < 6) {
        textarea.rows = line;
      }

      if (textarea.rows > 1) {
        chatboxForm.style.alignItems = "flex-end";
      } else {
        chatboxForm.style.alignItems = "center";
      }
    });

    // TOGGLE CHATBOX
    var chatboxToggle = self.$el.querySelector(".chatbox-toggle");
    var chatboxMessage = self.$el.querySelector(".chatbox-message-wrapper");

    chatboxToggle.addEventListener("click", async function () {
      chatboxMessage.classList.toggle("show");
      const response = await ChatService.getChat()
      self.messages = response.data.data.conversation
    });

    // DROPDOWN TOGGLE
    const dropdownToggle = self.$el.querySelector(
      ".chatbox-message-dropdown-toggle"
    );
    const dropdownMenu = self.$el.querySelector(
      ".chatbox-message-dropdown-menu"
    );

    dropdownToggle.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show");
    });

    self.$el.addEventListener("click", function (e) {
      if (
        !e.target.matches(
          ".chatbox-message-dropdown, .chatbox-message-dropdown *"
        )
      ) {
        dropdownMenu.classList.remove("show");
      }
    });

    // CHATBOX MESSAGE
    chatboxMessageWrapper = self.$el.querySelector(".chatbox-message-content");
    chatboxNoMessage = self.$el.querySelector(".chatbox-message-no-message");
    chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);

    chatboxForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let text = textarea.value.replace(/\n/g, "");
      text = text.replace(/\s/g, "");

      if (text.length > 0) {
        self.writeMessage(textarea);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(90deg, var(--grey) 31px, transparent 1px) 50%,
    linear-gradient(180deg, var(--grey) 31px, var(--blue) 1px) 50%;
  background-size: 32px 32px;
  color: #222;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* GLOBAL STYLES */

/* CHATBOX */
.chatbox-wrapper {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
}

.chatbox-toggle {
  width: 100%;
  height: 100%;
  background: #fb774b;
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}

.chatbox-toggle:active {
  transform: scale(0.9);
}

.chatbox-message-wrapper {
  position: absolute;
  bottom: calc(100% + 1rem);
  right: 0;
  width: 420px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.1);
  transform: scale(0);
  transform-origin: bottom right;
  transition: 0.2s;
}

.chatbox-message-wrapper.show {
  transform: scale(1);
}

.chatbox-message-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0.75rem 1.5rem;
}

.chatbox-message-profile {
  display: flex;
  align-items: center;
  grid-gap: 0.5rem;
}

.chatbox-message-image {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
}

.chatbox-message-name {
  font-size: 1.125rem;
  font-weight: 600;
}

.chatbox-message-status {
  font-size: 0.875rem;
  color: #888;
}

.chatbox-message-dropdown {
  position: relative;
}

.chatbox-message-dropdown-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 50%;
}

.chatbox-message-dropdown-toggle:hover {
  background: #f5f5f5;
}

.chatbox-message-dropdown-menu {
  list-style: none;
  margin: 0;
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  padding: 0.5rem 0;
  width: 120px;
  box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
  transform: scale(0);
  transform-origin: top right;
  transition: 0.2s;
  border-radius: 0.5rem;
}

.chatbox-message-dropdown-menu.show {
  transform: scale(1);
}

.chatbox-message-dropdown-menu a {
  font-size: 0.875rem;
  font-weight: 500;
  color: #222;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
}

.chatbox-message-dropdown-menu a:hover {
  background: #f5f5f5;
}

.chatbox-message-content {
  background: #f5f5f5;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  grid-row-gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
}

.chatbox-message-item {
  width: 90%;
  padding: 1rem;
}

.chatbox-message-item.sent {
  align-self: flex-end;
  background: #fb774b;
  color: #fff;
  border-radius: 0.75rem 0 0.75rem 0.75rem;
}

.chatbox-message-item.received {
  width: 90%;
  padding: 1rem;
  background: #FFF;
  border-radius: 0 .75rem .75rem .75rem;
  box-shadow: .25rem .25rem 1.5rem rgba(0, 0, 0, .05);
}

.chatbox-message-item-time {
  float: right;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  display: inline-block;
}

.chatbox-message-bottom {
  background: #fff;
  padding: 0.75rem 1.5rem;
}

.chatbox-message-form {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 0.5rem;
  padding: 0.5rem 1.25rem;
}

.chatbox-message-input {
  background: transparent;
  outline: none;
  border: none;
  resize: none;
  scrollbar-width: none;
}

.chatbox-message-input::-webkit-scrollbar {
  display: none;
}

.chatbox-message-submit {
  font-size: 1.25rem;
  color: #fb774b;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.chatbox-message-no-message {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}

.chatbox-icon {
  color: #fff;
  font-size: 24px;
}

.online-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #31a24c;
  /* Màu xanh của Facebook */
  border-radius: 50%;
  margin-right: 5px;
  /* Khoảng cách giữa chấm xanh và văn bản */
}

/* CHATBOX */

/* BREAKPOINTS */
@media screen and (max-width: 576px) {
  .chatbox-message-wrapper {
    width: calc(100vw - 2rem);
  }

  .chatbox-wrapper {
    bottom: 1rem;
    right: 1rem;
  }
}

/* BREAKPOINTS */
</style>
