const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
})


// 실시간 시계
setInterval(()=>{
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');
  
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  
  let am = h >= 12 ? "PM" : "AM";

  hours.innerHTML = h > 12 ? h-12 + ":" : h + ":";
  minutes.innerHTML = m + ":";
  seconds.innerHTML = s < 10 ? "0" + s : s;
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 510 - (510*h) / 12;
  // 12 hrs clock
  mm.style.strokeDashoffset = 630 - (630*m) / 60;
  // 60 minutes clock
  ss.style.strokeDashoffset = 760 - (760*m) / 60;
  // 60 seconds
})
