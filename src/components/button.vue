<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-svg v-if="loading" icon="loading" class="loading icon"></g-svg>
    <g-svg v-if="icon && !loading" :icon="icon" class="icon"></g-svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      },
      loading:{
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    > .icon {
      order: 0;
    }
    > .loading {
      animation: loading 2s linear infinite;
    }

    &.icon-right {
      > .icon {
        order: 1;
        margin-left: .2em;
      }
    }
    &.icon-left {
      > .icon {
        order: 0;
        margin-right: .2em;
      }
    }

    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>