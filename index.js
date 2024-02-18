
function getCurrentDate() {
  const currentDate = new Date();
  console.log(currentDate.getDay());
  return currentDate;
}

function nextMonday() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const daysToMonday = 8 - currentDay;
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





let language = 'no-NO';
const nextWeek = getWeekNumber(nextMonday());
//const nextWeek = getCurrentWeek() + 2;
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
