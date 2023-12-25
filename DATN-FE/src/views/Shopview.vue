<template>
    <Navbar />
    <section id="featured" class="pt-5">
        <div class="container mt-5 pt-5">
            <h3>{{ category.name }}</h3>
            <hr class="mx-2">
            <ul class="menuCollection">
                <li v-for="category in categories"><span @click="category_id = category.id">{{ category.name }} </span></li>
            </ul>
        </div>
        <div class="row mx-auto container">
            <Product v-if="products.length > 0" :products="products" />
            <div v-else>Chưa có sản phẩm nào trong danh mục này</div>
        </div>
        <div class="see-more-product d-flex" v-if="page < pagination.last_page">
            <span @click="page++" class="button btnlight btn-see-more">Xem thêm <strong>Đầm</strong></span>
        </div>
    </section>
    <Footer />
</template>
  
<script>
import Product from '../components/Product.vue';
// import { useProductStore } from '@/stores/ProductStore';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ProductService } from '../services';
import { CategoryService } from '../services';
// const productStore = useProductStore();

export default {
    name: 'ShopView',
    components: {
        Product,
        Navbar,
        Footer
    },
    data() {
        return {
            card_class: 'col-lg-3 col-md-6',
            id: 1,
            category_id: this.$route.params.id,
            Product_name: 'Dam',
            products: [],
            categories: [],
            category: {},
            page: 1,
            pagination: {}
            // Product_list: productStore.data.filter((product) => product.category == 'shop'),
        }
    },
    methods: {
        async fetchProduct() {
            const resp = await ProductService.getProductByCategoryId(this.category_id, { page: this.page });
            if (resp) {
                this.products = [
                    ...this.products,
                    ...resp.data.data.products
                ]
                this.pagination = resp.data.data.pagination
            }
        },
        async fetchCategoryByParentId() {
            const resp = await CategoryService.getProductByCategoryId(this.category_id);
            if (resp) {
                this.categories = resp.data.data;
            }
        },
        async fetchCategoryById() {
            const resp = await CategoryService.getCategoryById(this.category_id);
            if (resp) {
                this.category = resp.data.data;
            }
        }
    },
    created() {
        this.fetchProduct();
        this.fetchCategoryById(this.category_id);
        this.fetchCategoryByParentId();
    },
    watch: {
        '$route.params.id': {
            handler: function (search) {
                this.category_id = this.$route.params.id
                this.products = [];
                this.fetchCategoryById(this.category_id);
                this.fetchCategoryByParentId();
                this.fetchProduct();
            },
            deep: true,
            immediate: true
        },
        category_id: function (val) {
            this.products = [];
            this.fetchProduct();
        },
        page: function (val) {
            this.fetchProduct();
        },
    }


}
</script>
<style lang="css">
.menuCollection {
    display: flex;
    margin: 0 0 30px 0;
}

.menuCollection a {
    display: inherit;
    line-height: 10px;
    font-size: 15px;
}

.menuCollection li~li {
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1px solid #c3c3c3;
}

ul,
ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
}

span {
    color: var(--shop-color-text);
    cursor: pointer;
}

.button.btnlight {
    background: #fff;
    color: #000000;
    border: 1px solid #000000;
}

.button.btn-see-more {
    min-width: 400px;
    display: block;
    margin: 0 auto;
}

.button {
    position: relative;
    display: inline-block;
    z-index: 1;
    overflow: hidden;
    background-color: var(--shop-color-button);
    color: var(--shop-color-button-text);
    padding: 12px 12px;
    border: 0;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    -webkit-transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86), border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86), border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
</style>

