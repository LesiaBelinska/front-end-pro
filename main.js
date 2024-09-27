"use strict";

let ladder = {
  current: 0,

  up: function () {
    this.current++;
    console.log(this);

    return this;
  },

  down: function () {
    this.current--;

    return this;
  },

  showStep: function () {
    console.log(this.current);

    return this;
  },
};

ladder.up().up().down().showStep();
