<template>
  <ElSlider
    v-model="velocity"
    :min="0.1"
    :max="10"
    :step="0.1"
    show-input 
    style="width: 100%;margin-bottom: 1rem;"
    @change="onChangeVelocity"
  />
  <div ref="detectRef" class="gesture-area">
    手势触发区域
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FsTouchInput, FsTouchManager, FsTouchRecognizer } from 'touch-fusion';
import { ElMessage } from 'element-plus';

const detectRef = ref<HTMLDivElement | null>(null)
const velocity = ref(0.3)

const getDirectionStr = FsTouchInput.getDirectionStr
let manager: FsTouchManager

function onChangeVelocity(value: number) {
  if (!manager) return
  const recognizer = manager.setOptions(FsTouchRecognizer.RECOGNIZER_TYPE.Swipe, {
    velocity: value
  })
  if (recognizer) {
    console.log('设置滑动手势识别器的速度阈值为：', recognizer.options.velocity)
  }
}

onMounted(() => {
  manager = new FsTouchManager(detectRef.value!)
  manager.on(FsTouchRecognizer.RECOGNIZER_TYPE.Swipe, (e) => {
    console.log(e.type, e)
    ElMessage.success(`检测到滑动手势在${getDirectionStr(e.direction)}方向触发了！`)
  })
})
</script>
