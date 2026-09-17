import React from 'react';

export default function Pagination({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    onPrev,
    onNext,
    className = '',
    buttonClassName = '',
    ...props
}) {
    const handlePrev = () => {
        if (currentPage > 1) {
            if (onPrev) onPrev();
            else if (onPageChange) onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            if (onNext) onNext();
            else if (onPageChange) onPageChange(currentPage + 1);
        }
    };

    const hasCustomBg = /\bbg-/.test(buttonClassName);
    const defaultBg = hasCustomBg ? '' : 'bg-surface-container-lowest';
    const buttonClass =
        `px-4 py-2.5 rounded border border-outline-variant hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant transition-colors flex items-center gap-1 font-bold uppercase tracking-wider ${defaultBg} font-mono text-xs cursor-pointer ${buttonClassName}`.trim();

    return (
        <div
            className={`flex items-center justify-center gap-3 font-mono ${className}`}
            {...props}
        >
            <button
                type="button"
                onClick={handlePrev}
                disabled={currentPage <= 1}
                className={buttonClass}
                aria-label="Previous Page"
            >
                <span className="material-symbols-outlined text-sm">chevron_left</span>
                PREV
            </button>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface-variant px-2">
                Page {currentPage} of {totalPages}
            </span>

            <button
                type="button"
                onClick={handleNext}
                disabled={currentPage >= totalPages}
                className={buttonClass}
                aria-label="Next Page"
            >
                NEXT
                <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
        </div>
    );
}
