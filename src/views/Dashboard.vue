<template>
  <div class="view-dashboard">
    <h2>Dashboard</h2>
    <p class="msg-welcome">
      Welcome to Mercury,
      <strong>{{ currentUser }}</strong>!
    </p>
    <div class="container-messages">
      <h3>Messages</h3>
      <p class="no-messages" v-if="messagesHaveBeenReceived && messages.length === 0">No messages to display.</p>
      <ul class="list-messages">
        <li v-for="messageObj in messages" :key="messageObj.messageId">
          <p class="message">{{ messageObj.message }}</p>
          <span class="data-message">{{ messageObj.user }} {{ messageObj.date }}<span :data-message-id="messageObj.messageId"></span></span>
        </li>
      </ul>
      <input
        type="text"
        placeholder="Type your message here"
        v-model="userMessage"
        @keyup.enter="submitMessage"
      >
      <button @click="submitMessage">Submit</button>
    </div>
  </div>
</template>

<style lang="scss">
.view-dashboard {
  .msg-welcome {
    margin-bottom: 32px;
  }

  .container-messages {
    padding: 16px;
    padding-top: 8px;
    padding-bottom: 32px;
    width: 50vw;
    min-width: 300px;
    box-shadow: 0 1px 8px #333;

    .no-messages {
      margin-bottom: 24px;
    }

    .list-messages {
      margin-bottom: 40px;
      padding: 0;
      text-align: left;

      li {
        list-style-type: none;

        .message {
          list-style-type: none;
          margin-bottom: -2px;
        }

        .data-message {
          font-size: 0.75rem;
        }
      }
    }

    input,
    button {
      display: initial;
    }
  }
}
</style>

<script>
import Firebase from "firebase";

export default {
  name: "dashboard",
  beforeMount() {
    this.currentUser = Firebase.auth().currentUser.email;

    Firebase.database()
      .ref("messages")
      .on("value", snap => {
        this.messages = [];

        const snapVal = snap.val();

        for (let messageObj in snapVal) {
          this.messages.push({
            messageId: messageObj,
            message: snapVal[messageObj].message,
            user: snapVal[messageObj].user,
            date: snapVal[messageObj].date
          });
        }

        this.messagesHaveBeenRetrieved = true;
      });
  },
  data() {
    return {
      currentUser: "",
      messages: [],
      messagesHaveBeenRetrieved: false,
      userMessage: ""
    };
  },
  methods: {
    submitMessage() {
      Firebase.database()
        .ref("messages")
        .push({
          user: this.currentUser,
          message: this.userMessage,
          date: new Date()
            .toString()
            .split(" ")
            .slice(1, 5)
            .join(" ")
        })
        .then(() => (this.userMessage = ""));
    }
  }
};
</script>
