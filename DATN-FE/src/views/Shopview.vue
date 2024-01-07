<template>
    <Navbar />
    <section id="featured" class="pt-5">
        <div class="container mt-5 pt-5">
            <div class="d-flex justify-content-between align-items-center">
                <h3>{{ category.name }}</h3>
                <div class="filter-inner">
                    <div class="filter-head">
                        <p class="mb-none">Bộ lọc:</p>
                    </div>
                    <div class="filter-options">
                        <!-- ./filter sortby -->

                        <!-- ./filter brand -->

                        <div class="filter_group">
                            <div class="filter_group_block">
                                <div class="filter_group-subtitle" @mouseover="isShow = 1" @mouseleave="isShow = 0">
                                    <span>Thương hiệu</span>
                                </div>
                                <div :class="`filter_group-content filter-brand ${isShow === 1 ? 'd-block' : 'd-none'}`"
                                    @mouseover="isShow = 1" @mouseleave="isShow = 0" style="">
                                    <ul class="checkbox-list">
                                        <li>
                                            <input type="checkbox" id="data-brand-p1" value="Khác" name="brand-filter"
                                                v-model="search.brands">
                                            <label for="data-brand-p1">Khác</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-brand-p2" value="Homewear" name="brand-filter"
                                                v-model="search.brands">
                                            <label for="data-brand-p2">Homewear</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-brand-p3" value="Eva De Eva" name="brand-filter"
                                                v-model="search.brands">
                                            <label for="data-brand-p3">Eva De Eva</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-brand-p4" value="Lady me" name="brand-filter"
                                                v-model="search.brands">
                                            <label for="data-brand-p4">Lady me</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-brand-p5" value="Unique" name="brand-filter"
                                                v-model="search.brands">
                                            <label for="data-brand-p5">Unique</label>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- ./filter color -->

                        <!-- ./filter size -->

                        <div class="filter_group">
                            <div class="filter_group_block">
                                <div class="filter_group-subtitle" @mouseover="isShow = 2" @mouseleave="isShow = 0">
                                    <span>Size</span>
                                </div>
                                <div :class="`filter_group-content filter-size ${isShow === 2 ? 'd-block' : 'd-none'}`"
                                    @mouseover="isShow = 2" @mouseleave="isShow = 0">
                                    <ul class="checkbox-list">
                                        <li>
                                            <input type="checkbox" id="data-size-p1" value="S" name="size-filter"
                                                data-size="(variant:product=S)" v-model="search.size">
                                            <label for="data-size-p1">S</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-size-p2" value="M" name="size-filter"
                                                data-size="(variant:product=M)" v-model="search.size">
                                            <label for="data-size-p2">M</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-size-p3" value="L" name="size-filter"
                                                data-size="(variant:product=L)" v-model="search.size">
                                            <label for="data-size-p3">L</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-size-p4" value="XL" name="size-filter"
                                                data-size="(variant:product=XL)" v-model="search.size">
                                            <label for="data-size-p4">XL</label>
                                        </li>

                                        <li>
                                            <input type="checkbox" id="data-size-p5" value="XXL" name="size-filter"
                                                data-size="(variant:product=XXL)" v-model="search.size">
                                            <label for="data-size-p5">XXL</label>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- ./filter price -->

                        <div class="filter_group">
                            <div class="filter_group_block">
                                <div class="filter_group-subtitle" @mouseover="isShow = 3" @mouseleave="isShow = 0">
                                    <span>Khoảng giá</span>
                                </div>
                                <div :class="`filter_group-content filter-price ${isShow === 3 ? 'd-block' : 'd-none'}`"
                                    @mouseover="isShow = 3" @mouseleave="isShow = 0">
                                    <label for="customRange1" class="form-label">Khoảng giá</label>
                                    <input type="range" v-model="search.price" min="0" max="3000000" step="10000"
                                        class="form-range" id="customRange1">
                                    <div class="filter-price__value">
                                        <div id="smooth-steps-values">{{ priceFormat }}đ - 3,000,000đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- ./filter event -->

                        <div class="filter_group">
                            <div class="filter_group_block">
                                <div class="filter_group-subtitle" @mouseover="isShow = 4" @mouseleave="isShow = 0">
                                    <span>Giảm giá</span>
                                </div>
                                <div :class="`filter_group-content filter-event ${isShow === 4 ? 'd-block' : 'd-none'}`"
                                    @mouseover="isShow = 4" @mouseleave="isShow = 0">

                                    <ul class="checkbox-list">
                                        <li>
                                            <input type="radio" id="data-discount-p1" value="50" name="discount-filter"
                                                v-model="search.discount">
                                            <label for="data-discount-p1">0 - 50%</label>
                                        </li>

                                        <li>
                                            <input type="radio" id="data-discount-p2" value="70" name="discount-filter"
                                                v-model="search.discount">
                                            <label for="data-discount-p2">50 - 70%</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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
import debounce from 'lodash.debounce'
// const productStore = useProductStore();

export default {
    name: 'ShopView',
    components: {
        Product,
        Navbar,
        Footer
    },
    data: function () {
        return {
            card_class: 'col-lg-3 col-md-6',
            id: 1,
            category_id: this.$route.params.id,
            Product_name: 'Dam',
            products: [],
            categories: [],
            category: {},
            page: 1,
            pagination: {},
            search: {
                brands: [],
                size: [],
                price: 0,
                discount: null,
            },

            isShow: 0
            // Product_list: productStore.data.filter((product) => product.category == 'shop'),
        }
    },
    methods: {
        fetchProduct: debounce(async function () {
            const brandsString = this.search.brands.join(',');
            const sizeString = this.search.size.join(',');
            const resp = await ProductService.getProductByCategoryId(this.category_id, {
                page: this.page,
                search: {
                    ...this.search,
                    brands: brandsString.length ? brandsString : null,
                    size: sizeString.length ? sizeString : null,
                }
            });
            if (resp) {
                this.products = [
                    ...this.products,
                    ...resp.data.data.products
                ]
                this.pagination = resp.data.data.pagination
            }
        }, 500),
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
    computed: {
        priceFormat() {
            return new Intl.NumberFormat().format(this.search.price)
        },
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
        search: {
            handler: function (val) {
                this.products = [];
                this.fetchProduct();
            },
            deep: true
        }
    }


}
</script>
<style lang="css">
.mb-none {
    margin-bottom: 0;
}

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

.filter-head {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0;
    margin-right: 30px;
}

.filter-options {
    display: flex;
    align-items: center;
    gap: 30px;
}

.filter_group_block {
    position: relative;
}

.filter_group_block .filter_group-subtitle {
    font-size: 14px;
    font-weight: 400;
    padding: 0;
    background: url('@/assets/img/down-arrow.png');
    background-size: 14px;
    background-position: center right;
    background-repeat: no-repeat;
    padding-right: 20px;
    position: relative;
    cursor: pointer;
}

.filter_group_block .filter_group-content {
    display: block;
    position: absolute;
    background: #FFFFFF;
    width: 220px;
    padding: 15px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.checkbox-list li {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0 12px;
    padding: 0 0 0 25px;
    cursor: pointer;
}

.checkbox-list input {
    position: absolute;
    top: 0px;
    left: 0px;
    margin-top: 0;
    vertical-align: top;
    width: 16px;
    height: 16px;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
}

.checkbox-list li label {
    font-size: 14px;
    line-height: 1.2;
    cursor: pointer;
}

.filter-inner {
    display: flex;
    align-items: center;
}
</style>

