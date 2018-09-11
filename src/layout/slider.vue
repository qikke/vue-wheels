<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <span @click="visible=false" class="close">x</span>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'KSider',
    data () {
      return {
        visible: true
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    > .close {
      position: absolute;
      top: 0;
      right: 0.5em;
      cursor: pointer;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>