'use client';

import { useState } from 'react';

import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/base/button';
import { Switch } from '@/components/ui/base/switch';
import { cn } from '@/lib/utils';

import { usePlanYourTour } from '../../../context';

import { AttractionDetailDialog } from './components/attraction-detail-dialog';
import { AttractionCategoryRow } from './components/category-row';
import {
  ATTRACTION_CATEGORIES,
  AUTO_ATTRACTION_IDS,
} from './constants';

const SelectAttractionsStep = () => {
  const {
    answers,
    canGoBack,
    goBack,
    goNext,
    patchSelectAttractions,
  } = usePlanYourTour();

  const {
    autoChoice,
    selectedIds,
  } = answers['select-attractions'];

  const [
    previewAttractionId,
    setPreviewAttractionId,
  ] = useState<string | null>(null);
  const [
    isPreviewOpen,
    setIsPreviewOpen,
  ] = useState(false);

  const openAttractionPreview = (id: string) => {
    setPreviewAttractionId(id);
    setIsPreviewOpen(true);
  };

  const toggleAttraction = (id: string) => {
    if (autoChoice) {
      return;
    }

    const isSelected = selectedIds.includes(id);

    patchSelectAttractions({
      selectedIds: isSelected
        ? selectedIds.filter((selectedId) => {
          return selectedId !== id;
        })
        : [
          ...selectedIds,
          id,
        ],
    });
  };

  const hasSelectedAttractions = selectedIds.length > 0;

  const handleAutoChoiceChange = (checked: boolean) => {
    if (checked) {
      patchSelectAttractions({
        autoChoice: true,
        selectedIds: [
          ...AUTO_ATTRACTION_IDS,
        ],
      });

      return;
    }

    patchSelectAttractions({
      autoChoice: false,
      selectedIds: [
      ],
    });
  };

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-6">
      <div className="flex min-h-0 w-full flex-1 flex-col gap-4">
        <div className="flex w-full shrink-0 flex-col gap-2.5">
          <p className="flex items-center gap-2 text-base font-medium tracking-tight text-white">
            <Sparkles className="size-4 shrink-0 text-primary" />
            AI Choice
          </p>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'text-sm font-medium tracking-tight',
                autoChoice ? 'text-light-gray' : 'text-white',
              )}
            >
              OFF
            </span>
            <Switch
              checked={autoChoice}
              size="md"
              onCheckedChange={handleAutoChoiceChange}
            />
            <span
              className={cn(
                'text-sm font-medium tracking-tight',
                autoChoice ? 'text-white' : 'text-light-gray',
              )}
            >
              ON
            </span>
          </div>
        </div>

        <div
          className={cn(
            'flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-2 -m-2 transition-opacity duration-300',
            autoChoice && 'pointer-events-none opacity-20',
          )}
        >
          {ATTRACTION_CATEGORIES.map((category) => {
            return (
              <AttractionCategoryRow
                key={category.id}
                category={category}
                disabled={autoChoice}
                selectedIds={selectedIds}
                onOpen={openAttractionPreview}
                onToggle={toggleAttraction}
              />
            );
          })}
        </div>
      </div>

      <div className="flex w-full shrink-0 items-center justify-between gap-4">
        <Button
          className="h-12.5 gap-2 px-5 py-2.5 text-base tracking-tight"
          disabled={!canGoBack}
          size="l"
          type="button"
          variant="outline"
          onClick={goBack}
        >
          <ChevronLeft className="size-6" />
          Back
        </Button>

        <Button
          className="h-12.5 gap-2 px-5 py-2.5 text-base tracking-tight text-white-gray"
          disabled={!hasSelectedAttractions}
          size="l"
          type="button"
          onClick={goNext}
        >
          Next
          <ChevronRight className="size-6" />
        </Button>
      </div>

      <AttractionDetailDialog
        attractionId={previewAttractionId}
        disabled={autoChoice}
        isSelected={Boolean(
          previewAttractionId && selectedIds.includes(previewAttractionId),
        )}
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        onToggle={toggleAttraction}
      />
    </div>
  );
};

export { SelectAttractionsStep };
