<template>
  <Navbar/>
  <section id="blog">
    <div class="container mt-5 pt-5">
      <h3 class=" pt-5">Blogs</h3>
      <hr>
      <div class="row text-center">
        <div class="d-flex flex-column align-items-center">
          <img style="height: 400px; width: 600px" :src="blog.image?.url" class="img-fluid" alt="1">
          <h4 class="text-center p-4">{{ blog.name }}</h4>
          <br>
          <h5>{{ blog.description }}</h5>
          <br>
          <br>
          <p>{{ blog.content }}</p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import {BlogService} from "@/services";

export default {
  components: { Navbar, Footer },
  data() {
    return {
      blog: {}
    }
  },
  methods: {
    async fetchBlog() {
      const resp = await BlogService.getBlogById(this.$route.params.id)
      if (resp) {
        this.blog = resp.data.data
      }
    }
  },
  mounted() {
    this.fetchBlog()
  }
}
</script>

