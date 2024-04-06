<template>
  <ElTable
    ref="tableRef"
    :data="props.data"
    :border="true"
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
