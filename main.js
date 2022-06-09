var carData = {
  $carObj: document.querySelector('#p1-car'),
  orientation: 'east',
  rotateCar: function () {
    this.$carObj.classList.remove('face-north');
    this.$carObj.classList.remove('face-south');
    this.$carObj.classList.remove('face-east');
    this.$carObj.classList.remove('face-west');
    this.$carObj.classList.add('face-' + this.orientation);
  }
};

// var $car = document.querySelector('#p1-car');

document.addEventListener('keydown', function (event) {
  var keyPressed = event.key;

  if (keyPressed === 'ArrowRight') {
    carData.orientation = 'east';
  } else if (keyPressed === 'ArrowDown') {
    carData.orientation = 'south';
  } else if (keyPressed === 'ArrowLeft') {
    carData.orientation = 'west';
  } else if (keyPressed === 'ArrowUp') {
    carData.orientation = 'north';
  }

  carData.rotateCar();
});
