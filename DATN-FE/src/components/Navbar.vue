<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand py-2" aria-current="page">
                <img src="../assets/logonew1xoaphong.png" alt="logo1" width="220">
            </router-link>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon top-bar"></span>
                <span class="navbar-toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-3  ms-sm-auto align-items-start align-items-sm-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link " aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item pt-5 pb-5" @mouseover="upHere = true" @mouseleave="upHere = false">
                        <div href="/collections/san-pham" title="Shop">
                            Shop
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" x="0" y="0"
                                viewBox="0 0 128 128">
                                <g>
                                    <path
                                        d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div :class="`menuList-submain multicolumn ${upHere ? 'menu-visible' : 'menu-hidden'}`"
                            @mouseover="upHere = true" @mouseleave="upHere = false">
                            <div class="multicolumn-container-new">
                                <router-link v-for="category in categories" class="itemMegaMenu" :to="`/categories/${category.id}`">
                                    <img :src="category.image?.url"
                                        alt="Đầm" height="230" width="230">
                                    <div>{{ category.name }}</div>
                                </router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link " aria-current="page">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link " aria-current="page">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact-us" class="nav-link " aria-current="page">Contact Us
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link p-0" aria-current="page">
                            <i class="fa fa-shopping-cart position-relative">
                                <span :class="count_length == 0 ? 'd-none' : 'd-inline-block'" class=" badge">
                                    {{ count_length }}
                                </span>
                            </i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown" v-if="user?.id">
                            <button class="btn button_1 dropdown-toggle d-flex justify-content-between align-items-center"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="d-inline" v-if="!photo">
                                    <i class="fa fa-user me-2"></i>
                                </div>
                                <div class="d-inline" v-else>
                                    <img class="userPhoto me-2" :src="photo" alt="userPhoto">
                                </div>
                                <p class="d-inline mb-0">{{ userStore().user?.name }}</p>
                            </button>
                            <ul class="dropdown-menu p-0" style="cursor: pointer;">
                                <li><a class="dropdown-item" @click="Logout">Log Out</a></li>
                                <li><a class="dropdown-item" @click="editProfile">Edit Profile</a></li>
                            </ul>
                        </div>
                        <router-link to="/login" class="nav-link " aria-current="page" v-else>
                            <button class="button_1 px-3" type="button">
                                <i class="fa fa-user me-2"></i>
                                Login
                            </button>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { userStore } from "@/stores/userStore";
import { LoginService, CategoryService } from "@/services";

export default {
    name: 'Navbar',
    data() {
        return {
            upHere: false,
            user: userStore().user,
            categories: []
        }
    },
    methods: {
        userStore,
        async Logout() {
            const resp = await LoginService.logout();
            localStorage.removeItem('__TOKEN');
            localStorage.removeItem('user');
            userStore().user = null;
            this.$router.push('/login');
        },
        async editProfile()
        {
            this.$router.push('/edit-profile');
        },
        async fetchCategories()
        {
            const resp = await CategoryService.getCategory()
            if (resp) {
            console.log(resp)
                this.categories = resp.data.data
            }
        }
    },
    created() {
        this.fetchCategories()
    }
}
</script>
<style lang="css">
.multicolumn {
    padding: 25px 0;
    left: 0;
    right: 0;
    max-height: 75vh;
    overflow-x: hidden;
    overflow-y: auto;
}

.menuList-submain {
    background: #fff;
    min-width: 230px;
    max-width: 180%;
    padding: 12px 0;
    position: absolute;
    z-index: 99;
    top: 150%;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.menu-visible {
    pointer-events: auto;
    visibility: visible;
    top: 100%;
    opacity: 1;
}

.menu-hidden {
    top: 150%;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
}

.multicolumn-container-new {
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
}

.multicolumn-container-new .itemMegaMenu {
    width: calc(100% / 4);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #121212;
}

.img {
    max-width: 100%;
}

span {
    margin: 5px 0 0 0;
}

.navbar {
    padding: 0 !important;
}
</style>
 