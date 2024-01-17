import{_ as m,c as d,b as t,j as l,v as r,F as f,f as b,i as _,Q as h,o as p}from"./index.8ca39612.js";import{P as a}from"./ProductService.751835e7.js";const v={data(){return{product:{images:[]},urls:[]}},methods:{async submit(){this.$route.params.id?await a.updateProduct(this.$route.params.id,this.product):await a.createProduct(this.product),this.$router.push({name:"products"})},uploadFile(){var s;const i=this.$refs.file.files;this.product.images=[],this.urls=[];for(let c=0;c<i.length;c++){const n=i[c],o=URL.createObjectURL(n);(s=this.product.images)==null||s.push(n),this.urls.push(o)}},async fetchProduct(){var s,c,n,o;const i=await a.getProductById(this.$route.params.id);i&&(this.product=i.data.data,this.urls=this.product.image.map(u=>u.url),this.product.images=this.product.image.map(u=>u.url),this.product.price=(c=(s=this.product)==null?void 0:s.price)==null?void 0:c.replace(/,/g,""),this.product.color=(o=(n=this.product)==null?void 0:n.color)==null?void 0:o.join(","))}},mounted(){this.$route.params.id&&this.fetchProduct()}},y={class:"mb-3"},x=t("label",null,"Name",-1),g={class:"mb-3"},z=t("label",{class:"form-label"},"Price",-1),V={class:"mb-3"},U=t("label",{class:"form-label"},"Color",-1),F={class:"row mb-3"},P={class:"col-3"},w=t("label",{class:"form-label"},"size s",-1),k={class:"col-3"},B=t("label",{class:"form-label"},"size m",-1),C={class:"col-3"},j=t("label",{class:"form-label"},"size l",-1),L={class:"col-3"},N=t("label",{class:"form-label"},"size xl",-1),S={class:"mb-3"},D=t("label",{class:"form-label"},"Description",-1),I={class:"mb-3"},M=t("label",{for:"formFile",class:"form-label"},"Image",-1),R=["src"],E={class:"text-center"},O=t("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1);function Q(i,s,c,n,o,u){return p(),d("form",{onSubmit:s[10]||(s[10]=h(e=>u.submit(),["prevent"]))},[t("div",y,[x,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>o.product.name=e)},null,512),[[r,o.product.name]])]),t("div",g,[z,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>o.product.price=e)},null,512),[[r,o.product.price]])]),t("div",V,[U,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=e=>o.product.color=e)},null,512),[[r,o.product.color]])]),t("div",F,[t("div",P,[w,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=e=>o.product.size_s=e)},null,512),[[r,o.product.size_s]])]),t("div",k,[B,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[4]||(s[4]=e=>o.product.size_m=e)},null,512),[[r,o.product.size_m]])]),t("div",C,[j,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=e=>o.product.size_l=e)},null,512),[[r,o.product.size_l]])]),t("div",L,[N,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[6]||(s[6]=e=>o.product.size_xl=e)},null,512),[[r,o.product.size_xl]])])]),t("div",S,[D,l(t("textarea",{class:"form-control","onUpdate:modelValue":s[7]||(s[7]=e=>o.product.description=e)},null,512),[[r,o.product.description]])]),t("div",I,[M,t("input",{multiple:"",class:"form-control",type:"file",id:"formFile",ref:"file",onChange:s[8]||(s[8]=(...e)=>u.uploadFile&&u.uploadFile(...e))},null,544),t("div",null,[o.urls?(p(!0),d(f,{key:0},b(o.urls,e=>(p(),d("img",{class:"mt-2 me-2 border",width:"120",height:"100",src:e,alt:""},null,8,R))),256)):_("",!0)])]),t("div",E,[O,t("button",{type:"button",class:"btn btn-secondary",onClick:s[9]||(s[9]=e=>i.$router.back())},"Back")])],32)}const A=m(v,[["render",Q]]);export{A as default};
