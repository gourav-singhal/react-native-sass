import React from "react";
import { Utils } from "expo-ui-kit";
import { ScrollView } from "react-native";
import LineChart from "react-native-responsive-linechart";

import { Block, Button, Card, Dropdown, Icon, Text } from "../../components";
import { COLORS } from "../../constants";

const Highlight = props => {
  return (
    <Card
      noflex
      width={148}
      height={189}
      space="between"
      padding={[30, 20]}
      marginLeft={props.isFirst ? 28 : 0}
      marginRight={props.isLast ? 28 : 10}
    >
      <Block row center space="between">
        <Button
          color={Utils.rgba(props.iconColor, 0.2)}
          style={{
            width: 48,
            height: 48,
            alignItems: "center"
          }}
        >
          <Icon
            resizeMode="contain"
            name={props.icon}
            color={props.iconColor}
          />
        </Button>
        <Block row center>
          {props.percentage && (
            <>
              <Icon
                size={10}
                resizeMode="contain"
                name={props.progress ? "arrowUp" : "arrowDown"}
                color={COLORS[props.progress ? "success" : "error"]}
              />
              <Text caption bold marginLeft={4}>
                {props.percentage}%
              </Text>
            </>
          )}
        </Block>
      </Block>
      <Text h1 bold>
        {props.count}
      </Text>
      <Text medium gray>
        {props.title}
      </Text>
    </Card>
  );
};

const Dashboard = ({ items }) => {
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index) => {
          const isFirst = !index;
          const isLast = items.length === index + 1;

          return (
            <Highlight
              {...item}
              isFirst={isFirst}
              isLast={isLast}
              key={`hightlight-${index}`}
            />
          );
        })}
      </ScrollView>

      <Card noflex height={219} margin={28} padding={18} space="between">
        <Block row center space="between" marginBottom={28}>
          <Text title bold>
            Sessions Overview
          </Text>
          <Dropdown label="Today" />
        </Block>
        <Block>
          <LineChart
            style={{ flex: 1 }}
            config={{
              interpolation: "spline",
              area: {
                gradientFrom: COLORS.success,
                gradientFromOpacity: 1,
                gradientTo: COLORS.success,
                gradientToOpacity: 1
              },
              line: { visible: false },
              yAxis: { visible: false },
              grid: { visible: false }
            }}
            data={[50, 55, 35, 50, 60, 80, 70, 80, 75]}
          />
          <Block row start space="between" marginTop={18} marginHorizontal={8}>
            <Text gray>10:00</Text>
            <Text gray>12:00</Text>
            <Text gray>14:00</Text>
            <Text gray>16:00</Text>
            <Text gray>18:00</Text>
            <Text gray>20:00</Text>
          </Block>
        </Block>
      </Card>

      <Card marginHorizontal={28} padding={18}>
        <Block row center space="between" marginBottom={28}>
          <Text title bold>
            New Users
          </Text>
          <Dropdown label="This Month" transparent color={COLORS.gray} />
        </Block>
        <Block row center middle>
          <Text h2 bold>
            1,501m
          </Text>
          <Block error center middle marginLeft={36}>
            <LineChart
              style={{ flex: 1 }}
              config={{
                interpolation: "spline",
                area: {
                  gradientFrom: COLORS.error,
                  gradientFromOpacity: 1,
                  gradientTo: COLORS.error,
                  gradientToOpacity: 1
                },
                line: { visible: false },
                yAxis: { visible: false },
                grid: { visible: false }
              }}
              data={[50, 55, 35, 50, 60, 80, 70, 80, 75]}
            />
          </Block>
        </Block>
      </Card>
    </>
  );
};

export default Dashboard;
