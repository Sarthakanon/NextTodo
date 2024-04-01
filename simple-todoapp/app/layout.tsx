import "./globals.css";

export const metadata = {
  title: "Simple Todo App",
  description: "A Simple Todo App made with NextJS Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
