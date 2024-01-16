import{_ as m,c as l,b as t,F as i,g,o as r,t as n}from"./index.09db911f.js";import{B as u}from"./BlogService.ca8bab80.js";import{B}from"./Button.6aed1d62.js";const _={components:{Button:B},data(){return{blogs:[]}},mounted(){this.fetchBlogs()},methods:{async fetchBlogs(){const e=await u.getBlog();e&&(this.blogs=e.data.data)},destroy(e){this.$swal({title:"Delete this order status?",text:"Are you sure? You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"Yes, Delete it!"}).then(async s=>{s.value&&(await u.deleteBlog(e),await this.fetchBlogs())})}}},b={class:"table table-striped"},f=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Image"),t("th",{scope:"col"},"Description"),t("th",{scope:"col"},"Content"),t("th",{scope:"col"})])],-1),w={scope:"row"},y=["src"],C=["onClick"],$=["onClick"];function k(e,s,v,D,d,h){return r(),l(i,null,[t("button",{class:"btn btn-success",onClick:s[0]||(s[0]=o=>e.$router.push({name:"createBlogs"}))},"Create"),t("table",b,[f,t("tbody",null,[(r(!0),l(i,null,g(d.blogs,(o,a)=>{var c;return r(),l("tr",{key:a,class:"align-middle"},[t("th",w,n(a+1),1),t("td",null,n(o.name),1),t("td",null,[t("img",{width:"100",height:"80",src:(c=o.image)==null?void 0:c.url,alt:""},null,8,y)]),t("td",null,n(o.description),1),t("td",null,n(o.content),1),t("td",null,[t("button",{class:"btn btn-secondary me-2",onClick:p=>e.$router.push(`blogs/${o.id}/update`)},"Edit",8,C),t("button",{class:"btn btn-danger",onClick:p=>h.destroy(o.id)},"Delete",8,$)])])}),128))])])],64)}const N=m(_,[["render",k]]);export{N as default};
