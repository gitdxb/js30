/*Adding attribute to a element */
const CTA = document.querySelector("a");

if (CTA.hasAttribute("target")) {
    console.log(CTA.getAttribute("target"));
} else {
    CTA.setAttribute("target", "_blank");
}
console.log(CTA.attributes);


// adding figcaption to img element
const FEATURE = document.querySelector(".feature-image");
const THEIMAGE = FEATURE.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);
// or: captionElement.append(altText);

FEATURE.appendChild(captionElement);

THEIMAGE.setAttribute("alt", "");

// toggle the button
const CTABUTTON = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTABUTTON.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    // after click the page stay the same without scrolling up
    e.preventDefault();

    CTABUTTON.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTABUTTON.addEventListener("click", reveal, false);
CTABUTTON.addEventListener("click", function () { console.log("The button was clicked!") }, false);

