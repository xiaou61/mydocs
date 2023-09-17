const e=JSON.parse('{"key":"v-97e64c6a","path":"/codenotes/Java/jvm2/3.html","title":"垃圾收集策略与算法","lang":"zh-CN","frontmatter":{"title":"垃圾收集策略与算法","icon":"code","category":["JVM"],"tag":["JVM"],"sticky":false,"star":true,"article":true,"timeline":true,"description":"程序计数器、虚拟机栈、本地方法栈随线程而生，也随线程而灭；栈帧随着方法的开始而入栈，随着方法的结束而出栈。这几个区域的内存分配和回收都具有确定性，在这几个区域内不需要过多考虑回收的问题，因为方法结束或者线程结束时，内存自然就跟随着回收了。 而对于 Java 堆和方法区，我们只有在程序运行期间才能知道会创建哪些对象，这部分内存的分配和回收都是动态的，垃圾...","head":[["meta",{"property":"og:url","content":"https://mydocs.guoyaxue.top/codenotes/Java/jvm2/3.html"}],["meta",{"property":"og:site_name","content":"小uの学习笔记"}],["meta",{"property":"og:title","content":"垃圾收集策略与算法"}],["meta",{"property":"og:description","content":"程序计数器、虚拟机栈、本地方法栈随线程而生，也随线程而灭；栈帧随着方法的开始而入栈，随着方法的结束而出栈。这几个区域的内存分配和回收都具有确定性，在这几个区域内不需要过多考虑回收的问题，因为方法结束或者线程结束时，内存自然就跟随着回收了。 而对于 Java 堆和方法区，我们只有在程序运行期间才能知道会创建哪些对象，这部分内存的分配和回收都是动态的，垃圾..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-12T11:58:57.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-08-12T11:58:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"判定对象是否存活","slug":"判定对象是否存活","link":"#判定对象是否存活","children":[{"level":3,"title":"引用计数法","slug":"引用计数法","link":"#引用计数法","children":[]},{"level":3,"title":"可达性分析法","slug":"可达性分析法","link":"#可达性分析法","children":[]}]},{"level":2,"title":"引用的种类","slug":"引用的种类","link":"#引用的种类","children":[{"level":3,"title":"强引用（Strong Reference）","slug":"强引用-strong-reference","link":"#强引用-strong-reference","children":[]},{"level":3,"title":"软引用（Soft Reference）","slug":"软引用-soft-reference","link":"#软引用-soft-reference","children":[]},{"level":3,"title":"弱引用（Weak Reference）","slug":"弱引用-weak-reference","link":"#弱引用-weak-reference","children":[]},{"level":3,"title":"虚引用（Phantom Reference）","slug":"虚引用-phantom-reference","link":"#虚引用-phantom-reference","children":[]}]},{"level":2,"title":"回收堆中无效对象","slug":"回收堆中无效对象","link":"#回收堆中无效对象","children":[{"level":3,"title":"判定 finalize() 是否有必要执行","slug":"判定-finalize-是否有必要执行","link":"#判定-finalize-是否有必要执行","children":[]},{"level":3,"title":"对象重生或死亡","slug":"对象重生或死亡","link":"#对象重生或死亡","children":[]}]},{"level":2,"title":"回收方法区内存","slug":"回收方法区内存","link":"#回收方法区内存","children":[{"level":3,"title":"判定废弃常量","slug":"判定废弃常量","link":"#判定废弃常量","children":[]},{"level":3,"title":"判定无用的类","slug":"判定无用的类","link":"#判定无用的类","children":[]}]},{"level":2,"title":"垃圾收集算法","slug":"垃圾收集算法","link":"#垃圾收集算法","children":[{"level":3,"title":"标记-清除算法","slug":"标记-清除算法","link":"#标记-清除算法","children":[]},{"level":3,"title":"复制算法（新生代）","slug":"复制算法-新生代","link":"#复制算法-新生代","children":[]},{"level":3,"title":"标记-整理算法（老年代）","slug":"标记-整理算法-老年代","link":"#标记-整理算法-老年代","children":[]},{"level":3,"title":"分代收集算法","slug":"分代收集算法","link":"#分代收集算法","children":[]}]}],"git":{"createdTime":1691841537000,"updatedTime":1691841537000,"contributors":[{"name":"Lenovo","email":"3153566913@qq.com","commits":1}]},"readingTime":{"minutes":9.41,"words":2824},"filePathRelative":"codenotes/Java/jvm2/3.md","localizedDate":"2023年8月12日"}');export{e as data};