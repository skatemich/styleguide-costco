var transition= document.getElementById('blind');
        setTimeout(function() {
            transition.classList.add('close');
            document.body.style.overflowY= "visible";
        }, 7000);

        setTimeout(function() {
        TweenMax.fromTo(".container", 1.5, {x: -115, display: "none", ease: Power2.easeInOut},{x: 0, display: "flex", ease: Power2.easeInOut});
        }, 6000);


// Product Thumbs
$('.product-thumbs .next').click(function() {
    $('.product-thumbs ul li.current').next().addClass('current');
    $('.product-thumbs ul li.current').prev().removeClass('current');
});

$('.product-thumbs .prev').click(function() {
    $('.product-thumbs ul li.current').prev().addClass('current');
    $('.product-thumbs ul li.current').next().removeClass('current');
});

// Hero Slider
$('.slider .right-arrow').click(function() {
    $('.slider ul li.selected').next().addClass('selected');
    $('.slider ul li.selected').prev().removeClass('selected');
});

$('.slider .left-arrow').click(function() {
    $('.slider ul li.selected').prev().addClass('selected');
    $('.slider ul li.selected').next().removeClass('selected');
});