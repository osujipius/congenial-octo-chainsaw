import { Box, Text, Timeline } from "@chakra-ui/react";
import { LuCheck, LuPackage, LuShip } from "react-icons/lu";

type Props = {
  timeline_1: string;
  timeline_2: string;
  timeline_3: string;
};
const CTimeline = ({ ...props }: Props) => {
  return (
    <Timeline.Root
      maxW="400px"
      size="lg"
      color="grey3"
      variant="subtle"
      marginLeft="20px">
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator border="1px dashed" borderColor="timeline" />
          <Timeline.Indicator
            background="timeline"
            outline="none"></Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title textStyle="sm">{props.timeline_1}</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator border="1px dashed" borderColor="timeline" />
          <Timeline.Indicator
            background="timeline"
            outline="none"></Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title textStyle="sm">{props.timeline_2}</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator
            background="timeline"
            outline="none"></Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title textStyle="sm">{props.timeline_3}</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  );
};

export default CTimeline;
