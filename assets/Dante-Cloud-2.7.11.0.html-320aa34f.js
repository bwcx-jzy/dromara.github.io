import{_ as r,r as a,o as n,c,a as e,b as o,d as l,e as d}from"./app-9548bae6.js";const t={},p=d('<p><strong>Dante Cloud</strong> 一款企业级微服务架构和服务能力开发平台，是采用领域驱动模型(DDD)设计思想的、全面拥抱 <code>Spring Authorization Server</code> 的、基于 OAuth2.1 协议的微服务架构。基于 <code>Spring Authorization Server 0.4.2</code>、<code>Spring Boot 2.7.11</code>、<code>Spring Cloud 2021.0.6</code>、<code>Spring Cloud Alibaba 2021.0.5.0</code>、<code>Nacos 2.2.2</code> 等最新版本开发的多租户系统，遵循 <code>SpringBoot</code> 编程思想，高度模块化和可配置化。具备服务发现、配置、熔断、限流、降级、监控、多级缓存、分布式事务、工作流等功能</p><p><strong>平台定位</strong></p><ul><li>构建成熟的、完善的、全面的，基于 OAuth2.1 的、前后端分离的微服务架构解决方案。</li><li>面向企业级应用和互联网应用设计开发，既兼顾传统项目的微服务化，又满足互联网应用开发建设、快速迭代的使用需求。</li><li>平台架构使用微服务领域及周边相关的各类新兴技术或主流技术进行建设，是帮助快速跨越架构技术选型、研究探索阶段的利器。</li><li>代码简洁规范、结构合理清晰，是新技术开发应用的典型的、综合性案例，助力开发人员对新兴技术的学习和掌握。</li></ul><h2 id="_1-、为什么更名为-dante-cloud" tabindex="-1"><a class="header-anchor" href="#_1-、为什么更名为-dante-cloud" aria-hidden="true">#</a> [1]、为什么更名为  Dante Cloud</h2><p><strong>Dante Cloud</strong> (但丁)， 原项目名称 Eurynome Cloud，很多朋友都反映名字太长、读起来拗口、不容易记等问题。因此在加入 Dromara 开源社区之际，将名字进行了变更。</p><p><strong>Dante</strong>，即但丁·阿利基耶里(公元 1265 年-公元 1321 年)，13 世纪末意大利诗人，现代意大利语的奠基者，欧洲文艺复兴时代的开拓人物之一，以长诗《神曲》(原名《喜剧》)而闻名，后来一位作家叫薄伽丘将其命名为神圣的喜剧。</p><p>他被认为是中古时期意大利文艺复兴中最伟大的诗人，也是西方最杰出的诗人之一，最伟大的作家之一。恩格斯评价说：“封建的中世纪的终结和现代资本主义纪元的开端，是以一位大人物为标志的，这位人物就是意大利人但丁，他是中世纪的最后一位诗人，同时又是新时代的最初一位诗人”</p><p>更名为 Dante Cloud，寓意本项目会像恩格斯对但丁的评价一样，在行业变革的时期，可以成为一款承上启下，助力企业信息化建设变革的产品。</p><h2 id="_2-、版本说明" tabindex="-1"><a class="header-anchor" href="#_2-、版本说明" aria-hidden="true">#</a> [2]、版本说明</h2><p>自 11 月 24 日，Spring Boot 3.0 以及 Spring Cloud 2022.0.0 等全新版本发布，整个 Java 社区也步入的 Java 17 和 Spring Boot 3 的新时代。紧跟 Java 技术和 Spring 社区的发展，让更多质量更好、性能更优的新特性服务于实际的开发工作，Dante Cloud 也同步进行升级及适配，开发了基于 Spring Authorization Server 1.1.0-RC1、Spring  Boot 3.0.6、Spring Cloud 2022.0.2、Spring Cloud Alibaba 2022.0.0.0-RC1、Spring Cloud Tencent 1.11.1-2022.0.1、Nacos 2.2.2 全新 Dante Cloud 版本。关注请移步 3.0  分支</p><h2 id="_3-、本次更新内容" tabindex="-1"><a class="header-anchor" href="#_3-、本次更新内容" aria-hidden="true">#</a> [3]、本次更新内容</h2><ul><li><p>【主要更新】</p></li><li><p>[升级] Spring Boot 版本升级至 2.7.11</p></li><li><p>[升级] Spring Authorization Server 版本升级至 0.4.2</p></li><li><p>[升级] Nacos 版本升级至 2.2.2</p></li><li><p>[升级] Camunda 版本升级至 7.19.0，同步更新数据库脚本</p></li><li><p>[升级] Skywalking Agent 版本升级至 8.15.0</p></li><li><p>[升级] Debezium 版本及相关基础设施版本升级至 2.2</p></li><li><p>【其它更新】</p></li><li><p>[漏洞] 修复 Snakeyaml (CVE-2022-1471) 存在反序列化漏洞 和 (CVE-2022-41854) 存在缓冲区溢出漏洞</p></li><li><p>[新增] 新增服务优雅停机支持</p></li><li><p>[新增] 新增 MongoDB 基础 Entity、Repository、Service、Controller 和 MybatisPlus 基础 Controller，方便业务接口代码编写。</p></li><li><p>[优化] 优化数据自动初始化脚本放置位置，与新版本代码创建数据表需要启动两个服务机制进行统一。</p></li><li><p>[优化] Antisamy 版本升级至 1.7.3，同步升级 XSS 攻击防护策略配置文件</p></li><li><p>[优化] 优化 Docker Compose 脚本配置</p></li><li><p>[修复] 修复自定义社交登录模式中，微信小程序参数获取未补充错误。</p></li><li><p>【依赖更新】</p></li><li><p>[升级] snakeyaml 版本升级至 2.0.</p></li><li><p>[升级] fastjson2 版本升级至 2.0.29</p></li><li><p>[升级] wxjava 版本升级至 4.5.0</p></li><li><p>[升级] hutool 版本升级至 5.8.18</p></li><li><p>[升级] docker-maven-plugin 版本升级至 0.42.1</p></li><li><p>[升级] redisson 版本升级至 3.20.1</p></li><li><p>[升级] springdoc 版本升级至 1.7.0</p></li><li><p>[升级] qiniu-java-sdk 版本升级至 7.13.0</p></li><li><p>[升级] aliyun-sdk-oss 版本升级至 3.16.2</p></li><li><p>[升级] tencentcloud-sdk-java-sms 版本升级至 3.1.744</p></li><li><p>[升级] alipay-sdk-java 版本升级至 4.35.110.ALL</p></li><li><p>[升级] xnio 版本升级至 3.8.9.Final</p></li><li><p>[升级] bcprov-jdk15to18 版本升级至 1.73</p></li><li><p>【升级说明】</p></li></ul><p>因仓库提交文件大小限制，所以从本次发布以后不再上传 Skywalking Agent 相关 Jar 包，有需要请自行下载。</p>',13),s={href:"https://gitee.com/dromara/dante-cloud/releases/tag/v2.7.11.0",target:"_blank",rel:"noopener noreferrer"},u=d('<h2 id="_4-、dante-cloud-2-7-x-特点" tabindex="-1"><a class="header-anchor" href="#_4-、dante-cloud-2-7-x-特点" aria-hidden="true">#</a> [4]、Dante Cloud 2.7.X  特点</h2><h3 id="一、前端" tabindex="-1"><a class="header-anchor" href="#一、前端" aria-hidden="true">#</a> 一、前端</h3><ul><li>未使用任何流行开源模版，使用全新技术栈，完全纯&quot;手写&quot;全新前端工程。</li><li>借鉴参考流行开源版本的使用和设计，新版前端界面风格和操作习惯尽量与当前流行方式统一。</li><li>充份使用 Typescript 语言特性，解决大量类型校验问题，尽可能规避 &quot;any&quot; 式的 Typescript 编程语言使用方式。</li><li>充份使用 Composition Api 和 Hooks 等 Vue3 框架新版特性进行代码编写。</li><li>充份利用 Component、Hooks 以及 Typescript 面向对象等特性，抽取通用组件和代码，尽可能降低工程重复代码。</li><li>对较多 Quasar 基础组件和应用功能组件进行封装，以方便代码的统一修改维护和开发使用。</li><li>对生产模式下，对基于 Vite3 的工程打包进行深度性能优化。</li><li>提供以 docker-compose 方式，对工程生产代码进行容器化打包和部署。</li><li>支持密码模式、授权码模式、手机短信模式、第三方社会化等多种登录模式。</li></ul><h3 id="二、后端" tabindex="-1"><a class="header-anchor" href="#二、后端" aria-hidden="true">#</a> 二、后端</h3><p>基于 Spring Authorization Server 深度定制和扩展:</p><ul><li>基于 <code>Spring Authorization Server</code> 和 <code>Spring Data JPA</code> 实现多租户系统架构， 支持 Database 和 Schema 两种模式。</li><li>基于 <code>Spring Data JPA</code>，重新构建 <code>Spring Authorization Server</code> 基础数据存储代码，替代原有 JDBC 数据访问方式，破除 <code>Spring Authorization Server</code> 原有数据存储局限，扩展为更符合实际应用的方式和设计。</li><li>基于 <code>Spring Authorization Server</code>，在 OAuth 2.1 规范基础之上，增加自定义 <code>Resource Ownership Password</code> (密码)认证模式，以兼容现有基于 OAuth 2 规范的、前后端分离的应用，支持 <code>Refresh Token</code> 的使用。</li><li>基于 <code>Spring Authorization Server</code>，在 OAuth 2.1 规范基础之上，增加自定义 <code>Social Credentials</code> (社会化登录)认证模式，支持手机短信验证码、微信小程序、基于 <code>JustAuth</code> 的第三方应用登录， 支持 <code>Refresh Token</code> 的使用。</li><li>扩展 <code>Spring Authorization Server</code> 默认的 <code>Client Credentials</code> 模式，实现 <code>Client Credentials</code> 模式支持 Refresh Token 的使用。</li><li>扩展 <code>Spring Authorization Server</code> 默认的 <code>Client Credentials</code> 模式，实现真正的使用 <code>Scope</code> 权限对接口进行验证。增加客户端 <code>Scope</code> 的权限配置功能，并与已有的用户权限体系解耦</li><li>支持 <code>Spring Authorization Server</code> <code>Authorization Code</code> + <code>PKCE</code> 认证模式</li><li>支持 <code>Spring Authorization Server</code> 的标准的 <code>JWT Token</code> 加密校验方式外，新增基于自定义证书的 <code>JWT Token</code> 加密校验方式，可通过配置动态修改。</li><li>支持 <code>Opaque Token</code> (不透明令牌) 格式及校验方式，将低 <code>JWT Token</code> 被捕获解析的风险。可通过修改配置参数，设置默认 Token 格式是采用 <code>Opaque Token</code> 格式还是 <code>JWT Token</code> 格式。</li><li>全面支持 <code>OpenID Connect</code> (OIDC) 协议, 系统使用时可根据使用需求，通过前端开关配置，快速切换 OIDC 模式和传统 OAuth2 模式</li><li>深度扩展 <code>Authorization Code</code>、<code>Resource Ownership Password</code>、<code>Social Credentials</code> 几种模式，全面融合 <code>IdToken</code>、<code>Opaque Token</code>、<code>JWT Token</code> 与现有权限体系，同时提供 <code>IdToken</code> 和 自定义 Token 扩展两种无须二次请求的用户信息传递方式，减少用户信息的频繁请求。</li><li>自定义 <code>Spring Authorization Server</code> 授权码模式登录认证页面和授权确认页面，授权码模式登录采用数据加密传输。支持多种验证码类型，暂不支持行为验证码。</li><li>基于 <code>JetCache</code> 的多级缓存支持，实现自定义 <code>Spring Data JPA</code> 二级缓存，有效解决 <code>Spring Cache</code> 查询缓存更新问题。</li><li>全面整合 <code>@PreAuthorize</code> 注解权限与 URL 权限，通过后端动态配置，无须在代码中配置 <code>Spring Security</code> 权限注解以及权限方法，即可实现接口鉴权以及权限的动态修改。采用分布式鉴权方案，规避 Gateway 统一鉴权的压力以及重复鉴权问题</li><li>采用分布式服务独立鉴权方案，<code>Spring Security</code> <code>@PreAuthorize</code> 的权限注解、权限方法以及 URL 权限，通过后端动态配置后，实时动态分发至对应服务。</li><li>OAuth2 UserDetails 核心数据支持直连数据库获取和 Feign 远程调用两种模式。OAuth2 直连数据库模式性能更优，Feign 访问远程调用可扩展性更强。可通过配置动态修改采用策略方式。</li><li>基于自定义 Session，混合国密 <code>SM2</code>(非对称) 和 <code>SM4</code>(对称加密) 算法，实现秘钥动态生成加密传输。利用“一人一码机制”，实现密码模式登录数据进行动态加密传输。配合 OAuth2 Client 验证，保护接口调用和前后端数据传输的合理性及安全性。</li></ul>',6),h={href:"https://gitee.com/dromara/dante-cloud",target:"_blank",rel:"noopener noreferrer"};function S(g,C){const i=a("ExternalLinkIcon");return n(),c("div",null,[p,e("p",null,[o("Release 详情  "),e("a",s,[o("https://gitee.com/dromara/dante-cloud/releases/tag/v2.7.11.0"),l(i)])]),u,e("p",null,[o("仓库地址："),e("a",h,[o("https://gitee.com/dromara/dante-cloud"),l(i)])])])}const k=r(t,[["render",S],["__file","Dante-Cloud-2.7.11.0.html.vue"]]);export{k as default};
