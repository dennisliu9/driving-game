var carData = {
  $carObj: document.querySelector('#p1-car'),
  orientation: 0,
  translateXamount: 0,
  rotateCar: function (turnKey) {
    if (turnKey === 'ArrowRight') {
      this.orientation += 90;
    } else if (turnKey === 'ArrowLeft') {
      this.orientation += -90;
    } else if (turnKey === 'ArrowDown') {
      this.orientation += (Math.random() < 0.5 ? 1 : -1) * 360 * Math.floor(Math.random() * 4) + 180;
    }
    this.$carObj.style.transform = 'rotate(' + this.orientation + 'deg)';
  },
  moveCarFoward: function () {
    this.translateXamount += 3;
    this.$carObj.style.transform = 'translateX(' + this.translateXamount + 'px)';
  }
};

document.addEventListener('keydown', function (event) {
  var keyPressed = event.key;
  if (['ArrowRight', 'ArrowLeft', 'ArrowDown'].includes(keyPressed)) {
    carData.rotateCar(keyPressed);
  }
  if ([' ', 'ArrowUp'].includes(keyPressed)) {
    carData.moveCarFoward();
  }

});
