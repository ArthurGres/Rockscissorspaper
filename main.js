let userValue = Number(prompt("Введите число от одного до трех, где 1 - камень, 2 ножницы, 3 - бумага"))
let progValue = Math.ceil(Math.random() * 3)
alert(`Робот выбирает число ${progValue}`)
if (userValue === 1 && progValue > 1 || userValue === 2 && progValue === 3) {
    alert("Победа!")
}
else if (userValue === 3 && progValue < 3 || userValue === 2 && progValue === 1) {
    alert("Поражение!")
} else {
    alert("Ничья!")
}



