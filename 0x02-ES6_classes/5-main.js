import Building from './5-building.js';

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return 'Evacuate the building!';
  }
}

const b = new TestBuilding(100);
console.log(b);

try {
  new Building(200);
} catch (err) {
  console.log(err); // Should output "TypeError: Cannot construct Building instances directly"
}
