// Root component 란 앱의 진입점 역할을 하는 컴포넌트를 의미
// 컴포넌트 import, export 방법
// 1. 기본 내보내기 (default export) : 하나의 파일에서 하나의 기본 컴포넌트만 내보낼 수 있음
// 2. 명명된 내보내기 (named export) : 하나의 파일에서 여러 컴포넌트를 내보낼 수 있음

import Gallery from './Gallery.jsx';
import { Profile } from './Gallery.jsx';

export default function App() {
  return (
    <Profile />
  )
}