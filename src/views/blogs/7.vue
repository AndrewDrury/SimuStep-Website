<template>
  <b-row class="my-5">
    <b-col style="text-align: center">
      <a href="/#/blog" style="text-align: left">
        <h6 style="font-weight: 300">
          <i
            class="fa fa-chevron-left"
            style="font-size: 16px; font-weight: 300"
          ></i>
          Back
        </h6></a
      >
      <img class="topPic" src="@/assets/pics/housingOpen.jpg" />
      <h1 class="title">SimuStep Assemble!</h1>
      <b-row class="details">
        <b-col style="text-align: left; min-width: 200px">
          <p class="date"><i class="fa fa-calendar"></i> March 9th, 2022</p>
        </b-col>
        <b-col style="text-align: right">
          <p class="time"><i class="fa fa-clock-o"></i> 1 min</p>
        </b-col>
      </b-row>
      <p>
        After we had the housing 3D printed and successfully implemented the
        stimulation components, we gathered together to assemble our device. As
        seen in the picture shown below, buttons, potentiometers, LEDs and
        electrodes have been panel-mounted and fit perfectly in the housing. The
        inner housing holds the IMU, microcontroller and other electrical
        components.
      </p>
      <b-row>
        <b-col col="6" style="text-align: right">
          <img class="perf1" src="@/assets/pics/housingOpen.jpg" />
        </b-col>
        <b-col col="6" style="text-align: left">
          <img class="perf2" src="@/assets/pics/housingOpenSide.jpg" />
        </b-col>
      </b-row>
      <p>
        Since we don't have a sewing machine, we followed a hand sewing tutorial
        online to attach our size adjustable band to the device.
      </p>
      <img class="blogPic" src="@/assets/pics/sewing.jpg" />
      <p>
        Tada!! 🎉 our first generation SimuStep is powered on and ready for the
        symposium!
      </p>
      <img class="blogPic" src="@/assets/pics/assembled.jpg" />
    </b-col>
  </b-row>
</template>

<style lang="scss">
@import "../../assets/variables.scss";
.perf1,
.perf2 {
  max-width: 100%;
  max-height: 300px;
}
.perf1 {
  text-align: right;
}
</style>
