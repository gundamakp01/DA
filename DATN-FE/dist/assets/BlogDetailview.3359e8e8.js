import{N as a,F as _}from"./Navbar.a419bc81.js";import{_ as d,r as l,c as p,d as c,b as t,t as e,F as m,o as h}from"./index.795d56bf.js";import{B as u}from"./BlogService.b7b93b06.js";import"./logonew2-removebg-preview.5a2cb390.js";import"./logonew1xoaphong.b77e119c.js";import"./CategoryService.16775997.js";const g={components:{Navbar:a,Footer:_},data(){return{blog:{}}},methods:{async fetchBlog(){const s=await u.getBlogById(this.$route.params.id);s&&(this.blog=s.data.data)}},mounted(){this.fetchBlog()}},b={id:"blog"},f={class:"container mt-5 pt-5"},B=t("h3",{class:"pt-5"},"Blogs",-1),v=t("hr",null,null,-1),x={class:"row text-center"},F={class:"d-flex flex-column align-items-center"},N=["src"],w={class:"text-center p-4"},y=t("br",null,null,-1),k=t("br",null,null,-1),D=t("br",null,null,-1);function S(s,V,C,E,o,I){var n;const r=l("Navbar"),i=l("Footer");return h(),p(m,null,[c(r),t("section",b,[t("div",f,[B,v,t("div",x,[t("div",F,[t("img",{style:{height:"400px",width:"600px"},src:(n=o.blog.image)==null?void 0:n.url,class:"img-fluid",alt:"1"},null,8,N),t("h4",w,e(o.blog.name),1),y,t("h5",null,e(o.blog.description),1),k,D,t("p",null,e(o.blog.content),1)])])])]),c(i)],64)}const H=d(g,[["render",S]]);export{H as default};
