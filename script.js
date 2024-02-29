// window.addEventListener('scroll',()=> {

//     let height = bottomNavBar.offsetHeight

//     if ( window.scrollY > height) {
//         bottomNavBar.style.top = '0'
//     } else {
//         bottomNavBar.style.top = '-' + height + 'px';
//     }
// })


window.addEventListener('scroll', function () {
  var bottomNavBar = document.getElementById('navbar');
  var height = bottomNavBar.offsetHeight;

  if (window.scrollY > height) {
    console.log('sucess')
  }
  // bottomNavBar.style.top = '0';
  // } else {
  //   bottomNavBar.style.top = '-' + height + 'px';
  // }
})