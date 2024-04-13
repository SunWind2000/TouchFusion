# TouchFusion

基于TypeScript的触摸手势识别库.  

## 使用指南

详细使用文档参见：[https://sunhy-cn.gitee.io/touch-fusion/](https://sunhy-cn.gitee.io/touch-fusion/)

## 开发指南

使用PNPM工具管理，
- NODE Version: 16.17.1
- PNPM Version: 8.15.4

### 构建

```bash
npm run lib
```

### 单元测试

```bash
npm run test
```

### 文档相关

已在npm中关联了开发目录的文件

```json
// package.json
{
  "devDependencies": {
    ...
    "touch-fusion": "link:packages",
    ...
  }
}
```

在docs中的vue文件中，和正常使用引入即可：

```vue
<script setup lang="ts">
import { FsTouchManager } from "touch-fusion"
</script>
```

使用npx运行vitepress脚本编辑预览：

```bash
# 进入文档目录
cd docs
# 使用npx运行vitepress脚本编辑预览
npx vitepress dev .

## 构建
npx vitepress build .
```
