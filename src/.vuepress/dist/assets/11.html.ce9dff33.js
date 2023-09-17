import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e as t}from"./app.c5b3201b.js";const e={},p=t(`<h3 id="hashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-hashtable-的区别" aria-hidden="true">#</a> HashMap 和 Hashtable 的区别</h3><p><strong>线程是否安全：</strong><code>HashMap</code> 是非线程安全的，<code>Hashtable</code> 是线程安全的,因为 <code>Hashtable</code> 内部的方法基本都经过<code>synchronized</code> 修饰。（如果你要保证线程安全的话就使用 <code>ConcurrentHashMap</code> 吧！）；</p><p><strong>效率：</strong> 因为线程安全的问题，<code>HashMap</code> 要比 <code>Hashtable</code> 效率高一点。另外，<code>Hashtable</code> 基本被淘汰，不要在代码中使用它；</p><p><strong>对 Null key 和 Null value 的支持：</strong> <code>HashMap</code> 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 <code>NullPointerException</code>。</p><p><strong>初始容量大小和每次扩充容量大小的不同：</strong> ① 创建时如果不指定容量初始值，<code>Hashtable</code> 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。<code>HashMap</code> 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 <code>Hashtable</code> 会直接使用你给定的大小，而 <code>HashMap</code> 会将其扩充为 2 的幂次方大小（<code>HashMap</code> 中的<code>tableSizeFor()</code>方法保证，下面给出了源代码）。也就是说 <code>HashMap</code> 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。</p><p><strong>底层数据结构：</strong> JDK1.8 以后的 <code>HashMap</code> 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间（后文中我会结合源码对这一过程进行分析）。<code>Hashtable</code> 没有这样的机制。</p><p><strong><code>HashMap</code> 中带有初始容量的构造函数：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal initial capacity: &quot;</span> <span class="token operator">+</span>
                                               initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&gt;</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span>
            initialCapacity <span class="token operator">=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loadFactor <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>loadFactor<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal load factor: &quot;</span> <span class="token operator">+</span>
                                               loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> loadFactor<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>threshold <span class="token operator">=</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这个方法保证了 <code>HashMap</code> 总是使用 2 的幂作为哈希表的大小。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Returns a power of two size for the given target capacity.
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> cap <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">4</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">MAXIMUM_CAPACITY</span> <span class="token operator">:</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","11.html.vue"]]);export{d as default};
