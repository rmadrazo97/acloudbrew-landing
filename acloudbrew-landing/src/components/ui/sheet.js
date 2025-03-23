import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className={cn(
      "fixed inset-0 z-50 bg-black/80 opacity-100 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = "SheetOverlay";

const SheetPortal = ({ className, ...props }) => (
  <div className={cn("fixed inset-0 z-50 flex", className)} {...props} />
);
SheetPortal.displayName = "SheetPortal";

const SheetClose = React.forwardRef(({ className, ...props }, ref) => (
  <button
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetClose.displayName = "SheetClose";

const SheetHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className={cn("text-lg font-semibold text-foreground", className)}
    ref={ref}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

const Sheet = ({ children, open, onOpenChange }) => {
  return children({
    isOpen: open,
    setIsOpen: onOpenChange
  });
};

const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => {
    const isOpen = props["data-state"] === "open";
    
    if (!isOpen) return null;
    
    return (
      <SheetPortal>
        <SheetOverlay 
          data-state={isOpen ? "open" : "closed"}
          onClick={() => props.onClose && props.onClose()}
        />
        <div
          ref={ref}
          data-state={isOpen ? "open" : "closed"}
          className={cn(sheetVariants({ side }), className)}
          {...props}
        >
          {children}
        </div>
      </SheetPortal>
    );
  }
);
SheetContent.displayName = "SheetContent";

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}; 