const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// ## 정규식 생성
// g 플래그 (대문자, 소문자를 구분)
// gi (대문자, 소문자 구분 X)

// # 생성자
//const regexp = new RegExp ('the','g')

// # 리터럴
// const regexp = /the/gi
// console.log(str.match(regexp))


// ## 메소드 예제
//const regexp = /fox/gi

// # test : 정규식.test(문자열)
//console.log(regexp.test(str)) 
// result console :: true

// #match : 문자열.match(정규식)
// 01. 원본 수정 X  이유 :: 상단 const  
//console.log(str.replace(regexp, 'AAA'))
// result console :: fox -> AAA
//console.log(str) 
// result console :: fox

// 02. 원본 수정하려면? const -> let 으로 변경
//str = str.replace(regexp, 'AAA')
//console.log(str) 
// result console :: fox -> AAA (원본)


// ## 플래그
// 정규식 표현에서는 '.' 특정한 문자를 찾는 패턴 **주의**
// '\' 이스케이프 문자 : 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
// '$' 는 '.'뒤에서 사용해야하고 끝나는 부분을 찾음 >> 맨 뒤 백틱 바로 앞
// str.math(/\.$/g) >> null
// str.math(/\.$/gm) >> ['.'] 하나의 줄을 시작과 끝으로 보겠다(m)
// console.log(str.match(/\.$/gim))


// ##패턴
// /\b\w{2, 3}\b/
console.log(
    str.match(/http/g)
)