
document.addEventListener('DOMContentLoaded',()=>{
  AOS.init({duration:700, once:true});
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link=>{
    if(link.href===location.href) link.classList.add('active');
  });
});
