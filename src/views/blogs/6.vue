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
      <img class="topPic" src="@/assets/pics/3Dmodel.jpg" />
      <h1 class="title">Mechanical Design: A Fresh Look</h1>
      <b-row class="details">
        <b-col style="text-align: left; min-width: 200px">
          <p class="date"><i class="fa fa-calendar"></i> March 2nd, 2022</p>
        </b-col>
        <b-col style="text-align: right">
          <p class="time"><i class="fa fa-clock-o"></i> 2 min</p>
        </b-col>
      </b-row>
      <p>
        The integration of the new stimulation circuit requires a change in the
        size of the housing. The outer dimensions of the housing were increased
        from 110mm by 85mm by 25mm to 133mm by 113mm by 30mm.
      </p>
      <p>
        The hole sizes of all IO devices were adjusted based on the physical
        measurements taken of the components in our prototype. The cubic edges
        of the model have also been rounded to acheive a more aesthetically
        pleasing form. The profile of the housing to the leg was rounded for a
        better fit, as can be seen in the pictures below.
      </p>
      <b-row>
        <b-col col="6" style="text-align: right">
          <img class="perf1" src="@/assets/pics/oldProfile.png" />
        </b-col>
        <b-col col="6" style="text-align: left">
          <img class="perf2" src="@/assets/pics/newProfile.png" />
        </b-col>
      </b-row>
      <p>
        Furthermore, the slot created for the EMG sensor was removed. The EMG
        sensor signal was originally included in the design to measure muscle
        contraction. However the signal read is disrupted by the electrode
        pulses, contaminating any useful feedback. As the sensor provides a no
        meaningful information, it was removed from the design changing the
        system from closed loop to open loop.
      </p>
      <img class="blogPic" src="@/assets/pics/newHousing.png" />
      <p>
        The model was printed at the E5 3D print centre using ABS resin with a
        30% sparse fill. The next step for the project is mounting our
        electrical subsystem into the 3D printed housing.
      </p>
      <img class="blogPic" src="@/assets/pics/3Dprint.jpg" />
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
