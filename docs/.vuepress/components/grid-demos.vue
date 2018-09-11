<template>
  <div class="description">
    <ol>
      <li>
        <k-row gutter="20" align="left" style="border:1px solid;text-align: center">
          <k-col span="4" style="background:#eee">
            1
          </k-col>
          <k-col span="4" style="background:#eee">
            2
          </k-col>
          <k-col span="4" style="background:#eee">
            3
          </k-col>
        </k-row>
        <pre><code>{{content.rowLeft}}</code></pre>
      </li>

      <!--<li>-->
      <!--<k-row gutter="20" align="right" style="border:1px solid;text-align: center">-->
      <!--<k-col span="4" style="background:#eee">-->
      <!--1-->
      <!--</k-col>-->
      <!--<k-col span="4" style="background:#eee">-->
      <!--2-->
      <!--</k-col>-->
      <!--<k-col span="4" style="background:#eee">-->
      <!--3-->
      <!--</k-col>-->
      <!--</k-row>-->
      <!--<pre><code>{{content.rowRight}}</code></pre>-->
      <!--</li>-->

      <!--<li>-->
      <!--<k-row gutter="20" align="center" style="border:1px solid;text-align: center">-->
      <!--<k-col span="4" style="background:#eee">-->
      <!--1-->
      <!--</k-col>-->
      <!--<k-col span="4" style="background:#eee">-->
      <!--2-->
      <!--</k-col>-->
      <!--<k-col span="4" style="background:#eee">-->
      <!--3-->
      <!--</k-col>-->
      <!--</k-row>-->
      <!--<pre><code>{{content.rowCenter}}</code></pre>-->
      <!--</li>-->

      <li>
        <k-row gutter="20" style="border:1px solid;text-align: center">
          <k-col span="4" offset="2" style="background:#eee">1</k-col>
          <k-col span="4" offset="2" style="background:#eee">2</k-col>
          <k-col span="4" offset="2" style="background:#eee">3</k-col>
        </k-row>
        <pre><code>{{content.colOffset}}</code></pre>
      </li>


      <li>
        <k-row style="border:1px solid;text-align: center">
          <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
            <div class="demo">1</div>
          </k-col>
          <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
            <div class="demo">2</div>
          </k-col>
          <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
            <div class="demo">3</div>
          </k-col>
          <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
            <div class="demo">4</div>
          </k-col>
        </k-row>
        <pre><code>{{content.adaptive}}</code></pre>
      </li>
    </ol>
  </div>
</template>

<script>
  import Col from '../../../src/components/col'
  import Row from '../../../src/components/row'

  export default {
    name: "grid-demos",
    components: {
      kRow: Row,
      kCol: Col
    },
    data() {
      return {
        content: {
          rowLeft: `
<k-row gutter="20" align="left">
  <k-col span="4">
    1
  </k-col>
  <k-col span="4">
    2
  </k-col>
  <k-col span="4">
    3
  </k-col>
</k-row>
          `.trim(),
          colOffset: `
 <k-row gutter="20">
  <k-col span="4" offset="2">1</k-col>
  <k-col span="4" offset="2">2</k-col>
  <k-col span="4" offset="2">3</k-col>
</k-row>
        `.trim(),
          adaptive:`
<k-row style="border:1px solid;text-align: center">
  <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
  <div class="demo">1</div>
  </k-col>
  <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
  <div class="demo">2</div>
  </k-col>
  <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
  <div class="demo">3</div>
  </k-col>
  <k-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}" style="background:#eee">
  <div class="demo">4</div>
  </k-col>
</k-row>
          `.trim()
        },

      }
    },
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .description {
    li {
      list-style: none;
      margin-top: 50px;
    }
  }
</style>