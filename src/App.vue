<template>
  <div id="app" class="app">
    <div class="mobile1 navbar-background"></div>

    <!-- Navbar -->
    <b-navbar toggleable="lg" class="fixed-top navbar" id="navbar">
      <div class="logo-mobile mobile">
        <b-navbar-brand class="nav-link" :to="{ name: 'home', hash: '' }">
          <img src="@/assets/pics/logo.png" />
        </b-navbar-brand>
      </div>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="mr-auto" style="margin-left: 0">
          <b-nav-item
            class="tab desktop-router"
            :to="{ name: 'home', hash: '' }"
            ><img
              src="@/assets/pics/logo.png"
              style="width: 45px; float: left; margin-left: 5px"
          /></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item class="tab" :to="{ name: 'why', hash: '' }"
            >Why&nbsp;SimuStep?</b-nav-item
          >
          <b-nav-item class="tab" :to="{ name: 'blog', hash: '' }"
            >Blog</b-nav-item
          >
          <b-nav-item class="tab" :to="{ name: 'aboutUs', hash: '' }"
            >About Us</b-nav-item
          >
          <b-nav-item class="tab" :to="{ name: 'contact', hash: '' }"
            >Contact</b-nav-item
          >
        </b-navbar-nav>
        <div class="desktop">
          <b-navbar-nav class="ml-auto" style="margin-right: 0">
            <b-nav-item class="desktop-router hidden"
              ><div style="width: 45px"></div>
            </b-nav-item>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>

    <div id="main">
      <!-- Dynamic Content -->
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <!-- <div>
      <Home />
      <Why />
      <Blog />
    </div> -->

    <!-- Footer -->
    <!-- <section id="footer">
      <div class="container hidden">
        <b-row style="margin-bottom: 10px">
          <b-col class="col-xs-12 col-sm-12 col-md-12">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <h6>Copyright &copy; 2022 SimuStep</h6>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/AndrewDrury/SimuStep" target="_blank">
                  <i class="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </section> -->
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import "@/assets/variables.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  overflow-x: hidden;
}

#progress-container-el {
  /* background */
  // display: none;
  // background-color: transparent !important;
  // top: 0px !important;
  display: none;
}
#progress-el {
  /* progress bar */
  background-color: $primary !important;
}

.navbar-background {
  width: 100%;
  top: 0px;
  position: fixed;
  background-color: white;
  left: 0px;
  height: 65.653px;
  z-index: 1;
}

.nav-item {
  min-width: 230px;
  margin-block: float;
  a {
    font-weight: 600;
    margin-right: 0;
    min-width: 230px;
  }
  @media (max-width: 1350px) {
    min-width: 180px;
    a {
      min-width: 180px;
    }
  }
}

.logo-mobile {
  text-align: left;
  // position: absolute;

  img {
    width: 100px;
    padding-left: 0px;
    padding-bottom: 0px;
  }
}

.btn {
  outline: none !important;
}
.btn.btn-primary {
  background-color: $primary;
  border-color: $primary;
  outline: none;
  &:hover {
    background-color: darken($primary, 10%);
    border-color: darken($primary, 10%);
  }
  &:active,
  &:focus {
    background-color: lighten($primary, 5%);
    border-color: lighten($primary, 5%);
  }
}
.btn.btn-default {
  &:hover {
    background-color: darken($primary, 10%);
    border-color: darken($primary, 10%);
    color: #fff;
  }
  &:active,
  &:focus {
    background-color: lighten($primary, 5%);
    border-color: lighten($primary, 5%);
    color: #fff;
  }
}

#bottom-links {
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  width: 9.86%;
  text-align: center;
  margin-bottom: -5px;

  .fa-github {
    font-size: 21px !important;
  }

  ul {
    margin-bottom: 10px;
  }
  ul.social li a i {
    margin-top: 8px;
    font-size: 18px;
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;
    color: white;
  }
  ul.social li a img {
    margin-top: 8px;
    font-size: 18px;
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;
    color: white;
  }

  ul.social li:hover a i {
    font-size: 24px !important;
    margin-top: 5px;
    color: $primary;
  }
  ul.social li:hover a img {
    font-size: 24px !important;
    margin-top: 5px;
    color: $primary;
  }

  .vertical-line {
    width: 1px;
    height: 50px !important;
    background-color: $primary;
    height: 100%;
    display: inline-block;
  }
}

// Navbar
#navbar {
  background-color: white;

  @media (min-width: $screen-lg) {
    background-color: white;
    height: 80px;
  }
  @media (max-width: $screen-lg) {
    padding-right: 15px;
    padding-left: 15px;
  }

  /* change the link color */
  .navbar-nav .nav-link {
    color: $grey;
    width: 140px;
  }
  /* change the color of active or hovered links */
  .nav-link:hover {
    color: $primary;
    transform: translateY(-2px);
    -webkit-transform: translateY(-2px);

    img {
      transform: translateY(-2px);
      -webkit-transform: translateY(-2px);
    }
  }
  .nav-link:active {
    color: $primary;
  }

  .nav-link {
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;

    img {
      -webkit-transition: 0.5s all ease;
      -moz-transition: 0.5s all ease;
      transition: 0.5s all ease;
    }

    @media (max-width: $screen-sm) {
      margin: 0 auto;
      padding-left: 0px;
    }
  }

  .nav-item.tab {
    @media (max-width: $screen-sm) {
      float: none;
      margin: 0 auto;
      display: block;
      text-align: center;
    }
  }

  .navbar-nav {
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .navbar-nav > li {
    display: inline-block;
    float: none;
  }

  .navbar-collapse {
    text-align: center;
  }
}

.navbar-dark .navbar-toggler {
  color: white !important;
  border-color: white !important;
}

// Contact Footer
section {
  padding: 30px 0;
}
#footer {
  background: white;
  z-index: 99;
  position: absolute;
  width: 100%;
  padding-bottom: 0px;
}
#footer ul.social li a i {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: black;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
  color: $primary;
}
#footer ul.social li a img {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: black;
}
#footer ul.social li:hover a img {
  font-size: 30px;
  margin-top: -10px;
  color: $primary;
}
#footer h3 {
  font-size: 24px;
  font-weight: 700;
  color: black;
}
#footer .endtag {
  margin-bottom: 0px;
  color: black;
}

.desktop-router a {
  display: inline;
  @media (max-width: $screen-sm) {
    display: none;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
// import Blog from "./views/Blog.vue";
// import Why from "./views/Why.vue";
// import Home from "./views/Home.vue";

export default Vue.extend({
  name: "home",
  components: {
    // Blog,
    // Home,
    // Why,
  },
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements: function () {
      var elements;
      var windowHeight;

      function init() {
        elements = document.querySelectorAll(".hidden");
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
      }

      function addEventHandlers() {
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", init);
      }

      function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var positionFromTop = elements[i].getBoundingClientRect().top;

          if (positionFromTop - windowHeight <= 0) {
            element.classList.add("fade-in-element");
            element.classList.remove("hidden");
          }
          if (positionFromTop - windowHeight > 1) {
            //UNCOMMENT to reanimate
            // element.classList.add('hidden');
            // element.classList.remove('fade-in-element');
          }
        }
      }

      window.addEventListener("scroll", checkPosition);
      window.addEventListener("resize", init);

      init();
      checkPosition();
    },
  },
});
</script>
