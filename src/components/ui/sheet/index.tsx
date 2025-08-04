import * as SheetPrimitive from '@radix-ui/react-dialog';

const Sheet = ({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) => {
  return <SheetPrimitive.Root
    data-slot="sheet"
    {...props}
  />;
};

export { Sheet };
