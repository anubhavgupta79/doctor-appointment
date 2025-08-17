// Navbar toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.addEventListener('click', ()=> navMenu.classList.toggle('show'));

// Appointment form
const form = document.getElementById('appointmentForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', e=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // Save to localStorage demo
  let appts = JSON.parse(localStorage.getItem('appointments')||'[]');
  appts.push(data);
  localStorage.setItem('appointments', JSON.stringify(appts));

  confirmation.textContent = `✅ Appointment confirmed with ${data.doctor} on ${data.date} at ${data.time}`;
  form.reset();
});
