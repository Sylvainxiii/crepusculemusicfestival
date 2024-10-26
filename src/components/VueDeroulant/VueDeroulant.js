import "./VueDeroulant.css";

const VueDeroulant = (contenuVisible, contenuCache, id) => {
    const deroulant = document.createElement("div");
    deroulant.className = "deroulant";
    deroulant.id = id;

    const divVisible = document.createElement("div");
    divVisible.className = "deroulant-visible";
    divVisible.textContent = contenuVisible;
    deroulant.appendChild(divVisible);

    const divCache = document.createElement("div");
    divCache.className = "deroulant-cache";
    divCache.innerHTML = contenuCache;
    deroulant.appendChild(divCache);



    deroulant.addEventListener('click', () => {
        if (divCache.classList.contains("deroule")) {
            divCache.style.height = 0 + 'px';
            divCache.style.marginBottom = 0 + 'em';
            divCache.classList.remove("deroule");
        } else {
            let divCacheHeight = divCache.scrollHeight;
            divCache.style.height = divCacheHeight + 'px';
            divCache.style.marginBottom = 2 + 'em';
            divCache.classList.add("deroule");
        }
    })

    return deroulant;
}

export default VueDeroulant;