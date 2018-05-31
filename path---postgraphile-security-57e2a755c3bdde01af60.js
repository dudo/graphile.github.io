webpackJsonp([0x82e880459e3b6800],{"./node_modules/json-loader/index.js!./.cache/json/postgraphile-security.json":function(n,s){n.exports={data:{remark:{html:'<h2 id="security"><a href="#security" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Security</h2>\n<p>Traditionally in web application architectures the security is implemented in\nthe server layer and the database is treated as a simple store of data. Partly\nthis was due to necessity (the security policies offered by databases such as\nPostgreSQL were simply not granular enough), and partly this was people\nfiguring it would reduce the workload on the database thus increases\nscalability. However, as applications grow, they start needing more advanced\nfeatures or additional services to interact with the database.  There\'s a\ncouple options they have here: duplicate the authentication/authorization logic\nin multiple places (which can lead to discrepancies and increases the surface\narea for potential issues), or make sure everything goes through the original\napplication layer (which then becomes both the development and performance\nbottleneck).</p>\n<p>However, this is no longer necessary since PostgreSQL introduced much more\ngranular permissions in the form of <a href="https://www.postgresql.org/docs/9.6/static/ddl-rowsecurity.html">Row-Level Security (RLS)\npolicies</a> in\nPostgreSQL 9.5 back at the beginning of 2016. Now you can combine this with\nPostgreSQL established permissions system (based on roles) allowing your\napplication to be considerably more specific about permissions: adding\nrow-level permission constraints to the existing table- and column-based\npermissions.</p>\n<p>Now that this functionality is stable and proven, we advise that you protect\nyour lowest level - the data itself. By doing so you can be sure that no matter\nhow many services interact with your database they will all be protected by the\nsame underlying permissions logic, which you only need to maintain in one\nplace. You can add as many microservices as you like, and they can talk to the\ndatabase directly!</p>\n<p>When enabled, all rows are by default not visible to any roles (except database\nadministration roles and the role who created the database/table); and\npermission is selectively granted with the use of policies.</p>\n<p>If you already have a secure database schema that implements these technologies\nto protect your data at the lowest levels then you can leverage\n<code class="language-text">postgraphile</code> to generate a powerful, secure and fast API very rapidly. You\njust need to generate JWT tokens for your users, and we even help you with\nthat!</p>\n<h3 id="processing-jwts"><a href="#processing-jwts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Processing JWTs</h3>\n<p>To enable the JWT functionality you must provide a <code class="language-text">--jwt-secret</code> on the CLI\n(or <code class="language-text">jwtSecret</code> to the library options). This will allow PostGraphile to\nauthenticate incoming JWTs and set the granted claims on the database\ntransaction.</p>\n<p>You should also supply a <code class="language-text">--default-role</code> which is used for requests that don\'t\nspecify a role.</p>\n<h3 id="generating-jwts"><a href="#generating-jwts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generating JWTs</h3>\n<p>PostGraphile also has support for generating JWTs easily from inside your\nPostgreSQL schema.</p>\n<p>To do so we will take a composite type that you specify via\n<code class="language-text">--jwt-token-identifier</code> and whenever a value of that type is returned from a\nPostgreSQL function we will instead sign it with your <code class="language-text">--jwt-secret</code> and return\nit as a string JWT token as part of your GraphQL response payload.</p>\n<p>For example, you might define a composite type such as this in PostgreSQL:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">create</span> <span class="token keyword">type</span> my_private_schema<span class="token punctuation">.</span>jwt_token <span class="token keyword">as</span> <span class="token punctuation">(</span>\n  role <span class="token keyword">text</span><span class="token punctuation">,</span>\n  exp <span class="token keyword">integer</span><span class="token punctuation">,</span>\n  person_id <span class="token keyword">integer</span><span class="token punctuation">,</span>\n  is_admin <span class="token keyword">boolean</span><span class="token punctuation">,</span>\n  username <span class="token keyword">varchar</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Then run postgraphile as:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">postgraphile \\\n  --jwt-token-identifier my_private_schema.jwt_token \\\n  --jwt-secret $JWT_SECRET \\\n  -c postgres://user:pass@host/dbname \\\n  -s my_public_schema</code></pre>\n      </div>\n<p>And finally you might add a PostgreSQL function such as:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">create</span> <span class="token keyword">function</span> my_public_schema<span class="token punctuation">.</span>authenticate<span class="token punctuation">(</span>\n  email <span class="token keyword">text</span><span class="token punctuation">,</span>\n  password <span class="token keyword">text</span>\n<span class="token punctuation">)</span> <span class="token keyword">returns</span> forum_example<span class="token punctuation">.</span>jwt_token <span class="token keyword">as</span> $$\n<span class="token keyword">declare</span>\n  account my_public_schema<span class="token punctuation">.</span>person_account<span class="token punctuation">;</span>\n<span class="token keyword">begin</span>\n  <span class="token keyword">select</span> a<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">into</span> account\n    <span class="token keyword">from</span> my_public_schema<span class="token punctuation">.</span>person_account <span class="token keyword">as</span> a\n    <span class="token keyword">where</span> a<span class="token punctuation">.</span>email <span class="token operator">=</span> authenticate<span class="token punctuation">.</span>email<span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> account<span class="token punctuation">.</span>password_hash <span class="token operator">=</span> crypt<span class="token punctuation">(</span>password<span class="token punctuation">,</span> account<span class="token punctuation">.</span>password_hash<span class="token punctuation">)</span> <span class="token keyword">then</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token string">\'person_role\'</span><span class="token punctuation">,</span>\n      extract<span class="token punctuation">(</span>epoch <span class="token keyword">from</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">interval</span> <span class="token string">\'7 days\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      account<span class="token punctuation">.</span>person_id<span class="token punctuation">,</span>\n      account<span class="token punctuation">.</span>is_admin<span class="token punctuation">,</span>\n      account<span class="token punctuation">.</span>username\n    <span class="token punctuation">)</span>::my_private_schema<span class="token punctuation">.</span>jwt_token<span class="token punctuation">;</span>\n  <span class="token keyword">else</span>\n    <span class="token keyword">return</span> <span class="token boolean">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>\n<span class="token keyword">end</span><span class="token punctuation">;</span>\n$$ <span class="token keyword">language</span> plpgsql strict security <span class="token keyword">definer</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Which would give you an <code class="language-text">authenticate</code> mutation with which you can extract the\n<code class="language-text">jwtToken</code> from the response payload.</p>\n<p>TODO: test this!</p>\n<h3 id="sending-jwts-to-the-server"><a href="#sending-jwts-to-the-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sending JWTs to the server</h3>\n<p>JWTs are sent via the best practice <code class="language-text">Authorization</code> header:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Authorization: Bearer JWT_TOKEN_HERE</code></pre>\n      </div>\n<p>e.g. with Apollo:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">networkInterface<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>\n  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token function">getJWTFromSomewhere</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      req<span class="token punctuation">.</span>options<span class="token punctuation">.</span>headers <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>options<span class="token punctuation">.</span>headers<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        authorization<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>or with Relay:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Relay<span class="token punctuation">.</span><span class="token function">injectNetworkLayer</span><span class="token punctuation">(</span>\n  <span class="token keyword">new</span> <span class="token class-name">Relay<span class="token punctuation">.</span>DefaultNetworkLayer</span><span class="token punctuation">(</span><span class="token string">\'/graphql\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      Authorization<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="how-it-works"><a href="#how-it-works" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How it works</h3>\n<p>Your JWT token will include a number of claims, something like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"aud"</span><span class="token operator">:</span> <span class="token string">"postgraphile"</span><span class="token punctuation">,</span>\n  <span class="token property">"role"</span><span class="token operator">:</span> <span class="token string">"app_user"</span><span class="token punctuation">,</span>\n  <span class="token property">"user_id"</span><span class="token operator">:</span> <span class="token number">27</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>When we verify that the JWT token is for us (via <code class="language-text">aud: &quot;postgraphile&quot;</code>) we can\nauthenticate the PostgreSQL client that is used to perform the GraphQL query.\nWe do this as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">begin</span><span class="token punctuation">;</span>\n<span class="token keyword">set</span> <span class="token keyword">local</span> role app_user<span class="token punctuation">;</span>\n<span class="token keyword">set</span> <span class="token keyword">local</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>role <span class="token keyword">to</span> <span class="token string">\'app_user\'</span><span class="token punctuation">;</span>\n<span class="token keyword">set</span> <span class="token keyword">local</span> jwt<span class="token punctuation">.</span>claims<span class="token punctuation">.</span>user_id <span class="token keyword">to</span> <span class="token string">\'2\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">-- WE PERFORM GRAPHQL QUERIES HERE</span>\n\n<span class="token keyword">commit</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<blockquote>\n<p><em>Actually, to save roundtrips we perform just one query to set all configs\nvia ...</em></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">select</span> set_config<span class="token punctuation">(</span><span class="token string">\'role\'</span><span class="token punctuation">,</span> <span class="token string">\'app_user\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> set_config<span class="token punctuation">(</span><span class="token string">\'user_id\'</span><span class="token punctuation">,</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n<span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></code></pre>\n      </div>\n<blockquote>\n<p><em>... but showing <code class="language-text">set local</code> is simpler to understand.</em></p>\n</blockquote>\n<p>You can then access this information via <code class="language-text">current_setting</code> (the second argument\nsays it\'s okay for the property to be missing, but <strong>only works in PostgreSQL\n9.6+</strong>, in previous versions you\'ll need to set the setting on the database to\nthe empty string); for example here\'s a helper function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">create</span> <span class="token keyword">function</span> current_user_id<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token keyword">integer</span> <span class="token keyword">as</span> $$\n  <span class="token keyword">select</span> <span class="token keyword">nullif</span><span class="token punctuation">(</span>current_setting<span class="token punctuation">(</span><span class="token string">\'jwt.claims.user_id\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span>::<span class="token keyword">integer</span><span class="token punctuation">;</span>\n$$ <span class="token keyword">language</span> <span class="token keyword">sql</span> stable security <span class="token keyword">definer</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>e.g. you might have a row level policy such as:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">create</span> policy update_if_author\n  <span class="token keyword">on</span> comments\n  <span class="token keyword">for</span> <span class="token keyword">update</span>\n  <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token string">"userId"</span> <span class="token operator">=</span> current_user_id<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token keyword">with</span> <span class="token keyword">check</span> <span class="token punctuation">(</span><span class="token string">"userId"</span> <span class="token operator">=</span> current_user_id<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',frontmatter:{path:"/postgraphile/security/",title:"Security"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Extending PostGraphile",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Plugins [SUPPORTER] [PRO]",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions [SUPPORTER]",sectionId:"overview"},{to:"/postgraphile/production/",title:"Running in Production [PRO]",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-security-57e2a755c3bdde01af60.js.map