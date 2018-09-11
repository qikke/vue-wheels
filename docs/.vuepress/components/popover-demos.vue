<template>
  <div>
    <ol class="description">
      <li>
        <k-popover position="right">
          <template slot="content">
            this is popover
          </template>
          click me
        </k-popover>
        <pre><code>{{content1}}</code></pre>
      </li>
      <li>
        <k-popover position="top" trigger="hover">
          <template slot="content">
            this is popover
          </template>
          hover me
        </k-popover>
        <pre><code>{{content2}}</code></pre>
      </li>
    </ol>
  </div>
</template>

<script>
  import Popover from '../../../src/components/popover'


  export default {
    components: {
      kPopover: Popover,
    },
    data() {
      return {
        content1:`
<k-popover position="right">
  <template slot="content">
    this is popover
  </template>
  click me
</k-popover>
        `.trim(),
        content2:`
 <k-popover position="top" trigger="hover">
  <template slot="content">
    this is popover
  </template>
  hover me
</k-popover>
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