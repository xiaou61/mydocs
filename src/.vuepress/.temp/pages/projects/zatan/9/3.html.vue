<template><div><p>这个问题对于一些视频网站，是非常常见的一个问题。</p>
<p>首先我们要知道为什么要分片上传。</p>
<ul>
<li>提高上传速度：通过将大文件切割成多个小片段，可以减少单个文件的传输时间，从而提高上传速度。</li>
<li>提高上传稳定性：分片上传可以实现断点续传，即使在上传过程中断开连接，也可以从上次中断的地方继续上传，提高了上传的稳定性。</li>
<li>减少服务器压力：分片上传可以将大文件切割成多个小片段进行上传，这样可以减少服务器的压力，提高服务器的并发处理能力。</li>
<li>增加传输安全性：在某些情况下，对大文件进行分片上传可以增加数据的安全性，防止单个文件被攻击或篡改。</li>
</ul>
<p>最简单的一个道理，我们拿b站的举例。如果我们再这个过程中，断网了。那么一整个文件是全部都要重新上传吗？很明显b站的做法不是的。</p>
<p>并且我们可以发现在上传的过程中</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309022137356.png" alt="image-20230902213745228" loading="lazy"></p>
<p>是不断的去发送ajax请求的。也就是我们要聊的<strong>分片上传</strong></p>
<p>我们可以把一个大的文件，切成很多小片，一片一片的进行上传。</p>
<p>下面我们来看如何进行具体的实现。</p>
<h2 id="如何进行分片" tabindex="-1"><a class="header-anchor" href="#如何进行分片" aria-hidden="true">#</a> 如何进行分片</h2>
<p>首先我们来进行一个实例</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    input<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> file <span class="token operator">=</span> input<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到是一个File对象</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309022141846.png" alt="image-20230902214111795" loading="lazy"></p>
<p>之后我们用这个要用到<code v-pre>slice</code>函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> blob <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个打印出来的东西可以自己去看 Blob对象没有特定的数据类型，只是原始数据的一个包装</p>
<p>知道这个原理之后。我们以此来封装一个函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createChunks</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span>chunkSize</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> file<span class="token punctuation">.</span>size<span class="token punctuation">;</span> i<span class="token operator">+=</span>chunkSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>i<span class="token operator">+</span>chunkSize<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> chunks <span class="token operator">=</span> <span class="token function">createChunks</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token number">10</span><span class="token operator">*</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//10MB</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chunks<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到这就完成的切片操作</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309022146640.png" alt="image-20230902214643587" loading="lazy"></p>
<p>Blob对象有两个<strong>主要属性</strong>：</p>
<ul>
<li><code v-pre>size</code>：Blob的字节长度。</li>
<li><code v-pre>type</code>：Blob的MIME类型，如果未知则返回空字符串。</li>
</ul>
<p>之后我们需要读取数据的时候。需要FileReader才可以进行读取</p>
<p>关于如何把分片的内容合在一块，这就是后端要去做的了，我们前端的职责就是负责把请求通过ajax发送过去就可以了。</p>
<h2 id="断网情况解决" tabindex="-1"><a class="header-anchor" href="#断网情况解决" aria-hidden="true">#</a> 断网情况解决</h2>
<p>为了解决断网后的情况，我们需要通过ajax不断的去告诉服务器，我们上传到了哪里。那么如何对文件进行唯一标识呢？</p>
<p>这里我们用到了<strong>spark-md5</strong></p>
<p>安装：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install --save spark-md5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token parameter">chunks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> sparkMD5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SparkMD5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">function</span> <span class="token function">_read</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">>=</span>chunks<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>sparkMD5<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span><span class="token comment">//读取完毕</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> blob<span class="token operator">=</span>chunks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fileReader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token parameter">e</span><span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> bytes <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span><span class="token comment">//读取到的字节数组</span>
                sparkMD5<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>
                <span class="token function">_read</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            fileReader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">_read</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">hash</span><span class="token punctuation">(</span>chunks<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就可以得到一个唯一的文件标识了。</p>
<p>下面就是上面用到的所有实例代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Title<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"file"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"spark-md5.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    input<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> file <span class="token operator">=</span> input<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> chunks <span class="token operator">=</span> <span class="token function">createChunks</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token number">10</span><span class="token operator">*</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//10MB</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">hash</span><span class="token punctuation">(</span>chunks<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token parameter">chunks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> sparkMD5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SparkMD5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">function</span> <span class="token function">_read</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">>=</span>chunks<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span>sparkMD5<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span><span class="token comment">//读取完毕</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">const</span> blob<span class="token operator">=</span>chunks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                fileReader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token parameter">e</span><span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> bytes <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span><span class="token comment">//读取到的字节数组</span>
                    sparkMD5<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>
                    <span class="token function">_read</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                fileReader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">_read</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">createChunks</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span>chunkSize</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> file<span class="token punctuation">.</span>size<span class="token punctuation">;</span> i<span class="token operator">+=</span>chunkSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>i<span class="token operator">+</span>chunkSize<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


