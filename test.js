// Ищем все элементы с классом "custom-select"
const selectArray = Array.from(document.querySelectorAll(".custom-select"));
for (let i = 0; i < selectArray.length; i++) {
  const selElmnt = selectArray[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  const a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  selectArray[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  const b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (let j = 0; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    const c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        const s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        const h = this.parentNode.previousSibling;
        for (let i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            const y = this.parentNode.getElementsByClassName("same-as-selected");
            for (let k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  selectArray[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var selectArray, y, i, xl, yl, arrNo = [];
  selectArray = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = selectArray.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      selectArray[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);