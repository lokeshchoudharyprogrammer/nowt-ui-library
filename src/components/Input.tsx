import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelClassName,
      containerClassName,
      containerStyle,
      helperText,
      error,
      leftIcon,
      rightIcon,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={containerClassName}
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '1rem',
          ...containerStyle,
        }}
      >
        {label && (
          <label
            htmlFor={props.id}
            className={labelClassName}
            style={{ marginBottom: '0.5rem' }}
          >
            {label}
          </label>
        )}

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {leftIcon && (
            <div style={{ position: 'absolute', left: '10px' }}>{leftIcon}</div>
          )}

          <input
            ref={ref}
            {...props}
            className={className}
            style={{
              padding: leftIcon || rightIcon ? '10px 40px' : '10px 16px',
              border: `1px solid ${error ? 'red' : '#ccc'}`,
              borderRadius: '6px',
              width: '100%',
              fontSize: '16px',
              ...style,
            }}
          />

          {rightIcon && (
            <div style={{ position: 'absolute', right: '10px' }}>{rightIcon}</div>
          )}
        </div>

        {helperText && !error && (
          <small style={{ color: '#666', marginTop: '4px' }}>{helperText}</small>
        )}
        {error && <small style={{ color: 'red', marginTop: '4px' }}>{error}</small>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 
