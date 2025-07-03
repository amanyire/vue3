<template>
    <button @click="handleClick">Click Me</button>
</template>
<script setup>
const emit = defineEmits(['custom-click'])

const handleClick = () => {
  emit('custom-click') // Emits to parent
}
</script>
