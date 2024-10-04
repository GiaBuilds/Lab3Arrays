let colors = ["red", "pink", "yellow", "blue", "green"];
console.log(colors);

console.log(colors.at(0));
console.log(colors.at(-1));
console.log(colors.at(2));

console.log(colors.length);

colors.push("red");
console.log (colors);

let color = colors.slice(2, 4);
console.log(color);

colors.push ("brown");
console.log(colors);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

const iterator = colors.entries();
for (let e of iterator) {
    console.log(e);
}

let [firstColor, secondColor] = colors;
console.log(firstColor); 
console.log(secondColor); 