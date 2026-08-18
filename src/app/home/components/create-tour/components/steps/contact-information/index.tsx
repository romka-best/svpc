'use client';

import {
  Check,
  ChevronLeft,
} from 'lucide-react';

import { Button } from '@/components/ui/base/button';
import { Input } from '@/components/ui/base/input';
import { cn } from '@/lib/utils';

import { useCreateTour } from '../../../context';

import {
  CONTACT_METHODS,
  isContactValueValid,
} from './constants';

const ContactInformationStep = () => {
  const {
    answers,
    canGoBack,
    canGoNext,
    goBack,
    patchContactInformation,
    submitTour,
  } = useCreateTour();

  const {
    agreedToPrivacy,
    contactValue,
    method,
  } = answers['contact-information'];

  const selectedMethod = CONTACT_METHODS.find((item) => {
    return item.id === method;
  }) ?? CONTACT_METHODS[0];

  const isValueValid = isContactValueValid(method, contactValue);
  const showValueError = contactValue.trim().length > 0 && !isValueValid;

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-6">
      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-2 -m-2">
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold tracking-tight text-white">
            Select a method of communication
          </p>
          <div className="flex flex-wrap gap-2">
            {CONTACT_METHODS.map((item) => {
              const isSelected = item.id === method;

              return (
                <button
                  key={item.id}
                  aria-pressed={isSelected}
                  className={cn(
                    'h-8 cursor-pointer rounded-[30px] border px-3.25 text-sm tracking-tight transition-colors duration-250',
                    isSelected
                      ? 'border-primary bg-primary/20 text-primary'
                      : 'border-light-gray text-light-gray hover:border-white hover:text-white',
                  )}
                  type="button"
                  onClick={() => {
                    patchContactInformation({
                      contactValue: '',
                      method: item.id,
                    });
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <label
            className="text-base font-semibold tracking-tight text-white"
            htmlFor="contact-value"
          >
            Communication contact
          </label>
          <Input
            aria-invalid={showValueError}
            autoComplete={method === 'email' ? 'email' : method === 'phone' ? 'tel' : 'username'}
            id="contact-value"
            inputMode={method === 'phone' ? 'tel' : 'text'}
            placeholder={selectedMethod.placeholder}
            status={showValueError ? 'error' : 'default'}
            type={method === 'email' ? 'email' : method === 'phone' ? 'tel' : 'text'}
            value={contactValue}
            onChange={(event) => {
              patchContactInformation({ contactValue: event.target.value });
            }}
          />
          {showValueError
            ? (
              <p className="text-sm tracking-tight text-destructive">
                {method === 'email'
                    && 'Enter a valid email address.'}
                {method === 'phone'
                    && 'Enter a valid phone number.'}
                {method === 'telegram'
                    && 'Enter a valid Telegram username.'}
              </p>
            )
            : null}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-checked={agreedToPrivacy}
            aria-label="Agree with the privacy policy and payment rules"
            className={cn(
              'flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[2px] border border-white transition-colors',
              agreedToPrivacy && 'border-primary bg-primary',
            )}
            role="checkbox"
            type="button"
            onClick={() => {
              patchContactInformation({ agreedToPrivacy: !agreedToPrivacy });
            }}
          >
            {agreedToPrivacy
              ? (
                <Check className="size-3 text-white" />
              )
              : null}
          </button>
          <button
            className="cursor-pointer text-left text-sm font-medium tracking-tight text-primary"
            type="button"
            onClick={() => {
              patchContactInformation({ agreedToPrivacy: !agreedToPrivacy });
            }}
          >
            I agree with the
            {' '}
            <span className="underline underline-offset-2">
              privacy policy and payment rules
            </span>
          </button>
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
          disabled={!canGoNext}
          size="l"
          type="button"
          onClick={submitTour}
        >
          Finish
        </Button>
      </div>
    </div>
  );
};

export { ContactInformationStep };
