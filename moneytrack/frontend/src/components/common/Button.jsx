import { COLORS } from "../../utils/constants";

const Button = ({
    children, 
    variant= 'primary', 
    size ='md', 
    onClick, 
    disabled=false, 
    type='button', 
    className='', 
    ...props
}) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants = {
        primary: `bg-[${COLORS.primary}] text-white hover:opacity-90 focus:ring-[${COLORS.primary}]`,
        secondary: `bg-[${COLORS.secondary}] text-white hover:opacity-90 focus:ring-[${COLORS.secondary}]`,
        success: `bg-[${COLORS.success}] text-white hover:opacity-90 focus:ring-[${COLORS.success}]`,
        danger: `bg-[${COLORS.danger}] text-white hover:opacity-90 focus:ring-[${COLORS.danger}]`,
        outline: `border-2 border-[${COLORS.primary}] text-[${COLORS.primary}] hover:bg-[${COLORS.primary}] hover:text-white`,
        ghost: `text-[${COLORS.primary}] hover:bg-gray-100`,
      };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm', 
        md: 'px-4 py-2 text-base', 
        lg: 'px-6 py-3 text-lg', 
    }

    const disabledStyles = disabled 
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer'

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;