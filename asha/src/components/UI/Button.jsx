import React from 'react';

/**
 * Button component with configurable style options
 * 
 * @param {Object} props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline)
 * @param {string} [props.size='md'] - Button size (sm, md, lg)
 * @param {boolean} [props.fullWidth=false] - Whether button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether button is disabled
 * @param {string} [props.type='button'] - Button type attribute
 */
const Button = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    ...props
}) => {
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Size classes
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };

    // Variant classes
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500 disabled:bg-blue-300',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500 disabled:bg-gray-100',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500 disabled:opacity-50'
    };

    // Width classes
    const widthClasses = fullWidth ? 'w-full' : '';

    // Combine all classes
    const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.primary}
    ${widthClasses}
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;