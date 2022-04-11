// const changehcolor = () => {
//   console.log("I'mcalled");
//   let h2elm = document.getElementById("h2title");
//   h2elm.style.color = "red";
// };
const d = new Date();
const actuYear = d.getFullYear();
// console.log(typeof actuYear);
// console.log(d.getFullYear());
const rangeval = document.getElementById("rangeVal");
const ratetag = document.getElementById("rate");
const nbyears = document.getElementById("nb-years");
const calcul = document.getElementById("cal");
const ul = document.getElementById("mylist");
rangeval.innerHTML = ratetag.value;

ratetag.oninput = function () {
  rangeval.innerHTML = this.value;
  var x = this.value;
};

// document.getElementById("btn-click").addEventListener("click", clicked);

// let clicked = () => {
// document.getElementById("mylist").innerHTML =
//   " <li>If your deposite is <span>##</span></li><li>At an interset of <span></span></li><li>  You will receive an amount of <span>##</span> in year    <span></span>  </li>";
// };
const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
amount.addEventListener("focus", function () {
  amount.value = "";
  rate.value = "";
  nbyears.value = "";
  ul.innerHTML = "";
  if (document.getElementById("cal").disabled === true) {
    document.getElementById("cal").disabled = false;
  }
});
// let x = rangeval.value;
// console.log(x);
// const result = 10;
let result = () => {
  return rangeval.value * nbyears.value * amount.value;
};

calcul.addEventListener("click", function () {
  const am = parseInt(amount.value);
  const rt = parseFloat(rate.value);
  const ny = parseInt(nbyears.value);

  // console.log("we are");
  if (!am) {
    document.getElementById("cal").disabled = true;
    alert("field Requested!!");
  } else if (parseInt(am) <= 0) {
    document.getElementById("cal").disabled = true;
    alert("You need an amount bigger than zero!!");
  } else if (parseFloat(rt) === 0.0) {
    document.getElementById("cal").disabled = true;
    alert("You need a rate bigger than zero!!");

    rate.addEventListener("focus", () => {
      document.getElementById("cal").disabled = false;
      ul.innerHTML = "";
    });
  } else if (parseInt(ny) <= 0) {
    document.getElementById("cal").disabled = true;
    alert("You need a number of year bigger than zero!!");

    nbyears.addEventListener("focus", () => {
      document.getElementById("cal").disabled = false;
      ul.innerHTML = "";
    });
  } else {
    let cont = document.getElementById("cont");
    cont.className = "container2";
    const li1 = document.createElement("LI");
    const li2 = document.createElement("LI");
    const li3 = document.createElement("LI");

    const text1 = document.createTextNode("If your deposite is ");
    const text2 = document.createTextNode("At an interset of ");
    const text21 = document.createTextNode("%");

    const text3 = document.createTextNode("You will receive an amount of ");
    const text31 = document.createTextNode(" in year ");

    const span1 = document.createElement("SPAN");
    span1.setAttribute("class", "yelBcG");
    const span2 = document.createElement("SPAN");
    span2.setAttribute("class", "yelBcG");
    const span3 = document.createElement("SPAN");
    span3.setAttribute("class", "yelBcG");
    const span31 = document.createElement("SPAN");
    span31.setAttribute("class", "yelBcG");

    const textSp1 = document.createTextNode(amount.value);
    const textSp2 = document.createTextNode(rate.value);

    // let x = rangeval.value;

    // console.log(am);
    // console.log(x);
    // const result = 10;
    // console.log("amount: ", am);
    // console.log("nbr year:", ny);
    // console.log("rate quotion: ", rt / 100);
    let result = (x, y, z) => {
      // console.log("amount: ", am);
      // console.log("nbr year:", ny);
      // console.log("rate quotion: ", rt / 100);
      res = parseInt(am * ny * (rt / 100));
      console.log(res);
      return res;
    };

    calcul.setAttribute("disabled", true);
    const textSp3 = document.createTextNode(result(am, rt, ny));
    const textSp31 = document.createTextNode(actuYear + parseInt(ny));
    span1.appendChild(textSp1);
    li1.appendChild(text1);
    li1.appendChild(span1);
    ul.appendChild(li1);

    span2.appendChild(textSp2);
    span2.appendChild(text21);
    li2.appendChild(text2);
    li2.appendChild(span2);
    // li2.appendChild(text21);
    ul.appendChild(li2);

    span3.appendChild(textSp3);
    span31.appendChild(textSp31);
    li3.appendChild(text3);
    li3.appendChild(span3);
    li3.appendChild(text31);
    li3.appendChild(span31);
    ul.appendChild(li3);

    calcul.setAttribute("disabled", true);
    // console.log("It is the Amount", amount.value);
  }
});
