<script setup>
  const columns = [
    { prop: 'attr', label: '属性' },
    { prop: 'desc', label: '说明' },
    { prop: 'type', label: '类型' },
    { prop: 'defaultValue', label: '默认值' }
  ]
  const data = [
    { attr: 'threshold', type: 'number', defaultValue: '0(px)', desc: '识别成功的最小位移距离' },
    { attr: 'pointers', type: 'number', defaultValue: '2', desc: '需要识别的输入点数量' }
  ]
</script>

# Pinch 捏合/开合手势

两指以上，在屏幕上捏合或扩张的手势

## 基础用法

两指在触摸检测区域捏合或张开，查看缩放比例，缩放事件会在整个触摸动作期间持续触发

<demo src="pinch/demo-1.vue"></demo>

## API

<attr-table :columns="columns" :data="data"></attr-table>
