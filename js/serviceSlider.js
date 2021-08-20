const serviceRadio = document.getElementById("service-radio");
const serviceSlider = document.getElementById("service-slider");

const serviceInit = () => {
    selectServiceRadio(serviceRadio.children[0], 0);
    for (let i = 0; i < serviceRadio.children.length; i++) {
        let element = serviceRadio.children[i];
        element.addEventListener('click', () => selectServiceRadio(element, i));
    }
}

const selectServiceRadio = (element, id)  =>{
    for (let i = 0; i < serviceRadio.children.length; i++) {
        let radio = serviceRadio.children[i];
        let slider = serviceSlider.children[i];
        radio.classList.remove('active');
        slider.classList.replace('flex','hidden');
    }
    element.classList.add("active");
    serviceSlider.children[id].classList.replace("hidden", "flex");
}

serviceInit();