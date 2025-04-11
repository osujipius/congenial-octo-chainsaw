import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

type Props = React.ComponentProps<typeof Box> & {
  width: string | any[];
  height: string | any[];
  imageUrl: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  borderRadius?: string;
};

export default function CImage({
  width,
  height,
  imageUrl,
  objectFit = "contain",
  borderRadius,
  ...props
}: Props) {
  return (
    <>
      <Box position="relative" width={width} height={height} {...props}>
        <NextImage
          src={imageUrl}
          alt="image"
          style={{
            objectFit: objectFit,
            borderRadius: borderRadius,
          }}
          fill={true}
          priority
        />
      </Box>
    </>
  );
}
