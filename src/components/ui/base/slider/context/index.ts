import { createContext } from 'react';

import type { SliderContextValue } from '../types';

const SliderContext = createContext<SliderContextValue>({
  currentValue: [
    0,
  ],
  max: 100,
  min: 0,
  size: 'md',
});

export { SliderContext };
