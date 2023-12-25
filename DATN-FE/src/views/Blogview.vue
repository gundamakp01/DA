<template>
    <Navbar/>
    <section id="blog">
        <div class="container mt-5 pt-5">
            <h3 class=" pt-5">Blogs</h3>
            <hr>
            <div class="row">
                  <router-link v-for="blog in blogs" :to="{path : `blog/${blog.id}`}" class="col-md-6 col-12">
                    <img style="height: 400px" :src="blog.image?.url" class="img-fluid w-100" alt="1">
                    <h4 class="text-center p-4 text-decoration-none">{{ blog.name }}</h4>
                  </router-link>
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
    name: "blogview",
    components: { Navbar, Footer },
  data() {
      return {
        blogs: []
      }
  },
  methods: {
    async fetchBlogs() {
      const resp = await BlogService.getBlog()
      if (resp) {
        this.blogs = resp.data.data
      }
    }
  },
  mounted() {
      this.fetchBlogs()
  }
}
</script>

