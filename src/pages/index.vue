<script setup lang="ts">
const router = useRouter()
const next = () => {
  router.push('/1hundred/002')
}
</script>
<template>
  <div btn text-sm @click="next">
    NEXT
  </div>
</template>
