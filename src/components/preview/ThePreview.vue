<template>
  <div class="preview">
    <preview-time/>
    <preview-focus />
  </div>
</template>

<script>
import PreviewTime from "@/components/preview/PreviewTime";
import PreviewFocus from "@/components/preview/PreviewFocus";
export default {
  components: {
    PreviewTime,
    PreviewFocus
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
  flex-direction: column;
  position: absolute;
}
</style>
