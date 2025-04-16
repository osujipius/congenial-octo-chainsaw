import { CollectionsData } from "@/shared/lib/constants";
import CImage from "@/shared/ui/base/image";
import { Box, Container, Heading, Text, VStack, Wrap } from "@chakra-ui/react";
import Link from "next/link";

export default function Collections() {
  return (
    <Box
      width="100%"
      height={["auto", "140vh", "120vh", null, "950px"]}
      backgroundImage="url('/images/alt-bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      backgroundBlendMode="multiply">
      <Container
        maxWidth={["full", "full", null, null, "1051px", "1051px"]}
        paddingTop={["50px", null, "70px"]}>
        <VStack gap="50px">
          <Heading
            fontSize={["24px", null, "32px"]}
            letterSpacing="4px"
            lineHeight="100%">
            COLLECTIONS
          </Heading>
          <Wrap
            flexWrap="wrap"
            justifyContent="center"
            width="full"
            height="full"
            gap={["0px", null, "50px"]}>
            {CollectionsData.map((collection: any) => (
              <CollectionCard
                key={collection.name}
                name={collection.name}
                description={collection.overview}
                image={collection.image_sm}
              />
            ))}
          </Wrap>
        </VStack>
      </Container>
    </Box>
  );
}

type Props = {
  name: string;
  description: string;
  image: string;
};

const CollectionCard = ({ ...props }: Props) => {
  const collectionName = props.name.toLowerCase();
  return (
    <Link href={`/collections/${collectionName}`}>
      <VStack
        width="286px"
        minHeight={["250px", null, "264px"]}
        height="auto"
        alignItems="start"
        gap="16px">
        <Box
          position="relative"
          width="100%"
          height="105px"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "170%",
            height: "200%",
            background:
              "linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)",
            transform: "rotate(45deg)",
            transition: "0.5s",
            opacity: 0,
            zIndex: 1,
          }}
          _hover={{
            _before: {
              transform: "rotate(45deg) translateY(100%)",
              opacity: 1,
            },
          }}>
          <CImage
            width="100%"
            height="105px"
            imageUrl={props.image}
            objectFit="cover"
            opacity="0.8"
          />
        </Box>

        <VStack marginLeft="6px" alignItems="start" gap="5px">
          <Heading
            fontSize={["18px", null, "20px"]}
            letterSpacing="4px"
            lineHeight="100%">
            {props.name}
          </Heading>
          <Text fontSize={["14px", null, "16px"]} lineHeight="140%">
            {props.description}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
};
