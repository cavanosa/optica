
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/optica/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/optica"
  },
  {
    "renderMode": 2,
    "route": "/optica/about"
  },
  {
    "renderMode": 2,
    "route": "/optica/market"
  },
  {
    "renderMode": 2,
    "route": "/optica/offers"
  },
  {
    "renderMode": 2,
    "route": "/optica/test"
  },
  {
    "renderMode": 2,
    "route": "/optica/results"
  },
  {
    "renderMode": 2,
    "redirectTo": "/optica",
    "route": "/optica/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7684, hash: 'e6b5a8dbf6434925da873bb507ea86f7519bc1af38c6de5a23ecf5d8efcd3fb1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '42084b191001a9bc9ddb0361921607def76e3efdcc20589433b43df04ceea379', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31273, hash: 'dfef28dc1f95b5ec346ab32a39b5525156df57f490a02c75f26d34ab39cea998', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'offers/index.html': {size: 31273, hash: 'dfef28dc1f95b5ec346ab32a39b5525156df57f490a02c75f26d34ab39cea998', text: () => import('./assets-chunks/offers_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31273, hash: 'dfef28dc1f95b5ec346ab32a39b5525156df57f490a02c75f26d34ab39cea998', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 31273, hash: 'dfef28dc1f95b5ec346ab32a39b5525156df57f490a02c75f26d34ab39cea998', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'results/index.html': {size: 31273, hash: 'dfef28dc1f95b5ec346ab32a39b5525156df57f490a02c75f26d34ab39cea998', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'market/index.html': {size: 31273, hash: 'dfef28dc1f95b5ec346ab32a39b5525156df57f490a02c75f26d34ab39cea998', text: () => import('./assets-chunks/market_index_html.mjs').then(m => m.default)},
    'styles-WBJBF6IZ.css': {size: 25245, hash: 'n5BB/7l6NA4', text: () => import('./assets-chunks/styles-WBJBF6IZ_css.mjs').then(m => m.default)}
  },
};
