import "./BoutonMenuClassique.css";

const BoutonMenuClassique = () => {

    const boutonMenu = document.createElement('div');
    boutonMenu.classList.add("hamburger", "fixed");

    for (let i = 0; i < 4; i = i + 1) {
        const bar = document.createElement('span');
        bar.classList.add("bar", "absolute", "block");
        bar.id = `bar${i + 1}`;
        boutonMenu.appendChild(bar);
    }

    let btnActivate = false;

    boutonMenu.addEventListener('click', function () {
        const menu = document.getElementById("menu");
        const bars = boutonMenu.querySelectorAll('.bar');

        if (!btnActivate) {

            bars[0].classList.add('translate-right');
            bars[1].classList.add('rotate-45');
            bars[2].classList.add('rotate-minus-45');
            bars[3].classList.add('translate-left');

            menu.style.top = 0;
            menu.classList.replace("absolute", "fixed");

            btnActivate = true
        } else {
            bars[0].classList.remove('translate-right');
            bars[1].classList.remove('rotate-45');
            bars[2].classList.remove('rotate-minus-45');
            bars[3].classList.remove('translate-left');

            menu.style.top = "-102vh";
            menu.classList.replace("fixed", "absolute");

            btnActivate = false
        }

    })

    return boutonMenu;
}

export default BoutonMenuClassique;