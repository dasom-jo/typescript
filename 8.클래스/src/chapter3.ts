//인터페이스와 클래스
//설계도
interface CharacterInrerface {
    name:string;
    moveSpeed:number;
    move():void;
}
//캐릭터 클래스는 캐릭터 인터페이스를 구현한다
class Character implements CharacterInrerface {
    // name: string;
    // moveSpeed: number;

    constructor(public name:string, public moveSpeed:number){
        this.name = name;
        this.moveSpeed = moveSpeed;
    }

    move(): void {
        console.log(`${this.name}이(가) ${this.moveSpeed}의 속도로 이동합니다.`);
    }
}