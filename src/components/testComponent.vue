<script setup>
// 定义props，组件的参数
defineProps(['title', "postFontSize"])
// 定义emits，父组件传来的事件
// defineEmits(['changeFontSize'])
</script>

<template>
  <div :style="{fontSize: postFontSize + 'em' }">
    <h4>{{ title }}</h4>
    <button @click="$emit('changeFontSize')">改变字体大小</button>
  </div>
</template>

<style scoped></style>