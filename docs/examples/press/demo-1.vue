<template>
  <div ref="detectRef" class="press-detect-area">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import FSTouch from '@touch-fusion/lib';

const detectRef = ref(null)

onMounted(() => {
  const manager = new FSTouch.Core.Manager(detectRef.value!)
  const recognizer = new FSTouch.Core.Recognizer.PressRecognizer({
    threshold: 10,
    time: 500
  })
  manager.add(recognizer)
  manager.on([FSTouch.Constants.RECOGNIZER_TYPE.Press], (e) => {
    console.log(e)
  })
})
</script>

<style scoped>
.press-detect-area {
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>
