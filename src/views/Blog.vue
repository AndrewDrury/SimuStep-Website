<template>
  <div class="blog section margin-wrap" id="blog" name="blog">
    <b-container fluid class="wrap-mobile">
      <b-row>
        <b-col>
          <b-row class="hidden">
            <b-col>
              <h2>Blog</h2>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="whyRow">
        <b-col class="desktop content-left" lg="6" align="left">
          <div class="description">
            <div class="hidden">Hi!</div>
            <br />
            <div class="hidden">blogggg</div>
          </div>
        </b-col>

        <b-col class="pic" lg="6" align="right">
          <img src="" />
        </b-col>
        <b-col class="mobile" align="left">
          <div class="description">
            <div class="hidden">Hi!</div>
            <br />
            <div class="hidden">bloggggg</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "blog",
});
</script>
