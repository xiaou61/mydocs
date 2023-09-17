const l=JSON.parse('{"key":"v-7ade126f","path":"/codenotes/Java/jvm/1.html","title":"JVM系列-第1章-JVM与Java体系结构","lang":"zh-CN","frontmatter":{"title":"JVM系列-第1章-JVM与Java体系结构","tags":["JVM","虚拟机"],"categories":["JVM","1.内存与垃圾回收篇"],"keywords":"JVM，虚拟机。","description":"JVM系列-第1章-JVM与Java体系结构。","cover":"https://npm.elemecdn.com/lql_static@latest/logo/jvm.png","abbrlink":"8c954c6","head":[["meta",{"property":"og:url","content":"https://mydocs.guoyaxue.top/codenotes/Java/jvm/1.html"}],["meta",{"property":"og:site_name","content":"小uの学习笔记"}],["meta",{"property":"og:title","content":"JVM系列-第1章-JVM与Java体系结构"}],["meta",{"property":"og:description","content":"JVM系列-第1章-JVM与Java体系结构。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://npm.elemecdn.com/lql_static@latest/logo/jvm.png"}],["meta",{"property":"og:updated_time","content":"2023-08-02T10:33:49.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JVM系列-第1章-JVM与Java体系结构"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:tag","content":"虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-08-02T10:33:49.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"开发人员如何看待上层框架","slug":"开发人员如何看待上层框架","link":"#开发人员如何看待上层框架","children":[]},{"level":2,"title":"架构师每天都在思考什么？","slug":"架构师每天都在思考什么","link":"#架构师每天都在思考什么","children":[]},{"level":2,"title":"我们为什么要学习JVM","slug":"我们为什么要学习jvm","link":"#我们为什么要学习jvm","children":[]},{"level":2,"title":"Java VS C++","slug":"java-vs-c","link":"#java-vs-c","children":[]},{"level":2,"title":"什么人需要学JVM？","slug":"什么人需要学jvm","link":"#什么人需要学jvm","children":[]},{"level":2,"title":"推荐及参考书籍","slug":"推荐及参考书籍","link":"#推荐及参考书籍","children":[]},{"level":2,"title":"TIOBE排行榜","slug":"tiobe排行榜","link":"#tiobe排行榜","children":[]},{"level":2,"title":"Java生态圈","slug":"java生态圈","link":"#java生态圈","children":[]},{"level":2,"title":"Java-跨平台的语言","slug":"java-跨平台的语言","link":"#java-跨平台的语言","children":[]},{"level":2,"title":"JVM-跨语言的平台","slug":"jvm-跨语言的平台","link":"#jvm-跨语言的平台","children":[]},{"level":2,"title":"多语言混合编程","slug":"多语言混合编程","link":"#多语言混合编程","children":[]},{"level":2,"title":"如何真正搞懂JVM？","slug":"如何真正搞懂jvm","link":"#如何真正搞懂jvm","children":[]},{"level":2,"title":"Java发展重大事件","slug":"java发展重大事件","link":"#java发展重大事件","children":[]},{"level":2,"title":"Open JDK和Oracle JDK","slug":"open-jdk和oracle-jdk","link":"#open-jdk和oracle-jdk","children":[]},{"level":2,"title":"虚拟机","slug":"虚拟机","link":"#虚拟机","children":[{"level":3,"title":"虚拟机概念","slug":"虚拟机概念","link":"#虚拟机概念","children":[]},{"level":3,"title":"Java虚拟机","slug":"java虚拟机","link":"#java虚拟机","children":[]}]},{"level":2,"title":"JVM的位置","slug":"jvm的位置","link":"#jvm的位置","children":[]},{"level":2,"title":"JVM的整体结构","slug":"jvm的整体结构","link":"#jvm的整体结构","children":[]},{"level":2,"title":"Java代码执行流程","slug":"java代码执行流程","link":"#java代码执行流程","children":[]},{"level":2,"title":"JVM的架构模型","slug":"jvm的架构模型","link":"#jvm的架构模型","children":[{"level":3,"title":"基于栈的指令集架构","slug":"基于栈的指令集架构","link":"#基于栈的指令集架构","children":[]},{"level":3,"title":"基于寄存器的指令级架构","slug":"基于寄存器的指令级架构","link":"#基于寄存器的指令级架构","children":[]},{"level":3,"title":"两种架构的举例","slug":"两种架构的举例","link":"#两种架构的举例","children":[]},{"level":3,"title":"JVM架构总结","slug":"jvm架构总结","link":"#jvm架构总结","children":[]}]},{"level":2,"title":"JVM的生命周期","slug":"jvm的生命周期","link":"#jvm的生命周期","children":[{"level":3,"title":"虚拟机的启动","slug":"虚拟机的启动","link":"#虚拟机的启动","children":[]},{"level":3,"title":"虚拟机的执行","slug":"虚拟机的执行","link":"#虚拟机的执行","children":[]},{"level":3,"title":"虚拟机的退出","slug":"虚拟机的退出","link":"#虚拟机的退出","children":[]}]},{"level":2,"title":"JVM发展历程","slug":"jvm发展历程","link":"#jvm发展历程","children":[{"level":3,"title":"Sun Classic VM","slug":"sun-classic-vm","link":"#sun-classic-vm","children":[]},{"level":3,"title":"Exact VM","slug":"exact-vm","link":"#exact-vm","children":[]},{"level":3,"title":"HotSpot VM（重点）","slug":"hotspot-vm-重点","link":"#hotspot-vm-重点","children":[]},{"level":3,"title":"JRockit（商用三大虚拟机之一）","slug":"jrockit-商用三大虚拟机之一","link":"#jrockit-商用三大虚拟机之一","children":[]},{"level":3,"title":"IBM的J9（商用三大虚拟机之一）","slug":"ibm的j9-商用三大虚拟机之一","link":"#ibm的j9-商用三大虚拟机之一","children":[]},{"level":3,"title":"KVM和CDC/CLDC Hotspot","slug":"kvm和cdc-cldc-hotspot","link":"#kvm和cdc-cldc-hotspot","children":[]},{"level":3,"title":"Azul VM","slug":"azul-vm","link":"#azul-vm","children":[]},{"level":3,"title":"Liquid VM","slug":"liquid-vm","link":"#liquid-vm","children":[]},{"level":3,"title":"Apache Marmony","slug":"apache-marmony","link":"#apache-marmony","children":[]},{"level":3,"title":"Micorsoft JVM","slug":"micorsoft-jvm","link":"#micorsoft-jvm","children":[]},{"level":3,"title":"Taobao JVM","slug":"taobao-jvm","link":"#taobao-jvm","children":[]},{"level":3,"title":"Dalvik VM","slug":"dalvik-vm","link":"#dalvik-vm","children":[]},{"level":3,"title":"Graal VM（未来虚拟机）","slug":"graal-vm-未来虚拟机","link":"#graal-vm-未来虚拟机","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1690972429000,"updatedTime":1690972429000,"contributors":[{"name":"Lenovo","email":"3153566913@qq.com","commits":1}]},"readingTime":{"minutes":23.92,"words":7177},"filePathRelative":"codenotes/Java/jvm/1.md","localizedDate":"2023年8月2日"}');export{l as data};