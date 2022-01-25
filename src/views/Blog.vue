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
          <!-- <a href="/#/blog/2">
            <b-row class="blogEntry">
              <b-col class="blogPic" lg="4">
                <img
                  class="model"
                  src="@/assets/pics/3Dmodel.png"
                />
              </b-col>
              <b-col class="blogDescription" lg="8">
                <h6 class="headline">SBlog Post 2</h6>
                <p class="description">
                  Heew nwnf jkwejnf kwenfjk wejn kwn wekf nwek fnew...
                </p>
                <p class="date">
                  <i class="fa fa-calendar"></i> January --, 2022
                </p>
              </b-col>
            </b-row>
          </a>
          <hr /> -->
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
                  <i class="fa fa-calendar"></i> January 24th, 2022
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
