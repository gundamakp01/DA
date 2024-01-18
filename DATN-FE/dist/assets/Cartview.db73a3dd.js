import{B as D}from"./Button.0230275f.js";import{N as V,F as M}from"./Navbar.51d87bf6.js";import{_ as L,h as x,r as f,c as l,d as y,b as e,F as c,f as u,e as I,w as A,i as U,j as m,v as g,k as b,t as n,l as k,o as r,p as B,m as q,a as F}from"./index.badbcfee.js";import{C as P}from"./CartService.a78d0112.js";import{U as E}from"./UserService.81bb65ba.js";import{O as R}from"./OrderService.df621bf3.js";import{P as T,D as O,W}from"./DistrictService.b2c01019.js";import{c as v,u as j,r as _,m as Y,a as z,e as G}from"./index.36475568.js";import"./logonew2-removebg-preview.5a2cb390.js";import"./logonew1xoaphong.97072bc2.js";import"./CategoryService.10737d50.js";v.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);const Q={name:"Cartview",components:{Button:D,Navbar:V,Footer:M},setup:()=>({v$:j()}),data(){return{name:"",email:"",address:"",phone_number:"",errorCode:"",provider:"",carts:[],paymentMethod:1,provinceId:null,provinces:[],districtId:null,districts:[],wardId:null,wards:[]}},validations(){return{name:{required:v.withMessage("* Please type Your User Name.",_),minLength:Y(3),maxLength:z(20)},email:{required:v.withMessage("* Please type Your Email Address.",_),email:G},address:{required:v.withMessage("* Please type Your Address.",_)},phone_number:{required:v.withMessage("* Please type Your Phone Number.",_)},provinceId:{required:v.withMessage("* Please select your province.",_)},districtId:{required:v.withMessage("* Please select your district.",_)},wardId:{required:v.withMessage("* Please select your ward.",_)}}},methods:{async fetchCarts(){const s=await P.getCart();s&&(this.carts=s.data.data)},formatPrice(s){return s!=null&&s.discount?Number(s==null?void 0:s.price.replace(/,/g,""))*(100-(s==null?void 0:s.discount))/100:Number(s==null?void 0:s.price.replace(/,/g,""))},async removeCart(s){var o=x();await P.deleteCart(s)?o.success("Delete Cart Successfully!",{timeout:2e3}):o.error("Delete Cart Successfully!",{timeout:2e3}),this.fetchCarts()},getTotalPrice(){var o;var s=0;for(let p=1;p<=this.carts.length;p++)console.log(this.formatPrice(this.carts[p])),s+=this.formatPrice((o=this.carts[p])==null?void 0:o.price);return s},async order(){var p,w;var s=x();if(await this.v$.$validate()){const i=await R.createOrder({address:{name:this.name,address:this.address,phone_number:this.phone_number,ward:this.wardId,district:this.districtId,city:this.provinceId,email:this.email}});if(i)if(s.success("\u0110\u1EB7t h\xE0ng th\xE0nh c\xF4ng!",{timeout:2e3}),this.paymentMethod==1)this.$router.push("/");else{const h=await E.payment((w=(p=i==null?void 0:i.data)==null?void 0:p.data)==null?void 0:w.id);h&&(window.location.href=h.data.data)}}},async fetchProvices(){const s=await T.getProvinces();this.provinces=s.data.data},async fetchDistricts(){const s=await O.getDistrictByProvince(this.provinceId);this.districts=s.data.data},async fetchWards(){const s=await W.getWardByDistrictId(this.districtId);this.wards=s.data.data}},async created(){await this.fetchCarts(),await this.fetchProvices()},watch:{provinceId:function(s){this.fetchDistricts()},districtId:function(s){this.fetchWards()}},computed:{totalPrice:function(){var s=0;for(let o=0;o<this.carts.length;o++)s+=this.formatPrice(this.carts[o])*this.carts[o].quantity;return s}}},d=s=>(B("data-v-a556ed42"),s=s(),q(),s),Z={id:"cart",class:"pt-5"},H=d(()=>e("div",{class:"container pt-5 mt-5"},[e("h3",null,"Shopping Cart"),e("hr",{class:"hr"})],-1)),J={id:"cart-container",class:"container pb-3 my-5"},K=d(()=>e("thead",null,[e("tr",null,[e("td",null,"Remove"),e("td",null,"Image"),e("td",null,"Product"),e("td",null,"Size"),e("td",null,"Price"),e("td",null,"Quantity"),e("td",null,"Total")])],-1)),X=["onClick"],ee=d(()=>e("i",{class:"fa fa-trash",style:{"font-size":"24px"}},null,-1)),te=[ee],se=["src"],oe=["onUpdate:modelValue"],le=F('<option value="1" data-v-a556ed42>1</option><option value="2" data-v-a556ed42>2</option><option value="3" data-v-a556ed42>3</option><option value="4" data-v-a556ed42>4</option><option value="5" data-v-a556ed42>5</option>',5),re=[le],ie={key:0},ae={colspan:"6"},ne=d(()=>e("br",null,null,-1)),de={id:"card-bottom",class:"container"},ce={class:"row mb-4"},ue={class:"coupon col-md-7 col-12"},me=d(()=>e("h5",null,"DELIVERY INFORMATION",-1)),pe={class:"d-flex flex-column mt-4 mb-5"},he={class:"d-flex flex-column mb-4"},ve={class:"error-msg"},_e={class:"d-flex mb-4"},fe={class:"d-flex flex-column",style:{flex:"4"}},ye={class:"error-msg"},ge={class:"d-flex flex-column",style:{flex:"3"}},be={class:"error-msg"},we={class:"d-flex flex-column mb-4"},xe={class:"error-msg"},Ie={class:"d-flex"},ke={class:"d-flex flex-column",style:{flex:"1"}},Pe=d(()=>e("label",{class:"address-lable",for:"province"},"Province",-1)),Ce=["value"],$e={class:"error-msg"},Ne={class:"d-flex flex-column",style:{flex:"1"}},Se=d(()=>e("label",{class:"address-lable",for:"district"},"District",-1)),De=["value"],Ve={class:"error-msg"},Me={class:"d-flex flex-column",style:{flex:"1"}},Le=d(()=>e("label",{class:"address-lable",for:"ward"},"Ward",-1)),Ae=["value"],Ue={class:"error-msg"},Be=d(()=>e("tr",{class:"total-line total-line-gift"},[e("td",{colspan:"2"},[e("p",null," After a successful 'Order' placement, FALLEN ANGEL will inspect the product and promptly package it for delivery to you. During the product inspection process, if any issues arise, FALLEN ANGEL will directly contact you for confirmation. FALLEN ANGEL sincerely appreciates your cooperation! ")])],-1)),qe={class:"total col-md-5 col-12 mb-4"},Fe=d(()=>e("h5",null,"CART TOTAL",-1)),Ee={class:"d-flex justify-content-between"},Re=d(()=>e("h6",null,"Subtotal",-1)),Te=d(()=>e("div",{class:"d-flex justify-content-between"},[e("h6",null,"Shipping"),e("p",null,"35,000")],-1)),Oe=d(()=>e("hr",{class:"second-hr"},null,-1)),We={class:"d-flex justify-content-between"},je=d(()=>e("h6",null,"Total",-1)),Ye={class:"m-2"},ze={class:"form-check"},Ge=d(()=>e("label",{class:"form-check-label",for:"flexRadioDefault1"}," Cash ",-1)),Qe={class:"form-check"},Ze=d(()=>e("label",{class:"form-check-label",for:"flexRadioDefault2"}," Payment via VNPay ",-1)),He={class:"d-flex justify-content-end"};function Je(s,o,p,w,i,h){const C=f("Navbar"),$=f("router-link"),N=f("Button"),S=f("Footer");return r(),l(c,null,[y(C),e("section",Z,[H,e("div",J,[e("table",null,[K,e("tbody",null,[(r(!0),l(c,null,u(i.carts,t=>(r(),l("tr",{key:t.id,class:"background-none"},[e("td",null,[e("a",{onClick:a=>h.removeCart(t.id)},te,8,X)]),e("td",null,[e("img",{src:t.image.url},null,8,se)]),e("td",null,[e("h5",null,n(t.product_name),1)]),e("td",null,[e("h5",null,n(t.size),1)]),e("td",null,[e("h5",null,n(h.formatPrice(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+"\u0111 ",1)]),e("td",null,[m(e("select",{"onUpdate:modelValue":a=>t.quantity=a},re,8,oe),[[b,t.quantity]])]),e("td",null,[e("h5",null,n((h.formatPrice(t)*t.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])]))),128)),i.carts.length<1?(r(),l("tr",ie,[e("td",ae,[I(" please purchase the product "),ne,y($,{to:"/categories/1"},{default:A(()=>[I("Shop")]),_:1})])])):U("",!0)])])]),e("div",de,[e("div",ce,[e("div",ue,[e("div",null,[me,e("div",pe,[e("div",he,[m(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.v$.name.$model=t),id:"name",placeholder:"Name"},null,512),[[g,s.v$.name.$model]]),(r(!0),l(c,null,u(s.v$.name.$errors,(t,a)=>(r(),l("div",{class:"input-errors",key:a},[e("div",ve,n(t.$message),1)]))),128))]),e("div",_e,[e("div",fe,[m(e("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=t=>s.v$.email.$model=t),id:"email",placeholder:"Email Address"},null,512),[[g,s.v$.email.$model]]),(r(!0),l(c,null,u(s.v$.email.$errors,(t,a)=>(r(),l("div",{class:"input-errors",key:a},[e("div",ye,n(t.$message),1)]))),128))]),e("div",ge,[m(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>s.v$.phone_number.$model=t),id:"phone-number",placeholder:"Phone Number"},null,512),[[g,s.v$.phone_number.$model]]),(r(!0),l(c,null,u(s.v$.phone_number.$errors,(t,a)=>(r(),l("div",{class:"input-errors",key:a},[e("div",be,n(t.$message),1)]))),128))])]),e("div",we,[m(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.v$.address.$model=t),id:"address",placeholder:"Address"},null,512),[[g,s.v$.address.$model]]),(r(!0),l(c,null,u(s.v$.address.$errors,(t,a)=>(r(),l("div",{class:"input-errors",key:a},[e("div",xe,n(t.$message),1)]))),128))]),e("div",Ie,[e("div",ke,[Pe,m(e("select",{class:"form-select","onUpdate:modelValue":o[4]||(o[4]=t=>i.provinceId=t)},[(r(!0),l(c,null,u(i.provinces,t=>(r(),l("option",{key:t.id,value:t.id},n(t.name),9,Ce))),128))],512),[[b,i.provinceId]]),(r(!0),l(c,null,u(s.v$.provinceId.$errors,(t,a)=>(r(),l("div",{class:"input-errors",key:a},[e("div",$e,n(t.$message),1)]))),128))]),e("div",Ne,[Se,m(e("select",{class:"form-select","onUpdate:modelValue":o[5]||(o[5]=t=>i.districtId=t)},[(r(!0),l(c,null,u(i.districts,t=>(r(),l("option",{value:t.id,key:t.id},n(t.name),9,De))),128))],512),[[b,i.districtId]]),(r(!0),l(c,null,u(s.v$.districtId.$errors,(t,a)=>(r(),l("div",{class:"input-errors",key:a},[e("div",Ve,n(t.$message),1)]))),128))]),e("div",Me,[Le,m(e("select",{class:"form-select","onUpdate:modelValue":o[6]||(o[6]=t=>i.wardId=t),placeholder:"Ward"},[(r(!0),l(c,null,u(i.wards,t=>(r(),l("option",{key:t.id,value:t.id},n(t.name),9,Ae))),128))],512),[[b,i.wardId]]),(r(!0),l(c,null,u(s.v$.wardId.$errors,(t,a)=>(r(),l("div",{class:"input-errors",key:a},[e("div",Ue,n(t.$message),1)]))),128))])])]),Be])]),e("div",qe,[e("div",null,[Fe,e("div",Ee,[Re,e("p",null,n(h.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)]),Te,Oe,e("div",We,[je,e("p",null,n((h.totalPrice+35e3).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)]),e("div",Ye,[e("div",ze,[m(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault","onUpdate:modelValue":o[7]||(o[7]=t=>i.paymentMethod=t),value:"1",id:"flexRadioDefault1"},null,512),[[k,i.paymentMethod]]),Ge]),e("div",Qe,[m(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault","onUpdate:modelValue":o[8]||(o[8]=t=>i.paymentMethod=t),value:"2",id:"flexRadioDefault2"},null,512),[[k,i.paymentMethod]]),Ze])]),e("div",He,[y(N,{class:"me-3",button_text:"process_to_checkout",onClick:h.order},null,8,["onClick"])])])])])])]),y(S)],64)}const dt=L(Q,[["render",Je],["__scopeId","data-v-a556ed42"]]);export{dt as default};
