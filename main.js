const app = (() => {
    let body;
    let menu;
    let menuItems;
    
    const init = () => {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');

      applyListeners();
    }
    
    const applyListeners = () => {
      menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    }
    
    const toggleClass = (element, stringClass) => {
      if(element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else 
        element.classList.add(stringClass);
    }
    
    init();

})();
  
const menuItems = document.querySelectorAll('.nav__list-item');

for (let x = 0; x < menuItems.length; x++) {
    menuItems[x].addEventListener('click', () => {
        document.querySelector('.menu-icon').click();
    });
}

const schedule_days = document.querySelectorAll('.schedule-day');
const schedule_activities = document.querySelectorAll('.schedule-activity');

const activities = {
    0: "Charity Fair",
    1: "Worldwide Tour",
    2: "Burning Man",
    3: "EU Conference",
    4: "Global Summit",
    5: "Mars Colonization mission",
    6: "Colonization of Alpha Centauri star system"
}

const weekday_name = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
]

const weekdays = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
    "Saturday": 5,
    "Sunday": 6,
};

function nextweek(){
    var today = new Date();
    var nextweek = {}
    for (let i = 0; i < 7; i++) {
        if (((new Date()).getDay()) + i > 7) {
            nextweek[weekday_name[(((new Date()).getDay()) + i - 7)]] = {};
            nextweek[weekday_name[(((new Date()).getDay()) + i - 7)]][0] = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i + 1).getDate();
            nextweek[weekday_name[(((new Date()).getDay()) + i - 7)]][1] = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i + 1).getMonth();
        } else {
            nextweek[weekday_name[(((new Date()).getDay()) + i)]] = {};
            nextweek[weekday_name[(((new Date()).getDay()) + i)]][0] = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i + 1).getDate();
           nextweek[weekday_name[(((new Date()).getDay()) + i)]][1] = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i + 1).getMonth();
        }
    }
    return nextweek;
}

const nextWeek = nextweek();

const getSchedule = () => {
    for (let i = 0; i < 7; i++) {
        schedule_activities[i].innerText = activities[i];
    }
    for (let i in schedule_days) {
        console.log(i);
        console.log(schedule_days[i]);
        schedule_days[i].innerText = `${schedule_days[i].innerText} - ${nextWeek[schedule_days[i].innerText][0]}.${nextWeek[schedule_days[i].innerText][1]}`;
    }
}

var x = 0;