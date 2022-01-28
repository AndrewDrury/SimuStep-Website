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
      <img class="topPic" src="@/assets/pics/spaghetti.png" />
      <h1 class="title">Electrical Design Pt 1: Spaghetti</h1>
      <b-row class="details">
        <b-col style="text-align: left">
          <p class="time"><i class="fa fa-calendar"></i> January 20th, 2022</p>
        </b-col>
        <b-col style="text-align: right">
          <p class="date"><i class="fa fa-clock-o"></i> 2 min</p>
        </b-col>
      </b-row>
      <p>
        The electrical assembly for the prototype will be done in two sections:
        first, the interface devices, sensors, and controller will be integrated
        on a perfboard, so that initial programming can begin! The devices have
        been mounted on the perfboard, and the connections were routed on the
        back side using solid core wiring. The wires are colour-coded to make it
        easier to read: Black is ground, Red is +3.3V, and blue and white are
        used for controls.
      </p>
      <img class="blogPic pr-2" src="@/assets/pics/perfFront.jpg" />
      <img class="blogPic pl-2" src="@/assets/pics/perfBack.jpg" />
      <p>
        For testing and programming purposes, a lot of the panel-mounted IO
        devices, such as LEDs and the potentiometer, have been temporarily wired
        to the perfboard (hence the spaghetti-like state of the prototype). The
        electrical connections have been tested using the microcontroller to
        make sure that all the peripherals can be communicated with.
        Additionally, the battery circuit was completed, so the device can run
        off of the battery and is controlled by a latching push button.
      </p>
      <img class="blogPic" src="@/assets/pics/imuReadings.png" />
      <p>
        The second part of the electrical prototyping will involve the
        electrical stimulation. We discovered that our original plan, a VCCS,
        will need a large external voltage source. This violates our
        constraints, so a new plan involving reverse engineering of a home-use
        TENS unit is underway. Stay tuned!
      </p>
    </b-col>
  </b-row>
</template>
