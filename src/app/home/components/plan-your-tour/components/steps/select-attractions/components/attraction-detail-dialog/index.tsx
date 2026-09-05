'use client';

import {
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import {
  Check,
  MapPin,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  Star,
} from 'lucide-react';

import { Button } from '@/components/ui/base/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/base/dialog';
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/base/empty';
import { Input } from '@/components/ui/base/input';
import { cn } from '@/lib/utils';

import {
  ATTRACTIONS_BY_ID,
  getAttractionDetails,
  type Attraction,
} from '../../constants';

const AI_SUGGESTIONS = [
  'Tell me about this place',
  'What\'s nearby?',
] as const;

interface ChatMessage {
  id: string;
  role: 'assistant' | 'user';
  text: string;
}

interface AttractionDetailDialogProps {
  attractionId: string | null;
  disabled?: boolean;
  isSelected: boolean;
  onOpenChange: (open: boolean) => void;
  onToggle: (id: string) => void;
  open: boolean;
}

interface AttractionDetailContentProps {
  attraction: Attraction;
  details: ReturnType<typeof getAttractionDetails>;
  disabled?: boolean;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const getAssistantReply = (prompt: string, attractionTitle: string) => {
  if (prompt.toLowerCase().includes('nearby')) {
    return `Around ${attractionTitle} you'll find cafés, viewpoints, and other Silicon Valley landmarks within a short drive. Ask if you want a custom route.`;
  }

  return `Silicon Valley Boy offers exclusive, premium tours that provide personalized and immersive experiences in the heart of the tech world. Explore behind-the-scenes access near ${attractionTitle}, leading IT companies, and prestigious universities.`;
};

const AttractionDetailContent = ({
  attraction,
  details,
  disabled = false,
  isSelected,
  onToggle,
}: AttractionDetailContentProps) => {
  const nextMessageIdRef = useRef(0);
  const [
    activeGalleryIndex,
    setActiveGalleryIndex,
  ] = useState(0);
  const [
    prompt,
    setPrompt,
  ] = useState('');
  const [
    messages,
    setMessages,
  ] = useState<ChatMessage[]>([
  ]);

  const handleSendPrompt = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    const userId = nextMessageIdRef.current;
    nextMessageIdRef.current += 1;
    const assistantId = nextMessageIdRef.current;
    nextMessageIdRef.current += 1;

    const userMessage: ChatMessage = {
      id: `user-${userId}`,
      role: 'user',
      text: trimmed,
    };
    const assistantMessage: ChatMessage = {
      id: `assistant-${assistantId}`,
      role: 'assistant',
      text: getAssistantReply(trimmed, attraction.title),
    };

    setMessages((current) => {
      return [
        ...current,
        userMessage,
        assistantMessage,
      ];
    });
    setPrompt('');
  };

  return (
    <DialogContent
      className="grid h-[min(90dvh,900px)] max-h-[min(90dvh,900px)] grid-rows-[minmax(0,1.15fr)_minmax(240px,1fr)] gap-6 overflow-x-hidden overflow-y-hidden border-none bg-dark-gray lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)] lg:grid-rows-1 lg:items-stretch"
      size="xl"
    >
      <div className="min-h-0 overflow-x-hidden overflow-y-auto p-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 pr-8">
              <DialogTitle className="text-[28px] leading-[1.2] font-medium tracking-tight text-white md:text-[40px]">
                {attraction.title}
              </DialogTitle>
              <div className="flex items-center gap-0.5 text-sm tracking-tight text-white">
                <MapPin className="size-4 shrink-0 text-light-gray" />
                <span>{details.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-xl font-medium tracking-tight text-white-gray md:text-2xl">
                  {details.rating}
                </span>
                <Star className="size-5 fill-primary text-primary md:size-6" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-medium tracking-tight text-white-gray md:text-2xl">
                  {details.reviewCount}
                </span>
                <MessageCircle className="size-5 text-light-gray md:size-6" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg md:aspect-630/356">
              <Image
                fill
                alt={attraction.title}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 630px"
                src={details.gallery[activeGalleryIndex] ?? attraction.image}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-dark-gray/50"
              />
              <button
                aria-label="Play media"
                className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white transition-opacity hover:opacity-90"
                type="button"
              >
                <Play className="size-11 fill-white" />
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto scrollbar-none">
              {details.gallery.map((src, index) => {
                const isActive = index === activeGalleryIndex;

                return (
                  <button
                    key={`${src}-${index}`}
                    aria-label={`Show gallery image ${index + 1}`}
                    className={cn(
                      'relative h-13.5 w-24 shrink-0 overflow-hidden rounded-lg',
                      isActive && 'ring-1 ring-primary',
                    )}
                    type="button"
                    onClick={() => {
                      setActiveGalleryIndex(index);
                    }}
                  >
                    <Image
                      fill
                      alt=""
                      className="object-cover"
                      sizes="95px"
                      src={src}
                    />
                    {index === 0
                      ? (
                        <span className="absolute inset-0 flex items-center justify-center bg-dark-gray/30">
                          <Play className="size-5 fill-white text-white" />
                        </span>
                      )
                      : null}
                  </button>
                );
              })}
            </div>

            <Button
              className={cn(
                'h-12.5 w-full gap-2 px-5 py-2.5 text-base tracking-tight text-white-gray',
                !isSelected && 'bg-background hover:bg-white hover:text-background',
              )}
              disabled={disabled}
              size="l"
              type="button"
              variant={isSelected ? 'default' : 'secondary'}
              onClick={() => {
                onToggle(attraction.id);
              }}
            >
              <Check className="size-6" />
              {isSelected ? 'Selected' : 'Select'}
            </Button>
          </div>

          <DialogDescription className="max-w-md text-base leading-[1.2] tracking-tight text-white-gray">
            {details.description}
          </DialogDescription>
        </div>
      </div>

      <div className="flex min-h-0 flex-col gap-4 overflow-hidden rounded-[15px] bg-background p-4">
        <div className="flex shrink-0 items-center gap-2">
          <Sparkles className="size-6 text-primary" />
          <p className="text-base font-semibold tracking-tight text-white">
            Ask AI
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4">
          <div className="min-h-0 flex-1 overflow-y-auto pr-1">
            {messages.length === 0
              ? (
                <Empty
                  className="h-full min-h-40 justify-center"
                  size="sm"
                >
                  <EmptyHeader>
                    <EmptyTitle>No messages yet</EmptyTitle>
                    <EmptyMedia
                      className="bg-transparent text-[32px] leading-none"
                      variant="default"
                    >
                      💬
                    </EmptyMedia>
                  </EmptyHeader>
                </Empty>
              )
              : (
                <div className="flex flex-col gap-4">
                  {messages.map((message) => {
                    const isUser = message.role === 'user';

                    return (
                      <div
                        key={message.id}
                        className={cn(
                          'max-w-[90%] rounded-xl p-2.5 text-sm tracking-tight text-white',
                          isUser
                            ? 'ml-auto bg-primary'
                            : 'mr-auto bg-gray',
                        )}
                      >
                        {message.text}
                      </div>
                    );
                  })}
                </div>
              )}
          </div>

          <div className="flex shrink-0 flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {AI_SUGGESTIONS.map((suggestion) => {
                return (
                  <button
                    key={suggestion}
                    className="h-8 cursor-pointer rounded-[30px] border border-light-gray px-3.25 text-sm tracking-tight text-light-gray transition-colors hover:border-white hover:text-white"
                    type="button"
                    onClick={() => {
                      handleSendPrompt(suggestion);
                    }}
                  >
                    {suggestion}
                  </button>
                );
              })}
            </div>

            <form
              className="flex h-12.5 items-center gap-2 rounded-lg bg-dark-gray py-1.5 pr-2 pl-4"
              onSubmit={(event) => {
                event.preventDefault();
                handleSendPrompt(prompt);
              }}
            >
              <Input
                className="h-auto min-w-0 flex-1 border-none bg-transparent px-0 py-0 text-base tracking-tight shadow-none focus-visible:border-transparent"
                placeholder="Ask the AI something about this place"
                value={prompt}
                onChange={(event) => {
                  setPrompt(event.target.value);
                }}
              />
              <Button
                aria-label="Send"
                className="size-10 shrink-0 p-2"
                shape="rounded"
                size="m"
                type="submit"
              >
                <Send className="size-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

const AttractionDetailDialog = ({
  attractionId,
  disabled = false,
  isSelected,
  onOpenChange,
  onToggle,
  open,
}: AttractionDetailDialogProps) => {
  const attraction = attractionId
    ? ATTRACTIONS_BY_ID[attractionId]
    : null;
  const details = attraction
    ? getAttractionDetails(attraction)
    : null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      {attraction && details
        ? (
          <AttractionDetailContent
            key={attraction.id}
            attraction={attraction}
            details={details}
            disabled={disabled}
            isSelected={isSelected}
            onToggle={onToggle}
          />
        )
        : null}
    </Dialog>
  );
};

export { AttractionDetailDialog };
