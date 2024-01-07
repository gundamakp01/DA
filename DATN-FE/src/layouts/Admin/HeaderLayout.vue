<script setup>

</script>

<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src="../../assets/img/logo.png" alt="logo1">
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <router-link :to="{name : 'dashboard'}" class="nav-link text-white">
                <font-awesome-icon :icon="['fas', 'table-columns']" />
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link :to="{name : 'categories'}" class="nav-link text-white">
                <font-awesome-icon :icon="['fas', 'layer-group']" />
                Categories
              </router-link>
            </li>
            <li>
              <router-link :to="{name : 'blogs'}" class="nav-link text-white">
                <font-awesome-icon :icon="['fas', 'blog']" />
                Blogs
              </router-link>
            </li>
            <li>
              <router-link :to="{name : 'orders'}" class="nav-link text-white">
                <font-awesome-icon :icon="['fas', 'cart-plus']" />
                Orders
              </router-link>
            </li>
            <li>
              <router-link :to="{name : 'products'}" class="nav-link text-white">
                <font-awesome-icon :icon="['fas', 'list']" />
                Products
              </router-link>
            </li>
            <li>
              <router-link :to="{name : 'customers'}" class="nav-link text-white">
                <font-awesome-icon :icon="['fas', 'user']" />
                Customers
              </router-link>
            </li>
            <li>
              <router-link :to="{name : 'chatbox'}" class="nav-link text-white">
                <font-awesome-icon :icon="['fas', 'comment']" />
                Chatbox
              </router-link>
            </li>
            <div class="dropdown text-end">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
              </a>
              <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>