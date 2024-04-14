<script setup>
  const columns = [
    { prop: 'attr', label: '属性' },
    { prop: 'desc', label: '说明' },
    { prop: 'type', label: '类型' },
    { prop: 'defaultValue', label: '默认值' }
  ]
  const data = [
    { attr: 'direction', type: 'enum', defaultValue: 'DIRECTION.ALL', desc: '需要识别的拖拽方向' },
    { attr: 'threshold', type: 'number', defaultValue: '10(px)', desc: '识别成功的最大允许位移距离' },
    { attr: 'pointers', type: 'number', defaultValue: '1', desc: '需要识别的输入点数量' }
  ]
</script>

# Pan 拖拽手势

触摸点按下，并在允许的方向上移动一定距离的手势

:::tip
为了阻止移动端浏览器的默认行为，我们一般会阻止所有默认手势，通过在FsTouchManager中，设置`touchActions`选项为`[none]`来实现
:::

## 基础用法

鼠标按下并在任一方向移动距离大于10px，会弹出提示，并在控制台输出打印

<demo src="pan/demo-1.vue"></demo>

## 使用场景

拖动一个元素在界面内移动.  
在DevTools中切换设备模拟为触摸设备，拖动也可以用生效

<demo src="pan/demo-2.vue"></demo>

## 多指拖拽

设置`pointer`属性为2，在触摸设备上再次尝试两指拖动下面方块.

<demo src="pan/demo-3.vue"></demo>

## API

<attr-table :columns="columns" :data="data"></attr-table>
