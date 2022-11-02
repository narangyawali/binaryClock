const clock = document.querySelector(".clock");

// const h1 = [0, 1, 1, 1];
const h1 = "0101";
const h2 = [0, 0, 0, 0];
const m1 = [0, 0, 0, 0];
const m2 = [0, 0, 0, 0];
const s1 = [0, 0, 0, 0];
const s2 = [0, 0, 0, 0];

var sec1;
var time;

const generateTime = () => {
  let now = new Date();

  let hour1 = Math.floor(now.getHours() / 10);
  let hour2 = now.getHours() % 10;

  let min1 = Math.floor(now.getMinutes() / 10);
  let min2 = now.getMinutes() % 10;

  let sec1 = Math.floor(now.getSeconds() / 10);
  let sec2 = now.getSeconds() % 10;
//   to get digits 

	let h1b = hour1.toString(2).padStart(4,0)
    let h2b = hour2.toString(2).padStart(4, 0)
    let m1b = min1.toString(2).padStart(4, 0)
    let m2b = min2.toString(2).padStart(4, 0)

// converting into binary

 	 timeb = [h1b,h2b,m1b,m2b]

  //   console.log(now.getHours(), now.getMinutes());

  //   console.log(hour1, hour2, "and", min1, min2);

  //   console.log(hour1.toString(2).padStart(4,0));




  sec1b = (now.getSeconds() % 10).toString(2).padStart(4, 0);
  makeHour1();
	makeTime()
  console.log(sec1b);
};

// setInterval(generateTime,1000)





const makeTime = () => {
  

    const vertical = document.createElement("div");
    vertical.className = "vertical";
  
    Array.from(sec1b).forEach((e) => {
      const box = document.createElement("div");
      box.className = "ele";
      if (e == 0) {
        box.className = box.classList + " deact";
      } else {
        box.className = box.classList + " act";
      }
      vertical.appendChild(box);
    });
  
    while (clock.firstChild) {
      clock.removeChild(clock.firstChild);
    }
    
    clock.appendChild(vertical);
  
  };


// const makeHour1 = () => {
  

//   const vertical = document.createElement("div");
//   vertical.className = "vertical";

//   Array.from(sec1b).forEach((e) => {
//     const box = document.createElement("div");
//     box.className = "ele";
//     if (e == 0) {
//       box.className = box.classList + " deact";
//     } else {
//       box.className = box.classList + " act";
//     }
//     vertical.appendChild(box);
//   });

//   while (clock.firstChild) {
//     clock.removeChild(clock.firstChild);
//   }
  
//   clock.appendChild(vertical);

// };

// makeHour1();
