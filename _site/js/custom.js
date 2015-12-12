// https://github.com/headjs/headjs
head.ready(function() {
    // https://github.com/hakimel/reveal.js#keyboard-bindings
    Reveal.configure({
        keyboard: {
            // Go to the next slide when the `R` key is pressed
            82: "next",
            72: function () {
                // Add `action-video` class to each `video` tag
                $(".overlay-modal").remove();
                $("div.reveal").append(
                    '<div class="overlay overlay-modal visible" id="help">\
                        <header><a class="close" href="#"><span class="icon"></span></a></header>\
                        <div class="viewport"><div class="viewport-inner"><p class="title">Help</p>\
                        <br>\
                        <p></p>\
                        </div></div>\
                    </div>');
                // Link back to the slide
                $("a.close").attr("href", "#/");
                // Remove modal windows
                $(".close").on("click", function() {
                    $("div.overlay").remove();
                });
            }
        }
    });
});
