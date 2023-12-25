import{P as y}from"./Product.4a195b4a.js";import{N as m,F as f}from"./Navbar.8e3c221a.js";import{A as a,_ as C,r as n,c,d,b as e,t as g,F as p,g as v,f as P,e as B,i as I,o as s}from"./index.5575964e.js";import{P as k}from"./ProductService.458e54b1.js";import"./Button.353e6bd4.js";import"./LoginService.48415ed8.js";const u={getCategory(){return a.get("categories")},createCategory(t){return a.post("categories",t)},deleteCategory(t){return a.delete(`categories/${t}`)},updateCategory(t,r){return console.log(typeof t),a.update(`categories/${t}`,r)},getCategoryById(t){return a.get(`categories/${t}`)},getProductByCategoryId(t,r){return a.get(`categories/${t}/children`,r)}};const w={name:"ShopView",components:{Product:y,Navbar:m,Footer:f},data(){return{card_class:"col-lg-3 col-md-6",id:1,category_id:this.$route.params.id,Product_name:"Dam",products:[],categories:[],category:{},page:1,pagination:{}}},methods:{async fetchProduct(){const t=await k.getProductByCategoryId(this.category_id,{page:this.page});t&&(this.products=[...this.products,...t.data.data.products],this.pagination=t.data.data.pagination)},async fetchCategoryByParentId(){const t=await u.getProductByCategoryId(this.category_id);t&&(this.categories=t.data.data)},async fetchCategoryById(){const t=await u.getCategoryById(this.category_id);t&&(this.category=t.data.data)}},created(){this.fetchProduct(),this.fetchCategoryById(this.category_id),this.fetchCategoryByParentId()},watch:{"$route.params.id":{handler:function(t){this.category_id=this.$route.params.id,this.products=[],this.fetchCategoryById(this.category_id),this.fetchCategoryByParentId(),this.fetchProduct()},deep:!0,immediate:!0},category_id:function(t){this.products=[],this.fetchProduct()},page:function(t){this.fetchProduct()}}},x={id:"featured",class:"pt-5"},N={class:"container mt-5 pt-5"},b=e("hr",{class:"mx-2"},null,-1),S={class:"menuCollection"},F=["onClick"],V={class:"row mx-auto container"},$={key:1},A={key:0,class:"see-more-product d-flex"},D=e("strong",null,"\u0110\u1EA7m",-1);function E(t,r,L,T,o,X){const h=n("Navbar"),l=n("Product"),_=n("Footer");return s(),c(p,null,[d(h),e("section",x,[e("div",N,[e("h3",null,g(o.category.name),1),b,e("ul",S,[(s(!0),c(p,null,v(o.categories,i=>(s(),c("li",null,[e("span",{onClick:j=>o.category_id=i.id},g(i.name),9,F)]))),256))])]),e("div",V,[o.products.length>0?(s(),P(l,{key:0,products:o.products},null,8,["products"])):(s(),c("div",$,"Ch\u01B0a c\xF3 s\u1EA3n ph\u1EA9m n\xE0o trong danh m\u1EE5c n\xE0y"))]),o.page<o.pagination.last_page?(s(),c("div",A,[e("span",{onClick:r[0]||(r[0]=i=>o.page++),class:"button btnlight btn-see-more"},[B("Xem th\xEAm "),D])])):I("",!0)]),d(_)],64)}const M=C(w,[["render",E]]);export{M as default};
