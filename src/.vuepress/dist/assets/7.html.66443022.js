const e=JSON.parse('{"key":"v-5ee09b2a","path":"/projects/zatan/8/7.html","title":"深入了解stream流","lang":"zh-CN","frontmatter":{"title":"深入了解stream流","icon":"code","category":["技术杂谈"],"tag":["技术杂谈"],"sticky":false,"star":true,"article":true,"timeline":true,"description":"Stream 流是 Java 8 新提供给开发者的一组操作集合的 API，将要处理的元素集合看作一种流， 流在管道中传输， 并且可以在管道的节点上进行处理， 比如筛选、排序、聚合等。元素流在管道中经过中间操作（intermediate operation）的处理，最后由终端操作 (terminal operation) 得到前面处理的结果。Stream...","head":[["meta",{"property":"og:url","content":"https://mydocs.guoyaxue.top/projects/zatan/8/7.html"}],["meta",{"property":"og:site_name","content":"小uの学习笔记"}],["meta",{"property":"og:title","content":"深入了解stream流"}],["meta",{"property":"og:description","content":"Stream 流是 Java 8 新提供给开发者的一组操作集合的 API，将要处理的元素集合看作一种流， 流在管道中传输， 并且可以在管道的节点上进行处理， 比如筛选、排序、聚合等。元素流在管道中经过中间操作（intermediate operation）的处理，最后由终端操作 (terminal operation) 得到前面处理的结果。Stream..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-07T09:29:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"技术杂谈"}],["meta",{"property":"article:modified_time","content":"2023-08-07T09:29:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"流的简单使用","slug":"流的简单使用","link":"#流的简单使用","children":[{"level":3,"title":"创建流","slug":"创建流","link":"#创建流","children":[]},{"level":3,"title":"清单 1. 创建 Stream 流","slug":"清单-1-创建-stream-流","link":"#清单-1-创建-stream-流","children":[]},{"level":3,"title":"使用流","slug":"使用流","link":"#使用流","children":[]},{"level":3,"title":"清单 2 展示了如何使用 Stream 流筛选未及格学生名单：","slug":"清单-2-展示了如何使用-stream-流筛选未及格学生名单","link":"#清单-2-展示了如何使用-stream-流筛选未及格学生名单","children":[]},{"level":3,"title":"清单 3. Java 7 实现筛选未及格学生名单","slug":"清单-3-java-7-实现筛选未及格学生名单","link":"#清单-3-java-7-实现筛选未及格学生名单","children":[]}]},{"level":2,"title":"流的基础知识","slug":"流的基础知识","link":"#流的基础知识","children":[{"level":3,"title":"流的分类","slug":"流的分类","link":"#流的分类","children":[]},{"level":3,"title":"终端操作和中间操作","slug":"终端操作和中间操作","link":"#终端操作和中间操作","children":[]},{"level":3,"title":"流接口","slug":"流接口","link":"#流接口","children":[]},{"level":3,"title":"BaseStream 接口","slug":"basestream-接口","link":"#basestream-接口","children":[]},{"level":3,"title":"清单 4. 由 BaseStream 接口派生出的流接口","slug":"清单-4-由-basestream-接口派生出的流接口","link":"#清单-4-由-basestream-接口派生出的流接口","children":[]},{"level":3,"title":"Stream 接口","slug":"stream-接口","link":"#stream-接口","children":[]}]},{"level":2,"title":"流的 API 操作","slug":"流的-api-操作","link":"#流的-api-操作","children":[{"level":3,"title":"缩减操作","slug":"缩减操作","link":"#缩减操作","children":[]},{"level":3,"title":"清单 5. reduce() 方法的三种实现","slug":"清单-5-reduce-方法的三种实现","link":"#清单-5-reduce-方法的三种实现","children":[]},{"level":3,"title":"第一种签名","slug":"第一种签名","link":"#第一种签名","children":[]},{"level":3,"title":"清单 6. 第一种签名的 reduce() 的使用","slug":"清单-6-第一种签名的-reduce-的使用","link":"#清单-6-第一种签名的-reduce-的使用","children":[]},{"level":3,"title":"第二种签名","slug":"第二种签名","link":"#第二种签名","children":[]},{"level":3,"title":"清单 7. 第二种签名的 reduce() 的使用","slug":"清单-7-第二种签名的-reduce-的使用","link":"#清单-7-第二种签名的-reduce-的使用","children":[]},{"level":3,"title":"第三种签名","slug":"第三种签名","link":"#第三种签名","children":[]},{"level":3,"title":"清单 8. 第三种签名的 reduce() 的使用","slug":"清单-8-第三种签名的-reduce-的使用","link":"#清单-8-第三种签名的-reduce-的使用","children":[]},{"level":3,"title":"映射","slug":"映射","link":"#映射","children":[]},{"level":3,"title":"清单 9. 映射操作相关方法定义","slug":"清单-9-映射操作相关方法定义","link":"#清单-9-映射操作相关方法定义","children":[]},{"level":3,"title":"map()","slug":"map","link":"#map","children":[]},{"level":3,"title":"清单 10. map() 方法的使用示例","slug":"清单-10-map-方法的使用示例","link":"#清单-10-map-方法的使用示例","children":[]},{"level":3,"title":"清单 11. mapToDouble() 方法的使用示例","slug":"清单-11-maptodouble-方法的使用示例","link":"#清单-11-maptodouble-方法的使用示例","children":[]},{"level":3,"title":"flatMap()","slug":"flatmap","link":"#flatmap","children":[]},{"level":3,"title":"清单 12. flatMap () 方法的使用示例","slug":"清单-12-flatmap-方法的使用示例","link":"#清单-12-flatmap-方法的使用示例","children":[]},{"level":3,"title":"收集操作","slug":"收集操作","link":"#收集操作","children":[]},{"level":3,"title":"清单 13. 收集操作相关 API","slug":"清单-13-收集操作相关-api","link":"#清单-13-收集操作相关-api","children":[]},{"level":3,"title":"清单 14. Collectors","slug":"清单-14-collectors","link":"#清单-14-collectors","children":[]},{"level":3,"title":"清单 15. 使收集操作将 List 转 Map","slug":"清单-15-使收集操作将-list-转-map","link":"#清单-15-使收集操作将-list-转-map","children":[]}]},{"level":2,"title":"并行流的使用","slug":"并行流的使用","link":"#并行流的使用","children":[{"level":3,"title":"清单 16. 第三种签名方式的 reduce() 方法与并行流结合使用","slug":"清单-16-第三种签名方式的-reduce-方法与并行流结合使用","link":"#清单-16-第三种签名方式的-reduce-方法与并行流结合使用","children":[]},{"level":3,"title":"清单 17. 并行流使用场景","slug":"清单-17-并行流使用场景","link":"#清单-17-并行流使用场景","children":[]}]},{"level":2,"title":"参考答案","slug":"参考答案","link":"#参考答案","children":[{"level":3,"title":"清单 18. 第一种实现方式","slug":"清单-18-第一种实现方式","link":"#清单-18-第一种实现方式","children":[]},{"level":3,"title":"清单 19. 第二种实现方式","slug":"清单-19-第二种实现方式","link":"#清单-19-第二种实现方式","children":[]}]}],"git":{"createdTime":1691400581000,"updatedTime":1691400581000,"contributors":[{"name":"Lenovo","email":"3153566913@qq.com","commits":1}]},"readingTime":{"minutes":15.36,"words":4608},"filePathRelative":"projects/zatan/8/7.md","localizedDate":"2023年8月7日"}');export{e as data};