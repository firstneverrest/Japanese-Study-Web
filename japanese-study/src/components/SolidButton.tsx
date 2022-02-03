import { FC } from 'react';

interface SolidButtonProps {
  color: 'primary';
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const SolidButton: FC<SolidButtonProps> = ({
  color,
  size,
  label,
  onClick,
  ...props
}) => {
  const buttonColor = color === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <div className="">
      <button className={`${buttonColor}`} type="button" {...props}>
        {label}
      </button>
    </div>
  );
};

export default SolidButton;
