webpackJsonp([0xe131439bcb878800],{"./node_modules/json-loader/index.js!./.cache/json/postgraphile-usage.json":function(e,t){e.exports={data:{remark:{html:'<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>It\'s recommended that you consume these plugins via the\n<a href="https://github.com/graphile/graphile-build/tree/master/packages/postgraphile-core"><code class="language-text">postgraphile-core</code></a>\nmodule which is used internally by\n<a href="https://github.com/graphile/postgraphile"><code class="language-text">PostGraphQL</code></a>. This module is\nfairly small and exposes the following methods:</p>\n<ul>\n<li><code class="language-text">createPostGraphileSchema(pgConfig, schemas, options)</code> - returns a promise to a GraphQL schema</li>\n<li><code class="language-text">watchPostGraphileSchema(pgConfig, schemas, options, onNewSchema)</code> - returns a\npromise that returns a <code class="language-text">release</code> function that you can call to stop watching;\nthe <code class="language-text">onNewSchema</code> callback will be called every time a new schema is\ngenerated, and it is guaranteed to be called before the promise resolves.</li>\n</ul>\n<p>If you prefer to use the plugins yourself it\'s advised that you use the\n<code class="language-text">defaultPlugins</code> export from <code class="language-text">graphile-build-pg</code> and then create a new array\nbased on that into which you may insert or remove specific plugins. This is\nbecause it is ordered in a way to ensure the plugins work correctly (and we may\nstill split up or restructure the plugins within it).</p>\n<h3 id="defaultplugins"><a href="#defaultplugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">defaultPlugins</code></h3>\n<p>An array of graphql-build plugins in the correct order to generate a\nwell-thought-out GraphQL object tree based on your PostgreSQL schema. This is\nthe array that <code class="language-text">postgraphile-core</code> uses.</p>\n<h3 id="inflections"><a href="#inflections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">inflections</code></h3>\n<p>This is a list of inflection engines, we currently have the following:</p>\n<ul>\n<li><code class="language-text">defaultInflection</code> - a sensible default</li>\n<li><code class="language-text">postGraphileInflection</code> - as above, but enums get converted to <code class="language-text">CONSTANT_CASE</code></li>\n<li><code class="language-text">postGraphileClassicIdsInflection</code> - as above, but <code class="language-text">id</code> attributes get renamed to <code class="language-text">rowId</code> to prevent conflicts with <code class="language-text">id</code> from the Relay Global Unique Object Specification.</li>\n</ul>\n<h3 id="manual-usage"><a href="#manual-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Manual usage</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultPlugins<span class="token punctuation">,</span> getBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"graphile-build"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  defaultPlugins <span class="token keyword">as</span> pgDefaultPlugins<span class="token punctuation">,</span>\n  inflections<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    defaultInflection<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"graphile-build-pg"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getSchema</span><span class="token punctuation">(</span>pgConfig <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DATABASE_URL</span><span class="token punctuation">,</span> pgSchemas <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'public\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> additionalPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">getBuilder</span><span class="token punctuation">(</span>\n    <span class="token punctuation">[</span>\n      <span class="token operator">...</span>defaultPlugins<span class="token punctuation">,</span>\n      <span class="token operator">...</span>pgDefaultPlugins<span class="token punctuation">,</span>\n      <span class="token operator">...</span>additionalPlugins\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      pgConfig<span class="token punctuation">,</span>\n      pgSchemas<span class="token punctuation">,</span>\n      pgExtendedTypes<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      pgInflection<span class="token punctuation">:</span> defaultInflection<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{path:"/postgraphile/usage/",title:"Graphile-Build-PG Usage"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Plugins [SUPPORTER] [PRO]",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions [SUPPORTER]",sectionId:"overview"},{to:"/postgraphile/production/",title:"Running in Production [PRO]",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-usage-aec91fbcd81f6c9c4d81.js.map