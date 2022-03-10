<template>
  <div class="blogPost section margin-wrap" id="blogPost" name="blogPost">
    <b-container fluid class="wrap-mobile">
      <Blog1 v-if="this.$route.params.id == 1" />
      <Blog2 v-if="this.$route.params.id == 2" />
      <Blog3 v-if="this.$route.params.id == 3" />
      <Blog4 v-if="this.$route.params.id == 4" />
      <Blog5 v-if="this.$route.params.id == 5" />
      <Blog6 v-if="this.$route.params.id == 6" />
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
#blogPost {
  margin-top: 45px;
  padding-top: 20px;
  padding-inline: 16vw;
  @media (max-width: $screen-lg) {
    margin-top: 20px !important;
    padding-inline: 30px;
  }
  .fa-chevron-left {
    -webkit-text-stroke: 1px white;
  }
  .topPic {
    max-width: 48vw;
    max-height: 60vh;
  }
  .blogPic {
    margin-block: 30px;
    max-width: 88vw;
    max-height: 40vh;
  }
  .title {
    font-size: 75px;
    margin-top: 30px;
    margin-bottom: 15px;
    @media (max-width: $screen-lg) {
      font-size: 30px;
    }
  }
  .details {
    margin-bottom: 15px;
  }
  p {
    text-align: justify;
    padding-bottom: 15px !important;
    padding-top: 15px !important;
    margin-bottom: 0px !important;
  }
  .time {
    text-align: right !important;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Blog1 from "./blogs/1.vue";
import Blog2 from "./blogs/2.vue";
import Blog3 from "./blogs/3.vue";
import Blog4 from "./blogs/4.vue";
import Blog5 from "./blogs/5.vue";
import Blog6 from "./blogs/6.vue";

export default Vue.extend({
  name: "blogPost",
  components: {
    Blog1,
    Blog2,
    Blog3,
    Blog4,
    Blog5,
    Blog6,
  },
});
</script>
