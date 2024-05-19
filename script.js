// Whenever the mouse will get move anywhere in the entire screen
// Here, "dets" means, whenever mouse event is getting performed, dets stores all the information,
// of what all events is getting happened
// dets.x => means, point in x-axis where my mouse pointer is currently at
// i.e. how far it is from the left side
// dets.y => means, point in y-axis where my mouse pointer is currently at
// i.e. how far it is from the top

const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scrollers: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

        // scrub - means I want these animation to be in repeat
        // Let's say, here, when I will scroll up i.e when i am moving top to -10%, at that time changes are
        // getting reflected
        // But, when I come back to the normal position again, then these changes should get remove
        // And, our nav should get back with the original design properties

        // start = means, at these point animation will get start building
        // end = means, at these point, animation will get build up
        // Between start and end, animation will be in the building phase
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scrollers: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: true
    }
})