//인덱스드 엑세스 타입 indexed Aaccess type
//인덱스안에 들어가는건 무조건 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  //["author"] : 인덱스를 통해 접근하는 타입이라는 뜻으로 인덱스드 엑세스 타입
  //오직 타입만 들어올수있음 변수 함수 안됨
  console.log(`${author.name} - ${author.id}`);
}

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 30,
  },
};

printAuthorInfo(post.author);


//튜플과 함께 사용하는법;
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; //number

type Tup1 = Tup[1]; //string

type Tup2 = Tup[2]; //boolean
