<template>
  <div class="home top-section margin-wrap" id="home" name="home">
    <b-container fluid class="wrap-mobile">
      <b-row class="top-space">
        <b-col lg="5">
          <div
            class="headline"
            style="
              bottom: 0;
              position: absolute;
              text-align: right;
              width: 100%;
            "
          >
            <h1>SimuStep</h1>
            <h6>A step in the right direction.</h6>
          </div>
        </b-col>
        <b-col lg="7" class="modelPic">
          <img
            class="model"
            src="@/assets/pics/3Dmodel.png"
            style="max-width: 80vw"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";

a:hover {
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

.home {
  @media (min-width: $screen-md) {
    min-height: 65vh;
  }
  .top-space {
    margin-top: 200px;
    @media (max-width: $screen-sm) {
      margin-top: 300px;
    }
    margin-bottom: 30px;
  }
  .intro {
    margin-top: 20vh;
    width: 100%;
    top: 0px;
    position: absolute;
    text-align: center;
    pointer-events: none;
    @media (max-width: $screen-md) {
      padding-right: 0px;
    }
  }
  .scroll-down {
    color: #fff;
    margin-top: 15px;
    pointer-events: auto;
  }

  h5 {
    div {
      font-size: 24.3px !important;
      pointer-events: auto;

      span {
        font-size: 24.3px !important;
      }

      a {
        font-size: 24.3px !important;
        color: white;
      }
      a:hover {
        text-decoration: underline $primary;
      }
    }
  }

  .tagline {
    margin-top: 85px;
    margin-bottom: 30px;
    @media (max-width: $screen-md) {
      margin-top: 60px;
      text-align: center;
      margin-bottom: 0px;
    }
  }

  @media (min-width: $screen-md) {
    .modelPic {
      text-align: left;
    }
  }

  @media (max-width: $screen-md) {
    .headline h1,
    h6,
    .modelPic {
      text-align: center;
    }
    h6 {
      margin-bottom: 60px;
    }
    h5 {
      text-align: left;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 25px !important;
    }
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>
