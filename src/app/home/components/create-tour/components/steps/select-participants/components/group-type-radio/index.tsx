'use client';

import { Radio } from '@/components/ui/base/radio';
import { RadioGroup } from '@/components/ui/base/radio-group';
import { cn } from '@/lib/utils';

import { GROUP_TYPES } from '../../../../../constants';
import type { GroupType } from '../../../../../types';

interface GroupTypeRadioProps {
  onChange: (groupType: GroupType) => void;
  value: GroupType;
}

const GroupTypeRadio = ({
  onChange,
  value,
}: GroupTypeRadioProps) => {
  return (
    <RadioGroup
      className="flex flex-row flex-wrap gap-4"
      value={value}
      onValueChange={(nextValue) => {
        onChange(nextValue as GroupType);
      }}
    >
      {GROUP_TYPES.map((option) => {
        const isSelected = option.id === value;
        const id = `group-type-${option.id}`;

        return (
          <label
            key={option.id}
            className="flex cursor-pointer items-center gap-2"
            htmlFor={id}
          >
            <Radio
              id={id}
              value={option.id}
            />
            <span
              className={cn(
                'text-sm font-medium tracking-tight',
                isSelected ? 'text-white' : 'text-light-gray',
              )}
            >
              {option.label}
            </span>
          </label>
        );
      })}
    </RadioGroup>
  );
};

export { GroupTypeRadio };
