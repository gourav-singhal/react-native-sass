import React from "react";
import { Utils } from "expo-ui-kit";
import { StyleSheet, Image, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { Block, Card, Dropdown, Text } from "../../components";
import { images, COLORS } from "../../constants";

const Entry = props => {
  return (
    <Card
      center
      noflex
      width={180}
      height={200}
      paddingTop={18}
      paddingBottom={18}
      marginLeft={props.isFirst ? 28 : 0}
      marginRight={props.isLast ? 28 : 10}
    >
      <Block center middle radius="50%" width="50%">
        <AnimatedCircularProgress
          size={88}
          width={13}
          rotation={0}
          lineCap="round"
          fill={props.value}
          backgroundWidth={13}
          tintColor={props.color}
          backgroundColor={Utils.rgba(props.color, 0.2)}
        />
        <Text h3 bold style={{ position: "absolute", top: 30 }}>
          {props.value}%
        </Text>
      </Block>
      <Text title bold marginTop={18} marginBottom={8}>
        {props.label}
      </Text>
      <Dropdown label="1 month" />
    </Card>
  );
};

const Audience = ({ items }) => {
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index) => {
          const isFirst = !index;
          const isLast = items?.length === index + 1;

          return (
            <Entry
              {...item}
              isFirst={isFirst}
              isLast={isLast}
              key={`audience-${index}`}
            />
          );
        })}
      </ScrollView>

      <Card marginHorizontal={28} padding={18} marginTop={28}>
        <Text title bold marginBottom={18}>
          Top Locations
        </Text>
        <Block middle center marginBottom={28} height={166}>
          <Image style={{ ...StyleSheet.absoluteFill }} source={images.map} />
          <Block
            radius={41}
            width={41}
            height={41}
            color={Utils.rgba(COLORS.primary, 0.8)}
            style={{ position: "absolute", left: 20 }}
          />
          <Block
            radius={23}
            width={23}
            height={23}
            color={Utils.rgba(COLORS.error, 0.8)}
            style={{ position: "absolute", right: 60, top: 166 / 3.5 }}
          />
          <Block
            radius={23}
            width={23}
            height={23}
            color={Utils.rgba(COLORS.secondary, 0.8)}
            style={{ position: "absolute", left: 80, bottom: 20 }}
          />
          <Block
            radius={9}
            width={9}
            height={9}
            color={Utils.rgba(COLORS.success, 0.8)}
            style={{ position: "absolute", left: 125, bottom: 166 / 1.9 }}
          />
          <Block
            radius={15}
            width={15}
            height={15}
            color={Utils.rgba(COLORS.black, 0.8)}
            style={{ position: "absolute", right: 20, bottom: 22 }}
          />
        </Block>
        <Block marginBottom={18}>
          <Block row space="between" marginBottom={10}>
            <Text medium>United States</Text>
            <Text medium>43%</Text>
          </Block>
          <Block radius={5} height={10} color={Utils.rgba(COLORS.gray, 0.2)}>
            <Block primary radius={5} height={10} width="43%" />
          </Block>
        </Block>

        <Block marginBottom={18}>
          <Block row space="between" marginBottom={10}>
            <Text medium>Russia</Text>
            <Text medium>28%</Text>
          </Block>
          <Block radius={5} height={10} color={Utils.rgba(COLORS.gray, 0.2)}>
            <Block error radius={5} height={10} width="28%" />
          </Block>
        </Block>

        <Block marginBottom={18}>
          <Block row space="between" marginBottom={10}>
            <Text medium>Brasil</Text>
            <Text medium>11%</Text>
          </Block>
          <Block radius={5} height={10} color={Utils.rgba(COLORS.gray, 0.2)}>
            <Block secondary radius={5} height={10} width="11%" />
          </Block>
        </Block>

        <Block marginBottom={18}>
          <Block row space="between" marginBottom={10}>
            <Text medium>Spain</Text>
            <Text medium>9%</Text>
          </Block>
          <Block radius={5} height={10} color={Utils.rgba(COLORS.gray, 0.2)}>
            <Block success radius={5} height={10} width="9%" />
          </Block>
        </Block>

        <Block marginBottom={18}>
          <Block row space="between" marginBottom={10}>
            <Text medium>Australia</Text>
            <Text medium>9%</Text>
          </Block>
          <Block radius={5} height={10} color={Utils.rgba(COLORS.gray, 0.2)}>
            <Block black radius={5} height={10} width="9%" />
          </Block>
        </Block>
      </Card>
    </>
  );
};

export default Audience;
