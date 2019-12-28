import Scroller from './scroll.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('infiniteScroller', Scroller)
}

const VueInfiniteScroller = {
  install: install,
  Scroller
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(VueInfiniteScroller)
}
