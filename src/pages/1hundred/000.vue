<template>
  <paper>
    <div class="box overflow-hidden relative frame" :class="{loading}" @click="next">
      <iframe class="box pointer-events-none" :class="{loading}" :src="src" width="400" height="400" @load="loading=false" />
    </div>
  </paper>
  <note>
    <p>no man's land</p>
    <br>
    <a class="link" :href="url">{{ url }}</a>
  </note>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import { works } from '../../works'
const loading = ref(true)
const iframe = ref<HTMLIFrameElement | null>()
const count = ref(1)
const url = computed(() => `/${count.value.toString().padStart(3, '0')}`)
const src = computed(() => `${url.value}?hideFrame=true`)
const next = () => {
  count.value = (count.value + 1) % (works.length + 1)
  if (count.value === 0)
    count.value += 1
  loading.value = true
}
</script>

<style lang='stylus'>
iframe {
  margin-top -1px
  margin-left -1px
}
iframe.loading {
  opacity 0
}
.frame {
  transition: all .4s ease-in-out;
}
.frame.loading {
  border-radius: 50%;
}
</style>
