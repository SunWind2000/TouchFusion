# 快速开始

## 安装npm包

```bash
# 使用NPM
npm install touch-fusion
# 使用PNPM
pnpm install touch-fusion
```

## 在项目中引入

以下为在vue3中的使用方法，其他框架同理。  
尝试以下代码片段，该片段初始化了一个长按手势识别器，不出意外，在区域鼠标/手指按下1500ms后，将会在控制台出现事件信息打印。

```vue
<template>
  <div ref="gestureAreaRef" style="width: 100px;height: 100px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import FSTouch from 'touch-fusion';

// 获取元素变量
const gestureAreaRef = ref<HTMLDivElement | null>(null);

let manager: FSTouch.Manager | null = null

// 在界面挂载完成钩子里，绑定识别器和元素
onMounted(() => {
  manager = new FSTouch.Manager(gestureAreaRef.value!)
  // 设置手势识别器属性
  const recognizer = new FSTouch.Recognizer.PressRecognizer({
    time: 1500;
  });
  manager.add(recognizer);
  // 监听手势触发，并设置回调函数
  manager.on(FSTouch.Constants.RECOGNIZER_TYPE.Press, (e) => {
    console.log(e.type, e)
  })
})

// 在界面将要销毁时，移除元素上绑定的事件监听器，避免内存泄露
onBeforeUnmount(() => {
  manager.destroy()
})
</script>
```

## 高级用法

在vue3项目中，我们一般会针对不同手势封装成一个自定义指令。方便vue替我们处理各种元素的生命周期事件

```typescript
// directives/press.ts
import FSTouch from 'touch-fusion'

import type { ObjectDirective, DirectiveBinding } from 'vue'

interface CustomElement extends HTMLElement {
  manager?: FSTouch.Manager
}

const press: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<(...args: any[]) => any>) {
    el.manager = new FSTouch.Manager(el)

    // 设置手势识别器属性
    const recognizer = new FSTouch.Recognizer.PressRecognizer({
      time: 1500;
    });
    el.manager.add(recognizer);
    // 监听手势触发，并设置回调函数
    el.manager.on(FSTouch.Constants.RECOGNIZER_TYPE.Press, binding.value)
  },

  unmount() {
    el.manager.destroy()
  }
}

export default press
```
