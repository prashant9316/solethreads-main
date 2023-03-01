const logoSection = document.getElementById('logo-section')
const linkSection = document.getElementById('nav-links')
let counter = 0;
$(document).ready(function(){
    $('.btn').click(function(){
        $('.nav-links').slideToggle(2000);
        console.log(counter);
        if(counter % 2 == 0){
            linkSection.style.backgroundColor = '#02405F';
            logoSection.style.backgroundColor = '#02405F';
        } 
        else {
            console.log("Setting bg color to none")
            setTimeout(() => {
                linkSection.style.background = 'none';
                logoSection.style.background = 'none';
            }, 2000)
            
        }
        counter+=1;
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
                // linkSection.style.backgroundColor = 'none';

                linkSection.style.transition = '1s ease';
                
                // linkSection.style.background = '#02405F';
            }
        }
        else{
            $('nav,nav-container').removeClass('navBackground')
            if(window.innerWidth >= 992){
                logoSection.style.display = 'flex';
                // linkSection.style.backgroundColor = '#02405F';
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