import React from "react";

import { Block, Card, Dropdown, Text } from "../../components";

const Realtime = () => {
  return (
    <>
      <Card marginHorizontal={28} padding={18}>
        <Text title bold marginBottom={18}>
          Right Now
        </Text>
        <Block row marginBottom={28}>
          <Text h1 bold marginRight>
            289
          </Text>
          <Text subtitle medium gray style={{ alignSelf: "flex-end" }}>
            Active Users
          </Text>
        </Block>
        <Block row radius={10} height={30} style={{ overflow: "hidden" }}>
          <Block error center middle>
            <Text white bold caption>
              43%
            </Text>
          </Block>
          <Block success center middle>
            <Text white bold caption>
              57%
            </Text>
          </Block>
        </Block>
        <Block row space="around" marginTop={18}>
          <Block row center>
            <Block
              error
              height={10}
              radius={10}
              marginRight={5}
              style={{ maxWidth: 10, minWidth: 10 }}
            />
            <Text caption bold>
              NEW VISITOR
            </Text>
          </Block>

          <Block row center>
            <Block
              success
              height={10}
              radius={10}
              marginRight={5}
              style={{ maxWidth: 10, minWidth: 10 }}
            />
            <Text caption bold>
              RETURNING VISITOR
            </Text>
          </Block>
        </Block>
      </Card>

      <Card margin={28} padding={18}>
        <Block row center space="between" marginBottom={28}>
          <Text title bold>
            Page Views
          </Text>
          <Dropdown label="Per Minute" />
        </Block>
        <Block row space="between" marginBottom={28}>
          <Block center>
            <Block radius={4} height={100} width={10} overflow="hidden">
              <Block error minHeight={24} maxHeight={24} />
              <Block primary minHeight={40} maxHeight={40} />
              <Block success minHeight={36} maxHeight={36} />
            </Block>
            <Text gray caption marginTop={18}>
              -55min
            </Text>
          </Block>
          <Block center>
            <Block radius={4} height={100} width={10} overflow="hidden">
              <Block error minHeight={44} maxHeight={44} />
              <Block primary minHeight={42} maxHeight={42} />
              <Block success minHeight={14} maxHeight={14} />
            </Block>
            <Text gray caption marginTop={18}>
              -50min
            </Text>
          </Block>
          <Block center>
            <Block radius={4} height={100} width={10} overflow="hidden">
              <Block error minHeight={14} maxHeight={14} />
              <Block primary minHeight={60} maxHeight={60} />
              <Block success minHeight={26} maxHeight={26} />
            </Block>
            <Text gray caption marginTop={18}>
              -45min
            </Text>
          </Block>
          <Block center>
            <Block radius={4} height={100} width={10} overflow="hidden">
              <Block error minHeight={5} maxHeight={5} />
              <Block primary minHeight={55} maxHeight={55} />
              <Block success minHeight={40} maxHeight={40} />
            </Block>
            <Text gray caption marginTop={18}>
              -40min
            </Text>
          </Block>
          <Block center>
            <Block radius={4} height={100} width={10} overflow="hidden">
              <Block error minHeight={44} maxHeight={44} />
              <Block primary minHeight={38} maxHeight={38} />
              <Block success minHeight={18} maxHeight={18} />
            </Block>
            <Text gray caption marginTop={18}>
              -35min
            </Text>
          </Block>
          <Block center>
            <Block radius={4} height={100} width={10} overflow="hidden">
              <Block error minHeight={21} maxHeight={21} />
              <Block primary minHeight={27} maxHeight={27} />
              <Block success minHeight={52} maxHeight={52} />
            </Block>
            <Text gray caption marginTop={18}>
              -30min
            </Text>
          </Block>
        </Block>

        <Block row center marginBottom={18}>
          <Block success radius={10} maxWidth={10} height={10} />
          <Text bold label marginLeft={5}>
            REFERRAL
          </Text>
        </Block>
        <Block row center marginBottom={18}>
          <Block error radius={10} maxWidth={10} height={10} />
          <Text bold label marginLeft={5}>
            ORGANIC SEARCH
          </Text>
        </Block>
        <Block row center marginBottom={18}>
          <Block primary radius={10} maxWidth={10} height={10} />
          <Text bold label marginLeft={5}>
            DIRECT
          </Text>
        </Block>
      </Card>
    </>
  );
};

export default Realtime;
