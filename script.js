
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:.15});
reveals.forEach(el=>observer.observe(el));

document.querySelectorAll('.nav-links a').forEach(link=>{
  if(location.pathname.split('/').pop() === link.getAttribute('href')){
    link.classList.add('active');
  }
});
