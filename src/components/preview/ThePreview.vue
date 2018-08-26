<template>
  <div class="preview">
    <preview-time/>
  </div>
</template>

<script>
import PreviewTime from "@/components/preview/PreviewTime";
export default {
  components: {
    PreviewTime
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.preview {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
