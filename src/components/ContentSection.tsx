import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  reverse?: boolean;
  background?: "default" | "accent";
}

export const ContentSection = ({ 
  title, 
  subtitle, 
  children, 
  reverse = false,
  background = "default" 
}: ContentSectionProps) => {
  const bgClass = background === "accent" ? "bg-accent/30" : "bg-background";
  
  return (
    <section className={`py-20 px-4 ${bgClass}`}>
      <div className="container mx-auto max-w-6xl">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>}
            <div className="text-muted-foreground space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
