const {Circle,Triangle,Square} = require("./shape");

describe("Circle", () => {
    it("should render a circle", () => {
      const circle = new Circle();
      const resultLogo = `<circle cx="150" cy="100" r="80" fill="blue"/>`;
      circle.setColor('blue')
      const testLogo = circle.render();
      expect(testLogo).toEqual(resultLogo);
    });
  });


describe("Triangle", () => {
  it("should render a Triangle", () => {
    const triangle = new Triangle();
    const resultLogo = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;
    triangle.setColor('blue')
    const testLogo = triangle.render();
    expect(testLogo).toEqual(resultLogo);
  });
});


describe("Square", () => {
  it("should render a Square", () => {
    const square = new Square();
    const resultLogo = `<rect x= "90" y="40" width="120" height= "120" fill="blue"/>`
    square.setColor('blue')
    const testLogo = square.render();
    expect(testLogo).toEqual(resultLogo);
  });
});