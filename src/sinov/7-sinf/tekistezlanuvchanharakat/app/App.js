import React, { useRef, useEffect } from 'react'



const App = props => {
  
  const canvasRef = useRef(null)
  
  const draw = ctx => {





      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2;
      ctx.beginPath()
      ctx.moveTo(0, 0)
    ctx.lineTo(0, 100)
    ctx.lineTo(100, 100)
    ctx.lineTo(100, 0)
    ctx.closePath()
    ctx.stroke()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here
    draw(context)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default App;