let index = 0;
const totalWorkItme = $(".work-items").length;
console.log("the work item length = " + totalWorkItme);
$(window).on("load", function() {
    $(".preloader").addClass("loaded");
})
$(document).ready(function() {

    // Fixed header 
    $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $(".header").addClass("fixed")
            } else {
                $(".header").removeClass("fixed")
            }
        })
        // set light-box img max height 
    const wHeight = $(window).height();
    console.log(wHeight);
    $(".light-box-img").css(
        "max-height", wHeight + "px"
    );
    // light-box
    $(".work-item-inner").click(function() {
        index = $(this).parent(".work-items").index();

        $(".light-box").addClass("open");
        lightboxslideshow();
    })

    // light box navigation 

    $(".light-box .prev").click(function() {
        if (index == 0) {
            index = totalWorkItme - 1;
        } else {
            index--;
        }
        lightboxslideshow()
    })
    $(".light-box .next").click(function() {
            if (index == totalWorkItme - 1) {
                index = 0;
            } else {
                index++;
            }
            lightboxslideshow()
        })
        // light box close
    $(".light-box-close").click(function() {
            $(".light-box").removeClass("open");
        })
        // light box close when clicked outside 
    $(".light-box").click(function(event) {
        if ($(event.target).hasClass("light-box")) {
            $(this).removeClass("open");
        };
    })
})


function lightboxslideshow() {

    const imgSrc = $(".work-items").eq(index).find("img").attr("data-large");
    console.log(imgSrc);
    const category = $(".work-items").eq(index).find("h4").html();
    $(".light-box-img").attr("src", imgSrc);
    $(".light-box-category").html(category);
    $(".light-box-counter").html(totalWorkItme + "/" + (index + 1))
}

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Responsive // 

$(document).ready(function() {
    // clicking on menu button 
    $(".nav-toggle").click(function() {
        $(".header .nav").slideToggle(30);
        console.log("worked");
    })
    $(".header .nav a").click(function() {
        if ($(window).width() < 768) {
            $(".header .nav").slideToggle(30);
        }
    })
});