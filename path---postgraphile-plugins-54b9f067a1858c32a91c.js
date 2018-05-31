webpackJsonp([0x1f0652cc351c9000],{"./node_modules/json-loader/index.js!./.cache/json/postgraphile-plugins.json":function(n,s){n.exports={data:{remark:{html:'<h2 id="plugins"><a href="#plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plugins</h2>\n<p>In addition to the Graphile-Build plugin system which builds the GraphQL schema\nin PostGraphile, PostGraphile also has a plugin system for the CLI and web\nlayer.  This plugin system is less mature, it\'s not ready for third party\nplugin developers yet, however there are a couple of first-party plugins\nthat you may want to use that can be purchased on the <a href="https://store.graphile.com">Graphile Store</a>:</p>\n<ul>\n<li><code class="language-text">@graphile/plugin-supporter</code> [SUPPORTER]</li>\n<li><code class="language-text">@graphile/plugin-pro</code> [PRO]</li>\n</ul>\n<h3 id="installing"><a href="#installing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h3>\n<p>You can install first-party plugins with <code class="language-text">yarn add</code> or <code class="language-text">npm install</code> using the\n<code class="language-text">https://...:...@git.graphile.com/.../postgraphile-supporter.git</code> URL from\n<a href="https://store.graphile.com">https://store.graphile.com</a>. Remember: <strong>you must keep this URL confidential</strong>.</p>\n<h3 id="enabling-via-cli-flag"><a href="#enabling-via-cli-flag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling via CLI flag</h3>\n<p>PostGraphile plugins can be specified with the <code class="language-text">--plugins</code> CLI flag; however\nthis flag must be the absolute first flag passed to PostGraphile as plugins can\nregister additional CLI flags. Multiple plugins can be specified with comma\nseparation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">postgraphile --plugins \\\n  @graphile/plugin-supporter,@graphile/plugin-pro \\\n  -c postgres://localhost/my_db</code></pre>\n      </div>\n<h3 id="enabling-via-postgraphilercjs"><a href="#enabling-via-postgraphilercjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling via <code class="language-text">.postgraphilerc.js</code></h3>\n<p>If you\'re using the CLI version, plugins can also be enabled via\n<code class="language-text">.postgraphilerc.js</code> file; for example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"@graphile/plugin-supporter"</span><span class="token punctuation">,</span>\n      <span class="token string">"@graphile/plugin-pro"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    connection<span class="token punctuation">:</span> <span class="token string">"postgres://localhost/my_db"</span><span class="token punctuation">,</span>\n    schema<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"app_public"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="enabling-via-middleware-options"><a href="#enabling-via-middleware-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling via middleware options</h3>\n<p>This will likely get easier in future, but for now enabling via the middleware\nis a slightly more involved process:</p>\n<p>To include the dependencies, for straight Node.js 8 you want:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> postgraphile<span class="token punctuation">,</span> makePluginHook <span class="token punctuation">}</span> <span class="token operator">=</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"postgraphile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token punctuation">:</span> PostGraphileSupporter <span class="token punctuation">}</span> <span class="token operator">=</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@graphile/plugin-supporter"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token punctuation">:</span> PostGraphilePro <span class="token punctuation">}</span> <span class="token operator">=</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@graphile/plugin-pro"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>If you\'re using ES2015 Modules (ESM) then try this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> postgraphile<span class="token punctuation">,</span> makePluginHook <span class="token punctuation">}</span>\n  <span class="token keyword">from</span> <span class="token string">"postgraphile"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PostGraphileSupporter\n  <span class="token keyword">from</span> <span class="token string">"@graphile/plugin-supporter"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PostGraphilePro\n  <span class="token keyword">from</span> <span class="token string">"@graphile/plugin-pro"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Then you enable the plugins by passing a <code class="language-text">pluginHook</code> via the PostGraphile\noptions, you can construct this using <code class="language-text">makePluginHook</code> as such:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> pluginHook <span class="token operator">=</span> <span class="token function">makePluginHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  PostGraphileSupporter<span class="token punctuation">,</span>\n  PostGraphilePro<span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> postGraphileMiddleware <span class="token operator">=</span> <span class="token function">postgraphile</span><span class="token punctuation">(</span>\n  databaseUrl<span class="token punctuation">,</span>\n  <span class="token string">"app_public"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    pluginHook<span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>postGraphileMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',frontmatter:{path:"/postgraphile/plugins/",title:"Plugins"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Plugins [SUPPORTER] [PRO]",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions [SUPPORTER]",sectionId:"overview"},{to:"/postgraphile/production/",title:"Running in Production [PRO]",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-plugins-54b9f067a1858c32a91c.js.map