const e=JSON.parse('{"key":"v-9eb9aee6","path":"/codenotes/Java/jvm2/1.html","title":"JVM 内存结构","lang":"zh-CN","frontmatter":{"title":"JVM 内存结构","icon":"code","category":["JVM"],"tag":["JVM"],"sticky":false,"star":true,"article":true,"timeline":true,"description":"Java 虚拟机的内存空间分为 5 个部分： 程序计数器; Java 虚拟机栈; 本地方法栈; 堆; 方法区; jvm-memory-structure JDK 1.8 同 JDK 1.7 比，最大的差别就是：元数据区取代了永久代。元空间的本质和永久代类似，都是对 JVM 规范中方法区的实现。不过元空间与永久代之间最大的区别在于：元数据空间并不在虚拟机...","head":[["meta",{"property":"og:url","content":"https://mydocs.guoyaxue.top/codenotes/Java/jvm2/1.html"}],["meta",{"property":"og:site_name","content":"小uの学习笔记"}],["meta",{"property":"og:title","content":"JVM 内存结构"}],["meta",{"property":"og:description","content":"Java 虚拟机的内存空间分为 5 个部分： 程序计数器; Java 虚拟机栈; 本地方法栈; 堆; 方法区; jvm-memory-structure JDK 1.8 同 JDK 1.7 比，最大的差别就是：元数据区取代了永久代。元空间的本质和永久代类似，都是对 JVM 规范中方法区的实现。不过元空间与永久代之间最大的区别在于：元数据空间并不在虚拟机..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-12T11:58:57.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-08-12T11:58:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"程序计数器（PC 寄存器）","slug":"程序计数器-pc-寄存器","link":"#程序计数器-pc-寄存器","children":[{"level":3,"title":"程序计数器的定义","slug":"程序计数器的定义","link":"#程序计数器的定义","children":[]},{"level":3,"title":"程序计数器的作用","slug":"程序计数器的作用","link":"#程序计数器的作用","children":[]},{"level":3,"title":"程序计数器的特点","slug":"程序计数器的特点","link":"#程序计数器的特点","children":[]}]},{"level":2,"title":"Java 虚拟机栈（Java 栈）","slug":"java-虚拟机栈-java-栈","link":"#java-虚拟机栈-java-栈","children":[{"level":3,"title":"Java 虚拟机栈的定义","slug":"java-虚拟机栈的定义","link":"#java-虚拟机栈的定义","children":[]},{"level":3,"title":"压栈出栈过程","slug":"压栈出栈过程","link":"#压栈出栈过程","children":[]},{"level":3,"title":"局部变量表","slug":"局部变量表","link":"#局部变量表","children":[]},{"level":3,"title":"操作数栈","slug":"操作数栈","link":"#操作数栈","children":[]},{"level":3,"title":"方法的调用","slug":"方法的调用","link":"#方法的调用","children":[]},{"level":3,"title":"Java 虚拟机栈的特点","slug":"java-虚拟机栈的特点","link":"#java-虚拟机栈的特点","children":[]}]},{"level":2,"title":"本地方法栈（C 栈）","slug":"本地方法栈-c-栈","link":"#本地方法栈-c-栈","children":[{"level":3,"title":"本地方法栈的定义","slug":"本地方法栈的定义","link":"#本地方法栈的定义","children":[]},{"level":3,"title":"栈帧变化过程","slug":"栈帧变化过程","link":"#栈帧变化过程","children":[]}]},{"level":2,"title":"堆","slug":"堆","link":"#堆","children":[{"level":3,"title":"堆的定义","slug":"堆的定义","link":"#堆的定义","children":[]},{"level":3,"title":"堆的特点","slug":"堆的特点","link":"#堆的特点","children":[]},{"level":3,"title":"新生代与老年代","slug":"新生代与老年代","link":"#新生代与老年代","children":[]},{"level":3,"title":"对象分配过程","slug":"对象分配过程","link":"#对象分配过程","children":[]},{"level":3,"title":"Full GC /Major GC 触发条件","slug":"full-gc-major-gc-触发条件","link":"#full-gc-major-gc-触发条件","children":[]},{"level":3,"title":"逃逸分析","slug":"逃逸分析","link":"#逃逸分析","children":[]},{"level":3,"title":"TLAB","slug":"tlab","link":"#tlab","children":[]},{"level":3,"title":"四种引用方式","slug":"四种引用方式","link":"#四种引用方式","children":[]}]},{"level":2,"title":"方法区","slug":"方法区","link":"#方法区","children":[{"level":3,"title":"方法区的定义","slug":"方法区的定义","link":"#方法区的定义","children":[]},{"level":3,"title":"方法区的特点","slug":"方法区的特点","link":"#方法区的特点","children":[]},{"level":3,"title":"运行时常量池","slug":"运行时常量池","link":"#运行时常量池","children":[]}]},{"level":2,"title":"直接内存（堆外内存）","slug":"直接内存-堆外内存","link":"#直接内存-堆外内存","children":[{"level":3,"title":"操作直接内存","slug":"操作直接内存","link":"#操作直接内存","children":[]},{"level":3,"title":"直接内存与堆内存比较","slug":"直接内存与堆内存比较","link":"#直接内存与堆内存比较","children":[]}]}],"git":{"createdTime":1691841537000,"updatedTime":1691841537000,"contributors":[{"name":"Lenovo","email":"3153566913@qq.com","commits":1}]},"readingTime":{"minutes":18.94,"words":5682},"filePathRelative":"codenotes/Java/jvm2/1.md","localizedDate":"2023年8月12日"}');export{e as data};