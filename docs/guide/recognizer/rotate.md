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

# Rotate 旋转手势

两指以上，在屏幕上做圆弧方向移动的手势

## 基础用法

两指在触摸检测区域做旋转动作，查看旋转角度

<demo src="rotate/demo-1.vue"></demo>

## API

<attr-table :columns="columns" :data="data"></attr-table>
