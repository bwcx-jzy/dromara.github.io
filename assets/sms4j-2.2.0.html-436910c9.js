import{_ as s,r as d,o as n,c as t,a as e,b as a,d as r,e as l}from"./app-9548bae6.js";const c={},h=l(`<h2 id="sms4j-2-2-0-版本正式发布" tabindex="-1"><a class="header-anchor" href="#sms4j-2-2-0-版本正式发布" aria-hidden="true">#</a> sms4j 2.2.0 版本正式发布</h2><p>在拖延了 NNNNNN 多久之后，sms4j 的 2.2.0 版本终于发布了！不过嘛，作为一个有良心的作者，怎么能让大家白等呢！</p><p>这次又是给大家带来了诸多的干货！</p><h3 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性" aria-hidden="true">#</a> 新特性</h3><ol><li><p>JAVA SE 适配正式支持</p></li><li><p>网易云短信接入</p></li><li><p>redis 支持接口化处理</p></li><li><p>插件能力发布</p><h3 id="bug-修复" tabindex="-1"><a class="header-anchor" href="#bug-修复" aria-hidden="true">#</a> BUG 修复</h3></li><li><p>阿里云短信发送会不定期报错</p></li><li><p>数据库配置下不填写数据库名称会报错的问题</p></li><li><p>去除多余的注解，该注解曾导致项目的 spring 线程池失效</p></li><li><p>修复腾讯云 json 解析问题</p></li><li><p>修复 sql 配置方式 json 解析问题</p></li></ol><h3 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h3><p>返回信息优化</p><h3 id="java-se-适配" tabindex="-1"><a class="header-anchor" href="#java-se-适配" aria-hidden="true">#</a> JAVA SE 适配</h3><p>在发部了这么多版本之后，承诺过的 java se 适配终于添加了，现在 java se 项目可以直接进行使用了</p><h5 id="maven-依赖" tabindex="-1"><a class="header-anchor" href="#maven-依赖" aria-hidden="true">#</a> maven 依赖</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
        &lt;groupId&gt;org.dromara.sms4j&lt;/groupId&gt;
        &lt;artifactId&gt;sms4j-javase-plugin&lt;/artifactId&gt;
        &lt;version&gt; version &lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sms:
  alibaba:
    access-key-id: 您的accessKey
    access-key-secret: 您的accessKeySecret
    template-id: 您的templateId
    template-name: 您的templateName
    signature: 您的短信签名
# 其他配置……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="读取配置" tabindex="-1"><a class="header-anchor" href="#读取配置" aria-hidden="true">#</a> 读取配置</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SEInitializer.initializer().fromYaml();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="发送短信" tabindex="-1"><a class="header-anchor" href="#发送短信" aria-hidden="true">#</a> 发送短信</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SmsFactory.createSmsBlend(SupplierType.ALIBABA).sendMessage(&quot;手机号码&quot;, &quot;短信&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原生 SE 使用支持多种的配置，其他的使用方法请参考 官方文档</p><h3 id="网易云短信接入" tabindex="-1"><a class="header-anchor" href="#网易云短信接入" aria-hidden="true">#</a> 网易云短信接入</h3><p>在仓库的 issues 中，我们收到了很多的厂商接入建议，我们也在逐步的从中选取厂商进行接入（会优先接入新用户量相对较大的），本次网易云短信来自贡献者 **阿丢丢 ** ,在这里感谢大家对于我们的支持，也欢迎大家参与到我们之中</p><h3 id="redis-支持接口化处理" tabindex="-1"><a class="header-anchor" href="#redis-支持接口化处理" aria-hidden="true">#</a> redis 支持接口化处理</h3><p>sms4j 自带的短信拦截功能中，依赖于缓存，虽说内部实现了一个缓存，但是没有持久化的能力，略显不足，故而用户可以自己选择使用 redis 作为缓存，在先前的版本中默认的适用了 springboot 集成的 redis 进行连接，但是部分用户反馈他们并没有使用这个。所以，我们拓展了 redis 的能力，你可以自己实现一个接口，然后替代内部的 redis 实现，从而使用自己的方式进行缓存。</p><p>使用方式：</p><p>实现位于<code>org.dromara.sms4j.api.universal</code>的接口<code>RedisUtil</code>,并实现两个方法</p><p>设置带有缓存时间的 key，三个参数分别为  redis key   redis value   过期时间 time</p><p>过期时间的单位为秒</p><p><code>boolean setOrTime(String key, Object value, Long time)</code></p><p>获取 key</p><p><code>Object getByKey(String key)</code></p><p>当用户实现了该接口，并启用了 redis 作为 sms4j 拦截缓存后，框架内部的缓存实现将被替代，从而使用用户自己的 redis</p><h3 id="插件能力发布" tabindex="-1"><a class="header-anchor" href="#插件能力发布" aria-hidden="true">#</a> 插件能力发布</h3><p>曾经有一吨人（体重加起来不少于 1 吨）问过我，sms4j 是否会支持其他的通知，比如企业微信，钉钉，飞书，邮件等等。其实刚开始并没有这方面的规划…………</p><p>但是既然这么多人都问了，肯定是需求不少了<br> 本着 为天地立心，为生民立命，为往圣继绝学，为万世开太平 的伟大理想！（就是为了 star 和赞助）<br> 现在开始逐步接入，sms4j 项目本体主旨不变，其他只作为额外的能力，通过额外 maven 依赖进行引入使用。<br> 当然，贡献组成员的时间精力都很有限的，如果你有时间或者有兴趣的话可以联系我或者直接提交 pr ，参与 到我们之中，原则上我们欢迎任何贡献者参与到我们！<br> 至于我为啥不单独立仓库，别问，问就是懒！<br> 重新立仓库我需要重新搞个子域名，重新建立个仓库，重新攒 star，重新起名，重新设计 logo………………<br> 拉个摊子太烦了，所以干脆都放这了，就当是 sms4j 的插件吧</p><h4 id="现有插件" tabindex="-1"><a class="header-anchor" href="#现有插件" aria-hidden="true">#</a> 现有插件</h4><ul><li>sms4j-mail 邮件发送插件</li><li>敬请期待…………</li></ul><p>通知类是一个大类别，不是一朝一夕可完善完成的事情，我们需要做的还有很多。路漫漫其修远兮</p><p>我们真心的邀请大家参与到我们之中，跟我们一起成长，一起为往圣继绝学！</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2><p>最后还请大家给个 star 支持一下，无论是 gitee 或者是 github，我们都将十分感谢</p>`,39),o={href:"https://gitee.com/dromara/sms4j",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/dromara/sms4j",target:"_blank",rel:"noopener noreferrer"},m={href:"https://wind.kim",target:"_blank",rel:"noopener noreferrer"};function u(v,b){const i=d("ExternalLinkIcon");return n(),t("div",null,[h,e("p",null,[a("gitee  "),e("a",o,[a("https://gitee.com/dromara/sms4j"),r(i)])]),e("p",null,[a("github  "),e("a",p,[a("https://github.com/dromara/sms4j"),r(i)])]),e("p",null,[a("官方文档   "),e("a",m,[a("https://wind.kim"),r(i)])])])}const x=s(c,[["render",u],["__file","sms4j-2.2.0.html.vue"]]);export{x as default};
