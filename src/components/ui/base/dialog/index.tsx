'use client';

import {
  createContext,
  useContext,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type Ref,
} from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/base/button';
import { cn } from '@/lib/utils';

import type {
  DialogContentProps,
  DialogContextValue,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogTitleProps,
} from './types';
import {
  dialogContentVariants,
  dialogDescriptionVariants,
  dialogFooterVariants,
  dialogHeaderVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
} from './variants';

const DialogContext = createContext<DialogContextValue | null>(null);

const useDialogContext = () => {
  return useContext(DialogContext);
};

const Dialog = (props: ComponentProps<typeof DialogPrimitive.Root>) => {
  return (
    <DialogPrimitive.Root
      data-slot="dialog"
      {...props}
    />
  );
};

const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = ({
  className,
  ref,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {
  ref?: Ref<ComponentRef<typeof DialogPrimitive.Overlay>>;
}) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(dialogOverlayVariants(), className)}
      data-slot="dialog-overlay"
      {...props}
    />
  );
};

const DialogHeader = ({
  className,
  size,
  ...props
}: DialogHeaderProps) => {
  const context = useDialogContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <div
      className={cn(dialogHeaderVariants({ size: effectiveSize }), className)}
      data-slot="dialog-header"
      {...props}
    />
  );
};

const DialogFooter = ({
  className,
  size,
  ...props
}: DialogFooterProps) => {
  const context = useDialogContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <div
      className={cn(dialogFooterVariants({ size: effectiveSize }), className)}
      data-slot="dialog-footer"
      {...props}
    />
  );
};

const DialogTitle = ({
  className,
  size,
  ref,
  ...props
}: DialogTitleProps & {
  ref?: Ref<ComponentRef<typeof DialogPrimitive.Title>>;
}) => {
  const context = useDialogContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(dialogTitleVariants({ size: effectiveSize }), className)}
      data-slot="dialog-title"
      {...props}
    />
  );
};

const DialogDescription = ({
  className,
  size,
  ref,
  ...props
}: DialogDescriptionProps & {
  ref?: Ref<ComponentRef<typeof DialogPrimitive.Description>>;
}) => {
  const context = useDialogContext();
  const effectiveSize = size ?? context?.size ?? 'md';

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(dialogDescriptionVariants({ size: effectiveSize }), className)}
      data-slot="dialog-description"
      {...props}
    />
  );
};

const DialogContent = ({
  className,
  size = 'md',
  showCloseButton = true,
  children,
  ref,
  ...props
}: DialogContentProps & {
  ref?: Ref<ComponentRef<typeof DialogPrimitive.Content>>;
}) => {
  return (
    <DialogContext.Provider value={{ size: size ?? 'md' }}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            dialogContentVariants({ size }),
            'fixed top-1/2 left-1/2 max-h-[90vh] w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-auto sm:w-[calc(100%-2rem)]',
            className,
          )}
          data-slot="dialog-content"
          {...props}
        >
          {children}
          {showCloseButton
            ? (
              <DialogPrimitive.Close
                asChild
                data-slot="dialog-close"
              >
                <Button
                  className="absolute top-4 right-4 md:top-6 md:right-6"
                  priority="neutral"
                  size="m"
                  variant="ghost"
                >
                  <X className="size-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogPrimitive.Close>
            )
            : null}
        </DialogPrimitive.Content>
      </DialogPortal>
    </DialogContext.Provider>
  );
};

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
