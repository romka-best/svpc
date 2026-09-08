import type { AttractionCategory } from '../../constants';
import { getAttractionsByCategory } from '../../constants';
import { AttractionCard } from '../attraction-card';

interface AttractionCategoryRowProps {
  canSelect: (id: string) => boolean;
  category: AttractionCategory;
  disabled?: boolean;
  onOpen: (id: string) => void;
  onToggle: (id: string) => void;
  selectedIds: readonly string[];
}

const AttractionCategoryRow = ({
  canSelect,
  category,
  disabled = false,
  onOpen,
  onToggle,
  selectedIds,
}: AttractionCategoryRowProps) => {
  const attractions = getAttractionsByCategory(category.id);
  const Icon = category.icon;

  return (
    <div className="flex w-full min-w-0 flex-col gap-2">
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

      <div
        aria-label={`${category.label} attractions`}
        className="grid w-full min-w-0 grid-cols-[repeat(auto-fill,minmax(min(11.25rem,100%),1fr))] gap-2 py-1"
        role="region"
      >
        {attractions.map((attraction) => {
          return (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              disabled={disabled}
              isSelected={selectedIds.includes(attraction.id)}
              selectDisabled={!canSelect(attraction.id)}
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
