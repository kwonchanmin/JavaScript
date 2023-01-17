
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

const obj1 = Object.create(null) // 객체를 만들 때 내가 상위 prototype객체를 지정해서 만들 수 있다. 
// null을 주면 상위 prototype객체를 사용하지 않는다는 의미
// 이렇게 되면 __proto__를 아예 사용할 수 없다.
// 그래서 __proto__를 코드에 직접적으로 사용하는거는 바람직하지 않다. 권장하지 않는다.
// 다른 방법으로 사용하세요.. 다른 방안을 제공해준다.
