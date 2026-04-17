import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  head: [["link", { rel: "icon", href: "/docs-demo/章鱼小丸子.png" }]],
  title: "我的项目",
  description: "A VitePress Site",
  themeConfig: {
       // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          }, 
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    sidebar: "false",//关闭侧边栏
    aside: "left",//设置右侧侧边栏在左侧显示
    outlineTitle: "目录",
    outline: [2,6],
    logo: "/zhangyu.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', items:[
        { text: '首页', link: '/' },
        { text: 'markdown示例', link: '/markdown-examples' }
      ]
        },
      { text: '程序',
        items: [
          { text: 'C/C++', link: '/C/C++-examples' },
          { text: 'FPGA', link: '/FPGA-examples' }
        ]},
      
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    sidebar: false,//关闭侧边栏
    aside: "left",//设置右侧侧边栏在左侧显示
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
copyright: "Copyright@ 2023 Yu_Zhang",
    },
  },
  
});

