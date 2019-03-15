async function readFileFromURLCORS (url) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            resolve(xhr.response);
        }
        xhr.open('GET', `https://cors-anywhere.herokuapp.com/${url}`, true);
        xhr.send();
    })
}

async function readFileFromURL (url) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            resolve(xhr.response);
        }
        xhr.open('GET', url, true);
        xhr.send();
    })
}

async function readFile (file) {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsText(file);
    })
}

function hideLoading () {
    let div = document.getElementById('status');
    div.style.display = 'none';
}