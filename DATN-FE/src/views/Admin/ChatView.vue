<template>
  <Chat :theme="theme" :username="username" />
</template>

<script>
import Chat from "@/components/Chat.vue";
import { ref } from "vue";
const theme = ref("light");
const users = [
  {
    username: "b2a6da08-88bf-4778-b993-7234e6d8a3ff",
    name: "Joni",
  },
  {
    username: "abc4264d-f1b1-41c0-b4cc-1e9daadfc893",
    name: "Penelope",
  },
  {
    username: "c6f75947-af48-4893-a78e-0e0b9bd68580",
    name: "Julie",
  },
  {
    username: "2989c53a-d0c5-4222-af8d-fbf7b0c74ec6",
    name: "Paxton",
  },
  {
    username: "8fadc920-f3e6-49ff-9398-1e58b3dc44dd",
    name: "Zaria",
  },
];
const username = ref(users[Math.floor(Math.random() * users.length)].username);
export default {
  name: "chat",
  components: { Chat },
};
</script>
<style lang="css"></style>
