import{_ as m,c as n,b as t,F as c,f as g,o as a,t as r}from"./index.8ca39612.js";import{C as u}from"./CategoryService.eeeee115.js";import{B as _}from"./Button.1b730d54.js";const C={components:{Button:_},data(){return{categories:[]}},mounted(){this.fetchCategories()},methods:{async fetchCategories(){const e=await u.getCategory();e&&(this.categories=e.data.data)},destroy(e){this.$swal({title:"Delete this order status?",text:"Are you sure? You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes, Delete it!"}).then(async o=>{o.value&&(await u.deleteCategory(e),await this.fetchCategories())})}}},b={class:"table table-striped"},f=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Image"),t("th",{scope:"col"},"Parent category"),t("th",{scope:"col"})])],-1),y={scope:"row"},w=["src"],$=["onClick"],k=["onClick"];function B(e,o,v,D,d,h){return a(),n(c,null,[t("button",{class:"btn btn-success",onClick:o[0]||(o[0]=s=>e.$router.push({name:"createCategories"}))},"Create"),t("table",b,[f,t("tbody",null,[(a(!0),n(c,null,g(d.categories,(s,l)=>{var i;return a(),n("tr",{key:l,class:"align-middle"},[t("th",y,r(l+1),1),t("td",null,r(s.name),1),t("td",null,[t("img",{width:"100",height:"80",src:(i=s.image)==null?void 0:i.url,alt:""},null,8,w)]),t("td",null,r(s.parent_id),1),t("td",null,[t("button",{class:"btn btn-secondary me-2",onClick:p=>e.$router.push(`categories/${s.id}/update`)},"Edit",8,$),t("button",{class:"btn btn-danger",onClick:p=>h.destroy(s.id)},"Delete",8,k)])])}),128))])])],64)}const N=m(C,[["render",B]]);export{N as default};
