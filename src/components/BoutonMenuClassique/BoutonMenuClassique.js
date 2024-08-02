import "./BoutonMenuClassique.css";

const BoutonMenuClassique = () => {

    const boutonMenu = document.createElement('div');
    boutonMenu.classList.add("hamburger", "fixed");

    for (let i = 0; i < 4; i = i + 1) {
        let bar = document.createElement('span');
        bar.className = "bar";
        bar.id = ("bar" + (i + 1));
        boutonMenu.appendChild(bar);
    }

    let btnActivate = false;

    boutonMenu.addEventListener('click', function () {
        let menu = document.getElementById("menu");
        let bar1 = document.getElementById("bar1");
        let bar2 = document.getElementById("bar2");
        let bar3 = document.getElementById("bar3");
        let bar4 = document.getElementById("bar4");

        if (btnActivate == false) {

            bar1.style.translate = "2.5em";
            bar1.style.backgroundColor = "transparent";
            bar1.style.boxShadow = "none";

            bar2.style.transform = 'rotate(45deg)';
            bar2.style.boxShadow = "var(--bouton-menu-classique-shadow)";

            bar3.style.transform = 'rotate(-45deg)';
            bar3.style.boxShadow = "var(--bouton-menu-classique-shadow)";

            bar4.style.translate = "-2.5em";
            bar4.style.backgroundColor = "transparent";
            bar4.style.boxShadow = "none";

            menu.style.top = 0;
            menu.classList.replace("absolute", "fixed");

            btnActivate = true
        } else {
            bar1.style.translate = "0";
            bar1.style.backgroundColor = "var(--bouton-menu-classique-color)";
            bar1.style.boxShadow = "var(--bouton-menu-classique-shadow)";

            bar2.style.transform = 'rotate(0deg)';
            bar2.style.boxShadow = " var(--bouton-menu-classique-shadow-midrange)";

            bar3.style.transform = 'rotate(0deg)';
            bar3.style.boxShadow = " var(--bouton-menu-classique-shadow-midrange)";

            bar4.style.translate = "0";
            bar4.style.backgroundColor = "var(--bouton-menu-classique-color)";
            bar4.style.boxShadow = "var(--bouton-menu-classique-shadow)";

            menu.style.top = "-102vh";
            menu.classList.replace("fixed", "absolute");

            btnActivate = false
        }

    })

    return boutonMenu;
}

export default BoutonMenuClassique;