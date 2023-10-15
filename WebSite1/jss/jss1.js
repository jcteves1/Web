const characterContainers = document.querySelectorAll('.character_container');
const content1 = document.getElementById("content1");
/*let no_clicked = true;*/

window.onload = function () {
    content1.classList.add("start");
};

characterContainers.forEach(container => {
    container.addEventListener('click', () => {
        if (container.classList.contains('play-animation')) {
            content1.classList.remove("fade_out");
            container.classList.remove("fade_in");
            // Container is already playing the animation, so remove the class to reverse it
            container.classList.add('play-animation-reverse');
            container.classList.remove('play-animation');
            setTimeout(function () {
                container.classList.remove('play-animation-reverse');
            }, 1000); //milliseconds
        } else {
            // Container is not playing the animation, so add the class to start it
            content1.classList.add("fade_out");
            characterContainers.forEach(otherContainer => {
                if (otherContainer.classList.contains('play-animation')) {
                    otherContainer.classList.add('play-animation-reverse');
                }
                otherContainer.classList.remove('play-animation');
                otherContainer.classList.remove("fade_in");
                setTimeout(function () {
                    otherContainer.classList.remove('play-animation-reverse');
                }, 1000); 
            });
            container.classList.remove('play-animation-reverse');
            container.classList.add('play-animation');
            setTimeout(function () {
                container.classList.add("fade_in");
            }, 750);
        }
    });
});
  
const gojo = document.getElementById("gojo_container");
const yuji = document.getElementById("yuji_container");
const fushiguro = document.getElementById("fushiguro_container");
const nobara = document.getElementById("nobara_container");

gojo.addEventListener("click", () => {
    gojo.classList.remove("yuji_translate", "yuji_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");
    yuji.classList.remove("yuji_translate", "yuji_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");
    fushiguro.classList.remove("yuji_translate", "yuji_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");
    nobara.classList.remove("yuji_translate", "yuji_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");

    if (gojo.classList.contains("play-animation")) {
        gojo.classList.remove("gojo_reverse");
        gojo.classList.add("gojo_translate");
        yuji.classList.remove("gojo_reverse");
        yuji.classList.add("gojo_translate");
        fushiguro.classList.remove("gojo_reverse");
        fushiguro.classList.add("gojo_translate");
        nobara.classList.remove("gojo_reverse");
        nobara.classList.add("gojo_translate");
    }
    else {
        gojo.classList.add("gojo_reverse");
        gojo.classList.remove("gojo_translate");
        yuji.classList.add("gojo_reverse");
        yuji.classList.remove("gojo_translate");
        fushiguro.classList.add("gojo_reverse");
        fushiguro.classList.remove("gojo_translate");
        nobara.classList.add("gojo_reverse");
        nobara.classList.remove("gojo_translate");
    }
});
yuji.addEventListener("click", () => {
    gojo.classList.remove("gojo_translate", "gojo_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");
    yuji.classList.remove("gojo_translate", "gojo_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");
    fushiguro.classList.remove("gojo_translate", "gojo_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");
    nobara.classList.remove("gojo_translate", "gojo_reverse", "fushiguro_translate", "fushiguro_reverse", "nobara_reverse", "nobara_translate");
    if (yuji.classList.contains("play-animation")) {
        yuji.classList.remove("yuji_reverse");
        yuji.classList.add("yuji_translate");
        gojo.classList.remove("yuji_reverse");
        gojo.classList.add("yuji_translate");
        fushiguro.classList.remove("yuji_reverse");
        fushiguro.classList.add("yuji_translate");
        nobara.classList.remove("yuji_reverse");
        nobara.classList.add("yuji_translate");
    }
    else {
        yuji.classList.add("yuji_reverse");
        yuji.classList.remove("yuji_translate");
        gojo.classList.add("yuji_reverse");
        gojo.classList.remove("yuji_translate");
        fushiguro.classList.add("yuji_reverse");
        fushiguro.classList.remove("yuji_translate");
        nobara.classList.add("yuji_reverse");
        nobara.classList.remove("yuji_translate");
    }
});
fushiguro.addEventListener("click", () => {
    gojo.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "nobara_reverse", "nobara_translate");
    yuji.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "nobara_reverse", "nobara_translate");
    fushiguro.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "nobara_reverse", "nobara_translate");
    nobara.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "nobara_reverse", "nobara_translate");
    if (fushiguro.classList.contains("play-animation")) {
        fushiguro.classList.remove("fushiguro_reverse");
        fushiguro.classList.add("fushiguro_translate");
        yuji.classList.remove("fushiguro_reverse");
        yuji.classList.add("fushiguro_translate");
        gojo.classList.remove("fushiguro_reverse");
        gojo.classList.add("fushiguro_translate");
        nobara.classList.remove("fushiguro_reverse");
        nobara.classList.add("fushiguro_translate");
    }
    else {
        fushiguro.classList.add("fushiguro_reverse");
        fushiguro.classList.remove("fushiguro_translate");
        yuji.classList.add("fushiguro_reverse");
        yuji.classList.remove("fushiguro_translate");
        gojo.classList.add("fushiguro_reverse");
        gojo.classList.remove("fushiguro_translate");
        nobara.classList.add("fushiguro_reverse");
        nobara.classList.remove("fushiguro_translate");
    }
});
nobara.addEventListener("click", () => {
    gojo.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "fushiguro_reverse", "fushiguro_translate");
    yuji.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "fushiguro_reverse", "fushiguro_translate");
    fushiguro.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "fushiguro_reverse", "fushiguro_translate");
    nobara.classList.remove("gojo_translate", "gojo_reverse", "yuji_translate", "yuji_reverse", "fushiguro_reverse", "fushiguro_translate");
    if (nobara.classList.contains("play-animation")) {
        fushiguro.classList.remove("nobara_reverse");
        fushiguro.classList.add("nobara_translate");
        yuji.classList.remove("nobara_reverse");
        yuji.classList.add("nobara_translate");
        gojo.classList.remove("nobara_reverse");
        gojo.classList.add("nobara_translate");
        nobara.classList.remove("nobara_reverse");
        nobara.classList.add("nobara_translate");
    }
    else {
        fushiguro.classList.add("nobara_reverse");
        fushiguro.classList.remove("nobara_translate");
        yuji.classList.add("nobara_reverse");
        yuji.classList.remove("nobara_translate");
        gojo.classList.add("nobara_reverse");
        gojo.classList.remove("nobara_translate");
        nobara.classList.add("nobara_reverse");
        nobara.classList.remove("nobara_translate");
    }
});
    