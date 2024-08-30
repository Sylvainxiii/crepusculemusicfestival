import "./VueContainer.css";

const VueContainer = () => {
    const vueContainer = document.createElement('div');
    vueContainer.classList.add("vue-container", "relative", "flex-column");

    return vueContainer;
}

export default VueContainer;