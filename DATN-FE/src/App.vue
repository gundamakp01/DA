<script>
import { userStore } from "@/stores/userStore";
import Loading from "@/components/Loading.vue";
import { watch } from "vue";
import Chatbox from "./components/Chatbox.vue";
export default {
  name: "App",
  data() {
    return {
      isLoading: userStore().isLoading,
      user: userStore().user,
      isShow: false
    };
  },
  components: {
    Loading,
    Chatbox,
  },
  mounted() {
    watch(
      () => userStore().isLoading,
      (newVal) => {
        this.isLoading = newVal;
      }
    );
  },
};
</script>

<template>
  <div>
    <Loading :loading="isLoading"></Loading>
    <router-view></router-view>
    <Chatbox v-if="user?.name && user?.role === 1"/>
  </div>
</template>

<style scoped></style>
