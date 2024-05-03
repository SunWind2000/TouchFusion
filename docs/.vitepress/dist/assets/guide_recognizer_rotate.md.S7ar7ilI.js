import{E as a,c as C,J as n,m as s,a as E,o as t}from"./chunks/framework.DRO9vf8U.js";const F=s("h1",{id:"rotate-旋转手势",tabindex:"-1"},[E("Rotate 旋转手势 "),s("a",{class:"header-anchor",href:"#rotate-旋转手势","aria-label":'Permalink to "Rotate 旋转手势"'},"​")],-1),c=s("p",null,"两指以上，在屏幕上做圆弧方向移动的手势",-1),r=s("h2",{id:"基础用法",tabindex:"-1"},[E("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),A=s("p",null,"两指在触摸检测区域做旋转动作，查看旋转角度",-1),D=s("h2",{id:"api",tabindex:"-1"},[E("API "),s("a",{class:"header-anchor",href:"#api","aria-label":'Permalink to "API"'},"​")],-1),m=JSON.parse('{"title":"Rotate 旋转手势","description":"","frontmatter":{},"headers":[],"relativePath":"guide/recognizer/rotate.md","filePath":"guide/recognizer/rotate.md","lastUpdated":1712323428000}'),y={name:"guide/recognizer/rotate.md"},h=Object.assign(y,{setup(i){const l=[{prop:"attr",label:"属性"},{prop:"desc",label:"说明"},{prop:"type",label:"类型"},{prop:"defaultValue",label:"默认值"}],e=[{attr:"threshold",type:"number",defaultValue:"0(px)",desc:"识别成功的最小位移距离"},{attr:"pointers",type:"number",defaultValue:"2",desc:"需要识别的输入点数量"}];return(B,d)=>{const o=a("demo"),p=a("attr-table");return t(),C("div",null,[F,c,r,A,n(o,{src:"rotate/demo-1.vue",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%20ref%3D%22detectRef%22%20class%3D%22gesture-area%22%3E%0A%20%20%20%20%E6%89%8B%E5%8A%BF%E8%A7%A6%E5%8F%91%E5%8C%BA%E5%9F%9F%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%2C%20onMounted%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20FsTouchManager%2C%20FsTouchRecognizer%20%7D%20from%20'touch-fusion'%3B%0Aimport%20%7B%20ElMessage%20%7D%20from%20'element-plus'%3B%0A%0Aconst%20detectRef%20%3D%20ref%3CHTMLDivElement%20%7C%20null%3E(null)%0Aconst%20lastScale%20%3D%20ref(1)%0Aconst%20messageInstance%20%3D%20ref(%5B%5D)%0A%0AonMounted(()%20%3D%3E%20%7B%0A%20%20const%20manager%20%3D%20new%20FsTouchManager(detectRef.value!)%0A%20%20manager.on(FsTouchRecognizer.RECOGNIZER_TYPE.Rotate%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20if%20(e.rotation.toFixed(2)%20!%3D%3D%20'0.00')%20%7B%0A%20%20%20%20%20%20const%20ins%20%3D%20ElMessage.success(%7B%0A%20%20%20%20%20%20%20%20message%3A%20%60%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6%EF%BC%9A%24%7Be.rotation.toFixed(2)%7D%2C%20%E8%A7%A6%E6%91%B8%E7%82%B9%E6%95%B0%EF%BC%9A%24%7Be.pointers.length%7D%60%2C%0A%20%20%20%20%20%20%20%20repeatNum%3A%201%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20messageInstance.value.push(ins)%0A%20%20%20%20%20%20if%20(messageInstance.value.length%20%3E%201)%20%7B%0A%20%20%20%20%20%20%20%20messageInstance.value.shift()%3F.close()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20lastScale.value%20%3D%20e.scale%0A%20%20%7D)%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.gesture-area%20%7B%0A%20%20height%3A%20300px%3B%0A%20%20line-height%3A%20300px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",htmlStr:"%3Cpre%20class%3D%22shiki%20github-dark%22%20style%3D%22background-color%3A%2324292e%3Bcolor%3A%23e1e4e8%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22detectRef%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22gesture-area%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%E6%89%8B%E5%8A%BF%E8%A7%A6%E5%8F%91%E5%8C%BA%E5%9F%9F%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20ref%2C%20onMounted%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'vue'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20FsTouchManager%2C%20FsTouchRecognizer%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'touch-fusion'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20ElMessage%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'element-plus'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20detectRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EHTMLDivElement%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20null%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20lastScale%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20messageInstance%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%5B%5D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20manager%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20new%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20FsTouchManager%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(detectRef.value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E!%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20manager.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eon%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(FsTouchRecognizer.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3ERECOGNIZER_TYPE%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E.Rotate%2C%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3Ee%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20%20%20if%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20(e.rotation.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EtoFixed%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E!%3D%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'0.00'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20%20%20%20%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20ins%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20ElMessage.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Esuccess%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20message%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%60%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6%EF%BC%9A%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Ee%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Erotation%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EtoFixed%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%7D%2C%20%E8%A7%A6%E6%91%B8%E7%82%B9%E6%95%B0%EF%BC%9A%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Ee%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3Epointers%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Elength%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%7D%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20repeatNum%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20messageInstance.value.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Epush%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(ins)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20%20%20%20%20if%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20(messageInstance.value.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Elength%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%201%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20messageInstance.value.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eshift%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E()%3F.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eclose%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20lastScale.value%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20e.scale%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E.gesture-area%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E300%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20line-height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E300%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",description:"",codePath:"../../../examples/rotate/demo-1.vue"}),D,n(p,{columns:l,data:e})])}}});export{m as __pageData,h as default};
