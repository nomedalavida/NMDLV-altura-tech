<template>
  <div class="flex flex-col items-center">
    <p class="pb-2 uppercase">{{ user.name }}</p>
    <svg :height="scaleHeight" :width="scaleWidth" :fill="color">
      <use href="human.svg#human" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    scale() {
      return window.innerWidth > 768 ? 1 : 2
    },
    scaleHeight() {
      return (this.user.height * 2) / this.scale
    },
    scaleWidth() {
      return (this.user.height * 2) / (2.34 * this.scale)
    },
  },
}
</script>
