<template>
  <div ref="detectRef" class="press-detect-area">
    手势触发区域
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import FSTouch from '@touch-fusion/lib';
import { ElMessage } from 'element-plus';

const detectRef = ref(null)

onMounted(() => {
  const manager = new FSTouch.Core.Manager(detectRef.value!, {
    preventDefault: true
  })
  const recognizer = new FSTouch.Core.Recognizer.PressRecognizer({
    threshold: 5,
    time: 1000
  })
  manager.add(recognizer)
  manager.on([FSTouch.Constants.RECOGNIZER_TYPE.Press], (e) => {
    console.log(e)
    ElMessage.success('检测到长按手势触发了！')
  })
})
</script>

<style scoped>
.press-detect-area {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: var(--vp-c-brand-2);
  color: var(--vp-c-gray-1);
  text-align: center;
  cursor: pointer;
  &:active {
    background-color: var(--vp-c-brand-1);
  }
}
</style>
