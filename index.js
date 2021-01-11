function setup() {
    createCanvas(400, 400);
  }
  
  function house(tri, main, door, knob, win) {
    let a = color(main);
    fill(a);
    rect(80, 80, 200, 200)
  
    let b = color(tri);
    fill(b);
    triangle(290, 75, 175, 10, 70, 75);
  
    let c = color(door);
    fill(c);
    rect(210, 200, 40, 80)
  
    let d = color(knob);
    fill(d)
    circle(235, 230, 10)
  
    let e = color(win);
    fill(e)
    rect(110, 150, 50, 50)
  }
  
  function draw() {
    house('brown', 'red', 'white', 'black', 'blue')
  }