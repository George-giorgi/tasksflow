import { montserrat } from "@/app/fonts";
import Nav from "@/app/ui/components/Nav";
import { employeeLinks } from "@/app/utils/constants";
export default function employeeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${montserrat.className} text-white mt-3 bg-black antialiased`}
    >
      <Nav links={employeeLinks} />
      {children}
    </div>
  );
}
