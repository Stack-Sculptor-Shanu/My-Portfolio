const menuIcon=document.querySelector('#menu-bar');
const navlinks=document.querySelector('.navlists');

menuIcon.onclick = ()=>{
    navlinks.classList.toggle('active');
}