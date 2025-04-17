import { CollectionsData } from "@/shared/lib/constants";
import CImage from "@/shared/ui/base/image";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";

type Props = {
  collection: string;
};

export default function Collection({ collection }: Props) {
  const collectionData = CollectionsData.find(
    (item: any) => item.name.toLowerCase() === collection
  );

  const otherCollections = CollectionsData.filter(
    (item: any) => item.name.toLowerCase() !== collection
  );

  if (!collectionData) {
    return <div>Collection not found</div>;
  }

  const { name, description, image_lg } = collectionData;

  return (
    <Box
      width="100%"
      minHeight="100vh"
      backgroundImage="url('/images/alt-bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      backgroundBlendMode="multiply"
      backgroundAttachment="fixed">
      <Container
        maxWidth={["full", "full", null, null, "1051px", "1051px"]}
        paddingTop={["50px", null, "50px"]}>
        <Link href="/collections">
          <Icon
            display={["none", null, "block"]}
            position="absolute"
            left="180px"
            width="32px"
            height="32px"
            padding="5px"
            borderRadius="5px"
            color="white"
            backgroundColor="#5A5C5D">
            <GoArrowLeft />
          </Icon>
        </Link>

        <VStack gap="20px">
          <Heading
            fontWeight="400"
            fontSize={["28px", null, "38px"]}
            letterSpacing="5px">
            {name}
          </Heading>
          <CImage
            imageUrl={image_lg}
            width={["100%", "500px", "750px", "846px"]}
            height={["170px", "250px", "300px", "337px"]}
            objectFit="contain"
          />

          <Text
            width={["full", null, "711px"]}
            fontSize={["14px", null, "17px"]}
            fontWeight="500"
            textAlign="justify"
            lineHeight="170%">
            {description}
          </Text>
          <HStack
            width={["full", null, "712px"]}
            height={["auto", null, "100px"]}
            gap="10px"
            flexWrap={["wrap", null, "nowrap"]}
            justifyContent={["center", null, null, "space-between"]}>
            {otherCollections.slice(0, 3).map((item: any) => (
              <Link
                href={`/collections/${item.name.toLowerCase()}`}
                key={item.name}>
                <CImage
                  key={item.name}
                  imageUrl={item.image_lg}
                  width={["202px", null, "232px"]}
                  height={["87px", null, "100px"]}
                />
              </Link>
            ))}
          </HStack>
          <Button
            marginTop={["0px", null, "50px"]}
            marginBottom={["100px", "0px"]}
            background="headerHover"
            color="black"
            width="285px"
            height="58px"
            fontSize="14px"
            fontWeight="600"
            fontFamily="Manrope, sans-serif">
            View on Marketplace{" "}
            <Icon width="18px" height="18px">
              <RiArrowRightSLine />
            </Icon>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
