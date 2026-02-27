import React, { useEffect, useRef } from 'react';

const LiquidCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        let time = 0;
        const render = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0f172a');
            gradient.addColorStop(1, '#1e1b4b');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);

                for (let x = 0; x < canvas.width; x++) {
                    const y = canvas.height / 2 +
                        Math.sin(x * 0.005 + time + i) * 50 +
                        Math.cos(x * 0.01 + time * 0.5) * 30;
                    ctx.lineTo(x, y);
                }

                ctx.strokeStyle = `rgba(129, 140, 248, ${0.1 + i * 0.1})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 w-full h-full"
        />
    );
};

export default LiquidCanvas;
