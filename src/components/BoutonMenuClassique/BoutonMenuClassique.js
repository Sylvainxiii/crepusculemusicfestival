import "./BoutonMenuClassique.css";

const BoutonMenuClassique = () => {

    const boutonMenu = document.createElement('div');
    boutonMenu.classList.add("hamburger");

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
            bar1.style.backgroundColor = "rgba(255, 255, 255, 0)";
            bar1.style.boxShadow = "none";
            bar2.style.transform = 'rotate(45deg)';
            bar3.style.transform = 'rotate(-45deg)';
            bar4.style.translate = "-2.5em";
            bar4.style.backgroundColor = "rgba(255, 255, 255, 0)";
            bar4.style.boxShadow = "none";
            menu.style.top = 0;
            menu.style.position = "fixed";
            btnActivate = true
        } else {
            bar1.style.translate = "0";
            bar1.style.backgroundColor = "rgba(255, 255, 255, 1)";
            bar1.style.boxShadow = "0 0 0.2em 0.1em rgba(40, 187, 194, 0.7)";
            bar2.style.transform = 'rotate(0deg)';
            bar3.style.transform = 'rotate(0deg)';
            bar4.style.translate = "0";
            bar4.style.backgroundColor = "rgba(255, 255, 255, 1)";
            bar4.style.boxShadow = "0 0 0.2em 0.1em rgba(40, 187, 194, 0.7)";
            menu.style.top = "-102vh";
            menu.style.position = "absolute";
            btnActivate = false
        }

    })

    return boutonMenu;
}

export default BoutonMenuClassique;