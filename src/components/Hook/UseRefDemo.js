import { useEffect } from 'react'
import { useRef } from 'react'

function UseRefDemo() {
    const btnRef = useRef(null)
    // const numRef = useRef(0)
    // numRef.current

    useEffect(() => {
      console.log(btnRef.current)
    }, [])

    return (
        <div>
            <button ref={btnRef}>click</button>
        </div>
    )
}

export default UseRefDemo