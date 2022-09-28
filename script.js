import data from './data.json' assert { type: 'json' };
let titles = document.getElementsByClassName("title")
let currentWeek = document.getElementsByClassName('current-week')
let previousWeek = document.getElementsByClassName('previous-week')
let dailyBtn = document.getElementById('daily')
let weeklyBtn = document.getElementById('weekly')
let monthlyBtn = document.getElementById('monthly')


for (let title = 0; title<titles.length; title++){
    titles[title].innerText = data[title].title
}

dailyBtn.addEventListener('click',()=>{
    for (let i = 0; i<currentWeek.length; i++){
        currentWeek[i].innerText = data[i].timeframes.daily.current + 'hrs'
    }    
    for (let i = 0; i<previousWeek.length; i++){
        previousWeek[i].innerText ='Last Week - '+ data[i].timeframes.daily.previous + 'hrs'
    }    
})
weeklyBtn.addEventListener('click',()=>{
    for (let i = 0; i<currentWeek.length; i++){
        currentWeek[i].innerText = data[i].timeframes.weekly.current + 'hrs'
    }    
    for (let i = 0; i<previousWeek.length; i++){
        previousWeek[i].innerText ='Last Week - '+ data[i].timeframes.weekly.previous + 'hrs'
    }    
})
monthlyBtn.addEventListener('click',()=>{
    for (let i = 0; i<currentWeek.length; i++){
        currentWeek[i].innerText = data[i].timeframes.monthly.current + 'hrs'
    }    
    for (let i = 0; i<previousWeek.length; i++){
        previousWeek[i].innerText ='Last Week - '+ data[i].timeframes.monthly.previous + 'hrs'
    }    
})


