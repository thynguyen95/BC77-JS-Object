const name = "Nguyen Van A";
// const phone = '09876453421';
const email = "abc@gmail.com";

// const number = [0, 10, 20, 30];
//                 0, 1, ,2, 3

function tinhTB() {
  console.log("this trong tinhDTB", this);
}

tinhTB();

// this ở global sẽ đại diện cho đối tượng window
console.log("this ở global:", this.outerHeight, this.outerWidth);

// Khai báo object ---- C: Create object
const student = {
  // key: value
  // value: string, number, boolean, undefined, null, array, object, function

  // thuộc tính(property)
  name: "Nguyen Van A",
  age: 20,
  email: "abc@gmail.com",
  phone: "09876453421",

  // Phương thức(method)
  // Giá trị của 1 key trong object là function => được gọi là phương thức
  // CON TRỎ THIS: this đại diện cho đối tượng chứa nó
  getInfo: function (name, b, c) {
    name = this.name;
    console.log("INFO name: ", name);
    console.log("INFO...", this);

    return;
  },
  getInfo1: () => {
    // arrow function: không có con trỏ this
    // nếu dùng arrow function thì phải dùng thêm .bind() để cố định ngữ cảnh con trỏ this.
    console.log("INFO1...", this);
  },
  "full-name": "Nguyen Van A",
};

// console.log("getInfo", getInfo()); //getInfo is not defined

// Cách truy cập giá trị của 1 key trong object ----------- Read
// objectName.key
// objectName['key'] --- objectName['fb-link']
// C1:
const studentName = student.name;
console.log("studentName: ", studentName);

student.getInfo();
student.getInfo1();

// C2:
const studentEmail = student["email"];
console.log("studentEmail: ", studentEmail);

const fullName = student["full-name"];
console.log("fullName: ", fullName);

student["getInfo"]();

// Note: Nếu cố tình lấy giá trị của 1 key ko tồn tại trong object => giá trị trả về undefined
const studentAddress = student.address;
console.log("studentAddress: ", studentAddress);

/*
    thêm 1 thuộc tính mới vào object - update 1 key vào object
        objectName.tenThuocTinhMoi = 'Giá trị'
        objectName['tenThuocTinhMoi'] = 'Giá trị'
*/
// đang ở vị trí ô nhớ #123
student.fb = "abc.fb.com";
student["fb-link"] = "abc.fb.com";

console.log("student sau khi thêm thuộc tính mới", student);

/*
    update: thay đổi giá trị thuộc tính có sẵn bên trong object
        objectName.key = 'Giá trị mới'
        objectName['key'] = 'Giá trị mới'
*/
// đang ở vị trí ô nhớ #123
student.fb = "xyz.fb.com";
console.log("student sau khi update", student);

/* 
    xóa 1 thuộc tính trong object
        delete objectName.key
*/
delete student.fb;
console.log("student sau khi delete", student);

// dynamic key
const key = "name";

student.key; // undefined
console.log("student.key: ", student.key);

student[key]; //"Nguyen Van A" // student['name]
console.log("student[key]: ", student[key]);

// Duyệt Object
// for... in
for (const key in student) {
  // debugger
  console.log("key: ", key);

  const value = student[key]; // student['name']
  console.log("value: ", value);

  //   if (key === "email") {
  //     break;
  //   }
}

// BT:
const products = [
  {
    id: 1,
    name: "Iphone",
    price: 1500,
  },
  {
    id: 2,
    name: "Samsung",
    price: 1600,
  },
  {
    id: 3,
    name: "Sony",
    price: 1600,
  },
  {
    id: 4,
    name: "Iphone",
    price: 2000,
  },
];

// Tìm phần tử có price = 1600
const ex1 = () => {
  //   let findItem;

  //   for (const value of products) {
  //     console.log("value: ", value);

  //     if (value.price === 1600) {
  //       findItem = value;
  //       break;
  //     }
  //   }

  //   products.forEach((value) => {
  //     if (value === 1600) {
  //       findItem = value;
  //     }

  //     // ...code
  //   });

  // Nếu có phần tử thỏa mãn tìm kiếm => trả về phần tử đó => tự động thoát vòng lặp
  // find: Trả về phần tử đầu tiên thỏa mãn đk
  // Nếu ko có phần tử thỏa mãn đk  => undefined
  const findItem = products.find((value, index) => {
    console.log("value: ", value);
    return value.price === 1600; // true => findItem = value
  });

  const _findItem = products.find((value) => value.price === 1600);
  console.log("_findItem: ", _findItem);

  console.log({ findItem });
};

ex1();

// Thay đổi giá trị key trong object
student.name = "Nguyen Van ABCDEF";

student["email"] = "123456@gmail.com";

console.log("student: ", student);

// copy array, object
const numbers = [10, 20, 30, 40]; // #12345
console.log("number: ", numbers);

const numbers1 = numbers; // #12345
console.log("number1: ", numbers1);

// numbers1[1] = 2000;
console.log("numbers: ", numbers);
console.log("numbers1: ", numbers1);

// tham trị: (primitive type): string, number, boolean, undefined, null
const numberA = 100;

// tham chiếu(reference type): array, object, function
const phone = {
  //object // #123
  name: "Samsung note 20",
  system: "Android",
  dimension: {
    width: 60,
    height: 120,
  },
};
console.log("phone", phone);

//spead operator: tạo ra 1 object mới với 1 địa chỉ ô nhớ mới
const number2 = [...numbers]; // #123456789
number2[1] = 200000;
console.log("number: ", numbers);
console.log("number2: ", number2);

// copy object
// const newPhone = phone; // #123
const newPhone = { ...phone }; // shallow copy (copy nông)

newPhone.name = "Samsung Note 24";

// newPhone.dimension.height = 200;
// console.log("phone", phone);
// console.log("newPhone: ", newPhone);

// deep copy(copy sâu)
// const cloneDeep = (value) => {
//   return JSON.parse(JSON.stringify(value));
// };

// C1:
const _newPhone = JSON.parse(JSON.stringify(phone));
_newPhone.dimension.height = 200;
console.log("phone", phone);
console.log("_newPhone: ", _newPhone);

// C2:
const _newPhone1 = structuredClone(phone);
console.log("_newPhone1: ", _newPhone1);

// C3: thư viện lodash
const obj = {
  name: "abc",
};

const obj1 = {
  name: "abc",
};

obj === obj1; // false

// deepclone;

const age = 20;

const button = {
  width: 120,
  height: 40,
  bgColor: "green",
};
console.log("button: ", button);

// pass by reference
const demo = (value) => {
  const newValue = { ...value };

  newValue.width = 1000;
  console.log("newValue: ", newValue);
};

demo(button);
console.log("button: ", button);

// demo(age);
// console.log("age: ", age);

// destructuring: bóc tách phần tử
// khi bóc tách 1 phần tử không tồn tại => trả về undefined
const colors = ["red", "green", "yellow"];

// const colorRed = colors[0];
// const colorGreen = colors[1];
const [a, b, xyz, def] = colors;
console.log("colorRed: ", a);
console.log("colorGreen: ", b);
console.log("xyz: ", xyz);
console.log("def: ", def); // undefined

const button1 = {
  width: 120,
  height: 40,
  bgColor: "green",
  //   color: "red",
  padding: {
    pt: 100,
    pb: 100,
    pl: 50,
    pr: 50,
  },
};

// const btnWidth = button1.width;
// const btnHeight = button1.height;
// console.log("btnWidth: ", btnWidth);
// console.log("btnHeight: ", btnHeight);

const {
  width: btnWidth,
  height,
  bgColor,
  color: btnColor = "green",
  padding: { pt },
} = button1;
// console.log("width: ", width);
// Khi destructuring tới cấp thứ 2: property đó sẽ không được khởi tạo => undefined
// console.log("padding: ", padding); => undefined
console.log("btnWidth: ", btnWidth);
console.log("height: ", height);
console.log("btnColor: ", btnColor);
console.log("pt: ", pt);

// Object literal
const firstName = "Nguyen";
const lastName = "ABC";
const person = {
  // firstName : firstName,
  // lastName: lastName

  firstName,
  lastName,
};

console.log({ person });
console.log("person: ", person);

const newPerson = {
  ...person,
  firstName: "Tran", //ghi đè firstName ở trong person
  age: 20, //thêm mới
  address: "HCM",
};
console.log("newPerson: ", newPerson);
