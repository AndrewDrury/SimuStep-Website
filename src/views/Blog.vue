<template>
  <div class="blog section margin-wrap" id="blog" name="blog">
    <b-container fluid class="wrap-mobile">
      <b-row>
        <b-col>
          <b-row class="mt-5">
            <b-col style="text-align: center">
              <h3>Blog</h3>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="pt-4">
        <b-col class="desktop" align="center">
          <p>The first blog post is coming soon!</p>
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
