const e=JSON.parse('{"key":"v-5dff4f3c","path":"/essential/impl/ds/10.syncmap.html","title":"syncmap","lang":"zh-CN","frontmatter":{"description":"go标准库提供的sync.Map是一个并发安全的map，使用它时不需要使用锁之类的方式来控制，其实现不算特别复杂，去掉注释总共也就两三百行代码。 结构 它总共只有四个字段，分别如下 read，只读的map，可以理解为对dirty的缓存; dirty，一个普通的map; misses，访问read时没有命中的次数; mu，保护dirty的并发安全; re...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/essential/impl/ds/10.syncmap.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"syncmap"}],["meta",{"property":"og:description","content":"go标准库提供的sync.Map是一个并发安全的map，使用它时不需要使用锁之类的方式来控制，其实现不算特别复杂，去掉注释总共也就两三百行代码。 结构 它总共只有四个字段，分别如下 read，只读的map，可以理解为对dirty的缓存; dirty，一个普通的map; misses，访问read时没有命中的次数; mu，保护dirty的并发安全; re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T14:56:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T14:56:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"syncmap\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-19T14:56:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":2,"title":"读","slug":"读","link":"#读","children":[]},{"level":2,"title":"写","slug":"写","link":"#写","children":[]},{"level":2,"title":"删","slug":"删","link":"#删","children":[]},{"level":2,"title":"遍历","slug":"遍历","link":"#遍历","children":[]},{"level":2,"title":"性能","slug":"性能","link":"#性能","children":[]}],"git":{"createdTime":1718808999000,"updatedTime":1718808999000,"contributors":[{"name":"yihhao wang","email":"2633565580@qq.com","commits":1}]},"readingTime":{"minutes":10.64,"words":1596},"filePathRelative":"essential/impl/ds/10.syncmap.md","localizedDate":"2024年6月19日","autoDesc":true}');export{e as data};
