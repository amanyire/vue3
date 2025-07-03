<template>
  <div>
    <button @click="increment">Increment Value</button>
    <h1>
      HOME EDITS {{ counter }}
      Array X {{ numbersArray }}
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const counter = ref(0)
const numbersArray = ref([])
function increment (){
  counter.value++
  numbersArray.value.push(counter.value)
}

</script>
