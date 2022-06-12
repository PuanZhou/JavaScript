
let str = `<table class="tb1">`;

for (let i = 2; i < 10; i++) {
    str += `<tr>`;
    for (let j = 1; j < 10; j++) {
        str += `<td>${i} x ${j} = ${i * j}<td><br>`;
    }
    str += `</tr>`;
}
str+=`</table>`;

document.getElementById("table").innerHTML+=str;