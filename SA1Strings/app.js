const input = document.getElementsByTagName('input')[0];
const output = document.getElementsByTagName('div')[0];
const re = /(^[\w '.?!",\n]+)/gm

async function init (files) {
    if (files.length != 2) return alert('Error. Min/Max 2 files.');
    const arr_text = [
        await readFile(files[0]),
        await readFile(files[1])
    ];
    parse(arr_text);
}

function parse (text) {
    let first_lines = text[0].split('\n');
    let second_lines = text[1].split('\n');
    let lines = [];
    let print_lines = [];
    for (let i = 0; i < first_lines.length; i++) {
        for (let j = 0; j < second_lines.length; j++) {
            if (first_lines[i] == second_lines[j])
                lines.push({
                    word: first_lines[i],
                    pos: [i + 1, j + 1]
                });
        }
    }
    for (line of lines) {
        if (line.word.indexOf('=') == -1 && line.word.length > 1)
            print_lines.push(line);
    }
    print(print_lines);
}

function print (lines) {
    for (line of lines) {
        let div = document.createElement('div');
        div.innerText = `[${line.word.slice(0, line.word.length - 1)}] [${line.pos[0]}, ${line.pos[1]}]`;
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