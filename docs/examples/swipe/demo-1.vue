<template>
  <div ref="detectRef" class="gesture-area">
    手势触发区域
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FsTouchInput, FsTouchManager, FsTouchRecognizer } from 'touch-fusion';
import { ElMessage } from 'element-plus';

const detectRef = ref<HTMLDivElement | null>(null)

const getDirectionStr = FsTouchInput.getDirectionStr

onMounted(() => {
  const manager = new FsTouchManager(detectRef.value!)
  manager.on(FsTouchRecognizer.RECOGNIZER_TYPE.Swipe, (e) => {
    console.log(e.type, e)
    ElMessage.success(`检测到滑动手势在${getDirectionStr(e.direction)}方向触发了！`)
  })
})
</script>
