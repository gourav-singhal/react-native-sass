import React from "react";
import * as shape from "d3-shape";
import { StackedAreaChart } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";

import { Block, Card, Dropdown, Text, Icon } from "../../components";
import { COLORS } from "../../constants";

const CHART_COLORS = [COLORS.success, COLORS.error];
const CHART_DATA = [
  { direct: 0, organic: 0 },
  { direct: 86, organic: 36 },
  { direct: 70, organic: 37 },
  { direct: 48, organic: 39 },
  { direct: 95, organic: 12 },
  { direct: 12, organic: 95 },
  { direct: 76, organic: 17 },
  { direct: 99, organic: 57 },
  { direct: 94, organic: 93 },
  { direct: 68, organic: 70 },
  { direct: 9, organic: 42 },
  { direct: 6, organic: 13 },
  { direct: 32, organic: 84 },
  { direct: 4, organic: 98 },
  { direct: 42, organic: 77 },
  { direct: 64, organic: 34 },
  { direct: 66, organic: 11 },
  { direct: 29, organic: 4 },
  { direct: 83, organic: 68 },
  { direct: 80, organic: 85 },
  { direct: 100, organic: 100 }
];

const Gradient = () =>
  CHART_COLORS.map((color, i) => {
    return (
      <Defs key={i}>
        <LinearGradient
          id={`gradient-${color}`}
          x1="0%"
          y="0%"
          x2="0%"
          y2="100%"
        >
          <Stop offset="0%" stopColor={color} stopOpacity={1} />
          <Stop offset="100%" stopColor={COLORS.white} stopOpacity={0.5} />
        </LinearGradient>
      </Defs>
    );
  });

const Traffic = ({ data = CHART_DATA }) => {
  return (
    <>
      <Card margin={28} padding={18}>
        <Block row center space="between" marginBottom={28}>
          <Text title bold>
            Traffic Channel
          </Text>
          <Dropdown label="Today" />
        </Block>

        <Block row marginBottom={30}>
          <Block>
            <Text gray>Users</Text>
            <Text h2 bold marginVertical={6}>
              13.2k
            </Text>
            <Block row center>
              <Icon
                size={11}
                name="arrowUp"
                resizeMode="contain"
                color={COLORS.success}
              />
              <Text caption bold marginLeft={5}>
                10%
              </Text>
            </Block>
          </Block>
          <Block>
            <Text gray>Sessions</Text>
            <Text h2 bold marginVertical={6}>
              18.1k
            </Text>
            <Block row center>
              <Icon
                size={11}
                name="arrowDown"
                resizeMode="contain"
                color={COLORS.error}
              />
              <Text caption bold marginLeft={5}>
                13%
              </Text>
            </Block>
          </Block>
        </Block>

        <Block row marginBottom={30}>
          <Block>
            <Text gray>Bounce Rate</Text>
            <Text h2 bold marginVertical={6}>
              0.71%
            </Text>
            <Block row center>
              <Icon
                size={11}
                name="arrowUp"
                resizeMode="contain"
                color={COLORS.success}
              />
              <Text caption bold marginLeft={5}>
                6%
              </Text>
            </Block>
          </Block>
          <Block>
            <Text gray>Session Duration</Text>
            <Text h2 bold marginVertical={6}>
              1m 06s
            </Text>
            <Block row center>
              <Icon
                size={11}
                name="arrowDown"
                resizeMode="contain"
                color={COLORS.error}
              />
              <Text caption bold marginLeft={5}>
                15%
              </Text>
            </Block>
          </Block>
        </Block>

        <Block>
          <Block>
            <StackedAreaChart
              data={data}
              showGrid={false}
              style={{ height: 100 }}
              keys={["direct", "organic"]}
              curve={shape.curveNatural}
              colors={[COLORS.success, COLORS.error]}
              svgs={[
                { fill: `url(#gradient-${COLORS.error})` },
                { fill: `url(#gradient-${COLORS.success})` }
              ]}
            >
              <Gradient />
            </StackedAreaChart>
          </Block>
          <Block row start space="between" marginTop={18} marginHorizontal={8}>
            <Text gray>10:00</Text>
            <Text gray>12:00</Text>
            <Text gray>14:00</Text>
            <Text gray>16:00</Text>
            <Text gray>18:00</Text>
            <Text gray>20:00</Text>
          </Block>
        </Block>

        <Block marginTop={28}>
          <Block row center marginBottom={18}>
            <Block success radius={10} maxWidth={10} height={10} />
            <Text bold label marginLeft={5}>
              DIRECT
            </Text>
          </Block>
          <Block row center marginBottom={18}>
            <Block error radius={10} maxWidth={10} height={10} />
            <Text bold label marginLeft={5}>
              ORGANIC SEARCH
            </Text>
          </Block>
          <Block row center>
            <Text bold label gray>
              + ADD SOURCE
            </Text>
          </Block>
        </Block>
      </Card>
    </>
  );
};

export default Traffic;
