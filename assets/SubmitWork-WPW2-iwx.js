import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as u,c as a,a as t}from"./app-zzoo0rc0.js";const m={props:{work_type:{type:String,required:!0},label_name:{type:String,required:!0}},data(){return{showForm:!1}},methods:{submitForm(){const n=this.$refs.name.value,e=this.$refs.why.value,s=this.$refs.style.value,l="mw_docs.yml",r=`MW & MWT 文档: ${n}`,o=`https://github.com/MWDOCS/Wakudocs.github.io/issues/new?&labels=${this.label_name}&projects=&template=${l}&title=${encodeURIComponent(r)}&name=${encodeURIComponent(n)}&why=${encodeURIComponent(e)}&style=${encodeURIComponent(s)}&status=${encodeURIComponent(s)}`;window.open(o)}}},_={class:"overlay"},d={class:"form-container"},p=t("label",null,[t("strong",null,"名称：")],-1),h={type:"text",ref:"name"},b=t("br",null,null,-1),f=t("label",null,[t("strong",null,"建议：")],-1),y={type:"text",ref:"why"},$=t("br",null,null,-1),w=t("label",null,[t("strong",null,"联系邮箱：")],-1),g={type:"email",ref:"style"},k=t("br",null,null,-1),v={class:"form-container-right"};function C(n,e,s,l,r,o){return u(),a("form",_,[t("div",d,[p,t("input",h,null,512),b,f,t("input",y,null,512),$,w,t("input",g,null,512),k]),t("div",v,[t("button",{onClick:e[0]||(e[0]=(...i)=>o.submitForm&&o.submitForm(...i)),type:"submit",class:"code-button"}," 提交 ")])])}const I=c(m,[["render",C],["__file","SubmitWork.vue"]]);export{I as default};