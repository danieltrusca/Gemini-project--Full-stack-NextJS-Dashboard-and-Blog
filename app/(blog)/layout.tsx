// app/(blog)/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="blog"
      className="min-h-screen bg-(--background) text-(--foreground)"
    >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {/* Aici va sta Navigation-ul/Header-ul specific blogului */}
        {children}
      </ThemeProvider>
    </div>
  );
}
