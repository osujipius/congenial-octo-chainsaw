import CHeader from "@/shared/ui/components/header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <CHeader />
      {children}
    </section>
  );
}
