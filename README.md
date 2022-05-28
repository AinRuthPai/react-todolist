# React.JS fetch 함수 이용하여 api 호출하는 to do list

### 문제점 및 미구현 문제들

#### 계속해서 get 요청이 무한으로 들어가는 문제

- useEffect의 deps를 넣어주어 해결했지만 이 경우에 check 표시를 클릭 시 바로 렌더링되지 않는 문제가 발생했다.

- api의 done 부분을 useState로 관리하여 데이터 변경 시 리렌더링이 발생하도록 하여 문제를 해결했다.

#### delete 시 데이터가 정상적으로 삭제되지만, 마찬가지로 리렌더링이 바로 되지 않는 문제 발생

#### 시간이 페이지를 연 순간에 멈춰 있는 문제

#### 할 일의 개수를 표시를 어떻게 해야 할지?

#### 날씨 api를 이용하여 현재 날씨를 to do list 옆에 표시

#### 욕심으로는 아래에 crud 게시판까지 제작하는 것이 최종 목표!
