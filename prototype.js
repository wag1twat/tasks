function Book() {
  this.type = "book";
}

const book = new Book();

function HarryPotter() {
  this.title = "Harry Potter";

  this.getType = function () {
    return this.type;
  };
}

const harryPotter = new HarryPotter();

Reflect.setPrototypeOf(harryPotter, book);

console.log(harryPotter.getType());
