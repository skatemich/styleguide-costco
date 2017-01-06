// ===== ScrollMagic & TweenMax =====

// init controller
var controller = new ScrollMagic.Controller();


// ====================================
// ===== ScrollMagic Template =====

// var NameMe = TweenMax.from("select your target by ID/Class", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

// var scene = new ScrollMagic.Scene({
//           triggerElement: "select your trigger by ID/Class",
//           offset: -200,
//         })
//         .setTween(NameMe)
//         // .addIndicators({name: "layout_1_Show"}) // add indicators (requires plugin)
//         .addTo(controller);

// ===== ScrollMagic Template End =====
// ====================================







// ===== Logo Section ScrollMagic =====

var logo_1_Show = TweenMax.from("#logo_greetings", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    logo_2_Show = TweenMax.from("#logo_padding", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

var scene = new ScrollMagic.Scene({
          triggerElement: "#logo_greetings",
          offset: -200,
        })
        .setTween(logo_1_Show)
        // .addIndicators({name: "layout_1_Show"}) // add indicators (requires plugin)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#logo_padding",
          offset: -250,
        })
        .setTween(logo_2_Show)
        // .addIndicators({name: "layout_1_Show"}) // add indicators (requires plugin)
        .addTo(controller);


// ===== Layout Section ScrollMagic =====

var layout_1_Show = TweenMax.from(".layout_mixing", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    layout_2_Show = TweenMax.from(".layout_nesting", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    layout_3_Show = TweenMax.from("#layout_desktop", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    layout_4_Show = TweenMax.from("#layout_mobile", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    layout_5_Show = TweenMax.from("#layout_tablet", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

var scene = new ScrollMagic.Scene({
          triggerElement: ".layout_mixing",
          offset: -200,
        })
        .setTween(layout_1_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: ".layout_nesting",
          offset: -200,
        })
        .setTween(layout_2_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#layout_desktop",
          offset: -200,
        })
        .setTween(layout_3_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#layout_mobile",
          offset: -200,
        })
        .setTween(layout_4_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#layout_tablet",
          offset: -200,
        })
        .setTween(layout_5_Show)
        .addTo(controller);

// ===== Imagery Section ScrollMagic =====

var imagery_1_Show = TweenMax.from("#imagery-typograhpy", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    imagery_2_Show = TweenMax.from("#imagery-banner", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    imagery_3_Show = TweenMax.from("#imagery-call-out", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

var scene = new ScrollMagic.Scene({
          triggerElement: "#imagery-typograhpy",
          offset: -200,
        })
        .setTween(imagery_1_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#imagery-banner",
          offset: -200,
        })
        .setTween(imagery_2_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#imagery-call-out",
          offset: -200,
        })
        .setTween(imagery_3_Show)
        .addTo(controller);