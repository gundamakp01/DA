import{N as p,F as h}from"./Navbar.6565a81d.js";import{_ as g,r as s,c as r,d as c,b as t,F as l,g as u,o as n,f,w as B,t as v}from"./index.340d75fa.js";import{B as b}from"./BlogService.a61de6ac.js";import"./LoginService.9d4a2007.js";import"./logo.d15f1ef9.js";const w={name:"blogview",components:{Navbar:p,Footer:h},data(){return{blogs:[]}},methods:{async fetchBlogs(){const o=await b.getBlog();o&&(this.blogs=o.data.data)}},mounted(){this.fetchBlogs()}},x={id:"blog"},F={class:"container mt-5 pt-5"},N=t("h3",{class:"pt-5"},"Blogs",-1),k=t("hr",null,null,-1),$={class:"row"},y=["src"],C={class:"text-center p-4 text-decoration-none"};function S(o,V,D,E,i,L){const _=s("Navbar"),d=s("router-link"),m=s("Footer");return n(),r(l,null,[c(_),t("section",x,[t("div",F,[N,k,t("div",$,[(n(!0),r(l,null,u(i.blogs,e=>(n(),f(d,{to:{path:`blog/${e.id}`},class:"col-md-6 col-12"},{default:B(()=>{var a;return[t("img",{style:{height:"400px"},src:(a=e.image)==null?void 0:a.url,class:"img-fluid w-100",alt:"1"},null,8,y),t("h4",C,v(e.name),1)]}),_:2},1032,["to"]))),256))])])]),c(m)],64)}const H=g(w,[["render",S]]);export{H as default};
