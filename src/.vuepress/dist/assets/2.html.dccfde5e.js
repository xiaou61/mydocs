import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as l,o as c,c as s,a as o,b as e,d as n,e as t}from"./app.c5b3201b.js";const p={},r=o("p",null,"这个的起源就是当时想要移植一下我学习渡一html的那个md文件，后来发现。我之前在obsidian上写的关于图片插入方面，出了一些问题，他这个默认开启的插入格式是这个软件所独有的![[地址]]。这个情况就有些麻烦，最后还是一个一个转换成正常的了，但是预览后发现还是不行，估计是因为他图片的问题。Pasted image 20230720210255他的格式是这样的，可能是因为空格的原因，无法识别，后来干脆就不用这个写作了。继续选择了typroa。之后图片问题。打算直接用上传到服务器的方法，虽然说这个方法，如果服务器倒闭之类的，可能会造成一些问题，但是我这里选择的github，应该是没那么容易倒闭的。但是也不敢保证，毕竟像gitee这种也是挂了，如果以后有点钱了，会考虑升成腾讯云或者阿里云的oos的。这里就是用的一个免费的服务器了。",-1),d=o("h2",{id:"picgo",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#picgo","aria-hidden":"true"},"#"),e(" Picgo")],-1),h={href:"https://picgo.github.io/PicGo-Doc/zh/",target:"_blank",rel:"noopener noreferrer"},g=t("<p><strong>PicGo: 一个用于快速上传图片并获取图片 URL 链接的工具</strong></p><p>PicGo 本体支持如下图床：</p><ul><li><code>七牛图床</code> v1.0</li><li><code>腾讯云 COS v4\\v5 版本</code> v1.1 &amp; v1.5.0</li><li><code>又拍云</code> v1.2.0</li><li><code>GitHub</code> v1.5.0</li><li><code>SM.MS V2</code> v2.3.0-beta.0</li><li><code>阿里云 OSS</code> v1.6.0</li><li><code>Imgur</code> v1.6.0</li></ul>",3),u={href:"https://picgo.github.io/PicGo-Core-Doc/",target:"_blank",rel:"noopener noreferrer"},m=o("p",null,"特色功能",-1),_=o("li",null,"支持拖拽图片上传",-1),f=o("li",null,"支持快捷键上传剪贴板里第一张图片",-1),b=o("li",null,"Windows 和 macOS 支持右键图片文件通过菜单上传 (v2.1.0+)",-1),x=o("li",null,"上传图片后自动复制链接到剪贴板",-1),y=o("li",null,"支持自定义复制到剪贴板的链接格式",-1),v=o("li",null,[e("支持修改快捷键，默认快速上传快捷键："),o("code",null,"command+shift+p"),e("（macOS）| "),o("code",null,"control+shift+p"),e("（Windows\\Linux)")],-1),j={href:"https://github.com/PicGo/Awesome-PicGo",target:"_blank",rel:"noopener noreferrer"},k=o("li",null,"支持通过发送 HTTP 请求调用 PicGo 上传（v2.2.0+)",-1),w={href:"https://github.com/Molunerfinn/PicGo/projects",target:"_blank",rel:"noopener noreferrer"},P=t('<p>这些是pigco官方的一些说法。下载完毕后就是这样的</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755482.png" alt="image-20230721200634635" loading="lazy"></p><p>这里有一个需要注意的地方，我就提前说了，就是在上传的时候不要开一些加速器之类的。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755628.png" alt="image-20230721200717868" loading="lazy"></p><p>类似steam++这样的加速器，不然会导致后续上传的失败。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755518.png" alt="image-20230721200834579" loading="lazy"></p><p>之后进行图床的设置。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755522.png" alt="image-20230721200958949" loading="lazy"></p><p>可以发现这些是要进行设置的东西。</p><h2 id="github配置" tabindex="-1"><a class="header-anchor" href="#github配置" aria-hidden="true">#</a> github配置</h2><h3 id="仓库的创建" tabindex="-1"><a class="header-anchor" href="#仓库的创建" aria-hidden="true">#</a> 仓库的创建</h3><p>之后我们进入github创建一个存储库</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755548.png" alt="image-20230721201352635" loading="lazy"></p><p>像这样进行创建就可以了。</p><p>之后进setting里面</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755610.png" alt="image-20230721201530828" loading="lazy"></p><p>拿到自己的token</p><h3 id="token的获取" tabindex="-1"><a class="header-anchor" href="#token的获取" aria-hidden="true">#</a> token的获取</h3><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755245.png" alt="image-20230721201709736" loading="lazy"></p><p>进入后。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755397.png" alt="image-20230721201740682" loading="lazy"></p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755499.png" alt="image-20230721201815342" loading="lazy"></p><p>要选择创建那个tokens(classic)</p><p>之后选上repo的这个权限就可以了。</p><p>期限可以设置成永久，也可以默认，Note就是描述一下这个token是干什么的，一般没什么用。随便取就可以了。之后复制好token。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755447.png" alt="image-20230721201935793" loading="lazy"></p><p>还是这张图</p><h2 id="picgo配置" tabindex="-1"><a class="header-anchor" href="#picgo配置" aria-hidden="true">#</a> picgo配置</h2><p>图床配置名随便取就可以。</p><p>仓库名是你自己的github名字加你的仓库名</p><p>例如我的github名字是xiaou,我创建的仓库是pictures那么这里就写</p><p>xiaou/pictures</p><p>分支名写默认的就可以main。</p><p>后面俩个可以默认，当然为了访问速度的考虑，最后一个设置自定义域名我们可以进行一个设置。</p><h2 id="jsdelivr进行图片访问加速" tabindex="-1"><a class="header-anchor" href="#jsdelivr进行图片访问加速" aria-hidden="true">#</a> jsDelivr进行图片访问加速</h2>',35),G={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},z=o("p",null,"官网在这里",-1),q=o("p",null,[o("img",{src:"https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755602.png",alt:"image-20230721202248278",loading:"lazy"})],-1),S=o("p",null,"怎么用是非常的简单的",-1),D={href:"https://cdn.jsdelivr.net/gh/xiaou61/pictures",target:"_blank",rel:"noopener noreferrer"},E=o("p",null,"这个是我的，就是",-1),B={href:"https://cdn.jsdelivr.net/gh/github%E5%90%8D%E5%AD%97/%E4%BB%93%E5%BA%93%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},N=o("p",null,"之后设置好之后，我们可以测试上传几张图片，如果没有问题，我们就开始最后一步",-1),A=o("h2",{id:"typora上配置picgo",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#typora上配置picgo","aria-hidden":"true"},"#"),e(" typora上配置picgo")],-1),C=o("p",null,"左上角文件",-1),V=o("p",null,[o("img",{src:"https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150755570.png",alt:"image-20230721202437839",loading:"lazy"})],-1),L=o("p",null,"偏好设置，图像，里面需要写我们picgo的路径，之后点击验证图片上传，如果出现成功，那么就成功了。",-1);function O(I,M){const i=l("ExternalLinkIcon");return c(),s("div",null,[r,d,o("p",null,[e("首先就是下载picgo。官网地址："),o("a",h,[e("PicGo"),n(i)])]),g,o("p",null,[o("strong",null,[e("本体不再增加默认的图床支持。你可以自行开发第三方图床插件。详见 "),o("a",u,[e("PicGo-Core (opens new window)"),n(i)])]),e("。")]),m,o("ul",null,[_,f,b,x,y,v,o("li",null,[e("支持插件系统，已有插件支持 Gitee、青云等第三方图床 "),o("ul",null,[o("li",null,[e("更多第三方插件以及使用了 PicGo 底层的应用可以在 "),o("a",j,[e("Awesome-PicGo (opens new window)"),n(i)]),e("找到。欢迎贡献！")])])]),k,o("li",null,[e("更多功能等你自己去发现，同时也会不断开发新功能 "),o("ul",null,[o("li",null,[e("开发进度可以查看 "),o("a",w,[e("Projects (opens new window)"),n(i)]),e("，会同步更新开发进度")])])])]),P,o("p",null,[o("a",G,[e("jsDelivr - A free, fast, and reliable CDN for JS and open source"),n(i)])]),z,q,S,o("p",null,[o("a",D,[e("https://cdn.jsdelivr.net/gh/xiaou61/pictures"),n(i)])]),E,o("p",null,[o("a",B,[e("https://cdn.jsdelivr.net/gh/github名字/仓库名"),n(i)])]),N,A,C,V,L])}const W=a(p,[["render",O],["__file","2.html.vue"]]);export{W as default};
