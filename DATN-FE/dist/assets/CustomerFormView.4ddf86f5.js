import{_ as a,c as m,b as e,j as n,v as i,Q as d,o as p}from"./index.aedf396d.js";import{U as l}from"./UserService.fa3979e2.js";const c={data(){return{user:{}}},methods:{async submit(){this.$route.params.id?await l.updateUser(this.$route.params.id,this.user):await l.createUser(this.user),this.$router.push({name:"customers"})},async fetchUser(){const r=await l.getUserById(this.$route.params.id);r&&(this.user=r.data.data)}},mounted(){this.$route.params.id&&this.fetchUser()}},b={class:"mb-3"},f=e("label",null,"Name",-1),_={class:"mb-3"},h=e("label",null,"Email",-1),v={class:"mb-3"},y=e("label",null,"Phone",-1),U={class:"mb-3"},x=e("label",null,"Address",-1),w={class:"text-center"},V=e("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1);function k(r,s,B,S,o,u){return p(),m("form",{onSubmit:s[5]||(s[5]=d(t=>u.submit(),["prevent"]))},[e("div",b,[f,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>o.user.name=t)},null,512),[[i,o.user.name]])]),e("div",_,[h,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>o.user.email=t)},null,512),[[i,o.user.email]])]),e("div",v,[y,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>o.user.phone_number=t)},null,512),[[i,o.user.phone_number]])]),e("div",U,[x,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=t=>o.user.address=t)},null,512),[[i,o.user.address]])]),e("div",w,[V,e("button",{type:"button",class:"btn btn-secondary",onClick:s[4]||(s[4]=t=>r.$router.back())},"Back")])],32)}const E=a(c,[["render",k]]);export{E as default};
