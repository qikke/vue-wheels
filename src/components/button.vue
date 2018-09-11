<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon v-if="loading" icon="loading" class="loading icon"></g-icon>
    <g-icon v-if="icon && !loading" :icon="icon" class="icon"></g-icon>

    <slot></slot>
  </button>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      },
      loading: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;


  .g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    > .icon {order: 0;}
    > .loading {animation: loading 2s linear infinite;}
    &.icon-right {
      > .icon {order: 1;margin-left: .2em;}
    }
    &.icon-left {
      > .icon {order: 0;margin-right: .2em;}
    }
    &:hover {border-color: $border-color-hover;}
    &:active {background-color: $button-active-bg;}
    &:focus {outline: none;}
  }

  @keyframes loading {
    0% {transform: rotate(0);}
    100% {transform: rotate(360deg);}
  }
</style>