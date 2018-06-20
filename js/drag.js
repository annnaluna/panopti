//Make the DIV element draggagle:
dragElement(document.getElementById(("a1")));
dragElement(document.getElementById(("a2")));
dragElement(document.getElementById(("a3")));
dragElement(document.getElementById(("a5")));
dragElement(document.getElementById(("a6")));
dragElement(document.getElementById(("a7")));
dragElement(document.getElementById(("b1")));
dragElement(document.getElementById(("b2")));
dragElement(document.getElementById(("b3")));
dragElement(document.getElementById(("b4")));
dragElement(document.getElementById(("b5")));
dragElement(document.getElementById(("b6")));
dragElement(document.getElementById(("b7")));
dragElement(document.getElementById(("c1")));
dragElement(document.getElementById(("c2")));
dragElement(document.getElementById(("c3")));
dragElement(document.getElementById(("c4")));
dragElement(document.getElementById(("c5")));
dragElement(document.getElementById(("c6")));
dragElement(document.getElementById(("d1")));
dragElement(document.getElementById(("d2")));
dragElement(document.getElementById(("d3")));
dragElement(document.getElementById(("d4")));
dragElement(document.getElementById(("e1")));
dragElement(document.getElementById(("e2")));
dragElement(document.getElementById(("e3")));
dragElement(document.getElementById(("e4")));
dragElement(document.getElementById(("e5")));

dragElement(document.getElementById(("f1")));
dragElement(document.getElementById(("f2")));
dragElement(document.getElementById(("f3")));
dragElement(document.getElementById(("f5")));
dragElement(document.getElementById(("f6")));
dragElement(document.getElementById(("f7")));
// dragElement(document.getElementById(("g1")));
dragElement(document.getElementById(("g2")));
dragElement(document.getElementById(("g3")));
dragElement(document.getElementById(("g4")));
dragElement(document.getElementById(("g5")));
dragElement(document.getElementById(("g6")));
dragElement(document.getElementById(("g7")));
dragElement(document.getElementById(("h1")));
dragElement(document.getElementById(("h2")));
dragElement(document.getElementById(("h3")));
dragElement(document.getElementById(("h4")));
dragElement(document.getElementById(("h5")));
dragElement(document.getElementById(("h6")));
dragElement(document.getElementById(("i1")));
dragElement(document.getElementById(("i2")));
dragElement(document.getElementById(("i3")));
dragElement(document.getElementById(("i4")));
dragElement(document.getElementById(("j1")));
dragElement(document.getElementById(("j2")));
dragElement(document.getElementById(("j3")));
dragElement(document.getElementById(("j4")));



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "head")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "head").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
