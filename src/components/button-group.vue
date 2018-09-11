<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  $border-radius: 4px;
  .button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:hover{
        z-index: 1;
      }
    }
    > :first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    > :last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    >:not(:first-child){
      margin-left: -1px;
    }
  }
</style>