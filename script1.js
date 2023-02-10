const time = document.querySelector(".time");
const addBtn = document.querySelector(".btn-add");
const doneBtn = document.querySelector(".btn-done");
const hourInput = document.querySelector("#hours");
const minInput = document.querySelector("#mins");
const secInput = document.querySelector("#secs");
const alarmContainer = document.querySelector(".time-contain");
const alarmsList = document.querySelector(".alarms-list");
const date = document.querySelector(".date");
const section = document.querySelector(".timer-section");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var audio = new Audio("./assets/audio.wav");
class App {
  #alarms = [];
  #today;
  constructor() {
    this._createTimerElement();
    this._showDays();
    this._getDate();
    this._displayAll();
    addBtn.addEventListener("click", function (e) {
      alarmContainer.style.display = "flex";
      this.style.display = "none";
    });
    alarmContainer.addEventListener("click", this._addAlarm.bind(this));
    alarmsList.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete-alarm")) {
        let alarmId = e.target.parentElement.dataset.id;
        app.#alarms = app.#alarms.filter((a) => a.id != alarmId);
        app._deleteAlarm(alarmId);
      }
    });
  }
  _createTimerElement() {
    this.#today = new Date();
    var h = this.#today.getHours();
    var m = this.#today.getMinutes();
    var s = this.#today.getSeconds();
    m = this._checkTime(m);
    s = this._checkTime(s);
    time.innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(() => {
      this.#alarms.forEach((e) => {
        console.log(e);
        if (e.hour === h && e.minute === m && e.sec === s) {
          audio.play();
          this._deleteAlarm(e.id);
     
        }
      });
      this._createTimerElement();
    }, 500);
  }
  _checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  _addAlarmItem(h, m, s) {
    let alarmTime = new Alarm(
      (Date.now() + "").slice(-10),
      h + this.#today.getHours(),
      m + this.#today.getMinutes(),
      s + this.#today.getSeconds()
    );
    this.#alarms.push(alarmTime);
    this._createAlarmItem(alarmTime);
    this._setLocalStorage();
  }
  _addAlarm(e) {
    let h = +hourInput.value;
    let m = +minInput.value;
    let s = +secInput.value;
    if (e.target.classList.contains("btn-done")) {
      this._addAlarmItem(h, m, s);
      alarmContainer.style.display = "none";
      addBtn.style.display = "block";
    }
  }
  _deleteAlarm(alarmId) {
    document.querySelector(`[data-id ="${alarmId}"]`).remove();
    this.#alarms = this._getLocalStorage().filter((a) => a.id != alarmId);
    this._setLocalStorage();
  }
  _getDate() {
    this.#today = new Date();
    document
      .querySelector(`[data-id="${this.#today.getDay()}"]`)
      .classList.add("today");
  }
  _showDays() {
    let html;
    days.forEach((day, index) => {
      html = `
        <span data-id=${index} class="day">
        ${day}
        </span>
        `;
      date.insertAdjacentHTML("afterbegin", html);
    });
  }
  _setLocalStorage() {
    localStorage.setItem("alarms", JSON.stringify(this.#alarms));
  }
  _getLocalStorage() {
    return (this.#alarms = JSON.parse(localStorage.getItem("alarms")));
  }
  _displayAll() {
    this.#alarms.forEach((a) => this._createAlarmItem(a));
  }
  _createAlarmItem(alarmTime) {
    let html = `
    <li class="alarm-item" data-id=${alarmTime.id}>
    <div>
  ${alarmTime.hour} :${alarmTime.minute}:${alarmTime.sec}
    </div>
    <span class="delete-alarm">❌</span>
     </li>
    `;
    alarmsList.insertAdjacentHTML("beforeend", html);
  }
}
let app = new App();
class Alarm {
  constructor(id, hour, minute, sec) {
    this.id = id;
    this.hour = hour;
    this.minute = minute;
    this.sec = sec;
  }
}
