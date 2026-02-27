import React from 'react';
import { motion } from 'framer-motion';

const StickyCTA = ({ text = "Book Your Diagnostic Session", onClick }) => {
    return (
        <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 md:bottom-10 md:right-10 md:left-auto md:translate-x-0 md:max-w-xs"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        >
            <button
                onClick={onClick}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-full shadow-2xl shadow-blue-900/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
                <span>{text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </motion.div>
    );
};

export default StickyCTA;
