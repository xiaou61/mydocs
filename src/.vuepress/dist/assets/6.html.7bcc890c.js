const e=JSON.parse('{"key":"v-8da938b0","path":"/codenotes/Java/jvm2/6.html","title":"JVM 性能调优","lang":"zh-CN","frontmatter":{"title":"JVM 性能调优","icon":"code","category":["JVM"],"tag":["JVM"],"sticky":false,"star":true,"article":true,"timeline":true,"description":"在高性能硬件上部署程序，目前主要有两种方式： 通过 64 位 JDK 来使用大内存；; 使用若干个 32 位虚拟机建立逻辑集群来利用硬件资源。; 使用 64 位 JDK 管理大内存 堆内存变大后，虽然垃圾收集的频率减少了，但每次垃圾回收的时间变长。 如果堆内存为 14 G，那么每次 Full GC 将长达数十秒。如果 Full GC 频繁发生，那么对于...","head":[["meta",{"property":"og:url","content":"https://mydocs.guoyaxue.top/codenotes/Java/jvm2/6.html"}],["meta",{"property":"og:site_name","content":"小uの学习笔记"}],["meta",{"property":"og:title","content":"JVM 性能调优"}],["meta",{"property":"og:description","content":"在高性能硬件上部署程序，目前主要有两种方式： 通过 64 位 JDK 来使用大内存；; 使用若干个 32 位虚拟机建立逻辑集群来利用硬件资源。; 使用 64 位 JDK 管理大内存 堆内存变大后，虽然垃圾收集的频率减少了，但每次垃圾回收的时间变长。 如果堆内存为 14 G，那么每次 Full GC 将长达数十秒。如果 Full GC 频繁发生，那么对于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-12T11:58:57.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-08-12T11:58:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"使用 64 位 JDK 管理大内存","slug":"使用-64-位-jdk-管理大内存","link":"#使用-64-位-jdk-管理大内存","children":[]},{"level":2,"title":"使用 32 位 JVM 建立逻辑集群","slug":"使用-32-位-jvm-建立逻辑集群","link":"#使用-32-位-jvm-建立逻辑集群","children":[]},{"level":2,"title":"调优案例分析与实战","slug":"调优案例分析与实战","link":"#调优案例分析与实战","children":[{"level":3,"title":"场景描述","slug":"场景描述","link":"#场景描述","children":[]},{"level":3,"title":"分析","slug":"分析","link":"#分析","children":[]},{"level":3,"title":"直接内存的回收过程","slug":"直接内存的回收过程","link":"#直接内存的回收过程","children":[]}]}],"git":{"createdTime":1691841537000,"updatedTime":1691841537000,"contributors":[{"name":"Lenovo","email":"3153566913@qq.com","commits":1}]},"readingTime":{"minutes":4.13,"words":1238},"filePathRelative":"codenotes/Java/jvm2/6.md","localizedDate":"2023年8月12日"}');export{e as data};
