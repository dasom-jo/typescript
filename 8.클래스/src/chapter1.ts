//타입스크립트의 클래스

const employee = {
  name: "이정환",
  age: 26,
  position: "developer",
  work() {
    console.log("일을 합니다.");
  },
};

class Employee {
  //필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  //메소드
  work() {
    console.log("일을 합니다.");
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("이정환", 26, "developer");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work: () => {},
};
