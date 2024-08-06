const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BZ7VOUkv.js","app":"_app/immutable/entry/app.BhildbYM.js","imports":["_app/immutable/entry/start.BZ7VOUkv.js","_app/immutable/chunks/entry.Z7g0kUow.js","_app/immutable/chunks/scheduler.B720Wybo.js","_app/immutable/entry/app.BhildbYM.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.B720Wybo.js","_app/immutable/chunks/index.Ctv-Nbzx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0--47zNSaq.js')),
			__memo(() => import('./chunks/1-BlI98-lp.js')),
			__memo(() => import('./chunks/2-CTJrqa1f.js')),
			__memo(() => import('./chunks/3-B_zuT27j.js')),
			__memo(() => import('./chunks/4-C3di7t6o.js')),
			__memo(() => import('./chunks/5-B0-4zvbQ.js')),
			__memo(() => import('./chunks/6-DNwKWqvk.js')),
			__memo(() => import('./chunks/7-DWQNYrt-.js')),
			__memo(() => import('./chunks/8-CDTA72cf.js')),
			__memo(() => import('./chunks/9-DFwCvtMh.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/manage",
				pattern: /^\/blog\/manage\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/new",
				pattern: /^\/blog\/new\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/posts/[slug]",
				pattern: /^\/blog\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
