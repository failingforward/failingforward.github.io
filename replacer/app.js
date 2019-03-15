const reText = />([\w\S\s]*?)</;
const reTag = /<([\w]+):(.*?)>/g;

async function main (file) {
    let text = await readFile(file);
    console.log(file);
    let result;
    while ((result = reTag.exec(text)) !== null) {
        text = text.replace(result[0], `{${result[1]}: ${result[2].replace(/,/g, ' ')}}`);
    }
    text = text.replace(/bganimcolor/g, '0x6b');
    text = text.replace(/court_record_button/g, '0x26');
    text = text.replace(/scrolling/g, '0x1d');
    text = text.replace(/typing_sound/g, '0x30');
    text = text.replace(/text_align/g, 'center_text');
    text = text.replace(/</g, '{');
    text = text.replace(/>/g, '}');
    text = text.replace(/\[/g, '{{');
    text = text.replace(/]/g, '}}');
    text = text.replace(/\{noop\}/g, '{bop}');
    text = text.replace(/\{56\}/g, 'ь');
    text = text.replace(/\{384\}/g, '-');
    text = text.replace(/\{395\}/g, 'ё');
    let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, file.name);
    console.log(text);
}