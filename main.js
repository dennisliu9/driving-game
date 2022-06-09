var carData = {
  $carObj: document.querySelector('#p1-car'),
  orientation: 0,
  rotateCar: function (turnKey) {
    if (turnKey === 'ArrowRight') {
      this.orientation += 90;
    } else if (turnKey === 'ArrowLeft') {
      this.orientation += -90;
    } else if (turnKey === 'ArrowDown') {
      this.orientation += (Math.random() < 0.5 ? 1 : -1) * 360 * Math.floor(Math.random() * 4) + 180;
    }
    this.$carObj.style.transform = 'rotate(' + this.orientation + 'deg)';
  }
};

document.addEventListener('keydown', function (event) {
  var keyPressed = event.key;
  carData.rotateCar(keyPressed);
});
