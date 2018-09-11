<template>
  <div>
    <ol class="description">
      <li>
        <k-button>无icon</k-button>
        <pre><code>{{content.noIcon}}</code></pre>
      </li>
      <li>
        <k-button icon="setting">leftIcon</k-button>
        <pre><code>{{content.leftIcon}}</code></pre>
      </li>
      <li>
        <k-button icon="setting" iconPosition="right">rightIcon</k-button>
        <pre><code>{{content.rightIcon}}</code></pre>
      </li>
      <li>
        <k-button :loading="true" icon="setting">loading</k-button>
        <pre><code>{{content.loading}}</code></pre>
      </li>
      <li>
        <k-button disabled>disabled</k-button>
        <pre><code>{{content.disabled}}</code></pre>
      </li>
      <li>
        <k-button-group>
          <k-button>按钮1</k-button>
          <k-button>按钮2</k-button>
        </k-button-group>
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
          noIcon:'<k-button>无icon</k-button>',
          leftIcon:'<k-button icon="setting">leftIcon</k-button>',
          rightIcon:'<k-button icon="setting" iconPosition="right">rightIcon</k-button>',
          loading:'<k-button :loading="true" icon="setting">loading</k-button>',
          disabled:'<k-button disabled>disabled</k-button>',
          buttonGroup:`
            <k-button-group>
            <k-button>按钮1</k-button>
            <k-button>按钮2</k-button>
            </k-button-group>
          `.replace(/ /g,'').trim()
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .description{
    li{
      /*border:1px solid;*/
      margin-top:50px;
    }
  }
</style>