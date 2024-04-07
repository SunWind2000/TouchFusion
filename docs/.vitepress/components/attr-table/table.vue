<template>
  <ElTable
    ref="tableRef"
    :data="props.data"
    :border="true"
    row-class-name="vp-table-row"
    cell-class-name="vp-table-cell"
    header-row-class-name="vp-table-row"
    header-cell-class-name="vp-table-cell"
    class-name="vp-table"
    style="width: 100%;"
  >
    <ElTableColumn
      v-for="column in props.columns"
      :key="column.prop"
      v-bind="column"
    ></ElTableColumn>
  </ElTable>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElTableColumn, type ElTable } from 'element-plus';

const tableRef = ref<InstanceType<typeof ElTable> | null>(null);

const props = withDefaults(defineProps<{
  data: any[];
  columns: any[];
}>(), {
  data: () => [],
  columns: () => []
});
</script>

<style>
.vp-table {
  --el-table-border-color: var(--vp-c-gray-3);
  --el-table-header-bg-color: var(--vp-c-border);
  --el-table-text-color: var(--vp-c-text-1);
  --el-table-row-hover-bg-color: var(--vp-c-gray-1);
  --el-table-current-row-bg-color: var(--vp-c-gray-2);
  --el-table-bg-color: var(--vp-c-bg-1);
  --el-table-tr-bg-color: var(--vp-c-bg-1);
}
</style>
