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

#### 环境准备

确保已在项目根目录和docs目录package.json中关联了开发目录的文件

```json
// 根目录 package.json
{
  "devDependencies": {
    ...
    "touch-fusion": "link:packages",
    ...
  }
}
// docs目录 package.json
{
  "dependencies": {
    "touch-fusion": "workspace:^"
  }
}
```

进入docs目录，运行安装命令

```bash
cd docs
pnpm install
```


#### 构建项目根目录

返回项目根目录，运行dev命令，确保生成了lib目录去给docs使用

```bash
#使用dev命令，确保lib目录实时更新
npm run dev
```

#### 预览&构建docs

使用npx运行vitepress脚本编辑预览：

```bash
# 进入文档目录
cd docs
# 使用npx运行vitepress脚本编辑预览
npx vitepress dev .

## 构建
npx vitepress build .
```

#### 在demo文件中引用构建目录

在docs中的vue文件中，和正常使用引入即可：

```vue
<script setup lang="ts">
import { FsTouchManager } from "touch-fusion"
</script>
```


