module.exports = {
  base:'/vue-wheels/',
  title: 'K UI',
  description: '一个好用的UI框架',
  themeConfig:{
    sidebar:[
      {
        title:'入门',
        children:[ '/install/','/get-started/']
      },
      {
        title:'组件',
        children:[
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tab',
          '/components/popover',
        ]
      },
    ]
  }
}