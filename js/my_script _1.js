
// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
document.write("2. Создать программу, выполняющую вставку элемента в массив:");
document.write("<br/><br/>");
document.write("Массив до вставки:");
document.write("<br/><br/>");
var colors = ["Red", "Green", "Blue","Celestial", "Prussian", "Iris", "Orchid"];
for (var i=0 ; i < colors.length; i++){
    document.write(i+1 +". " +colors[i] +"<br/>");
}
document.write("<br/><br/>");
var input;
var n;
    while (input !== null) {        
        input = prompt("Введите новый цвет\n Уже есть: \n" + colors.join("\n"));
        n = prompt("Введите порядковый номер цвета после которого хотите вставить новый:");
        colors.splice(n, 0, input);
        break;
    }
    document.write("Массив после вставки:");
    document.write("<br/><br/>");
for (var i=0 ; i < colors.length; i++){
    document.write(i+1 +". " +colors[i] +"<br/>");
}
document.write("<br/><br/>");

// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.
document.write("3. Создать многомерный массив, размер массива получить от пользователя...");
document.write("<br/><br/>");
var n = +prompt("Введите колличество подмассивов:");//Гребанный плюс что бы ты долго жил
var array = new Array(n);
for (var i = 0; i < array.length; i++) {
    array[i] = new Array(3);
    for (var j = 0; j < array[i].length; j++) {
        if (i%2 == 1) {
            array[i][j] = "odd";
        }
        else {
            array[i][j] = "even";
        }
    }
    console.log(array[i]);
}
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br/>");
}
document.write("<br/><br/>");
document.write("<br/><br/>");

// 4. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, во втором - количество игроков в команде / объем двигателя / количество жителей в городе. Объединить данные из двух массивов и вывести их в одну строку. 
document.write("4. Создать два произвольных массива...");
document.write("<br/><br/>");
var teams = ["Miami Dolphins","Seattle Seahawks","Philadelphia Eagles"];
var cars = ["BMW","Audi","Ford"];
var city = ["Киев", "Харьков","Днепропетровск"];
var array1 = [teams,cars,city];
document.write("Массив 1:");
document.write("<br/><br/>");
document.write(array1);
document.write("<br/><br/>");
var players = [32,35,37];
var capacity = [2.5,1.8,2.3];
var population = [1800000,1300000,1400000];
var array2 = [players,capacity,population];
document.write("Массив 2:");
document.write("<br/><br/>");
document.write(array2);
document.write("<br/><br/>");
var array = new Array(array1.length);
for (var n = 0; n < array.length; n++) {
    array[n] = new Array(array1[n].length);
}
for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array1[i].length; j++) {
        array[i][j] = array1[i][j]+":"+array2[i][j]
    }
}
document.write("Общий массив:");
document.write("<br/><br/>");
document.write(array);
document.write("<br/><br/>");
var changedArray = "";
for (var i = 0; i < array.length; i++) {
    changedArray = changedArray + array[i].join("<br/>") + "<br/>";
}
// changedArray.split("<br/>");
document.write("Массив одной строкой с разрывом:");
document.write("<br/><br/>");
document.write(changedArray);

