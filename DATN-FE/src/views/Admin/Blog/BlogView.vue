<template>
  <button class="btn btn-success" @click="$router.push({name : 'createBlogs'})">Create</button>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Content</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(blog, index) in blogs" :key="index" class="align-middle">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ blog.name }}</td>
      <td><img width="100" height="80" :src="blog.image?.url" alt=""></td>
      <td>{{ blog.description }}</td>
      <td>{{ blog.content }}</td>
      <td>
        <button class="btn btn-secondary me-2" @click="$router.push(`blogs/${blog.id}/update`)">Edit</button>
        <button class="btn btn-danger" @click="destroy(blog.id)">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {BlogService} from "@/services";
import Button from "@/components/Button.vue";

export default {
  components: {Button},
  data() {
    return {
      blogs: [],
    }
  },
  mounted() {
    this.fetchBlogs()
  },
  methods: {
    async fetchBlogs() {
      const resp = await BlogService.getBlog()
      if (resp) {
        this.blogs = resp.data.data
      }
    },
    destroy(id) {
      this.$swal({
        title: "Delete this order status?",
        text: "Are you sure? You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete it!",
      }).then(async (result) => {
        if (result.value) {
          await BlogService.deleteBlog(id)
          await this.fetchBlogs()
        }
      });
    }
  }
}

</script>

<style scoped>
</style>