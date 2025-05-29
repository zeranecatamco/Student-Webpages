const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const addBtn = document.getElementById("update-btn");
const resetBtn = document.getElementById("reset-btn");
const labelInput = document.getElementById("label-input");
const resultPopup = document.getElementById("result-popup");
const popupText = document.getElementById("popup-text");
const closePopup = document.getElementById("close-popup");

// start with empty wheel
let labels = []; // labels for wheel
let data = []; // different values for wheel
let pieColors = []; // colors for the labels

// initialize the wheel
let myChart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: "pie", // allows for the use of the pie chart specifically
  data: {
    labels: labels,
    datasets: [{
      backgroundColor: pieColors,
      data: data,
    }],
  },
  options: {
    responsive: true,
    animation: { duration: 0 }, // currently not using the animation
    plugins: {
      tooltip: false, // hides different info popups
      legend: { display: false }, // hides more info popups
      datalabels: {
        color: "#ffffff",
        font: { family: "'DynaPuff', system-ui", size: 18 },
        anchor: 'end',
        align: 'start',
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        rotation: (ctx) => {
          const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const value = ctx.chart.data.datasets[0].data[ctx.dataIndex];
          const angle = (value / total) * 180; // figures out the rotation for the labels
          let rotationAngle = angle / 2;
          if (rotationAngle > 90) rotationAngle -= 180;  // keeps the labels upright instead of upside down
          return rotationAngle;
        },
      },
    },
  },
});

// generates random different shades of colors for the wheel
function getRandomGreenShade() {
  const shades = [
    "#A8D5BA", "#7FB77E", "#557C55", "#285430", "#C1F2B0", "#618264",
    "#88AB8E", "#ADC2A9", "#6C9A8B", "#C3E2C2", "#406343", "#609966",
    "#F5F5E1", "#EFE9D8", "#F0EAD6"
  ];
  return shades[Math.floor(Math.random() * shades.length)];
}

// adds labels for the wheel
addBtn.addEventListener("click", () => {
  const newLabel = labelInput.value.trim();
  if (newLabel) {
    labels.push(newLabel); // add labels to the array
    data.push(10); // equal sizes for the pieaces
    pieColors.push(getRandomGreenShade()); // random color for the label piece
    myChart.update(); // update the wheel
    labelInput.value = ""; // clears input
  }
});

// reset button for the wheel
resetBtn.addEventListener("click", () => {
  labels.length = 0; // clears the array for labels
  data.length = 0; // clears the array for data
  pieColors.length = 0; // clears the array for the colors
  myChart.update(); // updates to empty again
  finalValue.textContent = "CLICK SPIN TO START!"; // resets final value
});

// spin logic
let isSpinning = false; // allows for spins one at a time

spinBtn.addEventListener("click", () => {
  if (isSpinning || labels.length === 0) return; // doesn't allow for spinning if already spinning/if there are no labels
  isSpinning = true; // spinning wheel
  finalValue.textContent = "Spinning..."; // while wheel is spinning

  const randomDegree = 5000 + Math.random() * 5000; // random degree number for spin
  const rotationPerPiece = 360 / labels.length; // rotation length depending on the amount of labels
  const winnerIndex = Math.floor(((360 - (randomDegree % 360)) % 360) / rotationPerPiece); // decides which label is landed on depending on the random degree
  const winnerLabel = labels[winnerIndex]; // label from winning index

  let currentRotation = 0; // begins rotation at 0 degrees
  let speed = 20; // starting spin speed

  // animation for the spinning 
  function spin() {
    currentRotation += speed; // increases speed of rotation
    wheel.style.transform = `rotate(${currentRotation}deg)`; // applies the rotation to the wheel

    if (currentRotation >= randomDegree) { // spinning stops when the current rotation goes over the random degree
      wheel.style.transform = `rotate(${randomDegree % 360}deg)`; // final rotation mathces random degree
      isSpinning = false; // not spinning
      finalValue.textContent = `Result: ${winnerLabel}`; // result
      popupText.textContent = `🎉🥳 the wheel landed on: ${winnerLabel}! 🎉🥳`; // popup message
      resultPopup.classList.remove("hidden");
    } else {
      if (randomDegree - currentRotation < 500) {
        speed *= 0.98; // slow down more as it gets closer
      }
      requestAnimationFrame(spin);
    }
  }

  requestAnimationFrame(spin);
});

// close popup
closePopup.addEventListener("click", () => {
  resultPopup.classList.add("hidden");
});
