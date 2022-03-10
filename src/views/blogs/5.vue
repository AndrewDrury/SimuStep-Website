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
      <img class="topPic" src="@/assets/pics/pcb.jpg" />
      <h1 class="title">Electrical Design Pt 2: Reverse Engineering</h1>
      <b-row class="details">
        <b-col style="text-align: left; min-width: 200px">
          <p class="date"><i class="fa fa-calendar"></i> February 18, 2022</p>
        </b-col>
        <b-col style="text-align: right">
          <p class="time"><i class="fa fa-clock-o"></i> 2 min</p>
        </b-col>
      </b-row>
      <p>
        Over the course of the last few weeks, much progress has been made on
        the electrical design! By examining the PCB of an at-home TENS unit, we
        were able to determine the appropriate schematic and components needed
        to generate electrical stimulation. To confirm the performance of the
        circuit, we simulated its' behaviour in LTSpice.
      </p>
      <img class="blogPic" src="@/assets/pics/ltspice.png" />
      <p>
        The next step was to determine how to integrate this circuit with our
        device. Using an oscilloscope, the pins of the device microcontroller
        were probed to analyze what kind of signal is being supplied.
      </p>
      <img class="blogPic" src="@/assets/pics/biphasicsignals.png" />
      <p>
        The stimulation circuit will be supplied by three signals: one to set
        the variable amplitude of the stimulation, and two that control the
        frequency and pulse width of each electrode. These two signals will be
        90 degrees out of phase to provide biphasic stimulation and avoid
        buildup of charge. The electrodes that output from the circuit will be
        panel mounted in our device to stimulate the leg.
      </p>
      <p>
        We have connected the stimulation circuit to the rest of the system and
        will now begin testing of the system and software.
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
