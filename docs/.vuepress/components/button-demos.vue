<template>
  <div>
    <ol class="description">
      <li>
        <KButton>无icon</KButton>
        <pre><code>{{content.noIcon}}</code></pre>
      </li>
      <li>
        <KButton icon="setting">leftIcon</KButton>
        <pre><code>{{content.leftIcon}}</code></pre>
      </li>
      <li>
        <KButton icon="setting" iconPosition="right">rightIcon</KButton>
        <pre><code>{{content.rightIcon}}</code></pre>
      </li>
      <li>
        <KButton :loading="true" icon="setting">loading</KButton>
        <pre><code>{{content.loading}}</code></pre>
      </li>
      <li>
        <KButton disabled>disabled</KButton>
        <pre><code>{{content.disabled}}</code></pre>
      </li>
      <li>
        <KButton-group>
          <KButton>按钮1</KButton>
          <KButton>按钮2</KButton>
        </KButton-group>
        <pre><code>{{content.buttonGroup}}</code></pre>
      </li>
    </ol>
  </div>
</template>

<script>
  import Button from '../../../src/components/button'
  import ButtonGroup from '../../../src/components/button-group'
  export default {

    components:{
      KButton:Button,
      KButtonGroup:ButtonGroup
    },
    data(){
      return {
        content:{
          noIcon:'<KButton>无icon</KButton>',
          leftIcon:'<KButton icon="setting">leftIcon</KButton>',
          rightIcon:'<KButton icon="setting" iconPosition="right">rightIcon</KButton>',
          loading:'<KButton :loading="true" icon="setting">loading</KButton>',
          disabled:'<KButton disabled>disabled</KButton>',
          buttonGroup:`
            <KButton-group>
            <KButton>按钮1</KButton>
            <KButton>按钮2</KButton>
            </KButton-group>
          `.replace(/ /g,'').trim()
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  ol,li{
    list-style: none;
    margin:0;
    padding:0;
  }
  .description{
    li{
      /*border:1px solid;*/
      margin-top:50px;
    }
  }
</style>