<template>
  <div>
    <ol class="description">
      <li>
        disabled
        <KInput disabled value="123"></KInput>
        <pre><code>{{content.disabled}}</code></pre>
      </li>
      <li>
        readonly
        <KInput readonly="true" value="123"></KInput>
        <pre><code>{{content.readonly}}</code></pre>
      </li>
      <li>
        error
        <KInput error="密码错误" ></KInput>
        <pre><code>{{content.error}}</code></pre>
      </li>
    </ol>
  </div>
</template>

<script>
  import Input from '../../../src/components/input'
  export default {
    name: "input-demos",
    components:{
      KInput:Input
    },
    data(){
      return {
        content:{
          disabled:'<KInput disabled value="123"></KInput>',
          readonly:'<KInput readonly="true" value="123"></KInput>',
          error:'<KInput error="密码错误" ></KInput>',
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .description{
    li{
      margin-top:50px;
    }
  }
</style>