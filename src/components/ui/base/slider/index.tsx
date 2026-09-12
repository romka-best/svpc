'use client';

import {
  Children,
  type ComponentRef,
  isValidElement,
  type ReactNode,
  type Ref,
  useCallback,
  useState,
} from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

import { SliderContext } from './context';
import { SliderLabel } from './label';
import type {
  SliderProps,
  SliderValuePosition,
  SliderValueProps,
} from './types';
import { SliderValue } from './value';
import {
  sliderRangeVariants,
  sliderThumbVariants,
  sliderTrackVariants,
  sliderVariants,
} from './variants';

const getSliderValueProps = (child: ReactNode): {
  children?: ReactNode;
  position: SliderValuePosition;
} | undefined => {
  if (isValidElement(child) && child.type === SliderValue) {
    const props = child.props as SliderValueProps;

    return {
      children: props.children,
      position: props.position ?? 'top',
    };
  }

  return undefined;
};

const Slider = ({
  className,
  size = 'md',
  variant = 'primary',
  status = 'default',
  defaultValue,
  value,
  min = 0,
  max = 100,
  children,
  onValueChange,
  disabled,
  ref,
  ...props
}: SliderProps & {
  ref?: Ref<ComponentRef<typeof SliderPrimitive.Root>>;
}) => {
  const isDisabled = disabled || status === 'loading';
  const thumbCount = value?.length ?? defaultValue?.length ?? 1;
  const [
    internalValue,
    setInternalValue,
  ] = useState<number[]>(defaultValue ?? [
    min,
  ]);
  const currentValue = value ?? internalValue;

  const handleValueChange = useCallback((newValue: number[]) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }

    onValueChange?.(newValue);
  }, [
    onValueChange,
    value,
  ]);

  const childrenArray = Children.toArray(children);
  const label = childrenArray.find((child) => {
    return isValidElement(child) && child.type === SliderLabel;
  });
  const valueElement = childrenArray.find((child) => {
    return isValidElement(child) && child.type === SliderValue;
  });
  const valueProps = valueElement ? getSliderValueProps(valueElement) : undefined;
  const valuePosition = valueProps?.position;
  const hasHeader = Boolean(label || valuePosition === 'top');
  const showThumbValue = valuePosition === 'bottom';
  const thumbValueContent = showThumbValue
    && thumbCount === 1
    && valueProps?.children !== undefined
    ? valueProps.children
    : undefined;

  return (
    <SliderContext.Provider value={{
      currentValue,
      max,
      min,
      size: size ?? 'md',
    }}
    >
      <div
        className={cn('group flex w-full flex-col gap-2', className)}
        data-size={size}
        data-slot="slider"
      >
        {hasHeader
          ? (
            <div className="flex items-center justify-between">
              {label ?? <span />}
              {valuePosition === 'top' ? valueElement : <span />}
            </div>
          )
          : null}

        <SliderPrimitive.Root
          ref={ref}
          className={cn(sliderVariants({
            size,
            variant,
            status,
          }))}
          defaultValue={defaultValue}
          disabled={isDisabled}
          max={max}
          min={min}
          value={value}
          onValueChange={handleValueChange}
          {...props}
        >
          <SliderPrimitive.Track className={cn(sliderTrackVariants({
            size,
            variant,
            status,
          }))}
          >
            <SliderPrimitive.Range className={cn(sliderRangeVariants({
              variant,
              status,
            }))}
            />
          </SliderPrimitive.Track>

          {Array.from({ length: thumbCount }).map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className={cn(
                sliderThumbVariants({
                  size,
                  variant,
                  status,
                }),
                showThumbValue && 'relative',
              )}
            >
              {showThumbValue
                ? (
                  <span className={cn(
                    'absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-medium tracking-tight text-primary',
                    size === 'sm' && 'top-3.5 text-xs',
                    size === 'md' && 'top-4 text-base',
                    size === 'lg' && 'top-5 text-base',
                  )}
                  >
                    {thumbValueContent ?? currentValue[index]}
                  </span>
                )
                : null}
            </SliderPrimitive.Thumb>
          ))}
        </SliderPrimitive.Root>
      </div>
    </SliderContext.Provider>
  );
};

export {
  Slider,
  SliderLabel,
  SliderValue,
};
