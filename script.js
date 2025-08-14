// Tiny interactivity: copy email + current year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const btn = document.getElementById('copyBtn');
  const email = document.getElementById('email');
  if(btn && email){
    btn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(email.textContent.trim());
        btn.textContent = 'Copied!';
        setTimeout(()=> btn.textContent = 'Copy', 1400);
      }catch(e){
        btn.textContent = 'Error';
      }
    });
  }
});
