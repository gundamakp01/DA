import{_ as b,c as n,b as e,j as f,k as m,F as c,g as u,i as g,Q as h,o as i,t as r,n as v}from"./index.340d75fa.js";import{C as _}from"./CategoryService.cefa6a90.js";import{P as C}from"./ProductService.b11609be.js";import{B as P}from"./Button.f23ba58a.js";const k={components:{Button:P},data(){return{products:[],pagination:{},categories:[],categoryId:1,page:1,subCategories:[],subCategoryId:null}},mounted(){this.fetchCategories(),this.fetchProducts(),this.fetchSubCategories()},methods:{async fetchCategories(){const s=await _.getCategory();s&&(this.categories=s.data.data)},async fetchProducts(){var a;const s=await C.getProductByCategoryId((a=this.subCategoryId)!=null?a:this.categoryId,{page:this.page});s&&(this.products=s.data.data.products,this.pagination=s.data.data.pagination)},async fetchSubCategories(){const s=await _.getProductByCategoryId(this.categoryId);s&&(this.subCategories=s.data.data)},destroy(s){this.$swal({title:"Delete this order status?",text:"Are you sure? You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes, Delete it!"}).then(async a=>{a.value&&(await C.deleteProduct(s),await this.fetchProducts())})},changePage(s){this.page=s,this.fetchProducts()}},watch:{categoryId:function(s){this.fetchProducts(),this.fetchSubCategories()},subCategoryId:function(s){this.fetchProducts()}}},w={class:"d-flex justify-content-between"},I={class:"d-flex"},B=["value"],S=["value"],V={class:"table table-striped"},x=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Name"),e("th",{scope:"col"},"Image"),e("th",{scope:"col"},"Price"),e("th",{scope:"col"})])],-1),D={scope:"row"},N=["src"],j=["onClick"],E=["onClick"],F={"aria-label":"Page navigation example"},M={class:"pagination"},U={key:0,class:"page-item"},Y=["onClick"],z={key:1,class:"page-item"};function A(s,a,L,Q,o,l){return i(),n(c,null,[e("div",w,[e("div",I,[f(e("select",{class:"form-select","onUpdate:modelValue":a[0]||(a[0]=t=>o.categoryId=t),width:"500"},[(i(!0),n(c,null,u(o.categories,t=>(i(),n("option",{value:t.id},r(t.name),9,B))),256))],512),[[m,o.categoryId]]),o.subCategories!=[]?f((i(),n("select",{key:0,class:"form-select","onUpdate:modelValue":a[1]||(a[1]=t=>o.subCategoryId=t),width:"500"},[(i(!0),n(c,null,u(o.subCategories,t=>(i(),n("option",{value:t.id},r(t.name),9,S))),256))],512)),[[m,o.subCategoryId]]):g("",!0)]),e("button",{class:"btn btn-success",onClick:a[2]||(a[2]=t=>s.$router.push({name:"createProducts"}))},"Create")]),e("table",V,[x,e("tbody",null,[(i(!0),n(c,null,u(o.products,(t,d)=>{var p;return i(),n("tr",{key:d,class:"align-middle"},[e("th",D,r(o.pagination.from+d),1),e("td",null,r(t.name),1),e("td",null,[e("img",{width:"100",height:"80",src:(p=t.image)==null?void 0:p.url,alt:""},null,8,N)]),e("td",null,r(t.price),1),e("td",null,[e("button",{class:"btn btn-secondary me-2",onClick:y=>s.$router.push(`Products/${t.id}/update`)},"Edit",8,j),e("button",{class:"btn btn-danger",onClick:y=>l.destroy(t.id)},"Delete",8,E)])])}),128))])]),e("div",null,[e("nav",F,[e("ul",M,[o.pagination.current_page>1?(i(),n("li",U,[e("a",{class:"page-link",href:"#",onClick:a[3]||(a[3]=h(t=>l.changePage(o.pagination.current_page-1),["prevent"]))},"Previous")])):g("",!0),(i(!0),n(c,null,u(o.pagination.last_page,t=>(i(),n("li",{class:v(["page-item",{active:t===o.pagination.current_page}]),key:t},[e("a",{class:"page-link",href:"#",onClick:h(d=>l.changePage(t),["prevent"])},r(t),9,Y)],2))),128)),o.pagination.current_page<o.pagination.per_page?(i(),n("li",z,[e("a",{class:"page-link",href:"#",onClick:a[4]||(a[4]=h(t=>l.changePage(o.pagination.current_page+1),["prevent"]))},"Next")])):g("",!0)])])])],64)}const J=b(k,[["render",A]]);export{J as default};
