addEventListener("load", e => {
    // this code will be execute when the website loads

    const navBar = document.querySelector(".navegation-header");
    navBar.addEventListener("click", event => {
      event.stopPropagation();
      navBar.classList.add("navegation-header-mod");
      setTimeout(() => navBar.classList.remove("navegation-header-mod"), 5000);
    })

});