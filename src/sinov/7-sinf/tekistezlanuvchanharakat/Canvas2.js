import React, { useEffect, useRef } from 'react'

const Canvas2 = props => {

    const canvasRef = useRef(null)

    const eni = 50
    const buyi = 100

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#00ff00'
        ctx.beginPath()
        ctx.arc(eni+frameCount, buyi+frameCount, 20, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = 1000;
        canvas.height = 500;

        // context.fillStyle = '#ffffff';
        // context.beginPath();
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        // context.closePath();
        
        // draw(context)

        let frameCount = 0
        let animationFrameId
        
        //Our draw came here
        const render = () => {
          frameCount++
          draw(context, frameCount)
          animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }

    }, [draw])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas2