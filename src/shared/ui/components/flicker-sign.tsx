import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import CImage from "@/shared/ui/base/image";

// Create keyframes using emotion's keyframes
const flicker = keyframes`
  0% { opacity: 1; filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.8)); }
  5% { opacity: 0.8; filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)); }
  10% { opacity: 1; filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.8)); }
  25% { opacity: 0.9; filter: drop-shadow(2px 2px 3px rgba(255, 255, 255, 0.3)); }
  50% { opacity: 1; filter: drop-shadow(-1px -1px 2px rgba(255, 0, 0, 0.6)); }
  75% { opacity: 0.85; filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4)); }
  100% { opacity: 1; filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.8)); }
`;

const glitch = keyframes`
  0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
  10% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  20% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  30% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
  40% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  50% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
  60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
  70% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
  80% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  90% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
  100% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); }
`;
type Props = React.ComponentProps<typeof Box> & {};
export default function FlickerSign({ ...props }: Props) {
  return (
    <Box
      {...props}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        animation: `${glitch} 2s infinite`,
        mixBlendMode: "hard-light",
        opacity: 1,
      }}>
      <CImage
        width="full"
        height="full"
        imageUrl={`/images/flicker-1.webp`}
        objectFit="contain"
        animation={`${flicker} 0.5s infinite`}
        filter="auto"
        contrast="1.2"
        saturate="1.1"
        transition="all 0.3s ease-in-out"
        _hover={{
          animation: `${flicker} 0.2s infinite`,
          filter: "contrast(1.5) saturate(1.3)",
        }}
      />
    </Box>
  );
}