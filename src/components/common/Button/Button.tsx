import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
