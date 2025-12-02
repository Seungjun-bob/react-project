import { useState } from 'react'
import './App.css'

const user = {
  name: 'Jane Doe',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function App() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  const listItems = products.map(product => 
  <li key={products.id}
  style={{
    color: product.isFruit ? 'magenta' : 'darkgreen'
  }}
  >
    {product.title}
  </li>
  )
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <ul>{listItems}</ul>
      </div>
    </>
  );
}
function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default App // 파일의 기본 컴포넌트를 지정
