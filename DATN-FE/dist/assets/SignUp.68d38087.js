import{c as u,u as y,r as c,m as I,a as P,e as U}from"./index.cc09fcd4.js";import{_ as k,r as M,c as o,b as r,d as f,w as $,t as a,j as h,v,F as d,f as l,k as _,o as t,p as S,m as q}from"./index.aedf396d.js";import{U as V}from"./UserService.fa3979e2.js";import{P as C,D,W as N}from"./DistrictService.9e7f110c.js";import{_ as F}from"./logo.d15f1ef9.js";const b=u.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/),L={name:"signup",setup:()=>({v$:y()}),data(){return{name:"",email:"",password:"",confirm_password:"",phone_number:"",errorCode:"",provider:"",provinceId:null,provinces:[],districtId:null,districts:[],wardId:null,wards:[]}},validations(){return{name:{required:u.withMessage("* Please type Your User Name.",c),minLength:I(3),maxLength:P(20)},email:{required:u.withMessage("* Please type Your Email Address.",c),email:U},password:{required:u.withMessage("* Please type Your Password.",c),pass:u.withMessage("* Must contain at least one number and one uppercase and lowercase letter required.",b)},confirm_password:{required:u.withMessage("* Please Confirm Your Password.",c),pass:u.withMessage("* Must contain at least one number and one uppercase and lowercase letter required.",b)},phone_number:{required:u.withMessage("* Please type Your Phone Number.",c)},provinceId:{required:u.withMessage("* Please select your province.",c)},districtId:{required:u.withMessage("* Please select your district.",c)},wardId:{required:u.withMessage("* Please select your ward.",c)}}},methods:{async submitForm(){await this.v$.$validate()==!0&&await V.signup({name:this.name,email:this.email,password:this.password,confirm_password:this.confirm_password,phone_number:this.phone_number,province_id:this.provinceId,district_id:this.districtId,ward_id:this.wardId}).then(()=>{this.$router.push({name:"Home"})})},async fetchProvices(){const s=await C.getProvinces();this.provinces=s.data.data},async fetchDistricts(){const s=await D.getDistrictByProvince(this.provinceId);this.districts=s.data.data},async fetchWards(){const s=await N.getWardByDistrictId(this.districtId);this.wards=s.data.data}},watch:{provinceId:function(s){this.fetchDistricts()},districtId:function(s){this.fetchWards()}},mounted(){this.fetchProvices()}},m=s=>(S("data-v-76620b98"),s=s(),q(),s),B={id:"signup"},W={class:"container"},Y=m(()=>r("img",{src:F,alt:"logo1"},null,-1)),E=m(()=>r("h1",null,"Sign Up",-1)),A={class:"input-errors mb-3 text-center"},T=m(()=>r("label",{for:"name"},"User Name",-1)),H={class:"error-msg"},j=m(()=>r("label",{for:"email"},"E-Mail",-1)),z={class:"error-msg"},Q=m(()=>r("label",{for:"password"},"Password",-1)),X={class:"error-msg"},Z=m(()=>r("label",{for:"confirm-password"},"Confirm Password",-1)),G={class:"error-msg"},J=m(()=>r("label",{for:"phone-number"},"Phone Number",-1)),K={class:"error-msg"},O=m(()=>r("label",{for:"province"},"T\u1EC9nh/ Th\xE0nh ph\u1ED1",-1)),R=["value"],x={class:"error-msg"},ee=m(()=>r("label",{for:"district"},"Qu\u1EADn/ Huy\u1EC7n",-1)),se=["value"],re={class:"error-msg"},oe=m(()=>r("label",{for:"ward"},"X\xE3/ Ph\u01B0\u1EDDng",-1)),te=["value"],ie={class:"error-msg"},ne=m(()=>r("h4",null,"Login",-1));function ae(s,i,de,le,p,w){const g=M("router-link");return t(),o("section",B,[r("div",W,[f(g,{to:"/","aria-current":"page"},{default:$(()=>[Y]),_:1}),E,r("h3",A,a(p.errorCode),1),T,h(r("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=e=>s.v$.name.$model=e),id:"name",placeholder:"User Name"},null,512),[[v,s.v$.name.$model]]),(t(!0),o(d,null,l(s.v$.name.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",H,a(e.$message),1)]))),128)),j,h(r("input",{type:"email","onUpdate:modelValue":i[1]||(i[1]=e=>s.v$.email.$model=e),id:"email",placeholder:"Email Address"},null,512),[[v,s.v$.email.$model]]),(t(!0),o(d,null,l(s.v$.email.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",z,a(e.$message),1)]))),128)),Q,h(r("input",{type:"password","onUpdate:modelValue":i[2]||(i[2]=e=>s.v$.password.$model=e),id:"password",placeholder:"Password"},null,512),[[v,s.v$.password.$model]]),(t(!0),o(d,null,l(s.v$.password.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",X,a(e.$message),1)]))),128)),Z,h(r("input",{type:"password","onUpdate:modelValue":i[3]||(i[3]=e=>s.v$.confirm_password.$model=e),id:"confirm-password",placeholder:"Confirm Password"},null,512),[[v,s.v$.confirm_password.$model]]),(t(!0),o(d,null,l(s.v$.confirm_password.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",G,a(e.$message),1)]))),128)),J,h(r("input",{type:"text","onUpdate:modelValue":i[4]||(i[4]=e=>s.v$.phone_number.$model=e),id:"phone-number",placeholder:"Phone Number"},null,512),[[v,s.v$.phone_number.$model]]),(t(!0),o(d,null,l(s.v$.phone_number.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",K,a(e.$message),1)]))),128)),O,h(r("select",{class:"form-select","onUpdate:modelValue":i[5]||(i[5]=e=>p.provinceId=e)},[(t(!0),o(d,null,l(p.provinces,e=>(t(),o("option",{value:e.id},a(e.name),9,R))),256))],512),[[_,p.provinceId]]),(t(!0),o(d,null,l(s.v$.provinceId.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",x,a(e.$message),1)]))),128)),ee,h(r("select",{class:"form-select","onUpdate:modelValue":i[6]||(i[6]=e=>p.districtId=e)},[(t(!0),o(d,null,l(p.districts,e=>(t(),o("option",{value:e.id},a(e.name),9,se))),256))],512),[[_,p.districtId]]),(t(!0),o(d,null,l(s.v$.districtId.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",re,a(e.$message),1)]))),128)),oe,h(r("select",{class:"form-select","onUpdate:modelValue":i[7]||(i[7]=e=>p.wardId=e)},[(t(!0),o(d,null,l(p.wards,e=>(t(),o("option",{value:e.id},a(e.name),9,te))),256))],512),[[_,p.wardId]]),(t(!0),o(d,null,l(s.v$.wardId.$errors,(e,n)=>(t(),o("div",{class:"input-errors",key:n},[r("div",ie,a(e.$message),1)]))),128)),r("button",{onClick:i[8]||(i[8]=(...e)=>w.submitForm&&w.submitForm(...e)),type:"button"},"Sign Up"),f(g,{to:"/login",class:"link"},{default:$(()=>[ne]),_:1})])])}const ve=k(L,[["render",ae],["__scopeId","data-v-76620b98"]]);export{ve as default};
