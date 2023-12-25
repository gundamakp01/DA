<script>
import HeaderLayout from "@/layouts/Admin/HeaderLayout.vue";
import {userStore} from "@/stores/userStore";
export default {
  components: {HeaderLayout},
  data() {
    return {

    }
  },
  created() {
  }
}
</script>

<template>
  <HeaderLayout></HeaderLayout>
  <div class="m-4">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>