export function getFileContent(el, file) {

    fetch(file)
        .then((response) => response.text())
        .then((text) => {
            el.innerText = (text);
        })
        .catch((e) => console.error(e));
}


