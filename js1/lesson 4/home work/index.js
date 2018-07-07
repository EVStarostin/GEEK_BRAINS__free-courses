/* 
  1. Написать функцию foo, считающую произведение элементов подобным образом:
  foo(5)(2)() = 10
  foo(5)() = 5
  foo(2)(1)(3)(4) () = 24
  Используйте все, что знаете. 
*/

const foo = (a) => {
  let result = a;
  const bar = (b) => {
    if (b) {
      result *= b;
      return bar;
    } else {
      return result;
    }
  };
  return bar;
};

console.log(
  "foo(5)(2)() = " + foo(5)(2)(),
  "\nfoo(5)() = " + foo(5)(),
  "\nfoo(2)(1)(3)(4)() = " + foo(2)(1)(3)(4)()
);