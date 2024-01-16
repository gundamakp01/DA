import{_ as a,c as u,b as e,j as n,v as i,Q as m,o as p}from"./index.340d75fa.js";import{O as l}from"./OrderService.981f256a.js";const c={data(){return{order:{},statuses:[]}},methods:{async submit(){this.$route.params.id?await l.updateOrder(this.$route.params.id,this.order):await l.createOrder(this.order),this.$router.push({name:"customers"})},async fetchOrder(){const o=await l.getOrderById(this.$route.params.id);o&&(this.order=o.data.data)},fetchStatuses(){this.statuses=[{text:"PENDING",value:1},{text:"CONFIRMED",value:2},{text:"COMPLETED",value:3}]}},mounted(){this.$route.params.id&&this.fetchOrder(),this.fetchStatuses()}},b={class:"mb-3"},h=e("label",null,"Name",-1),f={class:"mb-3"},_=e("label",null,"Email",-1),v={class:"mb-3"},x=e("label",null,"Phone",-1),y={class:"mb-3"},O=e("label",null,"Address",-1),w={class:"text-center"},E=e("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1);function V(o,t,k,B,r,d){return p(),u("form",{onSubmit:t[5]||(t[5]=m(s=>d.submit(),["prevent"]))},[e("div",b,[h,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>r.order.name=s)},null,512),[[i,r.order.name]])]),e("div",f,[_,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>r.order.email=s)},null,512),[[i,r.order.email]])]),e("div",v,[x,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>r.order.phone_number=s)},null,512),[[i,r.order.phone_number]])]),e("div",y,[O,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>r.order.address=s)},null,512),[[i,r.order.address]])]),e("div",w,[E,e("button",{type:"button",class:"btn btn-secondary",onClick:t[4]||(t[4]=s=>o.$router.back())},"Back")])],32)}const D=a(c,[["render",V]]);export{D as default};
