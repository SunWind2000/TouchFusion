<script setup>
  const columns = [
    { prop: 'attr', label: '属性' },
    { prop: 'desc', label: '说明' },
    { prop: 'type', label: '类型' },
    { prop: 'defaultValue', label: '默认值' }
  ]
  const data = [
    { attr: 'direction', type: 'enum', defaultValue: 'DIRECTION.ALL', desc: '需要识别的滑动方向' },
    { attr: 'threshold', type: 'number', defaultValue: '10(px)', desc: '识别成功的最小位移距离' },
    { attr: 'pointers', type: 'number', defaultValue: '1', desc: '需要识别的输入点数量' },
    { attr: 'velocity', type: 'number', defaultValue: '0.3', desc: '触摸点滑动的最小速度' }
  ]
</script>

# Swipe 滑动手势

触摸点落下，且在一定时间内，滑动了一定距离的手势。  
和`Pan 拖拽手势`相比，滑动手势在触摸点落下到抬起的时间、移动的距离和速度都有相应要求。  
且滑动手势可以被认为是一个`短手势`，即只在手势被识别后才会触发Emit，而`Pan 拖拽手势`则在触摸点每个移动的事件都会触发

## 基础用法

在下面的触摸区域中手指快速左右滑动，会触发提示，并在控制台打印详细的事件内容
Emit。

:::warning
我们一般不会使用竖直方向的滑动手势，因为竖直方向一般会有浏览器默认的scroll事件
:::

<demo src="swipe/demo-1.vue"></demo>

## 限制滑动速度

拖动下方滑块来给识别器设置不同的识别需要的最小滑动速度，默认0.3，此值越大，则需要滑动的越快才能触发事件

<demo src="swipe/demo-2.vue"></demo>

## 多指滑动

尝试两根手指在下方手势识别区域滑动

<demo src="swipe/demo-3.vue"></demo>

## API

<attr-table :columns="columns" :data="data"></attr-table>


