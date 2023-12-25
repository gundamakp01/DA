<template>
  <button class="btn btn-success" @click="$router.push({name : 'createCategories'})">Create</button>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Parent category</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(category, index) in categories" :key="index" class="align-middle">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ category.name }}</td>
      <td><img width="100" height="80" :src="category.image?.url" alt=""></td>
      <td>{{ category.parent_id }}</td>
      <td>
        <button class="btn btn-secondary me-2" @click="$router.push(`categories/${category.id}/update`)">Edit</button>
        <button class="btn btn-danger" @click="destroy(category.id)">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {CategoryService} from "@/services";
import Button from "@/components/Button.vue";

export default {
  components: {Button},
  data() {
    return {
      categories: [],
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      const resp = await CategoryService.getCategory()
      if (resp) {
        this.categories = resp.data.data
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
          await CategoryService.deleteCategory(id)
          await this.fetchCategories()
        }
      });
    }
  }
}

</script>

<style scoped>
</style>