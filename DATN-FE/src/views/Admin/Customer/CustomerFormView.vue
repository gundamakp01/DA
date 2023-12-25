<script>
import {UserService} from "@/services";

export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    async submit() {
      if (!this.$route.params.id) {
        const resp = await UserService.createUser(this.user)
      } else {
        const resp = await UserService.updateUser(this.$route.params.id, this.user)
      }
      this.$router.push({name: 'customers'})
    },
    async fetchUser() {
      const resp = await UserService.getUserById(this.$route.params.id)
      if (resp) {
        this.user = resp.data.data
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchUser()
    }
  }
}

</script>

<template>
  <form @submit.prevent="submit()">
    <div class="mb-3">
      <label>Name</label>
      <input type="text" class="form-control" v-model="user.name">
    </div>
    <div class="mb-3">
      <label>Email</label>
      <input type="text" class="form-control" v-model="user.email">
    </div>
    <div class="mb-3">
      <label>Phone</label>
      <input type="text" class="form-control" v-model="user.phone_number">
    </div>
    <div class="mb-3">
      <label>Address</label>
      <input type="text" class="form-control" v-model="user.address">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary me-2">Submit</button>
      <button type="button" class="btn btn-secondary" @click="$router.back()">Back</button>
    </div>
  </form>
</template>

<style scoped>

</style>