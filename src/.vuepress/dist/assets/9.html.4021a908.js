import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as i,o as l,c as p,a as o,b as e,d as t,e as a}from"./app.c5b3201b.js";const s={},c=a('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>这个起源于，我在写python的笔记的时候，因为我一开始是typora+picgo的github图床进行编写。<br> 大家应该都知道github的访问在国内是特别慢的，更别说这种图片的较大资源了，所以说一开始就用到了jsdelivr的加速。<br> 但是这个加速也不怎么样，有的时候会出现一些问题，总是会出现图片地址在网址上可以访问，但是在typora上无法访问的情况，我也不知道是哪里的问题。<br> 所以就换成了腾讯云的oos,就没有这些问题了。当然这些都不是关键，关键是要和你们聊一下关于jsdelivr是如何对github上的资源进行加速的。</p><h2 id="jsdelivr" tabindex="-1"><a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a> jsdelivr</h2><p>jsdelivr是一个CDN服务提供商，优点在于全球通用。 专门提供js相关的CDN，对npm,github做了加速镜像。 针对npm, github提供了CDN镜像。 大部分情况下外国的网站国内是不能使用的，为什么国内可以使用jsdelivr呢？要回答这个问题，必须得思考几个概念：域名，cdn，ICP。 <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301923962.webp" alt="在这里插入图片描述" loading="lazy"></p><h2 id="cdn是什么" tabindex="-1"><a class="header-anchor" href="#cdn是什么" aria-hidden="true">#</a> cdn是什么？</h2><h3 id="cdn概念" tabindex="-1"><a class="header-anchor" href="#cdn概念" aria-hidden="true">#</a> CDN概念</h3><p>CDN全称叫做“Content Delivery Network”，中文叫<strong>内容分发网络</strong>。</p><p>实际上CDN这个概念是在1996年由美国麻省理工学院的一个研究小组为<strong>改善互联网的服务质量</strong>而提出的。那么它到底是怎么改善互联网服务质量的呢？</p><h3 id="原理分析" tabindex="-1"><a class="header-anchor" href="#原理分析" aria-hidden="true">#</a> 原理分析</h3>',9),d={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},h=a("<ol><li>首先解析出该域名所对应的IP地址(DNS域名解析)</li><li>然后将Http请求包通过网络路由到IP地址所对应的服务器</li></ol><blockquote><p>我们通常说“服务器的IP地址”，这其实不太准确，IP地址是和网卡绑定的，一个服务器可以有多个网卡，也就是可能有多个IP地址。</p></blockquote><p>我们先来看第一步：域名解析</p><p>域名解析</p><p>解析域名分为两种：</p><ol><li>将一个域名解析为一个IP地址</li><li>将一个域名解析为另外一个域名</li></ol><p>其实解析思路不难，我们在域名服务商购买了一个域名之后，需要去映射一个IP地址，可以用Map来表示这个关系：<code>{域名：IP}</code>。</p>",7),g={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},N={href:"http://test.baidu.com",target:"_blank",rel:"noopener noreferrer"},m=o("code",null,"{域名：别名}",-1),u=o("strong",null,"CNAME",-1),D=a('<p>而<strong>域名解析</strong>，实际上就是解析出指定域名所对应的IP地址，或者该域名的一个CNAME。</p><p>而域名解析是由DNS系统来负责的，DNS服务接受外部请求，从请求里提取域名，</p><ul><li>如果这个域名对应的是IP地址，则返回这个IP地址，</li><li>如果这个域名对应的是CNAME，则继续查找CNAME域名的IP地址，然后将该地址返回给请求发送者。</li></ul><p>请求发送者拿到IP地址之后，完成真正的请求调用。</p><p>实际上DNS系统是非常庞大的，这里不去多将，大家把它当作一个黑盒子，这个盒子的作用就是上文所描述的，这里用一个简单的图来表示一下。</p><p>没有CNAME的情况：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301924756.webp" alt="image.png" loading="lazy"></p><p>有CNAME的情况：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301924765.webp" alt="image.png" loading="lazy"></p><p><strong>特别注意：在有CNAME的情况下，我们可以发现，CNAME实际上在域名解析的过程中承担了中间人（或者说代理）的角色，这是CDN实现的关键。</strong></p><p>CDN原理</p><p>首先<strong>CDN</strong>是为了<strong>改善互联网的服务质量</strong>的**。**通俗一点说其实就是提高访问速度。</p><p>假设百度网站现在只有一台服务器，现在有一个人在上海访问百度，如果该服务器也在上海，那么通常来说访问比较快，如果该服务器在拉萨，那么相对而言访问就比较慢了。那么这个问题的根本原因是网络传输是依赖于网线的，网线越长，那么时间肯定就越久。</p><p>那么怎么解决这个问题呢？其实思路很简单，<strong>百度在全国各地都部署一模一样的服务器就行了，专业一点叫冗余。</strong></p><p>思路很简单，但实现还是比较麻烦的，服务器上的资源分为两种：<strong>静态资源</strong>与<strong>动态资源</strong>。</p><ul><li>静态资源：这种资源通常是很少变动的，比如图片，视频，css，javascript等等</li><li>动态资源：这种资源不同用户不同时刻访问通常是不一样的，比如ftl，jsp等等。</li></ul><p>那么如果百度要在全国各地都部署服务器，如果说每个服务器上都有相同的动态资源，那么可能还需要配置相应的数据库，因为动态资源所记录的信息通常会存储在数据库中，那么这就涉及到了数据同步等等问题，这会导致成本很高，这种做法专业一点其实就是**集群，<strong>而目前来说集群架构最多是</strong>三地五中心，**不是说全国多地集群不可能，主要是成本太高。</p><p>那么有没有成本比较低的方式呢，有，就是在每个服务器上只部署静态资源，静态资源通常不涉及到数据库，所以成本也比较低，而且也能提高用户的访问速度。</p><p>到这里，介绍了CDN想要达到的目的，那么怎么达到这个目的呢?</p><p>现在如果要比较CDN系统，我们可以考虑两点：</p><ol><li>CDN系统中存储静态资源服务器的性能以及网速怎么样。</li><li>CDN系统中全国甚至全球范围内服务器节点的数量以及部署情况。</li></ol><p>第一点很好理解，第二点大家应该也能理解了，如果静态资源的服务器节点很多，能够让每个用户在访问这些静态资源时都不用“跑很远的路程”才能获取到，那么自然这是CDN系统的优点。</p><p>有公司看到了这种需求，所以现在其实有很多CDN供应商，比如阿里，腾讯等等都有自己的CDN服务。只要你自己的系统接入了这些大厂所提供的CDN服务，你把自己的静态资源传给CDN服务，那么这些静态资源将自动的分布到全世界各地去。</p><p>好，那么现在的问题是，用户在访问静态资源时也是通过域名来访问的，域名会被解析成<strong>某一个</strong>IP地址，关键的问题就是，<strong>DNS系统怎么在做域名解析时，解析出来一个离用户最近的一个IP地址呢</strong>。</p><p>普通的DNS系统是做不到的，需要一个特殊的DNS服务器，这个特殊DNS需要知道</p><ol><li>用户当前所在位置</li><li>还需要知道用户现在访问的这个域名对应哪些IP地址，以及这个IP地址分别在哪?</li></ol><p>对于第一个问题好解决，直接从用户请求里提取出用户的ip地址，比如这个ip地址被解析为北京电信、上海移动等等。</p><p>第二个问题由谁来解决，我们现在考虑的是CDN，CDN提供商肯定知道他们公司在哪些地方部署了机器以及它们的IP地址，所以这个问题只能有CDN提供商来解决，<strong>CDN提供商会提供这个特殊的DNS服务器，我们叫做 CDN专用DNS服务器</strong>。</p><p>这样的话，只要用户在使用某个域名访问静态资源时，如果用户直接配置自己电脑的<strong>DNS地址为CDN专用DNS服务器</strong>。那么自然解决了问题，但是我们需要考虑的时，我们不能要求世界上所有的用户都去修改自己电脑的DNS地址。所以这个时候就要利用DNS中的CNAME了。</p>',29),_={href:"http://image.baidu.com",target:"_blank",rel:"noopener noreferrer"},C={href:"http://cdn.ali.com",target:"_blank",rel:"noopener noreferrer"},b=o("strong",null,"CDN专用DNS服务器",-1),f={href:"http://image.baidu.com",target:"_blank",rel:"noopener noreferrer"},j={href:"http://cdn.ali.com",target:"_blank",rel:"noopener noreferrer"},S=o("strong",null,"CDN专用DNS服务器。CDN专用DNS服务器",-1),I={href:"http://cdn.ali.com",target:"_blank",rel:"noopener noreferrer"},x=a('<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301924976.webp" alt="image.png" loading="lazy"></p><h3 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充：</h3><p>在对域名解析时有多种类型的记录，最常用的比如：</p><ul><li>A记录：一个域名对应一个IP地址</li><li>CNAME：一个域名对应另外一个域名</li><li>NS：将子域名指定其他DNS服务器解析</li></ul><h2 id="cdn的目的" tabindex="-1"><a class="header-anchor" href="#cdn的目的" aria-hidden="true">#</a> CDN的目的</h2><p>CDN的目的是改善网络质量，提供访问速度。</p><h2 id="如何查看我的网络请求是否用了cdn" tabindex="-1"><a class="header-anchor" href="#如何查看我的网络请求是否用了cdn" aria-hidden="true">#</a> 如何查看我的网络请求是否用了CDN?</h2>',7),w={href:"http://cdn.jsdelivr.net",target:"_blank",rel:"noopener noreferrer"},y=a('<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301926721.webp" alt="在这里插入图片描述" loading="lazy"></p><p>看到了这里，我们开始研究为什么jsdelivr能够在国内提供服务？ 思考一下，如何进行监管，如果让你来监管国内的网络环境，你要怎么做？</p><ol><li>网络服务是什么？本质上就是一个网站，能够访问这个网站就能够享受这个网站的服务。网站就是域名和对应的路径。</li><li>我要控制IP,但是IP是会变化，这个方法可以用来辅助</li><li>我要控制域名，我在根域名服务器里做一些修改，我维护一套白名单，只有备案过的域名可以通过我的域名解析。我还可以维护一套黑名单，你不遵守规则我就把你放入黑名单。这样的话是不是就起到了控制的作用呢？ 基于以上几点，我们看jsdelivr做了什么？ jsdelivr虽然是一家外国的公司，但是域名挂在国内了，这样就是符合政策法规了。 <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301926715.webp" alt="在这里插入图片描述" loading="lazy"> 在看CNAME解析出来的域名，这样的话这个流程中涉及到的域名都是合法的，只要我的业务是合法的，监管也会放行的。 <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301926711.webp" alt="在这里插入图片描述" loading="lazy"> <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301926683.webp" alt="在这里插入图片描述" loading="lazy"></li></ol><p>通过此文，我们知道了，ip是没有办法上CDN的，CDN是针对域名来的。当我访问域名的时候，CDN提供给我最优的ip.我们也知道了jsdeliver为什么可以在国内使用，说起来还真香呢。</p><p>能够拿下china市场，足够jsdelivr吹半年了。 <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202307301926658.webp" alt="在这里插入图片描述" loading="lazy"></p><p>注:大部分内容来自掘金</p>',6);function P(v,k){const n=i("ExternalLinkIcon");return l(),p("div",null,[c,o("p",null,[e("我们知道，当我们使用域名访问某一个网站时，实际上就是将请求包（以Http请求为例）通过网络传输给某台服务器，比如访问“"),o("a",d,[e("www.baidu.com"),t(n)]),e("”时：")]),h,o("p",null,[e("同时我们也可以给某个域名取一个别名，比如“"),o("a",g,[e("www.baidu.com"),t(n)]),e("”取一个别名“"),o("a",N,[e("test.baidu.com"),t(n)]),e("”，这种关系也可以用Map来表示："),m,e("。这里的别名专业一点叫做"),u,e("，相信大家对这个词有点眼熟，它就是这个意思。")]),D,o("p",null,[e("用户使用某个域名来访问静态资源时（这个域名在阿里CDN服务中叫做“加速域名”），比如这个域名为“"),o("a",_,[e("image.baidu.com"),t(n)]),e("”，它对应一个CNAME，叫做“"),o("a",C,[e("cdn.ali.com"),t(n)]),e("”，那么普通DNS服务器（区别"),b,e("）在解析“"),o("a",f,[e("image.baidu.com"),t(n)]),e("”时，会先解析成“"),o("a",j,[e("cdn.ali.com"),t(n)]),e("”，普通DNS服务器发现该域名对应的也是一个DNS服务器，那么会将域名解析工作转交给该DNS服务器，该DNS服务器就是"),S,e("对“"),o("a",I,[e("cdn.ali.com"),t(n)]),e("”进行解析，然后依据服务器上记录的所有CDN服务器地址信息，选出一个离用户最近的一个CDN服务器地址，并返回给用户，用户即可访问离自己最近的一台CDN服务器了。")]),x,o("blockquote",null,[o("p",null,[e("dig "),o("a",w,[e("cdn.jsdelivr.net"),t(n)])])]),y])}const A=r(s,[["render",P],["__file","9.html.vue"]]);export{A as default};
