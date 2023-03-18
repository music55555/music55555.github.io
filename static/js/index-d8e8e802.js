import{e,q as l,o as t,c as s,p as a,a as o,b as r,at as c,f as n,S as i,k as d,w as u,a5 as p,r as v,j as m,i as f,v as b,G as g,O as w,Q as x,a2 as _,R as h,g as C,W as k,a9 as I,l as y,au as R}from"./.pnpm-f038f7dc.js";import{_ as D}from"./logo-dffdf75d.js";import{_ as M,d as S,g as T,a as V,b as j,o as J,e as E}from"./index-fdb8c1cc.js";const N=e=>(a("data-v-1e16e5bb"),e=e(),o(),e),q={class:"nav-bar-box"},F=[N((()=>r("div",{class:"logo"},[r("img",{src:D,alt:"logo",srcset:""}),r("span",null,"化简")],-1))),N((()=>r("div",{class:"center"},null,-1)))],L=M(e({props:{bgColor:{default:""},fontColor:{default:""},iconColor:{default:"#fff"}},setup:e=>(l((l=>({"1ae8ff9f":e.bgColor,"7db51995":e.fontColor,f2c518aa:e.iconColor}))),(e,l)=>(t(),s("div",q,F)))}),[["__scopeId","data-v-1e16e5bb"]]),O=e=>(a("data-v-90b654da"),e=e(),o(),e),P=O((()=>r("h1",null,"一款开源的、免费的简历设计神器",-1))),z=O((()=>r("p",null,"快速设计、简历主题切换，支持一键导出PDF、JSON数据等。",-1))),B=O((()=>r("div",{class:"right"},[r("img",{class:"bgc-img",src:"/static/images/index-6be2b647.png",alt:""})],-1))),G=M(e({emits:["freeMake","customTemplate"],setup(e,{emit:l}){const a=()=>{l("freeMake")},o=()=>{},n=()=>{l("customTemplate")};return c((()=>{S()})),(e,l)=>(t(),s("div",{class:"project-introduce-box",onMouseover:o},[r("div",{class:"left"},[P,z,r("div",{class:"see-more-box"},[r("div",{class:"button",onClick:a}," 免费制作 "),r("div",{class:"button",onClick:n}," 自定义模板 ")])]),B],32))}}),[["__scopeId","data-v-90b654da"]]),Q=[{id:"1",name:"template1",preview:"template1.png"},{id:"2",name:"template2",preview:"template2.png"},{id:"3",name:"template3",preview:"template3.png"},{id:"4",name:"template4",preview:"template4.png"},{id:"5",name:"template5",preview:"template5.png"},{id:"6",name:"template6",preview:"template6.png"}],U={class:"preview-box"},W=M(e({emits:["close"],setup(e,{emit:l}){const a=()=>{l("close")};return(e,l)=>{const o=n("CloseBold"),c=p;return t(),s("div",U,[i(e.$slots,"default",{},void 0,!0),r("div",{class:"close",onClick:a},[d(c,{color:"#fff"},{default:u((()=>[d(o)])),_:1})])])}}}),[["__scopeId","data-v-329d8db2"]]),$=["src"],A={class:"mask-layer"},H=["src"],K=M(e({props:{cardData:null},emits:["toDesign"],setup(e,{emit:l}){const a=e;let o=v(!1);const c=()=>{o.value=!0},n=()=>{o.value=!1},i=()=>{l("toDesign",a.cardData)},p=v(!1),x=()=>{p.value=!0},_=()=>{p.value=!1};return(l,a)=>{const v=V;return t(),s(w,null,[r("div",{class:"template-card-box",onMouseover:c,onMouseleave:n},[r("img",{src:m(T)(e.cardData.preview),alt:"",srcset:""},null,8,$),f(r("div",A,["custom"!==e.cardData.name?(t(),s("div",{key:0,class:"preview-icon",title:"预览",onClick:x},[d(v,{"icon-name":"icon-yulan","class-name":"yulan"})])):g("",!0),r("div",{class:"design-button",onClick:i},"立即免费制作")],512),[[b,m(o)]])],32),f(d(W,{onClose:_},{default:u((()=>[r("img",{class:"previewImg",src:m(T)(e.cardData.preview),alt:"",srcset:""},null,8,H)])),_:1},512),[[b,p.value]])],64)}}}),[["__scopeId","data-v-15c0b925"]]),X={class:"title"},Y=M(e({props:{title:null,subtitle:null,titleColor:null,subtitleColor:null},setup:e=>(l((l=>({eddd19ca:e.titleColor,"3876d60a":e.subtitleColor}))),(l,a)=>(t(),s("div",X,[r("h1",null,x(e.title),1),r("p",null,x(e.subtitle),1)])))}),[["__scopeId","data-v-270ed56e"]]),Z={class:"card-list"},ee=e({setup(e,{expose:l}){const{resetResumeJson:a}=j.useResumeJsonNewStore,{resetSelectModel:o}=j.useSelectMaterialStore,n=_(),i=e=>{J(),a(),o(),n.push({path:"/designer",query:{id:e.id,name:e.name}})},u=v(null);return l({scrollIntoView:()=>{u.value.scrollIntoView({behavior:"smooth"})}}),c((()=>{})),(e,l)=>(t(),s("div",{ref_key:"templateRef",ref:u,class:"template-select-box"},[d(Y,{title:"免费模板 + 用心设计",subtitle:"用心设计每一套模板，适合各行各业从业者","title-color":"#000","subtitle-color":"#7f8b96"}),r("div",Z,[(t(!0),s(w,null,h(m(Q),((e,l)=>(t(),C(K,{key:l,"card-data":e,onToDesign:i},null,8,["card-data"])))),128))])],512))}}),le=e=>(a("data-v-52762cc2"),e=e(),o(),e),te=le((()=>r("div",{class:"left-box"},[r("img",{src:"/static/images/index-drag-553cb2ca.png",alt:"",srcset:""})],-1))),se=le((()=>r("h1",null,"丰富的物料模块组件，可随意进行搭配，还可进行主题配置等等",-1))),ae=le((()=>r("p",null,"自定义的模板可提交至官方，将在首页展出",-1))),oe=M(e({setup(e,{expose:l}){const a=_(),{resetResumeJson:o}=j.useResumeJsonNewStore,c=()=>{o(),J(),a.push({path:"/custom"})},n=v(null);return l({scrollIntoView:()=>{n.value.scrollIntoView({behavior:"smooth"})}}),(e,l)=>(t(),s("div",{class:"custom-template-box",ref_key:"customTempleRef",ref:n},[d(Y,{title:"自定义模板 + 随心所欲",subtitle:"自定义模板，随意搭配，自定义主题","title-color":"#000","subtitle-color":"#7f8b96"}),r("div",{class:"bottom"},[te,r("div",{class:"right-box"},[se,ae,r("div",{class:"button",onClick:c}," 开始创建模板 ")])])],512))}}),[["__scopeId","data-v-52762cc2"]]),re={ref:"introduceRef"},ce=(e=>(a("data-v-2b68c346"),e=e(),o(),e))((()=>r("div",{style:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa","user-select":"none","border-radius":"50%","font-size":"14px"}}," UP ",-1))),ne=M(e({setup(e){E(),k((()=>{window.addEventListener("scroll",l)})),I((()=>{window.removeEventListener("scroll",l)}));const l=y.exports.throttle((()=>{n()}),300),a=v(""),o=v("#fff"),c=v("#fff"),n=()=>{document.documentElement.scrollTop>0?(a.value="#fff",o.value="green",c.value="green"):(a.value="",c.value="#fff",o.value="#fff")},i=v(null),p=()=>{i.value.scrollIntoView()},m=v(null),f=()=>{m.value.scrollIntoView()};return(e,l)=>{const v=R;return t(),s("div",{ref:"indexRef",class:"index-box",onScroll:n},[d(L,{"bg-color":a.value,"font-color":o.value,"icon-color":c.value},null,8,["bg-color","font-color","icon-color"]),r("div",re,[d(G,{onFreeMake:p,onCustomTemplate:f})],512),d(ee,{ref_key:"templeTef",ref:i},null,512),d(oe,{ref_key:"customTempleRef",ref:m},null,512),d(v,{bottom:100},{default:u((()=>[ce])),_:1})],544)}}}),[["__scopeId","data-v-2b68c346"]]);export{ne as default};
