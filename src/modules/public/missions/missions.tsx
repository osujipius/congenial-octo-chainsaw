import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  Timeline,
  VStack,
} from "@chakra-ui/react";
import MissionButton from "@/shared/ui/base/mission-button";
import CTimeline from "@/shared/ui/base/timeline";

export default function Missions() {
  return (
    <Box
      width="100%"
      height="auto"
      minHeight="100vh"
      backgroundImage="url('/images/alt-bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      backgroundBlendMode="multiply">
      <Container
        maxWidth={["full", "full", null, null, "1051px", "1278px"]}
        paddingTop={["50px", null, "50px"]}>
        <VStack width="full" alignItems="center" gap={["30px", null, "50px"]}>
          <>
            {/* BIGGER SCREEN */}
            <Box
              display={["none", null, null, "block"]}
              width="903px"
              height="217px"
              backgroundImage="url('/images/mission-1.png')"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundPosition="center">
              <VStack
                alignItems="start"
                width="563px"
                gap="10px"
                marginTop="55px"
                marginLeft="70px">
                <Heading fontSize="18px" letterSpacing="10%" fontWeight="400">
                  {" "}
                  READY TO EXPLORE MISSIONS?
                </Heading>
                <Text fontSize="17px" lineHeight="140%" fontWeight="500">
                  Missions require specific NFTs with mystery requirements.
                  check each mission requirements to enter. Earned NFTs can be
                  traded or sold after mission completion.
                </Text>
              </VStack>
            </Box>
            {/* SMALLER SCREEN */}
            <Box
              position="relative"
              display={["block", null, null, "none"]}
              width={["360px", "500px", null]}
              height={["95px", "120px"]}
              backgroundImage="url('/images/mission-1.png')"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
              backgroundPosition="center">
              <VStack
                alignItems="start"
                gap="0"
                width={["initial", "70%"]}
                marginTop={["5px", "20px", "20px"]}
                marginLeft={["30px", "40px", "40px"]}>
                <Heading fontSize="12px" letterSpacing="10%" fontWeight="400">
                  {" "}
                  READY TO EXPLORE MISSIONS?
                </Heading>
                <Text fontSize="10px" lineHeight="140%" fontWeight="500">
                  Missions require specific NFTs with mystery requirements.
                  check each mission requirements to enter. Earned NFTs can be
                  traded or sold after mission completion.
                </Text>
              </VStack>
            </Box>
          </>

          <HStack
            width={["100%", "100%", "95%"]}
            justifyContent="space-between"
            paddingX={["0px", "10px"]}
            marginBottom={["0px", null, null, null, "-30px"]}>
            <Heading
              fontSize={["16px", null, null, "28px"]}
              letterSpacing="4px"
              fontWeight="400">
              MISSIONS
            </Heading>
            <HStack gap="20px">
              <MissionButton name="Prev." type="prev" />
              <MissionButton name="Next" type="next" active />
            </HStack>
          </HStack>

          <Stack
            direction={["column", null, null, null, "row"]}
            width={["95%", null, null, null, "1278px"]}
            marginBottom={["50px", null, "100px"]}
            height={["auto", null, null, null, "578px"]}
            alignItems={["center", null, null, null, "end"]}
            justifyContent="space-between"
            borderRadius="25px"
            backgroundImage="url('/images/mission-2.png')"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat">
            <Heading
              marginBottom="50px"
              marginLeft={["0px", null, null, null, "50px"]}
              fontSize={["18px", null, "28px"]}
              fontWeight="400"
              letterSpacing="4px">
              THE LOBBY
            </Heading>

            <Box
              backgroundImage="url('/images/mission-3.png')"
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              height="100%"
              width={["95%", null, null, null, "40.5%"]}
              paddingTop={["50px", null, "70px"]}
              paddingX={["20px", null, null, null, "50px"]}>
              <VStack gap="40px">
                <VStack width="90%" alignItems="start" gap="10px">
                  <Heading
                    fontSize={["14px", null, "18px"]}
                    fontWeight="400"
                    letterSpacing="4px">
                    REQUIREMENTS
                  </Heading>
                  <Text
                    fontWeight="500"
                    fontSize={["13px", null, "17px"]}
                    lineHeight="170%"
                    color="grey2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </VStack>

                <CTimeline
                  timeline_1="It is a long established fact that a reader will be distracted by the readab"
                  timeline_2="It is a long established fact that a reader will be distracted by the readab"
                  timeline_3="It is a long established fact that a reader will be distracted by the readab"
                />

                <HStack
                  marginBottom={["50px", null, null, null, "0px"]}
                  justifyContent={["space-around", null, null, "space-between"]}
                  width="100%">
                  <Heading
                    color="headerHover"
                    fontSize={["14px", null, "20px"]}
                    fontWeight="400"
                    letterSpacing="4px">
                    01/
                    <Heading
                      display="inline-block"
                      fontSize={["14px", null, "20px"]}
                      fontWeight="400"
                      letterSpacing="4px">
                      08
                    </Heading>
                  </Heading>
                  <MissionButton
                    name="Enter"
                    type="next"
                    width={["100px", "130px", null, null, "177px"]}
                    active_solid
                  />
                </HStack>
              </VStack>
            </Box>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}
