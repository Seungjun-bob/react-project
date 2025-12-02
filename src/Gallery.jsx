export function Profile() {
  // 컴포넌트는 다른 컴포넌트를 렌더링할 수 있지만, 그 정의를 중첩해서는 안된다.
  // React 를 사용하면 앱의 재사용 가능한 UI 요소인 컴포넌트 만들 수 있음
  // 모든 UI 는 컴포넌트이다.
  // 1. 컴포넌트 이름은 대문자로 시작해야 한다.
  // 2. 컴포넌트는 하나의 최상위 요소만 반환해야 한다.
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}