import { Box } from "@chakra-ui/react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Box width="full" height={["64px", null, "80px"]} bg="grey"></Box>
      {children}
    </section>
  );
}
