let hello = "hello world"

// 変数の書き方
let int1 = 1;
let int2 = -10;
let float1 = 3.14;
let str1 = "Javascriptを覚えよう";

// 四則演算
alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);

// 文字列連結
alert('hello' + 'world');

// 条件分岐
let orange = 100;
let apple = 120;
if (orange < apple) {
    alert('apple')
} else if (orange == apple) {
    alert('orange apple')
} else {
    alert('orange')
}

// while
let max = 100;
let num = 1;
let count = 0;
while (num < max) {
    num = num * 2;
    count = count + 1;
}
alert('2をかけて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do-while
// do {
//     ~~~
// } while ();

// for
let i;
num = 0;
for (i = 1; i < 11; i++){
    num = num + i;
}
alert(num);