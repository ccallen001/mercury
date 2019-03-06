<template>
  <div class="view-dashboard">
    <h2 class="page-name">Dashboard</h2>
    <p class="msg-welcome">
      Welcome to Mercury,
      <strong>{{ currentUserEmail }}</strong>!
    </p>
    <div class="container-messages">
      <h3>Messages</h3>
      <p
        class="no-messages"
        v-if="messagesHaveBeenRetrieved && messages.length === 0"
      >No messages to display.</p>
      <ul class="list-messages">
        <li v-for="messageObj in messages" :key="messageObj.messageId">
          <p class="message">{{ messageObj.message }}</p>
          <span class="data-message">
            {{ messageObj.user }} {{ messageObj.date }}
            <span :data-message-id="messageObj.messageId"></span>
          </span>
        </li>
      </ul>
      <div class="container-user-message">
        <input
          type="text"
          placeholder="Type your message here"
          v-model="userMessage"
          @keyup.enter="submitMessage"
        >
        <button @click="submitMessage">Submit</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.view-dashboard {  
  .msg-welcome {
    margin-bottom: 30px;
  }

  .container-messages {
    padding: 16px;
    padding-top: 8px;
    padding-bottom: 32px;
    width: 33vw;
    min-width: 304px;
    background-color: whitesmoke;
    border-radius: 4px;
    box-shadow: 0 1px 8px #333;

    .no-messages {
      margin-bottom: 24px;
    }

    ul.list-messages {
      margin-bottom: 40px;
      padding: 8px;
      padding-top: 0;
      max-height: 200px;
      background: linear-gradient(to bottom right, cornflowerblue, salmon);
      text-align: left;
      border: 1px solid #666;
      border-radius: 4px;
      overflow: auto;

      li {
        list-style-type: none;

        .message {
          list-style-type: none;
          margin-bottom: -2px;
          font-weight: bold;
        }

        .data-message {
          font-size: 0.75rem;
        }
      }
    }

    .container-user-message {
      display: flex;

      input {
        flex: auto;
      }
    }
  }
}
</style>

<script>
import Firebase from "firebase";

export default {
  name: "dashboard",
  beforeMount() {
    this.currentUserEmail = Firebase.auth().currentUser.email;

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
      currentUserEmail: "",
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
          user: this.currentUserEmail,
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
