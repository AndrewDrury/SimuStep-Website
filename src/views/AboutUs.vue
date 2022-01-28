<template>
  <div class="aboutUs section margin-wrap" id="aboutUs" name="aboutUs">
    <b-container fluid class="wrap-mobile">
      <b-row>
        <b-col>
          <b-row class="mt-5 mb-5">
            <b-col style="text-align: center">
              <h3>About Us</h3>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="pb-4 mb-4">
        <b-col lg="4">
          <img class="headshots" style="width: 100%" src="@/assets/pics/SamHeadshot.png" />
        </b-col>
        <b-col style="align-items: center; display: flex" lg="8">
          <div>
            <a
              href="https://www.linkedin.com/in/samantha-stephenson/"
              target="_blank"
              ><h5 class="mb-1">
                Sam Stephenson <i class="fa fa-linkedin-square"></i></h5
            ></a>
            <h6>Electrical Engineer</h6>
            <p class="mb-0 pb-1">
              Hi! I'm a 4B mechatronics engineering student at the University of
              Waterloo. My primary role for our capstone project, SimuStep, is
              to develop the electrical infrastructure to integrate our sensors
              and provide electrical muscle stimulation. This includes sensor
              selection, electrical prototyping, assembly, and testing.
            </p>
            <p class="pb-0">
              Outside of school, I love to stay active by running, rock
              climbing, and boxing.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="pb-4 mb-4">
        <b-col
          class="desktop content-left"
          lg="8"
          align="left"
          style="align-items: center; display: flex"
        >
          <div>
            <a href="https://www.linkedin.com/in/andrew-drury/" target="_blank"
              ><h5 class="mb-1">
                Andrew Drury <i class="fa fa-linkedin-square"></i></h5
            ></a>
            <h6>Software Engineer</h6>
            <p class="mb-0 pb-1">
              I am leading the software development for SimuStep. This role
              entails entails writing code to control the device. Additionally,
              I am leading the design and development of
              <a style="font-family: Prata" href="https://simustep.com"
                >simustep.com</a
              >. This website is used to showoff SimuStep and provide updates on
              the progress of the project.
            </p>
            <p class="pb-0 mb-0">
              I love photography, creating music, weightlifting, boxing, and
              being in nature.
            </p>
          </div>
        </b-col>
        <b-col lg="4">
          <img class="headshots" style="width: 100%" src="@/assets/pics/AndrewHeadshot.jpg" />
        </b-col>
        <b-col class="mobile" align="left">
          <div>
            <a
              align="center"
              href="https://www.linkedin.com/in/andrew-drury/"
              target="_blank"
              ><h5 class="mb-1">
                Andrew Drury <i class="fa fa-linkedin-square"></i></h5
            ></a>
            <h6 align="center">Software Engineer</h6>
            <p class="mb-0 pb-1">
              I am leading the software development for SimuStep. As such, I am
              responsible for writing software to control the device.
              Additionally, I am leading the design and development of
              <a href="https://simustep.com">simustep.com</a>. This website is
              used to provide updates on the progress of the project.
            </p>
            <p class="pb-0">
              I love photography, creating music, weightlifting, boxing, and
              being in nature.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="pb-4 mb-4">
        <b-col lg="4">
          <img class="headshots" style="width: 100%" src="@/assets/pics/DomHeadshot.jpg" />
        </b-col>
        <b-col style="align-items: center; display: flex" lg="8">
          <div>
            <a href="https://www.linkedin.com/in/dominic-tung/" target="_blank"
              ><h5 class="mb-1">
                Dominic Tung <i class="fa fa-linkedin-square"></i></h5
            ></a>
            <h6>Mechanical Engineer</h6>
            <p class="mb-0 pb-1">
              I am primarily responsible for the mechanical aspects of SimuStep.
              Apart from the design and development of the housing unit, my work
              also involves researching current products to ensure SimuStep
              meets expectations for size, comfortability, aesthetics, and ease
              of use. In conjunction, I work with the electrical engineer to
              identify and properly implement the electrical components within
              the design.
            </p>
            <p class="pb-0 mb-0">
              In my free time, I enjoy playing table tennis, aquascaping, and
              discovering new things.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="pb-4 mb-4">
        <b-col
          class="desktop content-left"
          lg="8"
          align="left"
          style="align-items: center; display: flex"
        >
          <div>
            <a href="https://www.linkedin.com/in/tinayuanli/" target="_blank"
              ><h5 class="mb-1">
                Yuan Li <i class="fa fa-linkedin-square"></i></h5
            ></a>
            <h6>Software Engineer</h6>
            <p class="mb-0 pb-1">
              I am working on developing the software to control the electrical
              stimulation on the device.
            </p>
            <p class="pb-0">
              In my spare time, I enjoy watching shows, traveling and listening
              to music.
            </p>
          </div>
        </b-col>
        <b-col lg="4">
          <img class="headshots" style="width: 100%" src="@/assets/pics/TinaHeadshot.png" />
        </b-col>
        <b-col class="mobile" align="left">
          <div>
            <a
              align="center"
              href="https://www.linkedin.com/in/tinayuanli/"
              target="_blank"
              ><h5 class="mb-1">
                Yuan Li <i class="fa fa-linkedin-square"></i></h5
            ></a>
            <h6 align="center">Software Engineer</h6>
            <p class="mb-0 pb-1">
              I am working on developing the software to control the electrical
              stimulation on the device.
            </p>
            <p class="pb-0">
              In my spare time, I enjoy watching shows, traveling and listening
              to music.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";

@media (max-width: $screen-lg) {
  .headshots {
    padding-inline: 60px;
    padding-bottom: 30px;
  }
  p {
    text-align: justify !important;
  }
}
</style>
