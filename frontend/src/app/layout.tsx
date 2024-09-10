// import type { Metadata } from "next";
// import "./globals.css";
// import {Inter as FontSans} from "next/font/google";
// import { cn } from "@/lib/utils";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });


// export const metadata: Metadata = {
//   title: "SimplyDone",
//   description: "Get your audience thoughts",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={cn(
//           "min-h-screen  font-sans antialiased bg-slate-50",
//           fontSans.variable
//         )}>{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"; // Ensure this function is defined correctly

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SimplyDone",
  description: "Get your audience thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-slate-50",
          fontSans.variable // Ensure this is a valid class name
        )}
      >
        {children}
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import "./globals.css";
// import { Inter as FontSans } from "next/font/google";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const metadata: Metadata = {
//   title: "SimplyDone",
//   description: "Get your audience thoughts",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`min-h-screen font-sans antialiased bg-slate-50 ${fontSans.variable}`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
