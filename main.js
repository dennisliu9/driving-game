/*
Polar coordinates to Cartesian Coordinates
x = r * cos(theta)
y = r * sin(theta)

r will be the translation amount at each step in the interval
After each step in the interval, update the x and the y by multiplying the
  step amount (eg 3px) by cos(orientation) and sin(orientation)
Update translate(x, y)

BACK HOME:
set offset!
*/

var carData = {
  $carObj: document.querySelector('#p1-car'),
  orientation: 0,
  xCoord: 0,
  yCoord: 0,
  rotateCar: function (turnKey) {
    var turnAngle = 90;
    if (turnKey === 'ArrowRight') {
      this.orientation += turnAngle;
    } else if (turnKey === 'ArrowLeft') {
      this.orientation += -turnAngle;
    } else if (turnKey === 'ArrowDown') {
      this.orientation += (Math.random() < 0.5 ? 1 : -1) * 360 * Math.floor(Math.random() * 4) + 180;
    }
    this.$carObj.style.transform = 'rotate(' + this.orientation + 'deg)';
  }
};

carData.$carObj.style.top = carData.yCoord + 'px';
carData.$carObj.style.left = carData.xCoord + 'px';

function moveCarFoward(carDataObj) {
  // Needs to be declared outside of object because of 'this' issues with setInterval

  // Math.cos() and Math.sin() take radians, rad = deg * (pi / 180)
  var orientationRad = carDataObj.orientation * (Math.PI / 180);
  carDataObj.xCoord += 3 * Math.cos(orientationRad);
  carDataObj.yCoord += 3 * Math.sin(orientationRad);
  carDataObj.$carObj.style.top = carData.yCoord + 'px';
  carDataObj.$carObj.style.left = carData.xCoord + 'px';
}

document.addEventListener('keydown', function (event) {
  var keyPressed = event.key;
  if (['ArrowRight', 'ArrowLeft', 'ArrowDown'].includes(keyPressed)) {
    carData.rotateCar(keyPressed);
  }

  if ([' ', 'ArrowUp'].includes(keyPressed)) {
    setInterval(moveCarFoward, 16, carData);
  }
});
