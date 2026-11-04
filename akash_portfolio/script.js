const menu=document.getElementById('menu');const links=document.getElementById('links');menu.addEventListener('click',()=>links.classList.toggle('open'));document.querySelectorAll('#links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
// Interactive holographic card tilt
const holo = document.getElementById('holoCard');
if (holo && window.matchMedia('(pointer:fine)').matches) {
  holo.addEventListener('pointermove', (e) => {
    const r = holo.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    holo.style.transform = `perspective(900px) rotateY(${x*15-2}deg) rotateX(${-y*12}deg) translateY(-3px)`;
  });
  holo.addEventListener('pointerleave', () => { holo.style.transform='perspective(900px) rotateY(-7deg) rotateX(3deg)'; });
}
