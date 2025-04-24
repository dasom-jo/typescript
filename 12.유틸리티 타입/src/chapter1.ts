//맵드 타입 기반의 유틸리티 타입들

//Partial<T> : 부분적인, 일부분의. T의 모든 프로퍼티를 선택적으로 만듭니다.

interface Post {
    title : string;
    tags : string[];
    content : string;
    thumbnailURL : string;
}

type Partial<T> = {
    [key in keyof T]? : T[key];
} // ? : 선택적 프로퍼티를 의미합니다.
// Partial<Post> : Post의 모든 프로퍼티를 선택적으로 만듭니다.

const draft: Partial<Post> = {
    title : '타입스크립트란?',
    content : '타입스크립트는 자바스크립트의 상위 집합이다.',
}

//Required<T> : 필수적인, 필수의. 특정객체 타입의 모든 프로퍼티를 필수로 만듭니다.

type Required<T> = {
    [Key in keyof T]-? : T[Key];
}

const withThumbnailPost : Post = {
    title : '타입스크립트란?',
    tags : ['typescript', 'javascript'],
    content : '타입스크립트는 자바스크립트의 상위 집합이다.',
    thumbnailURL : 'https://example.com/thumbnail.png',
}

// Readonly <T> : 읽기 전용의. 특정 객체 타입의 모든 프로퍼티를 읽기 전용으로 만듭니다.
type Readonly<T> = {
    readonly [Key in keyof T]: T[Key];
}

const readonlyPost: Readonly<Post> = {
    title : '타입스크립트란?',
    tags : ['typescript', 'javascript'],
    content : '타입스크립트는 자바스크립트의 상위 집합이다.',
    thumbnailURL : 'https://example.com/thumbnail.png',
}
// readonlyPost.title = '자바스크립트란?'; // 오류 발생. 읽기 전용 프로퍼티이므로 수정할 수 없습니다.
