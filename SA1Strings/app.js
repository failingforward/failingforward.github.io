const input = document.getElementsByTagName('input')[0];
const output = document.getElementsByTagName('div')[0];
const re = /(^[\w '.?!",]+)/gm

async function init (files) {
    if (files.length != 2) return alert('Error. Min/Max 2 files.');
    const arr_text = [
        await readFile(files[0]),
        await readFile(files[1])
    ];
    parse(arr_text);
}

function parse (text) {
    let result;
    let words = [];
    while ((result = re.exec(text[0])) !== null) {
        words.push({
            text: result[1],
            index: result.index
        })
    }
    let arr_end = [];
    for (word of words) {
        let isTrue = text[1].indexOf(word.text);
        if (isTrue != -1) {
            arr_end.push({
                word: word.text,
                pos: [word.index, isTrue]
            });
        }
    }
    print(arr_end);
}

function print (lines) {
    for (line of lines) {
        let div = document.createElement('div');
        div.innerText = `[${line.word}] [${line.pos[0]}, ${line.pos[1]}]`;
        output.appendChild(div);
    }
}

async function readFile (file) {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsText(file);
    });
}