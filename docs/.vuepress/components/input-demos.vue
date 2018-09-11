<template>
  <div>
    <ol class="description">
      <li>
        disabled
        <k-input disabled value="123"></k-input>
        <pre><code>{{content.disabled}}</code></pre>
      </li>
      <li>
        readonly
        <k-input readonly="true" value="123"></k-input>
        <pre><code>{{content.readonly}}</code></pre>
      </li>
      <li>
        error
        <k-input error="密码错误" ></k-input>
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
          disabled:'<k-input disabled value="123"></k-input>',
          readonly:'<k-input readonly="true" value="123"></k-input>',
          error:'<k-input error="密码错误" ></k-input>',
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