<template>
  <div class="wrapper">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" :class="{error}"
      @change="$emit('change',$event)"
      @input="$emit('input',$event)"
      @focus="$emit('focus',$event)"
      @blur="$emit('blur',$event)"
    >
    <template v-if="error" class="error">
      <icon icon="error" class="icon"></icon>
      <span class="errorInfo">{{error}}</span>
    </template>

  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: "input",
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String,
      }
    },
    components:{
      'icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #f1453d;

  .wrapper {
    font-size: $font-size;display: inline-flex;justify-content: center;align-items: center;
    > input {
      height: $height;border: 1px solid $border-color;border-radius: 4px;padding: 0 8px;font-size: inherit;
      &:hover {border-color: $border-color-hover;}
      &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
      &[disabled] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
      &.error{border-color: $red;box-shadow: none;margin-right: 0.5em;}
    }
    .icon{fill:$red;}
    .errorInfo{color:$red; margin-left: 0.2em;}
  }
</style>