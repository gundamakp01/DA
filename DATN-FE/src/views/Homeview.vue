<template>
  <Navbar/>
  <Home/>
  <Brands/>
  <New/>
  <Featured/>
  <Banner/>
  <Clothes/>
  <Footer/>
</template>

<script>
import Brands from "@/components/Brands.vue";
import New from "@/components/New.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import Clothes from "@/components/Clothes.vue";
import Featured from "@/components/Featured.vue";
export default {
  name: "HomeView",
  components: { Clothes, Banner, Featured, New, Home, Brands, Navbar, Footer }
}
</script>


