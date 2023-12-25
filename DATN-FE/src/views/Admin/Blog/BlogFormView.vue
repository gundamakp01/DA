<script>
import {BlogService} from "@/services";

export default {
  data() {
    return {
      blog: {},
      url: ''
    }
  },
  methods: {
    async submit() {
      if (!this.$route.params.id) {
        const resp = await BlogService.createBlog(this.blog)
      } else {
        const resp = await BlogService.updateBlog(this.$route.params.id, this.blog)
      }
      this.$router.push({name: 'blogs'})
    },
    uploadFile() {
      this.blog.image = this.$refs.file.files[0];
      this.url = URL.createObjectURL(this.blog.image);
    },
    async fetchBlog() {
      const resp = await BlogService.getBlogById(this.$route.params.id)
      if (resp) {
        this.blog = resp.data.data
        this.url = this.blog.image.url
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchBlog()
    }
  }
}

</script>

<template>
  <form @submit.prevent="submit()">
    <div class="mb-3">
      <label>Name</label>
      <input type="text" class="form-control" v-model="blog.name">
    </div>
    <div class="mb-3">
      <label>Description</label>
      <input type="text" class="form-control" v-model="blog.description">
    </div>
    <div class="mb-3">
      <label>Content</label>
      <input type="text" class="form-control" v-model="blog.content">
    </div>
    <div class="mb-3">
      <label for="formFile" class="form-label">Image</label>
      <input class="form-control" type="file" id="formFile" ref="file" @change="uploadFile">
      <img class="mt-2 border" width="120" height="100" v-if="url" :src="url" alt="">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary me-2">Submit</button>
      <button type="button" class="btn btn-secondary" @click="$router.back()">Back</button>
    </div>
  </form>
</template>

<style scoped>

</style>