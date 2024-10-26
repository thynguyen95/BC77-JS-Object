console.log("main.js");

// OOP: Object Orient Programing
// 1. Đóng gói
// 2. Trừu tượng
// 3. Đa Hình
// 4. Kế thừa

// const student = {
//   name: "Nguyễn Văn A",
//   age: 20,
// };

// const teacher = {
//   name: "Nguyễn Văn B",
//   age: 30,
// };

// ES5 - prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.diem = 1000;

  this.tinhDTB = function () {
    console.log("tính DTB");
    const dtb = this.diem * 2;
    return dtb;
  };
}

const student = new Person("Nguyễn Văn A", 20);
console.log("student: ", student);
const dtbStudent = student.tinhDTB();
console.log("dtbStudent: ", dtbStudent);

const teacher = new Person("Nguyễn Văn B", 30);
console.log("teacher: ", teacher);

// ES6
/*
Quy tắc đặt tên class: 
    + viết hoa những chữ cái đầu : Person, PersonBusness 
    + viết hoa toàn bộ
*/
class Member {
  // constructor sẽ khởi chạy đầu tiên khi vào class
  // khi tạo 1 đối tượng từ lớp, constructor tự động được gọi
  // 1 class chỉ có duy nhất 1 constructor, khi khai báo nhiều hơn 1 thì js sẽ báo lỗi
  // Nếu không định nghĩa constructor,js sẽ tự tạo 1 constructor rỗng
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  tinhDTB() {
    console.log("tính DTB");
    const dtb = this.diem * 2;
    return dtb;
  }
}

// sử dụng từ khóa new để tạo 1 đối tượng từ lớp
const student2 = new Member("John", 20);
console.log("student2: ", student2);

const student3 = new Member("Alice", 18);
console.log("student3: ", student3);

// Bài tập 1
class Car {
  constructor(company, name, color, speed) {
    this.company = company;
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  // method
  hienThiThongTinXe() {
    console.log(
      "Thông tin xe:",
      this.company,
      this.name,
      this.color,
      this.speed
    );
  }

  tinhThoiGianXeDiChuyen(soKm) {
    console.log("tinhThoiGianXeDiChuyen", soKm / this.speed);
  }
}

const carBMW = new Car("BMW", "BMW M6", "Black", 3000);
console.log("carBMW: ", carBMW);
carBMW.hienThiThongTinXe();
carBMW.tinhThoiGianXeDiChuyen(50);

/*
    TÍNH KẾ THỪA(Inheritance)
    TÍNH ĐA HÌNH(Poly....)
    TÍNH ĐÓNG GÓI: 
        + public: có thể truy cập tự do 
        + private: kí hiệu dấu # ở trước, không thể truy cập từ bên ngoài hay các class con thừa kế 
*/
class Animal {
  // khai báo biến private
  #special;

  constructor(name) {
    this.name = name;
    this.#special = "special";
  }

  //   method
  active() {
    console.log("active animal", this.name, this.#special);
  }

  makeSound() {
    console.log("some sound from animal", this.name);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    // gọi constructor từ class cha
    super(name);
    this.color = color;
  }

  active() {
    console.log("con mèo đang đi");
  }

  activeTreoCay() {
    console.log(this.name + "đang trèo cây");
  }

  // tính đa hình: ghi đè phương thức từ class cha
  makeSound() {
    console.log(this.name + " meow meow");
  }
}

const smallCat = new Cat("mèo đen", "black");
smallCat.active();
smallCat.activeTreoCay();
smallCat.makeSound();
// smallCat.#special; => lỗi, do biến được khai báo private

class CatBlack extends Cat {
  constructor(name, color, tail) {
    super(name);
    this.color = color;
    this.tail = tail;
  }
}

const catBlack = new CatBlack("cat black", "đen", "long");
console.log("catBlack: ", catBlack);

class Dog extends Animal {
  constructor(name, tall) {
    super(name);
    this.tall = tall;
  }

  activeCanhNha() {
    super.active(); // gọi phương thức active() của class cha
    console.log(this.name + " đang canh nhà");
  }

  // tính đa hình: ghi đè phương thức từ class cha
  makeSound() {
    console.log(this.name + " gau gau");
  }
}

const dog = new Dog("Husky", 20);
dog.activeCanhNha();
dog.makeSound();
