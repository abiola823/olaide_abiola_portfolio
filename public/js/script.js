document.getElementById('date').innerHTML = new Date().getFullYear();
 let burger = document.querySelector('.openClose');
burger.addEventListener('click', () => {
    const showNav = document.querySelector('header');
   const img = document.querySelector('header img');
   const div = document.querySelector('header div');
   if(showNav.style.display === "none") {
        showNav.style.display = "flex"
        showNav.style.width = "100%";
        showNav.style.zIndex = "2";
        // img.style.float = "right";
        // div.style.float = "right"
        // div.style.flexDirection = "column"
        burger.innerHTML = "X";
        burger.style.zIndex = "3";
   } else {
    showNav.style.display = "none";
    burger.innerHTML = "&#9776";
   }
});
