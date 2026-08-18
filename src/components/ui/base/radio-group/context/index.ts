import { createContext } from 'react';

import type { RadioGroupContextValue } from '../types';

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export { RadioGroupContext };
