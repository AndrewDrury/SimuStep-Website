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
      <img class="topPic" src="@/assets/pics/simuStepOnTable.jpg" />
      <h1 class="title">Software Design Pt 2: A New Angle</h1>
      <b-row class="details">
        <b-col style="text-align: left; min-width: 200px">
          <p class="date"><i class="fa fa-calendar"></i> February 10th, 2022</p>
        </b-col>
        <b-col style="text-align: right">
          <p class="time"><i class="fa fa-clock-o"></i> 2 min</p>
        </b-col>
      </b-row>
      <p>
        When the device is in walking mode, the electrodes need to be activated
        while the leg is moving from its pre-swing phase to the end of its
        terminal phase. The IMU is used to obtain the current angle of the
        anterior tibialis muscle relative to the vertical plane. The sensor
        returns angular and linear acceleration measures in the x, y, and z
        plane. The IMU data in the vertical and horizontal planes are combined
        to determine the current angle of the leg. The angle computed was
        validated against a digital inclinometer and found to be accurate within
        2 degrees. The direction the body is moving determined from the IMU's
        acceleration output.
      </p>
      <img class="blogPic" src="@/assets/pics/angles.png" />
      <p>
        When the device is moving forward and the angle read is between
        approximately -5 and 45 degrees, the electrodes should be activated. To
        replicate electrode activation, blue and yellow LEDs are illuminated
        until the electrodes are integrated in our circuit. A software filter
        was added to implement an electrode deadzone. When the device
        acceleration is below the deadzone theshold, the electrode's are turned
        off. This prevents muscle stimulation when the wearer is sitting or
        standing while moving their leg.
      </p>
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
