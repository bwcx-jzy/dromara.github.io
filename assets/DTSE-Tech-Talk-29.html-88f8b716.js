import{_ as o,r as s,o as n,c as g,a as t,b as e,d as r,e as i}from"./app-9548bae6.js";const l="/assets/img/blog/DTSE-Tech-Talk-29-1.png",p="/assets/img/blog/DTSE-Tech-Talk-29-2.png",c="/assets/img/blog/DTSE-Tech-Talk-29-3.png",h="/assets/img/blog/DTSE-Tech-Talk-29-4.png",d="/assets/img/blog/DTSE-Tech-Talk-29-5.png",u="/assets/img/blog/DTSE-Tech-Talk-29-6.png",m="/assets/img/blog/DTSE-Tech-Talk-29-7.png",b={},f=i('<figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="本期直播详解" tabindex="-1"><a class="header-anchor" href="#本期直播详解" aria-hidden="true">#</a> <strong>本期直播详解</strong></h2><p>在本期《<strong>开源实时监控工具 HertzBeat 如何与用户一起“跳动？</strong>》的主题直播中，HertzBeat &amp; TanCloud 创始人巩超与开发者和伙伴朋友们交流当前主流指标监控方案，解读 HertzBeat 及能力特点，并为大家演示了如何通过华为云商店安装部署 HertzBeat 方法。</p><h3 id="hertzbeat-是什么" tabindex="-1"><a class="header-anchor" href="#hertzbeat-是什么" aria-hidden="true">#</a> *<strong>*HertzBeat 是什么？**</strong></h3>',4),z={href:"https://github.com/dromara/hertzbeat",target:"_blank",rel:"noopener noreferrer"},_=i('<p>HertzBeat 中文名称为赫兹跳动  ，是一个拥有强大自定义监控能力，无需 Agent 的开源实时监控告警工具。HertzBeat 集   监控+告警+通知   为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等监控，阈值告警通知一步到位。具有更自由化的阈值规则(计算表达式)，邮件、Discord Slack Telegram、钉钉、微信、飞书、短信、Webhook 等方式及时送达。而且，HertzBeat 可将 Http、Jmx、Ssh、Snmp、Jdbc 等协议规范可配置化，用户只需在浏览器配置 YML 就能使用这些协议去自定义采集任何您想要的指标。</p><p>你相信，只需配置下就能立刻适配一款 K8s 或 Docker 等新的监控类型吗？HertzBeat 的强大自定义，多类型支持，易扩展，低耦合，能帮助开发者和中小团队快速搭建自有监控系统。</p><h3 id="hertzbeat-的强大自定义功能" tabindex="-1"><a class="header-anchor" href="#hertzbeat-的强大自定义功能" aria-hidden="true">#</a> *<strong>*HertzBeat 的强大自定义功能**</strong></h3><p>作为一款新出的监控工具，Hertzbeat 并没有去创建自有的协议让对端监控去适配，因为这需要大量的生态适配和自生产品强大的影响力才能做到让别人来改造适配，这对一个新晋开源项目来说是不现实的。针对市面上已有的标准协议，Hertzbeat 只需使用这些协议并把它们做好，就可以满足绝大部分需求。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在网管协议 snmp 中，主流数据库的 sdk 中要属 java 的最完整规范。java jdbc 规范可以让我们去直连所有的主流数据库。java mbean 指标信息通过 jmx 方式暴露，很多应用都提供 api json 接口供我们获取，当然还有 ssh 直连 linux unix 系统运行脚本获取回显，ipmi 去监控服务器指标，现有的 promethues exporter，openmetrics 规范等等，这些协议规范可以满足我们绝大部分场景。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而 Hertzbeat 就是将 http、jmx、snmp、jdbc、ssh 等等协议或格式抽象规范，使其可统一配置化。用户通过配置 YML 格式的监控模版定义， 就能使用这些协议来采集想要的指标。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一个监控类型对应一个监控模版，监控模版定义的配置也是在页面可操作的，目前官方支持的所有监控类型，其实就是一个个监控模版。用户可以在页面新增自定义的监控模版，也可以对内置模版修改更新。</p><h3 id="hertzbeat-的易用来自于诸多模板支持" tabindex="-1"><a class="header-anchor" href="#hertzbeat-的易用来自于诸多模板支持" aria-hidden="true">#</a> *<strong>*HertzBeat 的易用来自于诸多模板支持**</strong></h3><p>目前 HertzBeat 已支持应用服务、数据库、操作系统、云原生等领域的监控模板。主要原理是它将监控采集类型(mysql、jvm、k8s)都定义为 yml 监控模版，用户可以导入这些模版来支持对应类型的监控。</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不仅如此，也支持多平台告警消息渠道，标签&amp;级别过滤，支持告警静默，恢复，通知时段等等。</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="开源项目离不开小伙伴协助" tabindex="-1"><a class="header-anchor" href="#开源项目离不开小伙伴协助" aria-hidden="true">#</a> *<strong>*开源项目离不开小伙伴协助**</strong></h3><p>Hertzbeat 目前在 github gitee 都有同步仓库，其是开源社区 Dromara 下的开源项目。</p>',17),T={href:"https://github.com/dromara/hertzbeat",target:"_blank",rel:"noopener noreferrer"},H={href:"https://gitee.com/dromara/hertzbeat",target:"_blank",rel:"noopener noreferrer"},k=i('<p>Dockerhub 下载量 10K+。作为一个开源项目，除了项目本身的 star 数量，下载数量等活跃度之外，项目的开发者生态也是及其重要的。目前有超过 121 位小伙伴给 hertzbeat 代码仓库贡献过 PR，hertzbeat 的现在离不开开发者们的每一行代码。我们作为程序员可能大家都会有这样一个想法，就是自己写的代码可以部署到成千上万的服务器跑起来中给他人使用，这样的想法或者说是小梦想我们正在慢慢做到，想想有点小激动哈哈。</p><h3 id="hertzbeat-for-huawei-cloud" tabindex="-1"><a class="header-anchor" href="#hertzbeat-for-huawei-cloud" aria-hidden="true">#</a> *<strong>*HertzBeat for Huawei Cloud**</strong></h3><p>关于 HuaweiCloud 开源活动，华为云面向开源软件工具链与环境、开源应用构建和开源生态组件构建这三大重点场景，提供技术支持、奖金支持、活动支持，邀请更多的开发者，携手构建开源 for HuaweiCloud。</p><p>开发者将开源软件工具、开源应用和开源组件与华为云对象存储 OBS、数仓 DWS、云容器 CCE 等云服务对接，同时基于 Terraform 模板，上架到华为云云商店，支持其他开发者一键部署使用开源组件 ，称为“<strong>开源 xxx for HuaweiCloud</strong>”。</p><p>Hertzbeat 与 Huaweicloud 的开源合作需求已经作为 feature issue 发布到 github 仓库了，已经实现了三个，欢迎大家了解。</p><ul><li>[Task] support using Huawei Cloud OBS to store custom define yml file #841</li><li>[Task] support Huawei Cloud CCE metrics monitoring #839</li><li>[Task] support EulerOS metrics monitoring #838</li><li>[Task] support using Huawei Cloud SMN send alarm notification message #837</li><li>[Task] support using GaussDB For Influx store history metrics data #836</li></ul><p>为了更好的方便用户基于华为云部署 Hertzbeat，大家可前往华为云商店参看，只需几分钟就可<strong>一键部署 Hertzbeat</strong>。通过华为云商店部署 Hertzbeat，除了对用户的方便快捷之外，对开源团队也是有意义。Hertzbeat 本身在云商店完全免费，用户在云商店部署只收取本来的云服务器费用。当用户通过这样方式部署到云服务器时，华为云会给开源团队一定的云服务器费用分成来资助开源团队的发展。</p><p>如果你刚好需要云服务器来部署 hertzbeat，可以通过华为云商店免费使用。<br><img src="'+m+'" alt="" loading="lazy"></p>',8);function x(B,S){const a=s("ExternalLinkIcon");return n(),g("div",null,[f,t("p",null,[e("可以把它定义为一款指标监控工具，然后也是一个开源项目："),t("a",z,[e("https://github.com/dromara/hertzbeat"),r(a)]),e(" 。")]),_,t("p",null,[t("a",T,[e("https://github.com/dromara/hertzbeat"),r(a)]),e(" github star 3k，")]),t("p",null,[t("a",H,[e("https://gitee.com/dromara/hertzbeat"),r(a)]),e(" gitee star 1.6k , gitee gvp")]),k])}const E=o(b,[["render",x],["__file","DTSE-Tech-Talk-29.html.vue"]]);export{E as default};
