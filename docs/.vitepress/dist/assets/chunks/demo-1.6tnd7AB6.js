import{g as r,u as n}from"./touch-fusion.CSYegzvW.js";import{E as a}from"./theme.BJh28Hep.js";import{d as c,h as l,l as u,o as m,c as f}from"./framework.DRO9vf8U.js";const g=c({__name:"demo-1",setup(d){const e=l(null);return u(()=>{e.value.oncontextmenu=()=>!1;const s=new r(e.value,{preventDefault:!0}),o=new n.PressRecognizer({threshold:20,time:1e3});s.add(o),s.on(n.RECOGNIZER_TYPE.Press,t=>{console.log(t.type,t),a.success("检测到长按手势触发了！")})}),(s,o)=>(m(),f("div",{ref_key:"detectRef",ref:e,class:"gesture-area"}," 手势触发区域 ",512))}});export{g as default};
