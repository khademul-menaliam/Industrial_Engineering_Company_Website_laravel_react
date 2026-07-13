import React, { useRef, useEffect } from 'react';

export default function RichTextEditor({ value, onChange, placeholder = 'Enter text here...' }) {
    const editorRef = useRef(null);
    const isEditingRef = useRef(false);

    // Sync contentEditable with external value updates
    useEffect(() => {
        if (editorRef.current && !isEditingRef.current) {
            editorRef.current.innerHTML = value || '';
        }
    }, [value]);

    const handleInput = () => {
        if (editorRef.current) {
            isEditingRef.current = true;
            let html = editorRef.current.innerHTML;
            
            // Clean up empty lines or standard empty structures
            if (html === '<br>' || html === '<div><br></div>' || html === '<p><br></p>' || html.trim() === '') {
                html = '';
            }
            
            onChange(html);
            
            // Reset editing ref asynchronously
            setTimeout(() => {
                isEditingRef.current = false;
            }, 0);
        }
    };

    const executeCommand = (command, arg = null) => {
        document.execCommand(command, false, arg);
        handleInput();
    };

    return (
        <div className="border border-outline-variant/40 rounded-lg overflow-hidden bg-[#152229] transition-all focus-within:border-primary/70">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 p-2 bg-[#19272f] border-b border-outline-variant/30 text-white select-none">
                <button
                    type="button"
                    onClick={() => executeCommand('bold')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Bold"
                >
                    <span className="material-symbols-outlined text-base">format_bold</span>
                </button>
                <button
                    type="button"
                    onClick={() => executeCommand('italic')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Italic"
                >
                    <span className="material-symbols-outlined text-base">format_italic</span>
                </button>
                <button
                    type="button"
                    onClick={() => executeCommand('underline')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Underline"
                >
                    <span className="material-symbols-outlined text-base">format_underlined</span>
                </button>
                <button
                    type="button"
                    onClick={() => executeCommand('strikeThrough')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Strikethrough"
                >
                    <span className="material-symbols-outlined text-base">format_strikethrough</span>
                </button>
                
                <div className="w-px h-5 bg-outline-variant/20 my-auto mx-1"></div>
                
                <button
                    type="button"
                    onClick={() => executeCommand('insertUnorderedList')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Bullet List"
                >
                    <span className="material-symbols-outlined text-base">format_list_bulleted</span>
                </button>
                <button
                    type="button"
                    onClick={() => executeCommand('insertOrderedList')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Numbered List"
                >
                    <span className="material-symbols-outlined text-base">format_list_numbered</span>
                </button>
                
                <div className="w-px h-5 bg-outline-variant/20 my-auto mx-1"></div>
                
                <button
                    type="button"
                    onClick={() => executeCommand('justifyLeft')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Align Left"
                >
                    <span className="material-symbols-outlined text-base">format_align_left</span>
                </button>
                <button
                    type="button"
                    onClick={() => executeCommand('justifyCenter')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Align Center"
                >
                    <span className="material-symbols-outlined text-base">format_align_center</span>
                </button>
                <button
                    type="button"
                    onClick={() => executeCommand('justifyRight')}
                    className="p-1.5 hover:bg-white/10 text-on-surface-variant hover:text-white rounded transition-colors flex items-center justify-center"
                    title="Align Right"
                >
                    <span className="material-symbols-outlined text-base">format_align_right</span>
                </button>

                <div className="w-px h-5 bg-outline-variant/20 my-auto mx-1"></div>

                <button
                    type="button"
                    onClick={() => executeCommand('removeFormat')}
                    className="p-1.5 hover:bg-red-500/20 text-error rounded transition-colors flex items-center justify-center"
                    title="Clear Formatting"
                >
                    <span className="material-symbols-outlined text-base">format_clear</span>
                </button>
            </div>

            {/* Editable Content Area */}
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                onBlur={handleInput}
                className="w-full min-h-[140px] max-h-[300px] overflow-y-auto px-4 py-3 text-white text-sm focus:outline-none rich-text-editor-body"
                placeholder={placeholder}
                style={{ outline: 'none' }}
            />
        </div>
    );
}
