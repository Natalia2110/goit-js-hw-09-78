import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputEl: document.getElementById("datetime-picker"),
    btnStartEl: document.querySelector('button[data-start]'),
    boxEl: document.querySelector('.field')
};

console.log(refs.inputEl);
console.log(refs.btnStartEl);
console.log(refs.boxEl);

refs.boxEl.style.width = '75px';
refs.boxEl.style.height = '40px';
refs.boxEl.style.border = '2px';
refs.boxEl.style.borderColor = '#212121';




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };



