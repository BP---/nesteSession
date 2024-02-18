
function getCurrentDate() {
  const currentDate = new Date();
  console.log(currentDate.getDay());
  return currentDate;
}

//stupid start week on sunday fix
function changeSundayToMonday(date) {
    let dayOfWeek = date.getDay();
    return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
}

function nextMonday() {
    const currentDate = new Date();
//test to simulate day of session. REMOVE
    currentDate.setDate(currentDate.getDate() + 1);

    const currentDay = changeSundayToMonday(currentDate);
    const daysToMonday = 7 - currentDay;
    currentDate.setDate(currentDate.getDate() + daysToMonday);
    return currentDate;
}

function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

function getCurrentWeek() {
    const currentDate = new Date();
    const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const pastDaysOfYear = (currentDate - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function getWeekNumber(date) {
    const currentDate = date;
    const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const pastDaysOfYear = (currentDate - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function isSession(date){
    if (date.getDay() === 1 && getWeekNumber(date) % 2 === 0){
        return true;
    }
    return false;

}

function celebrate() {

    //remove all stuff from container div
    let container = document.querySelector('.container');
    if (container) {
        container.innerHTML = '';
    }
    const heading = document.createElement('h1');
    heading.id = 'session';
    heading.textContent = 'FUCK YES!';
    document.body.appendChild(heading);

}





let language = 'no-NO';
const nextWeek = getWeekNumber(nextMonday());
//const nextWeek = getCurrentWeek() + 2;
const day = new Date();
day.setDate(day.getDate() + 1); //test to simulate day of session. REMOVE
console.log(getCurrentWeek());

if (isSession(day)) {
    celebrate();
} else {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if (nextWeek % 2 === 0) {
        //document.getElementById('nextSession').innerHTML = `Neste session er ${nextMonday().toDateString()}`;

        document.getElementById('nextSession').innerHTML = `Neste session er ${nextMonday().toLocaleDateString(language, options)}`;
        document.getElementById('dagerTil').innerHTML = `Dager til neste session: ${daysBetweenDates(getCurrentDate(), nextMonday())}`;
    } else {
        const utsattSession = new Date(nextMonday().setDate(nextMonday().getDate() + 7));
        document.getElementById('nextSession').innerHTML = `Neste session er ${utsattSession.toDateString()}`;
        document.getElementById('dagerTil').innerHTML = `Dager til neste session: ${daysBetweenDates(getCurrentDate(), utsattSession)}`;

    }

    //document.getElementById('ytring').innerHTML = `Håkon brøt magien i universet ${Math.floor(Math.random() * (10 - 2 + 1)) + 2} ganger med sin forrige ytring`;
    const listeDiv = document.getElementById('liste');
    const liste = document.createElement('ul');
    listeDiv.appendChild(liste);
    const listeElement1 = document.createElement('li');
    listeElement1.textContent = `Håkon: ${Math.floor(Math.random() * (10 - 2 + 1)) + 2}`;
    liste.appendChild(listeElement1);
    const listeElement2 = document.createElement('li');
    listeElement2.textContent = `Eivind: ${Math.floor(Math.random() * (10 - 2 + 1)) + 2}`;
    liste.appendChild(listeElement2);
    const listeElement3 = document.createElement('li');
    listeElement3.textContent = `Viva la Dirt League: ${Math.floor(Math.random() * (10 - 2 + 1)) + 2}`;
    liste.appendChild(listeElement3);
}