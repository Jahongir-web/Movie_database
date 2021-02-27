import {useState, useEffect, useRef} from 'react'

import './slider.css'


function Slider () {

  const [index, setIndex] = useState(0)
  const prevRef = useRef()
  const nextRef = useRef()

  useEffect(() => {
    document.documentElement.style.setProperty("--index", index)

    if (index === 0) {
      prevRef.current.disabled = true
    }else{
      prevRef.current.disabled = false
    }

    if (index >= 3) {
      nextRef.current.disabled = true
    }else{
      nextRef.current.disabled = false
    }

    if (index == 3){
      document.documentElement.style.setProperty("--index", 2.5)
    }


  }, [
    index,
  ])

  return (
    <>
      <div className="slider">
        <ul>
          <li>ONE</li>
          <li>TWO</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
          <li>Six</li>
          <li>Seven</li>
        </ul>
      </div>

      <button className="btn-prev btn" ref={prevRef} onClick={()=> setIndex(index-1)}>
        Oldingi
      </button>
      <button className="btn-next btn" ref={nextRef} onClick={()=> setIndex(index+1)}>
        Keyingi
      </button>
    </>
  )
}

export default Slider