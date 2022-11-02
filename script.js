const clock = document.querySelector(".clock");

// const h1 = [0, 1, 1, 1];
const h1 = "0101";
const h2 = [0, 0, 0, 0];
const m1 = [0, 0, 0, 0];
const m2 = [0, 0, 0, 0];
const s1 = [0, 0, 0, 0];
const s2 = [0, 0, 0, 0];

var sec1;
var timeb;

const generateTime = () => {
  let now = new Date();

  let hour1 = Math.floor(now.getHours() / 10);
  let hour2 = now.getHours() % 10;

  let min1 = Math.floor(now.getMinutes() / 10);
  let min2 = now.getMinutes() % 10;

  let sec1 = Math.floor(now.getSeconds() / 10);
  let sec2 = now.getSeconds() % 10;
  //   to get digits

  let h1b = hour1.toString(2).padStart(4, 0);
  let h2b = hour2.toString(2).padStart(4, 0);
  let m1b = min1.toString(2).padStart(4, 0);
  let m2b = min2.toString(2).padStart(4, 0);

  let s1b = sec1.toString(2).padStart(4, 0);
  let s2b = sec2.toString(2).padStart(4, 0);

  // converting into binary

  //   timeb = [h1b, h2b, m1b, m2b];

  timeb = [h1b, h2b, m1b, m2b, s1b, s2b];
  //to include second in time

  makeTime(timeb);
  // console.table(timeb)

  //   console.log(now.getHours(), now.getMinutes());

  //   console.log(hour1, hour2, "and", min1, min2);

  //   console.log(hour1.toString(2).padStart(4,0));

  sec1b = (now.getSeconds() % 10).toString(2).padStart(4, 0);
  //   makeADigit(sec1b);
  console.log(sec1b);
};

// setInterval(generateTime, 1000);


const makeTime = (time) => {
  while (clock.firstChild) {
    clock.removeChild(clock.firstChild);
  }

  time.forEach((e) => {
    makeADigit(e);
  });
};

const makeADigit = (digit) => {
  const vertical = document.createElement("div");
  vertical.className = "vertical";

  Array.from(digit).forEach((e) => {
    const box = document.createElement("div");
    box.className = "ele";
    if (e == 0) {
      box.className = box.classList + " deact";
    } else {
      box.className = box.classList + " act";
    }
    vertical.appendChild(box);
  });

  clock.appendChild(vertical);
};

// makeHour1();
