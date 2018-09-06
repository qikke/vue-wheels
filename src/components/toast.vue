<template>
  <div class="toast" ref="wrapper">
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
    mounted() {
      this.updateStyle()
      this.execClose()
    },
    methods: {
      updateStyle(){
        this.$nextTick(()=>{
          this.$refs.line.style.height = this.$refs.wrapper.offsetHeight + 'px'
        })
      },
      execClose(){
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
    font-size: $font-size;min-height: $toast-min-height;line-height: 1.8;position: fixed;top: 0;
    left: 50%;transform: translateX(-50%);display: flex;color: white;align-items: center;
    background: $toast-bg;border-radius: 4px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);padding: 0 16px;
    .content{
      padding:8px 0;
    }
    .line {height: 100%;border-left: 1px solid #666;margin-left: 16px;}
    .close {padding-left: 16px;}
  }
</style>