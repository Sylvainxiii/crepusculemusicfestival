import "./EncartDate.css";

const EncartDate = () => {

    const encart = document.createElement('div');
    encart.classList.add("encart-date", "flex-row", "center", "absolute");
    const texteEncart = document.createElement('div');
    texteEncart.textContent = "O8 mars 2O25 - ALBI";
    encart.appendChild(texteEncart);

    return encart
}

export default EncartDate;