import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CinematicEntrance = ({ type = 1, onComplete }) => {
    const [status, setStatus] = useState('loading'); // loading, complete

    useEffect(() => {
        // Total duration for each animation before calling onComplete
        const durations = {
            1: 3000, // Core Pulse
            2: 3500, // Editorial Reveal
            3: 4000  // Atmosphere
        };

        const timer = setTimeout(() => {
            setStatus('complete');
            if (onComplete) {
                // Short delay to let the exit animation finish or start
                setTimeout(onComplete, 800);
            }
        }, durations[type]);

        return () => clearTimeout(timer);
    }, [type, onComplete]);

    // Variation 1: The Core Pulse (Minimalist/Tech)
    const renderPulse = () => (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[99999] bg-[#0A0A0B] flex items-center justify-center overflow-hidden"
        >
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: [0, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-white/20"
                />

                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    className="flex flex-col items-center"
                >
                    <img src="/assets/logo1.png" alt="Logo" className="h-24 w-auto mb-6 grayscale brightness-200" />
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-center"
                    >
                        <span className="block text-2xl font-bold tracking-[0.25em] uppercase text-white leading-tight">Innosphere Consulting</span>
                        <span className="block text-[10px] tracking-[0.5em] text-white/50 mt-2 uppercase font-medium">Clarity before complexity</span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );

    // Variation 2: The Dark Shutter (Split Shutter/Dark Mode)
    const renderReveal = () => (
        <div className="fixed inset-0 z-[99999] flex flex-col overflow-hidden bg-black">
            {/* Top Half */}
            <motion.div
                initial={{ y: 0 }}
                exit={{ y: '-101%' }}
                transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1], delay: 0.3 }}
                className="flex-1 bg-[#0A0A0B] flex items-end justify-center pb-6 border-b border-white/5"
            >
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                >
                    <span className="block text-5xl md:text-9xl font-serif text-white tracking-widest uppercase italic">Inno</span>
                </motion.div>
            </motion.div>

            {/* Bottom Half */}
            <motion.div
                initial={{ y: 0 }}
                exit={{ y: '101%' }}
                transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1], delay: 0.3 }}
                className="flex-1 bg-[#0A0A0B] flex items-start justify-center pt-6"
            >
                <motion.div
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                >
                    <span className="block text-5xl md:text-9xl font-serif text-white tracking-widest uppercase">sphere.</span>
                </motion.div>
            </motion.div>

            {/* Center Logo Icon */}
            <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 bg-white rounded-full p-7 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.1)]"
            >
                <img src="/assets/logo1.png" alt="Logo" className="w-full h-auto" />
            </motion.div>

            {/* Dynamic Background Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <span className="text-[12vw] font-bold text-white/5 uppercase select-none tracking-tighter whitespace-nowrap">CONSULTING</span>
            </motion.div>
        </div>
    );

    // Variation 3: The Atmosphere (Soft/Immersive)
    const renderAtmosphere = () => (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center p-8 overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.15, 0.05]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[120px]"
            />

            <div className="relative text-center">
                <motion.div
                    initial={{ filter: 'blur(20px)', opacity: 0, scale: 0.9 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <img src="/assets/logo1.png" alt="Logo" className="h-[40vh] w-auto opacity-10 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                            className="text-5xl md:text-7xl font-serif text-white tracking-widest uppercase mb-4"
                        >
                            INNOSPHERE CONSULTING
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="h-px bg-white/20 mx-auto mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="text-sm tracking-[1em] text-white uppercase font-light pl-[1em]"
                        >
                            Strategic consulting for the AI Era
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );

    return (
        <AnimatePresence>
            {status === 'loading' && (
                <div key="entrance-container">
                    {type === 1 && renderPulse()}
                    {type === 2 && renderReveal()}
                    {type === 3 && renderAtmosphere()}
                </div>
            )}
        </AnimatePresence>
    );
};

export default CinematicEntrance;
