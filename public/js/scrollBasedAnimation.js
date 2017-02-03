// ===== ScrollMagic & TweenMax =====

// init controller
var controller = new ScrollMagic.Controller();


// ===== Logo Section ScrollMagic =====

var logo_1_Show = TweenMax.from("#logo_greetings", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    logo_2_Show = TweenMax.from("#logo_padding", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

var scene = new ScrollMagic.Scene({
          triggerElement: "#logo_greetings",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(logo_1_Show)
        // .addIndicators({name: "layout_1_Show"}) // add indicators (requires plugin)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#logo_padding",
          triggerHook: 'onEnter',
          offset: -50,
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
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(layout_1_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: ".layout_nesting",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(layout_2_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#layout_desktop",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(layout_3_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerHook: 'onEnter',
          offset: -50,          triggerElement: "#layout_mobile",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(layout_4_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#layout_tablet",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(layout_5_Show)
        .addTo(controller);

// ===== Imagery Section ScrollMagic =====

var imagery_1_Show = TweenMax.from("#imagery-typograhpy", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    imagery_2_Show = TweenMax.from("#imagery-banner", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    imagery_3_Show = TweenMax.from("#imagery-call-out", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

var scene = new ScrollMagic.Scene({
          triggerElement: "#imagery-typograhpy",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(imagery_1_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#imagery-banner",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(imagery_2_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#imagery-call-out",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(imagery_3_Show)
        .addTo(controller);

// ===== Controls Section ScrollMagic =====

var controls_1_Show = TweenMax.from("#controls-refresh", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut}),
    controls_2_Show = TweenMax.from("#controls-primary-btns", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})
    controls_3_Show = TweenMax.from("#controls-marketing-btns", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})
    controls_4_Show = TweenMax.from("#controls-hero", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})
    controls_5_Show = TweenMax.from("#controls-tiles", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

var scene = new ScrollMagic.Scene({
          triggerElement: "#controls-refresh",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(controls_1_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#controls-primary-btns",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(controls_2_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#controls-marketing-btns",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(controls_3_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#controls-hero",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(controls_4_Show)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: "#controls-tiles",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(controls_5_Show)
        .addTo(controller);

// ===== typography Section ScrollMagic =====

var typographyS1 = TweenMax.from("#typograpgymosaic", 0.5, {y: 100, opacity: 0, ease: Power2.easeInOut})

var scene = new ScrollMagic.Scene({
          triggerElement: "#typograpgymosaic",
          triggerHook: 'onEnter',
          offset: -50,
        })
        .setTween(typographyS1)
        //.addIndicators({name: "layout_1_Show"}) // add indicators (requires plugin)
        .addTo(controller);

