<script>
import {ProductService} from "@/services";

export default {
  data() {
    return {
      product: {
        images: []
      },
      urls: [],
    }
  },
  methods: {
    async submit() {
      if (!this.$route.params.id) {
        const resp = await ProductService.createProduct(this.product)
      } else {
        const resp = await ProductService.updateProduct(this.$route.params.id, this.product)
      }
      this.$router.push({name: 'products'})
    },
    uploadFile() {
      const selectedFiles = this.$refs.file.files;
      this.product.images = [];
      this.urls = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const url = URL.createObjectURL(file);
        this.product.images?.push(file)
        this.urls.push(url);
      }
    },
    async fetchProduct() {
      const resp = await ProductService.getProductById(this.$route.params.id)
      if (resp) {
        this.product = resp.data.data
        this.urls = this.product.image.map(x => x.url)
        this.product.images = this.product.image.map(x => x.url)
        this.product.price = this.product?.price?.replace(/,/g, '')
        this.product.color = this.product?.color?.join(",");
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchProduct()
    }
  }
}

</script>

<template>
  <form @submit.prevent="submit()">
    <div class="mb-3">
      <label>Name</label>
      <input type="text" class="form-control" v-model="product.name">
    </div>
    <div class="mb-3">
      <label class="form-label">Price</label>
      <input type="text" class="form-control" v-model="product.price">
    </div>
    <div class="mb-3">
      <label class="form-label">Color</label>
      <input type="text" class="form-control" v-model="product.color">
    </div>
    <div class="row mb-3">
      <div class="col-3">
        <label class="form-label">size s</label>
        <input type="text" class="form-control" v-model="product.size_s">
      </div>
      <div class="col-3">
        <label class="form-label">size m</label>
        <input type="text" class="form-control" v-model="product.size_m">
      </div>
      <div class="col-3">
        <label class="form-label">size l</label>
        <input type="text" class="form-control" v-model="product.size_l">
      </div>
      <div class="col-3">
        <label class="form-label">size xl</label>
        <input type="text" class="form-control" v-model="product.size_xl">
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Description</label>
      <textarea class="form-control" v-model="product.description"></textarea>
    </div>
    <div class="mb-3">
      <label for="formFile" class="form-label">Image</label>
      <input multiple class="form-control" type="file" id="formFile" ref="file" @change="uploadFile">
      <div>
        <img v-for="url in urls" class="mt-2 me-2 border" width="120" height="100" v-if="urls" :src="url" alt="">
      </div>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary me-2">Submit</button>
      <button type="button" class="btn btn-secondary" @click="$router.back()">Back</button>
    </div>
  </form>
</template>

<style scoped>

</style>