# React.JS fetch 함수 이용하여 api 호출하는 to do list, crud 게시판, openweathermap api를 이용한 날씨 앱

### 문제점 및 미구현 문제들

#### 계속해서 get 요청이 무한으로 들어가는 문제

- useEffect의 deps를 넣어주어 해결했지만 이 경우에 check 표시를 클릭 시 바로 렌더링되지 않는 문제가 발생했다.

- api의 done 부분을 useState로 관리하여 데이터 변경 시 리렌더링이 발생하도록 하여 문제를 해결했다.

#### 시간이 페이지를 연 순간에 멈춰 있는 문제

- useEffect와 setInterval을 이용하여 1초마다 new Date() 함수를 재실행하여 시간이 계속 렌더링되도록 만들었다.

#### 날씨 api를 이용하여 현재 날씨를 to do list 옆에 표시

- api를 가져온 이후에 Cannot read properties of undefined 에러를 확인하고 한참을 헤멨다. state는 비동기적이며 첫 렌더링 전에 동작한다는 것을 깨닫고, 이를 해결하기 위해 렌더링 시 && 연산자를 이용하여 데이터가 있을 시에만 렌더링을 하도록 하여 문제를 해결했다.

- 위의 방법보다는 useState를 이용하여 초기 렌더링 시 필요한 데이터들을 setState에 넣어놓는 것이 더욱 편리할 것 같아서 변경하였다.

#### 욕심으로는 아래에 crud 게시판까지 제작하는 것이 최종 목표!

- 게시판도 json-server를 이용한 crud를 구현하였다.

#### 게시판 글 삭제, todo 글 삭제, 게시판 새 글 작성 시 렌더링이 되지 않는 문제 & to do list delete 시 데이터가 정상적으로 삭제되지만, 마찬가지로 리렌더링이 바로 되지 않는 문제 발생

- window.location.reload() 로 해결했다. 리액트의 장점을 살리지 못해 아쉬웠지만 다른 방법을 아직 모르겠다.

#### styled-components 공부가 더 필요하다
