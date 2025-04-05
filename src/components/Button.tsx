import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  bgColor?: string;     // ✅ Custom background color
  textColor?: string;   // ✅ Custom text color
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return { padding: '6px 12px', fontSize: '14px' };
    case 'large':
      return { padding: '14px 28px', fontSize: '18px' };
    default:
      return { padding: '10px 20px', fontSize: '16px' };
  }
};

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return { background: '#666', color: '#fff' };
    case 'danger':
      return { background: '#e00', color: '#fff' };
    case 'outline':
      return {
        background: 'transparent',
        color: '#0070f3',
        border: '2px solid #0070f3',
      };
    default:
      return { background: '#0070f3', color: '#fff' };
  }
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = 'medium',
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = false,
  bgColor,
  textColor,
}) => {
  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant);

  return (
    <button
      style={{
        ...sizeStyles,
        ...variantStyles,
        background: bgColor || variantStyles.background,
        color: textColor || variantStyles.color,
        borderRadius: '6px',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <span
          style={{
            width: '16px',
            height: '16px',
            border: `2px solid ${textColor || '#fff'}`,
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}
      {label}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
  );
};

export default Button;
