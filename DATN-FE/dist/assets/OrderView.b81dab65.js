import{_ as y,h as g,c as u,b as t,F as _,g as r,i as v,o as h,t as a,j as w,k as C,p as O,m as S}from"./index.85923ff2.js";import{C as x}from"./CartService.364a5eb6.js";import{O as f}from"./OrderService.4f886ce7.js";import{B as D}from"./Button.6425ad0b.js";const k={components:{Button:D},data(){return{orders:[],show:!1,carts:[],statuses:[]}},mounted(){this.fetchOrders(),this.fetchStatuses()},methods:{async fetchOrders(){const s=await f.getOrder();s&&(this.orders=s.data.data.orders)},fetchStatuses(){this.statuses=[{text:"PENDING",value:1},{text:"CONFIRMED",value:2},{text:"COMPLETED",value:3}]},formatPrice(s){return s!=null&&s.discount?Math.floor(Number(s==null?void 0:s.price.replace(/,/g,""))*(100-(s==null?void 0:s.discount))/100/1e3)*1e3:Number(s==null?void 0:s.price.replace(/,/g,""))},destroy(s){this.$swal({title:"Delete this order status?",text:"Are you sure? You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes, Delete it!"}).then(async l=>{l.value&&(await f.deleteOrder(s),await this.fetchOrders())})},async showDetailOrder(s){this.show=!0;const l=await x.getCartByOrderID(s);l&&(this.carts=l.data.data)},async changeStatusOrder(s,l){const m=g();await f.changeStatus({status:s,id:l})&&m.success("Thay \u0111\u1ED5i tr\u1EA1ng th\xE1i th\xE0nh c\xF4ng!")},customerAddress(s){var m,p,o,i,e,d,c,n;let l="";return(m=s==null?void 0:s.address)!=null&&m.address&&(l+=((p=s==null?void 0:s.address)==null?void 0:p.address)+", "),(o=s==null?void 0:s.address)!=null&&o.ward&&(l+=((i=s==null?void 0:s.address)==null?void 0:i.ward)+", "),(e=s==null?void 0:s.address)!=null&&e.district&&(l+=((d=s==null?void 0:s.address)==null?void 0:d.district)+", "),(c=s==null?void 0:s.address)!=null&&c.province&&(l+=(n=s==null?void 0:s.address)==null?void 0:n.province),l}}},b=s=>(O("data-v-c77c1d5a"),s=s(),S(),s),B={class:"table table-striped"},I=b(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Address"),t("th",{scope:"col"},"Payment Method"),t("th",{scope:"col"},"Order Date"),t("th",{scope:"col"})])],-1)),N={scope:"row"},P=["onUpdate:modelValue","onChange"],E=["value"],V=["onClick"],M=["onClick"],T={key:0,class:"modal",tabindex:"-1"},A={class:"modal-dialog modal-xl",style:{width:"800px"}},U={class:"modal-content"},F={class:"modal-header"},q=b(()=>t("h5",{class:"modal-title"},"Chi ti\u1EBFt \u0111\u01A1n h\xE0ng",-1)),z={class:"modal-body"},L={class:"table table-striped"},Y=b(()=>t("thead",null,[t("tr",null,[t("td",null,"Image"),t("td",null,"Product"),t("td",null,"Price"),t("td",null,"Size"),t("td",null,"Color"),t("td",null,"Quantity"),t("td",null,"Total")])],-1)),j=["src"],G={class:"modal-footer"};function Q(s,l,m,p,o,i){return h(),u("table",B,[I,t("tbody",null,[(h(!0),u(_,null,r(o.orders,(e,d)=>{var c;return h(),u("tr",{key:d,class:"align-middle"},[t("th",N,a(d+1),1),t("td",null,a(e.user.name),1),t("td",null,a(e.user.email),1),t("td",null,[w(t("select",{"onUpdate:modelValue":n=>e.status=n,onChange:n=>i.changeStatusOrder(e.status,e.id),class:"form-select","aria-label":"Default select example"},[(h(!0),u(_,null,r(o.statuses,n=>(h(),u("option",{value:n.value},a(n.text),9,E))),256))],40,P),[[C,e.status]])]),t("td",null,a(i.customerAddress(e)),1),t("td",null,a((c=e.payment)==null?void 0:c.payment_method_text),1),t("td",null,a(e.order_date),1),t("td",null,[t("button",{class:"btn btn-secondary me-2",onClick:n=>i.showDetailOrder(e.id)},"Detail",8,V),t("button",{class:"btn btn-danger",onClick:n=>i.destroy(e.id)},"Delete",8,M)])])}),128))]),o.show?(h(),u("div",T,[t("div",A,[t("div",U,[t("div",F,[q,t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:l[0]||(l[0]=e=>o.show=!1)})]),t("div",z,[t("table",L,[Y,t("tbody",null,[(h(!0),u(_,null,r(o.carts,e=>{var d,c;return h(),u("tr",{key:e.id,class:"align-middle"},[t("td",null,[t("img",{width:"100",height:"100",src:e.image.url,alt:""},null,8,j)]),t("td",null,[t("h5",null,a(e.product_name),1)]),t("td",null,[t("h5",null,a(i.formatPrice(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+"\u0111 ",1)]),t("td",null,a((d=e.size)==null?void 0:d.toUpperCase()),1),t("td",null,a((c=e.color)==null?void 0:c.toUpperCase()),1),t("td",null,a(e.quantity),1),t("td",null,[t("h5",null,a((i.formatPrice(e)*e.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])])}),128))])])]),t("div",G,[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:l[1]||(l[1]=e=>o.show=!1)},"Close")])])])])):v("",!0)])}const W=y(k,[["render",Q],["__scopeId","data-v-c77c1d5a"]]);export{W as default};
