//맵드 타입 기반의 유틸리티 타입들 2 Pick,Omit,Record

//Pick<T, K> : T에서 K에 해당하는 프로퍼티만 남긴다.
//뽑다 고르다. 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

type Pick<T, K extends keyof T> = {
  //K extends 'title' | 'tags' | 'content' | 'thumbnailURL' : K는 T의 키들 중 하나여야 한다.
  //'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [Key in K]: T[Key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "타입스크립트란?",
  content: "타입스크립트는 자바스크립트의 상위 집합이다.",
};

//Omit <T, K> 생락하다,빼다. 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title'|'content'|'tag'|'thumnailURL','title>>
// Pick<Post, 'content' | 'tag | 'thumnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

//Record<K, V>
type Record<K extends keyof any, V> = {
  [Key in K]: V;
};

type thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
