<template>
  <div>
    <ol class="description">
      <li>
        <k-tabs selected="name1">
          <k-head>
            <k-item name="name1">tab1</k-item>
            <k-item name="name2">tab2</k-item>
            <k-item name="name3">tab3</k-item>
          </k-head>
          <k-body>
            <k-pane name="name1">tab1</k-pane>
            <k-pane name="name2">tab2</k-pane>
            <k-pane name="name3">tab3</k-pane>
          </k-body>
        </k-tabs>
        <pre><code>{{content}}</code></pre>
      </li>
    </ol>
  </div>
</template>

<script>
  import Tabs from '../../../src/tabs/tabs'
  import TabsBody from '../../../src/tabs/tabs-body'
  import TabsHeads from '../../../src/tabs/tabs-heads'
  import TabsItem from '../../../src/tabs/tabs-item'
  import TabsPane from '../../../src/tabs/tabs-pane'

  export default {
    components: {
      kTabs: Tabs,
      kBody: TabsBody,
      kHead: TabsHeads,
      kItem: TabsItem,
      kPane: TabsPane,
    },
    data() {
      return {
        content:`
<k-tabs selected="name1" direction="horizontal">
  <k-head>
    <k-item name="name1">tab1</k-item>
    <k-item name="name2">tab2</k-item>
    <k-item name="name3">tab3</k-item>
  </k-head>
  <k-body>
    <k-pane name="name1">tab1</k-pane>
    <k-pane name="name2">tab2</k-pane>
    <k-pane name="name3">tab3</k-pane>
  </k-body>
</k-tabs>
        `.trim()
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