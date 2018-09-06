<template>
  <div ref="wrapper" :class="['toast',execPosition]">
    <div class="content">
      <slot></slot>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "k-toast",
    props: {
      autoClose: {type: Boolean, default: true},
      autoCloseDelay: {type: Number, default: 3},
      position:{
        type:String,
        default:'top',
        validator(value){
          return ['top','bottom','middle'].indexOf(value) >= 0
        }
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: 'close',
            callback: () => {
              console.log('close的默认回调')
            }
          }
        }
      }
    },
    computed:{
      execPosition(){
        return `position-${this.position}`
      }
    },
    mounted() {
      this.updateStyle()
      this.execClose()
    },
    methods: {
      updateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.wrapper.offsetHeight + 'px'
        })
      },
      execClose() {
        if (this.autoClose) {
          window.setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close() {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose() {
        this.close()
        this.closeButton.callback(this)
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size;min-height: $toast-min-height;line-height: 1.8;position: fixed;
    left: 50%;transform: translateX(-50%);display: flex;color: white;align-items: center;
    background: $toast-bg;border-radius: 4px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);padding: 0 16px;
    .content {
      padding: 8px 0;
    }
    .line {height: 100%;border-left: 1px solid #666;margin-left: 16px;}
    .close {padding-left: 16px;}
    &.position-top {top: 0;transform: translateX(-50%);}
    &.position-bottom {bottom: 0;transform: translateX(-50%);}
    &.position-middle {top: 50%;transform: translate(-50%, -50%);}
  }
</style>