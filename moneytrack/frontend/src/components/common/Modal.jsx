import { Children, useEffect } from "react";
import { X } from 'lucide-react'
import Button from "./Button";

const Modal = ({
    isOpen, 
    onClose, 
    title, 
    children, 
    size='md', 
    showCloseButton=true
}) => {
    useEffect(() => {
        const handleEscape = (e) => {
          if (e.key === 'Escape' && isOpen) {
            onClose();
          }
        };
        
        if (isOpen) {
          document.addEventListener('keydown', handleEscape);
          document.body.style.overflow = 'hidden';
        }
        
        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.body.style.overflow = 'unset';
        };
      }, [isOpen, onClose]);
      
      if (!isOpen) return null;
      
      const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
      };
      
      return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
          
          {/* Modal Content */}
          <div
            className={`
              relative bg-white rounded-xl shadow-2xl
              ${sizes[size]}
              w-full mx-4 max-h-[90vh] overflow-y-auto
              transform transition-all
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                {title && (
                  <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Đóng"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                )}
              </div>
            )}
            
            {/* Body */}
            <div className="p-6">
              {children}
            </div>
          </div>
        </div>
      );
};
    
export default Modal;
