module.exports = {
    title: "Fur",
    description: "小僧不才，略懂皮毛",
    base: "/modefyong.github.io",
    dest: "dist",
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [1, 2, 3],
        },
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        nav: [{
                text: "指南",
                link: "/guide/",
            },
            {
                text: "手册",
                link: "/handbook/",
            },
            {
                text: "工具",
                items: [{ text: "代码生成器", link: "/" }],
            },
        ],
        sidebar: [{ // 看官网文档
                title: 'Group 1', // 必要的
                path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [
                    '/handbook/'
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ],
        sidebarDepth: 2,
    },
};