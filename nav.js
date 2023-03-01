const logoSection = document.getElementById('logo-section')
const linkSection = document.getElementById('nav-links')

$(document).ready(function(){
    $('.btn').click(function(){
        $('.nav-links').slideToggle(2000);
        //for the button effect
        $('.btn').toggleClass('change');
    })
    //transparent nav background
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if (position >=100){
            $('nav,nav-container').addClass('navBackground')
            if(window.innerWidth >= 992){
                logoSection.style.display = 'none'
                logoSection.style.transition = '1s ease';
                // linkSection.style.background = '#02405F';
                linkSection.style.transition = '1s ease';

            }
        }
        else{
            $('nav,nav-container').removeClass('navBackground')
            if(window.innerWidth >= 992){
                logoSection.style.display = 'flex';
                // linkSection.style.background = 'none';
            }
        }
    })
})



window.addEventListener("resize", reportWindowSize);

const reportWindowSize = () => {
    console.log("Event listening to change in window")
    console.log(window.innerWidth)
}
// document.getElementById('logo-section').addEventListener('')