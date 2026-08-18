'use client';

import {
  useContext,
  useState,
  type ComponentRef,
  type Ref,
} from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

import { RadioGroupContext } from './context';
import type {
  RadioGroupContextValue,
  RadioGroupProps,
} from './types';
import { radioGroupVariants } from './variants';

const useRadioGroupContext = () => {
  return useContext(RadioGroupContext);
};

const RadioGroup = ({
  className,
  type = 'default',
  size = 'md',
  variant = 'primary',
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  ref,
  ...props
}: RadioGroupProps & {
  ref?: Ref<ComponentRef<typeof RadioGroupPrimitive.Root>>;
}) => {
  const [
    internalValue,
    setInternalValue,
  ] = useState(defaultValue ?? undefined);
  const isControlled = controlledValue !== undefined;
  const currentValue = (isControlled ? controlledValue : internalValue) ?? undefined;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    onValueChange?.(newValue);
  };

  const contextValue: RadioGroupContextValue = {
    size: size ?? 'md',
    type: type ?? 'default',
    value: currentValue,
    variant: variant ?? 'primary',
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(radioGroupVariants({
          type,
          size,
          variant,
          className,
        }))}
        data-slot="radio-group"
        defaultValue={defaultValue}
        value={controlledValue}
        onValueChange={handleValueChange}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>
    </RadioGroupContext.Provider>
  );
};

export {
  RadioGroup,
  useRadioGroupContext,
};
