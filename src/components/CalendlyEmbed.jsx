import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const CalendlyPopup = ({
    url = "https://calendly.com/free-consultation-innosphereconsulting/30min",
    buttonText = "Book Diagnostic",
    className = "",
    fixed = false
}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Load the Calendly script
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        // Prevent background scrolling when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const modalContent = (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-12 overflow-hidden w-screen h-screen">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity animate-in fade-in duration-500"
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Screen-level Close Button */}
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-[100001] text-white/60 hover:text-white transition-all transform hover:scale-110 p-2"
                aria-label="Close"
            >
                <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            {/* Centered Modal Container */}
            <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in duration-500 z-[100000]">
                <div
                    className="calendly-inline-widget w-full h-full"
                    data-url={`${url}?hide_gdpr_banner=1`}
                    style={{ minWidth: '320px', height: '100%' }}
                ></div>
            </div>
        </div>
    );

    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                }}
                className={className + (fixed ? ' fixed bottom-8 right-8 z-[100]' : '')}
            >
                {buttonText}
            </button>

            {isOpen && createPortal(modalContent, document.body)}
        </>
    );
};

export default CalendlyPopup;
