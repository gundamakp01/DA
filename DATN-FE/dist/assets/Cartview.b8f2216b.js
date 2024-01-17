import{B as V}from"./Button.1b730d54.js";import{N as D,F as M}from"./Navbar.530fb302.js";import{_ as T,h as x,r as _,c as l,d as g,b as e,F as c,f as u,e as k,w as L,i as q,j as h,v as y,k as b,t as a,l as I,o as n,p as A,m as U,a as B}from"./index.8ca39612.js";import{C as P}from"./CartService.79d7603b.js";import{U as F}from"./UserService.2295172e.js";import{O as E}from"./OrderService.f2483a15.js";import{P as R,D as G,W as O}from"./DistrictService.dcf93881.js";import{c as v,u as j,r as f,m as W,a as z,e as H}from"./index.71153627.js";import"./logonew2-removebg-preview.5a2cb390.js";import"./logonew1xoaphong.21314e25.js";import"./CategoryService.eeeee115.js";v.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);const Y={name:"Cartview",components:{Button:V,Navbar:D,Footer:M},setup:()=>({v$:j()}),data(){return{name:"",email:"",address:"",phone_number:"",errorCode:"",provider:"",carts:[],paymentMethod:1,provinceId:null,provinces:[],districtId:null,districts:[],wardId:null,wards:[]}},validations(){return{name:{required:v.withMessage("* Please type Your User Name.",f),minLength:W(3),maxLength:z(20)},email:{required:v.withMessage("* Please type Your Email Address.",f),email:H},address:{required:v.withMessage("* Please type Your Address.",f)},phone_number:{required:v.withMessage("* Please type Your Phone Number.",f)},provinceId:{required:v.withMessage("* Please select your province.",f)},districtId:{required:v.withMessage("* Please select your district.",f)},wardId:{required:v.withMessage("* Please select your ward.",f)}}},methods:{async fetchCarts(){const t=await P.getCart();t&&(this.carts=t.data.data)},formatPrice(t){return t!=null&&t.discount?Number(t==null?void 0:t.price.replace(/,/g,""))*(100-(t==null?void 0:t.discount))/100:Number(t==null?void 0:t.price.replace(/,/g,""))},async removeCart(t){var o=x();await P.deleteCart(t)?o.success("Delete Cart Successfully!",{timeout:2e3}):o.error("Delete Cart Successfully!",{timeout:2e3}),this.fetchCarts()},getTotalPrice(){var o;var t=0;for(let m=1;m<=this.carts.length;m++)console.log(this.formatPrice(this.carts[m])),t+=this.formatPrice((o=this.carts[m])==null?void 0:o.price);return t},async order(){var m,w;var t=x();if(await this.v$.$validate()){const r=await E.createOrder({address:{name:this.name,address:this.address,phone_number:this.phone_number,ward:this.wardId,district:this.districtId,city:this.provinceId,email:this.email}});if(r)if(t.success("\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng!",{timeout:2e3}),this.paymentMethod==1)this.$router.push("/");else{const p=await F.payment((w=(m=r==null?void 0:r.data)==null?void 0:m.data)==null?void 0:w.id);p&&(window.location.href=p.data.data)}}},async fetchProvices(){const t=await R.getProvinces();this.provinces=t.data.data},async fetchDistricts(){const t=await G.getDistrictByProvince(this.provinceId);this.districts=t.data.data},async fetchWards(){const t=await O.getWardByDistrictId(this.districtId);this.wards=t.data.data}},async created(){await this.fetchCarts(),await this.fetchProvices()},watch:{provinceId:function(t){this.fetchDistricts()},districtId:function(t){this.fetchWards()}},computed:{totalPrice:function(){var t=0;for(let o=0;o<this.carts.length;o++)t+=this.formatPrice(this.carts[o])*this.carts[o].quantity;return t}}},d=t=>(A("data-v-f11e77af"),t=t(),U(),t),X={id:"cart",class:"pt-5"},Q=d(()=>e("div",{class:"container pt-5 mt-5"},[e("h3",null,"Shopping Cart"),e("hr",{class:"hr"})],-1)),Z={id:"cart-container",class:"container pb-3 my-5"},J=d(()=>e("thead",null,[e("tr",null,[e("td",null,"Remove"),e("td",null,"Image"),e("td",null,"Product"),e("td",null,"Size"),e("td",null,"Price"),e("td",null,"Quantity"),e("td",null,"Total")])],-1)),K=["onClick"],ee=d(()=>e("i",{class:"fa fa-trash",style:{"font-size":"24px"}},null,-1)),te=[ee],se=["src"],oe=["onUpdate:modelValue"],le=B('<option value="1" data-v-f11e77af>1</option><option value="2" data-v-f11e77af>2</option><option value="3" data-v-f11e77af>3</option><option value="4" data-v-f11e77af>4</option><option value="5" data-v-f11e77af>5</option>',5),ne=[le],re={key:0},ie={colspan:"6"},ae=d(()=>e("br",null,null,-1)),de={id:"card-bottom",class:"container"},ce={class:"row mb-4"},ue={class:"coupon col-md-7 col-12"},he=d(()=>e("h5",null,"THONG TIN GIAO HANG",-1)),me={class:"d-flex flex-column mt-4 mb-5"},pe={class:"d-flex flex-column mb-4"},ve={class:"error-msg"},fe={class:"d-flex flex-column mb-4"},_e={class:"error-msg"},ge={class:"d-flex mb-4"},ye={class:"d-flex flex-column",style:{flex:"4"}},be={class:"error-msg"},we={class:"d-flex flex-column",style:{flex:"3"}},xe={class:"error-msg"},ke={class:"d-flex"},Ie={class:"d-flex flex-column",style:{flex:"1"}},Pe=d(()=>e("label",{class:"address-lable",for:"province"},"T\u1EC9nh/ Th\xE0nh ph\u1ED1",-1)),$e=["value"],Ce={class:"error-msg"},Ne={class:"d-flex flex-column",style:{flex:"1"}},Se=d(()=>e("label",{class:"address-lable",for:"district"},"Qu\u1EADn/ Huy\u1EC7n",-1)),Ve=["value"],De={class:"error-msg"},Me={class:"d-flex flex-column",style:{flex:"1"}},Te=d(()=>e("label",{class:"address-lable",for:"ward"},"X\xE3/ Ph\u01B0\u1EDDng",-1)),Le=["value"],qe={class:"error-msg"},Ae=d(()=>e("tr",{class:"total-line total-line-gift"},[e("td",{colspan:"2"},[e("p",null,'Sau khi "\u0110\u1EB7t h\xE0ng" th\xE0nh c\xF4ng, FALLEN ANGEL s\u1EBD ki\u1EC3m tra s\u1EA3n ph\u1EA9m v\xE0 \u0111\xF3ng g\xF3i ngay \u0111\u1EC3 giao h\xE0ng cho b\u1EA1n. Trong qu\xE1 tr\xECnh ki\u1EC3m tra s\u1EA3n ph\u1EA9m n\u1EBFu c\xF3 ph\xE1t sinh FALLEN ANGEL s\u1EBD li\xEAn h\u1EC7 tr\u1EF1c ti\u1EBFp v\u1EDBi qu\xFD kh\xE1ch \u0111\u1EC3 xin x\xE1c nh\u1EADn. FALLEN ANGEL Xin ch\xE2n th\xE0nh c\u1EA3m \u01A1n!')])],-1)),Ue={class:"total col-md-5 col-12 mb-4"},Be=d(()=>e("h5",null,"CART TOTAL",-1)),Fe={class:"d-flex justify-content-between"},Ee=d(()=>e("h6",null,"Subtotal",-1)),Re=d(()=>e("div",{class:"d-flex justify-content-between"},[e("h6",null,"Shipping"),e("p",null,"35,000")],-1)),Ge=d(()=>e("hr",{class:"second-hr"},null,-1)),Oe={class:"d-flex justify-content-between"},je=d(()=>e("h6",null,"Total",-1)),We={class:"m-2"},ze={class:"form-check"},He=d(()=>e("label",{class:"form-check-label",for:"flexRadioDefault1"}," Ti\u1EC1n m\u1EB7t ",-1)),Ye={class:"form-check"},Xe=d(()=>e("label",{class:"form-check-label",for:"flexRadioDefault2"}," Thanh to\xE1n VNPay ",-1)),Qe={class:"d-flex justify-content-end"};function Ze(t,o,m,w,r,p){const $=_("Navbar"),C=_("router-link"),N=_("Button"),S=_("Footer");return n(),l(c,null,[g($),e("section",X,[Q,e("div",Z,[e("table",null,[J,e("tbody",null,[(n(!0),l(c,null,u(r.carts,s=>(n(),l("tr",{key:s.id,class:"background-none"},[e("td",null,[e("a",{onClick:i=>p.removeCart(s.id)},te,8,K)]),e("td",null,[e("img",{src:s.image.url},null,8,se)]),e("td",null,[e("h5",null,a(s.product_name),1)]),e("td",null,[e("h5",null,a(s.size),1)]),e("td",null,[e("h5",null,a(p.formatPrice(s).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+"\u0111 ",1)]),e("td",null,[h(e("select",{"onUpdate:modelValue":i=>s.quantity=i},ne,8,oe),[[b,s.quantity]])]),e("td",null,[e("h5",null,a((p.formatPrice(s)*s.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])]))),128)),r.carts.length<1?(n(),l("tr",re,[e("td",ie,[k(" please purchase the product "),ae,g(C,{to:"/categories/1"},{default:L(()=>[k("Shop")]),_:1})])])):q("",!0)])])]),e("div",de,[e("div",ce,[e("div",ue,[e("div",null,[he,e("div",me,[e("div",pe,[h(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.v$.name.$model=s),id:"name",placeholder:"H\u1ECD v\xE0 t\xEAn"},null,512),[[y,t.v$.name.$model]]),(n(!0),l(c,null,u(t.v$.name.$errors,(s,i)=>(n(),l("div",{class:"input-errors",key:i},[e("div",ve,a(s.$message),1)]))),128))]),e("div",fe,[h(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=s=>t.v$.address.$model=s),id:"address",placeholder:"\u0110\u1ECBa ch\u1EC9"},null,512),[[y,t.v$.address.$model]]),(n(!0),l(c,null,u(t.v$.address.$errors,(s,i)=>(n(),l("div",{class:"input-errors",key:i},[e("div",_e,a(s.$message),1)]))),128))]),e("div",ge,[e("div",ye,[h(e("input",{type:"email","onUpdate:modelValue":o[2]||(o[2]=s=>t.v$.email.$model=s),id:"email",placeholder:"Email Address"},null,512),[[y,t.v$.email.$model]]),(n(!0),l(c,null,u(t.v$.email.$errors,(s,i)=>(n(),l("div",{class:"input-errors",key:i},[e("div",be,a(s.$message),1)]))),128))]),e("div",we,[h(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>t.v$.phone_number.$model=s),id:"phone-number",placeholder:"Phone Number"},null,512),[[y,t.v$.phone_number.$model]]),(n(!0),l(c,null,u(t.v$.phone_number.$errors,(s,i)=>(n(),l("div",{class:"input-errors",key:i},[e("div",xe,a(s.$message),1)]))),128))])]),e("div",ke,[e("div",Ie,[Pe,h(e("select",{class:"form-select","onUpdate:modelValue":o[4]||(o[4]=s=>r.provinceId=s)},[(n(!0),l(c,null,u(r.provinces,s=>(n(),l("option",{value:s.id},a(s.name),9,$e))),256))],512),[[b,r.provinceId]]),(n(!0),l(c,null,u(t.v$.provinceId.$errors,(s,i)=>(n(),l("div",{class:"input-errors",key:i},[e("div",Ce,a(s.$message),1)]))),128))]),e("div",Ne,[Se,h(e("select",{class:"form-select","onUpdate:modelValue":o[5]||(o[5]=s=>r.districtId=s)},[(n(!0),l(c,null,u(r.districts,s=>(n(),l("option",{value:s.id},a(s.name),9,Ve))),256))],512),[[b,r.districtId]]),(n(!0),l(c,null,u(t.v$.districtId.$errors,(s,i)=>(n(),l("div",{class:"input-errors",key:i},[e("div",De,a(s.$message),1)]))),128))]),e("div",Me,[Te,h(e("select",{class:"form-select","onUpdate:modelValue":o[6]||(o[6]=s=>r.wardId=s),placeholder:"X\xE3 Ph\u01B0\u1EDDng"},[(n(!0),l(c,null,u(r.wards,s=>(n(),l("option",{value:s.id},a(s.name),9,Le))),256))],512),[[b,r.wardId]]),(n(!0),l(c,null,u(t.v$.wardId.$errors,(s,i)=>(n(),l("div",{class:"input-errors",key:i},[e("div",qe,a(s.$message),1)]))),128))])])]),Ae])]),e("div",Ue,[e("div",null,[Be,e("div",Fe,[Ee,e("p",null,a(p.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)]),Re,Ge,e("div",Oe,[je,e("p",null,a((p.totalPrice+35e3).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)]),e("div",We,[e("div",ze,[h(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault","onUpdate:modelValue":o[7]||(o[7]=s=>r.paymentMethod=s),value:"1",id:"flexRadioDefault1"},null,512),[[I,r.paymentMethod]]),He]),e("div",Ye,[h(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault","onUpdate:modelValue":o[8]||(o[8]=s=>r.paymentMethod=s),value:"2",id:"flexRadioDefault2"},null,512),[[I,r.paymentMethod]]),Xe])]),e("div",Qe,[g(N,{class:"me-3",button_text:"process_to_checkout",onClick:p.order},null,8,["onClick"])])])])])])]),g(S)],64)}const dt=T(Y,[["render",Ze],["__scopeId","data-v-f11e77af"]]);export{dt as default};
