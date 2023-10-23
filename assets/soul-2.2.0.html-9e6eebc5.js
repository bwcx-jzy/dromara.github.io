import{_ as o}from"./soul-admin-c472a6ef.js";import{_ as l}from"./soul-framework-68ec47cd.js";import{_ as i,r as p,o as c,c as r,a,b as n,d as e,e as t}from"./app-7cab33e3.js";const u={},d=t('<p>Let&#39;s take a look at the new features first, and then I would like to share my story.</p><ul><li>Completely pluggable architecture design, plug-in hot swap.</li><li>Fully supports all versions of Dubbo, Alibaba-Dubbo, Apache-Dubbo.</li><li>Support Dubbo generalization call, multi-parameter, complex parameter interface.</li><li>Enhance the monitor plug-in and remove the Influxdb, add metrics such as memory, CPU, QPS, TPS, response delay, and support access to Prometheus.</li><li>The SpringCloud plugin supports Eureka and Nacos two registration centers.</li><li>The waf plugin is enhanced to support black or white lists and mixed modes.</li><li>Remove the Hystrix circuit breaker to be an independent plug-in.</li><li>Fix the Zookeeper data synchronization bug, and add the data synchronization method implemented by Nacos.</li><li>Support multiple kinds of soul-client, such as traditional Spring and Springboot.</li><li>Optimize the soul-admin user interface.</li><li>Fix load balancing algorithm bug.</li><li>Fix uploading large files bug.</li><li>etc.</li></ul><h2 id="experience-the-new-architecture-and-get-a-high-availability-and-high-performance-gateway-in-10-minutes" tabindex="-1"><a class="header-anchor" href="#experience-the-new-architecture-and-get-a-high-availability-and-high-performance-gateway-in-10-minutes" aria-hidden="true">#</a> Experience the new architecture and get a high-availability and high-performance gateway in 10 minutes!</h2><h3 id="bootstrap-soul-admin" tabindex="-1"><a class="header-anchor" href="#bootstrap-soul-admin" aria-hidden="true">#</a> Bootstrap soul-admin</h3>',4),g=a("li",null,"Please download soul-admin.jar, and bootstrap it.",-1),h={href:"http://localhost:9095/index.html",target:"_blank",rel:"noopener noreferrer"},m=a("code",null,"admin",-1),k=a("code",null,"123456",-1),b=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">wget</span>  https://yu199195.github.io/jar/soul-admin.jar
<span class="token operator">&gt;</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> soul-admin.jar <span class="token parameter variable">--spring.datasource.url</span><span class="token operator">=</span><span class="token string">&quot;jdbc:mysql://你的url:3306/soul?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&quot;</span>
  <span class="token parameter variable">--spring.datasource.username</span><span class="token operator">=</span><span class="token string">&#39;you username&#39;</span>  <span class="token parameter variable">--spring.datasource.password</span><span class="token operator">=</span><span class="token string">&#39;you password&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="build-your-own-gateway" tabindex="-1"><a class="header-anchor" href="#build-your-own-gateway" aria-hidden="true">#</a> Build your own gateway</h3>`,2),v=a("code",null,"soul-bootstrap",-1),f={href:"https://spring.io/quickstart",target:"_blank",rel:"noopener noreferrer"},y=a("li",null,"Secondly, please add Maven dependency like follows：",-1),w=t(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-webflux<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.2-RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.2-RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!--soul gateway start--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>soul-spring-boot-starter-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

   <span class="token comment">&lt;!--soul data sync start use websocket--&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>soul-spring-boot-starter-sync-data-websocket<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Please add the following configuration to your <code>application.yaml</code>:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
   main:
     allow-bean-definition-overriding: true
management:
  health:
    defaults:
      enabled: false
soul :
    sync:
        websocket :
             urls: ws://localhost:9095/websocket  //Set to youe soul-admin address.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="experience-plug-in-hot-swap-under-the-new-architecture" tabindex="-1"><a class="header-anchor" href="#experience-plug-in-hot-swap-under-the-new-architecture" aria-hidden="true">#</a> Experience plug-in hot swap under the new architecture</h2>`,4),I=a("li",null,[a("p",null,"Q: If I want to use circuit breaker, what should I do?")],-1),x=a("code",null,"pom.xml",-1),_={href:"https://dromara.org/zh-cn/docs/soul/soul.html",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!-- soul hystrix plugin start--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>soul-spring-boot-starter-plugin-hystrix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- soul hystrix plugin end--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q: How can I use Dubbo service?</li><li>A: If you are using Alibaba-Dubbo, then you should add the following dependencies in <code>pom.xml</code>.</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>   <span class="token comment">&lt;!--soul alibaba dubbo plugin start--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>soul-spring-boot-starter-plugin-alibaba-dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!-- soul alibaba dubbo plugin end--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are using Apache-Dubbo, then you should add the following dependencies in <code>pom.xml</code>.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>   <span class="token comment">&lt;!--soul apache dubbo plugin start--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>soul-spring-boot-starter-plugin-apache-dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!-- soul apache dubbo plugin end--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),A={href:"https://dromara.org/zh-cn/docs/soul/user-dubbo.html",target:"_blank",rel:"noopener noreferrer"},j=a("li",null,[a("p",null,"Q: What if I want to use the rate limiter function?")],-1),z={href:"https://dromara.org/zh-cn/docs/soul/plugin-rateLimiter.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!-- soul ratelimiter plugin start--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.dromara<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>soul-spring-boot-starter-plugin-ratelimiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- soul ratelimiter plugin end--&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q: What should I do if I don’t want to use some plug-ins?</li></ul><ul><li>A: You can disable or enable the plug-in in the soul-admin. That is hot pluggable.</li></ul><p>All in all, If you want to use some plug-ins, then you can add the Maven dependency in <code>pom.xml</code>, but this is not called hot pluggable.</p><h3 id="features-of-soul-gateway" tabindex="-1"><a class="header-anchor" href="#features-of-soul-gateway" aria-hidden="true">#</a> Features of Soul Gateway</h3><ul><li>I think the biggest feature is traffic screening and control. No matter how complex the request is, traffic can be filtered, and processed according to various selectors, rules, and matching methods. This process is completely visualized, customized and effective immediately, without any changes to the program.</li><li>Configurations is configured in the soul-admin and will be synchronized to the JVM memory of each Soul gateway node. This is also one of the keypoints to the high performance of the Soul gateway cluster. By the way, Http long polling, websocket, and Zookeeper are used to implement cache synchronization between Soul admin and Soul gateway.</li><li>Soul gateway uses Reactor code to achieve the independent thread scheduling with low consumption. When we open 10 plug-ins, the delay of all traffic passing through the gateway is 1~2ms.</li><li>The plug-in mechanism provides functions such as rate limiting, circuit breaker, black and white list, authentication, etc.</li><li>Soul gateway supports A/B test, blue and green release (because all traffic is controlled, this is easy to do).</li></ul><h2 id="what-scenarios-of-soul-gateway-are-suitable-and-what-should-you-pay-attention-to" tabindex="-1"><a class="header-anchor" href="#what-scenarios-of-soul-gateway-are-suitable-and-what-should-you-pay-attention-to" aria-hidden="true">#</a> What scenarios of Soul gateway are suitable, and what should you pay attention to?</h2><p>First of all, I think we should follow pragmatism, when you need to use it , then you have monmentum to know it. Thus, where are you need Soul?</p><h3 id="scenario1-adimistration-back-end" tabindex="-1"><a class="header-anchor" href="#scenario1-adimistration-back-end" aria-hidden="true">#</a> Scenario1: Adimistration back-end</h3><ul><li><p>First of all, as rising popularity of microservices, our back-end is divided into many micro-services. I believe that your companies has a back-end management system. I guess they generally have the following architecture.</p><figure><img src="`+o+'" alt="soul-admin" tabindex="0" loading="lazy"><figcaption>soul-admin</figcaption></figure></li><li><p>It may cause some troubles as follows:</p><ul><li><p>The developers of every microservice are developing based on this, which will become more and more cumbersome.</p></li><li><p>How to publish without downtime? If you want to publish the commodity module, all other modules will not be able to work at this time.</p></li><li><p>If a certain module interface requires a lot of requests (multiple deployments are required), and another module does not need it, how can you split it?</p></li></ul></li><li><p>Some people may say I can disassemble them into a few web projects. But this will bring new troubles, where to do load balance? Where to do unified certification?</p></li><li><p>Soul gateway solves all the above problems very well, just register your microservice to Soul gateway. You can do whatever you want. For example, the order module has 2 nodes, and you want to release a new version, you can send request to one of them in the gateway, and update the version in the other node. When the update complete, let the request go though both two nodes. So Java programmer can also do the jod of system operation engineer.</p></li><li><p>If you need unified authentication, you only need to add an authentication plug-in suitable for your business to the gateway.</p></li></ul><h3 id="scenario2-company-entrance-gateway-open-platform" tabindex="-1"><a class="header-anchor" href="#scenario2-company-entrance-gateway-open-platform" aria-hidden="true">#</a> Scenario2: Company entrance gateway (open platform)</h3><ul><li>If a company wants to do open-platform or an entrance gateway， authentication, rate limiting, circuit breaker, monitoring are indispensable.</li><li>If your company is in Dubbo system, when developers have written the Dubbo service, there is no need to add a new web project to provide an interface.</li><li>If an interface attacked by a large amount of request, how do you deal with it?</li><li>Soul is here to solve the trouble above, this is the purpose of the design. Let’s take a look at the overall architecture diagram.</li></ul><figure><img src="'+l+'" alt="soul-framework" tabindex="0" loading="lazy"><figcaption>soul-framework</figcaption></figure><ul><li>Soul gateway is implemented using reactive programming. Just look at the weather vane Spring, responsive programming is definitely an important direction in the future. When I was in 2014, I wrote for loop every day. The leader told me to use lambda expressions, which would be the trend of the future. Nowadays, if you are a java programmer but don&#39;t know lambda expression, you are out.</li></ul><h2 id="my-open-source-story" tabindex="-1"><a class="header-anchor" href="#my-open-source-story" aria-hidden="true">#</a> My open source story</h2><p>I started writing open source projects when I was in 2017. At first, I discussed distributed transactions &quot;LCN&quot; with Wang Liang. Later, I wrote distributed transaction middleware such as Hmily, Raincat, Myth, etc., and then wrote the Soul gateway, I have encountered many interesting things along the way, but also suffered from many novice users. The general feeling is that high extensiable, and pluggable design are really important for a good open source project. Here are some cases.</p><ul><li>Case 1: Soul gateway only supports Zookeeper at the beginning of data synchronization. Some users have reported that we do not have Zookeeper, What should we do?</li><li>Case 2: Soul gateway supports Dubbo, but some users are Alibaba-Dubbo and some users are Apache-Dubbo, What should we do?</li><li>Case 3: The clients provided by soul at the beginning are all based on Springboot. Some users are traditional Spring. What should we do?</li></ul><p>So plug-in design and SPI pluggable design is imperative.</p><p><strong>SPI VS pluggability</strong></p><p>It is true that the SPI expansion is the cornerstone of pluggability, but they are not completely equivalent. Give an example: If we store a piece of data first, then you have set the SPI interface, and there are many ways to achieve it, such as Mysql, Mongodb, Elasticseach, Zookeeper, etc. Now you have to consider whether to combine it in the project or put it in different Projects, packaged and loaded on demand? These are all things to be considered, so the SPI method cannot be a sure card.</p><p><strong>checkStyle</strong></p><ul><li><p>Strict code specification is not only a respect for framework users in source code learning but alos an open source attitude.</p></li><li><p>Strict code specifications make people look comfortable and make it easier for people to understand the entire code.</p></li><li><p>I do hope that when you submit a PR, the local installation should be successful.</p></li></ul><p><strong>Participate in open source</strong></p>',23),T={href:"https://github.com/apache/shardingsphere",target:"_blank",rel:"noopener noreferrer"},E=a("li",null,[a("p",null,"The Chinese people lag far behind in terms of open source and technology as large as chips and as small as MATLAB. I also hope that everyone has an open source mentality, participates in open source, learns technology, propagates ideas, and continues to learn for the future!")],-1);function P(L,C){const s=p("ExternalLinkIcon");return c(),r("div",null,[d,a("ul",null,[g,a("li",null,[n("Please access "),a("a",h,[n("http://localhost:9095/index.html"),e(s)]),n(" , and the default user name is "),m,n(", password is "),k,n("。")])]),b,a("ul",null,[a("li",null,[n("Firstly, you should create an empty Springboot project, please refer to "),v,n(". You can also visit the Spring official website :["),a("a",f,[n("https://spring.io/quickstart"),e(s)]),n("]")]),y]),w,a("ul",null,[I,a("li",null,[a("p",null,[n("A: You can add the following dependencies in "),x,n(", please access "),a("a",_,[n("https://dromara.org/zh-cn/docs/soul/soul.html"),e(s)]),n(" for details.")])])]),S,a("p",null,[n("For your inference: "),a("a",A,[n("https://dromara.org/zh-cn/docs/soul/user-dubbo.html"),e(s)]),n(".")]),a("ul",null,[j,a("li",null,[a("p",null,[n("A: You can add the following dependencies, for your inference: "),a("a",z,[n("https://dromara.org/zh-cn/docs/soul/plugin-rateLimiter.html"),e(s)])])])]),q,a("ul",null,[a("li",null,[a("p",null,[n("At present, I mainly focus on Apache ShardingSphere, which is the first top-level project on database sub-database and sub-table organized by Chinese in Apache. Welcome everyone to participate. "),a("a",T,[n("https://github.com/apache/shardingsphere"),e(s)]),n(".")])]),E])])}const N=i(u,[["render",P],["__file","soul-2.2.0.html.vue"]]);export{N as default};