// Nav Menu Burger Animation and Responsive Menu 
const navMenuIcon = document.getElementById("burger");
const navbarCategories = document.getElementById("navbar-categories");
const navbarShopItems = document.getElementById("navbar-shop-items");

navMenuIcon.addEventListener("click", function () {
    this.classList.toggle("toggle");
    navbarCategories.classList.toggle("active");
    navbarShopItems.classList.toggle("active")
    
    //! Second Option the responsive view navbar 
    // navbarCategories.classList.toggle("dNone");
    // navbarShopItems.classList.toggle("dNone")
});

// Nav Menu Burger Animation and Responsive Menu End 

//  Colorful Dots 
// Bu şekilde pozisyonları rastgele değişen dots'lar üretilebilir. 
//Tabiki çok daha ayrıntılı yazılabilir ama sadece örnek olması açısından göstermek istedim. 
// Görmek için yorumdan çıkarılması yeterli. 

// let randomColor = {
//     leftRightMin: 10,
//     leftRightMax: 145,
//     topMin: -5,
//     topMax: 100
// };
// const { leftRightMin, leftRightMax, topMin, topMax } = randomColor;

// let leftDots = document.querySelectorAll('.colorful-dots-left .dot');
// let rightDots = document.querySelectorAll('.colorful-dots-right .dot');

// function colorfulDots(dots, position) {
//     dots.forEach(dot => {
//         let randomLeft = Math.floor(Math.random() * (leftRightMax - leftRightMin) + leftRightMin )
//         let randomTop = Math.floor(Math.random() * (topMax - topMin) + topMin )
//         if (position === "left") {
//             dot.style.left = `${randomLeft}%`;
//         }
//         else if(position === "right") {
//             dot.style.right = `${randomLeft}%`;
//         }
        
//         dot.style.top = `${randomTop}%`;
//     });
// }

// setInterval(()=> colorfulDots(leftDots, "left"), 1000);
// setInterval(()=> colorfulDots(rightDots, "right"), 1000);

// Colorful Dots End


// Create Christmas Timer
function initCountDown(e) {
    let min, sec, hund, secExt, hundExt, startTimer;
    let divCountDown = document.querySelector(".gifts-center-timer-counter");

    Math.floor(e / 60) === 0 ? min = 0 : min = Math.floor(e / 60);
    Math.floor(e % 60 === 0) ? sec = 0 : sec = (e - 60 * min); 

    hund = 0;
    startTimer = setInterval(startCountDown, 1000);

    function startCountDown() {
        hund = hund -1;
        if (hund == 0 && sec == 0 && min == 0) {
            clearInterval(startTimer);
        }
        else if ( hund < 0 && sec > 0) {
            sec = sec -1;
            hund = 60;
        }
        else if (hund < 0 && sec == 0 && min > 0) {
            min = min -1;
            sec = 59;
            hund = 60;
        }
        if (hund == 0 && sec == 0 && min == 3) { // Saat 3 oldugunda duracak ! 
            divCountDown.innerHTML = "Out Time!";
            clearInterval(startTimer);
        }

        else {            
            sec < 10 ? secExt = "0" + sec : secExt = sec;
            hund < 10 ? hundExt = "0" + hund : hundExt = hund;

            divCountDown.innerHTML = "0"+min + " : " + secExt + " : " + hundExt;
        }
    }
}

initCountDown(207);







