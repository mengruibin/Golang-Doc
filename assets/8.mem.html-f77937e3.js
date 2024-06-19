const e=JSON.parse('{"key":"v-3b81b734","path":"/essential/impl/runtime/8.mem.html","title":"memory","lang":"zh-CN","frontmatter":{"date":"2024-01-24T00:00:00.000Z","description":"与传统的c/c++不同，go是一个gc语言，大多数情况下内存的分配和销毁由go来进行自动管理，一个对象的内存应该被分配到栈上还是堆上由编译器来进行决定，基本上不需要用户参与内存管理，用户要做的仅仅就是使用内存。在go中堆内存管理主要有两个大的组件，内存分配器负责堆内存的分配，垃圾回收器负责回收释放无用的堆内存，本文主要讲的就是内存分配器的工作方式，go...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/essential/impl/runtime/8.mem.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"memory"}],["meta",{"property":"og:description","content":"与传统的c/c++不同，go是一个gc语言，大多数情况下内存的分配和销毁由go来进行自动管理，一个对象的内存应该被分配到栈上还是堆上由编译器来进行决定，基本上不需要用户参与内存管理，用户要做的仅仅就是使用内存。在go中堆内存管理主要有两个大的组件，内存分配器负责堆内存的分配，垃圾回收器负责回收释放无用的堆内存，本文主要讲的就是内存分配器的工作方式，go..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T15:01:05.000Z"}],["meta",{"property":"article:published_time","content":"2024-01-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T15:01:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"memory\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-19T15:01:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"分配器","slug":"分配器","link":"#分配器","children":[{"level":3,"title":"线性分配","slug":"线性分配","link":"#线性分配","children":[]},{"level":3,"title":"链式分配","slug":"链式分配","link":"#链式分配","children":[]}]},{"level":2,"title":"内存组件","slug":"内存组件","link":"#内存组件","children":[{"level":3,"title":"mspan","slug":"mspan","link":"#mspan","children":[]},{"level":3,"title":"heaparena","slug":"heaparena","link":"#heaparena","children":[]},{"level":3,"title":"mcache","slug":"mcache","link":"#mcache","children":[]},{"level":3,"title":"mcentral","slug":"mcentral","link":"#mcentral","children":[]},{"level":3,"title":"mheap","slug":"mheap","link":"#mheap","children":[]}]},{"level":2,"title":"对象分配","slug":"对象分配","link":"#对象分配","children":[{"level":3,"title":"微对象","slug":"微对象","link":"#微对象","children":[]},{"level":3,"title":"小对象","slug":"小对象","link":"#小对象","children":[]},{"level":3,"title":"大对象","slug":"大对象","link":"#大对象","children":[]}]},{"level":2,"title":"其它","slug":"其它","link":"#其它","children":[{"level":3,"title":"内存统计","slug":"内存统计","link":"#内存统计","children":[]},{"level":3,"title":"NotInHeap","slug":"notinheap","link":"#notinheap","children":[]}]}],"git":{"createdTime":1718808999000,"updatedTime":1718809265000,"contributors":[{"name":"yihhao wang","email":"2633565580@qq.com","commits":2}]},"readingTime":{"minutes":48.25,"words":7238},"filePathRelative":"essential/impl/runtime/8.mem.md","localizedDate":"2024年1月24日","autoDesc":true}');export{e as data};
