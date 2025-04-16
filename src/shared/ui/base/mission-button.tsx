import { Box, Button, HStack } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

type buttonProps = React.ComponentProps<typeof Box> & {
  name: string;
  type: string;
  active?: boolean;
  active_solid?: boolean;
};
const MissionButton = ({ ...props }: buttonProps) => {
  if (props.type === "prev") {
    return (
      <Box
        position="relative"
        width={["80px", null, "100px"]}
        height={["50px", null, "63px"]}
        {...props}>
        <Button
          as={HStack}
          variant="plain"
          color={
            props.active_solid
              ? "black"
              : props.active
              ? "headerHover"
              : "white"
          }
          width="100%"
          height="100%"
          gap={["5px", null, "14px"]}
          fontWeight="700"
          border="1px solid"
          borderColor={
            props.active_solid
              ? "transparent"
              : props.active
              ? "headerHover"
              : "white"
          }
          clipPath="polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)"
          background={
            props.active_solid
              ? "headerHover"
              : props.active
              ? "transparent"
              : "grey1"
          }>
          <RiArrowLeftSLine />
          {props.name}
        </Button>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            pointerEvents: "none",
          }}>
          <line
            x1="0"
            y1="20"
            x2="20"
            y2="0"
            stroke={
              props.active_solid
                ? "transparent"
                : props.active
                ? "#F1DA00"
                : "white"
            }
            strokeWidth="1"
          />
        </svg>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      width={["80px", null, "100px"]}
      height={["50px", null, "63px"]}
      {...props}>
      <Button
        as={HStack}
        variant="plain"
        color={
          props.active_solid ? "black" : props.active ? "headerHover" : "white"
        }
        width="100%"
        height="100%"
        gap={["5px", null, "14px"]}
        fontWeight="700"
        border="1px solid"
        borderColor={
          props.active_solid
            ? "transparent"
            : props.active
            ? "headerHover"
            : "white"
        }
        clipPath="polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)"
        background={
          props.active_solid
            ? "headerHover"
            : props.active
            ? "transparent"
            : "grey1"
        }>
        {props.name}
        <RiArrowRightSLine />
      </Button>

      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          pointerEvents: "none",
        }}>
        <line
          x1="0"
          y1="0"
          x2="20"
          y2="20"
          stroke={
            props.active_solid
              ? "transparent"
              : props.active
              ? "#F1DA00"
              : "white"
          }
          strokeWidth="1"
        />
      </svg>
    </Box>
  );
};

export default MissionButton;
