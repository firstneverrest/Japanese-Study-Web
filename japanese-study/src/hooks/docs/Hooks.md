# Essential Custom Hooks

## 1. UseToggle

```ts
// useToggle.ts
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
```

```ts
// usage
import React from 'react';
import { useToggle } from '../hooks';

const UseToggleTest: React.FC = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <>
      <p>{value.toString()}</p>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>make true</button>
      <button onClick={() => toggleValue(false)}>make false</button>
    </>
  );
};

export default UseToggleTest;
```
