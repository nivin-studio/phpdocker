(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(s,e,a){"use strict";a.r(e);var t=a(45),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("Redis Cluster 是一个提供在多个 Redis 节点间共享数据的程序集。\nRedis Cluster 并不支持处理多个 keys 的命令，因为这需要在不同的节点间移动数据，所以达不到像 Redis 那样的性能，在高负载的情况下可能会导致不可预料的错误。\nRedis Cluster 集群通过分区来提供一定程度的可用性，在实际环境中当某个节点宕机或者不可达的情况下继续处理命令。")])]),s._v(" "),a("blockquote",[a("p",[s._v("❗注意\nRedis 配置文件里必须要设置 bind 0.0.0.0，这是允许其他IP可以访问当前 Redis 。如果不设置这个参数，就不能组建 Redis 集群。")])]),s._v(" "),a("h2",{attrs:{id:"获取redis镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取redis镜像"}},[s._v("#")]),s._v(" 获取Redis镜像")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker pull nivinivin/redis\n")])])]),a("h2",{attrs:{id:"创建redis集群网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建redis集群网络"}},[s._v("#")]),s._v(" 创建redis集群网络")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker network create --subnet"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.0/16 redis_net\n")])])]),a("h2",{attrs:{id:"创建6节点redis容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建6节点redis容器"}},[s._v("#")]),s._v(" 创建6节点Redis容器")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -it -d --name redis1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6001")]),s._v(":6379 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16001")]),s._v(":16379 --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_net --ip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.2 nivinivin/redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\ndocker run -it -d --name redis2 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6002")]),s._v(":6379 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16002")]),s._v(":16379 --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_net --ip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.3 nivinivin/redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\ndocker run -it -d --name redis3 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6003")]),s._v(":6379 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16003")]),s._v(":16379 --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_net --ip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.4 nivinivin/redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\ndocker run -it -d --name redis4 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6004")]),s._v(":6379 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16004")]),s._v(":16379 --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_net --ip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.5 nivinivin/redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\ndocker run -it -d --name redis5 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6005")]),s._v(":6379 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16005")]),s._v(":16379 --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_net --ip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.6 nivinivin/redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\ndocker run -it -d --name redis6 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6006")]),s._v(":6379 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16006")]),s._v(":16379 --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_net --ip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.7 nivinivin/redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("❗注意\n如果6个节点的端口号分别是6001，6002，6003，6004，6005，6006。那么防火墙需要打开这个6个端口号，并且还需要打开16001，16002，16003，16004，16005，16006这6个"),a("a",{attrs:{href:"https://redis.io/topics/cluster-tutorial",target:"_blank",rel:"noopener noreferrer"}},[s._v("集群总线端口"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"启动6节点redis容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动6节点redis容器"}},[s._v("#")]),s._v(" 启动6节点Redis容器")]),s._v(" "),a("h3",{attrs:{id:"进入redis1节点容器修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入redis1节点容器修改配置"}},[s._v("#")]),s._v(" 进入redis1节点容器修改配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis1 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加下面三行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cluster-announce-port 6001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cluster-announce-bus-port 16001")]),s._v("\nredis-server ./redis.conf\n")])])]),a("h3",{attrs:{id:"进入redis2节点容器修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入redis2节点容器修改配置"}},[s._v("#")]),s._v(" 进入redis2节点容器修改配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加下面三行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-port 6002")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-bus-port 16002")]),s._v("\nredis-server ./redis.conf\n")])])]),a("h3",{attrs:{id:"进入redis3节点容器修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入redis3节点容器修改配置"}},[s._v("#")]),s._v(" 进入redis3节点容器修改配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加下面三行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-port 6003")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-bus-port 16003")]),s._v("\nredis-server ./redis.conf\n")])])]),a("h3",{attrs:{id:"进入redis4节点容器修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入redis4节点容器修改配置"}},[s._v("#")]),s._v(" 进入redis4节点容器修改配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis4 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加下面三行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-port 6004")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-bus-port 16004")]),s._v("\nredis-server ./redis.conf\n")])])]),a("h3",{attrs:{id:"进入redis5节点容器修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入redis5节点容器修改配置"}},[s._v("#")]),s._v(" 进入redis5节点容器修改配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis5 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加下面三行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-port 6005")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-bus-port 16005")]),s._v("\nredis-server ./redis.conf\n")])])]),a("h3",{attrs:{id:"进入redis6节点容器修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入redis6节点容器修改配置"}},[s._v("#")]),s._v(" 进入redis6节点容器修改配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis6 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加下面三行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-port 6006")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cluster-announce-bus-port 16006")]),s._v("\nredis-server ./redis.conf\n")])])]),a("h2",{attrs:{id:"创建集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建集群"}},[s._v("#")]),s._v(" 创建集群")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在redis1节点上执行下面的指令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建集群(如果是宿主机共享模式，请使用宿主机的真实IP和端口号)")]),s._v("\n./redis-trib.rb create --replicas "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.2:6379 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.3:6379 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.4:6379 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.5:6379 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.6:6379 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.19")]),s._v(".0.7:6379\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);