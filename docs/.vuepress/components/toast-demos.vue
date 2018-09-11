<template>
  <div>
    <ol class="description">
      <li>
        <k-button @click="$toast('',toastOption)">top</k-button>
        <pre><code>{{content.htmlContent}}</code></pre>
        <pre><code>{{content.toastOption}}</code></pre>
      </li>
    </ol>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../src/components/button'
  import Plugin from '../../../src/plugin'

  Vue.use(Plugin)

  export default {
    components: {
      kButton: Button,
    },
    data() {
      return {
        toastOption:{
          closeButton: {
            text: 'close',
            callback: () => {
              console.log('this is callback!')
            }
          },
          autoClose: true,
          position: 'top'
        },
        content: {
          htmlContent:` <k-button @click="$toast('',toastOption)">top</k-button>`,
          toastOption:`
toastOption:{
  closeButton: {
    text: 'close',
    callback: () => {
      console.log('this is callback!')
    }
  },
  autoClose: true,
  position: 'top'
}
          `.trim()
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .description {
    li {
      margin-top: 50px;
      overflow: hidden;
    }

  }
</style>