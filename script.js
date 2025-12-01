// NAV TOGGLE
const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if(burger){
  burger.addEventListener('click', () => {
    if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
    else navLinks.style.display = 'flex';
  });
}

// COOKIE BANNER
function showCookieIfNeeded(){
  const accepted = localStorage.getItem('cookieAccepted');
  if(accepted === 'yes') return;
  const banner = document.querySelector('.cookie-banner');
  if(banner) banner.style.display = 'flex';
}
function acceptCookies(){
  localStorage.setItem('cookieAccepted','yes');
  const banner = document.querySelector('.cookie-banner');
  if(banner) banner.style.display = 'none';
}
window.addEventListener('load', showCookieIfNeeded);

// LOGIN / SIGNUP MODAL
function openAuth(){
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <h3>Login / Sign Up 👋</h3>
      <form id="authForm">
        <input type="email" id="email" placeholder="Email" required />
        <input type="password" id="pwd" placeholder="Password" required />
        <button type="submit">Continue</button>
        <p style="font-size:0.9rem;color:#666;margin-top:10px">This is a demo form — no data is sent anywhere.</p>
      </form>
    </div>`;
  document.body.appendChild(backdrop);
  const form = document.getElementById('authForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! (Demo) ✅');
    document.body.removeChild(backdrop);
  });
  backdrop.addEventListener('click', function(ev){
    if(ev.target === backdrop) document.body.removeChild(backdrop);
  });
}

// small helper for hero CTA demo
function showMessage(){
  alert('Welcome! 🎉 Explore our services and portfolio.');
}
