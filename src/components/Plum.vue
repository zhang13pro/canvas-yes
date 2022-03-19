<script setup lang="ts">
onMounted(init)
const el = $ref<HTMLCanvasElement>()
const ctx = $computed(() => el.getContext('2d')!)
const HEIGHT = 400
const WIDTH = 400
const flushTasks: Function[] = []
let frameCount = 0

interface Point {
  x: number
  y: number
}

interface Branch {
  start: Point
  length: number
  theta: number
}

function init() {
  ctx.strokeStyle = '#ee3'

  const branch: Branch = {
    start: { x: WIDTH / 2, y: HEIGHT },
    length: 40,
    theta: -Math.PI / 2,
  }
  step(branch)
}

function step(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  drawBranch(b)
  if (depth < 2 || Math.random() < 0.5) {
    flushTasks.push(() => step({
      start: end,
      length: b.length + (Math.random() * 10 - 5),
      theta: b.theta - 0.3 * Math.random(),
    }, depth + 1))
  }

  if (depth < 2 || Math.random() >= 0.5) {
    flushTasks.push(() => step({
      start: end,
      length: b.length + (Math.random() * 10 - 5),
      theta: b.theta + 0.3 * Math.random(),
    }, depth + 1))
  }
}

function frame() {
  const tasks = [...flushTasks]
  flushTasks.length = 0
  tasks.forEach(fn => fn())
}

function startFrame() {
  requestAnimationFrame(() => {
    frameCount += 1
    if (frameCount % 3 === 0)
      frame()
    startFrame()
  })
}

startFrame()

function lineTo(p1: Point, p2: Point) {
  ctx.beginPath()
  ctx.moveTo(p1.x, p1.y)
  ctx.lineTo(p2.x, p2.y)
  ctx.stroke()
}

function drawBranch(b: Branch) {
  lineTo(b.start, getEndPoint(b))
}

function getEndPoint(b: Branch) {
  const { start, length, theta } = b
  return {
    x: start.x + length * Math.cos(theta),
    y: start.y + length * Math.sin(theta),
  }
}
</script>

<template>
  <canvas ref="el" width="400" height="400" border />
</template>
