const openButton = () => {
  let navMobile = document.getElementsByClassName("navMobile")[0];
  navMobile.style.display = "block";
};

const closeButton = () => {
  let navMobile = document.getElementsByClassName("navMobile")[0];
  navMobile.style.display = "none";
};

// if (screen.width == '1024') {
//     let navMobile = document.getElementsByClassName("navMobile")[0];
//     navMobile.style.display = 'none';
// } else {
//     let navMobile = document.getElementsByClassName("navMobile")[0];
//     navMobile.style.display = 'none';
// }
// document.addEventListener('resize', function () {
//     let navMobile = document.querySelector("div.navMobile");

//     // console.log(screen.width);
//     window.innerWidth >= 780 ? (navMobile.style.display = 'none') : (navMobile.style.display = 'none');
// });
