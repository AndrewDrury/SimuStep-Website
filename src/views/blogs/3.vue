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
      <img class="topPic" src="@/assets/pics/SoftwareFlowchart.jpeg" />
      <h1 class="title">Software Design Pt 1: Off to the Races</h1>
      <b-row class="details">
        <b-col style="text-align: left; min-width: 200px">
          <p class="date"><i class="fa fa-calendar"></i> January 29th, 2022</p>
        </b-col>
        <b-col style="text-align: right">
          <p class="time"><i class="fa fa-clock-o"></i> 3 min</p>
        </b-col>
      </b-row>
      <p>
        Software was developped to control the device according to the flowchart
        above. When the device is turned on, the power button is illuminated to
        indicate the power state. Once powered on, the device enters a standby
        state, waiting for an input. SimuStep has three active modes:
        calibration, walking, and rehabilitation. The blue, green, and yellow
        LED each represent a mode. The mode button can be clicked to cycle
        through each of the modes. When all three LEDs are off while the power
        button is on, the device is in a standby state and will not be
        performing any action. Code was written to allow mode switching -
        updating the LEDs to reflect the current mode.
      </p>
      <img class="blogPic" src="@/assets/pics/blueLed.png" />
      <p>
        In calibration mode, the blue LED is lit and device is reading the
        potentiometer. The potentiometer is used to set the intensity of the
        electrodes. The potentiometer value is read and mapped linearly to a
        voltage ranging from 0 to 3.3V. Once the electrodes are integrated on
        the prototype, the device will be sending the corresponding voltage to
        the electrodes via the DAC in pulses at a set frequency.
      </p>
      <img class="blogPic" src="@/assets/pics/greenLed.png" />
      <p>
        The green LED indicates that the device is in walking mode. When in
        walking mode, the device is reading the IMU as input to determine the
        leg's swing-phase. Once integrated, the electrodes will then be
        activated while the leg is in the pre-swing phase until it has reached
        its terminal swing phase. This mode will require further work covered in
        a future blog.
      </p>
      <img class="blogPic" src="@/assets/pics/yellowLed.png" />
      <p>
        Rehabilitation mode is represented by the yellow LED. Once the
        electrodes are attached, the device will intermittently send one second
        pulses to the leg. The intensity dial can be adjusted to change the
        stimulation level.
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
