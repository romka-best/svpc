'use client';

import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'motion/react';

import { cn } from '@/lib/utils';

interface CasinoDigitProps {
  digit: number;
  spinKey: number;
}

const DIGIT_STRIP = Array.from({ length: 30 }, (_, index) => {
  return index % 10;
});

const ROLL_MS = 700;
const ROLL_EASE: [
  number,
  number,
  number,
  number,
] = [
  0.16,
  1,
  0.3,
  1,
];

const CasinoDigit = ({
  digit,
  spinKey,
}: CasinoDigitProps) => {
  const slot = useMotionValue(20 + digit);
  const y = useTransform(slot, (value) => {
    return `${-value}em`;
  });
  const previousDigitRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const previousDigit = previousDigitRef.current;
    previousDigitRef.current = digit;

    if (spinKey === 0 && previousDigit === null) {
      slot.set(20 + digit);

      return;
    }

    const fromDigit = previousDigit === null ? 0 : previousDigit;
    slot.set(10 + fromDigit);

    const controls = animate(slot, 20 + digit, {
      duration: ROLL_MS / 1000,
      ease: ROLL_EASE,
    });

    return () => {
      controls.stop();
    };
  }, [
    digit,
    slot,
    spinKey,
  ]);

  return (
    <span className="relative inline-block h-[1em] w-[0.6em] overflow-hidden align-middle">
      <motion.span
        aria-hidden
        className="absolute top-0 left-0 flex w-full flex-col will-change-transform"
        style={{ y }}
      >
        {DIGIT_STRIP.map((value, index) => {
          return (
            <span
              key={`${value}-${index}`}
              className="flex h-[1em] w-full shrink-0 items-center justify-center leading-none"
            >
              {value}
            </span>
          );
        })}
      </motion.span>
    </span>
  );
};

type PriceChar =
  | {
    kind: 'digit';
    placeFromRight: number;
    value: number;
  }
  | {
    kind: 'group';
    placeFromRight: number;
  };

const getDigitCount = (value: number) => {
  return Math.max(1, String(value).length);
};

const getGroupedPriceChars = (digitString: string) => {
  const chars: PriceChar[] = [

  ];

  digitString.split('').forEach((char, index) => {
    const placeFromRight = digitString.length - 1 - index;

    if (index > 0 && (digitString.length - index) % 3 === 0) {
      chars.push({
        kind: 'group',
        placeFromRight,
      });
    }

    chars.push({
      kind: 'digit',
      placeFromRight,
      value: Number(char),
    });
  });

  return chars;
};

interface CasinoPriceProps {
  className?: string;
  price: number;
  suffix?: string;
}

const CasinoPrice = ({
  className,
  price,
  suffix = '$',
}: CasinoPriceProps) => {
  const roundedPrice = Math.max(0, Math.round(price));
  const previousPriceRef = useRef(roundedPrice);
  const [
    spinKey,
    setSpinKey,
  ] = useState(0);
  const [
    columnCount,
    setColumnCount,
  ] = useState(() => {
    return getDigitCount(roundedPrice);
  });

  useLayoutEffect(() => {
    if (previousPriceRef.current === roundedPrice) {
      return;
    }

    const previousPrice = previousPriceRef.current;
    const nextLength = getDigitCount(roundedPrice);
    const previousLength = getDigitCount(previousPrice);
    const isShrinking = roundedPrice < previousPrice;

    setSpinKey((current) => {
      return current + 1;
    });

    if (isShrinking) {
      setColumnCount(Math.max(nextLength, previousLength));

      const timeoutId = window.setTimeout(() => {
        setColumnCount(nextLength);
        previousPriceRef.current = roundedPrice;
      }, ROLL_MS);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    setColumnCount(nextLength);
    previousPriceRef.current = roundedPrice;
  }, [
    roundedPrice,
  ]);

  const paddedDigits = String(roundedPrice).padStart(columnCount, '0');
  const groupedChars = getGroupedPriceChars(paddedDigits);
  const firstSignificantIndex = roundedPrice === 0
    ? groupedChars.length - 1
    : groupedChars.findIndex((item) => {
      return item.kind === 'digit' && item.value !== 0;
    });

  return (
    <span
      aria-label={`${roundedPrice.toLocaleString('en-US')}${suffix}`}
      className={cn(
        'inline-flex max-w-full items-center overflow-x-auto leading-none font-medium tracking-tight text-white tabular-nums scrollbar-none',
        className,
      )}
    >
      {groupedChars.map((item, index) => {
        const isLeading = index < firstSignificantIndex;

        if (item.kind === 'group') {
          return (
            <span
              key={`group-${item.placeFromRight}`}
              aria-hidden
              className={cn(
                'inline-flex h-[1em] items-center justify-center leading-none',
                isLeading
                  ? 'w-0 overflow-hidden opacity-0'
                  : 'w-[0.28em] opacity-100',
              )}
            >
              ,
            </span>
          );
        }

        return (
          <span
            key={`place-${item.placeFromRight}`}
            className={cn(
              'inline-flex h-[1em] items-center',
              isLeading
                ? 'w-0 overflow-hidden opacity-0'
                : 'w-[0.6em] opacity-100',
            )}
          >
            <CasinoDigit
              digit={Number.isNaN(item.value) ? 0 : item.value}
              spinKey={spinKey}
            />
          </span>
        );
      })}
      <span className="inline-flex h-[1em] shrink-0 items-center leading-none">
        {suffix}
      </span>
    </span>
  );
};

export { CasinoPrice };
