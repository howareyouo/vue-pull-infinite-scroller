<template>
  <div class="scroller" ref="scroller" @scroll="scroll">
    <svg style="display: none">
      <symbol id="icon-finish" viewBox="0 0 1024 1024">
        <path
            d="M980.293 311.85c-25.697-60.751-62.485-115.314-109.345-162.17-46.858-46.865-101.425-83.653-162.173-109.342-62.89-26.606-129.708-40.094-198.587-40.094-68.881 0-135.697 13.488-198.585 40.093-60.753 25.695-115.316 62.482-162.178 109.342-46.86 46.858-83.642 101.421-109.345 162.17-26.599 62.893-40.082 129.706-40.082 198.588 0 68.879 13.483 135.694 40.082 198.588 25.703 60.747 62.485 115.308 109.349 162.171 46.858 46.86 101.421 83.644 162.173 109.347 62.893 26.596 129.703 40.084 198.585 40.084 68.883 0 135.697-13.485 198.588-40.084 60.747-25.703 115.316-62.485 162.173-109.347 46.86-46.863 83.647-101.421 109.345-162.171 26.596-62.893 40.084-129.709 40.084-198.588-0.001-68.88-13.486-135.694-40.085-198.587zM916.764 682.151c-22.221 52.533-54.044 99.723-94.586 140.273-40.545 40.545-87.742 72.369-140.275 94.586-54.338 22.986-112.115 34.639-171.713 34.639-59.601 0-117.379-11.653-171.715-34.639-52.533-22.218-99.723-54.039-140.275-94.589-40.545-40.538-72.364-87.737-94.583-140.27-22.988-54.343-34.639-112.115-34.639-171.713 0-59.601 11.651-117.374 34.634-171.715 22.225-52.537 54.046-99.728 94.589-140.273 40.553-40.547 87.742-72.375 140.275-94.586 54.343-22.986 112.115-34.636 171.715-34.636 59.598 0 117.37 11.651 171.713 34.636 52.533 22.213 99.723 54.039 140.275 94.583 40.545 40.553 72.367 87.739 94.586 140.27 22.986 54.348 34.639 112.121 34.639 171.722 0 59.598-11.654 117.37-34.64 171.713zM749.188 378.978c-9.597 0-18.618 3.733-25.426 10.543l-261.919 260.34-164.428-164.653c-6.791-6.791-15.814-10.527-25.413-10.527-9.597 0-18.612 3.735-25.391 10.527-14.009 14.002-14.009 36.798-0.044 50.769 19.331 19.143 38.675 38.277 57.985 57.453 31.71 31.475 63.614 62.761 95.277 94.283 5.942 5.907 11.862 11.826 17.87 17.658 13.483 13.090 25.054 33.082 46.364 32.429 14.87-0.454 26.158-10.765 35.459-21.331 10.662-12.11 21.049-24.035 32.475-35.485 21.988-22.034 44.097-43.954 66.085-65.984 25.941-25.993 51.846-52.034 77.806-78.002 21.828-21.83 43.68-43.643 65.482-65.501 10.549-10.58 21.030-21.241 31.659-31.744 0.166-0.166 0.347-0.325 0.515-0.494 6.914-6.919 10.841-15.844 11.044-25.132 0.204-9.23-3.348-17.978-10.004-24.634-6.78-6.785-15.802-10.516-25.393-10.516z"/>
      </symbol>
      <symbol id="icon-loading" viewBox="0 0 64 64">
        <path fill-rule="evenodd"
              d="M60 36h-8c-2.203 0-4-1.797-4-4 0-2.208 1.797-4 4-4h8c2.203 0 4 1.792 4 4 0 2.203-1.797 4-4 4zM48.973 20.686a4 4 0 0 1-5.66 0 3.995 3.995 0 0 1 0-5.655l5.66-5.653a3.99 3.99 0 0 1 5.65 0 4 4 0 0 1 0 5.655l-5.65 5.656zM32 64a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4c2.203 0 4 1.797 4 4v8c0 2.203-1.797 4-4 4zm0-48a4 4 0 0 1-4-4V4a4 4 0 1 1 8 0v8c0 2.208-1.797 4-4 4zM15.03 54.624a3.995 3.995 0 0 1-5.654 0 3.99 3.99 0 0 1 0-5.65l5.655-5.66a3.995 3.995 0 0 1 5.657 0 4.004 4.004 0 0 1 0 5.66l-5.655 5.65zm0-33.938L9.373 15.03a3.995 3.995 0 0 1 0-5.654 4 4 0 0 1 5.654 0l5.655 5.655a3.995 3.995 0 0 1 0 5.657 3.99 3.99 0 0 1-5.65 0zM16 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4 4 4 0 0 1 4-4h8a4 4 0 0 1 4 4zm32.973 11.314l5.65 5.66a3.99 3.99 0 0 1 0 5.65 3.992 3.992 0 0 1-5.65 0l-5.66-5.65a4 4 0 0 1 0-5.66 4 4 0 0 1 5.66 0z">
          <animateTransform attributeName="transform" begin="0s" dur="1.2s" type="rotate" from="0 32 32" to="360 32 32" repeatCount="indefinite"/>
        </path>
      </symbol>
      <symbol id="icon-pull" viewBox="0 0 1024 1024">
        <path
            d="M793.036 736.931l-248.058 248.058c-4.425 5.631-10.156 10.054-16.992 12.567-0.502 0.1-0.803 0.202-1.106 0.202-4.022 1.809-8.446 2.411-12.87 2.614-0.602 0-1.307 0.502-1.909 0.502-1.206 0-2.213-0.803-3.419-0.803-2.614-0.202-5.228-0.803-7.844-1.71-3.116-0.803-5.934-2.113-8.746-3.518-1.71-0.906-3.317-2.114-4.928-3.317-1.409-1.106-3.219-1.609-4.525-3.116l-251.575-251.475c-16.287-16.19-16.287-42.531 0-58.522 16.090-16.19 42.433-16.19 58.722 0l180.99 180.887v-403.406c0-23.127 18.803-42.131 41.929-42.131s41.929 18.905 41.929 42.131v402.098l179.783-179.581c15.987-16.191 42.433-16.19 58.621 0 16.090 15.987 16.090 42.331 0 58.522zM512.402 302.354c-23.127 0-41.929-18.803-41.929-41.929 0-23.026 18.703-41.828 41.929-41.828 23.227 0 41.929 18.803 41.929 41.828 0.1 23.227-18.703 41.929-41.929 41.929zM512.402 106.885c-23.127 0-41.929-18.703-41.929-41.929 0-23.026 18.703-41.828 41.929-41.828 23.227 0 41.929 18.803 41.929 41.828 0.1 23.227-18.703 41.929-41.929 41.929z"/>
      </symbol>
    </svg>
    <div class="scroll-box" ref="box" :style="diff ? {transform: `translateY(${diff}px)`} : ''">
      <div v-if="refreshable" class="refresh" :style="{height: `${topBlockHeight}px`,top: `-${topBlockHeight}px`}">
        <svg class="icon" :class="{'icon-arrow': state == 'trigger', 'icon-loading': state == 'loading' }">
          <use :xlink:href="icon"></use>
        </svg>
        {{refreshText}}
      </div>
      <div class="scroll-container">
        <slot></slot>
      </div>
      <div class="loader" ref="loader" v-if="onInfinite">
        <template v-if="loading === 0">{{endText}}</template>
        <p v-else-if="loading === 3" @click="(loading = 1) && scroll()">加载失败，点击重试</p>
        <template v-else>
          <svg>
            <use xlink:href="#icon-loading"></use>
          </svg>
          加载中...
        </template>
      </div>
    </div>
  </div>
</template>

<script>
function debounce (func, wait, immediate) {
  var timeout, args, context, timestamp, result

  var later = function () {
    var last = Date.now() - timestamp

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }
  return function () {
    context = this
    args = arguments
    timestamp = Date.now()
    var callnow = immediate && !timeout
    if (!timeout) timeout = setTimeout(later, wait)
    if (callnow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

export default {
  props: {
    onInfinite: Function,
    onRefresh: Function,
    endText: {
      type: String,
      default: '没有更多数据了'
    },
  },
  data () {
    return {
      loading: 1, // 0: ended, 1: loading, 2: stopping loading, 3:loading error
      refreshable: false,
      refreshText: '下拉刷新',
      triggerDistance: 70,
      topBlockHeight: 50,
      parentnode: false,
      startScrollTop: 0,
      startY: 0,
      beforeDiff: 0,
      diff: 0,
      distance: 0,
      state: ''
    }
  },
  mounted () {
    this.scroll()
    this.refreshable = !!this.onRefresh
    if (this.refreshable) {
      this.$refs.box.addEventListener('touchstart', this.touchstart)
      this.$refs.box.addEventListener('touchmove', this.touchmove)
      this.$refs.box.addEventListener('touchend', this.touchend)
    }
  },
  methods: {
    scroll: debounce(function () {
      if (!this.onInfinite || this.loading !== 1) return
      var scroller = this.$refs.scroller,
          loader   = this.$refs.loader
      // 内容高度 > 加载更多顶部，触发加载事件
      if (scroller.clientHeight > loader.offsetTop) {
        this.loading = 2
        this.onInfinite(this.finishInfinite)
        this.scroll()
      } else {
        if ((scroller.scrollTop + scroller.clientHeight - loader.clientHeight) > (loader.offsetTop - 50)) {
          this.loading = 2
          this.onInfinite(this.finishInfinite)
        }
      }
    }, 400),
    finishInfinite (hideSpinner) {
      let state = 1
      switch (hideSpinner) {
        case 'end':
          state = 0
          break
        case 'err':
          state = 3
          break
        default:
          state = 1
      }
      this.loading = state
    },
    scrollTo (y, duration = 200) {
      this.$refs.box.style.transition = `${duration}ms`
      this.diff = y
      setTimeout(() => {
        this.$refs.box.style.transition = ''
      }, duration)
    },
    findParent (node) {
      if (node.className.indexOf('no_scroll') > -1) {
        this.parentnode = true
      } else {
        this.parentnode = false
        if (node.parentNode.nodeName.toLowerCase() != 'body') {
          this.findParent(node.parentNode)
        }
      }
    },
    touchstart (event) {
      this.startY = event.touches[0].clientY
      this.beforeDiff = this.diff
      this.startScrollTop = this.$refs.scroller.scrollTop
      this.state = 'pull'
      this.refreshText = '下拉刷新'
      this.refreshable = false
    },
    touchmove (event) {
      this.findParent(event.target)
      if (this.parentnode) {
        return
      }
      this.currentY = event.touches[0].clientY
      this.distance = (this.currentY - this.startY) / 2 + this.beforeDiff
      if (this.startScrollTop < 2 && this.distance > 0) {
        this.refreshable = true
        event.preventDefault()
        event.stopPropagation()
        this.diff = this.distance
        if (this.distance > this.triggerDistance) {
          this.state = 'trigger'
          this.refreshText = '放手刷新'
        } else {
          this.state = 'pull'
          this.refreshText = '下拉刷新'
        }
      }
    },
    touchend () {
      if (this.refreshable) {
        if (this.diff < this.triggerDistance) {
          this.scrollTo(0)
        } else {
          this.state = 'loading'
          this.scrollTo(this.topBlockHeight)
          this.onRefresh((done) => {
            this.refreshText = '加载完成'
            this.state = 'finish'
            setTimeout(() => {
              this.scrollTo(0)
              this.$refs.scroller.scrollTop = 0
              this.finishInfinite(done)
              if (this.loading == 1) {
                this.scroll()
              }
            }, 400)
          })
          this.refreshText = '加载中...'
        }
      }
    }
  },
  computed: {
    icon () {
      switch (this.state) {
        case 'loading':
        case 'finish':
          return '#icon-' + this.state
      }
      // case 'trigger':
      // case 'pull':
      return '#icon-pull'
    }
  }
}
</script>

<style>
  .scroller {
    -webkit-overflow-scrolling: touch;
    position: absolute;
    overflow-y: auto;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  .scroller .scroll-box {
    width: 100%;
  }
  .refresh, .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 3.5rem;
    color: #666;
  }
  .refresh {
    position: absolute;
    width: 100%;
  }
  .scroller svg {
    will-change: transform;
    margin-right: .5rem;
    height: 1rem;
    width: 1rem;
    fill: #666;
  }
  .refresh svg.icon-arrow {
    transform: rotate(180deg);
    transition: .2s;
  }
</style>
