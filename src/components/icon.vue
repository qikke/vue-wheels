<template>
  <svg class="icon" aria-hidden="true" >
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
  import '../svg'
  export default {
    props: {
      icon: {},
    }
  }
</script>

<style scoped>
  .icon {width: 1em;height: 1em;}
</style>