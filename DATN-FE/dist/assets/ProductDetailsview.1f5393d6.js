import{N as V,F as D}from"./Navbar.fe5f72bc.js";import{B}from"./Button.846c44a4.js";import{_ as C,r as h,o as i,c as n,b as t,F as v,f as g,t as c,e as r,i as S,n as a,j as d,l as m,v as N,d as f}from"./index.e681a6ad.js";import{P as L}from"./ProductService.e137dcec.js";import{C as M}from"./CartService.65bf9774.js";import"./logonew2-removebg-preview.5a2cb390.js";import"./logonew1xoaphong.a5801921.js";import"./CategoryService.f2c9e246.js";const T={name:"ProductDetails",data(){return{product:{color:[]},cart:{product_id:this.$route.params.id,quantity:1,size:"s",color:""},button_text:"Add To Cart",isVisible:0,loader:!1}},components:{Buttton:B},methods:{async fetchProduct(){var e,u;const l=await L.getProductById(this.$route.params.id);l&&(this.product=l.data.data,this.isVisible=(u=(e=this.product)==null?void 0:e.image[0])==null?void 0:u.id)},async addToCart(){await M.createCart(this.cart)&&this.$router.push({name:"Cart"})}},async mounted(){await this.fetchProduct(),this.cart.color=this.product.color[0]}},F={class:"row mt-5 ProductDetails"},U={class:"col-lg-5 col-12"},O=["src","hidden"],q={class:"small-img-group"},H=["onClick"],I=["src"],j={class:"col-lg-7 col-12 px-3 mb-5"},A=t("h6",{class:"mb-4"},"Category / cc",-1),E={class:"info-header"},R={class:"product-name mb-3"},X={class:"product-sku mb-3"},G={id:"pro_sku"},J=t("span",{class:"pro-state"},[r(" Status: "),t("strong",null,"In stock ")],-1),K={class:"pro-vendor"},Q={class:"product-price"},W=t("span",{class:"pro-title"},"Price:",-1),Y={class:"pro-price"},Z={key:0,class:""},$={class:"pro-percent"},tt={id:"variant-swatch-0",class:"swatch clearfix is-color","data-option":"option1","data-option-index":"0"},st=t("div",{class:"d-flex flex-column pro-title"},[t("span",null,"Color: ")],-1),ot=["onClick","data-value"],et={class:"nau sd",for:"swatch-0-nau"},it={id:"variant-swatch-0",class:"swatch clearfix is-color","data-option":"option1","data-option-index":"0"},nt=t("div",{class:"d-flex align-items-center pro-title"},[t("span",null,"Size : ")],-1),ct={class:"list-group"},rt={class:"d-flex align-items-baseline mt-5"},lt=t("h4",null,"Product Details",-1),at=["innerHTML"];function dt(l,e,u,P,s,x){var p,_,y,k,z;const b=h("Buttton");return i(),n("div",F,[t("div",U,[(i(!0),n(v,null,g((p=s.product)==null?void 0:p.image,o=>(i(),n("img",{key:o.id,src:o.url,hidden:s.isVisible!=o.id,class:"img-fluid w-100 mb-md-3",id:"main_img",alt:""},null,8,O))),128)),t("div",q,[(i(!0),n(v,null,g((_=s.product)==null?void 0:_.image,o=>(i(),n("div",{class:"small-img-col",key:o.id,onClick:w=>s.isVisible=o.id},[t("img",{src:o.url,class:"small-img",alt:""},null,8,I)],8,H))),128))])]),t("div",j,[A,t("div",E,[t("div",R,[t("span",null,c((y=s.product)==null?void 0:y.name),1)]),t("div",X,[t("span",G,[r("M\xE3 s\u1EA3n ph\u1EA9m: "),t("strong",null,c((k=s.product)==null?void 0:k.code),1)]),J,t("span",K,[r("Brand: "),t("strong",null,c(s.product.vendor),1)])])]),t("div",Q,[W,t("span",Y,c(s.product.discount?(Math.floor(Number(s.product.price.replace(/,/g,""))*(100-s.product.discount)/100/1e3)*1e3).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):s.product.price)+"\u0111",1),s.product.discount?(i(),n("del",Z,c(s.product.price)+"\u0111",1)):S("",!0),t("span",$,"-"+c(s.product.discount)+"%",1)]),t("div",tt,[st,(i(!0),n(v,null,g(s.product.color,o=>(i(),n("div",{class:"select-swap",key:o},[t("div",{onClick:w=>s.cart.color=o,class:a([{"bg-info":s.cart.color==o},"py-2 px-3 border"]),"data-value":o},[t("label",et,[t("span",null,c(o),1)])],10,ot)]))),128))]),t("div",it,[nt,t("div",ct,[t("label",{class:a([{"bg-info":s.cart.size=="s"},"list-group-item"])},[d(t("input",{type:"radio",name:"radioOption","onUpdate:modelValue":e[0]||(e[0]=o=>s.cart.size=o),value:"s",class:"form-check-input d-none"},null,512),[[m,s.cart.size]]),r(" Size S ")],2),t("label",{class:a([{"bg-info":s.cart.size=="m"},"list-group-item"])},[d(t("input",{type:"radio",name:"radioOption","onUpdate:modelValue":e[1]||(e[1]=o=>s.cart.size=o),value:"m",class:"form-check-input d-none"},null,512),[[m,s.cart.size]]),r(" Size M ")],2),t("label",{class:a([{"bg-info":s.cart.size=="l"},"list-group-item"])},[d(t("input",{type:"radio",name:"radioOption","onUpdate:modelValue":e[2]||(e[2]=o=>s.cart.size=o),value:"l",class:"form-check-input d-none"},null,512),[[m,s.cart.size]]),r(" Size L ")],2),t("label",{class:a([{"bg-info":s.cart.size=="xl"},"list-group-item"])},[d(t("input",{type:"radio",name:"radioOption","onUpdate:modelValue":e[3]||(e[3]=o=>s.cart.size=o),value:"xl",class:"form-check-input d-none"},null,512),[[m,s.cart.size]]),r(" Size XL ")],2)])]),t("div",rt,[d(t("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=o=>s.cart.quantity=o),max:"5",min:"1"},null,512),[[N,s.cart.quantity]]),f(b,{class:"mb-5 button_1",button_text:s.button_text,btnLoader:s.loader,onClick:x.addToCart},null,8,["button_text","btnLoader","onClick"])]),lt,t("div",{class:"details",innerHTML:(z=s.product)==null?void 0:z.description},null,8,at)])])}const ut=C(T,[["render",dt]]),pt={name:"ProductDetailsview",components:{ProductDetails:ut,Navbar:V,Footer:D}},_t={id:"ProductDetailsview",class:"my-5 py-5"},mt={class:"container"};function ht(l,e,u,P,s,x){const b=h("Navbar"),p=h("ProductDetails"),_=h("Footer");return i(),n(v,null,[f(b),t("section",_t,[t("div",mt,[f(p)])]),f(_)],64)}const Ct=C(pt,[["render",ht]]);export{Ct as default};