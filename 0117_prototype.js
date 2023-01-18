
// 일반 객체
// var obj = {
//     name : '홍길동'
// }

// console.dir(obj);

// // 함수 선언문
// function myFunc(number) {
//     return 2 * number;
// }

// console.dir(myFunc);

// 유사배열객체
// function myFunc(a,b) {
//     // arguments라는 유사배열객체가 있다.
//     // 배열과 생긴게 똑같고 사용도 비슷하게 할 수 있다.
//     // 진짜 배열은 아니다. 배열이 가지는 여러가지 기능을 다 가지고 있지 않다.
//     // arguments 함숫객체의 property
//     // 가변인자함수를 구현하기 위해서 사용!
//     return arguments[0] + arguments[1];
// }

// myFunc(10,20,30,40);

// 가변인자함수
// function sum() {
//     let result = 0;
//     for(let i =0; i<arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }

// console.log(sum(10,20));
// console.log(sum(10,20,30));
// console.log(sum(10,20,30,40,50,60));

// ES6에 들어오면서
// 별도의 Rest parameter라는 것을 도입했다.
// 특히 Arrow function은 argumnets가 없다.
// 그래서 Arrow function은 Rest parameter만 사용할 수 있다.
// function sum(...args) {  // args 앞에 ...을 붙이면 parameter가 된다.
//     // args로 표현되는 Rest parameter는 Array이다.
//     let result = 0;
//     for(let i =0; i<args.length; i++){
//         result += args[i];
//     }
//     return result;
// }

// console.log(sum(10,20));
// console.log(sum(10,20,30));
// console.log(sum(10,20,30,40,50,60));

// 함수 선언문 - 생성자 함수

// function Circle(radius) {
//     this.radius = radius;
//     Circle.prototype.getArea = function() {
//         return Math.PI * this.radius ** 2; // **는 제곱을 의미 
//     }
// }

// const circle1 = new Circle(2);
// const circle2 = new Circle(5);

// // 같다 : == (내용이 같은지 비교, 단 타입이 다르면 일단 타입을 맞추고 같은지 비교)
// //     :  === (타입이 같고 내용이 같은지를 비교) 
// console.log(circle1.radius === circle2.radius); // false
// console.log(circle1.getArea === circle2.getArea); // true
// function Circle(radius) {
//     this.radius = radius;
//     Circle.prototype.getArea = function() {
//         return Math.PI * radius ** 2;
//     }
//     Circle.prototype.name = '홍길동'
// }

// const circle1 = new Circle(2);
// const circle2 = new Circle(5);

// // console.log(circle1.__proto__.constructor === Circle);  // true

// console.dir(circle1);
// console.log(circle1.name, circle2.name); // 홍길동 홍길동
// circle1.name = '신사임당'
// console.log(circle1.name, circle2.name); // 신사임당 홍길동 
// circle1의 name을 찾아봤지만 없기에 자바스크립트의 특성상 없기에 만들어서 등록시킨다. 그렇기 때문에 홍길동이 아니라 신사임당이 나온다.
// circle2는 바꾼 것도 없기 때문에 그대로 찾아가서 찍기 때문에 홍길동이 그대로 나온다. 
// circle1.__proto__.name = '신사임당';
// console.log(circle1.name, circle2.name); // 신사임당 신사임당

// prototype은 결국 상속구조를 나타내기 위한 방법

// const obj = {}    

// const parent = {x : 1}

// obj.__proto__ = parent // obj는 아무것도 안가지고 있었지만 상위객체로 parent를 설정했기 때문에 parent의 정보값을 쓸 수 있다. 
// // __proto__ 를 사용함으로써 상속구조를 설정할 수 있다.(상위객체 설정), 또한 상속 구조도를 바꿀 수도 있다. 자바랑은 다른 점.
// console.log(obj.x);

// literal을 이용한 객체 생성
// var obj = {
//     name : '홍길동'
// }

// console.dir(obj);

// 생성자 함수를 이용한 객체 생성
// function Circle(radius) {
//     this.radius = radius;
// }

// const circle1 = new Circle(1);

// console.dir(circle1);

// 유일한 예외가 하나 있다.
// 객체를 만들 때 이렇게도 만들 수 있다.(예외적인 경우)

// const obj1 = Object.create(null) // 객체를 만들 때 내가 상위 prototype객체를 지정해서 만들 수 있다. 
// null을 주면 상위 prototype객체를 사용하지 않는다는 의미
// 이렇게 되면 __proto__를 아예 사용할 수 없다.
// 그래서 __proto__를 코드에 직접적으로 사용하는거는 바람직하지 않다. 권장하지 않는다.
// 다른 방법으로 사용하세요.. 다른 방안을 제공해준다.

// 객체ㅐ literal로 생성
// const obj = {};

// const parent = {
//     x : 1
// }
// // 상위 prototype객체를 얻어오기 위해서 아래처럼 하는것은 좋지 않다.
// // obj.__proto__

// Object.getPrototypeOf(obj) // prototype객체를 획득

// // obj의 prototype객체를 parent로 설정
// Object.setPrototypeOf(obj, parent);

// console.log(obj.x);

//--------------------------------------------------------------------------

// non - constructor인 arrow function을 하나 만들어서 
// 진짜 이 함수객체의 prototype객체가 생성되지 않는지 확인해보자

// const person =  (name) => {
//     this.name = name;
// }

// // person은 함수객체
// console.log(person.prototype); // undefined

// 지금까지 한 내용을 바탕으로 전체적인 그림을 그려보자

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.age = 20;

// const circle1 = new Circle(5);

// console.dir(circle1);
// console.log(circle.age);

//-------------------------------------------------------------------

// 이렇게 쓰는 것은 아닌거 같다. 이렇게 규칙없이 막 쓰면 유지보수에도 도임이 안되는 것 같다. 
// 좀 정상적으로 규칙있게 써보자.
// 'use strict'; // 이 문자열을 전역변수 선언하는 곳 또는 함수안에서 제일 위에 써주면 코드를 엄격하고 진지하게 검토하기 때문에 잘못된 코드는 쓸 수 없게 된다.
//               // 여기서 쓰이면 코드 전체가 엄격 진지
// function foo() {
//     'use strict' // 여기서 쓰면 이 지역변수 에서만 엄격 진지
//     x = 10; // error가 아닌 전역변수로 만들어버린다.
//             // window객체의 property로 등록
//             // 암묵적 전역(Implicit Global)이라고 한다.
//             // 자바스크립트 특유의 특징!
// }

// foo();

// console.log(x); // 10

// var x = 100;

// if(true) {
//     let x = '홍길동'
// }

// function myFunc() {
//     console.log('hello');

//     function aa() {
//         console.log('haha');
//     }
// }


// const x = 1;

// function foo() {
//     const y = 2;

//     function bar() {
//         const z = 3;
//         console.log(x+y+z);
//     }
//     bar();
// }
// foo();

//-----------------------------------------------------

// const x = 1;

// function outer() {
//     const x = 10;
    
//     const inner = function() {
//         console.log(x);  
//     }
    
//     return inner; // 함수가 함수를 리턴하고 있다.
// }

// const result = outer(); 

// result(); // 1이 되어야 우리가 알고 있는 정상적인 execution context stack의 동작이다.
//           // 그런데 10이 찍힌다. 왜 그럴까? -> 이 현상을 클로져라고 불른다. 
//           // stack은 지워지지만 렉시컬환경은 남겨두는 것이 클로져, ()안에 상위 레퍼런스를 지칭하는 인자가 있을 경우 

// function foo() {
//     const x =1;
//     const y =2;

//     function bar() {
//         const z = 3;

//         console.log(z);
//     }
//     return bar; 
// }

// const result = foo();
// result(); // 클로져가 아니다. () 안에 상위 레퍼런스의 x ,y를 지칭하는 인자가 없기 때문이다. x나 y 둘중 하나만이라도 있으면 클로져가 된다.

//---------------------------------------------------------------------------------------------------------------------

// 클로져를 이용한 간단한 응용

// let num =0;

// const increase = function() {
//     return ++num;
// }
// console.log(increase());  // 1
// console.log(increase());  // 2
// console.log(increase());  // 3

// num = 10;  // 이렇게 쓰면 num이 10부터 시작하게 된다. num을 변경없이 하고 싶으면.. 밑으로 바꾸자.
// // 간단한 카운터를 만들 수 있다.



// const increase = function() {
//     let num =0;
//     return ++num;
// }
// console.log(increase());  // 1
// console.log(increase());  // 1
// console.log(increase());  // 1

// num = 10;
// // 이렇게 쓸 경우 값이 증가하지 않는 현상이 나타난다. 지역변수인데 계속 유지될려면 클로져를 써보아야된다.

// const increase = (function() {
//     let num = 0;

//     return function(){
//         return ++num;
//     }
// }()) // 즉시실행함수를 만들어서 실행을 하면 밖에서 num을 바꿀 수 없이 숫자만 증가하게 할 수 있게 된다.

// console.log(increase());
// console.log(increase());
// console.log(increase());