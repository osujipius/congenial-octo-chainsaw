import { useViewport } from "@/shared/hooks/useViewport";
import {
  getDoorLabelPositions,
  getHeroTextPosition,
  getHoverImagePositions,
} from "@/shared/lib/mediaqueryPosition";
import CImage from "@/shared/ui/base/image";
import FlickerSign from "@/shared/ui/components/flicker-sign";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const Home = () => {
  const viewportWidth = useViewport();
  console.log(viewportWidth);

  const [
    isMin325,
    isMin350,
    isMin488,
    isMin508,
    isMin528,
    isMin548,
    isMin568,
    isMin588,
    isMin608,
    isMin628,
    isMin648,
    isMin668,
    isMin688,
    isMin708,
    isMin728,
    isMin748,
    isMin768,
    isMin1024,
    isMin1540,
    isMin1557,
    isMin1585,
    isMin1600,
    isMin1625,
    isMin1650,
    isMin1675,
    isMin1700,
  ] = useMediaQuery([
    "(min-width: 325px)",
    "(min-width: 350px)",
    "(min-width: 488px)",
    "(min-width: 508px)",
    "(min-width: 528px)",
    "(min-width: 548px)",
    "(min-width: 568px)",
    "(min-width: 588px)",
    "(min-width: 608px)",
    "(min-width: 628px)",
    "(min-width: 648px)",
    "(min-width: 668px)",
    "(min-width: 688px)",
    "(min-width: 708px)",
    "(min-width: 728px)",
    "(min-width: 748px)",
    "(min-width: 768px)",
    "(min-width: 1024px)",
    "(min-width: 1540px)",
    "(min-width: 1557px)",
    "(min-width: 1585px)",
    "(min-width: 1600px)",
    "(min-width: 1625px)",
    "(min-width: 1650px)",
    "(min-width: 1675px)",
    "(min-width: 1700px)",
  ]);

  const mediaQueries = {
    isMin325,
    isMin350,
    isMin488,
    isMin508,
    isMin528,
    isMin548,
    isMin568,
    isMin588,
    isMin608,
    isMin628,
    isMin648,
    isMin668,
    isMin688,
    isMin708,
    isMin728,
    isMin748,
    isMin768,
    isMin1024,
    isMin1540,
    isMin1557,
    isMin1585,
    isMin1600,
    isMin1625,
    isMin1650,
    isMin1675,
    isMin1700,
  };

  const backgroundStyles = {
    content: `""`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "full",
    height: "full",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgrounndAttachment: "fixed",
    transition: "opacity 0.5s ease-in-out",
    zIndex: -1,
  };

  const heroTextPosition = getHeroTextPosition(mediaQueries);
  const doorLabels = getDoorLabelPositions(mediaQueries);
  const hoverImages = getHoverImagePositions(mediaQueries);
  const doorLabelViewport = 1675;

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      width="full"
      height="100vh"
      overflow="hidden"
      _before={{
        ...backgroundStyles,
        backgroundImage: `url(/images/home-bg-mobile.png)`,
        opacity: { base: 1, md: 0 },
      }}
      _after={{
        ...backgroundStyles,
        backgroundImage: `url(/images/home-bg.png)`,
        opacity: { base: 0, md: 1 },
      }}>
      <FlickerSign
        marginTop={heroTextPosition}
        position="relative"
        width={["308px", "532px", "788px"]}
        height={["67px", "116px", "160px"]}
        marginRight={["10px", "20px"]}
        transition="0.4s"
      />
      {doorLabels.map((label, index) => (
        <CImage
          key={`door-${index}`}
          width={label.size.width}
          height={label.size.height}
          imageUrl={label.imageUrl}
          {...label.position}
          display={viewportWidth < doorLabelViewport ? "none" : "block"}
          position="absolute"
          transition="0.5s"
        />
      ))}
      {hoverImages.map((image, index) => (
        <Link key={`hover-${index}`} href={image.href}>
          <Box
            position="absolute"
            width={image.size.width}
            height={image.size.height}
            {...image.position}
            display={viewportWidth < doorLabelViewport ? "none" : "block"}
            _hover={{
              "& > div": {
                opacity: 1,
                filter: "brightness(1.2) contrast(1.2)",
              },
              "& > div:last-child": {
                opacity: 0.4,
                filter: "brightness(1) contrast(1) blur(1px)",
              },
            }}>
            <CImage
              width="full"
              height="full"
              imageUrl={image.imageUrl}
              position="absolute"
              opacity={0}
              transition="all 0.3s ease"
            />
            <CImage
              width="full"
              height="full"
              imageUrl={image.imageUrl}
              position="absolute"
              opacity={0}
              transition="all 0.3s ease"
            />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Home;
