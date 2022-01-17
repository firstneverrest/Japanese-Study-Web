import { useState } from 'react';

const useToggle = (defaultValue: boolean | undefined) => {
  const [value, setValue] = useState<any>(defaultValue || false);

  const toggleValue = (value: boolean) => {
    setValue((currentValue: boolean) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  };

  return [value, toggleValue];
};

export default useToggle;
