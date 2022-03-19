<script setup lang="ts">
const light = ref()

async function red() {
  light.value.style.backgroundColor = 'red'
  setTimeout(await go, 3000)
}

async function yellow() {
  light.value.style.backgroundColor = 'yellow'
  await setTimeout(await red, 1000)
}

async function go() {
  light.value.style.backgroundColor = 'green'
  setTimeout(await yellow, 3000)
}
</script>

<template>
  <button ref="light" rounded btn @click="go">
    切换
  </button>
</template>
