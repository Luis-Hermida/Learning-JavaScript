// Create an arrow function that returns the value without using return.
const square = (x) => x * x;

console.log(square(3));

// Access this.name in an object function
// Use arrow function to print the guest list wihtout binding a new this
const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
