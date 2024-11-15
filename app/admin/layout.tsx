import { LayoutScreenWrapper } from "@/library/screens/layout.screen";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutScreenWrapper>
      <section className="w-full h-full">{children}</section>
    </LayoutScreenWrapper>
  );
}
