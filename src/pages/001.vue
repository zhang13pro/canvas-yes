<template>
  <img ref="img" class="bird" src="../assets/bird.webp">
  <canvas ref="canvas" width="1920" height="1440" class="bird" />
</template>

<script setup lang='ts'>
const img = $ref()
const canvas = $ref<HTMLCanvasElement>()
const ctx = canvas.getContext('2d')!

onMounted(load)

function load() {
  ctx.drawImage(img as CanvasImageSource, 0, 0)

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    if (isBird(data, i, canvas.width, canvas.height))
      [data[i], data[i + 1]] = [data[i + 1] * 1.2, data[i]]
  }

  ctx.putImageData(imageData, 0, 0)
}

function isBird(data: any, i: number, width: number, height: number) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]

  const [h, s, l] = rgb2hsl(r, g, b)
  return h < 200 && h > 80 && s > 0.23 && l < 0.84
}

function rgb2hsl(r: number, g: number, b: number) {
  const r1 = r / 255
  const g1 = g / 255
  const b1 = b / 255

  const min = Math.min(r1, g1, b1)
  const max = Math.max(r1, g1, b1)

  const l = (min + max) / 2
  let s
  let h = 0

  if (l < 0.5)
    s = (max - min) / (max + min)
  else
    s = (max - min) / (2 - max - min)

  if (max === r1)
    h = (r1 - b1) / (max - min)
  else if (max === g1)
    h = 2 + (b1 - r1) / (max - min)
  else if (max === b1)
    h = 4 + (r1 - g1) / (max - min)

  h *= 60
  while (h < 0)
    h += 360

  return [h, s, l]
}
</script>

<style>
.bird {
  width: 400px;
  height: calc(1440 * 400 / 1920 * 1px);
}
canvas.bird {
  background: #ccc;
}
</style>
