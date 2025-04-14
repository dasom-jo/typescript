//접근 제어자 access modifier
// public, private, protected
// public: 모든 곳에서 접근 가능
// private: 같은 클래스 내에서만 접근 가능
// protected: 같은 클래스와 자식 클래스에서 접근 가능

class Employee {
  //필드
  //public 기본값
  name: string;
  private age: number;
  protected position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  //메소드
  work() {
    console.log(`일을 합니다 ${this.name}.`); // private 메서드 접근가능
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
  //메서드
  fuc(){
    //this.age; //private은 파생 클래스에서조차 접근 불가능
    this.position; //protected는 파생 클래스에서 접근 가능
  }
}

const employee = new Employee("홍길동", 30, "개발자");
employee.name = "김철수"; // public이므로 접근 가능
//employee.age = 25; //private 이므로 접근 불가 ,메사드안에서만 가능
//employee.position = "디자이너"; //  protected이므로 접근 불가능
