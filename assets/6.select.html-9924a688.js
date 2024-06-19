const e=JSON.parse('{"key":"v-2eb5441a","path":"/essential/impl/ds/6.select.html","title":"select","lang":"zh-CN","frontmatter":{"date":"2024-01-27T00:00:00.000Z","description":"select是一种可以同时监听多个管道状态的结构，它的语法跟switch类似 ```go import ( \\"context\\" \\"log/slog\\" \\"os\\" \\"os/signal\\" \\"time\\" ) func main() { finished := make(chan struct{}) ctx, stop := signal.NotifyCont...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/essential/impl/ds/6.select.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"select"}],["meta",{"property":"og:description","content":"select是一种可以同时监听多个管道状态的结构，它的语法跟switch类似 ```go import ( \\"context\\" \\"log/slog\\" \\"os\\" \\"os/signal\\" \\"time\\" ) func main() { finished := make(chan struct{}) ctx, stop := signal.NotifyCont..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T15:01:05.000Z"}],["meta",{"property":"article:published_time","content":"2024-01-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T15:01:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"select\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-19T15:01:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[{"level":3,"title":"优化","slug":"优化","link":"#优化","children":[]},{"level":3,"title":"处理","slug":"处理","link":"#处理","children":[]}]}],"git":{"createdTime":1718808999000,"updatedTime":1718809265000,"contributors":[{"name":"yihhao wang","email":"2633565580@qq.com","commits":2}]},"readingTime":{"minutes":26.51,"words":3976},"filePathRelative":"essential/impl/ds/6.select.md","localizedDate":"2024年1月27日","autoDesc":true}');export{e as data};
