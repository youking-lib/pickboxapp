import { PickboxIsland } from "@/components/pickbox-island";
import { Flex } from "@radix-ui/themes";

export default function Page(): JSX.Element {
  return (
    <Flex height="100vh" width="100vw" align="center" pl="9">
      <PickboxIsland />
    </Flex>
  );
}
