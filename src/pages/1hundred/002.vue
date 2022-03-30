<template>
  {{ x+'@'+y }}
  <canvas ref="canvas" width="400" height="400" m-auto border @click="moveDots">canvas unuseable</canvas>
</template>
<script setup lang='ts'>
const { x, y } = useMouse()
const canvas = $ref<HTMLCanvasElement>()
const ctx = $computed(() => canvas.getContext('2d')!)

onMounted(start)

function moveDots() {
  // x.value += 1
  // y.value += 0.25
  ctx.beginPath()
  ctx.fillStyle = 'white'
  ctx.arc(x.value, y.value, 10, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fill()
}

function start() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// function moveDots(start: Point) {

//   requestAnimationFrame(moveDots)
// }
</script>
