import React from 'react';
type ButtonProps = {
    label: string;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    bgColor?: string;
    textColor?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
