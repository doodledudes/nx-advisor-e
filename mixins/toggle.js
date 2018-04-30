export const Toggle = {
  data() {
    return {
      isVisible: false,
      isMobile: false,
      windowWidth: 0,
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.toggleMobileMenuOnResize);

      //Init
      this.getWindowWidth()
      this.toggleMobileMenuOnResize()
    })
  },
  methods: {
    toggleMobileMenuOnResize: function() {
      if (this.windowWidth <= 1024) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
}
