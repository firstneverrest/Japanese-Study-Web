import { FC } from 'react';

const Center: FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>
  );
};

export default Center;
