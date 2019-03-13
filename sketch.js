let header, text, convert, output,inputString, outputString;
function setup() {
  header = select('#header');
  header.position(windowWidth/2.5, windowHeight/16);

  text = select('#text');
  text.position(header.x , header.y+header.height+80)

  convert = select('#convert');
  convert.position(text.x+text.width+20, text.y+40);

  output = select('#result');
  output.position(text.x+10, convert.y+convert.height+40)

  convert.mousePressed(function () {
    inputString = text.elt.value;
    toBinary(inputString);
    inputString = ""
  });
}
function draw() {

}
