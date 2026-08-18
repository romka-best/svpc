import { useContext } from 'react';

import { SliderContext } from '../context';

const useSliderContext = () => {
  return useContext(SliderContext);
};

export { useSliderContext };
