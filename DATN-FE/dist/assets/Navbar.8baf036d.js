import{_ as x}from"./logonew2-removebg-preview.5a2cb390.js";import{_ as b,r as w,o as r,c as u,b as s,d as o,a as $,e as c,u as m,w as n,n as f,F as C,f as S,g as v,t as p}from"./index.aedf396d.js";import{L as N,_ as L}from"./logonew1xoaphong.8fe43150.js";import{C as H}from"./CategoryService.7ece15b4.js";const j="/assets/1.18cf10ac.jpg",B="/assets/2.27f2bd21.jpg",P="/assets/3.5292522e.jpg",F="/assets/4.bc9785ae.jpg",M="/assets/5.73771163.jpg",V="/assets/6.ec708e2a.jpg",E="/assets/payment.a11f1603.png",T={name:"Footer"},I={class:"mt-5 py-5"},z=$('<div class="row container mx-auto pt-5 p-0"><div class="footer-col col-lg-3 col-md-6"><a href="#"><img src="'+x+'" alt="logo2" width="250"></a><p class="pt-4">We are so excited about receiving your further orders, and make sure that you all products will be filled in the right way.We love you \u2764</p></div><div class="footer-col col-lg-3 col-md-6"><h5 class="pb-2">Featured</h5><ul class="text-uppercase"><li><a href="#featured">man</a></li><li><a href="#cloths">woman</a></li><li><a href="#">boys</a></li><li><a href="#">girls</a></li><li><a href="#new">new arraivals</a></li><li><a href="#featured">shoes</a></li><li><a href="#">cloths</a></li></ul></div><div class="footer-col col-lg-3 col-md-6"><h5 class="pb-2">Contact Us</h5><div><h6 class="text-uppercase mt-2">Address</h6><p>235 Ho\xE0ng Qu\u1ED1c Vi\u1EC7t, C\u1ED5 Nhu\u1EBF, <br>B\u1EAFc T\u1EEB Li\xEAm, H\xE0 N\u1ED9i</p></div><div><h6 class="text-uppercase mt-2">Phone</h6><a href="tel:+917048432374">0964563504</a></div><div><h6 class="text-uppercase mt-2">Email</h6><a href="mailto:yashborda123@gmail.com">kienblock2908@gmail.com </a></div></div><div class="footer-col col-lg-3 col-md-6"><h5 class="pb-2">Instagram</h5><div class="row insta-img"><a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="'+j+'" alt="insta1"></a><a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="'+B+'" alt="insta2"></a><a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="'+P+'" alt="insta3"></a><a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="'+F+'" alt="insta4"></a><a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="'+M+'" alt="insta5"></a><a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="'+V+'" alt="insta6"></a></div></div></div>',1),A={class:"mt-5"},D={class:"row container g-3 mx-auto"},K=s("div",{class:"col-md-6 col-lg-4"},[s("img",{src:E,alt:""})],-1),O=s("div",{class:"col-md-6 col-lg-4"},[s("p",null,[c("Copyright \xA9 2024 "),s("a",{class:"text-white",target:"_blank",href:"https://webdev531.000webhostapp.com/"},"Ki\xEAn Nguy\u1EC5n"),c(". Vue JS Developer.")])],-1),U={class:"col-md-6 col-lg-4 text-lg-center copyright"},W={href:"https://www.linkedin.com/in/yash-borda-8abb9124b/"},J={href:"https://github.com/yashborda7048"},Q={href:"mailto:yashborda123@gmail.com"},q={href:"https://wa.me/7048432374"},G={href:"https://www.facebook.com/yash.borda/"};function R(i,e,y,k,l,d){const t=w("font-awesome-icon");return r(),u("footer",I,[z,s("div",A,[s("div",D,[K,O,s("div",U,[s("a",W,[o(t,{icon:["fab","linkedin"]})]),s("a",J,[o(t,{icon:["fab","facebook"]})]),s("a",Q,[o(t,{icon:["fas","envelope"]})]),s("a",q,[o(t,{icon:["fab","whatsapp"]})]),s("a",G,[o(t,{icon:["fab","github"]})])])])])])}const Hs=b(T,[["render",R]]);const X={name:"Navbar",data(){return{upHere:!1,user:m().user,categories:[]}},methods:{userStore:m,async Logout(){await N.logout(),localStorage.removeItem("__TOKEN"),localStorage.removeItem("user"),m().user=null,this.$router.push("/login")},async editProfile(){this.$router.push("/edit-profile")},async fetchCategories(){const i=await H.getCategory();i&&(console.log(i),this.categories=i.data.data)}},created(){this.fetchCategories()}},Y={class:"navbar navbar-expand-lg fixed-top bg-light"},Z={class:"container"},ss=s("img",{src:L,alt:"logo1",width:"220"},null,-1),ts=s("button",{class:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon top-bar"}),s("span",{class:"navbar-toggler-icon bottom-bar"})],-1),es={class:"collapse navbar-collapse",id:"navbarSupportedContent"},as={class:"navbar-nav ms-3 ms-sm-auto align-items-start align-items-sm-center"},os={class:"nav-item"},is=s("div",{href:"/collections/san-pham",title:"Shop"},[c(" Shop "),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",x:"0",y:"0",viewBox:"0 0 128 128"},[s("g",null,[s("path",{d:"m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"})])])],-1),ls={class:"multicolumn-container-new"},ns=["src"],rs={class:"nav-item"},cs={class:"nav-item"},ds={class:"nav-item"},us={class:"nav-item"},ms={class:"fa fa-shopping-cart position-relative"},ps={class:"nav-item"},hs={key:0,class:"dropdown"},_s={class:"btn button_1 dropdown-toggle d-flex justify-content-between align-items-center",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},gs={key:0,class:"d-inline"},fs=s("i",{class:"fa fa-user me-2"},null,-1),vs=[fs],bs={key:1,class:"d-inline"},ws=["src"],ys={class:"d-inline mb-0"},ks={class:"dropdown-menu p-0",style:{cursor:"pointer"}},xs=s("button",{class:"button_1 px-3",type:"button"},[s("i",{class:"fa fa-user me-2"}),c(" Login ")],-1);function $s(i,e,y,k,l,d){var h,_;const t=w("router-link");return r(),u("nav",Y,[s("div",Z,[o(t,{to:"/",class:"navbar-brand py-2","aria-current":"page"},{default:n(()=>[ss]),_:1}),ts,s("div",es,[s("ul",as,[s("li",os,[o(t,{to:"/",class:"nav-link","aria-current":"page"},{default:n(()=>[c("Home")]),_:1})]),s("li",{class:"nav-item pt-5 pb-5",onMouseover:e[2]||(e[2]=a=>l.upHere=!0),onMouseleave:e[3]||(e[3]=a=>l.upHere=!1)},[is,s("div",{class:f(`menuList-submain multicolumn ${l.upHere?"menu-visible":"menu-hidden"}`),onMouseover:e[0]||(e[0]=a=>l.upHere=!0),onMouseleave:e[1]||(e[1]=a=>l.upHere=!1)},[s("div",ls,[(r(!0),u(C,null,S(l.categories,a=>(r(),v(t,{class:"itemMegaMenu",to:`/categories/${a.id}`},{default:n(()=>{var g;return[s("img",{src:(g=a.image)==null?void 0:g.url,alt:"\u0110\u1EA7m",height:"230",width:"230"},null,8,ns),s("div",null,p(a.name),1)]}),_:2},1032,["to"]))),256))])],34)],32),s("li",rs,[o(t,{to:"/blog",class:"nav-link","aria-current":"page"},{default:n(()=>[c("Blog")]),_:1})]),s("li",cs,[o(t,{to:"/about",class:"nav-link","aria-current":"page"},{default:n(()=>[c("About")]),_:1})]),s("li",ds,[o(t,{to:"/contact-us",class:"nav-link","aria-current":"page"},{default:n(()=>[c("Contact Us ")]),_:1})]),s("li",us,[o(t,{to:"/cart",class:"nav-link p-0","aria-current":"page"},{default:n(()=>[s("i",ms,[s("span",{class:f([i.count_length==0?"d-none":"d-inline-block","badge"])},p(i.count_length),3)])]),_:1})]),s("li",ps,[(h=l.user)!=null&&h.id?(r(),u("div",hs,[s("button",_s,[i.photo?(r(),u("div",bs,[s("img",{class:"userPhoto me-2",src:i.photo,alt:"userPhoto"},null,8,ws)])):(r(),u("div",gs,vs)),s("p",ys,p((_=d.userStore().user)==null?void 0:_.name),1)]),s("ul",ks,[s("li",null,[s("a",{class:"dropdown-item",onClick:e[4]||(e[4]=(...a)=>d.Logout&&d.Logout(...a))},"Log Out")]),s("li",null,[s("a",{class:"dropdown-item",onClick:e[5]||(e[5]=(...a)=>d.editProfile&&d.editProfile(...a))},"Edit Profile")])])])):(r(),v(t,{key:1,to:"/login",class:"nav-link","aria-current":"page"},{default:n(()=>[xs]),_:1}))])])])])])}const js=b(X,[["render",$s]]);export{Hs as F,js as N};
