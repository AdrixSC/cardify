const imagesContainer = document.getElementById("gallery");
const arrayImages = Array.from(imagesContainer.getElementsByTagName("img"));
console.log(arrayImages[1].alt);

const replaceAndAdd = element => {
    let arrayImages = Array.from(element)
    console.log("array", arrayImages);
};
console.log("contenedor", imagesContainer);

replaceAndAdd(imagesContainer);
