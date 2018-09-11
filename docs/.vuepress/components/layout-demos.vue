<template>
  <div>
    <ol class="description">
      <li>
        <k-header class="k-header">header</k-header>
        <k-content class="k-content">content</k-content>
        <k-footer class="k-footer">footer</k-footer>
        <pre><code>{{content.layout1}}</code></pre>
      </li>
      <li>

        <k-header class="k-header">header</k-header>
        <k-layout>
          <k-slider class="k-slider">slider</k-slider>
          <k-content class="k-content">content</k-content>
        </k-layout>
        <k-footer class="k-footer">footer</k-footer>
        <pre><code>{{content.layout2}}</code></pre>
      </li>
      <li>
        <k-layout>
          <k-slider class="k-slider">slider</k-slider>
          <k-layout>
            <k-header class="k-header">header</k-header>
            <k-content class="k-content">content</k-content>
            <k-footer class="k-footer">footer</k-footer>
          </k-layout>
        </k-layout>
        <pre><code>{{content.layout3}}</code></pre>
      </li>
    </ol>
  </div>
</template>

<script>
  import Header from '../../../src/layout/header'
  import Slider from '../../../src/layout/slider'
  import Content from '../../../src/layout/content'
  import Footer from '../../../src/layout/footer'
  import Layout from '../../../src/layout/layout'

  export default {
    components: {
      kHeader: Header,
      kSlider: Slider,
      kContent: Content,
      kFooter: Footer,
      kLayout: Layout,
    },
    data() {
      return {
        content: {
          layout1: `
<k-header class="k-header">header</k-header>
<k-content class="k-content">content</k-content>
<k-footer class="k-footer">footer</k-footer>
         `.trim(),
          layout2: `
<k-header class="k-header">header</k-header>
<k-layout>
  <k-slider class="k-slider">slider</k-slider>
  <k-content class="k-content">content</k-content>
</k-layout>
<k-footer class="k-footer">footer</k-footer>
          `.trim(),
          layout3: `
<k-layout>
  <k-slider class="k-slider">slider</k-slider>
  <k-layout>
    <k-header class="k-header">header</k-header>
    <k-content class="k-content">content</k-content>
    <k-footer class="k-footer">footer</k-footer>
  </k-layout>
</k-layout>
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
    .k-header, .k-footer {
      background: #7BB9EC;
      text-align: center;
      height: 50px;
      line-height: 50px;
    }
    .k-content {
      background: #389BEC;
      text-align: center;
      line-height: 100px;
      height: 100px;
    }
    .k-slider {
      background: #148AED;
      text-align: center;
      width: 200px;
      line-height: 100px;
    }
  }
</style>