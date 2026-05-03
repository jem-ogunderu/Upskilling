import { useState } from 'react'

function MyButton() {
  const [count, setCount] = useState(0)

  const handleButton = () => {
    setCount(count + 1)
    console.log(`Button clicked ${count} times!`)
  }
  
  return (
    <div>
      <button onClick={() => {handleButton(count)}}>Click me</button>
    </div>
    
  )
}

export default MyButton