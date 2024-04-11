<script setup>
  const columns = [
    { prop: 'attr', label: '属性' },
    { prop: 'desc', label: '说明' },
    { prop: 'type', label: '类型' },
    { prop: 'defaultValue', label: '默认值' }
  ]
  const data = [
    { attr: 'time', type: 'number', defaultValue: '251(ms)', desc: '识别为长按手势的最短时间' },
    { attr: 'threshold', type: 'number', defaultValue: '9(px)', desc: '识别成功的最大允许位移距离' },
    { attr: 'pointers', type: 'number', defaultValue: '1', desc: '需要识别的输入点数量' }
  ]
</script>

# Press 长按手势

按下后并在一定时间后抬起的手势

:::tip
在某些系统中的浏览器中，长按会触发右键菜单事件，需要额外对contextmenu事件做preventDefault处理
:::

## 基础用法

使用在元素挂载完成后，初始化识别器，监听手势.  
在下面的区域中尝试：长按蓝色区域1秒，且手指移动距离小于5px，会弹出提示.  
你可以打开控制台查看详细的手势数据.

<demo src="press/demo-1.vue"></demo>

## API

<attr-table :columns="columns" :data="data"></attr-table>
