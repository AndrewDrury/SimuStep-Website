<template>
  <div class="blog section margin-wrap" id="blog" name="blog">
    <b-container fluid class="wrap-mobile">
      <b-row>
        <b-col>
          <b-row class="my-5">
            <b-col style="text-align: center">
              <h3>Blog</h3>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="pt-4 pb-5 mb-4">
        <b-col align="center">
          <a href="/#/blog/7">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img class="model" src="@/assets/pics/housingOpen.jpg" />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">SimuStep Assemble!</h6>
                <p class="description">
                  After we had the housing 3D printed and successfully
                  implemented the stimulation components, we gathered together
                  to assemble...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> March 9th, 2022
                </p>
              </b-col>
            </b-row>
          </a>
          <hr />
          <a href="/#/blog/6">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img class="model" src="@/assets/pics/3Dmodel.jpg" />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">Mechanical Design: A fresh Look</h6>
                <p class="description">
                  The integration of the new stimulation circuit requires a
                  change in the size of the housing. The outer dimensions of the
                  housing...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> March 2nd, 2022
                </p>
              </b-col>
            </b-row>
          </a>
          <hr />
          <a href="/#/blog/5">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img class="model" src="@/assets/pics/pcb.jpg" />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">
                  Electrical Design Pt 2: Reverse Engineering
                </h6>
                <p class="description">
                  Over the course of the last few weeks, much progress has been
                  made on the electrical design! By examining the PCB...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> February 18th, 2022
                </p>
              </b-col>
            </b-row>
          </a>
          <hr />
          <a href="/#/blog/4">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img class="model" src="@/assets/pics/simuStepOnTable.jpg" />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">Software Design Pt 2: A New Angle</h6>
                <p class="description">
                  When the device is in walking mode, the electrodes need to be
                  activated while the leg is moving from its pre-swing phase...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> February 10th, 2022
                </p>
              </b-col>
            </b-row>
          </a>
          <hr />
          <a href="/#/blog/3">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img class="model" src="@/assets/pics/SoftwareFlowchart.jpeg" />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">Software Design Pt 1: Off to the Races</h6>
                <p class="description">
                  When the device is turned on, the power button is illuminated
                  to indicate the power state. Once powered on...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> January 29th, 2022
                </p>
              </b-col>
            </b-row>
          </a>
          <hr />
          <a href="/#/blog/2">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img class="model" src="@/assets/pics/spaghetti.png" />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">Electrical Design Pt 1: Spaghetti</h6>
                <p class="description">
                  The electrical assembly for the prototype will be done in two
                  sections: first, the interface devices, sensors, and
                  controller...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> January 20th, 2022
                </p>
              </b-col>
            </b-row>
          </a>
          <hr />
          <a href="/#/blog/1">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img class="model" src="@/assets/pics/logoAnimation.gif" />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">WELCOME!</h6>
                <p class="description">
                  Welcome to our blog! This will be the first in a series of
                  posts documenting the progress of SimuStep, our fourth...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> January 15th, 2022
                </p>
              </b-col>
            </b-row>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.blogEntry {
  .blogPic {
    text-align: right;
    @media (max-width: $screen-lg) {
      text-align: center;
    }
    img {
      max-height: 300px;
      max-width: 100%;
    }
  }
  .blogDescription {
    text-align: left;
    margin-block: auto;
    .headline {
      font-size: 36px;
      margin-bottom: 0px;
      text-decoration: none;
      font-family: "Manrope", Arial, Helvetica, sans-serif;
      text-transform: uppercase;
    }
    .description {
      margin-bottom: 0px;
      padding-bottom: 30px;
      @media (max-width: $screen-lg) {
        padding-bottom: 15px;
      }
      text-decoration: none;
    }
    .date {
      margin-bottom: 0px;
      padding-block: 0px;
      text-decoration: none;
    }
  }
}
hr {
  margin-block: 60px !important;
  width: 70%;
  border-top: 1px solid rgba(0, 0, 0, 0.3) !important;
}

.blogEntry:hover {
  p {
    text-decoration: none !important;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "blog",
});
</script>
