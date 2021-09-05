<template>
  <div class="weather">
    <div class="cloud_container">
        <svg viewBox="0 0 526.899 128" transform="scale(-0.3, 0.3)" style="margin-top: 30px; margin-left: -180px;"><defs><linearGradient id="linear-gradient" x1="-0.907" y1="1" x2="0.789" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#linear-gradient)" data-name="Subtraction 1" class="cls-1" d="M556.957,128H30.058A75.633,75.633,0,0,1,43.976,87.067,76.193,76.193,0,0,1,77.071,60.7a75.952,75.952,0,0,1,69.259,5.873,132.72,132.72,0,0,1,47.452-48.2A131.392,131.392,0,0,1,261,0a132.888,132.888,0,0,1,27.849,2.943,131.338,131.338,0,0,1,48.983,21.709A132.984,132.984,0,0,1,357.743,42.2a103.853,103.853,0,0,1,48.011,1.313A102.856,102.856,0,0,1,450.48,68.841a103.525,103.525,0,0,1,16.146,20A162.322,162.322,0,0,1,556.955,128l0,0h0Z" transform="translate(-30.058 0)"></path></svg>
        <svg viewBox="0 0 526.899 128" transform="scale(0.4, 0.4)" style="margin-top: 0px; margin-left: 180px;"><defs><linearGradient id="linear-gradient" x1="-0.907" y1="1" x2="0.789" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#linear-gradient)" data-name="Subtraction 1" class="cls-1" d="M556.957,128H30.058A75.633,75.633,0,0,1,43.976,87.067,76.193,76.193,0,0,1,77.071,60.7a75.952,75.952,0,0,1,69.259,5.873,132.72,132.72,0,0,1,47.452-48.2A131.392,131.392,0,0,1,261,0a132.888,132.888,0,0,1,27.849,2.943,131.338,131.338,0,0,1,48.983,21.709A132.984,132.984,0,0,1,357.743,42.2a103.853,103.853,0,0,1,48.011,1.313A102.856,102.856,0,0,1,450.48,68.841a103.525,103.525,0,0,1,16.146,20A162.322,162.322,0,0,1,556.955,128l0,0h0Z" transform="translate(-30.058 0)"></path></svg>
    </div>
    <h3 class="city">
      台北
    </h3>
    <span class="now_weather">晴時有雲</span>
    <div class="now_temperature">
      27
    </div>
    <ul class="week_weather">
      <li v-for="(item,index) in weather" :key="index">
        <span class="icon" v-if="item.weather === 1" style="color: #ffc801">
          <i class="fas fa-sun"></i>
        </span>
        <span class="icon" v-if="item.weather === 2" style="color: #9D9D9D">
         <i class="fas fa-cloud"></i>
        </span>
        <span class="icon" v-if="item.weather === 3" style="color: #22aed1">
         <i class="fas fa-cloud-showers-heavy"></i>
        </span>
        <div class="temperature">
          <span class="height">{{item.tempHeight}}</span>
          <span class="line">-</span>
          <span class="low">{{item.tempLow}}</span>
        </div>
        <div class="rain">
          <span class="icon"><i class="fas fa-tint"></i></span>
          <span>{{item.rain}} %</span>
        </div>
        <div class="date">
          <span class="day">{{item.data}}</span>
        </div>
        <div class="week">
          <span class="day">{{item.week}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Weather',
  data () {
    return {
      weather: []
    }
  },
  mounted () {
    this.$http.get('https://mocki.io/v1/e2a84acb-1a3b-408c-aae3-5e7d443a85a7')
      .then(res => {
        this.weather = res.data
      })
  }
}
</script>
<style scoped lang="scss">
.weather {
  position: relative;
  background: linear-gradient(rgb(180, 225, 248) 0%, rgb(120, 200, 231) 100%);
  height: 100%;
  padding: 30px;
  .cloud_container {
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
  }
  .city {
    margin: 0;
    font-size: 3rem;
    color:#ffffff;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .now_weather {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    text-align: center;
    color:#ffffff;
  }
  .now_temperature {
    margin: 10px;
    font-size: 6rem;
    text-align: center;
    color:#ffffff;
  }
  .now_temperature::after {
    content: "°";
  }
  .week_weather {
    display: flex;
    margin: 80px 0 0 0;
    padding: 30px 0 0 0;
    list-style: none;
    border-top:3px solid #ffffff;
    li {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        font-size: 2.5rem;
        color:#ffffff;
        margin-bottom: 5px;
      }
      .temperature {
        margin: 10px 0;
        span {
          font-size: 1.2rem;
          color:#ffffff;
          margin: 0 3px;
        }
        .height::after , .low::after {
          content: "°";
        }
      }
      .rain {
        span {
          color:#000000;
        }
        .icon {
          color:#789ac7;
          font-size: 1rem;
          margin-right: 5px;
        }
      }
      .week ,.date {
        margin-top: 10px;
        font-size: 1.2rem;
        color:#ffffff;
      }
    }
  }
}
</style>
