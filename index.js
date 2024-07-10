document.addEventListener("DOMContentLoaded", function() {
    var pics_src1 = ["PP_1.png", "PP_2.png", "PP_3.png"];
    var num1 = -1;

    function premiereProSlideshow() {
        if (num1 == 2) {
            num1 = 0;
        } else {
            num1++;
        }
        document.getElementById("pic1").src = pics_src1[num1];
        setTimeout(premiereProSlideshow, 4000);
    }
    premiereProSlideshow();

    var pics_src2 = ["AE_1.png", "AE_2.png", "AE_3.png"];
    var num2 = -1;

    function afterEffectsSlideshow() {
        if (num2 == 2) {
            num2 = 0;
        } else {
            num2++;
        }
        document.getElementById("pic2").src = pics_src2[num2];
        setTimeout(afterEffectsSlideshow, 4000);
    }
    afterEffectsSlideshow();
});
