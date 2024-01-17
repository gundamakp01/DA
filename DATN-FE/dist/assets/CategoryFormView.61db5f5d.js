import{_ as m,c as a,b as e,j as c,v as u,k as d,F as g,f,i as p,Q as y,o as i,t as h}from"./index.aedf396d.js";import{C as l}from"./CategoryService.7ece15b4.js";const b={data(){return{category:{},categories:[],url:""}},methods:{async submit(){this.$route.params.id?await l.updateCategory(this.$route.params.id,this.category):await l.createCategory(this.category),this.$router.push({name:"categories"})},uploadFile(){this.category.image=this.$refs.file.files[0],this.url=URL.createObjectURL(this.category.image)},async fetchCategory(){const o=await l.getCategoryById(this.$route.params.id);o&&(this.category=o.data.data,this.url=this.category.image.url)},async fetchCategories(){const o=await l.getCategory();o&&(this.categories=o.data.data)}},mounted(){this.$route.params.id&&this.fetchCategory(),this.fetchCategories()}},_={class:"mb-3"},v=e("label",null,"Name",-1),C={class:"mb-3"},w=e("label",null,"Parent category",-1),F=["value"],k={class:"mb-3"},x=e("label",{for:"formFile",class:"form-label"},"Image",-1),B=["src"],S={class:"text-center"},V=e("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1);function U(o,t,L,M,r,n){return i(),a("form",{onSubmit:t[4]||(t[4]=y(s=>n.submit(),["prevent"]))},[e("div",_,[v,c(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>r.category.name=s)},null,512),[[u,r.category.name]])]),e("div",C,[w,c(e("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=s=>r.category.parent_id=s)},[(i(!0),a(g,null,f(r.categories,s=>(i(),a("option",{value:s.id},h(s.name),9,F))),256))],512),[[d,r.category.parent_id]])]),e("div",k,[x,e("input",{class:"form-control",type:"file",id:"formFile",ref:"file",onChange:t[2]||(t[2]=(...s)=>n.uploadFile&&n.uploadFile(...s))},null,544),r.url?(i(),a("img",{key:0,class:"mt-2 border",width:"120",height:"100",src:r.url,alt:""},null,8,B)):p("",!0)]),e("div",S,[V,e("button",{type:"button",class:"btn btn-secondary",onClick:t[3]||(t[3]=s=>o.$router.back())},"Back")])],32)}const j=m(b,[["render",U]]);export{j as default};
