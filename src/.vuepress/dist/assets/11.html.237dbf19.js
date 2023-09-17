import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as c,o as n,c as s,a as o,b as e,d as r,e as d}from"./app.c5b3201b.js";const p={},i=d('<h3 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> <strong>一、前言</strong></h3><p>一直有这么一个疑问：在使用postman工具测试api接口的时候，如何使用 <code>json</code> 字符串传值呢，而不是使用 <code>x-www-form-urlencoded</code> 类型，毕竟通过 <code>key-value</code> 传值是有局限性的。假如我要测试<strong>批量插入数据</strong>的接口呢，使用 <code>x-www-form-urlencoded</code> 方法根本就不适用于这种场景。</p><p>那么如何通过postman工具使用json字符串传值呢，这里就引申出来了spring的两个注解：</p><ul><li>@RequestParam</li><li>@RequestBody</li></ul><p>总而言之，这两个注解都可以在后台接收参数，但是使用场景不一样。继续往下看 ↓</p><h3 id="二、-requestparam" tabindex="-1"><a class="header-anchor" href="#二、-requestparam" aria-hidden="true">#</a> <strong>二、@RequestParam</strong></h3><p>先介绍一下@RequestParam的使用场景：</p>',7),l=o("strong",null,"来自requestHeader",-1),u=o("strong",null,"请求头",-1),g=o("strong",null,"通常用于GET请求",-1),m={href:"http://localhost:8081/spring-boot-study/novel/findByAuthorAndType?author=%E5%94%90%E5%AE%B6%E4%B8%89%E5%B0%91&type=%E5%B7%B2%E5%AE%8C%E7%BB%93%EF%BC%8C%E5%85%B6%E5%9C%A8%60Controller%60",target:"_blank",rel:"noopener noreferrer"},h=d('<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048406.jpeg" alt="img" loading="lazy"></p><p>@RequestParam有三个配置参数：</p><ul><li><code>required</code> 表示是否必须，默认为 <code>true</code>，必须。</li><li><code>defaultValue</code> 可设置请求参数的默认值。</li><li><code>value</code> 为接收url的参数名（相当于key值）。</li></ul><p><strong>@RequestParam用来处理 <code>Content-Type</code> 为 <code>application/x-www-form-urlencoded</code> 编码的内容，<code>Content-Type</code>默认为该属性。</strong></p><p><strong>@RequestParam也可用于其它类型的请求，例如：POST、DELETE等请求</strong>。比如向表中插入单条数据，<code>Controller</code> 层的写法如下图所示：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048430.jpeg" alt="img" loading="lazy"></p><p>由于@RequestParam是用来处理 <code>Content-Type</code> 为 <code>application/x-www-form-urlencoded</code> 编码的内容的，所以在postman中，要选择body的类型为 <code>x-www-form-urlencoded</code>，这样在headers中就自动变为了 <code>Content-Type</code> : <code>application/x-www-form-urlencoded</code> 编码格式。如下图所示：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048440.jpeg" alt="img" loading="lazy"></p><p>但是这样不支持批量插入数据啊，如果改用 <code>json</code> 字符串来传值的话，类型设置为 <code>application/json</code>，点击发送的话，会报错，后台接收不到值，为 <code>null</code>。</p><p>这时候，注解@RequestBody就派上用场了。继续往下看 ↓</p><h3 id="三、-requestbody" tabindex="-1"><a class="header-anchor" href="#三、-requestbody" aria-hidden="true">#</a> <strong>三、@RequestBody</strong></h3><p>先介绍一下@RequestBody的使用场景：</p><p>注解@RequestBody接收的参数是<strong>来自requestBody</strong>中，即<strong>请求体</strong>。一般用于处理非 <code>Content-Type: application/x-www-form-urlencoded</code>编码格式的数据，比如：<code>application/json</code>、<code>application/xml</code>等类型的数据。</p><p>就<code>application/json</code>类型的数据而言，使用注解@RequestBody可以将body里面所有的json数据传到后端，后端再进行解析。</p><h4 id="_3-1-向表中批量插入数据" tabindex="-1"><a class="header-anchor" href="#_3-1-向表中批量插入数据" aria-hidden="true">#</a> <strong>3.1 向表中批量插入数据</strong></h4><p>举个批量插入数据的例子，Controller层的写法如下图所示：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048433.jpeg" alt="img" loading="lazy"></p><p>由于@RequestBody可用来处理 <code>Content-Type</code> 为 <code>application/json</code> 编码的内容，所以在postman中，选择body的类型为<code>row</code> -&gt; <code>JSON(application/json)</code>，这样在 <code>Headers</code> 中也会自动变为 <code>Content-Type</code> : <code>application/json</code> 编码格式。body内的数据如下图所示：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048437.jpeg" alt="img" loading="lazy"></p><p>批量向表中插入两条数据，这里的 <code>saveBatchNovel()</code>方法已经封装了 <code>JPA</code>的 <code>saveAll()</code> 方法。<code>body</code> 里面的 <code>json</code> 语句的 <code>key</code> 值要与后端实体类的属性一一对应。</p><p>**注意：**前端使用$.ajax的话，一定要指定 <code>contentType: &quot;application/json;charset=utf-8;&quot;</code>，默认为 <code>application/x-www-form-urlencoded</code>。</p><h4 id="_3-2-后端解析json数据" tabindex="-1"><a class="header-anchor" href="#_3-2-后端解析json数据" aria-hidden="true">#</a> <strong>3.2 后端解析json数据</strong></h4><p>上述示例是传递到实体类中的具体写法，那么如果传递到非实体类中，body里面的json数据需要怎么解析呢？我们再来看下面这个例子：</p><p>在body中，我们还是输入上面的json数据，根据分析，上面的json数据是一个List数组内嵌套着map对象，那么在后台的接收形式可写为 <code>List&lt;Map&lt;String, String&gt;&gt;</code>，具体代码如下图所示：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048413.jpeg" alt="img" loading="lazy"></p><p>postman请求：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048986.jpeg" alt="img" loading="lazy"></p><p>控制台输出：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308111048033.jpeg" alt="img" loading="lazy"></p><p>得出结论，通过@RequestBody可以解析Body中json格式的数据。</p><h3 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> <strong>四、总结</strong></h3><p>注解@RequestParam接收的参数是<strong>来自requestHeader</strong>中，即<strong>请求头</strong>。<strong>通常用于GET请求</strong>，像POST、DELETE等其它类型的请求也可以使用。</p><p>注解@RequestBody接收的参数是<strong>来自requestBody</strong>中，即<strong>请求体</strong>。一般用于处理非 <code>Content-Type: application/x-www-form-urlencoded</code>编码格式的数据，比如：<code>application/json</code>、<code>application/xml</code>等类型的数据。通常用于接收POST、DELETE等类型的请求数据，GET类型也可以适用。</p><h3 id="五-区别总结" tabindex="-1"><a class="header-anchor" href="#五-区别总结" aria-hidden="true">#</a> 五：区别总结</h3><p><code>@RequestParam</code>和<code>@RequestBody</code>是Spring MVC中常用的参数绑定注解，它们在处理HTTP请求时有以下区别：</p><ol><li><p>功能：<code>@RequestParam</code>用于将HTTP请求中的参数绑定到方法的参数上，主要用于处理GET请求的参数或POST请求中的表单参数。<code>@RequestBody</code>用于接收整个请求体，并将其转换为方法参数所需的对象或数据类型。</p></li><li><p>参数位置：<code>@RequestParam</code>注解通常用于方法的参数上，用于绑定URL中的查询参数或表单参数。<code>@RequestBody</code>注解通常用于方法的参数上，用于接收请求体中的数据。</p></li><li><p>数据类型：<code>@RequestParam</code>注解可以绑定简单类型的参数（如字符串、整数等），也可以绑定复杂类型的参数（如自定义对象）。<code>@RequestBody</code>注解通常用于绑定复杂类型的参数，例如JSON格式的请求体，会将请求体的JSON数据转换为指定的Java对象。</p></li><li><p>绑定方式：<code>@RequestParam</code>注解通过查询字符串或表单参数的方式来获取参数值。<code>@RequestBody</code>注解通过接收整个请求体，并将其转换为方法参数所需的对象或数据类型。</p></li><li><p>使用场景：<code>@RequestParam</code>适用于处理简单的GET请求参数或表单参数，常用于查询操作。<code>@RequestBody</code>适用于处理复杂的请求体数据，例如JSON格式的数据，常用于创建或更新操作。</p></li></ol><p>总结起来，<code>@RequestParam</code>主要用于绑定URL中的查询参数或表单参数，适用于简单的参数绑定；<code>@RequestBody</code>主要用于接收请求体中的数据，适用于复杂的参数绑定和处理。</p>',37);function y(q,j){const t=c("ExternalLinkIcon");return n(),s("div",null,[i,o("p",null,[e("注解@RequestParam接收的参数是"),l,e("中，即"),u,e("。"),g,e("，比如常见的url："),o("a",m,[e("http://localhost:8081/spring-boot-study/novel/findByAuthorAndType?author=唐家三少&type=已完结，其在`Controller`"),r(t)]),e(" 层的写法如下图所示：")]),h])}const x=a(p,[["render",y],["__file","11.html.vue"]]);export{x as default};