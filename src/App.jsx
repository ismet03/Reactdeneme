import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Baslık from './Baslık'
import Button from './button'
import Resim from './Resim'

function App() {
  const [count, setCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  return (

    <div>
      <Baslık />

      <Resim />
      <div>
        <div>
          <Button onCategoryChange={setSelectedCategory} />
          <Resim selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>

  )
}

export default App
