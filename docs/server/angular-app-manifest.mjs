
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/optica/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/optica"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7684, hash: '254110fc24ab11674138dbace5df1480295f637eae5f9bb6c84a10d5c1e31fee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '41f06a2ffb58e355be5481fcb8d991a13d2ddd84555162e0d88196cfe26a4038', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31019, hash: 'e2b030bd282a902eec5a023d7c71a1bfe5068d8c0c4644e569eefcadacbedb7c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WBJBF6IZ.css': {size: 25245, hash: 'n5BB/7l6NA4', text: () => import('./assets-chunks/styles-WBJBF6IZ_css.mjs').then(m => m.default)}
  },
};
