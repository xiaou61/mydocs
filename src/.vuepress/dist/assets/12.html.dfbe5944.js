const e=JSON.parse('{"key":"v-1d030c6b","path":"/interview/selected/12.html","title":"秒传","lang":"zh-CN","frontmatter":{"title":"秒传","icon":"community","category":["面试"],"tag":["面试"],"sticky":false,"star":true,"article":true,"timeline":true,"description":"秒传 1、什么是秒传 通俗的说，你把要上传的东西上传，服务器会先做 MD5 校验，如果服务器上有同样的东西，它就直接给你个新地址，其实你下载的都是服务器上的同一个文件，想要不秒传，其实只要让 MD5 改变，就是对文件本身做一下修改（改名字不行），例如一个文本文件，你多加几个字，MD5 就变了，就不会秒传了. 2、本文实现的秒传核心逻辑 a、利用 red...","head":[["meta",{"property":"og:url","content":"https://mydocs.guoyaxue.top/interview/selected/12.html"}],["meta",{"property":"og:site_name","content":"小uの学习笔记"}],["meta",{"property":"og:title","content":"秒传"}],["meta",{"property":"og:description","content":"秒传 1、什么是秒传 通俗的说，你把要上传的东西上传，服务器会先做 MD5 校验，如果服务器上有同样的东西，它就直接给你个新地址，其实你下载的都是服务器上的同一个文件，想要不秒传，其实只要让 MD5 改变，就是对文件本身做一下修改（改名字不行），例如一个文本文件，你多加几个字，MD5 就变了，就不会秒传了. 2、本文实现的秒传核心逻辑 a、利用 red..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-08T04:27:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:modified_time","content":"2023-08-08T04:27:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"秒传","slug":"秒传","link":"#秒传","children":[{"level":3,"title":"1、什么是秒传","slug":"_1、什么是秒传","link":"#_1、什么是秒传","children":[]},{"level":3,"title":"2、本文实现的秒传核心逻辑","slug":"_2、本文实现的秒传核心逻辑","link":"#_2、本文实现的秒传核心逻辑","children":[]}]},{"level":2,"title":"分片上传","slug":"分片上传","link":"#分片上传","children":[{"level":3,"title":"1、什么是分片上传","slug":"_1、什么是分片上传","link":"#_1、什么是分片上传","children":[]},{"level":3,"title":"2、分片上传的场景","slug":"_2、分片上传的场景","link":"#_2、分片上传的场景","children":[]}]},{"level":2,"title":"断点续传","slug":"断点续传","link":"#断点续传","children":[{"level":3,"title":"1、什么是断点续传","slug":"_1、什么是断点续传","link":"#_1、什么是断点续传","children":[]},{"level":3,"title":"2、应用场景","slug":"_2、应用场景","link":"#_2、应用场景","children":[]},{"level":3,"title":"3、实现断点续传的核心逻辑","slug":"_3、实现断点续传的核心逻辑","link":"#_3、实现断点续传的核心逻辑","children":[]},{"level":3,"title":"4、实现流程步骤","slug":"_4、实现流程步骤","link":"#_4、实现流程步骤","children":[]}]},{"level":2,"title":"后端进行写入操作的核心代码","slug":"后端进行写入操作的核心代码","link":"#后端进行写入操作的核心代码","children":[{"level":3,"title":"1、RandomAccessFile 实现方式","slug":"_1、randomaccessfile-实现方式","link":"#_1、randomaccessfile-实现方式","children":[]},{"level":3,"title":"2、MappedByteBuffer 实现方式","slug":"_2、mappedbytebuffer-实现方式","link":"#_2、mappedbytebuffer-实现方式","children":[]},{"level":3,"title":"3、文件操作核心模板类代码","slug":"_3、文件操作核心模板类代码","link":"#_3、文件操作核心模板类代码","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1691468859000,"updatedTime":1691468859000,"contributors":[{"name":"Lenovo","email":"3153566913@qq.com","commits":1}]},"readingTime":{"minutes":8.12,"words":2435},"filePathRelative":"interview/selected/12.md","localizedDate":"2023年8月8日"}');export{e as data};
