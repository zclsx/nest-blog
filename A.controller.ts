
// class A {
//   constructor(private B = new B(new C())){

//   };
// }
// class B {
//   constructor(private CSservice) {}
// }
// class C {}
 
class A {
  constructor(private bService:B){
        //bService:B快速去实现B = new B(new C())
  };
}
class B {
  constructor(private CSservice) {}
}
class C {}