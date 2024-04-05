<script setup lang="ts">
import { ref, computed, defineAsyncComponent, useSlots } from 'vue';

const props = withDefaults(defineProps<{
  codePath: string;
  codeStr?: string;
  htmlStr?: string;
  language?: string;
  description?: string;
}>(), {
  language: 'vue',
  description: '',
});
const slots = useSlots();

// 演示组件路径
// @ts-ignore
const modules = import.meta.glob('../../../**/*.vue')
// 注册演示组件
const exampleComponent = props.codePath && modules[props.codePath]
  ? defineAsyncComponent(modules[props.codePath])
  : null;
console.log(modules, props.codePath);
console.log('exampleComponent:', exampleComponent);

const isHover = ref(false);
const isExpand = ref(false);
const decodedCodeStr = computed(() => decodeURIComponent(props.codeStr ?? ""));
const decodedHtmlStr = computed(() => decodeURIComponent(props.htmlStr ?? ""));
const decodedDesc = computed(() => decodeURIComponent(props.description ?? ""));

// 展开 or 收起代码
const toggleExpand = () => {
  isExpand.value = !isExpand.value;
  isHover.value = isExpand.value;
};

// 复制代码
const timerMap = new Map<HTMLElement, NodeJS.Timeout>();
const copyCode = (ev: MouseEvent) => {
  navigator.clipboard.writeText(decodedCodeStr.value)
    .then(() => {
      const el = ev.target as HTMLElement;
      el.classList.add("demo-show-copied");
      clearTimeout(timerMap.get(el));

      const timerId = setTimeout(() => {
        el.classList.remove("demo-show-copied");
        el.blur();
        timerMap.delete(el);
      }, 2000);

      timerMap.set(el, timerId);
    })
    .catch(() => {
      console.error("Failed to copy code");
    });
};
</script>

<template>
  <div
    :class="['demo', { 'demo-hover': isHover }]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="demo-slot">
      <slot v-if="slots.default" />
      <component v-else-if="codePath"  :is="exampleComponent" />
      <div v-else v-html="decodedCodeStr"></div>
    </div>
    <!-- 代码展示 -->
    <div class="demo-show" v-show="isExpand">
      <!-- 描述 -->
      <div class="demo-show_desc" v-show="decodedDesc" v-html="decodedDesc"></div>
      <!-- 复制 -->
      <div class="demo-show-copy" @click.stop="copyCode"></div>
      <!-- 代码 -->
      <div
        :class="['demo-show-code', 'language-' + language]"
        v-html="decodedHtmlStr"
      ></div>
    </div>
    <!-- 按钮控制 -->
    <div class="demo-control" @click="toggleExpand">
      <Transition name="arrow-slide">
        <i
          :class="[
            'demo-control-icon',
            isExpand ? 'demo-control-icon_up' : 'demo-control-icon_down',
          ]"
        ></i>
      </Transition>
      <Transition name="text-slide">
        <span v-show="isHover" class="demo-control-tip">{{
          isExpand ? "隐藏代码" : "显示代码"
        }}</span>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.demo {
  margin: 10px 0;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 3px;
  transition: 0.2s;
}

.demo-hover {
  box-shadow: var(--vp-shadow-2);
}

.demo-hover .demo-control {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-dim);
}

.demo-hover .demo-control-icon {
  transform: translateX(-40px);
}

.demo-slot {
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
  overflow: auto;
}

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
}

.demo-show {
  position: relative;
  border-top: solid 1px var(--vp-c-divider-light);
  background-color: var(--vp-code-block-bg);
}

.demo-show_desc {
  border: solid 1px var(--vp-c-brand-soft);
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 26px;
  color: var(--vp-c-text-2);
  word-break: break-word;
  margin: 10px 10px 6px 10px;
  background-color: var(--vp-c-bg-soft);
}

.demo-show-code {
  margin-bottom: 0 !important;
}

.demo-show-copy {
  position: absolute;
  right: 8px;
  z-index: 2;
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-block-bg);
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: opacity 0.25s;
}

.demo-show-copied {
  border-radius: 0 4px 4px 0;
  background-color: var(--vp-code-copy-code-hover-bg);
  background-image: var(--vp-icon-copied);
}

.demo-show-copied:before {
  position: relative;
  left: -65px;
  display: block;
  border-radius: 4px 0 0 4px;
  padding-top: 8px;
  width: 64px;
  height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-code-copy-code-active-text);
  background-color: var(--vp-code-copy-code-hover-bg);
  white-space: nowrap;
  content: "Copied";
}

.demo-show pre {
  margin: 0;
  padding: 1.25rem 1.5rem;
  background-color: inherit !important;
}

.demo-control {
  border-top: 1px solid var(--vp-c-brand-soft);
  height: 44px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--vp-c-gray-2);
  cursor: pointer;
  position: relative;
}

.demo-control-icon {
  display: inline-block;
  position: absolute;
  top: 50%;
  font-size: 16px;
  transition: 0.3s;
}

.demo-control-icon_up:before {
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-bottom: 7px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -8.5px;
  margin-left: -6px;
}

.demo-control-icon_down:before {
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-top: 7.5px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2px;
  margin-left: -6px;
}

.demo-control-tip {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
}

.demo .text-slide-enter,
.demo .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>