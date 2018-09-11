<template>
  <div>
    <KButton>无icon</KButton>
    <KButton icon="setting">有icon</KButton>
    <KButton icon="setting" iconPosition="right">有icon</KButton>
    <KButton :loading="true" icon="setting">loading</KButton>
    <KButton disabled>disabled</KButton>
    <pre><code>{{content}}</code></pre>
  </div>


</template>

<script>
  import Button from '../../../src/components/button'
  export default {

    components:{
      KButton:Button
    },
    data(){
      return {
        content:`
          <KButton>无icon</KButton>
          <KButton icon="setting">有icon</KButton>
          <KButton icon="setting" iconPosition="right">有icon</KButton>
          <KButton :loading="true" icon="setting">loading</KButton>
          <KButton disabled>disabled</KButton>
        `
      }
    },
  }
</script>

<style scoped>

</style>