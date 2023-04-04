import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Button from '../Button';

describe('Button', () => {
  it('renders the button with text content', () => {
    const buttonText = 'Click me';
    render(<Button className="test-class">{buttonText}</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
    expect(buttonElement).toHaveClass('test-class');
  });

  it('disables the button when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('applies the correct styles based on the variant prop', () => {
    const primaryButtonText = 'Primary button';
    const secondaryButtonText = 'Secondary button';
    render(
      <>
        <Button variant="primary">{primaryButtonText}</Button>
        <Button variant="secondary">{secondaryButtonText}</Button>
      </>
    );
    const primaryButtonElement = screen.getByRole('button', { name: primaryButtonText });
    const secondaryButtonElement = screen.getByRole('button', { name: secondaryButtonText });

    expect(primaryButtonElement).toHaveClass('button--primary');
    expect(primaryButtonElement).not.toHaveClass('button--secondary');
    expect(secondaryButtonElement).toHaveClass('button--secondary');
    expect(secondaryButtonElement).not.toHaveClass('button--primary');
  });

  it('applies the correct styles based on the size prop', () => {
    const smallButtonText = 'Small button';
    const mediumButtonText = 'Medium button';
    const largeButtonText = 'Large button';
    render(
      <>
        <Button size="sm">{smallButtonText}</Button>
        <Button size="md">{mediumButtonText}</Button>
        <Button size="lg">{largeButtonText}</Button>
      </>
    );
    const smallButtonElement = screen.getByRole('button', { name: smallButtonText });
    const mediumButtonElement = screen.getByRole('button', { name: mediumButtonText });
    const largeButtonElement = screen.getByRole('button', { name: largeButtonText });

    expect(smallButtonElement).toHaveClass('button--sm');
    expect(mediumButtonElement).toHaveClass('button--md');
    expect(largeButtonElement).toHaveClass('button--lg');
  });

  it('applies custom class names to the button', () => {
    const className = 'custom-class';
    render(<Button className={className}>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass(className);
  });
});
