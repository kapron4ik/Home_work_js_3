// 1. Сделать собственные примеры методов применяемых для массивов.
document.write("1. Сделать собственные примеры:");
document.write("<br/><br />");
document.write("<br/><br />");
// 1.1. Join:
document.write("1.1. Join:");
document.write("<br/><br />");
var colors = ["Red", "Green", "Blue"];
document.write(colors);
document.write("<br/><br />");
var changedArray = colors.join(" / ");
document.write(changedArray);
document.write("<br/><br />");
var newColors = changedArray.split(" / ");
document.write(newColors);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.1. Concat:
document.write("1.1. Concat:");
document.write("<br/><br />");
var coolColors = ["Green", "Blue", "Violet"];
document.write(coolColors);
document.write("<br/><br />");
var warmColors = ["Red", "Yellow", "Orange"];
document.write(warmColors);
document.write("<br/><br />");
colors = coolColors.concat(warmColors);
document.write(colors);
document.write("<br/><br />");
coolColors = coolColors.concat("Azure","Cobalt");
document.write(coolColors);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.2. Reverse:
document.write("1.2. Reverse:");
document.write("<br/><br />");
colors = colors.reverse();
document.write(colors);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.3. Slice:
document.write("1.3. Slice:");
document.write("<br/><br />");
newColors = colors.slice(1, 4);     
document.write("array after slice(1,4): " + newColors);
document.write("<br/><br />");
newColors = colors.slice(4); 
document.write("array after slice(4): " + newColors);
document.write("<br/><br />");
newColors = colors.slice(1, -2);
document.write("array after slice(1, -2): " + newColors);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.4. Splice:
document.write("1.4. Splice:");
document.write("<br/><br />");
var del = colors.splice(1, 3); 
document.write("Удалены: " + del);
document.write("<br/><br />");
document.write("Остались: " + colors);
document.write("<br/><br />");
colors.splice(1, 0, "Bottle", "Forest", "Lime");
document.write("После вставки: " + colors);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.5. Sort:
document.write("1.5. Sort:");
document.write("<br/><br />");
colors.sort();
// colors.sort(function (a, b) { return a - b; });
document.write("Array after sorting: " + colors);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.6. Push:
document.write("1.6. Push:");
document.write("<br/><br />");
newColors = colors.push("Celestial", "Prussian", "Iris", "Orchid");
document.write("После добавления: " + colors);
document.write("<br/><br />");
document.write("Размер массива: " + newColors);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.7. Pop:
document.write("1.7. Pop:");
document.write("<br/><br />");
var deletedElement = colors.pop();
document.write("Массив после удаления: " + colors);
document.write("<br/><br />");
document.write("Размер массива: " + colors.length);
document.write("<br/><br />");
document.write("Удаленный элемент: " + deletedElement);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.8. Unshift:
document.write("1.8. Unshift:");
document.write("<br/><br />");
newColors = colors.unshift("Orchid");
document.write("Массив после добавления Orchid: " + colors);
document.write("<br/><br />");
document.write("Размер нового массива: " + newColors + " и первый элемент - " + colors[0]);
document.write("<br/><br />");
document.write("<br/><br />");

// 1.9. Shift:
document.write("1.9. Shift:");
document.write("<br/><br />");
var delete_value = colors.shift();
document.write("Массив после удаления: " + colors);
document.write("<br/><br />");
document.write("Удаленное значение: " + delete_value);
