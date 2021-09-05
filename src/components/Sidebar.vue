<template>
    <div id="side_bar">
      <div class="top_bk">
        <router-link to="/">
          <span class="icon">
            <i class="fa fa-list-ul"></i>
          </span>
          <span>TODO LIST</span>
        </router-link>
        <router-link to="/weather">
          <span class="icon">
            <i class="fas fa-cloud"></i>
          </span>
          <span>WEATHER</span>
        </router-link>
      </div>
      <div class="bt_bk">
        <span class="today">Today</span>
        <div class="date_container">
          <span>{{day}}</span>
          <span>{{month}}</span>
          <span>{{year}}</span>
        </div>
        <div class="theme_checker">
          <a :class="{ active : theme === 'theme1' }" href="#" @click.prevent="changeTheme('theme1')">
            <span>
              <i class="fas fa-cloud-moon"></i>
            </span>
          </a>
          <a :class="{ active : theme === 'theme2' }" href="#" @click.prevent="changeTheme('theme2')">
            <span>
            <i class="fas fa-cloud-sun"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      theme: 'theme1'
    }
  },
  methods: {
    changeTheme (theme) {
      this.theme = theme
      window.document.documentElement.setAttribute('data-theme', theme)
    }
  },
  computed: {
    day () {
      return new Date(this.date).getDate()
    },
    month () {
      const month = new Array(12)
      month[0] = 'January'
      month[1] = 'February'
      month[2] = 'March'
      month[3] = 'April'
      month[4] = 'May'
      month[5] = 'June'
      month[6] = 'July'
      month[7] = 'August'
      month[8] = 'September'
      month[9] = 'October'
      month[10] = 'November'
      month[11] = 'December'
      return month[new Date(this.date).getMonth()]
    },
    year () {
      return new Date(this.date).getFullYear()
    },
    themeClass () {
      return `theme-${this.theme}`
    }
  },
  mounted () {
    this.date = new Date().getTime()
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/themeMixin.scss";
#side_bar {
  width: 40%;
  & > div {
    padding: 30px;
  }
  .top_bk {
    transition: $transition-all;
    display: flex;
    flex-direction: column;
    height: 50%;
    @include sec_bg_color($background-color-theme1-2ndbg);
    a {
      margin-bottom: 15px;
      transition: all 0.3s;
      text-decoration: none;
      font-size: 1.4rem;
      @include font_color($theme1-font-color);
      &:hover {
      @include font_hover_color($theme1-font-hover-color);
    }
    }
    .icon {
      display: inline-block;
      margin-right: 10px;
      text-align: center;
      min-width: 30px;
    }
  }
  .bt_bk {
    height: 50%;
    transition: $transition-all;
    @include thi_bg_color($background-color-theme1-3rdbg);
    .today {
      font-size: 3.2rem;
      transition: $transition-all;
      @include font_color($theme1-font-color);
    }
    .date_container {
      display: flex;
      margin-top: 5px;
      padding-bottom: 5px;
      transition: $transition-all;
      @include block_line_color($theme1-block-line);
      span {
        transition: $transition-all;
        font-size: 1.2rem;
        margin-left: 10px;
        @include font_color($theme1-font-color);
      }
    }
    .theme_checker {
      margin-top:30px;
      display: flex;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50px;
        min-width: 50px;
        padding: 10px;
        border-radius: 10px;
        margin-right: 10px;
        border:1px solid #ffffff;
        transition: $transition-all;
        @include font_color($theme1-font-color);
        &:hover {
          background:#ffffff;
          @include swicher_hover_font_color($theme1-swicher-hover-color);
        }
        &.active {
        background:#ffffff;
        @include swicher_hover_font_color($theme1-swicher-hover-color);
      }
        i {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
