// index.jsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import './style.css';

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return (
        <Canvas
            className="r3f"
            camera={{
                fov: isMobile ? 60 : 45,
                near: 0.1,
                far: 2000,
                position: isMobile ? [-2, 1.5, 4] : [-3, 1.5, 4],
            }}
        >
            <Experience isMobile={isMobile} />
        </Canvas>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
