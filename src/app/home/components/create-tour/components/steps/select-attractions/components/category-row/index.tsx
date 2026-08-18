'use client';

import type { AttractionCategory } from '../../constants';
import { getAttractionsByCategory } from '../../constants';
import { AttractionCard } from '../attraction-card';

interface AttractionCategoryRowProps {
  category: AttractionCategory;
  disabled?: boolean;
  onOpen: (id: string) => void;
  onToggle: (id: string) => void;
  selectedIds: readonly string[];
}

const AttractionCategoryRow = ({
  category,
  disabled = false,
  onOpen,
  onToggle,
  selectedIds,
}: AttractionCategoryRowProps) => {
  const attractions = getAttractionsByCategory(category.id);
  const Icon = category.icon;

  return (
    <div className="flex w-full flex-col gap-2">
      <div
        className="flex h-6 w-fit items-center gap-1 rounded-[30px] px-2 py-0.5"
        style={{ backgroundColor: `${category.color}33` }}
      >
        <Icon
          className="size-4"
          style={{ color: category.color }}
        />
        <span
          className="text-sm tracking-tight"
          style={{ color: category.color }}
        >
          {category.label}
        </span>
      </div>

      <div className="-mx-2 flex gap-2 overflow-x-auto px-2 py-2 scrollbar-none">
        {attractions.map((attraction) => {
          return (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              disabled={disabled}
              isSelected={selectedIds.includes(attraction.id)}
              onOpen={onOpen}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export { AttractionCategoryRow };
