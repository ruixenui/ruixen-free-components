"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  brands: Brand[];
  imageHeight?: number;
}

export const BrandsGrid = React.forwardRef<HTMLDivElement, BrandsGridProps>(
  ({ 
    className,
    title = "Trusted and loved by fast-growing companies worldwide",
    brands,
    imageHeight = 56, // 14 * 4 = 56px (h-14)
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("py-10", className)}
        {...props}
      >
        <div className="container">
          {title && (
            <p className="mx-auto text-pretty text-center font-medium mb-6 text-foreground md:text-lg">
              {title}
            </p>
          )}

          <div className="container mx-auto grid grid-cols-2 items-center md:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-4">
                <div className="relative h-[56px] w-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

BrandsGrid.displayName = "BrandsGrid";