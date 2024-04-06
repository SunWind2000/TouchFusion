# TouchFusion

基于TypeScript的触摸手势识别库

## 开发指南

使用PNPM工具管理，
- NODE Version: 16.17.1
- PNPM Version: 8.15.4

### 关联工作区文件

```bash
# 先运行一次dev命令， 生成lib目录
npm run dev
# 将lib目录关联到PNPM，方便在vitepress中开发时引入
pnpm link @touch-fusion/lib
```

### 构建

```bash
npm run lib
```

### 单元测试

```bash
npm run test
```

### 文档相关

```bash
# 实时构建packages
npm run dev
# 编辑预览
npx vitepress dev docs

## 构建
npx vitepress build docs
```

在文档中使用构建包，在使用前必须使用pnpm创建软链接

```vue
<script setup lang="ts">
import FSTouch from "@touch-fusion/lib"
</script>
```
