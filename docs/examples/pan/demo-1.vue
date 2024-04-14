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
const isShownMessage = ref(false)
const currentDirection = ref(FsTouchInput.DIRECTION.None)

const getDirectionStr = FsTouchInput.getDirectionStr

onMounted(() => {
  // 禁用右键菜单
  detectRef.value!.oncontextmenu = () => false
  const manager = new FsTouchManager(detectRef.value!, {
    touchActions: ['none']
  })
  const recognizer = new FsTouchRecognizer.PanRecognizer()
  manager.add(recognizer)
  manager.on(FsTouchRecognizer.RECOGNIZER_TYPE.Pan, (e) => {
    console.log(e.type, e)
    if (currentDirection.value !== e.offsetDirection) {
      isShownMessage.value = false
      currentDirection.value = e.offsetDirection
    }
    if (e.isFinal) {
      isShownMessage.value = false
    }
    if (Math.abs(e.distance) > 50 && !isShownMessage.value) {
      isShownMessage.value = true
      ElMessage.success(`检测到拖动手势在${getDirectionStr(e.direction)}方向触发了！`)
    }
  })
})
</script>
