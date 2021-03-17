(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{363:function(s,t,e){"use strict";e.r(t);var a=e(45),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),e("p",[s._v("你的本地环境需要安装 "),e("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker"),e("OutboundLink")],1),s._v(" 或 "),e("a",{attrs:{href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Desktop"),e("OutboundLink")],1),s._v(" 和 "),e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("克隆本项目到本地")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/nivin-studio/donivinck.git\n")])])]),e("p",[s._v("目录结构")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("├── code                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目代码")]),s._v("\n│   └── app                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认项目")]),s._v("\n├── conf                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件夹")]),s._v("\n│   ├── "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("logrotate")]),s._v("               "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志分片配置")]),s._v("\n│   ├── php                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php配置")]),s._v("\n│   ├── sites                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 站点配置")]),s._v("\n│   ├── ssl                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl证书")]),s._v("\n│   └── supervisord             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程守护配置")]),s._v("\n├── data                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器数据文件映射目录")]),s._v("\n├── docker                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务容器Dockerfile")]),s._v("\n│   ├── mongo                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mogon服务容器")]),s._v("\n│   │   └── Dockerfile          \n│   ├── mongo-webui             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mogon web数据管理服务容器")]),s._v("\n│   │   └── Dockerfile\n│   ├── mysql                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql服务容器")]),s._v("\n│   │   └── Dockerfile\n│   ├── mysql-webui             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql web数据管理服务容器")]),s._v("\n│   │   └── Dockerfile\n│   ├── nginx                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx服务容器")]),s._v("\n│   │   ├── Dockerfile\n│   │   ├── logrotate.conf      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志分片主配置")]),s._v("\n│   │   ├── nginx.conf          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx主配置")]),s._v("\n│   │   └── startup.sh          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动脚本")]),s._v("\n│   ├── php                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php服务容器")]),s._v("\n│   │   ├── Dockerfile\n│   │   ├── startup.sh          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动脚本")]),s._v("\n│   │   └── supervisord.conf    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程守护主配置")]),s._v("\n│   ├── redis                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis服务容器")]),s._v("\n│   │   └── Dockerfile\n│   ├── redis-webui             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis web服务容器")]),s._v("\n│   │   └── Dockerfile\n│   ├── .env                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose 配置文件")]),s._v("\n│   └── docker-compose.yml      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose ")]),s._v("\n├── docs                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用文档")]),s._v("\n├── logs                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器相关日志文件映射目录")]),s._v("\n├── package.json                "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# package.json")]),s._v("\n└── README.md                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# README.md")]),s._v("\n")])])]),e("p",[s._v("确保 Docker 服务已启动运行，使用 docker-compose 来构建环境。根据本地网络环境不同，构建时间也有所影响，一般大概（5分钟左右）。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("如果构建失败，可以循环往复执行 docker-compose 命令，直至容器构建运行成功！！！")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docker\n$ docker-compose up -d\n")])])]),e("h2",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),e("p",[s._v("容器全部启动运行成功，访问如下地址。")]),s._v(" "),e("h3",{attrs:{id:"项目访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目访问"}},[s._v("#")]),s._v(" 项目访问")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("地址：http://127.0.0.1      # 默认访问项目/code/app\n")])])]),e("h3",{attrs:{id:"mysql数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据管理"}},[s._v("#")]),s._v(" Mysql数据管理")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("地址：http://localhost:1000/\n用户：root\n密码：123456\n")])])]),e("h3",{attrs:{id:"mongo数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongo数据管理"}},[s._v("#")]),s._v(" Mongo数据管理")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("地址：http://localhost:2000/\n用户：root\n密码：123456\n")])])]),e("h3",{attrs:{id:"redis数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis数据管理"}},[s._v("#")]),s._v(" Redis数据管理")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("地址：http://localhost:3000/\n用户：root\n密码：123456")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);