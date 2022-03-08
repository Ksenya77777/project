// let a = prompt("ченить определенно надо написать")

// alert("ks");
// let message = confirm("хотите на бали?")
// console.log(message)
// if (message) {
//     alert("тогда мы идем к вам");
// } else {
//     alert("ну как хотите")
// }


// let date = prompt("введите свой возраст");
// date = Math.floor(date) + 10;
// alert("вы старше чем я думал вам уже " + date)

// let date = prompt("введите свой возраст")
// date=Math.floor(date)+10;
// alert("вы старше чем я думал"+date)
// let date = prompt("сколько вы хотите путевок на бали?")
// date = Math.floor(date)
// if (date <= 2 && date != 0) {
//     alert("заберайте дарю")
// } else if (date > 2) {
//     alert("слишком много хочеться")
// } else {
//     alert("ну как хотите")
// }

// let a = prompt("введите первое значение")
// a = Math.floor(a)
// let b = prompt("введите второе значение")
// b = Math.floor(b)
// let operation = prompt("введите название операции")
// if (operation === "+"){
//     alert(a+b);
// } else if (operation ==="-"){
//     alert(a-b);
// } else {
//     alert("мы поддерживаем сложение и вычитание")
// }

// let number = prompt("введите число:)");
// number = Math.floor(number);
// if (number === 10) {
//     alert("верно");
// } else if (number !== 10) {
//     alert("ннее веерно!!!!")
// }

// &&
// ||
// <=
// >=
// <
// >
// ===
// !==


// let number = prompt("введите число:)");
// number = Math.floor(number);
// if (number === 10) {
//     alert("верно");
// } else {
//    alert("ннее веерно!!!!")
// }

// let name = prompt( "Как вас зовут?");
// alert (" Добро пожаловать " + name);

// let age = prompt("Вам есть 18? Укажите свой возраст в поле!");
//  age = Math.floor(age);
// if ( age >= 18){
//     alert("добро пожаловать");
// } else if (age <18 ){
//     alert("Вам запрещено тут находится");
// }

// let km = prompt("введите кол во км которые хотите проехать");
// km = Math.floor(km);
// console.log(km, "километры")
// let kml = prompt("сколько киломметров человечешка проезжаешь на 1 литрушке");
// kml = Math.floor(kml);
// console.log(kml, "сколько проезжает");
// let priceOneLiter = prompt("цена одного литра");
// priceOneLiter = Math.floor(priceOneLiter);
// console.log(priceOneLiter, "цена литра");
// let liter = km/kml;
// let price = liter*priceOneLiter;
// let money = prompt("Ведите сумму которая есть на расходы")
// money = Math.floor(money);
// console.log(money, "ваши деньги")
// if (money>=price){
//     alert("вы приедите!");
// }else{
//     alert("вы не приедите!");
// }

// let a;
// console.log(a);
// a=10;
// console.log(a);
// a = prompt();
// console.log(a);
// a = prompt();
// console.log(a);
// a = 10/5;
// console.log(a);
// a = a+a;
// console.log(a);

// let min = 10;
// if (min>=0 && min <=14 ){
//     console.log("первая часть")
// }
// if (min>=15 && min <=30){
//     console.log("вторая часть")
// }
// if ( min>=31 && min <=45){
//     console.log("третья часть")
// }
// if ( min>=46 && min <=59) {
//     console.log("четвертая часть")
// }
//
// let a = 1;
// if (a===0){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
//
// a = 1;
// if (a>0){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
//
// a = 1;
// if (a<0){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
//
// a=1;
// if (a>=0){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
//  a=1;
// if (a<=0){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
//  a=1;
// if (a!==0){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
//
//  a ="test";
// if ("test" === a){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
//
//  a = 1;
// if (1 === a){
//     console.log("Верно")
// } else {
//     console.log('Неверно');
// }
// let a = 1; //number
// let b = "1"; //string
// console.log(a==b)
// console.log(a===Number(b))
// console.log("dsgfg" == a)
//
// console.log(a===b)
//
// let d;
// console.log(d)
// d = null;
// console.log(d)

// let a = 0;
// while(a<10) {
//     a=a+1;
//     console.log("не переживай я тебе рад")
// }
// console.log("happy end")
//
// let a = 0;
// while(a<7) {
//     a=a+1;
//     console.log("котейки бояться огурчиков")
// }

// console.log("katy")

// const containerFly = 20;
// const containerClient = 110;
// const priceOneFly = 10000;
// const moneyClient = 120000;
// let fly = 0;
// let remainderContainer = containerClient; //сколько нужно перевести
// let remainderMoneyClient = moneyClient; // сколько осталось денег у клиента
// while (remainderMoneyClient>= priceOneFly && remainderContainer>0) {
//     remainderMoneyClient = remainderMoneyClient - priceOneFly;
//     if (fly % 2 === 0) {
//         remainderContainer = remainderContainer - containerFly;
//     }
//     fly = fly +1;
// }
// if (remainderMoneyClient < 0) {
//     console.log("а бабки то не вечные ")
//     console.log(remainderContainer, "осталось перевести")
//     console.log(fly, "совершенно полетов")
// } else {
//     console.log(fly, "совершенно полетов")
//     console.log("ура все перевезли")
// }


// let a = 0;
// while (a<=10){
//     console.log(a)
//     a = a + 2;
// }

// let a = 1;
// while (a<10){
//     a= a+1;
//     console.log("доброе утро")
// }
// let a = 0;
// while (a<5){
//     a++
//     console.log("доброе утро")
//
// }

// let a = 1;
//  while (a<=10) {
//      console.log(a)
//      a = a + 2;
//  }

// let a = 1;
// while ( a <= 10){
//     a = a + 1;
//     if (a % 3 === 0) {
//         console.log(a);
//     } else {
//         console.log("не делятся");
//     }
// }
// let a = 1;
// while (a<=10){
//     a++
//     if ( a%3===0){
//         console.log(a)
//     }else {
//         console.log("не выполняется")
//     }
// }

//
// let arab = 0;
// let a = 1;
// while (a<=6){
//     a = a+1;
//     console.log(" alladin ")
//     arab++;
// }

// if (arab === 6) {
//     console.log("арабская ноооочьь")
// }
// let a = 5;
// while (a<=16){
//     if(a % 4 === 0) {
//         console.log(a)
//     }
//     a=a+1;
// }
// console.log(a)


// for (let a = 5; a<=16; a++){
//     if (a%4 ===0){
//         console.log(a);
//     }
// }

// for (let a = 4; a<=18; a++){
//     if (a % 3 !==0){
//         console.log (a);
//     }
// }

// for ( let a = 5; a<=15;a++){
//     if ( a % 3 !==0){
//         console.log(a)
//     }
// }

// for ( let a=3; a<=12; a=a+3){
//     console.log (a);
// }

// for ( let i=5; i<=15; i+=3){
//     console.log(i);
// }
// let a = 4;
// while (a<=18){
//     if(a % 3 !==0) {
//         console.log(a)
//     }
//     a=a+1;
// }
// let a = 3;
// while (a<=12){
//     console.log(a)
//     a=a+3
// }

// let a = 100;
// while (a>0){
//         console.log(a)
//
//     a=a-1;
// }
// for ( let a=100; a>0; a--){
//     console.log (a);
// }

//const a = [1, 5, 10, 32372, 4, 2034];
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])
// a[0]= 10;
// console.log(a[0])
// console.log(a[3])
// a[3]=16;
// console.log(a[3])
// a[0]=24;
// console.log(a[0])
// const b = [ "первая", "вторая", "третья", "четвертая", "вторая", "вторая", "вторая"];
// console.log(b[0])
// console.log(b[1])
// console.log(b[2])
// console.log(b[3])
// console.log(b[4])
// console.log(b[3]);
// console.log(b.length)
// let i = 0;
// while (i < b.length){
//     console.log(b[i])
//     i=i+1
// }
// const b = ["я", "ты", "вы", "он", "они", "оно"]
// console.log(b[0])
// console.log(b[1])
// console.log(b[2])
// console.log(b[3])
// console.log(b[4])
// console.log(b[5])
// let i =0;
// while (i<b.length){
//     console.log(b[i])
//     i=i+1
// }

// for (let i=0; i<b.length; i++){
//     console.log(b[i])
// }
// for (let i = 0; i<b.length;i++){
//     console.log(b[i])
// }
//
// for (let i = 0; i < b.length; i++) {
//     if (i % 2 === 0) {
//         b[i] = "вылехло"
//     }
// }
//
// for (let i=0; i<b.length; i++){
//     console.log(b[i])
// }
// const array = ["вверх", "вниз", "вверх", "вправо", "вверх", "вверх"]
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])
// let a=0;
// while (a<=5){
//     if(array[a] === "вверх") {
//         console.log(a)
//     }
//     a=a+1;
// }
// for ( let a = 0; a<=5; a++){
//     if (array[a]==="вправо"){
//         console.log(a)
//     }
// }
// for (let a = 0; a <= 5; a++) {
//     if (array[a] === "вверх") {
//
//     console.log(a)
//     }
// }


// let a = 10;
// while (a>=0){
//     console.log(a);
//     a--;
// }
// for (let a = 10;a>=0; a--){
//     console.log(a)
// }

// const array = [5, 3, 10, 2]
//
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
// }
// console.log(sum);


// TODO начало

// let a;
// a = 0;
// a++; //a = a+1;
// a+=10; // a = a +10
// a/=10; // a = a/10
// a-=10; // a = a - 10;
// a*=10; // a = a * 10;
// a--; // a = a - 1;
// a%=2 // a = a % 2; // выучить разницу остатка от деления и деления
// &&
// ||
// while(условие){
//     код который зацикливаеться
// }
// for(let i = 0; условие; i++){
//     код который зацикливаеться
// }
// if (условие){
//     код который выполняеться если условие верно
// } else {
//     код который выполняеться если условие не верно
// }
//
// if (условие){
//     код который выполняеться если условие верно
// } else if (условие){
//     код который выполняеться если 1 условие не верно, а это условие верно
// } else {
//     код который выполняеться если условие не верно
// }
//
// const massiv = [1, 34, 12, 532] //обьявление массива с переменными
// massiv[0] //обращаемся к 0 индексу в масиве massiv получаем еденицу
// massiv[1] //обращаемся к 1 индексу в массиве massiv получаем 34  и тд

// TODO конец а кто слушал добрый молодец


// const array = [5, 3, 10, 2]
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2 === 0) {
//         console.log(array[i])
//     }
// }


// let b =10;
// if (b<= 10){
//     console.log("условие")
// }
//  const name = ["vasa", "чунга чанка", "мурька"]
// for (let i = 0; i < name.length; i++) {
//     if (name[i]==="мурька"){
//         console.log(name[i])
//     }
// }


// const array = [5, 3, 10, 2]
//
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
// }
// console.log(sum);



// const am =[4,9,4,6,33,5]
// let kseniya =0;
// for ( let i= 0; i<am.length;i++){
//    kseniya= kseniya+am[i]
//     console.log(kseniya)
// }

// const h= ["by", "fly", "day", "off", "morning"]
// for(let i=0; i<h.length; i++){
//     if(h[i]==="day"){
//         console.log(h[i])
//     }
// }


// дз

// let n= [1,2,3,4,5]
// for (let i=0; i<n.length; i++){
//     console.log(n[i])
// }


// let n= [2,3,4,5]
// let summa = 1;
// for (let i=0; i<n.length; i++){
//     summa*=n[i];
// }
// console.log(summa)



// let n= [1, 2, 3, 4, 5]
// let result=0;
// for(let i=0; i<n.length;i++){
//     result+=n[i];
// }
// console.log(result)



// let n = [2, 5, 9, 15, 0, 4]
// for ( let i=0; i<n.length; i++){
//     if(n[i]>3 && n[i]<10){
//         console.log(n[i])
//     }
// }



// let n = [2, 5, 9, 15, 0, 4];
// const s = 9;
// let result;
// for (let i = 0; i < n.length; i++) {
//     if (s === n[i]){
//         result = i;
//         break;
//     }
// }
// console.log(result);


// let n = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < n.length; i++) {
//     if (n[i]===15) {
//         continue;
//     }
//     console.log(n[i])
// }

// let t = [7,9,45,2,11];
// for(let i = 0; i<t.length; i++){
//     if(t[i]===45){
//         continue
//     }
//     console.log(t[i])
// }

// let n = [2, 5, "figna", 15, 0, 4];
// let result = 0;
// for (let i = 0; i < n.length; i++) {
//     if ("figna" === n[i]) {
//         continue;
//     }
//     result+=n[i];
// }
// console.log(result)


// let n = [2, 5, "figna", 14, 4, "shtukovina", 434, "hernya"];
// let result =0;
// for ( let i=0; i<n.length; i++){
//     if ("figna"===n[i]){
//         continue;
//     } else if ("shtukovina"===n[i]){
//         break;
//     }
//     result+=n[i];
// }
// console.log(result)


// const array = [43,634,123,5234,542334,123]
// for ( let i = 0; i<array.length; i++){
// if(array[i]===5234){
//     break
// }
//     console.log(array[i])
// }


// let arr = ["i","styding","JavaScript"];
// arr.splice(1,1);
// console.log(arr)


// let arr = ["i","go","home"];
// delete arr [1];
// console.log(arr[1]);
// // console.log(arr.length);


// let arr = ["Hi", "Hello", "Bonjour"];
//
// arr.push("Hola");
//
// console.log(arr);

//
// добавляет элемент в конце;

// let arr = ["Hi", "Hello", "Bonjour"];
//
// arr.unshift("Hola");
//
// console.log(arr);

// добавить любое значение в начало массива;

// let arr = ["Hi", "Hello", "Bonjour"];
//
// arr.pop("Bonjour");
//
// console.log(arr);
// извлекает элемент из конца;

// let arr = ["Hi", "Hello", "Bonjour"];
//
// arr.shift("Hi");
//
// console.log(arr);
//
// извлекает элемент из начала;

// let arr = ["Hi", "Hello", "Bonjour", "kjdfhd"];
// let i = arr.slice(1, 3);
// arr[0] ="teta"
// console.log(i);

// let arr = ["Hi", "Hello", "Bonjour", "kjdfhd"];
// let arr2 = ["dlfjg", "kdsjfhgkd)f"]
// let b = [...arr, ...arr2] // arr.concat(arr2)
// console.log(test)
// console.log(b)


// function myFun () {
//     console.log("my first function")
// }
//
// myFun();
// myFun();
// myFun();


// function myFun(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
//
// let drugelubniy = ["Hi", "Hello", "Bonjour", "kjdfhd"];
// let newArray = [43, 123,532 ,123]
// myFun(drugelubniy);
// myFun(newArray);
//
// const t =10;
//
// function testFun(b){
//     let summ = 0;
//     for (let i = 0; i < b.length; i++) {
//         summ+=b[i];
//     }
//     return summ;
// }

//
// const manyNumber= [123,432,123,213];
//
//
// const a = testFun(manyNumber)
// console.log(a)
//
// const newManyNumber = [23, 2, 5]
// const newManyNumberResult = testFun(newManyNumber)
//
// console.log(newManyNumberResult)
//
// const str = [32, 2, 1]
// const strSumm = testFun(str)
//
// console.log(strSumm)


// function b(){
//     return "t" ;
// }
// let a = b();
// console.log(a)
// console.log(b())

// function veb (){
//     console.log("google")
// }
// veb()
// veb()


// function myFun () {
//     console.log("Hello World")
// }
// myFun();


//
// let colors = ['red', 'green', 'blue'];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
//
// let arr = ["Я", "изучаю", "JavaScript"];
//
// arr.splice(1, 1);
//
// alert( arr );
//
// function test(){
//     return "per";
// }
// console.log(test())
// let a = test()
// console.log(a)

// function g(){
//     return "ki"
// }
// console.log(g())
// let f = g()
// console.log(f)


// function h(){
//     return"hi";
// }
// console.log(h())
// let m=h()
// console.log(m)


// function myFun(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }


// let drugelubniy = ["Hi", "Hello", "Bonjour", "kjdfhd"];
// let newArray = [43, 123,532 ,123]
// myFun(drugelubniy);
// myFun(newArray);

// let arr = [3,2,5,6];
// function arraySum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     console.log(sum);
// }
// arraySum(arr);



// function sum(a, b) {
//     let sm = a-b;
//     sm*=2
//     return sm;
// }
//
// let result = sum(2, 1);
// let result2 = sum(34, 24);
// console.log( result );

// function s(a,b){
//     let g = a-b;
//     g*=2
//     return g
// }
// let k = s(7,4);
// console.log(k)


// const arr = [2, 4]
// arr.push(5);
// console.log(arr)

// function proisv(a, b){
//     const pr= a*b;
//     return pr;
// }
// let arr = proisv(25,7);
// console.log(arr)


// function p(a,b){
//     const s = a*b;
//     return s
// }
// let h = p(9,8);
// console.log(h)

// function h(a,b){
//     const f =a*b;
//     return f
// }
// let e = h(8,9)
// console.log(e)


// function sum (a,b,c){
//     const kik = a+b+c;
//     return kik;
// }
// let hihi = sum(5,8,4);
// console.log(hihi)


// function mes(value){
//     console.log(value);
//     alert(value)
// }
//
// mes("у вас большие глаза")
// mes("у вас большие уши")
// mes("вы точно не волк спросила бабуля")

// function h(a,b){
//     const j = a*b-4;
//     return j
// }
// const l=h(5, 4);
// console.log(l)


// function n(a,b){
//     const g = a/b*9;
//     return g
// }
// const s=n(9,3);
// console.log(s)

// function u(a,b){
//     const r= a+b;
//     console.log(r)
// }
// u(6,8);

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         alert('Есть!');
//         break;
//     }
// }

//
// let arr = [10, 20, 30, 50, 235, 3000];
//
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     let char = num[0];
//     if (char == 1 || char == 2 || char == 5) {
//         console.log(num);
//     }
// }


//
//
// let num = 1000;
//
// while (num > 50) {
//     num = num / 2;
// }
// console.log(num);

// function srsum(vasa) {
//     let sum = 0;
//     for (let i = 0; i < vasa.length; i++) {
//         sum += vasa[i];
//     }
//     let ololoshka = sum / arr.length;
//     return ololoshka;
// }
// let arr = [1, 2, 3, 7, 6, 7];
// let result = srsum(arr);
// console.log(result);
//
// const a = "\'"
// const b = "stroka"
// console.log(a+b+"\'")

// function createRandomArray() {
//     const a = Math.floor(Math.random()*10+1)
//     const s = []
//     for (let i = 0; i < a; i++) {
//         s.push(Math.floor(Math.random()*100))
//     }
//     return s;
// }
// const newArray = createRandomArray();
// console.log(newArray);

//
// function ba(babushka, che){
//     console.log(babushka)//"pokychti" выведет консоль
//     console.log(che)//"aaaa?" выведет в консоль
// }
// ba("pokychti", "aaaa?")
// ba(4, 2)
// ba(8,6)

// function sum(n,x){
//     let a = n+x
//     console.log(a)
// }
// sum(8,9)
// sum (2,0)

// function s(n,l,o){
//     let a= n+l+o;
//     console.log(a)
// }
// let a = 8;
// let b = 3;
// let c = 2;
// s(a,b,c)

// function sum (k,p,f){
//     let s= k-p-f;
//     console.log(s)
//
// }
// let r = 8;
// let z =2;
// let q= 1;
// sum(r,z,q)
// let p = 99;
// let y= 32;
// let m = 29;
// sum(p,y,m)

// function sum(l, b) {
//     let h = l + b;
//     return h;
// }
//
// let a = 32;
// let o = 44;
// let r = sum(a, o)
// console.log(r)
// let g = 5;
// let y = 2;
// let f = sum(g,y)
// console.log(f)


// function name(arguments) {
//     //telco
//     return vozvr_znachenie
// }
//
// const a = name("10")


// function sum (g,p,j){
//     let f= g+p+j
//     return f
// }
// let h=102;
// let o=9;
// let r=6;
// let u = sum(h,o,r)
// console.log(u)


// function number(a){
//     let h =a*a
//     return h
// }
// let s=2;
// let n = number(s)
// console.log(n)
// console.log("start")


// function hello(){
//     console.log('hello world')
//     return "счастье вернулося"
// }
//
// let a =  hello()
// console.log(a)

// function g(h){
//
//
// }

// let ar = [5, 3, 12, 5];
// let sum = 0;
// sum = sum + ar[0]
// sum = sum + ar[1]
// sum = sum + ar[2]
// sum = sum + ar[3]
// console.log(sum)


// let ar = [2, 4]
// console.log(ar)
// let c = ar[0] + ar[1]
// console.log(ar)

//TODO функции
// функция
// function test(){
//
//     console.log("ifdojdfo")
//
// }
//
//
// // вызов функции
// test()
// test()

// функция с принемаемым значением а
// function test(a){
//     let b = a +10;
//     console.log(b)
// }
//
//
// const value = 20; // создание переменной
// test(value) // вызов функции с передаваемым значением
// test(1)
// test()
// test("fdfdf")


// // функция с принемаемым значением а
// function test(a){
//     let r = 10+a;
//     return r; //возвращаемое значение из функции
// }
//
//
// let value = 20; // создание переменной
// let m;
// m = test(value) // вызов функции с передаваемым значением и присваение возвращаемого значения из функции в переменную m
// console.log(m)


// // функция
// function test(){
//     let r = 10;
//     return r; //возвращаемое значение из функции
// }
//
//
// let m;
// m = test() // вызов функции присваение возвращаемого значения из функции в переменную m
// console.log(m)
// //TODO конец функции

// let a = 10;
// if (a === 10) {
//     console.log(" a = 10")
// }
//
// let v = 10 === a;
// console.log(v)


// function r(){
//     console.log("привет")
// }
// r()

// function p(){
//     let g="привет"
//     return g
// }
// let m;
// m = p()
// console.log(m)

// function g(a){
//     console.log(a)
// }
//
// g("hello world")
// g("friday")


// function название(принимаемые значения){
//     код
//     return возвращаемое значение
// }

// function g(u){
//     let s = u+"world"
//     return s
// }
// let f= g("hello ")
// console.log(f)
//
// let h=g("Nikolay ")
// console.log(h)

// function f(u){
//     let d =u+"ksenya"
//     return d
// }
// let g=f("вышла")
// console.log(g)
//
// let p=f("из чата")
// console.log(p)

// function g(a){
//     console.log(a)
// }
//
// g("hello world")
// g("friday")


//  const name = ["vasa", "чунга чанка", "мурька"]
// for (let i = 0; i < name.length; i++) {
//     if (name[i]==="мурька"){
//         console.log(name[i])
//     }
// }

// const array = [5, 3, 10, 2]
//
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
// }
// console.log(sum);



// const array = [5, 3, 10, 2]
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2 === 0) {
//         console.log(array[i])
//     }
// }


// let n = [2, 5, "figna", 15, 0, 4];
// let result = 0;
// for (let i = 0; i < n.length; i++) {
//     if ("figna" === n[i]) {
//         continue;
//     }
//     result+=n[i];
// }
// console.log(result)

// let n = [2, 5, 9, 15, 0, 4];
// const s = 9;
// let result;
// for (let i = 0; i < n.length; i++) {
//     if (s === n[i]){
//         result = i;
//         break;
//     }
// }
// console.log(result);


// let n = [2, 5, 9, 15, 0, 4]
// for ( let i=0; i<n.length; i++){
//     if(n[i]>3 && n[i]<10){
//         console.log(n[i])
//     }
// }

