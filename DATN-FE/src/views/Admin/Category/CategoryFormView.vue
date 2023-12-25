<script>
import {CategoryService} from "@/services";

export default {
  data() {
    return {
      category: {},
      categories: [],
      url: ''
    }
  },
  methods: {
    async submit() {
      if (!this.$route.params.id) {
        const resp = await CategoryService.createCategory(this.category)
      } else {
        const resp = await CategoryService.updateCategory(this.$route.params.id, this.category)
      }
      this.$router.push({name: 'categories'})
    },
    uploadFile() {
      this.category.image = this.$refs.file.files[0];
      this.url = URL.createObjectURL(this.category.image);
    },
    async fetchCategory() {
      const resp = await CategoryService.getCategoryById(this.$route.params.id)
      if (resp) {
        this.category = resp.data.data
        this.url = this.category.image.url
      }
    },
    async fetchCategories() {
      const resp = await CategoryService.getCategory()
      if (resp) {
        this.categories = resp.data.data
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchCategory()
    }
    this.fetchCategories()
  }
}

</script>

<template>
  <form @submit.prevent="submit()">
    <div class="mb-3">
      <label>Name</label>
      <input type="text" class="form-control" v-model="category.name">
    </div>
    <div class="mb-3">
      <label>Parent category</label>
      <select class="form-select" v-model="category.parent_id">
        <option :value="category1.id" v-for="category1 in categories">{{ category1.name }}</option>
      </select>
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