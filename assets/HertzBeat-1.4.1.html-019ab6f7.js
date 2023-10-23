import{_ as i}from"./HertzBeat-1.4.1-7-03448ef6.js";import{_ as n}from"./HertzBeat-1.4.1-8-bd15398e.js";import{_ as l,r as c,o as s,c as d,a as e,b as t,d as a,e as r}from"./app-9548bae6.js";const h="/assets/img/news/HertzBeat-1.4.1-1.png",g="/assets/img/news/HertzBeat-1.4.1-2.png",u="/assets/img/news/HertzBeat-1.4.1-3.png",p="/assets/img/news/HertzBeat-1.4.1-4.png",_="/assets/img/news/HertzBeat-1.4.1-5.png",m="/assets/img/news/HertzBeat-1.4.1-6.png",b={},f=e("blockquote",null,[e("p",null,"哈喽大家好，时间很快 1 个多月又过去了，HertzBeat 经过近两个月的迭代终于发布了 v1.4.1 版本。为什么是终于，因为有点难哈哈。我们参考 rocketmq 重构了 netty 的 server client 端模块，重构了采集器集群调度。比起上一版本有了更优雅的通讯代码，更完善全面的集群。采集任务一致性 hash 调度，集群心跳保活，断开主动重连，主动上线下线，主动停机等等这些都有。设计了新的控制台登陆界面和欢迎页面，支持了采集器集群的 UI 管理，合并了开源之夏两位同学的帮助提示头特性和阈值表达式特性，很多用户需要的监控指标名称国际化等等，最重要的当然是修复若干 BUG，增强了用户体验(自我感觉良好)。")],-1),z=e("h3",{id:"总结起来如下",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结起来如下","aria-hidden":"true"},"#"),t(" 总结起来如下：")],-1),x=e("li",null,[e("strong",null,"重构 netty client server, 采集器集群调度"),t(" 感谢 @Ceilzcx @tomsun28")],-1),k=e("li",null,[e("strong",null,"采集器集群的 UI 界面管理"),t(" 感谢 @Ceilzcx @tomsun28")],-1),B=e("li",null,[e("strong",null,"功能页面帮助信息模块和阈值表达式增强"),t(" 开源之夏和 GLCC 课题 感谢 @YutingNie @mikezzb")],-1),H=e("li",null,[e("strong",null,"新的控制台登陆界面和欢迎页面")],-1),v=e("li",null,[e("strong",null,"监控指标名称国际化"),t(" 用户可以看指标的中英文名称啦，欢迎一起完善监控模版里面的 i18n 国际化资源")],-1),N=e("strong",null,"支持 kubernetes helm charts 一键部署",-1),y={href:"https://artifacthub.io/packages/search?repo=hertzbeat",target:"_blank",rel:"noopener noreferrer"},G=r('<p><strong>更多的特性和 BUG 修复，稳定性提示</strong> 感谢 @zqr10159 @Carpe-Wang @luxx-lq @l646505418 @LINGLUOJUN @luelueking @qyaaaa @novohit @gcdd1993</p><h3 id="上效果图" tabindex="-1"><a class="header-anchor" href="#上效果图" aria-hidden="true">#</a> 上效果图:</h3><ul><li>新的登陆页面 UI</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>支持采集器集群管理</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>友好的帮助文档头</li></ul><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>监控指标名称国际化</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="什么是-hertzbeat" tabindex="-1"><a class="header-anchor" href="#什么是-hertzbeat" aria-hidden="true">#</a> 什么是 HertzBeat?</h3><p>HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，高性能集群，无需 Agent 的开源实时监控告警系统。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li>集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等监控阈值告警通知一步到位。</li><li>易用友好，无需 <code>Agent</code>，全 <code>WEB</code> 页面操作，鼠标点一点就能监控告警，零上手学习成本。</li><li>将 <code>Http,Jmx,Ssh,Snmp,Jdbc</code> 等协议规范可配置化，只需在浏览器配置监控模版 <code>YML</code> 就能使用这些协议去自定义采集想要的指标。您相信只需配置下就能立刻适配一款 <code>K8s</code> 或 <code>Docker</code> 等新的监控类型吗？</li><li>高性能，支持多采集器集群横向扩展，支持多隔离网络监控，云边协同。</li><li>自由的告警阈值规则，<code>邮件</code> <code>Discord</code> <code>Slack</code> <code>Telegram</code> <code>钉钉</code> <code>微信</code> <code>飞书</code> <code>短信</code> <code>Webhook</code> 等方式消息及时送达。</li></ul><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),I={href:"https://github.com/dromara/hertzbeat",target:"_blank",rel:"noopener noreferrer"},A={href:"https://gitee.com/dromara/hertzbeat",target:"_blank",rel:"noopener noreferrer"},E=r(`<h3 id="尝试部署" tabindex="-1"><a class="header-anchor" href="#尝试部署" aria-hidden="true">#</a> 尝试部署</h3><ol><li><code>docker</code> 环境仅需一条命令即可开始</li></ol><p><code>docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat</code></p><p><code>或者使用 quay.io (若 dockerhub 网络链接超时)</code></p><p><code>docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat</code></p><ol start="2"><li>浏览器访问 <code>http://localhost:1157</code> 即可开始，默认账号密码 <code>admin/hertzbeat</code></li><li>部署采集器集群</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector tancloud/hertzbeat-collector
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-e IDENTITY=custom-collector-name</code> : 配置此采集器的唯一性标识符名称，多个采集器名称不能相同，建议自定义英文名称。</li><li><code>-e MANAGER_HOST=127.0.0.1</code> : 配置连接主 HertaBeat 服务的对外 IP。</li><li><code>-e MANAGER_PORT=1158</code> : 配置连接主 HertzBeat 服务的对外端口，默认 1158。</li></ul><hr>`,9),T={href:"https://github.com/dromara/hertzbeat",target:"_blank",rel:"noopener noreferrer"},q=e("br",null,null,-1),U={href:"https://gitee.com/dromara/hertzbeat",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"感兴趣的话给个 star 吧😄，QQ 交流群：236915833  微信交流群请加好友：",-1),C=e("img",{src:n,height:"340"},null,-1);function L(R,S){const o=c("ExternalLinkIcon");return s(),d("div",null,[f,z,e("ul",null,[x,k,B,H,v,e("li",null,[N,t(" 见 "),e("a",y,[t("https://artifacthub.io/packages/search?repo=hertzbeat"),a(o)])])]),G,e("p",null,[e("strong",null,[t("Github: "),e("a",I,[t("https://github.com/dromara/hertzbeat"),a(o)])])]),e("p",null,[e("strong",null,[t("Gitee: "),e("a",A,[t("https://gitee.com/dromara/hertzbeat"),a(o)])])]),E,e("p",null,[e("strong",null,[t("Github: "),e("a",T,[t("https://github.com/dromara/hertzbeat"),a(o)])]),q,e("strong",null,[t("Gitee: "),e("a",U,[t("https://gitee.com/dromara/hertzbeat"),a(o)])])]),w,C])}const V=l(b,[["render",L],["__file","HertzBeat-1.4.1.html.vue"]]);export{V as default};
