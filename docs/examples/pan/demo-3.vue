<template>
  <ElButton type="primary" @click="onReturnOrg">回到容器</ElButton>
  <div ref="containerRef" class="gesture-area">
    <Teleport to="body" :disabled="!isDragging">
      <div ref="draggableBlockRef" class="draggable-block">
        尝试拖动我
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FsTouchInput, FsTouchManager, FsTouchRecognizer } from 'touch-fusion';

const draggableBlockRef = ref<HTMLDivElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

const isDragging = ref(false)
const originLeft = ref(0)
const originTop = ref(0)

const onReturnOrg = () => {
  isDragging.value = false
  draggableBlockRef.value.style.position = 'absolute'
  draggableBlockRef.value!.style.left = `${originLeft.value}px`
  draggableBlockRef.value!.style.top = `${originTop.value}px`
  draggableBlockRef.value!.style.zIndex = '0'
}

onMounted(() => {
  const containerRect = containerRef.value!.getBoundingClientRect()
  const draggableBlockRect = draggableBlockRef.value!.getBoundingClientRect()
  originLeft.value = containerRect.width / 2 - draggableBlockRect.width / 2
  originTop.value = containerRect.height / 2 - draggableBlockRect.height / 2
  draggableBlockRef.value!.style.left = `${originLeft.value}px`
  draggableBlockRef.value!.style.top = `${originTop.value}px`
  // 禁用右键菜单
  draggableBlockRef.value!.oncontextmenu = () => false
  const manager = new FsTouchManager(draggableBlockRef.value!, {
    touchActions: ['none']
  })
  const recognizer = new FsTouchRecognizer.PanRecognizer({
    pointers: 2
  })
  manager.add(recognizer)
  manager.on(FsTouchRecognizer.RECOGNIZER_TYPE.Pan, (e) => {
    if (e.eventType !== FsTouchInput.INPUT_STATE.End) {
      draggableBlockRef.value.style.position = 'fixed'
      draggableBlockRef.value.style.zIndex = '9999'
      isDragging.value = true
    }
    draggableBlockRef.value.style.left = `${e.center.x - draggableBlockRect.width / 2}px`
    draggableBlockRef.value.style.top = `${e.center.y -  draggableBlockRect.height / 2}px`
  })
})
</script>

<style scoped>
.gesture-area {
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 1rem;
  z-index: 1;
}
.gesture-area:active {
  background-color: var(--vp-c-brand-2);
}
.draggable-block {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: var(--vp-c-warning-2);
  cursor: move;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.draggable-block:active {
  background-color: var(--vp-c-warning-1);
}
</style>
