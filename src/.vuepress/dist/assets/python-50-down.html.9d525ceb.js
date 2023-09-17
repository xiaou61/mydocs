import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as i,o,c,a as s,b as n,d as e,e as t}from"./app.c5b3201b.js";const l={},d=t(`<h2 id="第26课-用python操作word和powerpoint" tabindex="-1"><a class="header-anchor" href="#第26课-用python操作word和powerpoint" aria-hidden="true">#</a> 第26课：用Python操作Word和PowerPoint</h2><p>在日常工作中，有很多简单重复的劳动其实完全可以交给Python程序，比如根据样板文件（模板文件）批量的生成很多个Word文件或PowerPoint文件。Word是微软公司开发的文字处理程序，相信大家都不陌生，日常办公中很多正式的文档都是用Word进行撰写和编辑的，目前使用的Word文件后缀名一般为<code>.docx</code>。PowerPoint是微软公司开发的演示文稿程序，是微软的Office系列软件中的一员，被商业人士、教师、学生等群体广泛使用，通常也将其称之为“幻灯片”。在Python中，可以使用名为<code>python-docx</code> 的三方库来操作Word，可以使用名为<code>python-pptx</code>的三方库来生成PowerPoint。</p><h3 id="操作word文档" tabindex="-1"><a class="header-anchor" href="#操作word文档" aria-hidden="true">#</a> 操作Word文档</h3><p>我们可以先通过下面的命令来安装<code>python-docx</code>三方库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> python-docx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),u={href:"https://python-docx.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},r=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> docx <span class="token keyword">import</span> Document
<span class="token keyword">from</span> docx<span class="token punctuation">.</span>shared <span class="token keyword">import</span> Cm<span class="token punctuation">,</span> Pt

<span class="token keyword">from</span> docx<span class="token punctuation">.</span>document <span class="token keyword">import</span> Document <span class="token keyword">as</span> Doc

<span class="token comment"># 创建代表Word文档的Doc对象</span>
document <span class="token operator">=</span> Document<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># type: Doc</span>
<span class="token comment"># 添加大标题</span>
document<span class="token punctuation">.</span>add_heading<span class="token punctuation">(</span><span class="token string">&#39;快快乐乐学Python&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment"># 添加段落</span>
p <span class="token operator">=</span> document<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span><span class="token string">&#39;Python是一门非常流行的编程语言，它&#39;</span><span class="token punctuation">)</span>
run <span class="token operator">=</span> p<span class="token punctuation">.</span>add_run<span class="token punctuation">(</span><span class="token string">&#39;简单&#39;</span><span class="token punctuation">)</span>
run<span class="token punctuation">.</span>bold <span class="token operator">=</span> <span class="token boolean">True</span>
run<span class="token punctuation">.</span>font<span class="token punctuation">.</span>size <span class="token operator">=</span> Pt<span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>add_run<span class="token punctuation">(</span><span class="token string">&#39;而且&#39;</span><span class="token punctuation">)</span>
run <span class="token operator">=</span> p<span class="token punctuation">.</span>add_run<span class="token punctuation">(</span><span class="token string">&#39;优雅&#39;</span><span class="token punctuation">)</span>
run<span class="token punctuation">.</span>font<span class="token punctuation">.</span>size <span class="token operator">=</span> Pt<span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
run<span class="token punctuation">.</span>underline <span class="token operator">=</span> <span class="token boolean">True</span>
p<span class="token punctuation">.</span>add_run<span class="token punctuation">(</span><span class="token string">&#39;。&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 添加一级标题</span>
document<span class="token punctuation">.</span>add_heading<span class="token punctuation">(</span><span class="token string">&#39;Heading, level 1&#39;</span><span class="token punctuation">,</span> level<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># 添加带样式的段落</span>
document<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span><span class="token string">&#39;Intense quote&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span><span class="token string">&#39;Intense Quote&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 添加无序列表</span>
document<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span>
    <span class="token string">&#39;first item in unordered list&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span><span class="token string">&#39;List Bullet&#39;</span>
<span class="token punctuation">)</span>
document<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span>
    <span class="token string">&#39;second item in ordered list&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span><span class="token string">&#39;List Bullet&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment"># 添加有序列表</span>
document<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span>
    <span class="token string">&#39;first item in ordered list&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span><span class="token string">&#39;List Number&#39;</span>
<span class="token punctuation">)</span>
document<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span>
    <span class="token string">&#39;second item in ordered list&#39;</span><span class="token punctuation">,</span> style<span class="token operator">=</span><span class="token string">&#39;List Number&#39;</span>
<span class="token punctuation">)</span>

<span class="token comment"># 添加图片（注意路径和图片必须要存在）</span>
document<span class="token punctuation">.</span>add_picture<span class="token punctuation">(</span><span class="token string">&#39;resources/guido.jpg&#39;</span><span class="token punctuation">,</span> width<span class="token operator">=</span>Cm<span class="token punctuation">(</span><span class="token number">5.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 添加分节符</span>
document<span class="token punctuation">.</span>add_section<span class="token punctuation">(</span><span class="token punctuation">)</span>

records <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token string">&#39;骆昊&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1995-5-5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&#39;孙美丽&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1992-2-2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment"># 添加表格</span>
table <span class="token operator">=</span> document<span class="token punctuation">.</span>add_table<span class="token punctuation">(</span>rows<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> cols<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
table<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">&#39;Dark List&#39;</span>
hdr_cells <span class="token operator">=</span> table<span class="token punctuation">.</span>rows<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cells
hdr_cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;姓名&#39;</span>
hdr_cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;性别&#39;</span>
hdr_cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;出生日期&#39;</span>
<span class="token comment"># 为表格添加行</span>
<span class="token keyword">for</span> name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> birthday <span class="token keyword">in</span> records<span class="token punctuation">:</span>
    row_cells <span class="token operator">=</span> table<span class="token punctuation">.</span>add_row<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cells
    row_cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text <span class="token operator">=</span> name
    row_cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text <span class="token operator">=</span> sex
    row_cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text <span class="token operator">=</span> birthday

<span class="token comment"># 添加分页符</span>
document<span class="token punctuation">.</span>add_page_break<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 保存文档</span>
document<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;demo.docx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：上面代码第7行中的注释<code># type: Doc</code>是为了在PyCharm中获得代码补全提示，因为如果不清楚对象具体的数据类型，PyCharm无法在后续代码中给出<code>Doc</code>对象的代码补全提示。</p></blockquote><p>执行上面的代码，打开生成的Word文档，效果如下图所示。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713558.png" alt="image-20210820002843696" width="40%"><p>对于一个已经存在的Word文件，我们可以通过下面的代码去遍历它所有的段落并获取对应的内容。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> docx <span class="token keyword">import</span> Document
<span class="token keyword">from</span> docx<span class="token punctuation">.</span>document <span class="token keyword">import</span> Document <span class="token keyword">as</span> Doc

doc <span class="token operator">=</span> Document<span class="token punctuation">(</span><span class="token string">&#39;resources/离职证明.docx&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># type: Doc</span>
<span class="token keyword">for</span> no<span class="token punctuation">,</span> p <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span>paragraphs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>no<span class="token punctuation">,</span> p<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=s("strong",null,"提示",-1),k={href:"https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>读取到的内容如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 
1 离 职 证 明
2 
3 兹证明 王大锤 ，身份证号码： 100200199512120001 ，于 2018 年 8 月 7 日至 2020 年 6 月 28 日在我单位  开发部 部门担任 Java开发工程师 职务，在职期间无不良表现。因 个人 原因，于 2020 年 6 月 28 日起终止解除劳动合同。现已结清财务相关费用，办理完解除劳动关系相关手续，双方不存在任何劳动争议。
4 
5 特此证明！
6 
7 
8 公司名称（盖章）:成都风车车科技有限公司
9    			2020 年 6 月 28 日
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>讲到这里，相信很多读者已经想到了，我们可以把上面的离职证明制作成一个模板文件，把姓名、身份证号、入职和离职日期等信息用占位符代替，这样通过对占位符的替换，就可以根据实际需要写入对应的信息，这样就可以批量的生成Word文档。</p><p>按照上面的思路，我们首先编辑一个离职证明的模板文件，如下图所示。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713561.png" alt="image-20210820004223731" width="75%" style="border:1px solid black;"><p>接下来我们读取该文件，将占位符替换为真实信息，就可以生成一个新的Word文档，如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> docx <span class="token keyword">import</span> Document
<span class="token keyword">from</span> docx<span class="token punctuation">.</span>document <span class="token keyword">import</span> Document <span class="token keyword">as</span> Doc

<span class="token comment"># 将真实信息用字典的方式保存在列表中</span>
employees <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;骆昊&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;100200198011280001&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;sdate&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2008年3月1日&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;edate&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2012年2月29日&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;department&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;产品研发&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;position&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;架构师&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;company&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;成都华为技术有限公司&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;王大锤&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;510210199012125566&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;sdate&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2019年1月1日&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;edate&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2021年4月30日&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;department&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;产品研发&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;position&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Python开发工程师&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;company&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;成都谷道科技有限公司&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;李元芳&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2102101995103221599&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;sdate&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2020年5月10日&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;edate&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2021年3月5日&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;department&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;产品研发&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;position&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Java开发工程师&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;company&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;同城企业管理集团有限公司&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment"># 对列表进行循环遍历，批量生成Word文档 </span>
<span class="token keyword">for</span> emp_dict <span class="token keyword">in</span> employees<span class="token punctuation">:</span>
    <span class="token comment"># 读取离职证明模板文件</span>
    doc <span class="token operator">=</span> Document<span class="token punctuation">(</span><span class="token string">&#39;resources/离职证明模板.docx&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># type: Doc</span>
    <span class="token comment"># 循环遍历所有段落寻找占位符</span>
    <span class="token keyword">for</span> p <span class="token keyword">in</span> doc<span class="token punctuation">.</span>paragraphs<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token string">&#39;{&#39;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> p<span class="token punctuation">.</span>text<span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        <span class="token comment"># 不能直接修改段落内容，否则会丢失样式</span>
        <span class="token comment"># 所以需要对段落中的元素进行遍历并进行查找替换</span>
        <span class="token keyword">for</span> run <span class="token keyword">in</span> p<span class="token punctuation">.</span>runs<span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token string">&#39;{&#39;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> run<span class="token punctuation">.</span>text<span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
            <span class="token comment"># 将占位符换成实际内容</span>
            start<span class="token punctuation">,</span> end <span class="token operator">=</span> run<span class="token punctuation">.</span>text<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;{&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> run<span class="token punctuation">.</span>text<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span>
            key<span class="token punctuation">,</span> place_holder <span class="token operator">=</span> run<span class="token punctuation">.</span>text<span class="token punctuation">[</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span>end<span class="token punctuation">]</span><span class="token punctuation">,</span> run<span class="token punctuation">.</span>text<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
            run<span class="token punctuation">.</span>text <span class="token operator">=</span> run<span class="token punctuation">.</span>text<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>place_holder<span class="token punctuation">,</span> emp_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># 每个人对应保存一个Word文档</span>
    doc<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>emp_dict<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">离职证明.docx&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码，会在当前路径下生成三个Word文档，如下图所示。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250719314.png" alt="" loading="lazy"></p><h3 id="生成powerpoint" tabindex="-1"><a class="header-anchor" href="#生成powerpoint" aria-hidden="true">#</a> 生成PowerPoint</h3><p>首先我们需要安装名为<code>python-pptx</code>的三方库，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install python-pptx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),b=s("code",null,"python-pptx",-1),g={href:"https://python-pptx.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pptx <span class="token keyword">import</span> Presentation

<span class="token comment"># 创建幻灯片对象</span>
pres <span class="token operator">=</span> Presentation<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 选择母版添加一页</span>
title_slide_layout <span class="token operator">=</span> pres<span class="token punctuation">.</span>slide_layouts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
slide <span class="token operator">=</span> pres<span class="token punctuation">.</span>slides<span class="token punctuation">.</span>add_slide<span class="token punctuation">(</span>title_slide_layout<span class="token punctuation">)</span>
<span class="token comment"># 获取标题栏和副标题栏</span>
title <span class="token operator">=</span> slide<span class="token punctuation">.</span>shapes<span class="token punctuation">.</span>title
subtitle <span class="token operator">=</span> slide<span class="token punctuation">.</span>placeholders<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># 编辑标题和副标题</span>
title<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;Welcome to python&quot;</span>
subtitle<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;Life is short, I use python&quot;</span>

<span class="token comment"># 选择母版添加一页</span>
bullet_slide_layout <span class="token operator">=</span> pres<span class="token punctuation">.</span>slide_layouts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
slide <span class="token operator">=</span> pres<span class="token punctuation">.</span>slides<span class="token punctuation">.</span>add_slide<span class="token punctuation">(</span>bullet_slide_layout<span class="token punctuation">)</span>
<span class="token comment"># 获取页面上所有形状</span>
shapes <span class="token operator">=</span> slide<span class="token punctuation">.</span>shapes
<span class="token comment"># 获取标题和主体</span>
title_shape <span class="token operator">=</span> shapes<span class="token punctuation">.</span>title
body_shape <span class="token operator">=</span> shapes<span class="token punctuation">.</span>placeholders<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># 编辑标题</span>
title_shape<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;Introduction&#39;</span>
<span class="token comment"># 编辑主体内容</span>
tf <span class="token operator">=</span> body_shape<span class="token punctuation">.</span>text_frame
tf<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;History of python&#39;</span>
<span class="token comment"># 添加一个一级段落</span>
p <span class="token operator">=</span> tf<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;X\\&#39;max 1989&#39;</span>
p<span class="token punctuation">.</span>level <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 添加一个二级段落</span>
p <span class="token operator">=</span> tf<span class="token punctuation">.</span>add_paragraph<span class="token punctuation">(</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;Guido began to write interpreter for python.&#39;</span>
p<span class="token punctuation">.</span>level <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment"># 保存幻灯片</span>
pres<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;test.pptx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码，生成的PowerPoint文件如下图所示。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713576.png" alt="image-20210820010306008" width="75%"><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>用Python程序解决办公自动化的问题真的非常酷，它可以将我们从繁琐乏味的劳动中解放出来。写这类代码就是去做一件一劳永逸的事情，写代码的过程即便不怎么愉快，使用这些代码的时候应该是非常开心的。</p><h2 id="第27课-用python操作pdf文件" tabindex="-1"><a class="header-anchor" href="#第27课-用python操作pdf文件" aria-hidden="true">#</a> 第27课：用Python操作PDF文件</h2><p>PDF是Portable Document Format的缩写，这类文件通常使用<code>.pdf</code>作为其扩展名。在日常开发工作中，最容易遇到的就是从PDF中读取文本内容以及用已有的内容生成PDF文档这两个任务。</p><h3 id="从pdf中提取文本" tabindex="-1"><a class="header-anchor" href="#从pdf中提取文本" aria-hidden="true">#</a> 从PDF中提取文本</h3><p>在Python中，可以使用名为<code>PyPDF2</code>的三方库来读取PDF文件，可以使用下面的命令来安装它。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install PyPDF2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>PyPDF2</code>没有办法从PDF文档中提取图像、图表或其他媒体，但它可以提取文本，并将其返回为Python字符串。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

reader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span><span class="token string">&#39;test.pdf&#39;</span><span class="token punctuation">)</span>
page <span class="token operator">=</span> reader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>extractText<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),y=s("strong",null,"提示",-1),_={href:"https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"PyPDF2",-1),f={href:"https://cloud.tencent.com/developer/article/1395339",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>要从PDF文件中提取文本也可以直接使用三方的命令行工具，具体的做法如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install pdfminer.six
pdf2text.py test.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="旋转和叠加页面" tabindex="-1"><a class="header-anchor" href="#旋转和叠加页面" aria-hidden="true">#</a> 旋转和叠加页面</h3><p>上面的代码中通过创建<code>PdfFileReader</code>对象的方式来读取PDF文档，该对象的<code>getPage</code>方法可以获得PDF文档的指定页并得到一个<code>PageObject</code>对象，通过<code>PageObject</code>对象的<code>rotateClockwise</code>和<code>rotateCounterClockwise</code>方法可以实现页面的顺时针和逆时针方向旋转，通过<code>PageObject</code>对象的<code>addBlankPage</code>方法可以添加一个新的空白页，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

<span class="token keyword">from</span> PyPDF2<span class="token punctuation">.</span>pdf <span class="token keyword">import</span> PageObject

<span class="token comment"># 创建一个读PDF文件的Reader对象</span>
reader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span><span class="token string">&#39;resources/XGBoost.pdf&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 创建一个写PDF文件的Writer对象</span>
writer <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 对PDF文件所有页进行循环遍历</span>
<span class="token keyword">for</span> page_num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取指定页码的Page对象</span>
    current_page <span class="token operator">=</span> reader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>page_num<span class="token punctuation">)</span>  <span class="token comment"># type: PageObject</span>
    <span class="token keyword">if</span> page_num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token comment"># 奇数页顺时针旋转90度</span>
        current_page<span class="token punctuation">.</span>rotateClockwise<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token comment"># 偶数页反时针旋转90度</span>
        current_page<span class="token punctuation">.</span>rotateCounterClockwise<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span>
    writer<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>current_page<span class="token punctuation">)</span>
<span class="token comment"># 最后添加一个空白页并旋转90度</span>
page <span class="token operator">=</span> writer<span class="token punctuation">.</span>addBlankPage<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># type: PageObject</span>
page<span class="token punctuation">.</span>rotateClockwise<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span>
<span class="token comment"># 通过Writer对象的write方法将PDF写入文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;resources/XGBoost-modified.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    writer<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密pdf文件" tabindex="-1"><a class="header-anchor" href="#加密pdf文件" aria-hidden="true">#</a> 加密PDF文件</h3><p>使用<code>PyPDF2</code>中的<code>PdfFileWrite</code>对象可以为PDF文档加密，如果需要给一系列的PDF文档设置统一的访问口令，使用Python程序来处理就会非常的方便。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

reader <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span><span class="token string">&#39;resources/XGBoost.pdf&#39;</span><span class="token punctuation">)</span>
writer <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> page_num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span><span class="token punctuation">:</span>
    writer<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>reader<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>page_num<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 通过encrypt方法加密PDF文件，方法的参数就是设置的密码</span>
writer<span class="token punctuation">.</span>encrypt<span class="token punctuation">(</span><span class="token string">&#39;foobared&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;resources/XGBoost-encrypted.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    writer<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量添加水印" tabindex="-1"><a class="header-anchor" href="#批量添加水印" aria-hidden="true">#</a> 批量添加水印</h3><p>上面提到的<code>PageObject</code>对象还有一个名为<code>mergePage</code>的方法，可以两个PDF页面进行叠加，通过这个操作，我们很容易实现给PDF文件添加水印的功能。例如要给上面的“XGBoost.pdf”文件添加一个水印，我们可以先准备好一个提供水印页面的PDF文件，然后将包含水印的<code>PageObject</code>读取出来，然后再循环遍历“XGBoost.pdf”文件的每个页，获取到<code>PageObject</code>对象，然后通过<code>mergePage</code>方法实现水印页和原始页的合并，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> PyPDF2

<span class="token keyword">from</span> PyPDF2<span class="token punctuation">.</span>pdf <span class="token keyword">import</span> PageObject

reader1 <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span><span class="token string">&#39;resources/XGBoost.pdf&#39;</span><span class="token punctuation">)</span>
reader2 <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileReader<span class="token punctuation">(</span><span class="token string">&#39;resources/watermark.pdf&#39;</span><span class="token punctuation">)</span>
writer <span class="token operator">=</span> PyPDF2<span class="token punctuation">.</span>PdfFileWriter<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 获取水印页</span>
watermark_page <span class="token operator">=</span> reader2<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> page_num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>reader1<span class="token punctuation">.</span>numPages<span class="token punctuation">)</span><span class="token punctuation">:</span>
    current_page <span class="token operator">=</span> reader1<span class="token punctuation">.</span>getPage<span class="token punctuation">(</span>page_num<span class="token punctuation">)</span>  <span class="token comment"># type: PageObject</span>
    current_page<span class="token punctuation">.</span>mergePage<span class="token punctuation">(</span>watermark_page<span class="token punctuation">)</span>
    <span class="token comment"># 将原始页和水印页进行合并</span>
    writer<span class="token punctuation">.</span>addPage<span class="token punctuation">(</span>current_page<span class="token punctuation">)</span>
<span class="token comment"># 将PDF写入文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;resources/XGBoost-watermarked.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    writer<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果愿意，还可以让奇数页和偶数页使用不同的水印，大家可以自己思考下应该怎么做。</p><h3 id="创建pdf文件" tabindex="-1"><a class="header-anchor" href="#创建pdf文件" aria-hidden="true">#</a> 创建PDF文件</h3><p>创建PDF文档需要三方库<code>reportlab</code>的支持，安装的方法如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install reportlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面通过一个例子为大家展示<code>reportlab</code>的用法。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> reportlab<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>pagesizes <span class="token keyword">import</span> A4
<span class="token keyword">from</span> reportlab<span class="token punctuation">.</span>pdfbase <span class="token keyword">import</span> pdfmetrics
<span class="token keyword">from</span> reportlab<span class="token punctuation">.</span>pdfbase<span class="token punctuation">.</span>ttfonts <span class="token keyword">import</span> TTFont
<span class="token keyword">from</span> reportlab<span class="token punctuation">.</span>pdfgen <span class="token keyword">import</span> canvas

pdf_canvas <span class="token operator">=</span> canvas<span class="token punctuation">.</span>Canvas<span class="token punctuation">(</span><span class="token string">&#39;resources/demo.pdf&#39;</span><span class="token punctuation">,</span> pagesize<span class="token operator">=</span>A4<span class="token punctuation">)</span>
width<span class="token punctuation">,</span> height <span class="token operator">=</span> A4

<span class="token comment"># 绘图</span>
image <span class="token operator">=</span> canvas<span class="token punctuation">.</span>ImageReader<span class="token punctuation">(</span><span class="token string">&#39;resources/guido.jpg&#39;</span><span class="token punctuation">)</span>
pdf_canvas<span class="token punctuation">.</span>drawImage<span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> height <span class="token operator">-</span> <span class="token number">395</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">375</span><span class="token punctuation">)</span>

<span class="token comment"># 显示当前页</span>
pdf_canvas<span class="token punctuation">.</span>showPage<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 注册字体文件</span>
pdfmetrics<span class="token punctuation">.</span>registerFont<span class="token punctuation">(</span>TTFont<span class="token punctuation">(</span><span class="token string">&#39;Font1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;resources/fonts/Vera.ttf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
pdfmetrics<span class="token punctuation">.</span>registerFont<span class="token punctuation">(</span>TTFont<span class="token punctuation">(</span><span class="token string">&#39;Font2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;resources/fonts/青呱石头体.ttf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 写字</span>
pdf_canvas<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span><span class="token string">&#39;Font2&#39;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
pdf_canvas<span class="token punctuation">.</span>setFillColorRGB<span class="token punctuation">(</span><span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
pdf_canvas<span class="token punctuation">.</span>drawString<span class="token punctuation">(</span>width <span class="token operator">//</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">120</span><span class="token punctuation">,</span> height <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;你好，世界！&#39;</span><span class="token punctuation">)</span>
pdf_canvas<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span><span class="token string">&#39;Font1&#39;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
pdf_canvas<span class="token punctuation">.</span>setFillColorRGB<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
pdf_canvas<span class="token punctuation">.</span>rotate<span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
pdf_canvas<span class="token punctuation">.</span>drawString<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token string">&#39;hello, world!&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 保存</span>
pdf_canvas<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),S=s("code",null,"reportlab",-1),L={href:"https://www.reportlab.com/docs/reportlab-userguide.pdf",target:"_blank",rel:"noopener noreferrer"},q=s("strong",null,"提示",-1),Q={href:"https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g",target:"_blank",rel:"noopener noreferrer"},P=t(`<h3 id="简单的总结-1" tabindex="-1"><a class="header-anchor" href="#简单的总结-1" aria-hidden="true">#</a> 简单的总结</h3><p>在学习完上面的内容之后，相信大家已经知道像合并多个PDF文件这样的工作应该如何用Python代码来处理了，赶紧自己动手试一试吧。</p><h2 id="第28课-用python处理图像" tabindex="-1"><a class="header-anchor" href="#第28课-用python处理图像" aria-hidden="true">#</a> 第28课：用Python处理图像</h2><h3 id="入门知识" tabindex="-1"><a class="header-anchor" href="#入门知识" aria-hidden="true">#</a> 入门知识</h3><ol><li><p>颜色。如果你有使用颜料画画的经历，那么一定知道混合红、黄、蓝三种颜料可以得到其他的颜色，事实上这三种颜色就是美术中的三原色，它们是不能再分解的基本颜色。在计算机中，我们可以将红、绿、蓝三种色光以不同的比例叠加来组合成其他的颜色，因此这三种颜色就是色光三原色。在计算机系统中，我们通常会将一个颜色表示为一个RGB值或RGBA值（其中的A表示Alpha通道，它决定了透过这个图像的像素，也就是透明度）。</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">RGB值</th><th style="text-align:center;">名称</th><th style="text-align:center;">RGB值</th></tr></thead><tbody><tr><td style="text-align:center;">White（白）</td><td style="text-align:center;">(255, 255, 255)</td><td style="text-align:center;">Red（红）</td><td style="text-align:center;">(255, 0, 0)</td></tr><tr><td style="text-align:center;">Green（绿）</td><td style="text-align:center;">(0, 255, 0)</td><td style="text-align:center;">Blue（蓝）</td><td style="text-align:center;">(0, 0, 255)</td></tr><tr><td style="text-align:center;">Gray（灰）</td><td style="text-align:center;">(128, 128, 128)</td><td style="text-align:center;">Yellow（黄）</td><td style="text-align:center;">(255, 255, 0)</td></tr><tr><td style="text-align:center;">Black（黑）</td><td style="text-align:center;">(0, 0, 0)</td><td style="text-align:center;">Purple（紫）</td><td style="text-align:center;">(128, 0, 128)</td></tr></tbody></table></li><li><p>像素。对于一个由数字序列表示的图像来说，最小的单位就是图像上单一颜色的小方格，这些小方块都有一个明确的位置和被分配的色彩数值，而这些一小方格的颜色和位置决定了该图像最终呈现出来的样子，它们是不可分割的单位，我们通常称之为像素（pixel）。每一个图像都包含了一定量的像素，这些像素决定图像在屏幕上所呈现的大小，大家如果爱好拍照或者自拍，对像素这个词就不会陌生。</p></li></ol><h3 id="用pillow处理图像" tabindex="-1"><a class="header-anchor" href="#用pillow处理图像" aria-hidden="true">#</a> 用Pillow处理图像</h3><p>Pillow是由从著名的Python图像处理库PIL发展出来的一个分支，通过Pillow可以实现图像压缩和图像处理等各种操作。可以使用下面的命令来安装Pillow。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pip install pillow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pillow中最为重要的是<code>Image</code>类，可以通过<code>Image</code>模块的<code>open</code>函数来读取图像并获得<code>Image</code>类型的对象。</p><ol><li><p>读取和显示图像</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

<span class="token comment"># 读取图像获得Image对象</span>
image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;guido.jpg&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 通过Image对象的format属性获得图像的格式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">)</span> <span class="token comment"># JPEG</span>
<span class="token comment"># 通过Image对象的size属性获得图像的尺寸</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span>size<span class="token punctuation">)</span>   <span class="token comment"># (500, 750)</span>
<span class="token comment"># 通过Image对象的mode属性获取图像的模式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span>mode<span class="token punctuation">)</span>   <span class="token comment"># RGB</span>
<span class="token comment"># 通过Image对象的show方法显示图像</span>
image<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713591.png" width="80%"></li><li><p>剪裁图像</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 通过Image对象的crop方法指定剪裁区域剪裁图像</span>
image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713098.png" width="80%"></li><li><p>生成缩略图</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 通过Image对象的thumbnail方法生成指定尺寸的缩略图</span>
image<span class="token punctuation">.</span>thumbnail<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
image<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713303.png" width="100%"></li><li><p>缩放和黏贴图像</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 读取骆昊的照片获得Image对象</span>
luohao_image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;luohao.png&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 读取吉多的照片获得Image对象</span>
guido_image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;guido.jpg&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 从吉多的照片上剪裁出吉多的头</span>
guido_head <span class="token operator">=</span> guido_image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
width<span class="token punctuation">,</span> height <span class="token operator">=</span> guido_head<span class="token punctuation">.</span>size
<span class="token comment"># 使用Image对象的resize方法修改图像的尺寸</span>
<span class="token comment"># 使用Image对象的paste方法将吉多的头粘贴到骆昊的照片上</span>
luohao_image<span class="token punctuation">.</span>paste<span class="token punctuation">(</span>guido_head<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>width <span class="token operator">/</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>height <span class="token operator">/</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">172</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
luohao_image<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713308.png" width="80%"></li><li><p>旋转和翻转</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>image <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;guido.jpg&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 使用Image对象的rotate方法实现图像的旋转</span>
image<span class="token punctuation">.</span>rotate<span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 使用Image对象的transpose方法实现图像翻转</span>
<span class="token comment"># Image.FLIP_LEFT_RIGHT - 水平翻转</span>
<span class="token comment"># Image.FLIP_TOP_BOTTOM - 垂直翻转</span>
image<span class="token punctuation">.</span>transpose<span class="token punctuation">(</span>Image<span class="token punctuation">.</span>FLIP_TOP_BOTTOM<span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713361.png" width="80%"></li><li><p>操作像素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> y <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 通过Image对象的putpixel方法修改图像指定像素点</span>
        image<span class="token punctuation">.</span>putpixel<span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
image<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713650.png" width="80%"></li><li><p>滤镜效果</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> ImageFilter

<span class="token comment"># 使用Image对象的filter方法对图像进行滤镜处理</span>
<span class="token comment"># ImageFilter模块包含了诸多预设的滤镜也可以自定义滤镜</span>
image<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>ImageFilter<span class="token punctuation">.</span>CONTOUR<span class="token punctuation">)</span><span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250720078.png" alt="" loading="lazy"></p></li></ol><h3 id="使用pillow绘图" tabindex="-1"><a class="header-anchor" href="#使用pillow绘图" aria-hidden="true">#</a> 使用Pillow绘图</h3><p>Pillow中有一个名为<code>ImageDraw</code>的模块，该模块的<code>Draw</code>函数会返回一个<code>ImageDraw</code>对象，通过<code>ImageDraw</code>对象的<code>arc</code>、<code>line</code>、<code>rectangle</code>、<code>ellipse</code>、<code>polygon</code>等方法，可以在图像上绘制出圆弧、线条、矩形、椭圆、多边形等形状，也可以通过该对象的<code>text</code>方法在图像上添加文字。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713623.png" width="80%"><p>要绘制如上图所示的图像，完整的代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

<span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image<span class="token punctuation">,</span> ImageDraw<span class="token punctuation">,</span> ImageFont


<span class="token keyword">def</span> <span class="token function">random_color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;生成随机颜色&quot;&quot;&quot;</span>
    red <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
    green <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
    blue <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue


width<span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">600</span>
<span class="token comment"># 创建一个800*600的图像，背景色为白色</span>
image <span class="token operator">=</span> Image<span class="token punctuation">.</span>new<span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">&#39;RGB&#39;</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 创建一个ImageDraw对象</span>
drawer <span class="token operator">=</span> ImageDraw<span class="token punctuation">.</span>Draw<span class="token punctuation">(</span>image<span class="token punctuation">)</span>
<span class="token comment"># 通过指定字体和大小获得ImageFont对象</span>
font <span class="token operator">=</span> ImageFont<span class="token punctuation">.</span>truetype<span class="token punctuation">(</span><span class="token string">&#39;Kongxin.ttf&#39;</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
<span class="token comment"># 通过ImageDraw对象的text方法绘制文字</span>
drawer<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> font<span class="token operator">=</span>font<span class="token punctuation">)</span>
<span class="token comment"># 通过ImageDraw对象的line方法绘制两条对角直线</span>
drawer<span class="token punctuation">.</span>line<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
drawer<span class="token punctuation">.</span>line<span class="token punctuation">(</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
xy <span class="token operator">=</span> width <span class="token operator">//</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">60</span><span class="token punctuation">,</span> height <span class="token operator">//</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">60</span><span class="token punctuation">,</span> width <span class="token operator">//</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">60</span><span class="token punctuation">,</span> height <span class="token operator">//</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">60</span>
<span class="token comment"># 通过ImageDraw对象的rectangle方法绘制矩形</span>
drawer<span class="token punctuation">.</span>rectangle<span class="token punctuation">(</span>xy<span class="token punctuation">,</span> outline<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 通过ImageDraw对象的ellipse方法绘制椭圆</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    left<span class="token punctuation">,</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom <span class="token operator">=</span> <span class="token number">150</span> <span class="token operator">+</span> i <span class="token operator">*</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">310</span> <span class="token operator">+</span> i <span class="token operator">*</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">380</span>
    drawer<span class="token punctuation">.</span>ellipse<span class="token punctuation">(</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">)</span><span class="token punctuation">,</span> outline<span class="token operator">=</span>random_color<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token comment"># 显示图像</span>
image<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 保存图像</span>
image<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;result.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面代码中使用的字体文件需要根据自己准备，可以选择自己喜欢的字体文件并放置在代码目录下。</p></blockquote><h3 id="简单的总结-2" tabindex="-1"><a class="header-anchor" href="#简单的总结-2" aria-hidden="true">#</a> 简单的总结</h3><p>使用Python语言做开发，除了可以用Pillow来处理图像外，还可以使用更为强大的OpenCV库来完成图形图像的处理，OpenCV（<strong>Open</strong> Source <strong>C</strong>omputer <strong>V</strong>ision Library）是一个跨平台的计算机视觉库，可以用来开发实时图像处理、计算机视觉和模式识别程序。在我们的日常工作中，有很多繁琐乏味的任务其实都可以通过Python程序来处理，编程的目的就是让计算机帮助我们解决问题，减少重复乏味的劳动。通过本章节的学习，相信大家已经感受到了使用Python程序绘图P图的乐趣，其实Python能做的事情还远不止这些，继续你的学习吧。</p><h2 id="第29课-用python发送邮件和短信" tabindex="-1"><a class="header-anchor" href="#第29课-用python发送邮件和短信" aria-hidden="true">#</a> 第29课：用Python发送邮件和短信</h2><p>在前面的课程中，我们已经教会大家如何用Python程序自动的生成Excel、Word、PDF文档，接下来我们还可以更进一步，就是通过邮件将生成好的文档发送给指定的收件人，然后用短信告知对方我们发出了邮件。这些事情利用Python程序也可以轻松愉快的解决。</p><h3 id="发送电子邮件" tabindex="-1"><a class="header-anchor" href="#发送电子邮件" aria-hidden="true">#</a> 发送电子邮件</h3><p>在即时通信软件如此发达的今天，电子邮件仍然是互联网上使用最为广泛的应用之一，公司向应聘者发出录用通知、网站向用户发送一个激活账号的链接、银行向客户推广它们的理财产品等几乎都是通过电子邮件来完成的，而这些任务应该都是由程序自动完成的。</p><p>我们可以用HTTP（超文本传输协议）来访问网站资源，HTTP是一个应用级协议，它建立在TCP（传输控制协议）之上，TCP为很多应用级协议提供了可靠的数据传输服务。如果要发送电子邮件，需要使用SMTP（简单邮件传输协议），它也是建立在TCP之上的应用级协议，规定了邮件的发送者如何跟邮件服务器进行通信的细节。Python通过名为<code>smtplib</code>的模块将这些操作简化成了<code>SMTP_SSL</code>对象，通过该对象的<code>login</code>和<code>send_mail</code>方法，就能够完成发送邮件的操作。</p>`,23),T={href:"http://www.126.com",target:"_blank",rel:"noopener noreferrer"},M=t(`<img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713811.png" alt="image-20210820190306861" width="95%"><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250716701.png" alt="image-20210820190816557" loading="lazy"></p><p>用手机扫码上面的二维码可以通过发送短信的方式来获取授权码，短信发送成功后，点击“我已发送”就可以获得授权码。授权码需要妥善保管，因为一旦泄露就会被其他人冒用你的身份来发送邮件。接下来，我们就可以编写发送邮件的代码了，如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>header <span class="token keyword">import</span> Header
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>multipart <span class="token keyword">import</span> MIMEMultipart
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText

<span class="token comment"># 创建邮件主体对象</span>
email <span class="token operator">=</span> MIMEMultipart<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 设置发件人、收件人和主题</span>
email<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;xxxxxxxxx@126.com&#39;</span>
email<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;yyyyyy@qq.com;zzzzzz@1000phone.com&#39;</span>
email<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token string">&#39;上半年工作情况汇报&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 添加邮件正文内容</span>
content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;据德国媒体报道，当地时间9日，德国火车司机工会成员进行了投票，
定于当地时间10日起进行全国性罢工，货运交通方面的罢工已于当地时间10日19时开始。
此后，从11日凌晨2时到13日凌晨2时，德国全国范围内的客运和铁路基础设施将进行48小时的罢工。&quot;&quot;&quot;</span>
email<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>MIMEText<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&#39;plain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 创建SMTP_SSL对象（连接邮件服务器）</span>
smtp_obj <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span><span class="token string">&#39;smtp.126.com&#39;</span><span class="token punctuation">,</span> <span class="token number">465</span><span class="token punctuation">)</span>
<span class="token comment"># 通过用户名和授权码进行登录</span>
smtp_obj<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;xxxxxxxxx@126.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;邮件服务器的授权码&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 发送邮件（发件人、收件人、邮件内容（字符串））</span>
smtp_obj<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>
    <span class="token string">&#39;xxxxxxxxx@126.com&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;yyyyyy@qq.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zzzzzz@1000phone.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    email<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),I={href:"http://www.ruanyifeng.com/blog/2008/06/base64.html",target:"_blank",rel:"noopener noreferrer"},E=s("code",null,"base64",-1),C=t(`<p>下面的代码演示了如何发送带附件的邮件。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>header <span class="token keyword">import</span> Header
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>multipart <span class="token keyword">import</span> MIMEMultipart
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>parse <span class="token keyword">import</span> quote

<span class="token comment"># 创建邮件主体对象</span>
email <span class="token operator">=</span> MIMEMultipart<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 设置发件人、收件人和主题</span>
email<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;xxxxxxxxx@126.com&#39;</span>
email<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;zzzzzzzz@1000phone.com&#39;</span>
email<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token string">&#39;请查收离职证明文件&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 添加邮件正文内容（带HTML标签排版的内容）</span>
content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;&lt;p&gt;亲爱的前同事：&lt;/p&gt;
&lt;p&gt;你需要的离职证明在附件中，请查收！&lt;/p&gt;
&lt;br&gt;
&lt;p&gt;祝，好！&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;孙美丽 即日&lt;/p&gt;&quot;&quot;&quot;</span>
email<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>MIMEText<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 读取作为附件的文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;resources/王大锤离职证明.docx&#39;</span></span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    attachment <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 指定内容类型</span>
    attachment<span class="token punctuation">[</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/octet-stream&#39;</span>
    <span class="token comment"># 将中文文件名处理成百分号编码</span>
    filename <span class="token operator">=</span> quote<span class="token punctuation">(</span><span class="token string">&#39;王大锤离职证明.docx&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 指定如何处置内容</span>
    attachment<span class="token punctuation">[</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;attachment; filename=&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">&quot;&#39;</span></span>

<span class="token comment"># 创建SMTP_SSL对象（连接邮件服务器）</span>
smtp_obj <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span><span class="token string">&#39;smtp.126.com&#39;</span><span class="token punctuation">,</span> <span class="token number">465</span><span class="token punctuation">)</span>
<span class="token comment"># 通过用户名和授权码进行登录</span>
smtp_obj<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&#39;xxxxxxxxx@126.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;邮件服务器的授权码&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 发送邮件（发件人、收件人、邮件内容（字符串））</span>
smtp_obj<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>
    <span class="token string">&#39;xxxxxxxxx@126.com&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;zzzzzzzz@1000phone.com&#39;</span><span class="token punctuation">,</span>
    email<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便大家用Python实现邮件发送，我将上面的代码封装成了函数，使用的时候大家只需要调整邮件服务器域名、端口、用户名和授权码就可以了。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>header <span class="token keyword">import</span> Header
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>multipart <span class="token keyword">import</span> MIMEMultipart
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>parse <span class="token keyword">import</span> quote

<span class="token comment"># 邮件服务器域名（自行修改）</span>
EMAIL_HOST <span class="token operator">=</span> <span class="token string">&#39;smtp.126.com&#39;</span>
<span class="token comment"># 邮件服务端口（通常是465）</span>
EMAIL_PORT <span class="token operator">=</span> <span class="token number">465</span>
<span class="token comment"># 登录邮件服务器的账号（自行修改）</span>
EMAIL_USER <span class="token operator">=</span> <span class="token string">&#39;xxxxxxxxx@126.com&#39;</span>
<span class="token comment"># 开通SMTP服务的授权码（自行修改）</span>
EMAIL_AUTH <span class="token operator">=</span> <span class="token string">&#39;邮件服务器的授权码&#39;</span>


<span class="token keyword">def</span> <span class="token function">send_email</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> from_user<span class="token punctuation">,</span> to_users<span class="token punctuation">,</span> subject<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> content<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> filenames<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;发送邮件
    
    :param from_user: 发件人
    :param to_users: 收件人，多个收件人用英文分号进行分隔
    :param subject: 邮件的主题
    :param content: 邮件正文内容
    :param filenames: 附件要发送的文件路径
    &quot;&quot;&quot;</span>
    email <span class="token operator">=</span> MIMEMultipart<span class="token punctuation">(</span><span class="token punctuation">)</span>
    email<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> from_user
    email<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> to_users
    email<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> subject

    message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&#39;plain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    email<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>message<span class="token punctuation">)</span>
    <span class="token keyword">for</span> filename <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
            pos <span class="token operator">=</span> filename<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
            display_filename <span class="token operator">=</span> filename<span class="token punctuation">[</span>pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token keyword">if</span> pos <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">else</span> filename
            display_filename <span class="token operator">=</span> quote<span class="token punctuation">(</span>display_filename<span class="token punctuation">)</span>
            attachment <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
            attachment<span class="token punctuation">[</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/octet-stream&#39;</span>
            attachment<span class="token punctuation">[</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;attachment; filename=&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>display_filename<span class="token punctuation">}</span></span><span class="token string">&quot;&#39;</span></span>
            email<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>attachment<span class="token punctuation">)</span>

    smtp <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span>EMAIL_HOST<span class="token punctuation">,</span> EMAIL_PORT<span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>login<span class="token punctuation">(</span>EMAIL_USER<span class="token punctuation">,</span> EMAIL_AUTH<span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>from_user<span class="token punctuation">,</span> to_users<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> email<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送短信" tabindex="-1"><a class="header-anchor" href="#发送短信" aria-hidden="true">#</a> 发送短信</h3>`,5),D={href:"https://luosimao.com/",target:"_blank",rel:"noopener noreferrer"},O=t(`<p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713600.png" alt="image-20210820194420911" loading="lazy"></p><p>接下来，我们可以通过<code>requests</code>库向平台提供的短信网关发起一个HTTP请求，通过将接收短信的手机号和短信内容作为参数，就可以发送短信，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

<span class="token keyword">import</span> requests


<span class="token keyword">def</span> <span class="token function">send_message_by_luosimao</span><span class="token punctuation">(</span>tel<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;发送短信（调用螺丝帽短信网关）&quot;&quot;&quot;</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>
        url<span class="token operator">=</span><span class="token string">&#39;http://sms-api.luosimao.com/v1/send.json&#39;</span><span class="token punctuation">,</span>
        auth<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key-注册成功后平台分配的KEY&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        data<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token string">&#39;mobile&#39;</span><span class="token punctuation">:</span> tel<span class="token punctuation">,</span>
            <span class="token string">&#39;message&#39;</span><span class="token punctuation">:</span> message
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
        verify<span class="token operator">=</span><span class="token boolean">False</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">gen_mobile_code</span><span class="token punctuation">(</span>length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;生成指定长度的手机验证码&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>random<span class="token punctuation">.</span>choices<span class="token punctuation">(</span><span class="token string">&#39;0123456789&#39;</span><span class="token punctuation">,</span> k<span class="token operator">=</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    code <span class="token operator">=</span> gen_mobile_code<span class="token punctuation">(</span><span class="token punctuation">)</span>
    message <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;您的短信验证码是</span><span class="token interpolation"><span class="token punctuation">{</span>code<span class="token punctuation">}</span></span><span class="token string">，打死也不能告诉别人哟！【Python小课】&#39;</span></span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>send_message_by_luosimao<span class="token punctuation">(</span><span class="token string">&#39;13500112233&#39;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),A=s("code",null,"http://sms-api.luosimao.com/v1/send.json",-1),R=s("code",null,"{'error': 0, 'msg': 'OK'}",-1),j=s("code",null,"error",-1),N=s("code",null,"0",-1),B={href:"https://luosimao.com/docs/api/",target:"_blank",rel:"noopener noreferrer"},U=t('<img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713894.png" alt="image-20210820195505761" style="zoom:50%;"><p>目前，大多数短信平台都会要求短信内容必须附上签名，下图是我在螺丝帽平台配置的短信签名“【Python小课】”。有些涉及到敏感内容的短信，还需要提前配置短信模板，有兴趣的读者可以自行研究。一般情况下，平台为了防范短信被盗用，还会要求设置“IP白名单”，不清楚如何配置的可以咨询平台客服。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250716542.png" alt="image-20210820194653785" loading="lazy"></p><p>当然国内的短信平台很多，读者可以根据自己的需要进行选择（通常会考虑费用预算、短信达到率、使用的难易程度等指标），如果需要在商业项目中使用短信服务建议购买短信平台提供的套餐服务。</p><h3 id="简单的总结-3" tabindex="-1"><a class="header-anchor" href="#简单的总结-3" aria-hidden="true">#</a> 简单的总结</h3><p>其实，发送邮件和发送短信一样，也可以通过调用三方服务来完成，在实际的商业项目中，建议自己架设邮件服务器或购买三方服务来发送邮件，这个才是比较靠谱的选择。</p><h2 id="第30课-正则表达式的应用" tabindex="-1"><a class="header-anchor" href="#第30课-正则表达式的应用" aria-hidden="true">#</a> 第30课：正则表达式的应用</h2><h3 id="正则表达式相关知识" tabindex="-1"><a class="header-anchor" href="#正则表达式相关知识" aria-hidden="true">#</a> 正则表达式相关知识</h3><p>在编写处理字符串的程时，经常会遇到在一段文本中查找符合某些规则的字符串的需求，正则表达式就是用于描述这些规则的工具，换句话说，我们可以使用正则表达式来定义字符串的匹配模式，即如何检查一个字符串是否有跟某种模式匹配的部分或者从一个字符串中将与模式匹配的部分提取出来或者替换掉。</p><p>举一个简单的例子，如果你在Windows操作系统中使用过文件查找并且在指定文件名时使用过通配符（<code>*</code>和<code>?</code>），那么正则表达式也是与之类似的用 来进行文本匹配的工具，只不过比起通配符正则表达式更强大，它能更精确地描述你的需求，当然你付出的代价是书写一个正则表达式比使用通配符要复杂得多，因为任何给你带来好处的东西都需要你付出对应的代价。</p><p>再举一个例子，我们从某个地方（可能是一个文本文件，也可能是网络上的一则新闻）获得了一个字符串，希望在字符串中找出手机号和座机号。当然我们可以设定手机号是11位的数字（注意并不是随机的11位数字，因为你没有见过“25012345678”这样的手机号），而座机号则是类似于“区号-号码”这样的模式，如果不使用正则表达式要完成这个任务就会比较麻烦。最初计算机是为了做数学运算而诞生的，处理的信息基本上都是数值，而今天我们在日常工作中处理的信息很多都是文本数据，我们希望计算机能够识别和处理符合某些模式的文本，正则表达式就显得非常重要了。今天几乎所有的编程语言都提供了对正则表达式操作的支持，Python通过标准库中的<code>re</code>模块来支持正则表达式操作。</p>',11),H={href:"https://deerchao.net/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"},z=t(`<table><thead><tr><th>符号</th><th>解释</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td><code>.</code></td><td>匹配任意字符</td><td><code>b.t</code></td><td>可以匹配bat / but / b#t / b1t等</td></tr><tr><td><code>\\w</code></td><td>匹配字母/数字/下划线</td><td><code>b\\wt</code></td><td>可以匹配bat / b1t / b_t等<br>但不能匹配b#t</td></tr><tr><td><code>\\s</code></td><td>匹配空白字符（包括\\r、\\n、\\t等）</td><td><code>love\\syou</code></td><td>可以匹配love you</td></tr><tr><td><code>\\d</code></td><td>匹配数字</td><td><code>\\d\\d</code></td><td>可以匹配01 / 23 / 99等</td></tr><tr><td><code>\\b</code></td><td>匹配单词的边界</td><td><code>\\bThe\\b</code></td><td></td></tr><tr><td><code>^</code></td><td>匹配字符串的开始</td><td><code>^The</code></td><td>可以匹配The开头的字符串</td></tr><tr><td><code>$</code></td><td>匹配字符串的结束</td><td><code>.exe$</code></td><td>可以匹配.exe结尾的字符串</td></tr><tr><td><code>\\W</code></td><td>匹配非字母/数字/下划线</td><td><code>b\\Wt</code></td><td>可以匹配b#t / b@t等<br>但不能匹配but / b1t / b_t等</td></tr><tr><td><code>\\S</code></td><td>匹配非空白字符</td><td><code>love\\Syou</code></td><td>可以匹配love#you等<br>但不能匹配love you</td></tr><tr><td><code>\\D</code></td><td>匹配非数字</td><td><code>\\d\\D</code></td><td>可以匹配9a / 3# / 0F等</td></tr><tr><td><code>\\B</code></td><td>匹配非单词边界</td><td><code>\\Bio\\B</code></td><td></td></tr><tr><td><code>[]</code></td><td>匹配来自字符集的任意单一字符</td><td><code>[aeiou]</code></td><td>可以匹配任一元音字母字符</td></tr><tr><td><code>[^]</code></td><td>匹配不在字符集中的任意单一字符</td><td><code>[^aeiou]</code></td><td>可以匹配任一非元音字母字符</td></tr><tr><td><code>*</code></td><td>匹配0次或多次</td><td><code>\\w*</code></td><td></td></tr><tr><td><code>+</code></td><td>匹配1次或多次</td><td><code>\\w+</code></td><td></td></tr><tr><td><code>?</code></td><td>匹配0次或1次</td><td><code>\\w?</code></td><td></td></tr><tr><td><code>{N}</code></td><td>匹配N次</td><td><code>\\w{3}</code></td><td></td></tr><tr><td><code>{M,}</code></td><td>匹配至少M次</td><td><code>\\w{3,}</code></td><td></td></tr><tr><td><code>{M,N}</code></td><td>匹配至少M次至多N次</td><td><code>\\w{3,6}</code></td><td></td></tr><tr><td>\`</td><td>\`</td><td>分支</td><td>\`foo</td></tr><tr><td><code>(?#)</code></td><td>注释</td><td></td><td></td></tr><tr><td><code>(exp)</code></td><td>匹配exp并捕获到自动命名的组中</td><td></td><td></td></tr><tr><td><code>(?&lt;name&gt;exp)</code></td><td>匹配exp并捕获到名为name的组中</td><td></td><td></td></tr><tr><td><code>(?:exp)</code></td><td>匹配exp但是不捕获匹配的文本</td><td></td><td></td></tr><tr><td><code>(?=exp)</code></td><td>匹配exp前面的位置</td><td><code>\\b\\w+(?=ing)</code></td><td>可以匹配I&#39;m dancing中的danc</td></tr><tr><td><code>(?&lt;=exp)</code></td><td>匹配exp后面的位置</td><td><code>(?&lt;=\\bdanc)\\w+\\b</code></td><td>可以匹配I love dancing and reading中的第一个ing</td></tr><tr><td><code>(?!exp)</code></td><td>匹配后面不是exp的位置</td><td></td><td></td></tr><tr><td><code>(?&lt;!exp)</code></td><td>匹配前面不是exp的位置</td><td></td><td></td></tr><tr><td><code>*?</code></td><td>重复任意次，但尽可能少重复</td><td><code>a.*b</code><br><code>a.*?b</code></td><td>将正则表达式应用于aabab，前者会匹配整个字符串aabab，后者会匹配aab和ab两个字符串</td></tr><tr><td><code>+?</code></td><td>重复1次或多次，但尽可能少重复</td><td></td><td></td></tr><tr><td><code>??</code></td><td>重复0次或1次，但尽可能少重复</td><td></td><td></td></tr><tr><td><code>{M,N}?</code></td><td>重复M到N次，但尽可能少重复</td><td></td><td></td></tr><tr><td><code>{M,}?</code></td><td>重复M次以上，但尽可能少重复</td><td></td><td></td></tr></tbody></table><blockquote><p><strong>说明：</strong> 如果需要匹配的字符是正则表达式中的特殊字符，那么可以使用<code>\\</code>进行转义处理，例如想匹配小数点可以写成<code>\\.</code>就可以了，因为直接写<code>.</code>会匹配任意字符；同理，想匹配圆括号必须写成<code>\\(</code>和<code>\\)</code>，否则圆括号被视为正则表达式中的分组。</p></blockquote><h3 id="python对正则表达式的支持" tabindex="-1"><a class="header-anchor" href="#python对正则表达式的支持" aria-hidden="true">#</a> Python对正则表达式的支持</h3><p>Python提供了<code>re</code>模块来支持正则表达式相关操作，下面是<code>re</code>模块中的核心函数。</p><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td><code>compile(pattern, flags=0)</code></td><td>编译正则表达式返回正则表达式对象</td></tr><tr><td><code>match(pattern, string, flags=0)</code></td><td>用正则表达式匹配字符串 成功返回匹配对象 否则返回<code>None</code></td></tr><tr><td><code>search(pattern, string, flags=0)</code></td><td>搜索字符串中第一次出现正则表达式的模式 成功返回匹配对象 否则返回<code>None</code></td></tr><tr><td><code>split(pattern, string, maxsplit=0, flags=0)</code></td><td>用正则表达式指定的模式分隔符拆分字符串 返回列表</td></tr><tr><td><code>sub(pattern, repl, string, count=0, flags=0)</code></td><td>用指定的字符串替换原字符串中与正则表达式匹配的模式 可以用<code>count</code>指定替换的次数</td></tr><tr><td><code>fullmatch(pattern, string, flags=0)</code></td><td><code>match</code>函数的完全匹配（从字符串开头到结尾）版本</td></tr><tr><td><code>findall(pattern, string, flags=0)</code></td><td>查找字符串所有与正则表达式匹配的模式 返回字符串的列表</td></tr><tr><td><code>finditer(pattern, string, flags=0)</code></td><td>查找字符串所有与正则表达式匹配的模式 返回一个迭代器</td></tr><tr><td><code>purge()</code></td><td>清除隐式编译的正则表达式的缓存</td></tr><tr><td><code>re.I</code> / <code>re.IGNORECASE</code></td><td>忽略大小写匹配标记</td></tr><tr><td><code>re.M</code> / <code>re.MULTILINE</code></td><td>多行匹配标记</td></tr></tbody></table><blockquote><p><strong>说明：</strong> 上面提到的<code>re</code>模块中的这些函数，实际开发中也可以用正则表达式对象（<code>Pattern</code>对象）的方法替代对这些函数的使用，如果一个正则表达式需要重复的使用，那么先通过<code>compile</code>函数编译正则表达式并创建出正则表达式对象无疑是更为明智的选择。</p></blockquote><p>下面我们通过一系列的例子来告诉大家在Python中如何使用正则表达式。</p><h4 id="例子1-验证输入用户名和qq号是否有效并给出对应的提示信息。" tabindex="-1"><a class="header-anchor" href="#例子1-验证输入用户名和qq号是否有效并给出对应的提示信息。" aria-hidden="true">#</a> 例子1：验证输入用户名和QQ号是否有效并给出对应的提示信息。</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
要求：用户名必须由字母、数字或下划线构成且长度在6~20个字符之间，QQ号是5~12的数字且首位不能为0
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> re

username <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入用户名: &#39;</span><span class="token punctuation">)</span>
qq <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入QQ号: &#39;</span><span class="token punctuation">)</span>
<span class="token comment"># match函数的第一个参数是正则表达式字符串或正则表达式对象</span>
<span class="token comment"># match函数的第二个参数是要跟正则表达式做匹配的字符串对象</span>
m1 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&#39;^[0-9a-zA-Z_]{6,20}$&#39;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> m1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;请输入有效的用户名.&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># fullmatch函数要求字符串和正则表达式完全匹配</span>
<span class="token comment"># 所以正则表达式没有写起始符和结束符</span>
m2 <span class="token operator">=</span> re<span class="token punctuation">.</span>fullmatch<span class="token punctuation">(</span><span class="token string">r&#39;[1-9]\\d{4,11}&#39;</span><span class="token punctuation">,</span> qq<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> m2<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;请输入有效的QQ号.&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> m1 <span class="token keyword">and</span> m2<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你输入的信息是有效的!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示：</strong> 上面在书写正则表达式时使用了“原始字符串”的写法（在字符串前面加上了<code>r</code>），所谓“原始字符串”就是字符串中的每个字符都是它原始的意义，说得更直接一点就是字符串中没有所谓的转义字符啦。因为正则表达式中有很多元字符和需要进行转义的地方，如果不使用原始字符串就需要将反斜杠写作<code>\\\\</code>，例如表示数字的<code>\\d</code>得书写成<code>\\\\d</code>，这样不仅写起来不方便，阅读的时候也会很吃力。</p></blockquote><h4 id="例子2-从一段文字中提取出国内手机号码。" tabindex="-1"><a class="header-anchor" href="#例子2-从一段文字中提取出国内手机号码。" aria-hidden="true">#</a> 例子2：从一段文字中提取出国内手机号码。</h4><p>下面这张图是截止到2017年底，国内三家运营商推出的手机号段。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250716804.png" alt="" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token comment"># 创建正则表达式对象，使用了前瞻和回顾来保证手机号前后不应该再出现数字</span>
pattern <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;(?&lt;=\\D)1[34578]\\d{9}(?=\\D)&#39;</span><span class="token punctuation">)</span>
sentence <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;重要的事情说8130123456789遍，我的手机号是13512346789这个靓号，
不是15600998765，也是110或119，王大锤的手机号才是15600998765。&#39;&#39;&#39;</span>
<span class="token comment"># 方法一：查找所有匹配并保存到一个列表中</span>
tels_list <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> sentence<span class="token punctuation">)</span>
<span class="token keyword">for</span> tel <span class="token keyword">in</span> tels_list<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;--------华丽的分隔线--------&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 方法二：通过迭代器取出匹配对象并获得匹配的内容</span>
<span class="token keyword">for</span> temp <span class="token keyword">in</span> pattern<span class="token punctuation">.</span>finditer<span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;--------华丽的分隔线--------&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 方法三：通过search函数指定搜索位置找出所有匹配</span>
m <span class="token operator">=</span> pattern<span class="token punctuation">.</span>search<span class="token punctuation">(</span>sentence<span class="token punctuation">)</span>
<span class="token keyword">while</span> m<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    m <span class="token operator">=</span> pattern<span class="token punctuation">.</span>search<span class="token punctuation">(</span>sentence<span class="token punctuation">,</span> m<span class="token punctuation">.</span>end<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> 上面匹配国内手机号的正则表达式并不够好，因为像14开头的号码只有145或147，而上面的正则表达式并没有考虑这种情况，要匹配国内手机号，更好的正则表达式的写法是：<code>(?&lt;=\\D)(1[38]\\d{9}|14[57]\\d{8}|15[0-35-9]\\d{8}|17[678]\\d{8})(?=\\D)</code>，国内好像已经有19和16开头的手机号了，但是这个暂时不在我们考虑之列。</p></blockquote><h4 id="例子3-替换字符串中的不良内容" tabindex="-1"><a class="header-anchor" href="#例子3-替换字符串中的不良内容" aria-hidden="true">#</a> 例子3：替换字符串中的不良内容</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

sentence <span class="token operator">=</span> <span class="token string">&#39;Oh, shit! 你是傻逼吗? Fuck you.&#39;</span>
purified <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&#39;fuck|shit|[傻煞沙][比笔逼叉缺吊碉雕]&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> sentence<span class="token punctuation">,</span> flags<span class="token operator">=</span>re<span class="token punctuation">.</span>IGNORECASE<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>purified<span class="token punctuation">)</span>  <span class="token comment"># Oh, *! 你是*吗? * you.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),F=s("strong",null,"说明：",-1),W=s("code",null," re",-1),G=s("code",null,"flags",-1),X={href:"http://www.runoob.com/python/python-operators.html#ysf5",target:"_blank",rel:"noopener noreferrer"},J=s("code",null,"flags=re.I | re.M",-1),Y=t(`<h4 id="例子4-拆分长字符串" tabindex="-1"><a class="header-anchor" href="#例子4-拆分长字符串" aria-hidden="true">#</a> 例子4：拆分长字符串</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

poem <span class="token operator">=</span> <span class="token string">&#39;窗前明月光，疑是地上霜。举头望明月，低头思故乡。&#39;</span>
sentences_list <span class="token operator">=</span> re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">r&#39;[，。]&#39;</span><span class="token punctuation">,</span> poem<span class="token punctuation">)</span>
sentences_list <span class="token operator">=</span> <span class="token punctuation">[</span>sentence <span class="token keyword">for</span> sentence <span class="token keyword">in</span> sentences_list <span class="token keyword">if</span> sentence<span class="token punctuation">]</span>
<span class="token keyword">for</span> sentence <span class="token keyword">in</span> sentences_list<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结-4" tabindex="-1"><a class="header-anchor" href="#简单的总结-4" aria-hidden="true">#</a> 简单的总结</h3>`,3),V={href:"https://c.runoob.com/front-end/854",target:"_blank",rel:"noopener noreferrer"},K=t('<h2 id="第31课-网络数据采集概述" tabindex="-1"><a class="header-anchor" href="#第31课-网络数据采集概述" aria-hidden="true">#</a> 第31课：网络数据采集概述</h2><p>爬虫（crawler）也经常被称为网络蜘蛛（spider），是按照一定的规则自动浏览网站并获取所需信息的机器人程序（自动化脚本代码），被广泛的应用于互联网搜索引擎和数据采集。使用过互联网和浏览器的人都知道，网页中除了供用户阅读的文字信息之外，还包含一些超链接，网络爬虫正是通过网页中的超链接信息，不断获得网络上其它页面的地址，然后持续的进行数据采集。正因如此，网络数据采集的过程就像一个爬虫或者蜘蛛在网络上漫游，所以才被形象的称为爬虫或者网络蜘蛛。</p><h3 id="爬虫的应用领域" tabindex="-1"><a class="header-anchor" href="#爬虫的应用领域" aria-hidden="true">#</a> 爬虫的应用领域</h3><p>在理想的状态下，所有 ICP（Internet Content Provider）都应该为自己的网站提供 API 接口来共享它们允许其他程序获取的数据，在这种情况下就根本不需要爬虫程序。国内比较有名的电商平台（如淘宝、京东等）、社交平台（如微博、微信等）等都提供了自己的 API 接口，但是这类 API 接口通常会对可以抓取的数据以及抓取数据的频率进行限制。对于大多数的公司而言，及时的获取行业数据和竞对数据是企业生存的重要环节之一，然而对大部分企业来说，数据都是其与生俱来的短板。在这种情况下，合理的利用爬虫来获取数据并从中提取出有商业价值的信息对这些企业来说就显得至关重要的。</p><p>爬虫的应用领域其实非常广泛，下面我们列举了其中的一部分，有兴趣的读者可以自行探索相关内容。</p><ol><li>搜索引擎</li><li>新闻聚合</li><li>社交应用</li><li>舆情监控</li><li>行业数据</li></ol><h3 id="爬虫合法性探讨" tabindex="-1"><a class="header-anchor" href="#爬虫合法性探讨" aria-hidden="true">#</a> 爬虫合法性探讨</h3><p>经常听人说起“爬虫写得好，牢饭吃到饱”，那么编程爬虫程序是否违法呢？关于这个问题，我们可以从以下几个角度进行解读。</p><ol><li>网络爬虫这个领域目前还属于拓荒阶段，虽然互联网世界已经通过自己的游戏规则建立起了一定的道德规范，即 Robots 协议（全称是“网络爬虫排除标准”），但法律部分还在建立和完善中，也就是说，现在这个领域暂时还是灰色地带。</li><li>“法不禁止即为许可”，如果爬虫就像浏览器一样获取的是前端显示的数据（网页上的公开信息）而不是网站后台的私密敏感信息，就不太担心法律法规的约束，因为目前大数据产业链的发展速度远远超过了法律的完善程度。</li><li>在爬取网站的时候，需要限制自己的爬虫遵守 Robots 协议，同时控制网络爬虫程序的抓取数据的速度；在使用数据的时候，必须要尊重网站的知识产权（从Web 2.0时代开始，虽然Web上的数据很多都是由用户提供的，但是网站平台是投入了运营成本的，当用户在注册和发布内容时，平台通常就已经获得了对数据的所有权、使用权和分发权）。如果违反了这些规定，在打官司的时候败诉几率相当高。</li><li>适当的隐匿自己的身份在编写爬虫程序时必要的，而且最好不要被对方举证你的爬虫有破坏别人动产（例如服务器）的行为。</li><li>不要在公网（如代码托管平台）上去开源或者展示你的爬虫代码，这些行为通常会给自己带来不必要的麻烦。</li></ol><h4 id="robots协议" tabindex="-1"><a class="header-anchor" href="#robots协议" aria-hidden="true">#</a> Robots协议</h4>',10),$=s("code",null,"robots.txt",-1),Z={href:"http://www.taobao.com/robots.txt",target:"_blank",rel:"noopener noreferrer"},nn=s("code",null,"robots.txt",-1),sn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User-agent: Baiduspider
Disallow: /

User-agent: baiduspider
Disallow: /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的文件可以看出，淘宝禁止百度爬虫爬取它任何资源，因此当你在百度搜索“淘宝”的时候，搜索结果下方会出现：“由于该网站的<code>robots.txt</code>文件存在限制指令（限制搜索引擎抓取），系统无法提供该页面的内容描述”。百度作为一个搜索引擎，至少在表面上遵守了淘宝网的<code>robots.txt</code>协议，所以用户不能从百度上搜索到淘宝内部的产品信息。</p><p>图1. 百度搜索淘宝的结果</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713721.png" alt="" loading="lazy"></p>`,4),an={href:"https://www.douban.com/robots.txt",target:"_blank",rel:"noopener noreferrer"},en=s("code",null,"robots.txt",-1),tn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User-agent: *
Disallow: /subject_search
Disallow: /amazon_search
Disallow: /search
Disallow: /group/search
Disallow: /event/search
Disallow: /celebrities/search
Disallow: /location/drama/search
Disallow: /forum/
Disallow: /new_subject
Disallow: /service/iframe
Disallow: /j/
Disallow: /link2/
Disallow: /recommend/
Disallow: /doubanapp/card
Disallow: /update/topic/
Disallow: /share/
Allow: /ads.txt
Sitemap: https://www.douban.com/sitemap_index.xml
Sitemap: https://www.douban.com/sitemap_updated_index.xml
# Crawl-delay: 5

User-agent: Wandoujia Spider
Disallow: /

User-agent: Mediapartners-Google
Disallow: /subject_search
Disallow: /amazon_search
Disallow: /search
Disallow: /group/search
Disallow: /event/search
Disallow: /celebrities/search
Disallow: /location/drama/search
Disallow: /j/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="超文本传输协议-http" tabindex="-1"><a class="header-anchor" href="#超文本传输协议-http" aria-hidden="true">#</a> 超文本传输协议（HTTP）</h3>`,2),pn={href:"https://zh.wikipedia.org/wiki/HTML",target:"_blank",rel:"noopener noreferrer"},on={href:"http://www.ruanyifeng.com/blog/2016/08/http.html",target:"_blank",rel:"noopener noreferrer"},cn={href:"http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html",target:"_blank",rel:"noopener noreferrer"},ln={href:"http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html",target:"_blank",rel:"noopener noreferrer"},dn=t(`<p>下图是我在四川省网络通信技术重点实验室工作期间用开源协议分析工具 Ethereal（WireShark 的前身）截取的访问百度首页时的 HTTP 请求和响应的报文（协议数据），由于 Ethereal 截取的是经过网络适配器的数据，因此可以清晰的看到从物理链路层到应用层的协议数据。</p><p>图2. HTTP请求</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713757.png" alt="http-request" loading="lazy"></p><p>HTTP 请求通常是由请求行、请求头、空行、消息体四个部分构成，如果没有数据发给服务器，消息体就不是必须的部分。请求行中包含了请求方法（GET、POST 等，如下表所示）、资源路径和协议版本；请求头由若干键值对构成，包含了浏览器、编码方式、首选语言、缓存策略等信息；请求头的后面是空行和消息体。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713272.png" width="65%"><p>图3. HTTP响应</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713650.png" alt="http-response" loading="lazy"></p><p>HTTP 响应通常是由响应行、响应头、空行、消息体四个部分构成，其中消息体是服务响应的数据，可能是 HTML 页面，也有可能是JSON或二进制数据等。响应行中包含了协议版本和响应状态码，响应状态码有很多种，常见的如下表所示。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713655.png" width="65%"><h4 id="相关工具" tabindex="-1"><a class="header-anchor" href="#相关工具" aria-hidden="true">#</a> 相关工具</h4><p>下面我们先介绍一些开发爬虫程序的辅助工具，这些工具相信能帮助你事半功倍。</p><ol><li><p>Chrome Developer Tools：谷歌浏览器内置的开发者工具。该工具最常用的几个功能模块是：</p><ul><li>元素（ELements）：用于查看或修改 HTML 元素的属性、CSS 属性、监听事件等。CSS 可以即时修改，即时显示，大大方便了开发者调试页面。</li><li>控制台（Console）：用于执行一次性代码，查看 JavaScript 对象，查看调试日志信息或异常信息。控制台其实就是一个执行 JavaScript 代码的交互式环境。</li><li>源代码（Sources）：用于查看页面的 HTML 文件源代码、JavaScript 源代码、CSS 源代码，此外最重要的是可以调试 JavaScript 源代码，可以给代码添加断点和单步执行。</li><li>网络（Network）：用于 HTTP 请求、HTTP 响应以及与网络连接相关的信息。</li><li>应用（Application）：用于查看浏览器本地存储、后台任务等内容，本地存储主要包括Cookie、Local Storage、Session Storage等。</li></ul><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713681.png" alt="chrome-developer-tools" loading="lazy"></p></li><li><p>Postman：功能强大的网页调试与 RESTful 请求工具。Postman可以帮助我们模拟请求，非常方便的定制我们的请求以及查看服务器的响应。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250720413.png" alt="postman" loading="lazy"></p></li><li><p>HTTPie：命令行HTTP客户端。</p><p>安装。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install httpie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>http --header http --header https://movie.douban.com/

HTTP/1.1 200 OK
Connection: keep-alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Tue, 24 Aug 2021 16:48:00 GMT
Keep-Alive: timeout=30
Server: dae
Set-Cookie: bid=58h4BdKC9lM; Expires=Wed, 24-Aug-22 16:48:00 GMT; Domain=.douban.com; Path=/
Strict-Transport-Security: max-age=15552000
Transfer-Encoding: chunked
X-Content-Type-Options: nosniff
X-DOUBAN-NEWBID: 58h4BdKC9lM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>builtwith</code>库：识别网站所用技术的工具。</p><p>安装。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install builtwith
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> ssl

<span class="token keyword">import</span> builtwith

ssl<span class="token punctuation">.</span>_create_default_https_context <span class="token operator">=</span> ssl<span class="token punctuation">.</span>_create_unverified_context
<span class="token keyword">print</span><span class="token punctuation">(</span>builtwith<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&#39;http://www.bootcss.com/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>python-whois</code>库：查询网站所有者的工具。</p><p>安装。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip3 install python-whois
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> whois

<span class="token keyword">print</span><span class="token punctuation">(</span>whois<span class="token punctuation">.</span>whois<span class="token punctuation">(</span><span class="token string">&#39;https://www.bootcss.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="爬虫的基本工作流程" tabindex="-1"><a class="header-anchor" href="#爬虫的基本工作流程" aria-hidden="true">#</a> 爬虫的基本工作流程</h3><p>一个基本的爬虫通常分为数据采集（网页下载）、数据处理（网页解析）和数据存储（将有用的信息持久化）三个部分的内容，当然更为高级的爬虫在数据采集和处理时会使用并发编程或分布式技术，这就需要有调度器（安排线程或进程执行对应的任务）、后台管理程序（监控爬虫的工作状态以及检查数据抓取的结果）等的参与。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713424.png" alt="crawler-workflow" loading="lazy"></p><p>一般来说，爬虫的工作流程包括以下几个步骤：</p><ol><li>设定抓取目标（种子页面/起始页面）并获取网页。</li><li>当服务器无法访问时，按照指定的重试次数尝试重新下载页面。</li><li>在需要的时候设置用户代理或隐藏真实IP，否则可能无法访问页面。</li><li>对获取的页面进行必要的解码操作然后抓取出需要的信息。</li><li>在获取的页面中通过某种方式（如正则表达式）抽取出页面中的链接信息。</li><li>对链接进行进一步的处理（获取页面并重复上面的动作）。</li><li>将有用的信息进行持久化以备后续的处理。</li></ol><h2 id="第32课-用python获取网络数据" tabindex="-1"><a class="header-anchor" href="#第32课-用python获取网络数据" aria-hidden="true">#</a> 第32课：用Python获取网络数据</h2><p>网络数据采集是 python 语言非常擅长的领域，上节课我们讲到，实现网络数据采集的程序通常称之为网络爬虫或蜘蛛程序。即便是在大数据时代，数据对于中小企业来说仍然是硬伤和短板，有些数据需要通过开放或付费的数据接口来获得，其他的行业数据和竞对数据则必须要通过网络数据采集的方式来获得。不管使用哪种方式获取网络数据资源，python 语言都是非常好的选择，因为 python 的标准库和三方库都对网络数据采集提供了良好的支持。</p><h3 id="requests库" tabindex="-1"><a class="header-anchor" href="#requests库" aria-hidden="true">#</a> requests库</h3>`,20),un=s("code",null,"requests",-1),rn=s("code",null,"requests",-1),vn={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_web_server",target:"_blank",rel:"noopener noreferrer"},mn=s("p",null,[s("img",{src:"https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713655.png",alt:"",loading:"lazy"})],-1),bn=s("code",null,"requests",-1),gn={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML",target:"_blank",rel:"noopener noreferrer"},hn=s("code",null,"requests",-1),yn=s("code",null,"get",-1),_n=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.sohu.com/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面代码中的变量<code>resp</code>是一个<code>Response</code>对象（<code>requests</code>库封装的类型），通过该对象的<code>status_code</code>属性可以获取响应状态码，而该对象的<code>text</code>属性可以帮我们获取到页面的 HTML 代码。</p></blockquote><p>由于<code>Response</code>对象的<code>text</code>是一个字符串，所以我们可以利用之前讲过的正则表达式的知识，从页面的 HTML 代码中提取新闻的标题和链接，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token keyword">import</span> requests

pattern <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;&lt;a.*?href=&quot;(.*?)&quot;.*?title=&quot;(.*?)&quot;.*?&gt;&#39;</span><span class="token punctuation">)</span>
resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.sohu.com/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
    all_matches <span class="token operator">=</span> pattern<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token keyword">for</span> href<span class="token punctuation">,</span> title <span class="token keyword">in</span> all_matches<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了文本内容，我们也可以使用<code>requests</code>库通过 URL 获取二进制资源。下面的例子演示了如何获取百度 Logo 并保存到名为<code>baidu.png</code>的本地文件中。可以在百度的首页上右键点击百度Logo，并通过“复制图片地址”菜单项获取图片的 URL。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;baidu.png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>Response</code>对象的<code>content</code>属性可以获得服务器响应的二进制数据。</p></blockquote>`,7),wn=s("code",null,"requests",-1),fn=s("code",null,"requests",-1),xn={href:"https://docs.python-requests.org/zh_CN/latest/",target:"_blank",rel:"noopener noreferrer"},Sn=s("h3",{id:"编写爬虫代码",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#编写爬虫代码","aria-hidden":"true"},"#"),n(" 编写爬虫代码")],-1),Ln=s("code",null,"requests",-1),qn={href:"https://movie.douban.com/",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://movie.douban.com/top250",target:"_blank",rel:"noopener noreferrer"},Pn={href:"https://movie.douban.com/top250?start=xxx",target:"_blank",rel:"noopener noreferrer"},Tn=s("code",null,"xxx",-1),Mn=s("code",null,"0",-1),In=s("code",null,"xxx",-1),En=s("code",null,"100",-1),Cn=t(`<p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713752.png" alt="" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random
<span class="token keyword">import</span> re
<span class="token keyword">import</span> time

<span class="token keyword">import</span> requests

<span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
        url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;https://movie.douban.com/top250?start=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">25</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
        <span class="token comment"># 如果不设置HTTP请求头中的User-Agent，豆瓣会检测出不是浏览器而阻止我们的请求。</span>
        <span class="token comment"># 通过get函数的headers参数设置User-Agent的值，具体的值可以在浏览器的开发者工具查看到。</span>
        <span class="token comment"># 用爬虫访问大部分网站时，将爬虫伪装成来自浏览器的请求都是非常重要的一步。</span>
        headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token comment"># 通过正则表达式获取class属性为title且标签体不以&amp;开头的span标签并用捕获组提取标签内容</span>
    pattern1 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;&lt;span class=&quot;title&quot;&gt;([^&amp;]*?)&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
    titles <span class="token operator">=</span> pattern1<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token comment"># 通过正则表达式获取class属性为rating_num的span标签并用捕获组提取标签内容</span>
    pattern2 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;&lt;span class=&quot;rating_num&quot;.*?&gt;(.*?)&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
    ranks <span class="token operator">=</span> pattern2<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token comment"># 使用zip压缩两个列表，循环遍历所有的电影标题和评分</span>
    <span class="token keyword">for</span> title<span class="token punctuation">,</span> rank <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>titles<span class="token punctuation">,</span> ranks<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> rank<span class="token punctuation">)</span>
    <span class="token comment"># 随机休眠1-5秒，避免爬取页面过于频繁</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：通过分析豆瓣网的robots协议，我们发现豆瓣网并不拒绝百度爬虫获取它的数据，因此我们也可以将爬虫伪装成百度的爬虫，将<code>get</code>函数的<code>headers</code>参数修改为：<code>headers={&#39;User-Agent&#39;: &#39;BaiduSpider&#39;}</code>。</p></blockquote><h3 id="使用-ip-代理" tabindex="-1"><a class="header-anchor" href="#使用-ip-代理" aria-hidden="true">#</a> 使用 IP 代理</h3><p>让爬虫程序隐匿自己的身份对编写爬虫程序来说是比较重要的，很多网站对爬虫都比较反感的，因为爬虫会耗费掉它们很多的网络带宽并制造很多无效的流量。要隐匿身份通常需要使用<strong>商业 IP 代理</strong>（如蘑菇代理、芝麻代理、快代理等），让被爬取的网站无法获取爬虫程序来源的真实 IP 地址，也就无法简单的通过 IP 地址对爬虫程序进行封禁。</p>`,5),Dn={href:"http://www.moguproxy.com/",target:"_blank",rel:"noopener noreferrer"},On={href:"http://www.moguproxy.com/buy",target:"_blank",rel:"noopener noreferrer"},An=t(`<p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250721991.png" alt="" loading="lazy"></p><p>下面，我们以HTTP隧道代理为例，为大家讲解接入 IP 代理的方式，大家也可以直接参考蘑菇代理官网提供的代码来为爬虫设置代理。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

APP_KEY <span class="token operator">=</span> <span class="token string">&#39;Wnp******************************XFx&#39;</span>
PROXY_HOST <span class="token operator">=</span> <span class="token string">&#39;secondtransfer.moguproxy.com:9001&#39;</span>

<span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
        url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;https://movie.douban.com/top250?start=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">25</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
        <span class="token comment"># 需要在HTTP请求头设置代理的身份认证方式</span>
        headers<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token string">&#39;Proxy-Authorization&#39;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&#39;Basic </span><span class="token interpolation"><span class="token punctuation">{</span>APP_KEY<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
            <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;Accept-Language&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment"># 设置代理服务器</span>
        proxies<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token string">&#39;http&#39;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&#39;http://</span><span class="token interpolation"><span class="token punctuation">{</span>PROXY_HOST<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
            <span class="token string">&#39;https&#39;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&#39;https://</span><span class="token interpolation"><span class="token punctuation">{</span>PROXY_HOST<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        verify<span class="token operator">=</span><span class="token boolean">False</span>
    <span class="token punctuation">)</span>
    pattern1 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;&lt;span class=&quot;title&quot;&gt;([^&amp;]*?)&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
    titles <span class="token operator">=</span> pattern1<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    pattern2 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;&lt;span class=&quot;rating_num&quot;.*?&gt;(.*?)&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
    ranks <span class="token operator">=</span> pattern2<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token keyword">for</span> title<span class="token punctuation">,</span> rank <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>titles<span class="token punctuation">,</span> ranks<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> rank<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码需要修改<code>APP_KEY</code>为自己创建的订单对应的<code>Appkey</code>值，这个值可以在用户中心用户订单中查看到。蘑菇代理提供了免费的 API 代理和 HTTP 隧道代理试用，但是试用的代理接通率不能保证，建议大家还是直接购买一个在自己支付能力范围内的代理服务来体验。</p><p><strong>另注</strong>：蘑菇代理目前已经停止服务了，大家可以按照上面讲解的方式使用其他商业代理即可。</p></blockquote><h3 id="简单的总结-5" tabindex="-1"><a class="header-anchor" href="#简单的总结-5" aria-hidden="true">#</a> 简单的总结</h3><p>python 语言能做的事情真的很多，就网络数据采集这一项而言，python 几乎是一枝独秀的，大量的企业和个人都在使用 python 从网络上获取自己需要的数据，这可能也是你将来日常工作的一部分。另外，用编写正则表达式的方式从网页中提取内容虽然可行，但是写出一个能够满足需求的正则表达式本身也不是件容易的事情，这一点对于新手来说尤为明显。在下一节课中，我们将会为大家介绍另外两种从页面中提取数据的方法，虽然从性能上来讲，它们可能不如正则表达式，但是却降低了编码的复杂性，相信大家会喜欢上它们的。</p><h2 id="第33课-用python解析html页面" tabindex="-1"><a class="header-anchor" href="#第33课-用python解析html页面" aria-hidden="true">#</a> 第33课：用Python解析HTML页面</h2><p>在前面的课程中，我们讲到了使用<code>request</code>三方库获取网络资源，还介绍了一些前端的基础知识。接下来，我们继续探索如何解析 HTML 代码，从页面中提取出有用的信息。之前，我们尝试过用正则表达式的捕获组操作提取页面内容，但是写出一个正确的正则表达式也是一件让人头疼的事情。为了解决这个问题，我们得先深入的了解一下 HTML 页面的结构，并在此基础上研究另外的解析页面的方法。</p><h3 id="html-页面的结构" tabindex="-1"><a class="header-anchor" href="#html-页面的结构" aria-hidden="true">#</a> HTML 页面的结构</h3><p>我们在浏览器中打开任意一个网站，然后通过鼠标右键菜单，选择“显示网页源代码”菜单项，就可以看到网页对应的 HTML 代码。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713431.png" alt="" loading="lazy"></p><p>代码的第<code>1</code>行是文档类型声明，第<code>2</code>行的<code>&lt;html&gt;</code>标签是整个页面根标签的开始标签，最后一行是根标签的结束标签<code>&lt;/html&gt;</code>。<code>&lt;html&gt;</code>标签下面有两个子标签<code>&lt;head&gt;</code>和<code>&lt;body&gt;</code>，放在<code>&lt;body&gt;</code>标签下的内容会显示在浏览器窗口中，这部分内容是网页的主体；放在<code>&lt;head&gt;</code>标签下的内容不会显示在浏览器窗口中，但是却包含了页面重要的元信息，通常称之为网页的头部。HTML 页面大致的代码结构如下所示。</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;!doctype html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- 页面的元信息，如字符编码、标题、关键字、媒体查询等 --&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- 页面的主体，显示在浏览器窗口中的内容 --&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标签、层叠样式表（CSS）、JavaScript 是构成 HTML 页面的三要素，其中标签用来承载页面要显示的内容，CSS 负责对页面的渲染，而 JavaScript 用来控制页面的交互式行为。要实现 HTML 页面的解析，可以使用 XPath 的语法，它原本是 XML 的一种查询语法，可以根据 HTML 标签的层次结构提取标签中的内容或标签属性；此外，也可以使用 CSS 选择器来定位页面元素，就跟用 CSS 渲染页面元素是同样的道理。</p><h3 id="xpath-解析" tabindex="-1"><a class="header-anchor" href="#xpath-解析" aria-hidden="true">#</a> XPath 解析</h3><p>XPath 是在 XML（eXtensible Markup Language）文档中查找信息的一种语法，XML 跟 HTML 类似也是一种用标签承载数据的标签语言，不同之处在于 XML 的标签是可扩展的，可以自定义的，而且 XML 对语法有更严格的要求。XPath 使用路径表达式来选取 XML 文档中的节点或者节点集，这里所说的节点包括元素、属性、文本、命名空间、处理指令、注释、根节点等。下面我们通过一个例子来说明如何使用 XPath 对页面进行解析。</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;bookstore&gt;
    &lt;book&gt;
      &lt;title lang=&quot;eng&quot;&gt;Harry Potter&lt;/title&gt;
      &lt;price&gt;29.99&lt;/price&gt;
    &lt;/book&gt;
    &lt;book&gt;
      &lt;title lang=&quot;zh&quot;&gt;Learning XML&lt;/title&gt;
      &lt;price&gt;39.95&lt;/price&gt;
    &lt;/book&gt;
&lt;/bookstore&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的 XML 文件，我们可以用如下所示的 XPath 语法获取文档中的节点。</p><table><thead><tr><th>路径表达式</th><th>结果</th></tr></thead><tbody><tr><td><code>/bookstore</code></td><td>选取根元素 bookstore。<strong>注意</strong>：假如路径起始于正斜杠( / )，则此路径始终代表到某元素的绝对路径！</td></tr><tr><td><code>//book</code></td><td>选取所有 book 子元素，而不管它们在文档中的位置。</td></tr><tr><td><code>//@lang</code></td><td>选取名为 lang 的所有属性。</td></tr><tr><td><code>/bookstore/book[1]</code></td><td>选取属于 bookstore 子元素的第一个 book 元素。</td></tr><tr><td><code>/bookstore/book[last()]</code></td><td>选取属于 bookstore 子元素的最后一个 book 元素。</td></tr><tr><td><code>/bookstore/book[last()-1]</code></td><td>选取属于 bookstore 子元素的倒数第二个 book 元素。</td></tr><tr><td><code>/bookstore/book[position()&lt;3]</code></td><td>选取最前面的两个属于 bookstore 元素的子元素的 book 元素。</td></tr><tr><td><code>//title[@lang]</code></td><td>选取所有拥有名为 lang 的属性的 title 元素。</td></tr><tr><td><code>//title[@lang=&#39;eng&#39;]</code></td><td>选取所有 title 元素，且这些元素拥有值为 eng 的 lang 属性。</td></tr><tr><td><code>/bookstore/book[price&gt;35.00]</code></td><td>选取 bookstore 元素的所有 book 元素，且其中的 price 元素的值须大于 35.00。</td></tr><tr><td><code>/bookstore/book[price&gt;35.00]/title</code></td><td>选取 bookstore 元素中的 book 元素的所有 title 元素，且其中的 price 元素的值须大于 35.00。</td></tr></tbody></table><p>XPath还支持通配符用法，如下所示。</p><table><thead><tr><th>路径表达式</th><th>结果</th></tr></thead><tbody><tr><td><code>/bookstore/*</code></td><td>选取 bookstore 元素的所有子元素。</td></tr><tr><td><code>//*</code></td><td>选取文档中的所有元素。</td></tr><tr><td><code>//title[@*]</code></td><td>选取所有带有属性的 title 元素。</td></tr></tbody></table><p>如果要选取多个节点，可以使用如下所示的方法。</p><table><thead><tr><th>路径表达式</th><th>结果</th></tr></thead><tbody><tr><td><code>//book/title | //book/price</code></td><td>选取 book 元素的所有 title 和 price 元素。</td></tr><tr><td><code>//title | //price</code></td><td>选取文档中的所有 title 和 price 元素。</td></tr><tr><td><code>/bookstore/book/title | //price</code></td><td>选取属于 bookstore 元素的 book 元素的所有 title 元素，以及文档中所有的 price 元素。</td></tr></tbody></table>`,23),Rn=s("strong",null,"说明",-1),jn={href:"https://www.runoob.com/xpath/xpath-tutorial.html",target:"_blank",rel:"noopener noreferrer"},Nn=t(`<p>当然，如果不理解或不熟悉 XPath 语法，可以在浏览器的开发者工具中按照如下所示的方法查看元素的 XPath 语法，下图是在 Chrome 浏览器的开发者工具中查看豆瓣网电影详情信息中影片标题的 XPath 语法。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713077.png" alt="" loading="lazy"></p><p>实现 XPath 解析需要三方库<code>lxml</code> 的支持，可以使用下面的命令安装<code>lxml</code>。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install lxml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面我们用 XPath 解析方式改写之前获取豆瓣电影 Top250的代码，如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree
<span class="token keyword">import</span> requests

<span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
        url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;https://movie.douban.com/top250?start=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">25</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
        headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;BaiduSpider&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token comment"># 通过XPath语法从页面中提取电影标题</span>
    title_spans <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//*[@id=&quot;content&quot;]/div/div[1]/ol/li/div/div[2]/div[1]/a/span[1]&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 通过XPath语法从页面中提取电影评分</span>
    rank_spans <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//*[@id=&quot;content&quot;]/div/div[1]/ol/li[1]/div/div[2]/div[2]/div/span[2]&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> title_span<span class="token punctuation">,</span> rank_span <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>title_spans<span class="token punctuation">,</span> rank_spans<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>title_span<span class="token punctuation">.</span>text<span class="token punctuation">,</span> rank_span<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-选择器解析" tabindex="-1"><a class="header-anchor" href="#css-选择器解析" aria-hidden="true">#</a> CSS 选择器解析</h3><p>对于熟悉 CSS 选择器和 JavaScript 的开发者来说，通过 CSS 选择器获取页面元素可能是更为简单的选择，因为浏览器中运行的 JavaScript 本身就可以<code>document</code>对象的<code>querySelector()</code>和<code>querySelectorAll()</code>方法基于 CSS 选择器获取页面元素。在 python 中，我们可以利用三方库<code>beautifulsoup4</code>或<code>pyquery</code>来做同样的事情。Beautiful Soup 可以用来解析 HTML 和 XML 文档，修复含有未闭合标签等错误的文档，通过为待解析的页面在内存中创建一棵树结构，实现对从页面中提取数据操作的封装。可以用下面的命令来安装 Beautiful Soup。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install beautifulsoup4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是使用<code>bs4</code>改写的获取豆瓣电影Top250电影名称的代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> bs4
<span class="token keyword">import</span> requests

<span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
        url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;https://movie.douban.com/top250?start=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">25</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
        headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;BaiduSpider&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token comment"># 创建BeautifulSoup对象</span>
    soup <span class="token operator">=</span> bs4<span class="token punctuation">.</span>BeautifulSoup<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 通过CSS选择器从页面中提取包含电影标题的span标签</span>
    title_spans <span class="token operator">=</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;div.info &gt; div.hd &gt; a &gt; span:nth-child(1)&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 通过CSS选择器从页面中提取包含电影评分的span标签</span>
    rank_spans <span class="token operator">=</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;div.info &gt; div.bd &gt; div &gt; span.rating_num&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> title_span<span class="token punctuation">,</span> rank_span <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>title_spans<span class="token punctuation">,</span> rank_spans<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>title_span<span class="token punctuation">.</span>text<span class="token punctuation">,</span> rank_span<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),Bn={href:"https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/",target:"_blank",rel:"noopener noreferrer"},Un=t(`<h3 id="简单的总结-6" tabindex="-1"><a class="header-anchor" href="#简单的总结-6" aria-hidden="true">#</a> 简单的总结</h3><p>下面我们对三种解析方式做一个简单比较。</p><table><thead><tr><th>解析方式</th><th>对应的模块</th><th>速度</th><th>使用难度</th></tr></thead><tbody><tr><td>正则表达式解析</td><td><code>re</code></td><td>快</td><td>困难</td></tr><tr><td>XPath 解析</td><td><code>lxml</code></td><td>快</td><td>一般</td></tr><tr><td>CSS 选择器解析</td><td><code>bs4</code>或<code>pyquery</code></td><td>不确定</td><td>简单</td></tr></tbody></table><h2 id="第34课-python中的并发编程-1" tabindex="-1"><a class="header-anchor" href="#第34课-python中的并发编程-1" aria-hidden="true">#</a> 第34课：Python中的并发编程-1</h2><p>现如今，我们使用的计算机早已是多 CPU 或多核的计算机，而我们使用的操作系统基本都支持“多任务”，这使得我们可以同时运行多个程序，也可以将一个程序分解为若干个相对独立的子任务，让多个子任务“并行”或“并发”的执行，从而缩短程序的执行时间，同时也让用户获得更好的体验。因此当下，不管用什么编程语言进行开发，实现“并行”或“并发”编程已经成为了程序员的标配技能。为了讲述如何在 python 程序中实现“并行”或“并发”，我们需要先了解两个重要的概念：进程和线程。</p><h3 id="线程和进程" tabindex="-1"><a class="header-anchor" href="#线程和进程" aria-hidden="true">#</a> 线程和进程</h3><p>我们通过操作系统运行一个程序会创建出一个或多个进程，进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动。简单的说，进程是操作系统分配存储空间的基本单位，每个进程都有自己的地址空间、数据栈以及其他用于跟踪进程执行的辅助数据；操作系统管理所有进程的执行，为它们合理的分配资源。一个进程可以通过 fork 或 spawn 的方式创建新的进程来执行其他的任务，不过新的进程也有自己独立的内存空间，因此两个进程如果要共享数据，必须通过进程间通信机制来实现，具体的方式包括管道、信号、套接字等。</p><p>一个进程还可以拥有多个执行线索，简单的说就是拥有多个可以获得 CPU 调度的执行单元，这就是所谓的线程。由于线程在同一个进程下，它们可以共享相同的上下文，因此相对于进程而言，线程间的信息共享和通信更加容易。当然在单核 CPU 系统中，多个线程不可能同时执行，因为在某个时刻只有一个线程能够获得 CPU，多个线程通过共享 CPU 执行时间的方式来达到并发的效果。</p><p>在程序中使用多线程技术通常都会带来不言而喻的好处，最主要的体现在提升程序的性能和改善用户体验，今天我们使用的软件几乎都用到了多线程技术，这一点可以利用系统自带的进程监控工具（如 macOS 中的“活动监视器”、Windows 中的“任务管理器”）来证实，如下图所示。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250717174.png" alt="" loading="lazy"></p><p>这里，我们还需要跟大家再次强调两个概念：<strong>并发</strong>（concurrency）和<strong>并行</strong>（parallel）。<strong>并发</strong>通常是指同一时刻只能有一条指令执行，但是多个线程对应的指令被快速轮换地执行。比如一个处理器，它先执行线程 A 的指令一段时间，再执行线程 B 的指令一段时间，再切回到线程 A 执行一段时间。由于处理器执行指令的速度和切换的速度极快，人们完全感知不到计算机在这个过程中有多个线程切换上下文执行的操作，这就使得宏观上看起来多个线程在同时运行，但微观上其实只有一个线程在执行。<strong>并行</strong>是指同一时刻，有多条指令在多个处理器上同时执行，并行必须要依赖于多个处理器，不论是从宏观上还是微观上，多个线程可以在同一时刻一起执行的。很多时候，我们并不用严格区分并发和并行两个词，所以我们有时候也把 python 中的多线程、多进程以及异步 I/O 都视为实现并发编程的手段，但实际上前面两者也可以实现并行编程，当然这里还有一个全局解释器锁（GIL）的问题，我们稍后讨论。</p><h3 id="多线程编程" tabindex="-1"><a class="header-anchor" href="#多线程编程" aria-hidden="true">#</a> 多线程编程</h3><p>python 标准库中<code>threading</code>模块的<code>Thread</code>类可以帮助我们非常轻松的实现多线程编程。我们用一个联网下载文件的例子来对比使用多线程和不使用多线程到底有什么区别，代码如下所示。</p><p>不使用多线程的下载。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;开始下载 </span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string"> 下载完成.&#39;</span></span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;下载耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    download<span class="token punctuation">(</span>filename<span class="token operator">=</span><span class="token string">&#39;Python从入门到住院.pdf&#39;</span><span class="token punctuation">)</span>
    download<span class="token punctuation">(</span>filename<span class="token operator">=</span><span class="token string">&#39;MySQL从删库到跑路.avi&#39;</span><span class="token punctuation">)</span>
    download<span class="token punctuation">(</span>filename<span class="token operator">=</span><span class="token string">&#39;Linux从精通到放弃.mp4&#39;</span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;总耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码并没有真正实现联网下载的功能，而是通过<code>time.sleep()</code>休眠一段时间来模拟下载文件需要一些时间上的开销，跟实际下载的状况比较类似。</p></blockquote><p>运行上面的代码，可以得到如下所示的运行结果。可以看出，当我们的程序只有一个工作线程时，每个下载任务都需要等待上一个下载任务执行结束才能开始，所以程序执行的总耗时是三个下载任务各自执行时间的总和。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>开始下载Python从入门到住院.pdf.
Python从入门到住院.pdf下载完成.
下载耗时: 3.005秒.
开始下载MySQL从删库到跑路.avi.
MySQL从删库到跑路.avi下载完成.
下载耗时: 5.006秒.
开始下载Linux从精通到放弃.mp4.
Linux从精通到放弃.mp3下载完成.
下载耗时: 6.007秒.
总耗时: 14.018秒.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，上面的三个下载任务之间并没有逻辑上的因果关系，三者是可以“并发”的，下一个下载任务没有必要等待上一个下载任务结束，为此，我们可以使用多线程编程来改写上面的代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random
<span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;开始下载 </span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string"> 下载完成.&#39;</span></span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;下载耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    threads <span class="token operator">=</span> <span class="token punctuation">[</span>
        Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>download<span class="token punctuation">,</span> kwargs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;filename&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Python从入门到住院.pdf&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>download<span class="token punctuation">,</span> kwargs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;filename&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;MySQL从删库到跑路.avi&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>download<span class="token punctuation">,</span> kwargs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;filename&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Linux从精通到放弃.mp4&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 启动三个线程</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 等待线程结束</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;总耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>某次的运行结果如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>开始下载 Python从入门到住院.pdf.
开始下载 MySQL从删库到跑路.avi.
开始下载 Linux从精通到放弃.mp4.
MySQL从删库到跑路.avi 下载完成.
下载耗时: 3.005秒.
Python从入门到住院.pdf 下载完成.
下载耗时: 5.006秒.
Linux从精通到放弃.mp4 下载完成.
下载耗时: 6.003秒.
总耗时: 6.004秒.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的运行结果可以发现，整个程序的执行时间几乎等于耗时最长的一个下载任务的执行时间，这也就意味着，三个下载任务是并发执行的，不存在一个等待另一个的情况，这样做很显然提高了程序的执行效率。简单的说，如果程序中有非常耗时的执行单元，而这些耗时的执行单元之间又没有逻辑上的因果关系，即 B 单元的执行不依赖于 A 单元的执行结果，那么 A 和 B 两个单元就可以放到两个不同的线程中，让他们并发的执行。这样做的好处除了减少程序执行的等待时间，还可以带来更好的用户体验，因为一个单元的阻塞不会造成程序的“假死”，因为程序中还有其他的单元是可以运转的。</p><h4 id="使用-thread-类创建线程对象" tabindex="-1"><a class="header-anchor" href="#使用-thread-类创建线程对象" aria-hidden="true">#</a> 使用 Thread 类创建线程对象</h4><p>通过上面的代码可以看出，直接使用<code>Thread</code>类的构造器就可以创建线程对象，而线程对象的<code>start()</code>方法可以启动一个线程。线程启动后会执行<code>target</code>参数指定的函数，当然前提是获得 CPU 的调度；如果<code>target</code>指定的线程要执行的目标函数有参数，需要通过<code>args</code>参数为其进行指定，对于关键字参数，可以通过<code>kwargs</code>参数进行传入。<code>Thread</code>类的构造器还有很多其他的参数，我们遇到的时候再为大家进行讲解，目前需要大家掌握的，就是<code>target</code>、<code>args</code>和<code>kwargs</code>。</p><h4 id="继承-thread-类自定义线程" tabindex="-1"><a class="header-anchor" href="#继承-thread-类自定义线程" aria-hidden="true">#</a> 继承 Thread 类自定义线程</h4><p>除了上面的代码展示的创建线程的方式外，还可以通过继承<code>Thread</code>类并重写<code>run()</code>方法的方式来自定义线程，具体的代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random
<span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">class</span> <span class="token class-name">DownloadThread</span><span class="token punctuation">(</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>filename <span class="token operator">=</span> filename
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;开始下载 </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>filename<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>filename<span class="token punctuation">}</span></span><span class="token string"> 下载完成.&#39;</span></span><span class="token punctuation">)</span>
        end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;下载耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    threads <span class="token operator">=</span> <span class="token punctuation">[</span>
        DownloadThread<span class="token punctuation">(</span><span class="token string">&#39;Python从入门到住院.pdf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        DownloadThread<span class="token punctuation">(</span><span class="token string">&#39;MySQL从删库到跑路.avi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        DownloadThread<span class="token punctuation">(</span><span class="token string">&#39;Linux从精通到放弃.mp4&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 启动三个线程</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 等待线程结束</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;总耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用线程池" tabindex="-1"><a class="header-anchor" href="#使用线程池" aria-hidden="true">#</a> 使用线程池</h4><p>我们还可以通过线程池的方式将任务放到多个线程中去执行，通过线程池来使用线程应该是多线程编程最理想的选择。事实上，线程的创建和释放都会带来较大的开销，频繁的创建和释放线程通常都不是很好的选择。利用线程池，可以提前准备好若干个线程，在使用的过程中不需要再通过自定义的代码创建和释放线程，而是直接复用线程池中的线程。python 内置的<code>concurrent.futures</code>模块提供了对线程池的支持，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random
<span class="token keyword">import</span> time
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;开始下载 </span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string"> 下载完成.&#39;</span></span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;下载耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        filenames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Python从入门到住院.pdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MySQL从删库到跑路.avi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Linux从精通到放弃.mp4&#39;</span><span class="token punctuation">]</span>
        start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> filename <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
            pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>download<span class="token punctuation">,</span> filename<span class="token operator">=</span>filename<span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;总耗时: </span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒.&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="守护线程" tabindex="-1"><a class="header-anchor" href="#守护线程" aria-hidden="true">#</a> 守护线程</h3><p>所谓“守护线程”就是在主线程结束的时候，不值得再保留的执行线程。这里的不值得保留指的是守护线程会在其他非守护线程全部运行结束之后被销毁，它守护的是当前进程内所有的非守护线程。简单的说，守护线程会跟随主线程一起挂掉，而主线程的生命周期就是一个进程的生命周期。如果不理解，我们可以看一段简单的代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> flush<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>display<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Ping&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>display<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Pong&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码中，我们将<code>print</code>函数的参数<code>flush</code>设置为<code>True</code>，这是因为<code>flush</code>参数的值如果为<code>False</code>，而<code>print</code>又没有做换行处理，就会导致每次<code>print</code>输出的内容被放到操作系统的输出缓冲区，直到缓冲区被输出的内容塞满，才会清空缓冲区产生一次输出。上述现象是操作系统为了减少 I/O 中断，提升 CPU 利用率做出的设定，为了让代码产生直观交互，我们才将<code>flush</code>参数设置为<code>True</code>，强制每次输出都清空输出缓冲区。</p></blockquote><p>上面的代码运行起来之后是不会停止的，因为两个子线程中都有死循环，除非你手动中断代码的执行。但是，如果在创建线程对象时，将名为<code>daemon</code>的参数设置为<code>True</code>，这两个线程就会变成守护线程，那么在其他线程结束时，即便有死循环，两个守护线程也会挂掉，不会再继续执行下去，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
       <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> flush<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
       time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>display<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Ping&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> daemon<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
   Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>display<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Pong&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> daemon<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
   time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
   main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，我们在主线程中添加了一行<code>time.sleep(5)</code>让主线程休眠5秒，在这个过程中，输出<code>Ping</code>和<code>Pong</code>的守护线程会持续运转，直到主线程在5秒后结束，这两个守护线程也被销毁，不再继续运行。</p><blockquote><p><strong>思考</strong>：如果将上面代码第12行的<code>daemon=True</code>去掉，代码会怎样执行？有兴趣的读者可以尝试一下，并看看实际执行的结果跟你想象的是否一致。</p></blockquote><h3 id="资源竞争" tabindex="-1"><a class="header-anchor" href="#资源竞争" aria-hidden="true">#</a> 资源竞争</h3><p>在编写多线程代码时，不可避免的会遇到多个线程竞争同一个资源（对象）的情况。在这种情况下，如果没有合理的机制来保护被竞争的资源，那么就有可能出现非预期的状况。下面的代码创建了<code>100</code>个线程向同一个银行账户（初始余额为<code>0</code>元）转账，每个线程转账金额为<code>1</code>元。在正常的情况下，我们的银行账户最终的余额应该是<code>100</code>元，但是运行下面的代码我们并不能得到<code>100</code>元这个结果。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor


<span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;银行账户&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> <span class="token number">0.0</span>

    <span class="token keyword">def</span> <span class="token function">deposit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;存钱&quot;&quot;&quot;</span>
        new_balance <span class="token operator">=</span> self<span class="token punctuation">.</span>balance <span class="token operator">+</span> money
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> new_balance


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
    account <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>account<span class="token punctuation">.</span>deposit<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>balance<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中的<code>Account</code>类代表了银行账户，它的<code>deposit</code>方法代表存款行为，参数<code>money</code>代表存入的金额，该方法通过<code>time.sleep</code>函数模拟受理存款需要一段时间。我们通过线程池的方式启动了<code>100</code>个线程向一个账户转账，但是上面的代码并不能运行出<code>100</code>这个我们期望的结果，这就是在多个线程竞争一个资源的时候，可能会遇到的数据不一致的问题。注意上面代码的第<code>14</code>行，当多个线程都执行到这行代码时，它们会在相同的余额上执行加上存入金额的操作，这就会造成“丢失更新”现象，即之前修改数据的成果被后续的修改给覆盖掉了，所以才得不到正确的结果。</p><p>要解决上面的问题，可以使用锁机制，通过锁对操作数据的关键代码加以保护。python 标准库的<code>threading</code>模块提供了<code>Lock</code>和<code>RLock</code>类来支持锁机制，这里我们不去深究二者的区别，建议大家直接使用<code>RLock</code>。接下来，我们给银行账户添加一个锁对象，通过锁对象来解决刚才存款时发生“丢失更新”的问题，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor
<span class="token keyword">from</span> threading <span class="token keyword">import</span> RLock


<span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;银行账户&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> <span class="token number">0.0</span>
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> RLock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">deposit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获得锁</span>
        self<span class="token punctuation">.</span>lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            new_balance <span class="token operator">=</span> self<span class="token punctuation">.</span>balance <span class="token operator">+</span> money
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>balance <span class="token operator">=</span> new_balance
        <span class="token keyword">finally</span><span class="token punctuation">:</span>
            <span class="token comment"># 释放锁</span>
            self<span class="token punctuation">.</span>lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
    account <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>account<span class="token punctuation">.</span>deposit<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>balance<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，获得锁和释放锁的操作也可以通过上下文语法来实现，使用上下文语法会让代码更加简单优雅，这也是我们推荐大家使用的方式。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor
<span class="token keyword">from</span> threading <span class="token keyword">import</span> RLock


<span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;银行账户&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> <span class="token number">0.0</span>
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> RLock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">deposit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 通过上下文语法获得锁和释放锁</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>
            new_balance <span class="token operator">=</span> self<span class="token punctuation">.</span>balance <span class="token operator">+</span> money
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>balance <span class="token operator">=</span> new_balance


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
    account <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>account<span class="token punctuation">.</span>deposit<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>balance<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>思考</strong>：将上面的代码修改为5个线程向银行账户存钱，5个线程从银行账户取钱，取钱的线程在银行账户余额不足时，需要停下来等待存钱的线程将钱存入后再尝试取钱。这里需要用到线程调度的知识，大家可以自行研究下<code>threading</code>模块中的<code>Condition</code>类，看看是否能够完成这个任务。</p></blockquote><h3 id="gil问题" tabindex="-1"><a class="header-anchor" href="#gil问题" aria-hidden="true">#</a> GIL问题</h3><p>如果使用官方的 python 解释器（通常称之为 CPython）运行 python 程序，我们并不能通过使用多线程的方式将 CPU 的利用率提升到逼近400%（对于4核 CPU）或逼近800%（对于8核 CPU）这样的水平，因为 CPython 在执行代码时，会受到 GIL（全局解释器锁）的限制。具体的说，CPython 在执行任何代码时，都需要对应的线程先获得 GIL，然后每执行100条（字节码）指令，CPython 就会让获得 GIL 的线程主动释放 GIL，这样别的线程才有机会执行。因为 GIL 的存在，无论你的 CPU 有多少个核，我们编写的 python 代码也没有机会真正并行的执行。</p><p>GIL 是官方 python 解释器在设计上的历史遗留问题，要解决这个问题，让多线程能够发挥 CPU 的多核优势，需要重新实现一个不带 GIL 的 python 解释器。这个问题按照官方的说法，在 python 发布4.0版本时会得到解决，就让我们拭目以待吧。当下，对于 CPython 而言，如果希望充分发挥 CPU 的多核优势，可以考虑使用多进程，因为每个进程都对应一个 python 解释器，因此每个进程都有自己独立的 GIL，这样就可以突破 GIL 的限制。在下一个章节中，我们会为大家介绍关于多进程的相关知识，并对多线程和多进程的代码及其执行效果进行比较。</p><h2 id="第35课-python中的并发编程-2" tabindex="-1"><a class="header-anchor" href="#第35课-python中的并发编程-2" aria-hidden="true">#</a> 第35课：Python中的并发编程-2</h2><p>在上一课中我们说过，由于 GIL 的存在，CPython 中的多线程并不能发挥 CPU 的多核优势，如果希望突破 GIL 的限制，可以考虑使用多进程。对于多进程的程序，每个进程都有一个属于自己的 GIL，所以多进程不会受到 GIL 的影响。那么，我们应该如何在 python 程序中创建和使用多进程呢？</p><p>###创建进程</p><p>在 python 中可以基于<code>Process</code>类来创建进程，虽然进程和线程有着本质的差别，但是<code>Process</code>类和<code>Thread</code>类的用法却非常类似。在使用<code>Process</code>类的构造器创建对象时，也是通过<code>target</code>参数传入一个函数来指定进程要执行的代码，而<code>args</code>和<code>kwargs</code>参数可以指定该函数使用的参数值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process<span class="token punctuation">,</span> current_process
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep


<span class="token keyword">def</span> <span class="token function">sub_task</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 通过current_process函数获取当前进程对象</span>
    <span class="token comment"># 通过进程对象的pid和name属性获取进程的ID号和名字</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;PID: </span><span class="token interpolation"><span class="token punctuation">{</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Name: </span><span class="token interpolation"><span class="token punctuation">{</span>current_process<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token comment"># 通过下面的输出不难发现，每个进程都有自己的nums列表，进程之间本就不共享内存</span>
    <span class="token comment"># 在创建子进程时复制了父进程的数据结构，三个进程从列表中pop(0)得到的值都是20</span>
    counter<span class="token punctuation">,</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Loop count: </span><span class="token interpolation"><span class="token punctuation">{</span>total<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> counter <span class="token operator">&lt;</span> total<span class="token punctuation">:</span>
        counter <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>counter<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{</span>content<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        sleep<span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span>
    <span class="token comment"># 创建并启动进程来执行指定的函数</span>
    Process<span class="token punctuation">(</span>target<span class="token operator">=</span>sub_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Ping&#39;</span><span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    Process<span class="token punctuation">(</span>target<span class="token operator">=</span>sub_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Pong&#39;</span><span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 在主进程中执行sub_task函数</span>
    sub_task<span class="token punctuation">(</span><span class="token string">&#39;Good&#39;</span><span class="token punctuation">,</span> nums<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码通过<code>current_process</code>函数获取当前进程对象，再通过进程对象的<code>pid</code>属性获取进程ID。在 python 中，使用<code>os</code>模块的<code>getpid</code>函数也可以达到同样的效果。</p></blockquote><p>如果愿意，也可以使用<code>os</code>模块的<code>fork</code>函数来创建进程，调用该函数时，操作系统自动把当前进程（父进程）复制一份（子进程），父进程的<code>fork</code>函数会返回子进程的ID，而子进程中的<code>fork</code>函数会返回<code>0</code>，也就是说这个函数调用一次会在父进程和子进程中得到两个不同的返回值。需要注意的是，Windows 系统并不支持<code>fork</code>函数，如果你使用的是 Linux 或 macOS 系统，可以试试下面的代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;PID: </span><span class="token interpolation"><span class="token punctuation">{</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
pid <span class="token operator">=</span> os<span class="token punctuation">.</span>fork<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> pid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;子进程 - PID: </span><span class="token interpolation"><span class="token punctuation">{</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Todo: 在子进程中执行的代码&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;父进程 - PID: </span><span class="token interpolation"><span class="token punctuation">{</span>os<span class="token punctuation">.</span>getpid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Todo: 在父进程中执行的代码&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简而言之，我们还是推荐大家通过直接使用<code>Process</code>类、继承<code>Process</code>类和使用进程池（<code>ProcessPoolExecutor</code>）这三种方式来创建和使用多进程，这三种方式不同于上面的<code>fork</code>函数，能够保证代码的兼容性和可移植性。具体的做法跟之前讲过的创建和使用多线程的方式比较接近，此处不再进行赘述。</p><h3 id="多进程和多线程的比较" tabindex="-1"><a class="header-anchor" href="#多进程和多线程的比较" aria-hidden="true">#</a> 多进程和多线程的比较</h3><p>对于爬虫这类 I/O 密集型任务来说，使用多进程并没有什么优势；但是对于计算密集型任务来说，多进程相比多线程，在效率上会有显著的提升，我们可以通过下面的代码来加以证明。下面的代码会通过多线程和多进程两种方式来判断一组大整数是不是质数，很显然这是一个计算密集型任务，我们将任务分别放到多个线程和多个进程中来加速代码的执行，让我们看看多线程和多进程的代码具体表现有何不同。</p><p>我们先实现一个多线程的版本，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> concurrent<span class="token punctuation">.</span>futures

PRIMES <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">1116281</span><span class="token punctuation">,</span>
    <span class="token number">1297337</span><span class="token punctuation">,</span>
    <span class="token number">104395303</span><span class="token punctuation">,</span>
    <span class="token number">472882027</span><span class="token punctuation">,</span>
    <span class="token number">533000389</span><span class="token punctuation">,</span>
    <span class="token number">817504243</span><span class="token punctuation">,</span>
    <span class="token number">982451653</span><span class="token punctuation">,</span>
    <span class="token number">112272535095293</span><span class="token punctuation">,</span>
    <span class="token number">112582705942171</span><span class="token punctuation">,</span>
    <span class="token number">112272535095293</span><span class="token punctuation">,</span>
    <span class="token number">115280095190773</span><span class="token punctuation">,</span>
    <span class="token number">115797848077099</span><span class="token punctuation">,</span>
    <span class="token number">1099726899285419</span>
<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span>


<span class="token keyword">def</span> <span class="token function">is_prime</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;判断素数&quot;&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>n <span class="token operator">**</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> n <span class="token operator">!=</span> <span class="token number">1</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
    <span class="token keyword">with</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">as</span> executor<span class="token punctuation">:</span>
        <span class="token keyword">for</span> number<span class="token punctuation">,</span> prime <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>PRIMES<span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>is_prime<span class="token punctuation">,</span> PRIMES<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%d is prime: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>number<span class="token punctuation">,</span> prime<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设上面的代码保存在名为<code>example.py</code>的文件中，在 Linux 或 macOS 系统上，可以使用<code>time python example.py</code>命令执行程序并获得操作系统关于执行时间的统计，在我的 macOS 上，某次的运行结果的最后一行输出如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python example09.py  38.69s user 1.01s system 101% cpu 39.213 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从运行结果可以看出，多线程的代码只能让 CPU 利用率达到100%，这其实已经证明了多线程的代码无法利用 CPU 多核特性来加速代码的执行，我们再看看多进程的版本，我们将上面代码中的线程池（<code>ThreadPoolExecutor</code>）更换为进程池（<code>ProcessPoolExecutor</code>）。</p><p>多进程的版本。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> concurrent<span class="token punctuation">.</span>futures

PRIMES <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">1116281</span><span class="token punctuation">,</span>
    <span class="token number">1297337</span><span class="token punctuation">,</span>
    <span class="token number">104395303</span><span class="token punctuation">,</span>
    <span class="token number">472882027</span><span class="token punctuation">,</span>
    <span class="token number">533000389</span><span class="token punctuation">,</span>
    <span class="token number">817504243</span><span class="token punctuation">,</span>
    <span class="token number">982451653</span><span class="token punctuation">,</span>
    <span class="token number">112272535095293</span><span class="token punctuation">,</span>
    <span class="token number">112582705942171</span><span class="token punctuation">,</span>
    <span class="token number">112272535095293</span><span class="token punctuation">,</span>
    <span class="token number">115280095190773</span><span class="token punctuation">,</span>
    <span class="token number">115797848077099</span><span class="token punctuation">,</span>
    <span class="token number">1099726899285419</span>
<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span>


<span class="token keyword">def</span> <span class="token function">is_prime</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;判断素数&quot;&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>n <span class="token operator">**</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> n <span class="token operator">!=</span> <span class="token number">1</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
    <span class="token keyword">with</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>ProcessPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">as</span> executor<span class="token punctuation">:</span>
        <span class="token keyword">for</span> number<span class="token punctuation">,</span> prime <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>PRIMES<span class="token punctuation">,</span> executor<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>is_prime<span class="token punctuation">,</span> PRIMES<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%d is prime: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>number<span class="token punctuation">,</span> prime<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：运行上面的代码时，可以通过操作系统的任务管理器（资源监视器）来查看是否启动了多个 python 解释器进程。</p></blockquote><p>我们仍然通过<code>time python example.py</code>的方式来执行上述代码，运行结果的最后一行如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python example09.py 106.63s user 0.57s system 389% cpu 27.497 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看出，多进程的版本在我使用的这台电脑上，让 CPU 的利用率达到了将近400%，而运行代码时用户态耗费的 CPU 的时间（106.63秒）几乎是代码运行总时间（27.497秒）的4倍，从这两点都可以看出，我的电脑使用了一款4核的 CPU。当然，要知道自己的电脑有几个 CPU 或几个核，可以直接使用下面的代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>cpu_count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上所述，多进程可以突破 GIL 的限制，充分利用 CPU 多核特性，对于计算密集型任务，这一点是相当重要的。常见的计算密集型任务包括科学计算、图像处理、音视频编解码等，如果这些计算密集型任务本身是可以并行的，那么使用多进程应该是更好的选择。</p><h3 id="进程间通信" tabindex="-1"><a class="header-anchor" href="#进程间通信" aria-hidden="true">#</a> 进程间通信</h3><p>在讲解进程间通信之前，先给大家一个任务：启动两个进程，一个输出“Ping”，一个输出“Pong”，两个进程输出的“Ping”和“Pong”加起来一共有50个时，就结束程序。听起来是不是非常简单，但是实际编写代码时，由于多个进程之间不能够像多个线程之间直接通过共享内存的方式交换数据，所以下面的代码是达不到我们想要的结果的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep

counter <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">sub_task</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> counter
    <span class="token keyword">while</span> counter <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> flush<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        counter <span class="token operator">+=</span> <span class="token number">1</span>
        sleep<span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span>

        
<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    Process<span class="token punctuation">(</span>target<span class="token operator">=</span>sub_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Ping&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    Process<span class="token punctuation">(</span>target<span class="token operator">=</span>sub_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Pong&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码看起来没毛病，但是最后的结果是“Ping”和“Pong”各输出了50个。再次提醒大家，当我们在程序中创建进程的时候，子进程会复制父进程及其所有的数据结构，每个子进程有自己独立的内存空间，这也就意味着两个子进程中各有一个<code>counter</code>变量，它们都会从<code>0</code>加到<code>50</code>，所以结果就可想而知了。要解决这个问题比较简单的办法是使用<code>multiprocessing</code>模块中的<code>Queue</code>类，它是可以被多个进程共享的队列，底层是通过操作系统底层的管道和信号量（semaphore）机制来实现的，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process<span class="token punctuation">,</span> Queue


<span class="token keyword">def</span> <span class="token function">sub_task</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> queue<span class="token punctuation">)</span><span class="token punctuation">:</span>
    counter <span class="token operator">=</span> queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> counter <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> flush<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        counter <span class="token operator">+=</span> <span class="token number">1</span>
        queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span>
        counter <span class="token operator">=</span> queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    queue <span class="token operator">=</span> Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    p1 <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>sub_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Ping&#39;</span><span class="token punctuation">,</span> queue<span class="token punctuation">)</span><span class="token punctuation">)</span>
    p1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p2 <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>sub_task<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Pong&#39;</span><span class="token punctuation">,</span> queue<span class="token punctuation">)</span><span class="token punctuation">)</span>
    p2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> p1<span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> p2<span class="token punctuation">.</span>is_alive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：<code>multiprocessing.Queue</code>对象的<code>get</code>方法默认在队列为空时是会阻塞的，直到获取到数据才会返回。如果不希望该方法阻塞以及需要指定阻塞的超时时间，可以通过指定<code>block</code>和<code>timeout</code>参数进行设定。</p></blockquote><p>上面的代码通过<code>Queue</code>类的<code>get</code>和<code>put</code>方法让三个进程（<code>p1</code>、<code>p2</code>和主进程）实现了数据的共享，这就是所谓的进程间的通信，通过这种方式，当<code>Queue</code>中取出的值已经大于等于<code>50</code>时，<code>p1</code>和<code>p2</code>就会跳出<code>while</code>循环，从而终止进程的执行。代码第22行的循环是为了等待<code>p1</code>和<code>p2</code>两个进程中的一个结束，这时候主进程还需要向<code>Queue</code>中放置一个大于等于<code>50</code>的值，这样另一个尚未结束的进程也会因为读到这个大于等于<code>50</code>的值而终止。</p><p>进程间通信的方式还有很多，比如使用套接字也可以实现两个进程的通信，甚至于这两个进程并不在同一台主机上，有兴趣的读者可以自行了解。</p><h3 id="简单的总结-7" tabindex="-1"><a class="header-anchor" href="#简单的总结-7" aria-hidden="true">#</a> 简单的总结</h3><p>在 python 中，我们还可以通过<code>subprocess</code>模块的<code>call</code>函数执行其他的命令来创建子进程，相当于就是在我们的程序中调用其他程序，这里我们暂不探讨这些知识，有兴趣的读者可以自行研究。</p><p>对于Python开发者来说，以下情况需要考虑使用多线程：</p><ol><li>程序需要维护许多共享的状态（尤其是可变状态），python 中的列表、字典、集合都是线程安全的（多个线程同时操作同一个列表、字典或集合，不会引发错误和数据问题），所以使用线程而不是进程维护共享状态的代价相对较小。</li><li>程序会花费大量时间在 I/O 操作上，没有太多并行计算的需求且不需占用太多的内存。</li></ol><p>那么在遇到下列情况时，应该考虑使用多进程：</p><ol><li>程序执行计算密集型任务（如：音视频编解码、数据压缩、科学计算等）。</li><li>程序的输入可以并行的分成块，并且可以将运算结果合并。</li><li>程序在内存使用方面没有任何限制且不强依赖于 I/O 操作（如读写文件、套接字等）。</li></ol><h2 id="第36课-python中的并发编程-3" tabindex="-1"><a class="header-anchor" href="#第36课-python中的并发编程-3" aria-hidden="true">#</a> 第36课：Python中的并发编程-3</h2><p>爬虫是典型的 I/O 密集型任务，I/O 密集型任务的特点就是程序会经常性的因为 I/O 操作而进入阻塞状态，比如我们之前使用<code>requests</code>获取页面代码或二进制内容，发出一个请求之后，程序必须要等待网站返回响应之后才能继续运行，如果目标网站不是很给力或者网络状况不是很理想，那么等待响应的时间可能会很久，而在这个过程中整个程序是一直阻塞在那里，没有做任何的事情。通过前面的课程，我们已经知道了可以通过多线程的方式为爬虫提速，使用多线程的本质就是，当一个线程阻塞的时候，程序还有其他的线程可以继续运转，因此整个程序就不会在阻塞和等待中浪费了大量的时间。</p><p>事实上，还有一种非常适合 I/O 密集型任务的并发编程方式，我们称之为异步编程，你也可以将它称为异步 I/O。这种方式并不需要启动多个线程或多个进程来实现并发，它是通过多个子程序相互协作的方式来提升 CPU 的利用率，解决了 I/O 密集型任务 CPU 利用率很低的问题，我一般将这种方式称为“协作式并发”。这里，我不打算探讨操作系统的各种 I/O 模式，因为这对很多读者来说都太过抽象；但是我们得先抛出两组概念给大家，一组叫做“阻塞”和“非阻塞”，一组叫做“同步”和“异步”。</p><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><h4 id="阻塞" tabindex="-1"><a class="header-anchor" href="#阻塞" aria-hidden="true">#</a> 阻塞</h4><p>阻塞状态指程序未得到所需计算资源时被挂起的状态。程序在等待某个操作完成期间，自身无法继续处理其他的事情，则称该程序在该操作上是阻塞的。阻塞随时都可能发生，最典型的就是 I/O 中断（包括网络 I/O 、磁盘 I/O 、用户输入等）、休眠操作、等待某个线程执行结束，甚至包括在 CPU 切换上下文时，程序都无法真正的执行，这就是所谓的阻塞。</p><h4 id="非阻塞" tabindex="-1"><a class="header-anchor" href="#非阻塞" aria-hidden="true">#</a> 非阻塞</h4><p>程序在等待某操作过程中，自身不被阻塞，可以继续处理其他的事情，则称该程序在该操作上是非阻塞的。非阻塞并不是在任何程序级别、任何情况下都可以存在的。仅当程序封装的级别可以囊括独立的子程序单元时，它才可能存在非阻塞状态。显然，某个操作的阻塞可能会导程序耗时以及效率低下，所以我们会希望把它变成非阻塞的。</p><h4 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h4><p>不同程序单元为了完成某个任务，在执行过程中需靠某种通信方式以协调一致，我们称这些程序单元是同步执行的。例如前面讲过的给银行账户存钱的操作，我们在代码中使用了“锁”作为通信信号，让多个存钱操作强制排队顺序执行，这就是所谓的同步。</p><h4 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h4><p>不同程序单元在执行过程中无需通信协调，也能够完成一个任务，这种方式我们就称之为异步。例如，使用爬虫下载页面时，调度程序调用下载程序后，即可调度其他任务，而无需与该下载任务保持通信以协调行为。不同网页的下载、保存等操作都是不相关的，也无需相互通知协调。很显然，异步操作的完成时刻和先后顺序并不能确定。</p>`,101),Hn=s("strong",null,"消息通信机制",-1),zn=s("strong",null,"程序在等待消息时状态",-1),Fn={href:"https://item.jd.com/11880047.html",target:"_blank",rel:"noopener noreferrer"},Wn=t(`<h3 id="生成器和协程" tabindex="-1"><a class="header-anchor" href="#生成器和协程" aria-hidden="true">#</a> 生成器和协程</h3><p>前面我们说过，异步编程是一种“协作式并发”，即通过多个子程序相互协作的方式提升 CPU 的利用率，从而减少程序在阻塞和等待中浪费的时间，最终达到并发的效果。我们可以将多个相互协作的子程序称为“协程”，它是实现异步编程的关键。在介绍协程之前，我们先通过下面的代码，看看什么是生成器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fib</span><span class="token punctuation">(</span>max_count<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>max_count<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        <span class="token keyword">yield</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们编写了一个生成斐波那契数列的生成器，调用上面的<code>fib</code>函数并不是执行该函数获得返回值，因为<code>fib</code>函数中有一个特殊的关键字<code>yield</code>。这个关键字使得<code>fib</code>函数跟普通的函数有些区别，调用该函数会得到一个生成器对象，我们可以通过下面的代码来验证这一点。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>gen_obj <span class="token operator">=</span> fib<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>gen_obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;generator object fib at 0x106daee40&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以使用内置函数<code>next</code>从生成器对象中获取斐波那契数列的值，也可以通过<code>for-in</code>循环对生成器能够提供的值进行遍历，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> value <span class="token keyword">in</span> gen_obj<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器经过预激活，就是一个协程，它可以跟其他子程序协作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">calc_average</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    total<span class="token punctuation">,</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    avg_value <span class="token operator">=</span> <span class="token boolean">None</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        curr_value <span class="token operator">=</span> <span class="token keyword">yield</span> avg_value
        total <span class="token operator">+=</span> curr_value
        counter <span class="token operator">+=</span> <span class="token number">1</span>
        avg_value <span class="token operator">=</span> total <span class="token operator">/</span> counter


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    obj <span class="token operator">=</span> calc_average<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 生成器预激活</span>
    obj<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的<code>main</code>函数首先通过生成器对象的<code>send</code>方法发送一个<code>None</code>值来将其激活为协程，也可以通过<code>next(obj)</code>达到同样的效果。接下来，协程对象会接收<code>main</code>函数发送的数据并产出（<code>yield</code>）数据的平均值。通过上面的例子，不知道大家是否看出两段子程序是怎么“协作”的。</p><h3 id="异步函数" tabindex="-1"><a class="header-anchor" href="#异步函数" aria-hidden="true">#</a> 异步函数</h3><p>python 3.5版本中，引入了两个非常有意思的元素，一个叫<code>async</code>，一个叫<code>await</code>，它们在Python 3.7版本中成为了正式的关键字。通过这两个关键字，可以简化协程代码的编写，可以用更为简单的方式让多个子程序很好的协作起来。我们通过一个例子来加以说明，请大家先看看下面的代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        display<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码每次执行都会依次输出<code>1</code>到<code>9</code>的数字，每个间隔<code>1</code>秒钟，整个代码需要执行大概需要<code>9</code>秒多的时间，这一点我相信大家都能看懂。不知道大家是否意识到，这段代码就是以同步和阻塞的方式执行的，同步可以从代码的输出看出来，而阻塞是指在调用<code>display</code>函数发生休眠时，整个代码的其他部分都不能继续执行，必须等待休眠结束。</p><p>接下来，我们尝试用异步的方式改写上面的代码，让<code>display</code>函数以异步的方式运转。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> time


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    objs <span class="token operator">=</span> <span class="token punctuation">[</span>display<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>objs<span class="token punctuation">)</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>end <span class="token operator">-</span> start<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">秒&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python 中的<code>asyncio</code>模块提供了对异步 I/O 的支持。上面的代码中，我们首先在<code>display</code>函数前面加上了<code>async</code>关键字使其变成一个异步函数，调用异步函数不会执行函数体而是获得一个协程对象。我们将<code>display</code>函数中的<code>time.sleep(1)</code>修改为<code>await asyncio.sleep(1)</code>，二者的区别在于，后者不会让整个代码陷入阻塞，因为<code>await</code>操作会让其他协作的子程序有获得 CPU 资源而得以运转的机会。为了让这些子程序可以协作起来，我们需要将他们放到一个事件循环（实现消息分派传递的系统）上，因为<strong>当协程遭遇 I/O 操作阻塞时，就会到事件循环中监听 I/O 操作是否完成，并注册自身的上下文以及自身的唤醒函数（以便恢复执行），之后该协程就变为阻塞状态</strong>。上面的第12行代码创建了<code>9</code>个协程对象并放到一个列表中，第13行代码通过<code>asyncio</code>模块的<code>get_event_loop</code>函数获得了系统的事件循环，第14行通过<code>asyncio</code>模块的<code>run_until_complete</code>函数将协程对象挂载到事件循环上。执行上面的代码会发现，<code>9</code>个分别会阻塞<code>1</code>秒钟的协程总共只阻塞了约<code>1</code>秒种的时间，因为<strong>阻塞的协程对象会放弃对 CPU 的占有而不是让 CPU 处于闲置状态，这种方式大大的提升了 CPU 的利用率</strong>。而且我们还会注意到，数字并不是按照从<code>1</code>到<code>9</code>的顺序打印输出的，这正是我们想要的结果，说明它们是<strong>异步执行</strong>的。对于爬虫这样的 I/O 密集型任务来说，这种协作式并发在很多场景下是比使用多线程更好的选择，因为这种做法减少了管理和维护多个线程以及多个线程切换所带来的开销。</p><h3 id="aiohttp库" tabindex="-1"><a class="header-anchor" href="#aiohttp库" aria-hidden="true">#</a> aiohttp库</h3><p>我们之前使用的<code>requests</code>三方库并不支持异步 I/O，如果希望使用异步 I/O 的方式来加速爬虫代码的执行，我们可以安装和使用名为<code>aiohttp</code>的三方库。</p><p>安装<code>aiohttp</code>。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install aiohttp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的代码使用<code>aiohttp</code>抓取了<code>10</code>个网站的首页并解析出它们的标题。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> re

<span class="token keyword">import</span> aiohttp
<span class="token keyword">from</span> aiohttp <span class="token keyword">import</span> ClientSession

TITLE_PATTERN <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;&lt;title.*?&gt;(.*?)&lt;/title&gt;&#39;</span><span class="token punctuation">,</span> re<span class="token punctuation">.</span>DOTALL<span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">fetch_page_title</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiohttp<span class="token punctuation">.</span>ClientSession<span class="token punctuation">(</span>headers<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>  <span class="token comment"># type: ClientSession</span>
        <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> ssl<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token keyword">as</span> resp<span class="token punctuation">:</span>
            <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                html_code <span class="token operator">=</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
                matcher <span class="token operator">=</span> TITLE_PATTERN<span class="token punctuation">.</span>search<span class="token punctuation">(</span>html_code<span class="token punctuation">)</span>
                title <span class="token operator">=</span> matcher<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    urls <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;https://www.python.org/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://www.jd.com/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://www.taobao.com/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://git-scm.com/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://www.sohu.com/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://gitee.com/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://www.amazon.com/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://www.usa.gov/&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://www.nasa.gov/&#39;</span>
    <span class="token punctuation">]</span>
    objs <span class="token operator">=</span> <span class="token punctuation">[</span>fetch_page_title<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token keyword">for</span> url <span class="token keyword">in</span> urls<span class="token punctuation">]</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>asyncio<span class="token punctuation">.</span>wait<span class="token punctuation">(</span>objs<span class="token punctuation">)</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！
搜狐
淘宝网 - 淘！我喜欢
百度一下，你就知道
Gitee - 基于 Git 的代码托管和研发协作平台
Git
NASA
Official Guide to Government Information and Services   &amp;#124; USAGov
Amazon.com. Spend less. Smile more.
Welcome to python.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可以看出，网站首页标题的输出顺序跟它们的 URL 在列表中的顺序没有关系。代码的第11行到第13行创建了<code>ClientSession</code>对象，通过它的<code>get</code>方法可以向指定的 URL 发起请求，如第14行所示，跟<code>requests</code>中的<code>Session</code>对象并没有本质区别，唯一的区别是这里使用了异步上下文。代码第16行的<code>await</code>会让因为 I/O 操作阻塞的子程序放弃对 CPU 的占用，这使得其他的子程序可以运转起来去抓取页面。代码的第17行和第18行使用了正则表达式捕获组操作解析网页标题。<code>fetch_page_title</code>是一个被<code>async</code>关键字修饰的异步函数，调用该函数会获得协程对象，如代码第35行所示。后面的代码跟之前的例子没有什么区别，相信大家能够理解。</p><p>大家可以尝试将<code>aiohttp</code>换回到<code>requests</code>，看看不使用异步 I/O 也不使用多线程，到底和上面的代码有什么区别，相信通过这样的对比，大家能够更深刻的理解我们之前强调的几个概念：同步和异步，阻塞和非阻塞。第37课：并发编程在爬虫中的应用</p>`,29),Gn={href:"https://image.so.com/",target:"_blank",rel:"noopener noreferrer"},Xn={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX",target:"_blank",rel:"noopener noreferrer"},Jn=t(`<img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713236.png" style="zoom:50%;"><p>例如，要获取“美女”频道的图片，我们可以请求如下所示的URL，其中参数<code>ch</code>表示请求的频道，<code>=</code>后面的参数值<code>beauty</code>就代表了“美女”频道，参数<code>sn</code>相当于是页码，<code>0</code>表示第一页（共<code>30</code>张图片），<code>30</code>表示第二页，<code>60</code>表示第三页，以此类推。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://image.so.com/zjl?ch=beauty&amp;sn=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="单线程版本" tabindex="-1"><a class="header-anchor" href="#单线程版本" aria-hidden="true">#</a> 单线程版本</h3><p>通过上面的 URL 下载“美女”频道共<code>90</code>张图片。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
example04.py - 单线程版本爬虫
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> os

<span class="token keyword">import</span> requests


<span class="token keyword">def</span> <span class="token function">download_picture</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>url<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;images/beauty/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
            <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;https://image.so.com/zjl?ch=beauty&amp;sn=</span><span class="token interpolation"><span class="token punctuation">{</span>page <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
            pic_dict_list <span class="token operator">=</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">for</span> pic_dict <span class="token keyword">in</span> pic_dict_list<span class="token punctuation">:</span>
                download_picture<span class="token punctuation">(</span>pic_dict<span class="token punctuation">[</span><span class="token string">&#39;qhimg_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 macOS 或 Linux 系统上，我们可以使用<code>time</code>命令来了解上面代码的执行时间以及 CPU 的利用率，如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>time python3 example04.py 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是单线程爬虫代码在我的电脑上执行的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 example04.py  2.36s user 0.39s system 12% cpu 21.578 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们只需要关注代码的总耗时为<code>21.578</code>秒，CPU 利用率为<code>12%</code>。</p><h3 id="多线程版本" tabindex="-1"><a class="header-anchor" href="#多线程版本" aria-hidden="true">#</a> 多线程版本</h3><p>我们使用之前讲到过的线程池技术，将上面的代码修改为多线程版本。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
example05.py - 多线程版本爬虫
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> os
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor

<span class="token keyword">import</span> requests


<span class="token keyword">def</span> <span class="token function">download_picture</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>url<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;images/beauty/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
            <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;https://image.so.com/zjl?ch=beauty&amp;sn=</span><span class="token interpolation"><span class="token punctuation">{</span>page <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                pic_dict_list <span class="token operator">=</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>
                <span class="token keyword">for</span> pic_dict <span class="token keyword">in</span> pic_dict_list<span class="token punctuation">:</span>
                    pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>download_picture<span class="token punctuation">,</span> pic_dict<span class="token punctuation">[</span><span class="token string">&#39;qhimg_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下所示的命令。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>time python3 example05.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码的执行结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 example05.py  2.65s user 0.40s system 95% cpu 3.193 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="异步i-o版本" tabindex="-1"><a class="header-anchor" href="#异步i-o版本" aria-hidden="true">#</a> 异步I/O版本</h3><p>我们使用<code>aiohttp</code>将上面的代码修改为异步 I/O 的版本。为了以异步 I/O 的方式实现网络资源的获取和写文件操作，我们首先得安装三方库<code>aiohttp</code>和<code>aiofile</code>，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install aiohttp aiofile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>aiohttp</code> 的用法在之前的课程中已经做过简要介绍，<code>aiofile</code>模块中的<code>async_open</code>函数跟 python 内置函数<code>open</code>的用法大致相同，只不过它支持异步操作。下面是异步 I/O 版本的爬虫代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
example06.py - 异步I/O版本爬虫
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> json
<span class="token keyword">import</span> os

<span class="token keyword">import</span> aiofile
<span class="token keyword">import</span> aiohttp


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">download_picture</span><span class="token punctuation">(</span>session<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>url<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> ssl<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token keyword">as</span> resp<span class="token punctuation">:</span>
        <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
            data <span class="token operator">=</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">async</span> <span class="token keyword">with</span> aiofile<span class="token punctuation">.</span>async_open<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;images/beauty/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
                <span class="token keyword">await</span> <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>data<span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">fetch_json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiohttp<span class="token punctuation">.</span>ClientSession<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>
        <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
                url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;https://image.so.com/zjl?ch=beauty&amp;sn=</span><span class="token interpolation"><span class="token punctuation">{</span>page <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
                ssl<span class="token operator">=</span><span class="token boolean">False</span>
            <span class="token punctuation">)</span> <span class="token keyword">as</span> resp<span class="token punctuation">:</span>
                <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                    json_str <span class="token operator">=</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    result <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>json_str<span class="token punctuation">)</span>
                    <span class="token keyword">for</span> pic_dict <span class="token keyword">in</span> result<span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                        <span class="token keyword">await</span> download_picture<span class="token punctuation">(</span>session<span class="token punctuation">,</span> pic_dict<span class="token punctuation">[</span><span class="token string">&#39;qhimg_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>fetch_json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下所示的命令。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>time python3 example06.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码的执行结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 example06.py  0.82s user 0.21s system 27% cpu 3.782 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>通过上面三段代码执行结果的比较，我们可以得出一个结论，使用多线程和异步 I/O 都可以改善爬虫程序的性能，因为我们不用将时间浪费在因 I/O 操作造成的等待和阻塞上，而<code>time</code>命令的执行结果也告诉我们，单线程的代码 CPU 利用率仅仅只有<code>12%</code>，而多线程版本的 CPU 利用率则高达<code>95%</code>；单线程版本的爬虫执行时间约<code>21</code>秒，而多线程和异步 I/O 的版本仅执行了<code>3</code>秒钟。另外，在运行时间差别不大的情况下，多线程的代码比异步 I/O 的代码耗费了更多的 CPU 资源，这是因为多线程的调度和切换也需要花费 CPU 时间。至此，三种方式在 I/O 密集型任务上的优劣已经一目了然，当然这只是在我的电脑上跑出来的结果。如果网络状况不是很理想或者目标网站响应很慢，那么使用多线程和异步 I/O 的优势将更为明显，有兴趣的读者可以自行试验。</p><h2 id="第37课-并发编程在爬虫中的应用" tabindex="-1"><a class="header-anchor" href="#第37课-并发编程在爬虫中的应用" aria-hidden="true">#</a> 第37课：并发编程在爬虫中的应用</h2>`,30),Yn={href:"https://image.so.com/",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX",target:"_blank",rel:"noopener noreferrer"},Kn=t(`<img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713558.png" style="zoom:50%;"><p>例如，要获取“美女”频道的图片，我们可以请求如下所示的URL，其中参数<code>ch</code>表示请求的频道，<code>=</code>后面的参数值<code>beauty</code>就代表了“美女”频道，参数<code>sn</code>相当于是页码，<code>0</code>表示第一页（共<code>30</code>张图片），<code>30</code>表示第二页，<code>60</code>表示第三页，以此类推。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://image.so.com/zjl?ch=beauty&amp;sn=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="单线程版本-1" tabindex="-1"><a class="header-anchor" href="#单线程版本-1" aria-hidden="true">#</a> 单线程版本</h3><p>通过上面的 URL 下载“美女”频道共<code>90</code>张图片。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
example04.py - 单线程版本爬虫
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> os

<span class="token keyword">import</span> requests


<span class="token keyword">def</span> <span class="token function">download_picture</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>url<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;images/beauty/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
            <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;https://image.so.com/zjl?ch=beauty&amp;sn=</span><span class="token interpolation"><span class="token punctuation">{</span>page <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
            pic_dict_list <span class="token operator">=</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">for</span> pic_dict <span class="token keyword">in</span> pic_dict_list<span class="token punctuation">:</span>
                download_picture<span class="token punctuation">(</span>pic_dict<span class="token punctuation">[</span><span class="token string">&#39;qhimg_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 macOS 或 Linux 系统上，我们可以使用<code>time</code>命令来了解上面代码的执行时间以及 CPU 的利用率，如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>time python3 example04.py 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是单线程爬虫代码在我的电脑上执行的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 example04.py  2.36s user 0.39s system 12% cpu 21.578 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们只需要关注代码的总耗时为<code>21.578</code>秒，CPU 利用率为<code>12%</code>。</p><h3 id="多线程版本-1" tabindex="-1"><a class="header-anchor" href="#多线程版本-1" aria-hidden="true">#</a> 多线程版本</h3><p>我们使用之前讲到过的线程池技术，将上面的代码修改为多线程版本。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
example05.py - 多线程版本爬虫
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> os
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor

<span class="token keyword">import</span> requests


<span class="token keyword">def</span> <span class="token function">download_picture</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>url<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;images/beauty/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
            <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
        <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;https://image.so.com/zjl?ch=beauty&amp;sn=</span><span class="token interpolation"><span class="token punctuation">{</span>page <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                pic_dict_list <span class="token operator">=</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>
                <span class="token keyword">for</span> pic_dict <span class="token keyword">in</span> pic_dict_list<span class="token punctuation">:</span>
                    pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>download_picture<span class="token punctuation">,</span> pic_dict<span class="token punctuation">[</span><span class="token string">&#39;qhimg_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下所示的命令。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>time python3 example05.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码的执行结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 example05.py  2.65s user 0.40s system 95% cpu 3.193 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="异步i-o版本-1" tabindex="-1"><a class="header-anchor" href="#异步i-o版本-1" aria-hidden="true">#</a> 异步I/O版本</h3><p>我们使用<code>aiohttp</code>将上面的代码修改为异步 I/O 的版本。为了以异步 I/O 的方式实现网络资源的获取和写文件操作，我们首先得安装三方库<code>aiohttp</code>和<code>aiofile</code>，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install aiohttp aiofile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>aiohttp</code> 的用法在之前的课程中已经做过简要介绍，<code>aiofile</code>模块中的<code>async_open</code>函数跟 python 内置函数<code>open</code>的用法大致相同，只不过它支持异步操作。下面是异步 I/O 版本的爬虫代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
example06.py - 异步I/O版本爬虫
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> json
<span class="token keyword">import</span> os

<span class="token keyword">import</span> aiofile
<span class="token keyword">import</span> aiohttp


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">download_picture</span><span class="token punctuation">(</span>session<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>url<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> ssl<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token keyword">as</span> resp<span class="token punctuation">:</span>
        <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
            data <span class="token operator">=</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">async</span> <span class="token keyword">with</span> aiofile<span class="token punctuation">.</span>async_open<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;images/beauty/</span><span class="token interpolation"><span class="token punctuation">{</span>filename<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
                <span class="token keyword">await</span> <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>data<span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">fetch_json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiohttp<span class="token punctuation">.</span>ClientSession<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>
        <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
                url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;https://image.so.com/zjl?ch=beauty&amp;sn=</span><span class="token interpolation"><span class="token punctuation">{</span>page <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">,</span>
                ssl<span class="token operator">=</span><span class="token boolean">False</span>
            <span class="token punctuation">)</span> <span class="token keyword">as</span> resp<span class="token punctuation">:</span>
                <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
                    json_str <span class="token operator">=</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    result <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>json_str<span class="token punctuation">)</span>
                    <span class="token keyword">for</span> pic_dict <span class="token keyword">in</span> result<span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                        <span class="token keyword">await</span> download_picture<span class="token punctuation">(</span>session<span class="token punctuation">,</span> pic_dict<span class="token punctuation">[</span><span class="token string">&#39;qhimg_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&#39;images/beauty&#39;</span><span class="token punctuation">)</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_event_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>run_until_complete<span class="token punctuation">(</span>fetch_json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    loop<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下所示的命令。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>time python3 example06.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码的执行结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 example06.py  0.82s user 0.21s system 27% cpu 3.782 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3><p>通过上面三段代码执行结果的比较，我们可以得出一个结论，使用多线程和异步 I/O 都可以改善爬虫程序的性能，因为我们不用将时间浪费在因 I/O 操作造成的等待和阻塞上，而<code>time</code>命令的执行结果也告诉我们，单线程的代码 CPU 利用率仅仅只有<code>12%</code>，而多线程版本的 CPU 利用率则高达<code>95%</code>；单线程版本的爬虫执行时间约<code>21</code>秒，而多线程和异步 I/O 的版本仅执行了<code>3</code>秒钟。另外，在运行时间差别不大的情况下，多线程的代码比异步 I/O 的代码耗费了更多的 CPU 资源，这是因为多线程的调度和切换也需要花费 CPU 时间。至此，三种方式在 I/O 密集型任务上的优劣已经一目了然，当然这只是在我的电脑上跑出来的结果。如果网络状况不是很理想或者目标网站响应很慢，那么使用多线程和异步 I/O 的优势将更为明显，有兴趣的读者可以自行试验。</p><h2 id="第38课-抓取网页动态内容" tabindex="-1"><a class="header-anchor" href="#第38课-抓取网页动态内容" aria-hidden="true">#</a> 第38课：抓取网页动态内容</h2><p>根据权威机构发布的全球互联网可访问性审计报告，全球约有四分之三的网站其内容或部分内容是通过JavaScript动态生成的，这就意味着在浏览器窗口中“查看网页源代码”时无法在HTML代码中找到这些内容，也就是说我们之前用的抓取数据的方式无法正常运转了。解决这样的问题基本上有两种方案，一是获取提供动态内容的数据接口，这种方式也适用于抓取手机 App 的数据；另一种是通过自动化测试工具 Selenium 运行浏览器获取渲染后的动态内容。对于第一种方案，我们可以使用浏览器的“开发者工具”或者更为专业的抓包工具（如：Charles、Fiddler、Wireshark等）来获取到数据接口，后续的操作跟上一个章节中讲解的获取“360图片”网站的数据是一样的，这里我们不再进行赘述。这一章我们重点讲解如何使用自动化测试工具 Selenium 来获取网站的动态内容。</p><h3 id="selenium-介绍" tabindex="-1"><a class="header-anchor" href="#selenium-介绍" aria-hidden="true">#</a> Selenium 介绍</h3>`,32),$n={href:"https://chromedriver.chromium.org/downloads",target:"_blank",rel:"noopener noreferrer"},Zn=t(`<img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713613.png" style="zoom:35%;"><h3 id="使用selenium" tabindex="-1"><a class="header-anchor" href="#使用selenium" aria-hidden="true">#</a> 使用Selenium</h3><p>我们可以先通过<code>pip</code>来安装 Selenium，命令如下所示。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pip install selenium
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="加载页面" tabindex="-1"><a class="header-anchor" href="#加载页面" aria-hidden="true">#</a> 加载页面</h4><p>接下来，我们通过下面的代码驱动 Chrome 浏览器打开百度。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

<span class="token comment"># 创建Chrome浏览器对象</span>
browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 加载指定的页面</span>
browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不愿意使用 Chrome 浏览器，也可以修改上面的代码操控其他浏览器，只需创建对应的浏览器对象（如 Firefox、Safari 等）即可。运行上面的程序，如果看到如下所示的错误提示，那是说明我们还没有将 Chrome 浏览器的驱动添加到 PATH 环境变量中，也没有在程序中指定 Chrome 浏览器驱动所在的位置。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>selenium.common.exceptions.WebDriverException: Message: &#39;chromedriver&#39; executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决这个问题的办法有三种：</p><ol><li><p>将下载的 ChromeDriver 放到已有的 PATH 环境变量下，建议直接跟 python 解释器放在同一个目录，因为之前安装 python 的时候我们已经将 python 解释器的路径放到 PATH 环境变量中了。</p></li><li><p>将 ChromeDriver 放到项目虚拟环境下的 <code>bin</code> 文件夹中（Windows 系统对应的目录是 <code>Scripts</code>），这样 ChromeDriver 就跟虚拟环境下的 python 解释器在同一个位置，肯定是能够找到的。</p></li><li><p>修改上面的代码，在创建 Chrome 对象时，通过<code>service</code>参数配置<code>Service</code>对象，并通过创建<code>Service</code>对象的<code>executable_path</code>参数指定 ChromeDriver 所在的位置，如下所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>service <span class="token keyword">import</span> Service

browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>service<span class="token operator">=</span>Service<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">&#39;venv/bin/chromedriver&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="查找元素和模拟用户行为" tabindex="-1"><a class="header-anchor" href="#查找元素和模拟用户行为" aria-hidden="true">#</a> 查找元素和模拟用户行为</h4><p>接下来，我们可以尝试模拟用户在百度首页的文本框输入搜索关键字并点击“百度一下”按钮。在完成页面加载后，可以通过<code>Chrome</code>对象的<code>find_element</code>和<code>find_elements</code>方法来获取页面元素，Selenium 支持多种获取元素的方式，包括：CSS 选择器、XPath、元素名字（标签名）、元素 ID、类名等，前者可以获取单个页面元素（<code>WebElement</code>对象），后者可以获取多个页面元素构成的列表。获取到<code>WebElement</code>对象以后，可以通过<code>send_keys</code>来模拟用户输入行为，可以通过<code>click</code>来模拟用户点击操作，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By

browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 通过元素ID获取元素</span>
kw_input <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&#39;kw&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 模拟用户输入行为</span>
kw_input<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 通过CSS选择器获取元素</span>
su_button <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&#39;#su&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 模拟用户点击行为</span>
su_button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要执行一个系列动作，例如模拟拖拽操作，可以创建<code>ActionChains</code>对象，有兴趣的读者可以自行研究。</p><h4 id="隐式等待和显式等待" tabindex="-1"><a class="header-anchor" href="#隐式等待和显式等待" aria-hidden="true">#</a> 隐式等待和显式等待</h4><p>这里还有一个细节需要大家知道，网页上的元素可能是动态生成的，在我们使用<code>find_element</code>或<code>find_elements</code>方法获取的时候，可能还没有完成渲染，这时会引发<code>NoSuchElementException</code>错误。为了解决这个问题，我们可以使用隐式等待的方式，通过设置等待时间让浏览器完成对页面元素的渲染。除此之外，我们还可以使用显示等待，通过创建<code>WebDriverWait</code>对象，并设置等待时间和条件，当条件没有满足时，我们可以先等待再尝试进行后续的操作，具体的代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support <span class="token keyword">import</span> expected_conditions
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>wait <span class="token keyword">import</span> WebDriverWait

browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 设置浏览器窗口大小</span>
browser<span class="token punctuation">.</span>set_window_size<span class="token punctuation">(</span><span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span>
browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 设置隐式等待时间为10秒</span>
browser<span class="token punctuation">.</span>implicitly_wait<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
kw_input <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&#39;kw&#39;</span><span class="token punctuation">)</span>
kw_input<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">)</span>
su_button <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&#39;#su&#39;</span><span class="token punctuation">)</span>
su_button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 创建显示等待对象</span>
wait_obj <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>browser<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment"># 设置等待条件（等搜索结果的div出现）</span>
wait_obj<span class="token punctuation">.</span>until<span class="token punctuation">(</span>
    expected_conditions<span class="token punctuation">.</span>presence_of_element_located<span class="token punctuation">(</span>
        <span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&#39;#content_left&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment"># 截屏</span>
browser<span class="token punctuation">.</span>get_screenshot_as_file<span class="token punctuation">(</span><span class="token string">&#39;python_result.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面设置的等待条件<code>presence_of_element_located</code>表示等待指定元素出现，下面的表格列出了常用的等待条件及其含义。</p><table><thead><tr><th>等待条件</th><th>具体含义</th></tr></thead><tbody><tr><td><code>title_is / title_contains</code></td><td>标题是指定的内容 / 标题包含指定的内容</td></tr><tr><td><code>visibility_of</code></td><td>元素可见</td></tr><tr><td><code>presence_of_element_located</code></td><td>定位的元素加载完成</td></tr><tr><td><code>visibility_of_element_located</code></td><td>定位的元素变得可见</td></tr><tr><td><code>invisibility_of_element_located</code></td><td>定位的元素变得不可见</td></tr><tr><td><code>presence_of_all_elements_located</code></td><td>定位的所有元素加载完成</td></tr><tr><td><code>text_to_be_present_in_element</code></td><td>元素包含指定的内容</td></tr><tr><td><code>text_to_be_present_in_element_value</code></td><td>元素的<code>value</code>属性包含指定的内容</td></tr><tr><td><code>frame_to_be_available_and_switch_to_it</code></td><td>载入并切换到指定的内部窗口</td></tr><tr><td><code>element_to_be_clickable</code></td><td>元素可点击</td></tr><tr><td><code>element_to_be_selected</code></td><td>元素被选中</td></tr><tr><td><code>element_located_to_be_selected</code></td><td>定位的元素被选中</td></tr><tr><td><code>alert_is_present</code></td><td>出现 Alert 弹窗</td></tr></tbody></table><h4 id="执行javascript代码" tabindex="-1"><a class="header-anchor" href="#执行javascript代码" aria-hidden="true">#</a> 执行JavaScript代码</h4><p>对于使用瀑布式加载的页面，如果希望在浏览器窗口中加载更多的内容，可以通过浏览器对象的<code>execute_scripts</code>方法执行 JavaScript 代码来实现。对于一些高级的爬取操作，也很有可能会用到类似的操作，如果你的爬虫代码需要 JavaScript 的支持，建议先对 JavaScript 进行适当的了解，尤其是 JavaScript 中的 BOM 和 DOM 操作。我们在上面的代码中截屏之前加入下面的代码，这样就可以利用 JavaScript 将网页滚到最下方。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 执行JavaScript代码</span>
browser<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token string">&#39;document.documentElement.scrollTop = document.documentElement.scrollHeight&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="selenium反爬的破解" tabindex="-1"><a class="header-anchor" href="#selenium反爬的破解" aria-hidden="true">#</a> Selenium反爬的破解</h4><p>有一些网站专门针对 Selenium 设置了反爬措施，因为使用 Selenium 驱动的浏览器，在控制台中可以看到如下所示的<code>webdriver</code>属性值为<code>true</code>，如果要绕过这项检查，可以在加载页面之前，先通过执行 JavaScript 代码将其修改为<code>undefined</code>。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713992.png" style="zoom:50%;"><p>另一方面，我们还可以将浏览器窗口上的“Chrome正受到自动测试软件的控制”隐藏掉，完整的代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建Chrome参数对象</span>
options <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 添加试验性参数</span>
options<span class="token punctuation">.</span>add_experimental_option<span class="token punctuation">(</span><span class="token string">&#39;excludeSwitches&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;enable-automation&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>add_experimental_option<span class="token punctuation">(</span><span class="token string">&#39;useAutomationExtension&#39;</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token comment"># 创建Chrome浏览器对象并传入参数</span>
browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span>options<span class="token punctuation">)</span>
<span class="token comment"># 执行Chrome开发者协议命令（在加载页面时执行指定的JavaScript代码）</span>
browser<span class="token punctuation">.</span>execute_cdp_cmd<span class="token punctuation">(</span>
    <span class="token string">&#39;Page.addScriptToEvaluateOnNewDocument&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&#39;source&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Object.defineProperty(navigator, &quot;webdriver&quot;, {get: () =&gt; undefined})&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
browser<span class="token punctuation">.</span>set_window_size<span class="token punctuation">(</span><span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span>
browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="无头浏览器" tabindex="-1"><a class="header-anchor" href="#无头浏览器" aria-hidden="true">#</a> 无头浏览器</h4><p>很多时候，我们在爬取数据时并不需要看到浏览器窗口，只要有 Chrome 浏览器以及对应的驱动程序，我们的爬虫就能够运转起来。如果不想看到浏览器窗口，我们可以通过下面的方式设置使用无头浏览器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>options <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--headless&#39;</span><span class="token punctuation">)</span>
browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api参考" tabindex="-1"><a class="header-anchor" href="#api参考" aria-hidden="true">#</a> API参考</h3>`,32),ns=s("code",null,"WebElement",-1),ss={href:"https://selenium-python-zh.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"},as=t(`<h4 id="浏览器对象" tabindex="-1"><a class="header-anchor" href="#浏览器对象" aria-hidden="true">#</a> 浏览器对象</h4><p>表1. 常用属性</p><table><thead><tr><th>属性名</th><th>描述</th></tr></thead><tbody><tr><td><code>current_url</code></td><td>当前页面的URL</td></tr><tr><td><code>current_window_handle</code></td><td>当前窗口的句柄（引用）</td></tr><tr><td><code>name</code></td><td>浏览器的名称</td></tr><tr><td><code>orientation</code></td><td>当前设备的方向（横屏、竖屏）</td></tr><tr><td><code>page_source</code></td><td>当前页面的源代码（包括动态内容）</td></tr><tr><td><code>title</code></td><td>当前页面的标题</td></tr><tr><td><code>window_handles</code></td><td>浏览器打开的所有窗口的句柄</td></tr></tbody></table><p>表2. 常用方法</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>back</code> / <code>forward</code></td><td>在浏览历史记录中后退/前进</td></tr><tr><td><code>close</code> / <code>quit</code></td><td>关闭当前浏览器窗口 / 退出浏览器实例</td></tr><tr><td><code>get</code></td><td>加载指定 URL 的页面到浏览器中</td></tr><tr><td><code>maximize_window</code></td><td>将浏览器窗口最大化</td></tr><tr><td><code>refresh</code></td><td>刷新当前页面</td></tr><tr><td><code>set_page_load_timeout</code></td><td>设置页面加载超时时间</td></tr><tr><td><code>set_script_timeout</code></td><td>设置 JavaScript 执行超时时间</td></tr><tr><td><code>implicit_wait</code></td><td>设置等待元素被找到或目标指令完成</td></tr><tr><td><code>get_cookie</code> / <code>get_cookies</code></td><td>获取指定的Cookie / 获取所有Cookie</td></tr><tr><td><code>add_cookie</code></td><td>添加 Cookie 信息</td></tr><tr><td><code>delete_cookie</code> / <code>delete_all_cookies</code></td><td>删除指定的 Cookie / 删除所有 Cookie</td></tr><tr><td><code>find_element</code> / <code>find_elements</code></td><td>查找单个元素 / 查找一系列元素</td></tr></tbody></table><h4 id="webelement对象" tabindex="-1"><a class="header-anchor" href="#webelement对象" aria-hidden="true">#</a> WebElement对象</h4><p>表1. WebElement常用属性</p><table><thead><tr><th>属性名</th><th>描述</th></tr></thead><tbody><tr><td><code>location</code></td><td>元素的位置</td></tr><tr><td><code>size</code></td><td>元素的尺寸</td></tr><tr><td><code>text</code></td><td>元素的文本内容</td></tr><tr><td><code>id</code></td><td>元素的 ID</td></tr><tr><td><code>tag_name</code></td><td>元素的标签名</td></tr></tbody></table><p>表2. 常用方法</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>clear</code></td><td>清空文本框或文本域中的内容</td></tr><tr><td><code>click</code></td><td>点击元素</td></tr><tr><td><code>get_attribute</code></td><td>获取元素的属性值</td></tr><tr><td><code>is_displayed</code></td><td>判断元素对于用户是否可见</td></tr><tr><td><code>is_enabled</code></td><td>判断元素是否处于可用状态</td></tr><tr><td><code>is_selected</code></td><td>判断元素（单选框和复选框）是否被选中</td></tr><tr><td><code>send_keys</code></td><td>模拟输入文本</td></tr><tr><td><code>submit</code></td><td>提交表单</td></tr><tr><td><code>value_of_css_property</code></td><td>获取指定的CSS属性值</td></tr><tr><td><code>find_element</code> / <code>find_elements</code></td><td>获取单个子元素 / 获取一系列子元素</td></tr><tr><td><code>screenshot</code></td><td>为元素生成快照</td></tr></tbody></table><h3 id="简单案例" tabindex="-1"><a class="header-anchor" href="#简单案例" aria-hidden="true">#</a> 简单案例</h3><p>下面的例子演示了如何使用 Selenium 从“360图片”网站搜索和下载图片。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> time
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor

<span class="token keyword">import</span> requests
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>keys <span class="token keyword">import</span> Keys

DOWNLOAD_PATH <span class="token operator">=</span> <span class="token string">&#39;images/&#39;</span>


<span class="token keyword">def</span> <span class="token function">download_picture</span><span class="token punctuation">(</span>picture_url<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    下载保存图片
    :param picture_url: 图片的URL
    &quot;&quot;&quot;</span>
    filename <span class="token operator">=</span> picture_url<span class="token punctuation">[</span>picture_url<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>picture_url<span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>DOWNLOAD_PATH<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
        <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>resp<span class="token punctuation">.</span>content<span class="token punctuation">)</span>


<span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>DOWNLOAD_PATH<span class="token punctuation">)</span><span class="token punctuation">:</span>
    os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>DOWNLOAD_PATH<span class="token punctuation">)</span>
browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://image.so.com/z?ch=beauty&#39;</span><span class="token punctuation">)</span>
browser<span class="token punctuation">.</span>implicitly_wait<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
kw_input <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&#39;input[name=q]&#39;</span><span class="token punctuation">)</span>
kw_input<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;苍老师&#39;</span><span class="token punctuation">)</span>
kw_input<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>ENTER<span class="token punctuation">)</span>
<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    browser<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>
        <span class="token string">&#39;document.documentElement.scrollTop = document.documentElement.scrollHeight&#39;</span>
    <span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
imgs <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&#39;div.waterfall img&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pool<span class="token punctuation">:</span>
    <span class="token keyword">for</span> img <span class="token keyword">in</span> imgs<span class="token punctuation">:</span>
        pic_url <span class="token operator">=</span> img<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
        pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>download_picture<span class="token punctuation">,</span> pic_url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码，检查指定的目录下是否下载了根据关键词搜索到的图片。</p><h2 id="第39课-爬虫框架scrapy简介" tabindex="-1"><a class="header-anchor" href="#第39课-爬虫框架scrapy简介" aria-hidden="true">#</a> 第39课：爬虫框架Scrapy简介</h2><p>当你写了很多个爬虫程序之后，你会发现每次写爬虫程序时，都需要将页面获取、页面解析、爬虫调度、异常处理、反爬应对这些代码从头至尾实现一遍，这里面有很多工作其实都是简单乏味的重复劳动。那么，有没有什么办法可以提升我们编写爬虫代码的效率呢？答案是肯定的，那就是利用爬虫框架，而在所有的爬虫框架中，Scrapy 应该是最流行、最强大的框架。</p><h3 id="scrapy-概述" tabindex="-1"><a class="header-anchor" href="#scrapy-概述" aria-hidden="true">#</a> Scrapy 概述</h3><p>Scrapy 是基于 python 的一个非常流行的网络爬虫框架，可以用来抓取 Web 站点并从页面中提取结构化的数据。下图展示了 Scrapy 的基本架构，其中包含了主要组件和系统的数据处理流程（图中带数字的红色箭头）。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713472.png" alt="" loading="lazy"></p><h4 id="scrapy的组件" tabindex="-1"><a class="header-anchor" href="#scrapy的组件" aria-hidden="true">#</a> Scrapy的组件</h4><p>我们先来说说 Scrapy 中的组件。</p><ol><li>Scrapy 引擎（Engine）：用来控制整个系统的数据处理流程。</li><li>调度器（Scheduler）：调度器从引擎接受请求并排序列入队列，并在引擎发出请求后返还给它们。</li><li>下载器（Downloader）：下载器的主要职责是抓取网页并将网页内容返还给蜘蛛（Spiders）。</li><li>蜘蛛程序（Spiders）：蜘蛛是用户自定义的用来解析网页并抓取特定URL的类，每个蜘蛛都能处理一个域名或一组域名，简单的说就是用来定义特定网站的抓取和解析规则的模块。</li><li>数据管道（Item Pipeline）：管道的主要责任是负责处理有蜘蛛从网页中抽取的数据条目，它的主要任务是清理、验证和存储数据。当页面被蜘蛛解析后，将被发送到数据管道，并经过几个特定的次序处理数据。每个数据管道组件都是一个 python 类，它们获取了数据条目并执行对数据条目进行处理的方法，同时还需要确定是否需要在数据管道中继续执行下一步或是直接丢弃掉不处理。数据管道通常执行的任务有：清理 HTML 数据、验证解析到的数据（检查条目是否包含必要的字段）、检查是不是重复数据（如果重复就丢弃）、将解析到的数据存储到数据库（关系型数据库或 NoSQL 数据库）中。</li><li>中间件（Middlewares）：中间件是介于引擎和其他组件之间的一个钩子框架，主要是为了提供自定义的代码来拓展 Scrapy 的功能，包括下载器中间件和蜘蛛中间件。</li></ol><h4 id="数据处理流程" tabindex="-1"><a class="header-anchor" href="#数据处理流程" aria-hidden="true">#</a> 数据处理流程</h4><p>Scrapy 的整个数据处理流程由引擎进行控制，通常的运转流程包括以下的步骤：</p><ol><li><p>引擎询问蜘蛛需要处理哪个网站，并让蜘蛛将第一个需要处理的 URL 交给它。</p></li><li><p>引擎让调度器将需要处理的 URL 放在队列中。</p></li><li><p>引擎从调度那获取接下来进行爬取的页面。</p></li><li><p>调度将下一个爬取的 URL 返回给引擎，引擎将它通过下载中间件发送到下载器。</p></li><li><p>当网页被下载器下载完成以后，响应内容通过下载中间件被发送到引擎；如果下载失败了，引擎会通知调度器记录这个 URL，待会再重新下载。</p></li><li><p>引擎收到下载器的响应并将它通过蜘蛛中间件发送到蜘蛛进行处理。</p></li><li><p>蜘蛛处理响应并返回爬取到的数据条目，此外还要将需要跟进的新的 URL 发送给引擎。</p></li><li><p>引擎将抓取到的数据条目送入数据管道，把新的 URL 发送给调度器放入队列中。</p></li></ol><p>上述操作中的第2步到第8步会一直重复直到调度器中没有需要请求的 URL，爬虫就停止工作。</p><h3 id="安装和使用scrapy" tabindex="-1"><a class="header-anchor" href="#安装和使用scrapy" aria-hidden="true">#</a> 安装和使用Scrapy</h3><p>可以使用 python 的包管理工具<code>pip</code>来安装 Scrapy。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pip install scrapy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在命令行中使用<code>scrapy</code>命令创建名为<code>demo</code>的项目。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>scrapy startproject demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>项目的目录结构如下图所示。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>demo
|____ demo
|________ spiders
|____________ __init__.py
|________ __init__.py
|________ items.py
|________ middlewares.py
|________ pipelines.py
|________ settings.py
|____ scrapy.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到<code>demo</code> 目录，用下面的命令创建名为<code>douban</code>的蜘蛛程序。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>scrapy genspider douban movie.douban.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="一个简单的例子" tabindex="-1"><a class="header-anchor" href="#一个简单的例子" aria-hidden="true">#</a> 一个简单的例子</h4><p>接下来，我们实现一个爬取豆瓣电影 Top250 电影标题、评分和金句的爬虫。</p><ol><li><p>在<code>items.py</code>的<code>Item</code>类中定义字段，这些字段用来保存数据，方便后续的操作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scrapy


<span class="token keyword">class</span> <span class="token class-name">DoubanItem</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Item<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Field<span class="token punctuation">(</span><span class="token punctuation">)</span>
    score <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Field<span class="token punctuation">(</span><span class="token punctuation">)</span>
    motto <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Field<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改<code>spiders</code>文件夹中名为<code>douban.py</code> 的文件，它是蜘蛛程序的核心，需要我们添加解析页面的代码。在这里，我们可以通过对<code>Response</code>对象的解析，获取电影的信息，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scrapy
<span class="token keyword">from</span> scrapy <span class="token keyword">import</span> Selector<span class="token punctuation">,</span> Request
<span class="token keyword">from</span> scrapy<span class="token punctuation">.</span>http <span class="token keyword">import</span> HtmlResponse

<span class="token keyword">from</span> demo<span class="token punctuation">.</span>items <span class="token keyword">import</span> MovieItem


<span class="token keyword">class</span> <span class="token class-name">DoubanSpider</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&#39;douban&#39;</span>
    allowed_domains <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;movie.douban.com&#39;</span><span class="token punctuation">]</span>
    start_urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;https://movie.douban.com/top250?start=0&amp;filter=&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> response<span class="token punctuation">:</span> HtmlResponse<span class="token punctuation">)</span><span class="token punctuation">:</span>
        sel <span class="token operator">=</span> Selector<span class="token punctuation">(</span>response<span class="token punctuation">)</span>
        movie_items <span class="token operator">=</span> sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;#content &gt; div &gt; div.article &gt; ol &gt; li&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> movie_sel <span class="token keyword">in</span> movie_items<span class="token punctuation">:</span>
            item <span class="token operator">=</span> MovieItem<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.title::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.rating_num::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;motto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.inq::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">yield</span> item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码不难看出，我们可以使用 CSS 选择器进行页面解析。当然，如果你愿意也可以使用 XPath 或正则表达式进行页面解析，对应的方法分别是<code>xpath</code>和<code>re</code>。</p><p>如果还要生成后续爬取的请求，我们可以用<code>yield</code>产出<code>Request</code>对象。<code>Request</code>对象有两个非常重要的属性，一个是<code>url</code>，它代表了要请求的地址；一个是<code>callback</code>，它代表了获得响应之后要执行的回调函数。我们可以将上面的代码稍作修改。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scrapy
<span class="token keyword">from</span> scrapy <span class="token keyword">import</span> Selector<span class="token punctuation">,</span> Request
<span class="token keyword">from</span> scrapy<span class="token punctuation">.</span>http <span class="token keyword">import</span> HtmlResponse

<span class="token keyword">from</span> demo<span class="token punctuation">.</span>items <span class="token keyword">import</span> MovieItem


<span class="token keyword">class</span> <span class="token class-name">DoubanSpider</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&#39;douban&#39;</span>
    allowed_domains <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;movie.douban.com&#39;</span><span class="token punctuation">]</span>
    start_urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;https://movie.douban.com/top250?start=0&amp;filter=&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> response<span class="token punctuation">:</span> HtmlResponse<span class="token punctuation">)</span><span class="token punctuation">:</span>
        sel <span class="token operator">=</span> Selector<span class="token punctuation">(</span>response<span class="token punctuation">)</span>
        movie_items <span class="token operator">=</span> sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;#content &gt; div &gt; div.article &gt; ol &gt; li&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> movie_sel <span class="token keyword">in</span> movie_items<span class="token punctuation">:</span>
            item <span class="token operator">=</span> MovieItem<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.title::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.rating_num::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;motto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.inq::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">yield</span> item

        hrefs <span class="token operator">=</span> sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;#content &gt; div &gt; div.article &gt; div.paginator &gt; a::attr(&quot;href&quot;)&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> href <span class="token keyword">in</span> hrefs<span class="token punctuation">:</span>
            full_url <span class="token operator">=</span> response<span class="token punctuation">.</span>urljoin<span class="token punctuation">(</span>href<span class="token punctuation">.</span>extract<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">yield</span> Request<span class="token punctuation">(</span>url<span class="token operator">=</span>full_url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，我们已经可以通过下面的命令让爬虫运转起来。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>scrapy crawl movie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以在控制台看到爬取到的数据，如果想将这些数据保存到文件中，可以通过<code>-o</code>参数来指定文件名，Scrapy 支持我们将爬取到的数据导出成 JSON、CSV、XML 等格式。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>scrapy crawl moive -o result.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不知大家是否注意到，通过运行爬虫获得的 JSON 文件中有<code>275</code>条数据，那是因为首页被重复爬取了。要解决这个问题，可以对上面的代码稍作调整，不在<code>parse</code>方法中解析获取新页面的 URL，而是通过<code>start_requests</code>方法提前准备好待爬取页面的 URL，调整后的代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scrapy
<span class="token keyword">from</span> scrapy <span class="token keyword">import</span> Selector<span class="token punctuation">,</span> Request
<span class="token keyword">from</span> scrapy<span class="token punctuation">.</span>http <span class="token keyword">import</span> HtmlResponse

<span class="token keyword">from</span> demo<span class="token punctuation">.</span>items <span class="token keyword">import</span> MovieItem


<span class="token keyword">class</span> <span class="token class-name">DoubanSpider</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&#39;douban&#39;</span>
    allowed_domains <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;movie.douban.com&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">start_requests</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">yield</span> Request<span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&#39;https://movie.douban.com/top250?start=</span><span class="token interpolation"><span class="token punctuation">{</span>page <span class="token operator">*</span> <span class="token number">25</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> response<span class="token punctuation">:</span> HtmlResponse<span class="token punctuation">)</span><span class="token punctuation">:</span>
        sel <span class="token operator">=</span> Selector<span class="token punctuation">(</span>response<span class="token punctuation">)</span>
        movie_items <span class="token operator">=</span> sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;#content &gt; div &gt; div.article &gt; ol &gt; li&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> movie_sel <span class="token keyword">in</span> movie_items<span class="token punctuation">:</span>
            item <span class="token operator">=</span> MovieItem<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.title::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.rating_num::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            item<span class="token punctuation">[</span><span class="token string">&#39;motto&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> movie_sel<span class="token punctuation">.</span>css<span class="token punctuation">(</span><span class="token string">&#39;.inq::text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>extract_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">yield</span> item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果希望完成爬虫数据的持久化，可以在数据管道中处理蜘蛛程序产生的<code>Item</code>对象。例如，我们可以通过前面讲到的<code>openpyxl</code>操作 Excel 文件，将数据写入 Excel 文件中，代码如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> openpyxl

<span class="token keyword">from</span> demo<span class="token punctuation">.</span>items <span class="token keyword">import</span> MovieItem


<span class="token keyword">class</span> <span class="token class-name">MovieItemPipeline</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>wb <span class="token operator">=</span> openpyxl<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sheet <span class="token operator">=</span> self<span class="token punctuation">.</span>wb<span class="token punctuation">.</span>active
        self<span class="token punctuation">.</span>sheet<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;Top250&#39;</span>
        self<span class="token punctuation">.</span>sheet<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;名称&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;评分&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;名言&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">process_item</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">:</span> MovieItem<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>sheet<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token string">&#39;score&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token string">&#39;motto&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> item

    <span class="token keyword">def</span> <span class="token function">close_spider</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>wb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;豆瓣电影数据.xlsx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的<code>process_item</code>和<code>close_spider</code>都是回调方法（钩子函数）， 简单的说就是 Scrapy 框架会自动去调用的方法。当蜘蛛程序产生一个<code>Item</code>对象交给引擎时，引擎会将该<code>Item</code>对象交给数据管道，这时我们配置好的数据管道的<code>parse_item</code>方法就会被执行，所以我们可以在该方法中获取数据并完成数据的持久化操作。另一个方法<code>close_spider</code>是在爬虫结束运行前会自动执行的方法，在上面的代码中，我们在这个地方进行了保存 Excel 文件的操作，相信这段代码大家是很容易读懂的。</p><p>总而言之，数据管道可以帮助我们完成以下操作：</p><ul><li>清理 HTML 数据，验证爬取的数据。</li><li>丢弃重复的不必要的内容。</li><li>将爬取的结果进行持久化操作。</li></ul></li><li><p>修改<code>settings.py</code>文件对项目进行配置，主要需要修改以下几个配置。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 用户浏览器</span>
USER_AGENT <span class="token operator">=</span> <span class="token string">&#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span>

<span class="token comment"># 并发请求数量 </span>
CONCURRENT_REQUESTS <span class="token operator">=</span> <span class="token number">4</span>

<span class="token comment"># 下载延迟</span>
DOWNLOAD_DELAY <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment"># 随机化下载延迟</span>
RANDOMIZE_DOWNLOAD_DELAY <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token comment"># 是否遵守爬虫协议</span>
ROBOTSTXT_OBEY <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token comment"># 配置数据管道</span>
ITEM_PIPELINES <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string">&#39;demo.pipelines.MovieItemPipeline&#39;</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面配置文件中的<code>ITEM_PIPELINES</code>选项是一个字典，可以配置多个处理数据的管道，后面的数字代表了执行的优先级，数字小的先执行。</p></blockquote></li></ol><h2 id="第40课-关系型数据库和mysql概述" tabindex="-1"><a class="header-anchor" href="#第40课-关系型数据库和mysql概述" aria-hidden="true">#</a> 第40课：关系型数据库和MySQL概述</h2><h3 id="关系型数据库概述" tabindex="-1"><a class="header-anchor" href="#关系型数据库概述" aria-hidden="true">#</a> 关系型数据库概述</h3>`,40),es=t('<li><p>数据持久化 - 将数据保存到能够长久保存数据的存储介质中，在掉电的情况下数据也不会丢失。</p></li><li><p>数据库发展史 - 网状数据库、层次数据库、关系数据库、NoSQL 数据库、NewSQL 数据库。</p><blockquote><p>1970年，IBM的研究员E.F.Codd在<em>Communication of the ACM</em>上发表了名为<em>A Relational Model of Data for Large Shared Data Banks</em>的论文，提出了<strong>关系模型</strong>的概念，奠定了关系模型的理论基础。后来Codd又陆续发表多篇文章，论述了范式理论和衡量关系系统的12条标准，用数学理论奠定了关系数据库的基础。</p></blockquote></li><li><p>关系数据库特点。</p><ul><li><p>理论基础：<strong>关系代数</strong>（关系运算、集合论、一阶谓词逻辑）。</p></li><li><p>具体表象：用<strong>二维表</strong>（有行和列）组织数据。</p></li><li><p>编程语言：<strong>结构化查询语言</strong>（SQL）。</p></li></ul></li><li><p>ER模型（实体关系模型）和概念模型图。</p><p><strong>ER模型</strong>，全称为<strong>实体关系模型</strong>（Entity-Relationship Model），由美籍华裔计算机科学家陈品山先生提出，是概念数据模型的高层描述方式，如下图所示。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713346.png" width="75%"><ul><li>实体 - 矩形框</li><li>属性 - 椭圆框</li><li>关系 - 菱形框</li><li>重数 - 1:1（一对一） / 1:N（一对多） / M:N（多对多）</li></ul><p>实际项目开发中，我们可以利用数据库建模工具（如：PowerDesigner）来绘制概念数据模型（其本质就是 ER 模型），然后再设置好目标数据库系统，将概念模型转换成物理模型，最终生成创建二维表的 SQL（很多工具都可以根据我们设计的物理模型图以及设定的目标数据库来导出 SQL 或直接生成数据表）。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713563.png" alt="" loading="lazy"></p></li>',4),ts=s("p",null,"关系数据库产品。",-1),ps={href:"https://www.oracle.com/index.html",target:"_blank",rel:"noopener noreferrer"},is={href:"https://www.ibm.com/analytics/us/en/db2/",target:"_blank",rel:"noopener noreferrer"},os={href:"https://zh.wikipedia.org/wiki/AIX",target:"_blank",rel:"noopener noreferrer"},cs={href:"https://www.microsoft.com/en-us/sql-server/",target:"_blank",rel:"noopener noreferrer"},ls={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},ds=s("li",null,[s("a",{href:""},"PostgreSQL"),n(" - 在 BSD 许可证下发行的开放源代码的关系数据库产品。")],-1),us=s("h3",{id:"mysql-简介",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mysql-简介","aria-hidden":"true"},"#"),n(" MySQL 简介")],-1),rs=s("p",null,"MySQL 最早是由瑞典的 MySQL AB 公司开发的一个开放源码的关系数据库管理系统，该公司于2008年被昇阳微系统公司（Sun Microsystems）收购。在2009年，甲骨文公司（Oracle）收购昇阳微系统公司，因此 MySQL 目前也是 Oracle 旗下产品。",-1),vs=s("p",null,"MySQL 在过去由于性能高、成本低、可靠性好，已经成为最流行的开源数据库，因此被广泛地应用于中小型网站开发。随着 MySQL 的不断成熟，它也逐渐被应用于更多大规模网站和应用，比如维基百科、谷歌（Google）、脸书（Facebook）、淘宝网等网站都使用了 MySQL 来提供数据持久化服务。",-1),ks={href:"https://zh.wikipedia.org/wiki/OpenSolaris",target:"_blank",rel:"noopener noreferrer"},ms={href:"https://zh.wikipedia.org/wiki/MariaDB",target:"_blank",rel:"noopener noreferrer"},bs=s("h3",{id:"安装-mysql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装-mysql","aria-hidden":"true"},"#"),n(" 安装 MySQL")],-1),gs=s("h4",{id:"windows-环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows-环境","aria-hidden":"true"},"#"),n(" Windows 环境")],-1),hs={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},ys={href:"https://dev.mysql.com/downloads/windows/installer/8.0.html",target:"_blank",rel:"noopener noreferrer"},_s=s("img",{src:"https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713637.png",style:{zoom:"50%"}},null,-1),ws=t('<li><p>运行 Installer，按照下面的步骤进行安装。</p><ul><li>选择自定义安装。</li></ul><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713918.jpg" style="zoom:35%;"><ul><li>选择需要安装的组件。</li></ul><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713349.jpg" style="zoom:35%;"><ul><li>如果缺少依赖项，需要先安装依赖项。</li></ul><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713545.png" style="zoom:35%;"><ul><li>准备开始安装。</li></ul><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713064.jpg" style="zoom:35%;"><ul><li>安装完成。</li></ul><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713471.jpg" style="zoom:35%;"><ul><li>准备执行配置向导。</li></ul></li><li><p>执行安装后的配置向导。</p><ul><li>配置服务器类型和网络。</li></ul><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713063.jpg" style="zoom:35%;"><ul><li><p>配置认证方法（保护密码的方式）。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713256.jpg" style="zoom:35%;"></li><li><p>配置用户和角色。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713677.jpg" style="zoom:35%;"></li><li><p>配置Windows服务名以及是否开机自启。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713029.jpg" style="zoom:35%;"></li><li><p>配置日志。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713226.jpg" style="zoom:35%;"></li><li><p>配置高级选项。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713318.jpg" alt="ACAC15B8633133B65476286A49BFBD7E" style="zoom:35%;"></li><li><p>应用配置。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250721639.jpg" alt="" loading="lazy"></p></li></ul></li><li><p>可以在 Windows 系统的“服务”窗口中启动或停止 MySQL。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713527.jpg" style="zoom:50%;"></li><li><p>配置 PATH 环境变量，以便在命令行提示符窗口使用 MySQL 客户端工具。</p><ul><li><p>打开 Windows 的“系统”窗口并点击“高级系统设置”。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713610.jpg" style="zoom:50%;"></li><li><p>在“系统属性”的“高级”窗口，点击“环境变量”按钮。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713939.jpg" style="zoom:50%;"></li><li><p>修改PATH环境变量，将MySQL安装路径下的<code>bin</code>文件夹的路径配置到PATH环境变量中。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713153.jpg" style="zoom:50%;"></li><li><p>配置完成后，可以尝试在“命令提示符”下使用 MySQL 的命令行工具。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713134.jpg" style="zoom:50%;"></li></ul></li>',4),fs=s("h4",{id:"linux-环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#linux-环境","aria-hidden":"true"},"#"),n(" Linux 环境")],-1),xs=s("p",null,"下面以 CentOS 7.x 环境为例，演示如何安装 MySQL 5.7.x，如果需要在其他 Linux 系统下安装其他版本的 MySQL，请读者自行在网络上查找对应的安装教程。",-1),Ss=s("p",null,"安装 MySQL。",-1),Ls={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},qs=t(`<div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.26-1.el7.x86_64.rpm-bundle.tar
tar -xvf mysql-5.7.26-1.el7.x86_64.rpm-bundle.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果系统上有 MariaDB 相关的文件，需要先移除 MariaDB 相关的文件。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>yum list installed | grep mariadb | awk &#39;{print $1}&#39; | xargs yum erase -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新和安装可能用到的底层依赖库。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yum update
yum install -y libaio libaio-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来可以按照如下所示的顺序用 RPM（Redhat Package Manager）工具安装 MySQL。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>rpm -ivh mysql-community-common-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-compat-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-devel-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-5.7.26-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.7.26-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用下面的命令查看已经安装的 MySQL 相关的包。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>rpm -qa | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),Qs=t(`<li><p>配置 MySQL。</p><p>MySQL 的配置文件在<code>/etc</code>目录下，名为<code>my.cnf</code>，默认的配置文件内容如下所示。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>cat /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-INI line-numbers-mode" data-ext="INI"><pre class="language-INI"><code># For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过配置文件，我们可以修改 MySQL 服务使用的端口、字符集、最大连接数、套接字队列大小、最大数据包大小、日志文件的位置、日志过期时间等配置。当然，我们还可以通过修改配置文件来对 MySQL 服务器进行性能调优和安全管控。</p></li><li><p>启动 MySQL 服务。</p><p>可以使用下面的命令来启动 MySQL。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>service mysqld start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 CentOS 7 中，更推荐使用下面的命令来启动 MySQL。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 MySQL 成功后，可以通过下面的命令来检查网络端口使用情况，MySQL 默认使用<code>3306</code>端口。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>netstat -ntlp | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用下面的命令查找是否有名为<code>mysqld</code>的进程。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pgrep mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用 MySQL 客户端工具连接服务器。</p><p>命令行工具：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明：启动客户端时，<code>-u</code>参数用来指定用户名，MySQL 默认的超级管理账号为<code>root</code>；<code>-p</code>表示要输入密码（用户口令）；如果连接的是其他主机而非本机，可以用<code>-h</code>来指定连接主机的主机名或IP地址。</p></blockquote><p>如果是首次安装 MySQL，可以使用下面的命令来找到默认的初始密码。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>cat /var/log/mysqld.log | grep password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会查看 MySQL 的日志带有<code>password</code>的行，在显示的结果中<code>root@localhost:</code>后面的部分就是默认设置的初始密码。</p><p>进入客户端工具后，可以通过下面的指令来修改超级管理员（root）的访问口令为<code>123456</code>。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>set global validate_password_policy=0;
set global validate_password_length=6;
alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：MySQL 较新的版本默认不允许使用弱口令作为用户口令，所以上面的代码修改了验证用户口令的策略和口令的长度。事实上我们不应该使用弱口令，因为存在用户口令被暴力破解的风险。近年来，<strong>攻击数据库窃取数据和劫持数据库勒索比特币</strong>的事件屡见不鲜，要避免这些潜在的风险，最为重要的一点是<strong>不要让数据库服务器暴露在公网上</strong>（最好的做法是将数据库置于内网，至少要做到不向公网开放数据库服务器的访问端口），另外要保管好<code>root</code>账号的口令，应用系统需要访问数据库时，通常不使用<code>root</code>账号进行访问，而是<strong>创建其他拥有适当权限的账号来访问</strong>。</p></blockquote><p>再次使用客户端工具连接 MySQL 服务器时，就可以使用新设置的口令了。在实际开发中，为了方便用户操作，可以选择图形化的客户端工具来连接 MySQL 服务器，包括：</p><ul><li><p>MySQL Workbench（官方工具）</p></li><li><p>Navicat for MySQL（界面简单友好）</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713435.png" style="zoom:50%;"></li></ul></li>`,3),Ps=t(`<h4 id="macos环境" tabindex="-1"><a class="header-anchor" href="#macos环境" aria-hidden="true">#</a> macOS环境</h4><p>macOS 系统安装 MySQL 是比较简单的，只需要从刚才说到的官方网站下载 DMG 安装文件并运行就可以了，下载的时候需要根据自己使用的是 Intel 的芯片还是苹果的 M1 芯片选择下载链接，如下图所示。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713677.png" style="zoom:50%;"><p>安装成功后，可以在“系统偏好设置”中找到“MySQL”，在如下所示的画面中，可以启动和停止 MySQL 服务器，也可以对 MySQL 核心文件的路径进行配置。</p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307250713901.png" style="zoom:40%;"><h3 id="mysql-基本命令" tabindex="-1"><a class="header-anchor" href="#mysql-基本命令" aria-hidden="true">#</a> MySQL 基本命令</h3><h4 id="查看命令" tabindex="-1"><a class="header-anchor" href="#查看命令" aria-hidden="true">#</a> 查看命令</h4><ol><li>查看所有数据库</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show databases;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>查看所有字符集</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show character set;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>查看所有的排序规则</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show collation;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>查看所有的引擎</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show engines;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>查看所有日志文件</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show binary logs;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>查看数据库下所有表</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show tables;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助" aria-hidden="true">#</a> 获取帮助</h4><p>在 MySQL 命令行工具中，可以使用<code>help</code>命令或<code>?</code>来获取帮助，如下所示。</p><ol><li><p>查看<code>show</code>命令的帮助。</p><div class="language-MySQL line-numbers-mode" data-ext="MySQL"><pre class="language-MySQL"><code>? show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看有哪些帮助内容。</p><div class="language-MySQL line-numbers-mode" data-ext="MySQL"><pre class="language-MySQL"><code>? contents
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取函数的帮助。</p><div class="language-MySQL line-numbers-mode" data-ext="MySQL"><pre class="language-MySQL"><code>? functions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取数据类型的帮助。</p><div class="language-MySQL line-numbers-mode" data-ext="MySQL"><pre class="language-MySQL"><code>? data types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h4 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h4><ol><li><p>新建/重建服务器连接 - <code>connect</code> / <code>resetconnection</code>。</p></li><li><p>清空当前输入 - <code>\\c</code>。在输入错误时，可以及时使用<code>\\c</code>清空当前输入并重新开始。</p></li><li><p>修改终止符（定界符）- <code>delimiter</code>。默认的终止符是<code>;</code>，可以使用该命令修改成其他的字符，例如修改为<code>$</code>符号，可以用<code>delimiter $</code>命令。</p></li><li><p>打开系统默认编辑器 - <code>edit</code>。编辑完成保存关闭之后，命令行会自动执行编辑的内容。</p></li><li><p>查看服务器状态 - <code>status</code>。</p></li><li><p>修改默认提示符 - <code>prompt</code>。</p></li><li><p>执行系统命令 - <code>system</code>。可以将系统命令跟在<code>system</code>命令的后面执行，<code>system</code>命令也可以缩写为<code>\\!</code>。</p></li><li><p>执行 SQL 文件 - <code>source</code>。<code>source</code>命令后面跟 SQL 文件路径。</p></li><li><p>重定向输出 - <code>tee</code> / <code>notee</code>。可以将命令的输出重定向到指定的文件中。</p></li><li><p>切换数据库 - <code>use</code>。</p></li><li><p>显示警告信息 - <code>warnings</code>。</p></li><li><p>退出命令行 - <code>quit</code>或<code>exit</code>。</p></li></ol><h2 id="第41课-sql详解之ddl" tabindex="-1"><a class="header-anchor" href="#第41课-sql详解之ddl" aria-hidden="true">#</a> 第41课：SQL详解之DDL</h2><p>我们通常可以将 SQL 分为四类，分别是 DDL（数据定义语言）、DML（数据操作语言）、DQL（数据查询语言）和 DCL（数据控制语言）。DDL 主要用于创建、删除、修改数据库中的对象，比如创建、删除和修改二维表，核心的关键字包括<code>create</code>、<code>drop</code>和<code>alter</code>；DML 主要负责数据的插入、删除和更新，关键词包括<code>insert</code>、<code>delete</code>和<code>update</code>；DQL 负责数据查询，最重要的一个关键词是<code>select</code>；DCL 通常用于授予和召回权限，核心关键词是<code>grant</code>和<code>revoke</code>。</p><blockquote><p><strong>说明</strong>：SQL 是不区分大小写的语言，有人会建议将关键字大写，其他部分小写。为了书写和识别方便，下面的 SQL 我都是使用小写字母进行书写的。 如果公司的 SQL 编程规范有强制规定，那么就按照公司的要求来，个人的喜好不应该凌驾于公司的编程规范之上，这一点对职业人来说应该是常识。</p></blockquote><h3 id="建库建表" tabindex="-1"><a class="header-anchor" href="#建库建表" aria-hidden="true">#</a> 建库建表</h3><p>下面我们来实现一个非常简单的学校选课系统的数据库。我们将数据库命名为<code>school</code>，四个关键的实体分别是学院、老师、学生和课程，其中，学生跟学院是从属关系，这个关系从数量上来讲是多对一关系，因为一个学院可以有多名学生，而一个学生通常只属于一个学院；同理，老师跟学院的从属关系也是多对一关系。一名老师可以讲授多门课程，一门课程如果只有一个授课老师的话，那么课程跟老师也是多对一关系；如果允许多个老师合作讲授一门课程，那么课程和老师就是多对多关系。简单起见，我们将课程和老师设计为多对一关系。学生和课程是典型的多对多关系，因为一个学生可以选择多门课程，一门课程也可以被多个学生选择，而关系型数据库需要借助中间表才能维持维持两个实体的多对多关系。最终，我们的学校选课系统一共有五张表，分别是学院表（<code>tb_college</code>）、学生表（<code>tb_student</code>）、教师表（<code>tb_teacher</code>）、课程表（<code>tb_course</code>）和选课记录表（<code>tb_record</code>），其中选课记录表就是维持学生跟课程多对多关系的中间表。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 如果存在名为school的数据库就删除它
drop database if exists \`school\`;

-- 创建名为school的数据库并设置默认的字符集和排序方式
create database \`school\` default character set utf8mb4 collate utf8mb4_general_ci;

-- 切换到school数据库上下文环境
use \`school\`;

-- 创建学院表
create table \`tb_college\`
(
\`col_id\` int unsigned auto_increment comment &#39;编号&#39;,
\`col_name\` varchar(50) not null comment &#39;名称&#39;,
\`col_intro\` varchar(500) default &#39;&#39; comment &#39;介绍&#39;,
primary key (\`col_id\`)
) engine=innodb auto_increment=1 comment &#39;学院表&#39;;

-- 创建学生表
create table \`tb_student\`
(
\`stu_id\` int unsigned not null comment &#39;学号&#39;,
\`stu_name\` varchar(20) not null comment &#39;姓名&#39;,
\`stu_sex\` boolean default 1 not null comment &#39;性别&#39;,
\`stu_birth\` date not null comment &#39;出生日期&#39;,
\`stu_addr\` varchar(255) default &#39;&#39; comment &#39;籍贯&#39;,
\`col_id\` int unsigned not null comment &#39;所属学院&#39;,
primary key (\`stu_id\`),
constraint \`fk_student_col_id\` foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`)
) engine=innodb comment &#39;学生表&#39;;

-- 创建教师表
create table \`tb_teacher\`
(
\`tea_id\` int unsigned not null comment &#39;工号&#39;,
\`tea_name\` varchar(20) not null comment &#39;姓名&#39;,
\`tea_title\` varchar(10) default &#39;助教&#39; comment &#39;职称&#39;,
\`col_id\` int unsigned not null comment &#39;所属学院&#39;,
primary key (\`tea_id\`),
constraint \`fk_teacher_col_id\` foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`)
) engine=innodb comment &#39;老师表&#39;;

-- 创建课程表
create table \`tb_course\`
(
\`cou_id\` int unsigned not null comment &#39;编号&#39;,
\`cou_name\` varchar(50) not null comment &#39;名称&#39;,
\`cou_credit\` int not null comment &#39;学分&#39;,
\`tea_id\` int unsigned not null comment &#39;授课老师&#39;,
primary key (\`cou_id\`),
constraint \`fk_course_tea_id\` foreign key (\`tea_id\`) references \`tb_teacher\` (\`tea_id\`)
) engine=innodb comment &#39;课程表&#39;;

-- 创建选课记录表
create table \`tb_record\`
(
\`rec_id\` bigint unsigned auto_increment comment &#39;选课记录号&#39;,
\`stu_id\` int unsigned not null comment &#39;学号&#39;,
\`cou_id\` int unsigned not null comment &#39;课程编号&#39;,
\`sel_date\` date not null comment &#39;选课日期&#39;,
\`score\` decimal(4,1) comment &#39;考试成绩&#39;,
primary key (\`rec_id\`),
constraint \`fk_record_stu_id\` foreign key (\`stu_id\`) references \`tb_student\` (\`stu_id\`),
constraint \`fk_record_cou_id\` foreign key (\`cou_id\`) references \`tb_course\` (\`cou_id\`),
constraint \`uk_record_stu_cou\` unique (\`stu_id\`, \`cou_id\`)
) engine=innodb comment &#39;选课记录表&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的DDL有几个地方需要强调一下：</p><ul><li><p>首先，上面 SQL 中的数据库名、表名、字段名都被反引号（\`）包裹起来，反引号并不是必须的，但是却可以解决表名、字段名等跟 SQL 关键字（SQL 中有特殊含义的单词）冲突的问题。</p></li><li><p>创建数据库时，我们通过<code>default character set utf8mb4</code>指定了数据库默认使用的字符集为<code>utf8mb4</code>（最大<code>4</code>字节的<code>utf-8</code>编码），我们推荐使用该字符集，它也是 MySQL 8.x 默认使用的字符集，因为它能够支持国际化编码，还可以存储 Emoji 字符。可以通过下面的命令查看 MySQL 支持的字符集以及默认的排序规则。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show character set;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+---------------------------------+---------------------+--------+
| Charset  | Description                     | Default collation   | Maxlen |
+----------+---------------------------------+---------------------+--------+
| big5     | Big5 Traditional Chinese        | big5_chinese_ci     |      2 |
| dec8     | DEC West European               | dec8_swedish_ci     |      1 |
| cp850    | DOS West European               | cp850_general_ci    |      1 |
| hp8      | HP West European                | hp8_english_ci      |      1 |
| koi8r    | KOI8-R Relcom Russian           | koi8r_general_ci    |      1 |
| latin1   | cp1252 West European            | latin1_swedish_ci   |      1 |
| latin2   | ISO 8859-2 Central European     | latin2_general_ci   |      1 |
| swe7     | 7bit Swedish                    | swe7_swedish_ci     |      1 |
| ascii    | US ASCII                        | ascii_general_ci    |      1 |
| ujis     | EUC-JP Japanese                 | ujis_japanese_ci    |      3 |
| sjis     | Shift-JIS Japanese              | sjis_japanese_ci    |      2 |
| hebrew   | ISO 8859-8 Hebrew               | hebrew_general_ci   |      1 |
| tis620   | TIS620 Thai                     | tis620_thai_ci      |      1 |
| euckr    | EUC-KR Korean                   | euckr_korean_ci     |      2 |
| koi8u    | KOI8-U Ukrainian                | koi8u_general_ci    |      1 |
| gb2312   | GB2312 Simplified Chinese       | gb2312_chinese_ci   |      2 |
| greek    | ISO 8859-7 Greek                | greek_general_ci    |      1 |
| cp1250   | Windows Central European        | cp1250_general_ci   |      1 |
| gbk      | GBK Simplified Chinese          | gbk_chinese_ci      |      2 |
| latin5   | ISO 8859-9 Turkish              | latin5_turkish_ci   |      1 |
| armscii8 | ARMSCII-8 Armenian              | armscii8_general_ci |      1 |
| utf8     | UTF-8 Unicode                   | utf8_general_ci     |      3 |
| ucs2     | UCS-2 Unicode                   | ucs2_general_ci     |      2 |
| cp866    | DOS Russian                     | cp866_general_ci    |      1 |
| keybcs2  | DOS Kamenicky Czech-Slovak      | keybcs2_general_ci  |      1 |
| macce    | Mac Central European            | macce_general_ci    |      1 |
| macroman | Mac West European               | macroman_general_ci |      1 |
| cp852    | DOS Central European            | cp852_general_ci    |      1 |
| latin7   | ISO 8859-13 Baltic              | latin7_general_ci   |      1 |
| utf8mb4  | UTF-8 Unicode                   | utf8mb4_general_ci  |      4 |
| cp1251   | Windows Cyrillic                | cp1251_general_ci   |      1 |
| utf16    | UTF-16 Unicode                  | utf16_general_ci    |      4 |
| utf16le  | UTF-16LE Unicode                | utf16le_general_ci  |      4 |
| cp1256   | Windows Arabic                  | cp1256_general_ci   |      1 |
| cp1257   | Windows Baltic                  | cp1257_general_ci   |      1 |
| utf32    | UTF-32 Unicode                  | utf32_general_ci    |      4 |
| binary   | Binary pseudo charset           | binary              |      1 |
| geostd8  | GEOSTD8 Georgian                | geostd8_general_ci  |      1 |
| cp932    | SJIS for Windows Japanese       | cp932_japanese_ci   |      2 |
| eucjpms  | UJIS for Windows Japanese       | eucjpms_japanese_ci |      3 |
| gb18030  | China National Standard GB18030 | gb18030_chinese_ci  |      4 |
+----------+---------------------------------+---------------------+--------+
41 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要设置 MySQL 服务启动时默认使用的字符集，可以修改MySQL的配置并添加以下内容。</p><div class="language-INI line-numbers-mode" data-ext="INI"><pre class="language-INI"><code>[mysqld]
character-set-server=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：如果不清楚如何修改 MySQL 的配置文件就先不要管它。</p></blockquote></li><li><p>创建和删除数据库时，关键字<code>database</code>也可以替换为<code>schema</code>，二者作用相同。</p></li><li><p>建表语句中的<code>not null</code>是非空约束，它限定了字段不能为空；<code>default</code>用于为字段指定默认值，我们称之为默认值约束；<code>primary key</code>是主键约束，它设定了能够唯一确定一条记录的列，也确保了每条记录都是独一无二的，因为主键不允许重复；<code>foreign key</code>是外键约束，它维持了两张表的参照完整性，举个例子，由于学生表中为 col_id 字段添加了外键约束，限定其必须引用（<code>references</code>）学院表中的 col_id，因此学生表中的学院编号必须来自于学院表中的学院编号，不能够随意为该字段赋值。如果需要给主键约束、外键约束等起名字，可以使用<code>constriant</code>关键字并在后面跟上约束的名字。</p></li><li><p>建表语句中的<code>comment</code> 关键字用来给列和表添加注释，增强代码的可读性和可维护性。</p></li><li><p>在创建表的时候，可以自行选择底层的存储引擎。MySQL 支持多种存储引擎，可以通过<code>show engines</code>命令进行查看。MySQL 5.5 以后的版本默认使用的存储引擎是 InnoDB，它是我们推荐大家使用的存储引擎（因为更适合当下互联网应用对高并发、性能以及事务支持等方面的需求），为了 SQL 语句的向下兼容性，我们可以在建表语句结束处右圆括号的后面通过<code>engine=innodb</code>来指定使用 InnoDB 存储引擎。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show engines\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的 \\G 是为了换一种输出方式，在命令行客户端中，如果表的字段很多一行显示不完，就会导致输出的内容看起来非常不舒服，使用 \\G 可以将记录的每个列以独占整行的的方式输出，这种输出方式在命令行客户端中看起来会舒服很多。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*************************** 1. row ***************************
      Engine: InnoDB
     Support: DEFAULT
     Comment: Supports transactions, row-level locking, and foreign keys
Transactions: YES
          XA: YES
  Savepoints: YES
*************************** 2. row ***************************
      Engine: MRG_MYISAM
     Support: YES
     Comment: Collection of identical MyISAM tables
Transactions: NO
          XA: NO
  Savepoints: NO
*************************** 3. row ***************************
      Engine: MEMORY
     Support: YES
     Comment: Hash based, stored in memory, useful for temporary tables
Transactions: NO
          XA: NO
  Savepoints: NO
*************************** 4. row ***************************
      Engine: BLACKHOLE
     Support: YES
     Comment: /dev/null storage engine (anything you write to it disappears)
Transactions: NO
          XA: NO
  Savepoints: NO
*************************** 5. row ***************************
      Engine: MyISAM
     Support: YES
     Comment: MyISAM storage engine
Transactions: NO
          XA: NO
  Savepoints: NO
*************************** 6. row ***************************
      Engine: CSV
     Support: YES
     Comment: CSV storage engine
Transactions: NO
          XA: NO
  Savepoints: NO
*************************** 7. row ***************************
      Engine: ARCHIVE
     Support: YES
     Comment: Archive storage engine
Transactions: NO
          XA: NO
  Savepoints: NO
*************************** 8. row ***************************
      Engine: PERFORMANCE_SCHEMA
     Support: YES
     Comment: Performance Schema
Transactions: NO
          XA: NO
  Savepoints: NO
*************************** 9. row ***************************
      Engine: FEDERATED
     Support: NO
     Comment: Federated MySQL storage engine
Transactions: NULL
          XA: NULL
  Savepoints: NULL
9 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的表格对MySQL几种常用的数据引擎进行了简单的对比。</p><table><thead><tr><th>特性</th><th>InnoDB</th><th>MRG_MYISAM</th><th>MEMORY</th><th>MyISAM</th></tr></thead><tbody><tr><td>存储限制</td><td>有</td><td>没有</td><td>有</td><td>有</td></tr><tr><td>事务</td><td>支持</td><td></td><td></td><td></td></tr><tr><td>锁机制</td><td>行锁</td><td>表锁</td><td>表锁</td><td>表锁</td></tr><tr><td>B树索引</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>哈希索引</td><td></td><td></td><td>支持</td><td></td></tr><tr><td>全文检索</td><td>支持（5.6+）</td><td></td><td></td><td>支持</td></tr><tr><td>集群索引</td><td>支持</td><td></td><td></td><td></td></tr><tr><td>数据缓存</td><td>支持</td><td></td><td>支持</td><td></td></tr><tr><td>索引缓存</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>数据可压缩</td><td></td><td></td><td></td><td>支持</td></tr><tr><td>内存使用</td><td>高</td><td>低</td><td>中</td><td>低</td></tr><tr><td>存储空间使用</td><td>高</td><td>低</td><td></td><td>低</td></tr><tr><td>批量插入性能</td><td>低</td><td>高</td><td>高</td><td>高</td></tr><tr><td>是否支持外键</td><td>支持</td><td></td><td></td><td></td></tr></tbody></table><p>通过上面的比较我们可以了解到，InnoDB 是唯一能够支持外键、事务以及行锁的存储引擎，所以我们之前说它更适合互联网应用，而且在较新版本的 MySQL 中，它也是默认使用的存储引擎。</p></li><li><p>在定义表结构为每个字段选择数据类型时，如果不清楚哪个数据类型更合适，可以通过 MySQL 的帮助系统来了解每种数据类型的特性、数据的长度和精度等相关信息。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>? data types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：在 MySQLWorkbench 中，不能使用<code>?</code>获取帮助，要使用对应的命令<code>help</code>。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>You asked for help about help category: &quot;Data Types&quot;
For more information, type &#39;help &lt;item&gt;&#39;, where &lt;item&gt; is one of the following
topics:
   AUTO_INCREMENT
   BIGINT
   BINARY
   BIT
   BLOB
   BLOB DATA TYPE
   BOOLEAN
   CHAR
   CHAR BYTE
   DATE
   DATETIME
   DEC
   DECIMAL
   DOUBLE
   DOUBLE PRECISION
   ENUM
   FLOAT
   INT
   INTEGER
   LONGBLOB
   LONGTEXT
   MEDIUMBLOB
   MEDIUMINT
   MEDIUMTEXT
   SET DATA TYPE
   SMALLINT
   TEXT
   TIME
   TIMESTAMP
   TINYBLOB
   TINYINT
   TINYTEXT
   VARBINARY
   VARCHAR
   YEAR DATA TYPE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取 varchar 类型的帮助：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>? varchar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Name: &#39;VARCHAR&#39;
Description:
[NATIONAL] VARCHAR(M) [CHARACTER SET charset_name] [COLLATE
collation_name]

A variable-length string. M represents the maximum column length in
characters. The range of M is 0 to 65,535. The effective maximum length
of a VARCHAR is subject to the maximum row size (65,535 bytes, which is
shared among all columns) and the character set used. For example, utf8
characters can require up to three bytes per character, so a VARCHAR
column that uses the utf8 character set can be declared to be a maximum
of 21,844 characters. See
http://dev.mysql.com/doc/refman/5.7/en/column-count-limit.html.

MySQL stores VARCHAR values as a 1-byte or 2-byte length prefix plus
data. The length prefix indicates the number of bytes in the value. A
VARCHAR column uses one length byte if values require no more than 255
bytes, two length bytes if values may require more than 255 bytes.

*Note*:

MySQL follows the standard SQL specification, and does not remove
trailing spaces from VARCHAR values.

VARCHAR is shorthand for CHARACTER VARYING. NATIONAL VARCHAR is the
standard SQL way to define that a VARCHAR column should use some
predefined character set. MySQL uses utf8 as this predefined character
set. http://dev.mysql.com/doc/refman/5.7/en/charset-national.html.
NVARCHAR is shorthand for NATIONAL VARCHAR.

URL: http://dev.mysql.com/doc/refman/5.7/en/string-type-overview.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在数据类型的选择上，保存字符串数据通常都使用 VARCHAR 和 CHAR 两种类型，前者通常称为变长字符串，而后者通常称为定长字符串；对于 InnoDB 存储引擎，行存储格式没有区分固定长度和可变长度列，因此 VARCHAR 类型和 CHAR 类型没有本质区别，后者不一定比前者性能更好。如果要保存的很大字符串，可以使用 TEXT 类型；如果要保存很大的字节串，可以使用 BLOB（二进制大对象）类型。在 MySQL 中，TEXT 和 BLOB又分别包括 TEXT、MEDIUMTEXT、LONGTEXT 和 BLOB、MEDIUMBLOB、LONGBLOB 三种不同的类型，它们主要的区别在于存储数据的最大大小不同。保存浮点数可以用 FLOAT 或 DOUBLE 类型，FLOAT 已经不推荐使用了，而且在 MySQL 后续的版本中可能会被移除掉。而保存定点数应该使用 DECIMAL 类型，它可以指定小数点前后有效数字的位数。如果要保存时间日期，DATETIME 类型优于 TIMESTAMP 类型，因为前者能表示的时间日期范围更大，后者底层其实就是一个整数，记录了指定的日期时间和 1970-01-01 00:00:00 相差多少个毫秒，该类型在 2038-01-19 03:14:07 之后就会溢出。</p><p>对于自增字段 AUTO_INCREMENT，如果使用 MySQL 5.x 版本要注意自增字段的回溯问题，当然这个问题在 MySQL 8.x 中已经得到了很好的解决，当然，MySQL 8.x 还有很多其他的好处，不管是功能还是性能上都有很多的优化和调整，因此强烈推荐大家使用 MySQL 8.x 版本。对于高并发访问数据库的场景，AUTO_INCREMENT 不仅存在性能上的问题，还可能在多机结构上产生重复的 ID 值，在这种场景下，使用分布式 ID 生成算法（SnowFlake、TinyID等）才是最好的选择，有兴趣的读者可以自行研究。</p></li></ul><h3 id="删除表和修改表" tabindex="-1"><a class="header-anchor" href="#删除表和修改表" aria-hidden="true">#</a> 删除表和修改表</h3><p>下面以学生表为例，为大家说明如何删除表和修改表。删除表可以使用<code>drop table</code>，代码如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop table \`tb_student\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop table if exists \`tb_student\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，如果学生表已经录入了数据而且该数据被其他表引用了，那么就不能删除学生表，否则上面的操作会报错。在下一课中，我们会讲解如何向表中插入数据，到时候大家可以试一试，能否顺利删除学生表。</p><p>如果要修改学生表，可以使用<code>alter table</code>，具体可以分为以下几种情况：</p><p>修改表，添加一个新列，例如给学生表添加一个联系电话的列。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` add column \`stu_tel\` varchar(20) not null comment &#39;联系电话&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：如果新增列的时候指定了非空约束（<code>not null</code>），那么学生表不能够有数据，否则原来的数据增加了 stu_tel 列之后是没有数据的，这就违反了非空约束的要求；当然，我们在添加列的时候也可以使用默认值约束来解决这个问题。</p></blockquote><p>修改表，删除指定的列，例如将上面添加的联系电话列删除掉。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` drop column \`stu_tel\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改表，修改列的数据类型，例如将学生表的 stu_sex 修改为字符。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` modify column \`stu_sex\` char(1) not null default &#39;M&#39; comment &#39;性别&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改表，修改列的命名，例如将学生表的 stu_sex 修改为 stu_gender。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` change column \`stu_sex\` \`stu_gender\` boolean default 1 comment &#39;性别&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改表，删除约束条件，例如删除学生表的 col_id 列的外键约束。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` drop foreign key \`fk_student_col_id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改表，添加约束条件，例如给学生表的 col_id 列加上外键约束。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` add foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` add constraint \`fk_student_col_id\` foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：在添加外键约束时，还可以通过<code>on update</code>和<code>on delete</code>来指定在被引用的表发生删除和更新操作时，应该进行何种处理，二者的默认值都是<code>restrict</code>，表示如果存在外键约束，则不允许更新和删除被引用的数据。除了<code>restrict</code>之外，这里可能的取值还有<code>cascade</code>（级联操作）和<code>set null</code>（设置为空），有兴趣的读者可以自行研究。</p></blockquote><p>修改表的名字，例如将学生表的名字修改为 tb_stu_info。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table \`tb_student\` rename to \`tb_stu_info\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：一般情况下，请不要轻易修改数据库或表的名字。</p></blockquote><h2 id="第42课-sql详解之dml" tabindex="-1"><a class="header-anchor" href="#第42课-sql详解之dml" aria-hidden="true">#</a> 第42课：SQL详解之DML</h2><p>我们接着上一课中创建的学校选课系统数据库，为大家讲解 DML 的使用。DML 可以帮助将数据插入到二维表（<code>insert</code>操作）、从二维表删除数据（<code>delete</code>操作）以及更新二维表的数据（<code>update</code>操作）。在执行 DML 之前，我们先通过下面的<code>use</code>命令切换到<code>school</code>数据库。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>use \`school\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="insert操作" tabindex="-1"><a class="header-anchor" href="#insert操作" aria-hidden="true">#</a> insert操作</h3><p>顾名思义，<code>insert</code>是用来插入行到二维表中的，插入的方式包括：插入完整的行、插入行的一部分、插入多行、插入查询的结果。我们通过如下所示的 SQL 向学院表中添加一个学院。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>insert into \`tb_college\` values (default, &#39;计算机学院&#39;, &#39;学习计算机科学与技术的地方&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，由于学院表的主键是一个自增字段，因此上面的 SQL 中用<code>default</code>表示该列使用默认值，我们也可以使用下面的方式完成同样的操作。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>insert into \`tb_college\` (\`col_name\`, \`col_intro\`) values (&#39;计算机学院&#39;, &#39;学习计算机科学与技术的地方&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们推荐大家使用下面这种做法，指定为哪些字段赋值，这样做可以不按照建表时设定的字段顺序赋值，可以按照<code>values</code>前面的元组中给定的字段顺序为字段赋值，但是需要注意，除了允许为<code>null</code>和有默认值的字段外，其他的字段都必须要一一列出并在<code>values</code>后面的元组中为其赋值。如果希望一次性插入多条记录，我们可以在<code>values</code>后面跟上多个元组来实现批量插入，代码如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>insert into \`tb_college\` 
    (\`col_name\`, \`col_intro\`) 
values 
    (&#39;外国语学院&#39;, &#39;学习歪果仁的语言的学院&#39;),
    (&#39;经济管理学院&#39;, &#39;经世济民，治理国家；管理科学，兴国之道&#39;),
    (&#39;体育学院&#39;, &#39;发展体育运动，增强人民体质&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在插入数据时，要注意主键是不能重复的，如果插入的数据与表中已有记录主键相同，那么<code>insert</code>操作将会产生 Duplicated Entry 的报错信息。再次提醒大家，如果<code>insert</code>操作省略了某些列，那么这些列要么有默认值，要么允许为<code>null</code>，否则也将产生错误。在业务系统中，为了让<code>insert</code>操作不影响其他操作（主要是后面要讲的<code>select</code>操作）的性能，可以在<code>insert</code>和<code>into</code>之间加一个<code>low_priority</code>来降低<code>insert</code>操作的优先级，这个做法也适用于下面要讲的<code>delete</code>和<code>update</code>操作。</p><p>假如有一张名为<code>tb_temp</code>的表中有<code>a</code>和<code>b</code>两个列，分别保存了学院的名称和学院的介绍，我们也可以通过查询操作获得<code>tb_temp</code>表的数据并插入到学院表中，如下所示，其中的<code>select</code>就是我们之前提到的 DQL，在下一课中会详细讲解。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>insert into \`tb_college\`
    (\`col_name\`, \`col_intro\`)
select \`a\`, \`b\` from \`tb_temp\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-操作" tabindex="-1"><a class="header-anchor" href="#delete-操作" aria-hidden="true">#</a> delete 操作</h3><p>如果需要从表中删除数据，可以使用<code>delete</code>操作，它可以帮助我们删除指定行或所有行，例如我们要删除编号为<code>1</code>的学院，就可以使用如下所示的 SQL。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>delete from \`tb_college\` where col_id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，上面的<code>delete</code>操作中的<code>where</code>子句是用来指定条件的，只有满足条件的行会被删除。如果我们不小心写出了下面的 SQL，就会删除学院表中所有的记录，这是相当危险的，在实际工作中通常也不会这么做。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>delete from \`tb_college\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要说明的是，即便删除了所有的数据，<code>delete</code>操作不会删除表本身，也不会让 AUTO_INCREMENT 字段的值回到初始值。如果需要删除所有的数据而且让 AUTO_INCREMENT 字段回到初始值，可以使用<code>truncate table</code>执行截断表操作，<code>truncate</code>的本质是删除原来的表并重新创建一个表，它的速度其实更快，因为不需要逐行删除数据。但是请大家记住一点，用<code>truncate table</code>删除数据是非常危险的，因为它会删除所有的数据，而且由于原来的表已经被删除了，要想恢复误删除的数据也会变得极为困难。</p><h3 id="update-操作" tabindex="-1"><a class="header-anchor" href="#update-操作" aria-hidden="true">#</a> update 操作</h3><p>如果要修改表中的数据，可以使用<code>update</code>操作，它可以用来删除指定的行或所有的行。例如，我们将学生表中的“杨过”修改为“杨逍”，这里我们假设“杨过”的学号为<code>1001</code>，代码如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>update \`tb_student\` set \`stu_name\`=&#39;杨逍&#39; where \`stu_id\`=1001;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意上面 SQL 中的<code>where</code>子句，我们使用学号作为条件筛选出对应的学生，然后通过前面的赋值操作将其姓名修改为“杨逍”。这里为什么不直接使用姓名作为筛选条件，那是因为学生表中可能有多个名为“杨过”的学生，如果使用 stu_name 作为筛选条件，那么我们的<code>update</code>操作有可能会一次更新多条数据，这显然不是我们想要看到的。还有一个需要注意的地方是<code>update</code>操作中的<code>set</code>关键字，因为 SQL 中的<code>=</code>并不表示赋值，而是判断相等的运算符，只有出现在<code>set</code> 关键字后面的<code>=</code>，才具备赋值的能力。</p><p>如果要同时修改学生的姓名和生日，我们可以对上面的<code>update</code>语句稍作修改，如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>update \`tb_student\` set \`stu_name\`=&#39;杨逍&#39;, \`stu_birth\`=&#39;1975-12-29&#39; where \`stu_id\`=1001;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>update</code>语句中也可以使用查询的方式获得数据并以此来更新指定的表数据，有兴趣的读者可以自行研究。在书写<code>update</code>语句时，通常都会有<code>where</code>子句，因为实际工作中几乎不太会用到更新全表的操作，这一点大家一定要注意。</p><h3 id="完整的数据" tabindex="-1"><a class="header-anchor" href="#完整的数据" aria-hidden="true">#</a> 完整的数据</h3><p>下面我们给出完整的向 school 数据库的五张表中插入数据的 SQL。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>use \`school\`;

-- 插入学院数据
insert into \`tb_college\` 
    (\`col_name\`, \`col_intro\`) 
values 
    (&#39;计算机学院&#39;, &#39;计算机学院1958年设立计算机专业，1981年建立计算机科学系，1998年设立计算机学院，2005年5月，为了进一步整合教学和科研资源，学校决定，计算机学院和软件学院行政班子合并统一运作、实行教学和学生管理独立运行的模式。 学院下设三个系：计算机科学与技术系、物联网工程系、计算金融系；两个研究所：图象图形研究所、网络空间安全研究院（2015年成立）；三个教学实验中心：计算机基础教学实验中心、IBM技术中心和计算机专业实验中心。&#39;),
    (&#39;外国语学院&#39;, &#39;外国语学院设有7个教学单位，6个文理兼收的本科专业；拥有1个一级学科博士授予点，3个二级学科博士授予点，5个一级学科硕士学位授权点，5个二级学科硕士学位授权点，5个硕士专业授权领域，同时还有2个硕士专业学位（MTI）专业；有教职员工210余人，其中教授、副教授80余人，教师中获得中国国内外名校博士学位和正在职攻读博士学位的教师比例占专任教师的60%以上。&#39;),
    (&#39;经济管理学院&#39;, &#39;经济学院前身是创办于1905年的经济科；已故经济学家彭迪先、张与九、蒋学模、胡寄窗、陶大镛、胡代光，以及当代学者刘诗白等曾先后在此任教或学习。&#39;);

-- 插入学生数据
insert into \`tb_student\` 
    (\`stu_id\`, \`stu_name\`, \`stu_sex\`, \`stu_birth\`, \`stu_addr\`, \`col_id\`) 
values
    (1001, &#39;杨过&#39;, 1, &#39;1990-3-4&#39;, &#39;湖南长沙&#39;, 1),
    (1002, &#39;任我行&#39;, 1, &#39;1992-2-2&#39;, &#39;湖南长沙&#39;, 1),
    (1033, &#39;王语嫣&#39;, 0, &#39;1989-12-3&#39;, &#39;四川成都&#39;, 1),
    (1572, &#39;岳不群&#39;, 1, &#39;1993-7-19&#39;, &#39;陕西咸阳&#39;, 1),
    (1378, &#39;纪嫣然&#39;, 0, &#39;1995-8-12&#39;, &#39;四川绵阳&#39;, 1),
    (1954, &#39;林平之&#39;, 1, &#39;1994-9-20&#39;, &#39;福建莆田&#39;, 1),
    (2035, &#39;东方不败&#39;, 1, &#39;1988-6-30&#39;, null, 2),
    (3011, &#39;林震南&#39;, 1, &#39;1985-12-12&#39;, &#39;福建莆田&#39;, 3),
    (3755, &#39;项少龙&#39;, 1, &#39;1993-1-25&#39;, &#39;四川成都&#39;, 3),
    (3923, &#39;杨不悔&#39;, 0, &#39;1985-4-17&#39;, &#39;四川成都&#39;, 3);

-- 插入老师数据
insert into \`tb_teacher\` 
    (\`tea_id\`, \`tea_name\`, \`tea_title\`, \`col_id\`) 
values 
    (1122, &#39;张三丰&#39;, &#39;教授&#39;, 1),
    (1133, &#39;宋远桥&#39;, &#39;副教授&#39;, 1),
    (1144, &#39;杨逍&#39;, &#39;副教授&#39;, 1),
    (2255, &#39;范遥&#39;, &#39;副教授&#39;, 2),
    (3366, &#39;韦一笑&#39;, default, 3);

-- 插入课程数据
insert into \`tb_course\` 
    (\`cou_id\`, \`cou_name\`, \`cou_credit\`, \`tea_id\`) 
values 
    (1111, &#39;Python程序设计&#39;, 3, 1122),
    (2222, &#39;Web前端开发&#39;, 2, 1122),
    (3333, &#39;操作系统&#39;, 4, 1122),
    (4444, &#39;计算机网络&#39;, 2, 1133),
    (5555, &#39;编译原理&#39;, 4, 1144),
    (6666, &#39;算法和数据结构&#39;, 3, 1144),
    (7777, &#39;经贸法语&#39;, 3, 2255),
    (8888, &#39;成本会计&#39;, 2, 3366),
    (9999, &#39;审计学&#39;, 3, 3366);

-- 插入选课数据
insert into \`tb_record\` 
    (\`stu_id\`, \`cou_id\`, \`sel_date\`, \`score\`) 
values 
    (1001, 1111, &#39;2017-09-01&#39;, 95),
    (1001, 2222, &#39;2017-09-01&#39;, 87.5),
    (1001, 3333, &#39;2017-09-01&#39;, 100),
    (1001, 4444, &#39;2018-09-03&#39;, null),
    (1001, 6666, &#39;2017-09-02&#39;, 100),
    (1002, 1111, &#39;2017-09-03&#39;, 65),
    (1002, 5555, &#39;2017-09-01&#39;, 42),
    (1033, 1111, &#39;2017-09-03&#39;, 92.5),
    (1033, 4444, &#39;2017-09-01&#39;, 78),
    (1033, 5555, &#39;2017-09-01&#39;, 82.5),
    (1572, 1111, &#39;2017-09-02&#39;, 78),
    (1378, 1111, &#39;2017-09-05&#39;, 82),
    (1378, 7777, &#39;2017-09-02&#39;, 65.5),
    (2035, 7777, &#39;2018-09-03&#39;, 88),
    (2035, 9999, &#39;2019-09-02&#39;, null),
    (3755, 1111, &#39;2019-09-02&#39;, null),
    (3755, 8888, &#39;2019-09-02&#39;, null),
    (3755, 9999, &#39;2017-09-01&#39;, 92);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面的<code>insert</code>语句使用了批处理的方式来插入数据，这种做法插入数据的效率比较高。</p></blockquote><h2 id="第43课-sql详解之dql" tabindex="-1"><a class="header-anchor" href="#第43课-sql详解之dql" aria-hidden="true">#</a> 第43课：SQL详解之DQL</h2><p>接下来，我们利用之前创建的学校选课系统数据库，为大家讲解 DQL 的应用。无论对于开发人员还是数据分析师，DQL 都是非常重要的，它关系着我们能否从关系数据库中获取我们需要的数据。建议大家把上上一节课中建库建表的 DDL 以及 上一节课中插入数据的 DML 重新执行一次，确保表和数据跟没有问题再执行下面的操作。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>use \`school\`;

-- 01. 查询所有学生的所有信息
select *
  from tb_student;
  
select stu_id
     , stu_name
     , stu_sex
     , stu_birth
     , stu_addr
     , col_id
  from tb_student;

-- 02. 查询学生的学号、姓名和籍贯(投影和别名)
select stu_id as 学号
     , stu_name as 姓名
     , stu_addr as 籍贯
  from tb_student;

-- 03. 查询所有课程的名称及学分(投影和别名)
select cou_name as 课程名称
     , cou_credit as 学分
  from tb_course;

-- 04. 查询所有女学生的姓名和出生日期(数据筛选)
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 0;

-- 05. 查询籍贯为“四川成都”的女学生的姓名和出生日期(数据筛选)
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 0 and stu_addr = &#39;四川成都&#39;;

-- 06. 查询籍贯为“四川成都”或者性别是女的学生(数据筛选)
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 0 or stu_addr = &#39;四川成都&#39;;

-- 07. 查询所有80后学生的姓名、性别和出生日期(数据筛选)
select stu_name
     , stu_sex
     , stu_birth
  from tb_student
 where &#39;1980-1-1&#39; &lt;= stu_birth and stu_birth &lt;= &#39;1989-12-31&#39;;
 
select stu_name
     , stu_sex
     , stu_birth
  from tb_student
 where stu_birth between &#39;1980-1-1&#39; and &#39;1989-12-31&#39;;

-- MySQL方言
select stu_name
     , if(stu_sex, &#39;男&#39;, &#39;女&#39;) as stu_sex
     , stu_birth
  from tb_student
 where stu_birth between &#39;1980-1-1&#39; and &#39;1989-12-31&#39;;

select stu_name
     , case stu_sex 
            when 1 then &#39;男&#39; 
            else &#39;女&#39;
	   end as stu_sex
     , stu_birth
  from tb_student
 where stu_birth between &#39;1980-1-1&#39; and &#39;1989-12-31&#39;;

-- 08. 查询学分大于2分的课程名称和学分(数据筛选)
select cou_name
     , cou_credit
  from tb_course
 where cou_credit &gt; 2;

-- 09. 查询学分是奇数的课程的名称和学分(数据筛选)
select cou_name
     , cou_credit
  from tb_course
 where cou_credit mod 2 &lt;&gt; 0;

-- 10. 查询选择选了1111的课程考试成绩在90分以上的学生学号(数据筛选)
select stu_id
  from tb_record
 where cou_id = 1111 and score &gt; 90;

-- 11. 查询名字叫“杨过”的学生的姓名和性别
select stu_name
     , stu_sex
  from tb_student
 where stu_name = &#39;杨过&#39;;
    
-- 12. 查询姓“杨”的学生姓名和性别(模糊查询)
-- wild card - 通配符 - % - 代表零个或任意多个字符
select stu_name
     , stu_sex
  from tb_student
 where stu_name like &#39;杨%&#39;;

-- 13. 查询姓“杨”名字两个字的学生姓名和性别(模糊查询)
-- wild card - 通配符 - _ - 精确匹配一个字符
select stu_name
     , stu_sex
  from tb_student
 where stu_name like &#39;杨_&#39;;

-- 14. 查询姓“杨”名字三个字的学生姓名和性别(模糊查询)
select stu_name
     , stu_sex
  from tb_student
 where stu_name like &#39;杨__&#39;;

-- 15. 查询名字中有“不”字或“嫣”字的学生的姓名(模糊查询)
select stu_name
  from tb_student
 where stu_name like &#39;%不%&#39; or stu_name like &#39;%嫣%&#39;;
 
select stu_name
  from tb_student
 where stu_name like &#39;%不%&#39;
 union
select stu_name
  from tb_student
 where stu_name like &#39;%嫣%&#39;;
 
update tb_student
   set stu_name = &#39;岳不嫣&#39;
 where stu_id = 1572;

select stu_name
  from tb_student
 where stu_name like &#39;%不%&#39;
 union all
select stu_name
  from tb_student
 where stu_name like &#39;%嫣%&#39;;

-- 16. 查询姓“杨”或姓“林”名字三个字的学生的姓名(正则表达式模糊查询)
-- regular expression
select stu_name
  from tb_student
 where stu_name regexp &#39;[杨林][\\\\u4e00-\\\\u9fa5]{2}&#39;;

-- 17. 查询没有录入籍贯的学生姓名(空值处理)
select stu_name
  from tb_student
 where stu_addr is null or trim(stu_addr) = &#39;&#39;;
 
update tb_student
   set stu_addr = &#39; &#39;
 where stu_id = 1572;

-- 18. 查询录入了籍贯的学生姓名(空值处理)
select stu_name
  from tb_student
 where stu_addr is not null and trim(stu_addr) &lt;&gt; &#39;&#39;;

-- 19. 查询学生选课的所有日期(去重)
select distinct sel_date
  from tb_record;

-- 20. 查询学生的籍贯(空值处理和去重)
select distinct stu_addr
  from tb_student
 where stu_addr is not null and trim(stu_addr) &lt;&gt; &#39;&#39;;

-- 21. 查询男学生的姓名和生日按年龄从大到小排列(排序)
-- ascending / descending
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 1
 order by stu_birth asc;

-- 22. 将上面查询中的生日换算成年龄(日期函数、数值函数)
-- 获取当前日期：curdate()
-- 计算时间差：timestampdiff(unit, date1, date2)
select stu_name
     , timestampdiff(year, stu_birth, curdate()) as stu_age
  from tb_student
 where stu_sex = 1
 order by stu_age desc;

-- 聚合函数：max / min / avg / sum / count / std / variance
-- 聚合函数会自动忽略掉null
-- 23. 查询年龄最大的学生的出生日期(聚合函数)
select min(stu_birth)
  from tb_student;

-- 24. 查询年龄最小的学生的出生日期(聚合函数)
select max(stu_birth)
  from tb_student;

-- 25. 查询编号为1111的课程考试成绩的最高分(聚合函数)
select max(score)
  from tb_record
 where cou_id = 1111;

-- 26. 查询学号为1001的学生考试成绩的最低分(聚合函数)
select min(score)
  from tb_record
 where stu_id = 1001;

-- 27. 查询学号为1001的学生考试成绩的平均分和标准差(聚合函数)
-- 四舍五入函数：round(num, n)
select round(avg(score), 1) as avg_score
     , round(std(score), 4) as std_score
  from tb_record
 where stu_id = 1001;

-- 28. 查询学号为1001的学生考试成绩的平均分，如果有null值，null值算0分(聚合函数)
select sum(score) / count(*)
  from tb_record
 where stu_id = 1001;

-- 29. 查询男女学生的人数(分组和聚合函数)
select case stu_sex when 1 then &#39;男&#39; else &#39;女&#39; end as stu_sex
     , count(*) as total
  from tb_student
 group by stu_sex;

-- 30. 查询每个学院学生人数(分组和聚合函数)
select col_id
     , count(*) as total
  from tb_student
 group by col_id
  with rollup;

-- 31. 查询每个学院男女学生人数(分组和聚合函数)
select col_id
     , case stu_sex when 1 then &#39;男&#39; else &#39;女&#39; end as stu_sex
     , count(*) as total
  from tb_student
 group by col_id, stu_sex;

-- 32. 查询选课学生的学号和平均成绩(分组和聚合函数)
select stu_id
     , round(avg(score), 1) as avg_score
  from tb_record
 group by stu_id;

-- 33. 查询平均成绩大于等于90分的学生的学号和平均成绩(分组和聚合函数)
-- 结论：分组前的筛选使用where子句，分组后的筛选使用having子句
select stu_id
     , round(avg(score), 1) as avg_score
  from tb_record
 group by stu_id
having avg(score) &gt;= 90;

-- 34. 查询所有课程成绩大于80分的同学的学号(分组和聚合函数)
select stu_id
  from tb_record
 group by stu_id
having min(score) &gt; 80;

-- Error Code: 1242. Subquery returns more than 1 row
select stu_id
	 , stu_name
  from tb_student
 where stu_id in (select stu_id
					from tb_record
				   group by stu_id
				  having min(score) &gt; 80);

-- 35. 查询年龄最大的学生的姓名(嵌套查询)
-- 嵌套查询/子查询：把一个查询的结果作为另外一个查询的一部分来使用
select @a := min(stu_birth)
  from tb_student;
  
select stu_name
  from tb_student
 where stu_birth = @a;
 
select stu_name
  from tb_student
 where stu_birth = (select min(stu_birth)
                      from tb_student);

-- 36. 查询选了两门以上的课程的学生姓名(嵌套查询/分组/数据筛选)
select stu_name
  from tb_student
 where stu_id in (select stu_id
                    from tb_record
                   group by stu_id
                  having count(*) &gt; 2);

-- 37. 查询学生的姓名、生日和所在学院名称(连接查询)
select stu_name
     , stu_birth
     , col_name
  from tb_student, tb_college
 where tb_student.col_id = tb_college.col_id;

select stu_name
     , stu_birth
     , col_name
  from tb_student inner join tb_college
       on tb_student.col_id = tb_college.col_id;

select stu_name
     , stu_birth
     , col_name
  from tb_student natural join tb_college;

-- 38. 查询学生姓名、课程名称以及成绩(连接查询)
select stu_name
     , cou_name
     , score
  from tb_student, tb_course, tb_record
 where tb_student.stu_id = tb_record.stu_id
       and tb_course.cou_id = tb_record.cou_id
       and score is not null;

select stu_name
     , cou_name
     , score
  from tb_student 
	   inner join tb_record
           on tb_student.stu_id = tb_record.stu_id
	   inner join tb_course
           on tb_course.cou_id = tb_record.cou_id
 where score is not null;
 
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null;
 
-- 39. 上面的查询结果按课程和成绩排序取前5条数据(分页查询)
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null
 order by cou_id asc, score desc
 limit 5;

-- 40. 上面的查询结果按课程和成绩排序取第6-10条数据(分页查询)
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null
 order by cou_id asc, score desc
 limit 5
offset 5;

-- 41. 上面的查询结果按课程和成绩排序取第11-15条数据(分页查询)
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null
 order by cou_id asc, score desc
 limit 5
offset 10;

-- 42. 查询选课学生的姓名和平均成绩(嵌套查询和连接查询)
select stu_name
     , avg_score
  from tb_student
       natural join (select stu_id
						  , avg(score) as avg_score
					   from tb_record
					  group by stu_id) as tmp;

-- 43. 查询学生的姓名和选课的数量(嵌套查询和连接查询)
select stu_name
     , total
  from tb_student
       inner join (select stu_id
						, count(*) as total
					 from tb_record
					group by stu_id) as tmp
	       on tb_student.stu_id = tmp.stu_id;

-- 44. 查询所有学生的姓名和选课数量(左外连接和嵌套查询)
-- 左外连接：把左表（写在join左边的表）所有的数据都拿到，不满足连表条件的地方填充null - left outer join
-- 右外连接：把右表（写在join右边的表）所有的数据都拿到，不满足连表条件的地方填充null - right outer join
-- 全外连接：把左表和右表的数据全部拿到即便它们不满足连表条件，MySQL不支持全外连接 - full outer join
select stu_name
     , coalesce(total, 0) as total
  from tb_student
       left join (select stu_id
					   , count(*) as total
					from tb_record
				   group by stu_id) as tmp
	       on tb_student.stu_id = tmp.stu_id;

-- 45. 查询没有选课的学生的姓名(左外连接和数据筛选)
select stu_name
  from tb_student
       left join tb_record
	       on tb_student.stu_id = tb_record.stu_id
 where tb_record.stu_id is null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 DQL 有几个地方需要加以说明：</p><ol><li><p>MySQL目前的版本不支持全外连接，上面我们通过<code>union</code>操作，将左外连接和右外连接的结果求并集实现全外连接的效果。大家可以通过下面的图来加深对连表操作的认识。</p></li><li><p>MySQL 中支持多种类型的运算符，包括：算术运算符（<code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>、<code>%</code>）、比较运算符（<code>=</code>、<code>&lt;&gt;</code>、<code>&lt;=&gt;</code>、<code>&lt;</code>、<code>&lt;=</code>、<code>&gt;</code>、<code>&gt;=</code>、<code>BETWEEN...AND..</code>.、<code>IN</code>、<code>IS NULL</code>、<code>IS NOT NULL</code>、<code>LIKE</code>、<code>RLIKE</code>、<code>REGEXP</code>）、逻辑运算符（<code>NOT</code>、<code>AND</code>、<code>OR</code>、<code>XOR</code>）和位运算符（<code>&amp;</code>、<code>|</code>、<code>^</code>、<code>~</code>、<code>&gt;&gt;</code>、<code>&lt;&lt;</code>），我们可以在 DML 中使用这些运算符处理数据。</p></li><li><p>在查询数据时，可以在<code>SELECT</code>语句及其子句（如<code>WHERE</code>子句、<code>ORDER BY</code>子句、<code>HAVING</code>子句等）中使用函数，这些函数包括字符串函数、数值函数、时间日期函数、流程函数等，如下面的表格所示。</p><p>常用字符串函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>CONCAT</code></td><td>将多个字符串连接成一个字符串</td></tr><tr><td><code>FORMAT</code></td><td>将数值格式化成字符串并指定保留几位小数</td></tr><tr><td><code>FROM_BASE64</code> / <code>TO_BASE64</code></td><td>BASE64解码/编码</td></tr><tr><td><code>BIN</code> / <code>OCT</code> / <code>HEX</code></td><td>将数值转换成二进制/八进制/十六进制字符串</td></tr><tr><td><code>LOCATE</code></td><td>在字符串中查找一个子串的位置</td></tr><tr><td><code>LEFT</code> / <code>RIGHT</code></td><td>返回一个字符串左边/右边指定长度的字符</td></tr><tr><td><code>LENGTH</code> / <code>CHAR_LENGTH</code></td><td>返回字符串的长度以字节/字符为单位</td></tr><tr><td><code>LOWER</code> / <code>UPPER</code></td><td>返回字符串的小写/大写形式</td></tr><tr><td><code>LPAD</code> / <code>RPAD</code></td><td>如果字符串的长度不足，在字符串左边/右边填充指定的字符</td></tr><tr><td><code>LTRIM</code> / <code>RTRIM</code></td><td>去掉字符串前面/后面的空格</td></tr><tr><td><code>ORD</code> / <code>CHAR</code></td><td>返回字符对应的编码/返回编码对应的字符</td></tr><tr><td><code>STRCMP</code></td><td>比较字符串，返回-1、0、1分别表示小于、等于、大于</td></tr><tr><td><code>SUBSTRING</code></td><td>返回字符串指定范围的子串</td></tr></tbody></table><p>常用数值函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>ABS</code></td><td>返回一个数的绝度值</td></tr><tr><td><code>CEILING</code> / <code>FLOOR</code></td><td>返回一个数上取整/下取整的结果</td></tr><tr><td><code>CONV</code></td><td>将一个数从一种进制转换成另一种进制</td></tr><tr><td><code>CRC32</code></td><td>计算循环冗余校验码</td></tr><tr><td><code>EXP</code> / <code>LOG</code> / <code>LOG2</code> / <code>LOG10</code></td><td>计算指数/对数</td></tr><tr><td><code>POW</code></td><td>求幂</td></tr><tr><td><code>RAND</code></td><td>返回[0,1)范围的随机数</td></tr><tr><td><code>ROUND</code></td><td>返回一个数四舍五入后的结果</td></tr><tr><td><code>SQRT</code></td><td>返回一个数的平方根</td></tr><tr><td><code>TRUNCATE</code></td><td>截断一个数到指定的精度</td></tr><tr><td><code>SIN</code> / <code>COS</code> / <code>TAN</code> / <code>COT</code> / <code>ASIN</code> / <code>ACOS</code> / <code>ATAN</code></td><td>三角函数</td></tr></tbody></table><p>常用时间日期函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>CURDATE</code> / <code>CURTIME</code> / <code>NOW</code></td><td>获取当前日期/时间/日期和时间</td></tr><tr><td><code>ADDDATE</code> / <code>SUBDATE</code></td><td>将两个日期表达式相加/相减并返回结果</td></tr><tr><td><code>DATE</code> / <code>TIME</code></td><td>从字符串中获取日期/时间</td></tr><tr><td><code>YEAR</code> / <code>MONTH</code> / <code>DAY</code></td><td>从日期中获取年/月/日</td></tr><tr><td><code>HOUR</code> / <code>MINUTE</code> / <code>SECOND</code></td><td>从时间中获取时/分/秒</td></tr><tr><td><code>DATEDIFF</code> / <code>TIMEDIFF</code></td><td>返回两个时间日期表达式相差多少天/小时</td></tr><tr><td><code>MAKEDATE</code> / <code>MAKETIME</code></td><td>制造一个日期/时间</td></tr></tbody></table><p>常用流程函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>IF</code></td><td>根据条件是否成立返回不同的值</td></tr><tr><td><code>IFNULL</code></td><td>如果为NULL则返回指定的值否则就返回本身</td></tr><tr><td><code>NULLIF</code></td><td>两个表达式相等就返回NULL否则返回第一个表达式的值</td></tr></tbody></table><p>其他常用函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>MD5</code> / <code>SHA1</code> / <code>SHA2</code></td><td>返回字符串对应的哈希摘要</td></tr><tr><td><code>CHARSET</code> / <code>COLLATION</code></td><td>返回字符集/校对规则</td></tr><tr><td><code>USER</code> / <code>CURRENT_USER</code></td><td>返回当前用户</td></tr><tr><td><code>DATABASE</code></td><td>返回当前数据库名</td></tr><tr><td><code>VERSION</code></td><td>返回当前数据库版本</td></tr><tr><td><code>FOUND_ROWS</code> / <code>ROW_COUNT</code></td><td>返回查询到的行数/受影响的行数</td></tr><tr><td><code>LAST_INSERT_ID</code></td><td>返回最后一个自增主键的值</td></tr><tr><td><code>UUID</code> / <code>UUID_SHORT</code></td><td>返回全局唯一标识符</td></tr></tbody></table></li></ol><h2 id="第44课-sql详解之dcl" tabindex="-1"><a class="header-anchor" href="#第44课-sql详解之dcl" aria-hidden="true">#</a> 第44课：SQL详解之DCL</h2><p>数据库服务器通常包含了非常重要的数据，可以通过访问控制来确保这些数据的安全，而 DCL 就是解决这一问题的，它可以为指定的用户授予访问权限或者从指定用户处召回指定的权限。DCL 对数据库管理员来说非常重要，因为用户权限的管理关系到数据库的安全。简单的说，我们可以通过 DCL 允许受信任的用户访问数据库，阻止不受信任的用户访问数据库，同时还可以通过 DCL 将每个访问者的的权限最小化（让访问者的权限刚刚够用）。</p><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h3><p>我们可以使用下面的 SQL 来创建一个用户并为其指定访问口令。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create user &#39;wangdachui&#39;@&#39;%&#39; identified by &#39;Wang.618&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的 SQL 创建了名为 wangdachui 的用户，它的访问口令是 Wang.618，该用户可以从任意主机访问数据库服务器，因为 @ 后面使用了可以表示任意多个字符的通配符 %。如果要限制 wangdachui 这个用户只能从 192.168.0.x 这个网段的主机访问数据库服务器，可以按照下面的方式来修改 SQL 语句。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop user if exists &#39;wangdachui&#39;@&#39;%&#39;;

create user &#39;wangdachui&#39;@&#39;192.168.0.%&#39; identified by &#39;Wang.618&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，如果我们使用 wangdachui 这个账号访问数据库服务器，我们几乎不能做任何操作，因为该账号没有任何操作权限。</p><h3 id="授予权限" tabindex="-1"><a class="header-anchor" href="#授予权限" aria-hidden="true">#</a> 授予权限</h3><p>我们用下面的语句为 wangdachui 授予查询 school 数据库学院表（<code>tb_college</code>）的权限。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>grant select on \`school\`.\`tb_college\` to &#39;wangdachui&#39;@&#39;192.168.0.%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们也可以让 wangdachui 对 school 数据库的所有对象都具有查询权限，代码如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>grant select on \`school\`.* to &#39;wangdachui&#39;@&#39;192.168.0.%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们希望 wangdachui 还有 insert、delete 和 update 权限，可以使用下面的方式进行操作。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>grant insert, delete, update on \`school\`.* to &#39;wangdachui&#39;@&#39;192.168.0.%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们还想授予 wangdachui 执行 DDL 的权限，可以使用如下所示的 SQL。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>grant create, drop, alter on \`school\`.* to &#39;wangdachui&#39;@&#39;192.168.0.%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们希望 wangdachui 账号对所有数据库的所有对象都具备所有的操作权限，可以执行如下所示的操作，但是一般情况下，我们不会这样做，因为我们之前说过，权限刚刚够用就行，一个普通的账号不应该拥有这么大的权限。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>grant all privileges on *.* to &#39;wangdachui&#39;@&#39;192.168.0.%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="召回权限" tabindex="-1"><a class="header-anchor" href="#召回权限" aria-hidden="true">#</a> 召回权限</h3><p>如果要召回 wangdachui 对 school 数据库的 insert、delete 和 update 权限，可以使用下面的操作。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>revoke insert, delete, update on \`school\`.* from &#39;wangdachui&#39;@&#39;192.168.0.%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要召回所有的权限，可以按照如下所示的方式进行操作。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>revoke all privileges on *.* from &#39;wangdachui&#39;@&#39;192.168.0.%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要说明的是，由于数据库可能会缓存用户的权限，可以在授予或召回权限后执行下面的语句使新的权限即时生效。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第45课-索引" tabindex="-1"><a class="header-anchor" href="#第45课-索引" aria-hidden="true">#</a> 第45课：索引</h2><p>索引是关系型数据库中用来提升查询性能最为重要的手段。关系型数据库中的索引就像一本书的目录，我们可以想象一下，如果要从一本书中找出某个知识点，但是这本书没有目录，这将是意见多么可怕的事情！我们估计得一篇一篇的翻下去，才能确定这个知识点到底在什么位置。创建索引虽然会带来存储空间上的开销，就像一本书的目录会占用一部分篇幅一样，但是在牺牲空间后换来的查询时间的减少也是非常显著的。</p>`,121),Ts={href:"https://zh.wikipedia.org/zh-cn/%E5%B9%B3%E8%A1%A1%E6%A0%91",target:"_blank",rel:"noopener noreferrer"},Ms=t(`<p>B+ 树由根节点、中间节点和叶子节点构成，其中叶子节点用来保存排序后的数据。由于记录在索引上是排序过的，因此在一个叶子节点内查找数据时可以使用二分查找，这种查找方式效率非常的高。当数据很少的时候，B+ 树只有一个根节点，数据也就保存在根节点上。随着记录越来越多，B+ 树会发生分裂，根节点不再保存数据，而是提供了访问下一层节点的指针，帮助快速确定数据在哪个叶子节点上。</p><p>在创建二维表时，我们通常都会为表指定主键列，主键列上默认会创建索引，而对于 MySQL InnoDB 存储引擎来说，因为它使用的是索引组织表这种数据存储结构，所以主键上的索引就是整张表的数据，而这种索引我们也将其称之为<strong>聚集索引</strong>（clustered index）。很显然，一张表只能有一个聚集索引，否则表的数据岂不是要保存多次。我们自己创建的索引都是二级索引（secondary index），更常见的叫法是<strong>非聚集索引</strong>（non-clustered index）。通过我们自定义的非聚集索引只能定位记录的主键，在获取数据时可能需要再通过主键上的聚集索引进行查询，这种现象称为“回表”，因此通过非聚集索引检索数据通常比使用聚集索引检索数据要慢。</p><p>接下来我们通过一个简单的例子来说明索引的意义，比如我们要根据学生的姓名来查找学生，这个场景在实际开发中应该经常遇到，就跟通过商品名称查找商品是一个道理。我们可以使用 MySQL 的<code>explain</code>关键字来查看 SQL 的执行计划（数据库执行 SQL 语句的具体步骤）。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>explain select * from tb_student where stuname=&#39;林震南&#39;\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: tb_student
   partitions: NULL
         type: ALL
possible_keys: NULL
          key: NULL
      key_len: NULL
          ref: NULL
         rows: 11
     filtered: 10.00
        Extra: Using where
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的 SQL 执行计划中，有几项值得我们关注：</p><ol><li><code>select_type</code>：查询的类型。 <ul><li><code>SIMPLE</code>：简单 SELECT，不需要使用 UNION 操作或子查询。</li><li><code>PRIMARY</code>：如果查询包含子查询，最外层的 SELECT 被标记为 PRIMARY。</li><li><code>UNION</code>：UNION 操作中第二个或后面的 SELECT 语句。</li><li><code>SUBQUERY</code>：子查询中的第一个 SELECT。</li><li><code>DERIVED</code>：派生表的 SELECT 子查询。</li></ul></li><li><code>table</code>：查询对应的表。</li><li><code>type</code>：MySQL 在表中找到满足条件的行的方式，也称为访问类型，包括：<code>ALL</code>（全表扫描）、<code>index</code>（索引全扫描，只遍历索引树）、<code>range</code>（索引范围扫描）、<code>ref</code>（非唯一索引扫描）、<code>eq_ref</code>（唯一索引扫描）、<code>const</code> / <code>system</code>（常量级查询）、<code>NULL</code>（不需要访问表或索引）。在所有的访问类型中，很显然 ALL 是性能最差的，它代表的全表扫描是指要扫描表中的每一行才能找到匹配的行。</li><li><code>possible_keys</code>：MySQL 可以选择的索引，但是<strong>有可能不会使用</strong>。</li><li><code>key</code>：MySQL 真正使用的索引，如果为<code>NULL</code>就表示没有使用索引。</li><li><code>key_len</code>：使用的索引的长度，在不影响查询的情况下肯定是长度越短越好。</li><li><code>rows</code>：执行查询需要扫描的行数，这是一个<strong>预估值</strong>。</li><li><code>extra</code>：关于查询额外的信息。 <ul><li><code>Using filesort</code>：MySQL 无法利用索引完成排序操作。</li><li><code>Using index</code>：只使用索引的信息而不需要进一步查表来获取更多的信息。</li><li><code>Using temporary</code>：MySQL 需要使用临时表来存储结果集，常用于分组和排序。</li><li><code>Impossible where</code>：<code>where</code>子句会导致没有符合条件的行。</li><li><code>Distinct</code>：MySQL 发现第一个匹配行后，停止为当前的行组合搜索更多的行。</li><li><code>Using where</code>：查询的列未被索引覆盖，筛选条件并不是索引的前导列。</li></ul></li></ol><p>从上面的执行计划可以看出，当我们通过学生名字查询学生时实际上是进行了全表扫描，不言而喻这个查询性能肯定是非常糟糕的，尤其是在表中的行很多的时候。如果我们需要经常通过学生姓名来查询学生，那么就应该在学生姓名对应的列上创建索引，通过索引来加速查询。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create index idx_student_name on tb_student(stuname);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看刚才的 SQL 对应的执行计划。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>explain select * from tb_student where stuname=&#39;林震南&#39;\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: tb_student
   partitions: NULL
         type: ref
possible_keys: idx_student_name
          key: idx_student_name
      key_len: 62
          ref: const
         rows: 1
     filtered: 100.00
        Extra: NULL
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以注意到，在对学生姓名创建索引后，刚才的查询已经不是全表扫描而是基于索引的查询，而且扫描的行只有唯一的一行，这显然大大的提升了查询的性能。MySQL 中还允许创建前缀索引，即对索引字段的前N个字符创建索引，这样的话可以减少索引占用的空间（但节省了空间很有可能会浪费时间，<strong>时间和空间是不可调和的矛盾</strong>），如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create index idx_student_name_1 on tb_student(stuname(1));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的索引相当于是根据学生姓名的第一个字来创建的索引，我们再看看 SQL 执行计划。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>explain select * from tb_student where stuname=&#39;林震南&#39;\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: tb_student
   partitions: NULL
         type: ref
possible_keys: idx_student_name
          key: idx_student_name
      key_len: 5
          ref: const
         rows: 2
     filtered: 100.00
        Extra: Using where
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不知道大家是否注意到，这一次扫描的行变成了2行，因为学生表中有两个姓“林”的学生，我们只用姓名的第一个字作为索引的话，在查询时通过索引就会找到这两行。</p><p>如果要删除索引，可以使用下面的SQL。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table tb_student drop index idx_student_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop index idx_student_name on tb_student;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在创建索引时，我们还可以使用复合索引、函数索引（MySQL 5.7 开始支持），用好复合索引实现<strong>索引覆盖</strong>可以减少不必要的排序和回表操作，这样就会让查询的性能成倍的提升，有兴趣的读者可以自行研究。</p><p>我们简单的为大家总结一下索引的设计原则：</p><ol><li><strong>最适合</strong>索引的列是出现在<strong>WHERE子句</strong>和连接子句中的列。</li><li>索引列的基数越大（取值多、重复值少），索引的效果就越好。</li><li>使用<strong>前缀索引</strong>可以减少索引占用的空间，内存中可以缓存更多的索引。</li><li><strong>索引不是越多越好</strong>，虽然索引加速了读操作（查询），但是写操作（增、删、改）都会变得更慢，因为数据的变化会导致索引的更新，就如同书籍章节的增删需要更新目录一样。</li><li>使用 InnoDB 存储引擎时，表的普通索引都会保存主键的值，所以<strong>主键要尽可能选择较短的数据类型</strong>，这样可以有效的减少索引占用的空间，提升索引的缓存效果。</li></ol><p>最后，还有一点需要说明，InnoDB 使用的 B-tree 索引，数值类型的列除了等值判断时索引会生效之外，使用<code>&gt;</code>、<code>&lt;</code>、<code>&gt;=</code>、<code>&lt;=</code>、<code>BETWEEN...AND... </code>、<code>&lt;&gt;</code>时，索引仍然生效；对于字符串类型的列，如果使用不以通配符开头的模糊查询，索引也是起作用的，但是其他的情况会导致索引失效，这就意味着很有可能会做全表查询。</p><h2 id="第46课-视图、函数和过程" tabindex="-1"><a class="header-anchor" href="#第46课-视图、函数和过程" aria-hidden="true">#</a> 第46课：视图、函数和过程</h2><p>为了讲解视图、函数和过程，我们首先用下面的 DDL 和 DML 创建名为 hrs 的数据库并为其二维表添加如下所示的数据。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 创建名为hrs的数据库并指定默认的字符集
create database \`hrs\` default charset utf8mb4;

-- 切换到hrs数据库
use \`hrs\`;

-- 创建部门表
create table \`tb_dept\`
(
\`dno\` int not null comment &#39;编号&#39;,
\`dname\` varchar(10) not null comment &#39;名称&#39;,
\`dloc\` varchar(20) not null comment &#39;所在地&#39;,
primary key (\`dno\`)
);

-- 插入4个部门
insert into \`tb_dept\` values 
    (10, &#39;会计部&#39;, &#39;北京&#39;),
    (20, &#39;研发部&#39;, &#39;成都&#39;),
    (30, &#39;销售部&#39;, &#39;重庆&#39;),
    (40, &#39;运维部&#39;, &#39;深圳&#39;);

-- 创建员工表
create table \`tb_emp\`
(
\`eno\` int not null comment &#39;员工编号&#39;,
\`ename\` varchar(20) not null comment &#39;员工姓名&#39;,
\`job\` varchar(20) not null comment &#39;员工职位&#39;,
\`mgr\` int comment &#39;主管编号&#39;,
\`sal\` int not null comment &#39;员工月薪&#39;,
\`comm\` int comment &#39;每月补贴&#39;,
\`dno\` int not null comment &#39;所在部门编号&#39;,
primary key (\`eno\`),
constraint \`fk_emp_mgr\` foreign key (\`mgr\`) references tb_emp (\`eno\`),
constraint \`fk_emp_dno\` foreign key (\`dno\`) references tb_dept (\`dno\`)
);

-- 插入14个员工
insert into \`tb_emp\` values 
    (7800, &#39;张三丰&#39;, &#39;总裁&#39;, null, 9000, 1200, 20),
    (2056, &#39;乔峰&#39;, &#39;分析师&#39;, 7800, 5000, 1500, 20),
    (3088, &#39;李莫愁&#39;, &#39;设计师&#39;, 2056, 3500, 800, 20),
    (3211, &#39;张无忌&#39;, &#39;程序员&#39;, 2056, 3200, null, 20),
    (3233, &#39;丘处机&#39;, &#39;程序员&#39;, 2056, 3400, null, 20),
    (3251, &#39;张翠山&#39;, &#39;程序员&#39;, 2056, 4000, null, 20),
    (5566, &#39;宋远桥&#39;, &#39;会计师&#39;, 7800, 4000, 1000, 10),
    (5234, &#39;郭靖&#39;, &#39;出纳&#39;, 5566, 2000, null, 10),
    (3344, &#39;黄蓉&#39;, &#39;销售主管&#39;, 7800, 3000, 800, 30),
    (1359, &#39;胡一刀&#39;, &#39;销售员&#39;, 3344, 1800, 200, 30),
    (4466, &#39;苗人凤&#39;, &#39;销售员&#39;, 3344, 2500, null, 30),
    (3244, &#39;欧阳锋&#39;, &#39;程序员&#39;, 3088, 3200, null, 20),
    (3577, &#39;杨过&#39;, &#39;会计&#39;, 5566, 2200, null, 10),
    (3588, &#39;朱九真&#39;, &#39;会计&#39;, 5566, 2500, null, 10);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><p>视图是关系型数据库中将一组查询指令构成的结果集组合成可查询的数据表的对象。简单的说，视图就是虚拟的表，但与数据表不同的是，数据表是一种实体结构，而视图是一种虚拟结构，你也可以将视图理解为保存在数据库中被赋予名字的 SQL 语句。</p><p>使用视图可以获得以下好处：</p><ol><li>可以将实体数据表隐藏起来，让外部程序无法得知实际的数据结构，让访问者可以使用表的组成部分而不是整个表，降低数据库被攻击的风险。</li><li>在大多数的情况下视图是只读的（更新视图的操作通常都有诸多的限制），外部程序无法直接透过视图修改数据。</li><li>重用 SQL 语句，将高度复杂的查询包装在视图表中，直接访问该视图即可取出需要的数据；也可以将视图视为数据表进行连接查询。</li><li>视图可以返回与实体数据表不同格式的数据，在创建视图的时候可以对数据进行格式化处理。</li></ol><p>创建视图。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create view \`vw_emp_simple\`
as
select  \`eno\`,
        \`ename\`,
        \`job\`,
        \`dno\`
  from  \`tb_emp\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：因为视图不包含数据，所以每次使用视图时，都必须执行查询以获得数据，如果你使用了连接查询、嵌套查询创建了较为复杂的视图，你可能会发现查询性能下降得很厉害。因此，在使用复杂的视图前，应该进行测试以确保其性能能够满足应用的需求。</p></blockquote><p>有了上面的视图，我们就可以使用之前讲过的 DCL， 限制某些用户只能从视图中获取员工信息，这样员工表中的工资（<code>sal</code>）、补贴（<code>comm</code>）等敏感字段便不会暴露给用户。下面的代码演示了如何从视图中获取数据。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select * from \`vw_emp_simple\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------+-----------+--------------+-----+
| eno  | ename     | job          | dno |
+------+-----------+--------------+-----+
| 1359 | 胡二刀    | 销售员       |  30 |
| 2056 | 乔峰      | 分析师       |  20 |
| 3088 | 李莫愁    | 设计师       |  20 |
| 3211 | 张无忌    | 程序员       |  20 |
| 3233 | 丘处机    | 程序员       |  20 |
| 3244 | 欧阳锋    | 程序员       |  20 |
| 3251 | 张翠山    | 程序员       |  20 |
| 3344 | 黄蓉      | 销售主管     |  30 |
| 3577 | 杨过      | 会计         |  10 |
| 3588 | 朱九真    | 会计         |  10 |
| 4466 | 苗人凤    | 销售员       |  30 |
| 5234 | 郭靖      | 出纳         |  10 |
| 5566 | 宋远桥    | 会计师       |  10 |
| 7800 | 张三丰    | 总裁         |  20 |
+------+-----------+--------------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然视图是一张虚拟的表，那么视图的中的数据可以更新吗？视图的可更新性要视具体情况而定，以下类型的视图是不能更新的：</p><ol><li>使用了聚合函数（<code>SUM</code>、<code>MIN</code>、<code>MAX</code>、<code>AVG</code>、<code>COUNT</code>等）、<code>DISTINCT</code>、<code>GROUP BY</code>、<code>HAVING</code>、<code>UNION</code>或者<code>UNION ALL</code>的视图。</li><li><code>SELECT</code>中包含了子查询的视图。</li><li><code>FROM</code>子句中包含了一个不能更新的视图的视图。</li><li><code>WHERE</code>子句的子查询引用了<code>FROM</code>子句中的表的视图。</li></ol><p>删除视图。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop view if exists \`vw_emp_simple\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：如果希望更新视图，可以先用上面的命令删除视图，也可以通过<code>create or replace view</code>来更新视图。</p></blockquote><p>视图的规则和限制。</p><ol><li>视图可以嵌套，可以利用从其他视图中检索的数据来构造一个新的视图。视图也可以和表一起使用。</li><li>创建视图时可以使用<code>order by</code>子句，但如果从视图中检索数据时也使用了<code>order by</code>，那么该视图中原先的<code>order by</code>会被覆盖。</li><li>视图无法使用索引，也不会激发触发器（实际开发中因为性能等各方面的考虑，通常不建议使用触发器，所以我们也不对这个概念进行介绍）的执行。</li></ol><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p>MySQL 中的函数跟 python 中的函数大同小异，因为函数都是用来封装功能上相对独立且会被重复使用的代码的。如果非要找出一些差别来，那么 MySQL 中的函数是可以执行 SQL 语句的。下面的例子，我们通过自定义函数实现了截断超长字符串的功能。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>delimiter $$

create function fn_truncate_string(
    content varchar(10000),
    max_length int unsigned
) returns varchar(10000) no sql
begin
    declare result varchar(10000) default content;
    if char_length(content) &gt; max_length then
        set result = left(content, max_length);
        set result = concat(result, &#39;……&#39;);
    end if;
    return result;
end $$

delimiter ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明1</strong>：函数声明后面的<code>no sql</code>是声明函数体并没有使用 SQL 语句；如果函数体中需要通过 SQL 读取数据，需要声明为<code>reads sql data</code>。</p><p><strong>说明2</strong>：定义函数前后的<code>delimiter</code>命令是为了修改终止符（定界符），因为函数体中的语句都是用<code>;</code>表示结束，如果不重新定义定界符，那么遇到的<code>;</code>的时候代码就会被截断执行，显然这不是我们想要的效果。</p></blockquote><p>在查询中调用自定义函数。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select fn_truncate_string(&#39;和我在成都的街头走一走，直到所有的灯都熄灭了也不停留&#39;, 10) as short_string;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------------------------+
| short_string                         |
+--------------------------------------+
| 和我在成都的街头走一……                 |
+--------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h3><p>过程（又称存储过程）是事先编译好存储在数据库中的一组 SQL 的集合，调用过程可以简化应用程序开发人员的工作，减少与数据库服务器之间的通信，对于提升数据操作的性能也是有帮助的。其实迄今为止，我们使用的 SQL 语句都是针对一个或多个表的单条语句，但在实际开发中经常会遇到某个操作需要多条 SQL 语句才能完成的情况。例如，电商网站在受理用户订单时，需要做以下一系列的处理。</p><ol><li>通过查询来核对库存中是否有对应的物品以及库存是否充足。</li><li>如果库存有物品，需要锁定库存以确保这些物品不再卖给别人， 并且要减少可用的物品数量以反映正确的库存量。</li><li>如果库存不足，可能需要进一步与供应商进行交互或者至少产生一条系统提示消息。</li><li>不管受理订单是否成功，都需要产生流水记录，而且需要给对应的用户产生一条通知信息。</li></ol><p>我们可以通过过程将复杂的操作封装起来，这样不仅有助于保证数据的一致性，而且将来如果业务发生了变动，只需要调整和修改过程即可。对于调用过程的用户来说，过程并没有暴露数据表的细节，而且执行过程比一条条的执行一组 SQL 要快得多。</p><p>下面的过程实现 hrs 数据库中员工工资的普调，具体的规则是：<code>10</code>部门的员工薪资上浮<code>300</code>， <code>20</code>部门的员工薪资上浮<code>800</code>，<code>30</code>部门的员工薪资上浮<code>500</code>。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>delimiter $$

create procedure sp_upgrade_salary()
begin
    declare flag boolean default 1;
    -- 定义一个异常处理器
    declare continue handler for sqlexception set flag=0;

    -- 开启事务环境
    start transaction;
    
    update tb_emp set sal=sal+300 where dno=10;
    update tb_emp set sal=sal+800 where dno=20;
    update tb_emp set sal=sal+500 where dno=30;

    -- 提交或回滚事务
    if flag then
        commit;
    else
        rollback;
    end if;
end $$

delimiter ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的过程代码中使用了<code>start transaction</code>来开启事务环境，关于事务，在本课的最后有一个简单的介绍。为了确定代码中是否发生异常，从而提交或回滚事务，上面的过程中定义了一个名为<code>flag</code>的变量和一个异常处理器，如果发生了异常，<code>flag</code>将会被赋值为<code>0</code>，后面的分支结构会根据<code>flag</code>的值来决定是执行<code>commit</code>，还是执行<code>rollback</code>。</p></blockquote><p>调用过程。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>call sp_upgrade_salary();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除过程。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop procedure if exists sp_upgrade_salary;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在过程中，我们可以定义变量、条件，可以使用分支和循环语句，可以通过游标操作查询结果，还可以使用事件调度器，这些内容我们暂时不在此处进行介绍。虽然我们说了很多过程的好处，但是在实际开发中，如果频繁的使用过程并将大量复杂的运算放到过程中，会给据库服务器造成巨大的压力，而数据库往往都是性能瓶颈所在，使用过程无疑是雪上加霜的操作。所以，对于互联网产品开发，我们一般建议让数据库只做好存储，复杂的运算和处理交给应用服务器上的程序去完成，如果应用服务器变得不堪重负了，我们可以比较容易的部署多台应用服务器来分摊这些压力。</p>`,66),Is={href:"https://item.jd.com/12818982.html",target:"_blank",rel:"noopener noreferrer"},Es=t(`<h3 id="其他内容" tabindex="-1"><a class="header-anchor" href="#其他内容" aria-hidden="true">#</a> 其他内容</h3><h4 id="范式理论" tabindex="-1"><a class="header-anchor" href="#范式理论" aria-hidden="true">#</a> 范式理论</h4><p>范式理论是设计关系型数据库中二维表的指导思想。</p><ol><li>第一范式：数据表的每个列的值域都是由原子值组成的，不能够再分割。</li><li>第二范式：数据表里的所有数据都要和该数据表的键（主键与候选键）有完全依赖关系。</li><li>第三范式：所有非键属性都只和候选键有相关性，也就是说非键属性之间应该是独立无关的。</li></ol><blockquote><p><strong>说明</strong>：实际工作中，出于效率的考虑，我们在设计表时很有可能做出反范式设计，即故意降低方式级别，增加冗余数据来获得更好的操作性能。</p></blockquote><h4 id="数据完整性" tabindex="-1"><a class="header-anchor" href="#数据完整性" aria-hidden="true">#</a> 数据完整性</h4><ol><li><p>实体完整性 - 每个实体都是独一无二的</p><ul><li>主键（<code>primary key</code>） / 唯一约束（<code>unique</code>）</li></ul></li><li><p>引用完整性（参照完整性）- 关系中不允许引用不存在的实体</p><ul><li>外键（<code>foreign key</code>）</li></ul></li><li><p>域（domain）完整性 - 数据是有效的</p><ul><li><p>数据类型及长度</p></li><li><p>非空约束（<code>not null</code>）</p></li><li><p>默认值约束（<code>default</code>）</p></li><li><p>检查约束（<code>check</code>）</p><blockquote><p><strong>说明</strong>：在 MySQL 8.x 以前，检查约束并不起作用。</p></blockquote></li></ul></li></ol><h4 id="数据一致性" tabindex="-1"><a class="header-anchor" href="#数据一致性" aria-hidden="true">#</a> 数据一致性</h4><ol><li><p>事务：一系列对数据库进行读/写的操作，这些操作要么全都成功，要么全都失败。</p></li><li><p>事务的 ACID 特性</p><ul><li>原子性：事务作为一个整体被执行，包含在其中的对数据库的操作要么全部被执行，要么都不执行</li><li>一致性：事务应确保数据库的状态从一个一致状态转变为另一个一致状态</li><li>隔离性：多个事务并发执行时，一个事务的执行不应影响其他事务的执行</li><li>持久性：已被提交的事务对数据库的修改应该永久保存在数据库中</li></ul></li><li><p>MySQL 中的事务操作</p><ul><li><p>开启事务环境</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>start transaction
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>提交事务</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>回滚事务</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>rollback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>查看事务隔离级别</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show variables like &#39;transaction_isolation&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------+-----------------+
| Variable_name         | Value           |
+-----------------------+-----------------+
| transaction_isolation | REPEATABLE-READ |
+-----------------------+-----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，MySQL 默认的事务隔离级别是<code>REPEATABLE-READ</code>。</p></li><li><p>修改（当前会话）事务隔离级别</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>set session transaction isolation level read committed;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新查看事务隔离级别，结果如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------+----------------+
| Variable_name         | Value          |
+-----------------------+----------------+
| transaction_isolation | READ-COMMITTED |
+-----------------------+----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,9),Cs={href:"https://blog.csdn.net/jackfrued/article/details/44921941",target:"_blank",rel:"noopener noreferrer"},Ds={href:"https://item.jd.com/11220393.html",target:"_blank",rel:"noopener noreferrer"},Os=t('<p>ANSI/ISO SQL 92标准定义了4个等级的事务隔离级别，如下表所示。需要说明的是，事务隔离级别和数据访问的并发性是对立的，事务隔离级别越高并发性就越差。所以要根据具体的应用来确定到底使用哪种事务隔离级别，这个地方没有万能的原则。</p><h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h3><p>关于 MySQL 的知识肯定远远不止上面列出的这些，比如 MySQL 性能调优、MySQL 运维相关工具、MySQL 数据的备份和恢复、监控 MySQL 服务、部署高可用架构等，这一系列的问题在这里都没有办法逐一展开来讨论，那就留到有需要的时候再进行讲解吧，各位读者也可以自行探索。</p><h2 id="第47课-mysql-新特性" tabindex="-1"><a class="header-anchor" href="#第47课-mysql-新特性" aria-hidden="true">#</a> 第47课：MySQL 新特性</h2><h4 id="json类型" tabindex="-1"><a class="header-anchor" href="#json类型" aria-hidden="true">#</a> JSON类型</h4><p>很多开发者在使用关系型数据库做数据持久化的时候，常常感到结构化的存储缺乏灵活性，因为必须事先设计好所有的列以及对应的数据类型。在业务发展和变化的过程中，如果需要修改表结构，这绝对是比较麻烦和难受的事情。从 MySQL 5.7 版本开始，MySQL引入了对 JSON 数据类型的支持（MySQL 8.0 解决了 JSON 的日志性能瓶颈问题），用好 JSON 类型，其实就是打破了关系型数据库和非关系型数据库之间的界限，为数据持久化操作带来了更多的便捷。</p><p>JSON 类型主要分为 JSON 对象和 JSON数组两种，如下所示。</p><ol><li>JSON 对象</li></ol><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{&quot;name&quot;: &quot;骆昊&quot;, &quot;tel&quot;: &quot;13122335566&quot;, &quot;QQ&quot;: &quot;957658&quot;}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>JSON 数组</li></ol><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>[1, 2, 3]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>[{&quot;name&quot;: &quot;骆昊&quot;, &quot;tel&quot;: &quot;13122335566&quot;}, {&quot;name&quot;: &quot;王大锤&quot;, &quot;QQ&quot;: &quot;123456&quot;}]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>哪些地方需要用到JSON类型呢？举一个简单的例子，现在很多产品的用户登录都支持多种方式，例如手机号、微信、QQ、新浪微博等，但是一般情况下我们又不会要求用户提供所有的这些信息，那么用传统的设计方式，就需要设计多个列来对应多种登录方式，可能还需要允许这些列存在空值，这显然不是很好的选择；另一方面，如果产品又增加了一种登录方式，那么就必然要修改之前的表结构，这就更让人痛苦了。但是，有了 JSON 类型，刚才的问题就迎刃而解了，我们可以做出如下所示的设计。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table `tb_test`\n(\n`user_id` bigint unsigned,\n`login_info` json,\nprimary key (`user_id`)\n) engine=innodb;\n\ninsert into `tb_test` values \n    (1, &#39;{&quot;tel&quot;: &quot;13122335566&quot;, &quot;QQ&quot;: &quot;654321&quot;, &quot;wechat&quot;: &quot;jackfrued&quot;}&#39;),\n    (2, &#39;{&quot;tel&quot;: &quot;13599876543&quot;, &quot;weibo&quot;: &quot;wangdachui123&quot;}&#39;);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要查询用户的手机和微信号，可以用如下所示的 SQL 语句。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select \n    `user_id`,\n    json_unquote(json_extract(`login_info`, &#39;$.tel&#39;)) as 手机号,\n    json_unquote(json_extract(`login_info`, &#39;$.wechat&#39;)) as 微信 \nfrom `tb_test`;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-------------+-----------+\n| user_id | 手机号      | 微信       |\n+---------+-------------+-----------+\n|       1 | 13122335566 | jackfrued |\n|       2 | 13599876543 | NULL      |\n+---------+-------------+-----------+\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为支持 JSON 类型，MySQL 也提供了配套的处理 JSON 数据的函数，就像上面用到的<code>json_extract</code>和<code>json_unquote</code>。当然，上面的 SQL 还有更为便捷的写法，如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select \n	`user_id`,\n    `login_info` -&gt;&gt; &#39;$.tel&#39; as 手机号,\n    `login_info` -&gt;&gt; &#39;$.wechat&#39; as 微信\nfrom `tb_test`;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再举个例子，如果我们的产品要实现用户画像功能（给用户打标签），然后基于用户画像给用户推荐平台的服务或消费品之类的东西，我们也可以使用 JSON 类型来保存用户画像数据，示意代码如下所示。</p><p>创建画像标签表。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table `tb_tags`\n(\n`tag_id` int unsigned not null comment &#39;标签ID&#39;,\n`tag_name` varchar(20) not null comment &#39;标签名&#39;,\nprimary key (`tag_id`)\n) engine=innodb;\n\ninsert into `tb_tags` (`tag_id`, `tag_name`) \nvalues\n    (1, &#39;70后&#39;),\n    (2, &#39;80后&#39;),\n    (3, &#39;90后&#39;),\n    (4, &#39;00后&#39;),\n    (5, &#39;爱运动&#39;),\n    (6, &#39;高学历&#39;),\n    (7, &#39;小资&#39;),\n    (8, &#39;有房&#39;),\n    (9, &#39;有车&#39;),\n    (10, &#39;爱看电影&#39;),\n    (11, &#39;爱网购&#39;),\n    (12, &#39;常点外卖&#39;);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为用户打标签。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create table `tb_users_tags`\n(\n`user_id` bigint unsigned not null comment &#39;用户ID&#39;,\n`user_tags` json not null comment &#39;用户标签&#39;\n) engine=innodb;\n\ninsert into `tb_users_tags` values \n    (1, &#39;[2, 6, 8, 10]&#39;),\n    (2, &#39;[3, 10, 12]&#39;),\n    (3, &#39;[3, 8, 9, 11]&#39;);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们通过一组查询来了解 JSON 类型的巧妙之处。</p><ol><li><p>查询爱看电影（有<code>10</code>这个标签）的用户ID。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select `user_id` from `tb_users_tags` where 10 member of (`user_tags`-&gt;&#39;$&#39;);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询爱看电影（有<code>10</code>这个标签）的80后（有<code>2</code>这个标签）用户ID。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select `user_id` from `tb_users_tags` where json_contains(`user_tags`-&gt;&#39;$&#39;, &#39;[2, 10]&#39;);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询爱看电影或80后或90后的用户ID。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select `user_id` from `tb_users_tags` where json_overlaps(user_tags-&gt;&#39;$&#39;, &#39;[2, 3, 10]&#39;);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><blockquote><p><strong>说明</strong>：上面的查询用到了<code>member of</code>谓词和两个 JSON 函数，<code>json_contains</code>可以检查 JSON 数组是否包含了指定的元素，而<code>json_overlaps</code>可以检查 JSON 数组是否与指定的数组有重叠部分。</p></blockquote><h4 id="窗口函数" tabindex="-1"><a class="header-anchor" href="#窗口函数" aria-hidden="true">#</a> 窗口函数</h4><p>MySQL 从8.0开始支持窗口函数，大多数商业数据库和一些开源数据库早已提供了对窗口函数的支持，有的也将其称之为 OLAP（联机分析和处理）函数，听名字就知道跟统计和分析相关。为了帮助大家理解窗口函数，我们先说说窗口的概念。</p><p>窗口可以理解为记录的集合，窗口函数也就是在满足某种条件的记录集合上执行的特殊函数，对于每条记录都要在此窗口内执行函数。窗口函数和我们上面讲到的聚合函数比较容易混淆，二者的区别主要在于聚合函数是将多条记录聚合为一条记录，窗口函数是每条记录都会执行，执行后记录条数不会变。窗口函数不仅仅是几个函数，它是一套完整的语法，函数只是该语法的一部分，基本语法如下所示：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>&lt;窗口函数&gt; over (partition by &lt;用于分组的列名&gt; order by &lt;用户排序的列名&gt;)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语法中，窗口函数的位置可以放以下两种函数：</p><ol><li>专用窗口函数，包括：<code>lead</code>、<code>lag</code>、<code>first_value</code>、<code>last_value</code>、<code>rank</code>、<code>dense_rank</code>和<code>row_number</code>等。</li><li>聚合函数，包括：<code>sum</code>、<code>avg</code>、<code>max</code>、<code>min</code>和<code>count</code>等。</li></ol><p>下面为大家举几个使用窗口函数的简单例子，我们直接使用上一课创建的 hrs 数据库。</p><p>例子1：查询按月薪从高到低排在第4到第6名的员工的姓名和月薪。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select * from (\n	select \n		`ename`, `sal`,\n		row_number() over (order by `sal` desc) as `rank`\n	from `tb_emp`\n) `temp` where `rank` between 4 and 6;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',36),As=s("strong",null,"说明",-1),Rs=s("code",null,"row_number()",-1),js=s("code",null,"rank()",-1),Ns=s("code",null,"dense_rank()",-1),Bs={href:"https://zhuanlan.zhihu.com/p/92654574",target:"_blank",rel:"noopener noreferrer"},Us=t('<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select `rank`, `ename`, `sal` from (\n select @a:=@a+1 as `rank`, `ename`, `sal` \n from `tb_emp`, (select @a:=0) as t1 order by `sal` desc\n) as `temp` where `rank` between 4 and 6;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),Hs=t(`<p>例子2：查询每个部门月薪最高的两名的员工的姓名和部门名称。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select \`ename\`, \`sal\`, \`dname\` 
from (
    select 
        \`ename\`, \`sal\`, \`dno\`,
        rank() over (partition by \`dno\` order by \`sal\` desc) as \`rank\`
    from \`tb_emp\`
) as \`temp\` natural join \`tb_dept\` where \`rank\`&lt;=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：在MySQL 8以前的版本，我们可以通过下面的方式来完成类似的操作。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select \`ename\`, \`sal\`, \`dname\` from \`tb_emp\` as \`t1\` 
natural join \`tb_dept\` 
where (
select count(*) from \`tb_emp\` as \`t2\` 
where \`t1\`.\`dno\`=\`t2\`.\`dno\` and \`t2\`.\`sal\`&gt;\`t1\`.\`sal\` 
)&lt;2 order by \`dno\` asc, \`sal\` desc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第48课-python程序接入mysql数据库" tabindex="-1"><a class="header-anchor" href="#第48课-python程序接入mysql数据库" aria-hidden="true">#</a> 第48课：Python程序接入MySQL数据库</h2><p>在 Python3 中，我们可以使用<code>mysqlclient</code>或者<code>pymysql</code>三方库来接入 MySQL 数据库并实现数据持久化操作。二者的用法完全相同，只是导入的模块名不一样。我们推荐大家使用纯 python 的三方库<code>pymysql</code>，因为它更容易安装成功。下面我们仍然以之前创建的名为<code>hrs</code>的数据库为例，为大家演示如何通过 python 程序操作 MySQL 数据库实现数据持久化操作。</p><h3 id="接入mysql" tabindex="-1"><a class="header-anchor" href="#接入mysql" aria-hidden="true">#</a> 接入MySQL</h3><p>首先，我们可以在命令行或者 PyCharm 的终端中通过下面的命令安装<code>pymysql</code>，如果需要接入 MySQL 8，还需要安装一个名为<code>cryptography</code>的三方库来支持 MySQL 8 的密码认证方式。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pip install pymysql cryptography
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>pymysql</code>操作 MySQL 的步骤如下所示：</p><ol><li>创建连接。MySQL 服务器启动后，提供了基于 TCP （传输控制协议）的网络服务。我们可以通过<code>pymysql</code>模块的<code>connect</code>函数连接 MySQL 服务器。在调用<code>connect</code>函数时，需要指定主机（<code>host</code>）、端口（<code>port</code>）、用户名（<code>user</code>）、口令（<code>password</code>）、数据库（<code>database</code>）、字符集（<code>charset</code>）等参数，该函数会返回一个<code>Connection</code>对象。</li><li>获取游标。连接 MySQL 服务器成功后，接下来要做的就是向数据库服务器发送 SQL 语句，MySQL 会执行接收到的 SQL 并将执行结果通过网络返回。要实现这项操作，需要先通过连接对象的<code>cursor</code>方法获取游标（<code>Cursor</code>）对象。</li><li>发出 SQL。通过游标对象的<code>execute</code>方法，我们可以向数据库发出 SQL 语句。</li><li>如果执行<code>insert</code>、<code>delete</code>或<code>update</code>操作，需要根据实际情况提交或回滚事务。因为创建连接时，默认开启了事务环境，在操作完成后，需要使用连接对象的<code>commit</code>或<code>rollback</code>方法，实现事务的提交或回滚，<code>rollback</code>方法通常会放在异常捕获代码块<code>except</code>中。如果执行<code>select</code>操作，需要通过游标对象抓取查询的结果，对应的方法有三个，分别是：<code>fetchone</code>、<code>fetchmany</code>和<code>fetchall</code>。其中<code>fetchone</code>方法会抓取到一条记录，并以元组或字典的方式返回；<code>fetchmany</code>和<code>fetchall</code>方法会抓取到多条记录，以嵌套元组或列表装字典的方式返回。</li><li>关闭连接。在完成持久化操作后，请不要忘记关闭连接，释放外部资源。我们通常会在<code>finally</code>代码块中使用连接对象的<code>close</code>方法来关闭连接。</li></ol><h3 id="代码实操" tabindex="-1"><a class="header-anchor" href="#代码实操" aria-hidden="true">#</a> 代码实操</h3><p>下面，我们通过代码实操的方式为大家演示上面说的五个步骤。</p><h4 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

no <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;部门编号: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;部门名称: &#39;</span><span class="token punctuation">)</span>
location <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;部门所在地: &#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 1. 创建连接（Connection）</span>
conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                       user<span class="token operator">=</span><span class="token string">&#39;guest&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;Guest.618&#39;</span><span class="token punctuation">,</span>
                       database<span class="token operator">=</span><span class="token string">&#39;hrs&#39;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 2. 获取游标对象（Cursor）</span>
    <span class="token keyword">with</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
        <span class="token comment"># 3. 通过游标对象向数据库服务器发出SQL语句</span>
        affected_rows <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
            <span class="token string">&#39;insert into \`tb_dept\` values (%s, %s, %s)&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span>no<span class="token punctuation">,</span> name<span class="token punctuation">,</span> location<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> affected_rows <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;新增部门成功!!!&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 4. 提交事务（transaction）</span>
    conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> pymysql<span class="token punctuation">.</span>MySQLError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token comment"># 4. 回滚事务</span>
    conn<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token comment"># 5. 关闭连接释放资源</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的<code>127.0.0.1</code>称为回环地址，它代表的是本机。下面的<code>guest</code>是我提前创建好的用户，该用户拥有对<code>hrs</code>数据库的<code>insert</code>、<code>delete</code>、<code>update</code>和<code>select</code>权限。我们不建议大家在项目中直接使用<code>root</code>超级管理员账号访问数据库，这样做实在是太危险了。我们可以使用下面的命令创建名为<code>guest</code>的用户并为其授权。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create user &#39;guest&#39;@&#39;%&#39; identified by &#39;Guest.618&#39;;
grant insert, delete, update, select on \`hrs\`.* to &#39;guest&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>如果要插入大量数据，建议使用游标对象的<code>executemany</code>方法做批处理（一个<code>insert</code>操作后面跟上多组数据），大家可以尝试向一张表插入10000条记录，然后看看不使用批处理一条条的插入和使用批处理有什么差别。游标对象的<code>executemany</code>方法第一个参数仍然是 SQL 语句，第二个参数可以是包含多组数据的列表或元组。</p><h4 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

no <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;部门编号: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 1. 创建连接（Connection）</span>
conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                       user<span class="token operator">=</span><span class="token string">&#39;guest&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;Guest.618&#39;</span><span class="token punctuation">,</span>
                       database<span class="token operator">=</span><span class="token string">&#39;hrs&#39;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span><span class="token punctuation">,</span>
                       autocommit<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 2. 获取游标对象（Cursor）</span>
    <span class="token keyword">with</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
        <span class="token comment"># 3. 通过游标对象向数据库服务器发出SQL语句</span>
        affected_rows <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
            <span class="token string">&#39;delete from \`tb_dept\` where \`dno\`=%s&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span>no<span class="token punctuation">,</span> <span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> affected_rows <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;删除部门成功!!!&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token comment"># 5. 关闭连接释放资源</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：如果不希望每次 SQL 操作之后手动提交或回滚事务，可以<code>connect</code>函数中加一个名为<code>autocommit</code>的参数并将它的值设置为<code>True</code>，表示每次执行 SQL 成功后自动提交。但是我们建议大家手动提交或回滚，这样可以根据实际业务需要来构造事务环境。如果不愿意捕获异常并进行处理，可以在<code>try</code>代码块后直接跟<code>finally</code>块，省略<code>except</code>意味着发生异常时，代码会直接崩溃并将异常栈显示在终端中。</p></blockquote><h4 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

no <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;部门编号: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;部门名称: &#39;</span><span class="token punctuation">)</span>
location <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;部门所在地: &#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 1. 创建连接（Connection）</span>
conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                       user<span class="token operator">=</span><span class="token string">&#39;guest&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;Guest.618&#39;</span><span class="token punctuation">,</span>
                       database<span class="token operator">=</span><span class="token string">&#39;hrs&#39;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 2. 获取游标对象（Cursor）</span>
    <span class="token keyword">with</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
        <span class="token comment"># 3. 通过游标对象向数据库服务器发出SQL语句</span>
        affected_rows <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
            <span class="token string">&#39;update \`tb_dept\` set \`dname\`=%s, \`dloc\`=%s where \`dno\`=%s&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span>name<span class="token punctuation">,</span> location<span class="token punctuation">,</span> no<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> affected_rows <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;更新部门信息成功!!!&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 4. 提交事务</span>
    conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> pymysql<span class="token punctuation">.</span>MySQLError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token comment"># 4. 回滚事务</span>
    conn<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token comment"># 5. 关闭连接释放资源</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h4><ol><li>查询部门表的数据。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

<span class="token comment"># 1. 创建连接（Connection）</span>
conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                       user<span class="token operator">=</span><span class="token string">&#39;guest&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;Guest.618&#39;</span><span class="token punctuation">,</span>
                       database<span class="token operator">=</span><span class="token string">&#39;hrs&#39;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 2. 获取游标对象（Cursor）</span>
    <span class="token keyword">with</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
        <span class="token comment"># 3. 通过游标对象向数据库服务器发出SQL语句</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select \`dno\`, \`dname\`, \`dloc\` from \`tb_dept\`&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 4. 通过游标对象抓取数据</span>
        row <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">while</span> row<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
            row <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> pymysql<span class="token punctuation">.</span>MySQLError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token comment"># 5. 关闭连接释放资源</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码中，我们通过构造一个<code>while</code>循环实现了逐行抓取查询结果的操作。这种方式特别适合查询结果有非常多行的场景。因为如果使用<code>fetchall</code>一次性将所有记录抓取到一个嵌套元组中，会造成非常大的内存开销，这在很多场景下并不是一个好主意。如果不愿意使用<code>while</code>循环，还可以考虑使用<code>iter</code>函数构造一个迭代器来逐行抓取数据，有兴趣的读者可以自行研究。</p></blockquote><ol start="2"><li>分页查询员工表的数据。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

page <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;页码: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
size <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;大小: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 1. 创建连接（Connection）</span>
con <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                      user<span class="token operator">=</span><span class="token string">&#39;guest&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;Guest.618&#39;</span><span class="token punctuation">,</span>
                      database<span class="token operator">=</span><span class="token string">&#39;hrs&#39;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 2. 获取游标对象（Cursor）</span>
    <span class="token keyword">with</span> con<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span>pymysql<span class="token punctuation">.</span>cursors<span class="token punctuation">.</span>DictCursor<span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
        <span class="token comment"># 3. 通过游标对象向数据库服务器发出SQL语句</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
            <span class="token string">&#39;select \`eno\`, \`ename\`, \`job\`, \`sal\` from \`tb_emp\` order by \`sal\` desc limit %s,%s&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> size<span class="token punctuation">,</span> size<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token comment"># 4. 通过游标对象抓取数据</span>
        <span class="token keyword">for</span> emp_dict <span class="token keyword">in</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>emp_dict<span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token comment"># 5. 关闭连接释放资源</span>
    con<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例讲解" tabindex="-1"><a class="header-anchor" href="#案例讲解" aria-hidden="true">#</a> 案例讲解</h3><p>下面我们为大家讲解一个将数据库表数据导出到 Excel 文件的例子，我们需要先安装<code>openpyxl</code>三方库，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install openpyxl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，我们通过下面的代码实现了将数据库<code>hrs</code>中所有员工的编号、姓名、职位、月薪、补贴和部门名称导出到一个 Excel 文件中。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> openpyxl
<span class="token keyword">import</span> pymysql

<span class="token comment"># 创建工作簿对象</span>
workbook <span class="token operator">=</span> openpyxl<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 获得默认的工作表</span>
sheet <span class="token operator">=</span> workbook<span class="token punctuation">.</span>active
<span class="token comment"># 修改工作表的标题</span>
sheet<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;员工基本信息&#39;</span>
<span class="token comment"># 给工作表添加表头</span>
sheet<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;工号&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;职位&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;月薪&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;补贴&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;部门&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 创建连接（Connection）</span>
conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
                       user<span class="token operator">=</span><span class="token string">&#39;guest&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;Guest.618&#39;</span><span class="token punctuation">,</span>
                       database<span class="token operator">=</span><span class="token string">&#39;hrs&#39;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取游标对象（Cursor）</span>
    <span class="token keyword">with</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
        <span class="token comment"># 通过游标对象执行SQL语句</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
            <span class="token string">&#39;select \`eno\`, \`ename\`, \`job\`, \`sal\`, coalesce(\`comm\`, 0), \`dname\` &#39;</span>
            <span class="token string">&#39;from \`tb_emp\` natural join \`tb_dept\`&#39;</span>
        <span class="token punctuation">)</span>
        <span class="token comment"># 通过游标抓取数据</span>
        row <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">while</span> row<span class="token punctuation">:</span>
            <span class="token comment"># 将数据逐行写入工作表中</span>
            sheet<span class="token punctuation">.</span>append<span class="token punctuation">(</span>row<span class="token punctuation">)</span>
            row <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 保存工作簿</span>
    workbook<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;hrs.xlsx&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> pymysql<span class="token punctuation">.</span>MySQLError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token comment"># 关闭连接释放资源</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以参考上面的例子，试一试把 Excel 文件的数据导入到指定数据库的指定表中，看看是否可以成功。</p></blockquote>`,3);function zs(Fs,Ws){const a=i("ExternalLinkIcon");return o(),c("div",null,[d,s("p",null,[n("按照"),s("a",u,[n("官方文档"),e(a)]),n("的介绍，我们可以使用如下所示的代码来生成一个简单的Word文档。")]),r,s("blockquote",null,[s("p",null,[v,n("：如果需要上面代码中的Word文件，可以通过下面的百度云盘地址进行获取。链接:"),s("a",k,[n("https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g"),e(a)]),n(" 提取码:e7b4。")])]),m,s("p",null,[n("用Python操作PowerPoint的内容，因为实际应用场景不算很多，我不打算在这里进行赘述，有兴趣的读者可以自行阅读"),b,n("的"),s("a",g,[n("官方文档"),e(a)]),n("，下面仅展示一段来自于官方文档的代码。")]),h,s("blockquote",null,[s("p",null,[y,n("：上面代码中使用的PDF文件“test.pdf”以及下面的代码中需要用到的PDF文件，也可以通过下面的百度云盘地址进行获取。链接:"),s("a",_,[n("https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g"),e(a)]),n(" 提取码:e7b4。")])]),s("p",null,[n("当然，"),w,n("并不是什么样的PDF文档都能提取出文字来，这个问题就我所知并没有什么特别好的解决方法，尤其是在提取中文的时候。网上也有很多讲解从PDF中提取文字的文章，推荐大家自行阅读"),s("a",f,[n("《三大神器助力Python提取pdf文档信息》"),e(a)]),n("一文进行了解。")]),x,s("p",null,[n("上面的代码如果不太理解也没有关系，等真正需要用Python创建PDF文档的时候，再好好研读一下"),S,n("的"),s("a",L,[n("官方文档"),e(a)]),n("就可以了。")]),s("blockquote",null,[s("p",null,[q,n("：上面代码中用到的图片和字体，也可以通过下面的百度云盘链接获取。链接:"),s("a",Q,[n("https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g"),e(a)]),n(" 提取码:e7b4。")])]),P,s("p",null,[n("我们先尝试一下发送一封极为简单的邮件，该邮件不包含附件、图片以及其他超文本内容。发送邮件首先需要接入邮件服务器，我们可以自己架设邮件服务器，这件事情对新手并不友好，但是我们可以选择使用第三方提供的邮件服务。例如，我在<"),s("a",T,[n("www.126.com"),e(a)]),n(">已经注册了账号，登录成功之后，就可以在设置中开启SMTP服务，这样就相当于获得了邮件服务器，具体的操作如下所示。")]),M,s("p",null,[n("如果要发送带有附件的邮件，只需要将附件的内容处理成BASE64编码，那么它就和普通的文本内容几乎没有什么区别。BASE64是一种基于64个可打印字符来表示二进制数据的表示方法，常用于某些需要表示、传输、存储二进制数据的场合，电子邮件就是其中之一。对这种编码方式不理解的同学，推荐阅读"),s("a",I,[n("《Base64笔记》"),e(a)]),n("一文。在之前的内容中，我们也提到过，Python标准库的"),E,n("模块提供了对BASE64编解码的支持。")]),C,s("p",null,[n("发送短信也是项目中常见的功能，网站的注册码、验证码、营销信息基本上都是通过短信来发送给用户的。发送短信需要三方平台的支持，下面我们以"),s("a",D,[n("螺丝帽平台"),e(a)]),n("为例，为大家介绍如何用Python程序发送短信。注册账号和购买短信服务的细节我们不在这里进行赘述，大家可以咨询平台的客服。")]),O,s("p",null,[n("上面请求螺丝帽的短信网关"),A,n("会返回JSON格式的数据，如果返回"),R,n("就说明短信已经发送成功了，如果"),j,n("的值不是"),N,n("，可以通过查看官方的"),s("a",B,[n("开发文档"),e(a)]),n("了解到底哪个环节出了问题。螺丝帽平台常见的错误类型如下图所示。")]),U,s("p",null,[n("关于正则表达式的相关知识，大家可以阅读一篇非常有名的博文叫"),s("a",H,[n("《正则表达式30分钟入门教程》"),e(a)]),n("，读完这篇文章后你就可以看懂下面的表格，这是我们对正则表达式中的一些基本符号进行的扼要总结。")]),z,s("blockquote",null,[s("p",null,[F,W,n("模块的正则表达式相关函数中都有一个"),G,n("参数，它代表了正则表达式的匹配标记，可以通过该标记来指定匹配时是否忽略大小写、是否进行多行匹配、是否显示调试信息等。如果需要为flags参数指定多个值，可以使用"),s("a",X,[n("按位或运算符"),e(a)]),n("进行叠加，如"),J,n("。")])]),Y,s("p",null,[n("正则表达式在字符串的处理和匹配上真的非常强大，通过上面的例子相信大家已经感受到了正则表达式的魅力，当然写一个正则表达式对新手来说并不是那么容易，但是很多事情都是熟能生巧，大胆的去尝试就行了，有一个在线的"),s("a",V,[n("正则表达式测试工具"),e(a)]),n("相信能够在一定程度上帮到大家。")]),K,s("p",null,[n("大多数网站都会定义"),$,n("文件，这是一个君子协议，并不是所有爬虫都必须遵守的游戏规则。下面以淘宝的"),s("a",Z,[nn,e(a)]),n("文件为例，看看淘宝网对爬虫有哪些限制。")]),sn,s("p",null,[n("下面是豆瓣网的"),s("a",an,[en,e(a)]),n("文件，大家可以自行解读，看看它做出了什么样的限制。")]),tn,s("p",null,[n("在开始讲解爬虫之前，我们稍微对超文本传输协议（HTTP）做一些回顾，因为我们在网页上看到的内容通常是浏览器执行 HTML （超文本标记语言）得到的结果，而 HTTP 就是传输 HTML 数据的协议。HTTP 和其他很多应用级协议一样是构建在 TCP（传输控制协议）之上的，它利用了 TCP 提供的可靠的传输服务实现了 Web 应用中的数据交换。按照维基百科上的介绍，设计 HTTP 最初的目的是为了提供一种发布和接收 "),s("a",pn,[n("HTML"),e(a)]),n(" 页面的方法，也就是说，这个协议是浏览器和 Web 服务器之间传输的数据的载体。关于 HTTP 的详细信息以及目前的发展状况，大家可以阅读"),s("a",on,[n("《HTTP 协议入门》"),e(a)]),n("、"),s("a",cn,[n("《互联网协议入门》"),e(a)]),n("、"),s("a",ln,[n("《图解 HTTPS 协议》"),e(a)]),n("等文章进行了解。")]),dn,s("p",null,[n("要使用 python 获取网络数据，我们推荐大家使用名为"),un,n(" 的三方库，这个库我们在之前的课程中其实已经使用过了。按照官方网站的解释，"),rn,n("是基于 python 标准库进行了封装，简化了通过 HTTP 或 HTTPS 访问网络资源的操作。上课我们提到过，HTTP 是一个请求响应式的协议，当我们在浏览器中输入正确的 "),s("a",vn,[n("URL"),e(a)]),n("（通常也称为网址）并按下 Enter 键时，我们就向网络上的 "),s("a",kn,[n("Web 服务器"),e(a)]),n("发送了一个 HTTP 请求，服务器在收到请求后会给我们一个 HTTP 响应。在 Chrome 浏览器中的菜单中打开“开发者工具”切换到“Network”选项卡就能够查看 HTTP 请求和响应到底是什么样子的，如下图所示。")]),mn,s("p",null,[n("通过"),bn,n("库，我们可以让 python 程序向浏览器一样向 Web 服务器发起请求，并接收服务器返回的响应，从响应中我们就可以提取出想要的数据。浏览器呈现给我们的网页是用 "),s("a",gn,[n("HTML"),e(a)]),n(" 编写的，浏览器相当于是 HTML 的解释器环境，我们看到的网页中的内容都包含在 HTML 的标签中。在获取到 HTML 代码后，就可以从标签的属性或标签体中提取内容。下面例子演示了如何获取网页 HTML 代码，我们通过"),hn,n("库的"),yn,n("函数，获取了搜狐首页的代码。")]),_n,s("p",null,[wn,n("库非常好用而且功能上也比较强大和完整，具体的内容我们在使用的过程中为大家一点点剖析。想解锁关于"),fn,n("库更多的知识，可以阅读它的"),s("a",xn,[n("官方文档"),e(a)]),n("。")]),Sn,s("p",null,[n("接下来，我们以“豆瓣电影”为例，为大家讲解如何编写爬虫代码。按照上面提供的方法，我们先使用"),Ln,n("获取到网页的HTML代码，然后将整个代码看成一个长字符串，这样我们就可以使用正则表达式的捕获组从字符串提取我们需要的内容。下面的代码演示了如何从"),s("a",qn,[n("豆瓣电影"),e(a)]),n("获取排前250名的电影的名称。"),s("a",Qn,[n("豆瓣电影Top250"),e(a)]),n("的页面结构和对应代码如下图所示，可以看出，每页共展示了25部电影，如果要获取到 Top250 数据，我们共需要访问10个页面，对应的地址是"),s("a",Pn,[n("https://movie.douban.com/top250?start=xxx"),e(a)]),n("，这里的"),Tn,n("如果为"),Mn,n("就是第一页，如果"),In,n("的值是"),En,n("，那么我们可以访问到第五页。为了代码简单易读，我们只获取电影的标题和评分。")]),Cn,s("p",null,[n("下面以"),s("a",Dn,[n("蘑菇代理"),e(a)]),n("为例，为大家讲解商业 IP 代理的使用方法。首先需要在该网站注册一个账号，注册账号后就可以"),s("a",On,[n("购买"),e(a)]),n("相应的套餐来获得商业 IP 代理。作为商业用途，建议大家购买不限量套餐，这样可以根据实际需要获取足够多的代理 IP 地址；作为学习用途，可以购买包时套餐或根据自己的需求来决定。蘑菇代理提供了两种接入代理的方式，分别是 API 私密代理和 HTTP 隧道代理，前者是通过请求蘑菇代理的 API 接口获取代理服务器地址，后者是直接使用统一的入口（蘑菇代理提供的域名）进行接入。")]),An,s("blockquote",null,[s("p",null,[Rn,n("：上面的例子来自于“菜鸟教程”网站上的 "),s("a",jn,[n("XPath 教程"),e(a)]),n("，有兴趣的读者可以自行阅读原文。")])]),Nn,s("p",null,[n("关于 BeautifulSoup 更多的知识，可以参考它的"),s("a",Bn,[n("官方文档"),e(a)]),n("。")]),Un,s("p",null,[n("很多人都不太能准确的把握这几个概念，这里我们简单的总结一下，同步与异步的关注点是"),Hn,n("，最终表现出来的是“有序”和“无序”的区别；阻塞和非阻塞的关注点是"),zn,n("，最终表现出来的是程序在等待时能不能做点别的。如果想深入理解这些内容，推荐大家阅读经典著作"),s("a",Fn,[n("《UNIX网络编程》"),e(a)]),n("，这本书非常的赞。")]),Wn,s("p",null,[n("之前的课程，我们已经为大家介绍了 python 中的多线程、多进程和异步编程，通过这三种手段，我们可以实现并发或并行编程，这一方面可以加速代码的执行，另一方面也可以带来更好的用户体验。爬虫程序是典型的 I/O 密集型任务，对于 I/O 密集型任务来说，多线程和异步 I/O 都是很好的选择，因为当程序的某个部分因 I/O 操作阻塞时，程序的其他部分仍然可以运转，这样我们不用在等待和阻塞中浪费大量的时间。下面我们以爬取“"),s("a",Gn,[n("360图片"),e(a)]),n("”网站的图片并保存到本地为例，为大家分别展示使用单线程、多线程和异步 I/O 编程的爬虫程序有什么区别，同时也对它们的执行效率进行简单的对比。")]),s("p",null,[n("“360图片”网站的页面使用了 "),s("a",Xn,[n("Ajax"),e(a)]),n(" 技术，这是很多网站都会使用的一种异步加载数据和局部刷新页面的技术。简单的说，页面上的图片都是通过 JavaScript 代码异步获取 JSON 数据并动态渲染生成的，而且整个页面还使用了瀑布式加载（一边向下滚动，一边加载更多的图片）。我们在浏览器的“开发者工具”中可以找到提供动态内容的数据接口，如下图所示，我们需要的图片信息就在服务器返回的 JSON 数据中。")]),Jn,s("p",null,[n("之前的课程，我们已经为大家介绍了 python 中的多线程、多进程和异步编程，通过这三种手段，我们可以实现并发或并行编程，这一方面可以加速代码的执行，另一方面也可以带来更好的用户体验。爬虫程序是典型的 I/O 密集型任务，对于 I/O 密集型任务来说，多线程和异步 I/O 都是很好的选择，因为当程序的某个部分因 I/O 操作阻塞时，程序的其他部分仍然可以运转，这样我们不用在等待和阻塞中浪费大量的时间。下面我们以爬取“"),s("a",Yn,[n("360图片"),e(a)]),n("”网站的图片并保存到本地为例，为大家分别展示使用单线程、多线程和异步 I/O 编程的爬虫程序有什么区别，同时也对它们的执行效率进行简单的对比。")]),s("p",null,[n("“360图片”网站的页面使用了 "),s("a",Vn,[n("Ajax"),e(a)]),n(" 技术，这是很多网站都会使用的一种异步加载数据和局部刷新页面的技术。简单的说，页面上的图片都是通过 JavaScript 代码异步获取 JSON 数据并动态渲染生成的，而且整个页面还使用了瀑布式加载（一边向下滚动，一边加载更多的图片）。我们在浏览器的“开发者工具”中可以找到提供动态内容的数据接口，如下图所示，我们需要的图片信息就在服务器返回的 JSON 数据中。")]),Kn,s("p",null,[n("Selenium 是一个自动化测试工具，利用它可以驱动浏览器执行特定的行为，最终帮助爬虫开发者获取到网页的动态内容。简单的说，只要我们在浏览器窗口中能够看到的内容，都可以使用 Selenium 获取到，对于那些使用了 JavaScript 动态渲染技术的网站，Selenium 会是一个重要的选择。下面，我们还是以 Chrome 浏览器为例，来讲解 Selenium 的用法，大家需要先安装 Chrome 浏览器并下载它的驱动。Chrome 浏览器的驱动程序可以在"),s("a",$n,[n("ChromeDriver官网"),e(a)]),n("进行下载，驱动的版本要跟浏览器的版本对应，如果没有完全对应的版本，就选择版本代号最为接近的版本。")]),Zn,s("p",null,[n("Selenium 相关的知识还有很多，我们在此就不一一赘述了，下面为大家罗列一些浏览器对象和"),ns,n("对象常用的属性和方法。具体的内容大家还可以参考 Selenium "),s("a",ss,[n("官方文档的中文翻译"),e(a)]),n("。")]),as,s("ol",null,[es,s("li",null,[ts,s("ul",null,[s("li",null,[s("a",ps,[n("Oracle"),e(a)]),n(" - 目前世界上使用最为广泛的数据库管理系统，作为一个通用的数据库系统，它具有完整的数据管理功能；作为一个关系数据库，它是一个完备关系的产品；作为分布式数据库，它实现了分布式处理的功能。在 Oracle 最新的 12c 版本中，还引入了多承租方架构，使用该架构可轻松部署和管理数据库云。")]),s("li",null,[s("a",is,[n("DB2"),e(a)]),n(" - IBM 公司开发的、主要运行于 Unix（包括 IBM 自家的 "),s("a",os,[n("AIX"),e(a)]),n("）、Linux、以及 Windows 服务器版等系统的关系数据库产品。DB2 历史悠久且被认为是最早使用 SQL 的数据库产品，它拥有较为强大的商业智能功能。")]),s("li",null,[s("a",cs,[n("SQL Server"),e(a)]),n(" - 由 Microsoft 开发和推广的关系型数据库产品，最初适用于中小企业的数据管理，但是近年来它的应用范围有所扩展，部分大企业甚至是跨国公司也开始基于它来构建自己的数据管理系统。")]),s("li",null,[s("a",ls,[n("MySQL"),e(a)]),n(" - MySQL 是开放源代码的，任何人都可以在 GPL（General Public License）的许可下下载并根据个性化的需要对其进行修改。MySQL 因为其速度、可靠性和适应性而备受关注。")]),ds])])]),us,rs,vs,s("p",null,[n("甲骨文公司收购后昇阳微系统公司，大幅调涨 MySQL 商业版的售价，且甲骨文公司不再支持另一个自由软件项目 "),s("a",ks,[n("OpenSolaris "),e(a)]),n(" 的发展，因此导致自由软件社区对于 Oracle 是否还会持续支持 MySQL 社区版（MySQL 的各个发行版本中唯一免费的版本）有所担忧，MySQL 的创始人麦克尔·维德纽斯以 MySQL 为基础，创建了 "),s("a",ms,[n("MariaDB"),e(a)]),n("（以他女儿的名字命名的数据库）分支。有许多原来使用 MySQL 数据库的公司（例如：维基百科）已经陆续完成了从 MySQL 数据库到 MariaDB 数据库的迁移。")]),bs,gs,s("ol",null,[s("li",null,[s("p",null,[n("通过"),s("a",hs,[n("官方网站"),e(a)]),n("提供的"),s("a",ys,[n("下载链接"),e(a)]),n("下载“MySQL社区版服务器”安装程序，如下图所示，建议大家下载离线安装版的MySQL Installer。")]),_s]),ws]),fs,xs,s("ol",null,[s("li",null,[Ss,s("p",null,[n("可以在 "),s("a",Ls,[n("MySQL 官方网站"),e(a)]),n("下载安装文件。首先在下载页面中选择平台和版本，然后找到对应的下载链接，直接下载包含所有安装文件的归档文件，解归档之后通过包管理工具进行安装。")]),qs]),Qs]),Ps,s("p",null,[n("MySQL 数据库中所有数据类型的列都可以被索引。对于MySQL 8.0 版本的 InnoDB 存储引擎来说，它支持三种类型的索引，分别是 B+ 树索引、全文索引和 R 树索引。这里，我们只介绍使用得最为广泛的 B+ 树索引。使用 B+ 树的原因非常简单，因为它是目前在基于磁盘进行海量数据存储和排序上最有效率的数据结构。B+ 树是一棵"),s("a",Ts,[n("平衡树"),e(a)]),n("，树的高度通常为3或4，但是却可以保存从百万级到十亿级的数据，而从这些数据里面查询一条数据，只需要3次或4次 I/O 操作。")]),Ms,s("p",null,[n("如果大家对上面讲到的视图、函数、过程包括我们没有讲到的触发器这些知识有兴趣，建议大家阅读 MySQL 的入门读物"),s("a",Is,[n("《MySQL必知必会》"),e(a)]),n("进行一般性了解即可，因为这些知识点在大家将来的工作中未必用得上，学了也可能仅仅是为了应付面试而已。")]),Es,s("p",null,[n("关系型数据库的事务是一个很大的话题，因为当存在多个并发事务访问数据时，就有可能出现三类读数据的问题（脏读、不可重复读、幻读）和两类更新数据的问题（第一类丢失更新、第二类丢失更新）。想了解这五类问题的，可以阅读我发布在 CSDN 网站上的"),s("a",Cs,[n("《Java面试题全集（上）》"),e(a)]),n("一文的第80题。为了避免这些问题，关系型数据库底层是有对应的锁机制的，按锁定对象不同可以分为表级锁和行级锁，按并发事务锁定关系可以分为共享锁和独占锁。然而直接使用锁是非常麻烦的，为此数据库为用户提供了自动锁机制，只要用户指定适当的事务隔离级别，数据库就会通过分析 SQL 语句，然后为事务访问的资源加上合适的锁。此外，数据库还会维护这些锁通过各种手段提高系统的性能，这些对用户来说都是透明的。想了解 MySQL 事务和锁的细节知识，推荐大家阅读进阶读物"),s("a",Ds,[n("《高性能MySQL》"),e(a)]),n("，这也是数据库方面的经典书籍。")]),Os,s("blockquote",null,[s("p",null,[As,n("：上面使用的函数"),Rs,n("可以为每条记录生成一个行号，在实际工作中可以根据需要将其替换为"),js,n("或"),Ns,n("函数，三者的区别可以参考官方文档或阅读"),s("a",Bs,[n("《通俗易懂的学会：SQL窗口函数》"),e(a)]),n("进行了解。在MySQL 8以前的版本，我们可以通过下面的方式来完成类似的操作。")]),Us]),Hs])}const Js=p(l,[["render",zs],["__file","python-50-down.html.vue"]]);export{Js as default};
