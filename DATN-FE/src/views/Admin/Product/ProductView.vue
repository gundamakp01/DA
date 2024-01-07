<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <select class="form-select" v-model="categoryId" width="500">
        <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
      </select>
      <select class="form-select" v-model="subCategoryId" width="500" v-if="subCategories != []">
        <option :value="category.id" v-for="category in subCategories">{{ category.name }}</option>
      </select>
    </div>
    <button class="btn btn-success" @click="$router.push({ name: 'createProducts' })">Create</button>
  </div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="index" class="align-middle">
        <th scope="row">{{ pagination.from + index }}</th>
        <td>{{ product.name }}</td>
        <td><img width="100" height="80" :src="product.image?.url" alt=""></td>
        <td>{{ product.price }}</td>
        <td>
          <button class="btn btn-secondary me-2" @click="$router.push(`Products/${product.id}/update`)">Edit</button>
          <button class="btn btn-danger" @click="destroy(product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-if="pagination.current_page > 1">
          <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">Previous</a>
        </li>
        <li class="page-item" v-for="page in pagination.last_page" :key="page"
          :class="{ 'active': page === pagination.current_page }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" v-if="pagination.current_page < pagination.per_page">
          <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ProductService, CategoryService } from "@/services";
import Button from "@/components/Button.vue";

export default {
  components: { Button },
  data() {
    return {
      products: [],
      pagination: {},
      categories: [],
      categoryId: 1,
      page: 1,
      subCategories: [],
      subCategoryId: null
    }
  },
  mounted() {
    this.fetchCategories()
    this.fetchProducts()
    this.fetchSubCategories();
  },
  methods: {
    async fetchCategories() {
      const resp = await CategoryService.getCategory()
      if (resp) {
        this.categories = resp.data.data
      }
    },
    async fetchProducts() {
      const resp = await ProductService.getProductByCategoryId(this.subCategoryId ?? this.categoryId, {
        page: this.page
      });
      if (resp) {
        this.products = resp.data.data.products
        this.pagination = resp.data.data.pagination
      }
    },
    async fetchSubCategories() {
      const resp = await CategoryService.getProductByCategoryId(this.categoryId);
      if (resp) {
        this.subCategories = resp.data.data;
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
          await ProductService.deleteProduct(id)
          await this.fetchProducts()
        }
      });
    },
    changePage(page) {
      this.page = page
      this.fetchProducts()
    },
  },
  watch: {
    // whenever question changes, this function will run
    categoryId: function (newVal) {
      this.fetchProducts();
      this.fetchSubCategories();
    },
    subCategoryId: function (newVal) {
      this.fetchProducts();
    }
  },
}

</script>

<style scoped></style>