const Card = ({
    children, 
    className='', 
    padding='md', 
    shadow=true, 
    ...props
}) => {
    const paddings = {
        none: '', 
        sm: 'p-4', 
        md: 'p-6', 
        lg: 'p-8',
    }; 
    const shadowClass = shadow ? 'shadow-lg' : 'shadow';

    return (
        <div
        className={`
            bg-white rounded-x1 border border-gray-200 
            ${paddings[padding]}
            ${shadowClass}
            ${className}
        `}
        {...props}
        >
            {children}
        </div>
    );
};

export default Card 