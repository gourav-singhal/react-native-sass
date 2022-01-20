import React from "react";
import { Image, ScrollView } from "react-native";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { Block, Button, Card, Text, Icon } from "../../components";
import { mock, COLORS, SIZES } from "../../constants";

dayjs.extend(advancedFormat);

const CARD_HEIGHT = 172;

const Boards = ({ items = mock.BOARDS_ITEMS }) => {
  return (
    <Block>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 18 }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items?.map((board, index) => (
            <Card
              noflex
              key={`board-${index}`}
              marginRight={12}
              padding={[11, 15]}
              color={COLORS.primary}
              width={SIZES.width / 1.34}
              marginLeft={!index ? 28 : 0}
              height={(CARD_HEIGHT + 18) * board?.cards?.length + 93}
            >
              <Block row center space="between">
                <Text small bold white>
                  {board.name}
                </Text>
                <Button icon={<Icon name="options" color={COLORS.white} />} />
              </Block>
              <Block
                radius={4}
                minHeight={5}
                color={board.color}
                marginVertical={20}
              />
              {board?.cards?.map((card, index) => (
                <Card
                  key={`card-${card.title}-${index}`}
                  noflex
                  height={172}
                  padding={18}
                  marginBottom={18}
                >
                  <Text bold>{card.title}</Text>
                  <Block marginVertical={18}>
                    <Text small gray>
                      {dayjs(card.startAt).format("MMMM Do")}
                    </Text>
                    <Text small gray>
                      {dayjs(card.startAt).format("HH:mm")} -{" "}
                      {dayjs(card.endsAt).format("HH:mm")}
                    </Text>
                  </Block>
                  <Block row center space="between">
                    <Block row center overflow="hidden">
                      {card?.users?.splice(0, 3).map((avatar, index) => (
                        <Image
                          key={`avatar-${index}-${avatar}`}
                          source={{ uri: avatar }}
                          style={{
                            height: 28,
                            width: 28,
                            zIndex: -index,
                            borderRadius: 8,
                            marginLeft: index ? -5 : 0,
                            backgroundColor: COLORS.secondary
                          }}
                        />
                      ))}
                    </Block>
                    <Block row center>
                      {card?.files && (
                        <Block row center padding={[8, 10]} marginRight={10}>
                          <Icon
                            size={14}
                            name="attachments"
                            color={COLORS.gray}
                          />
                          <Text gray small semibold marginLeft={5}>
                            {card.files}
                          </Text>
                        </Block>
                      )}
                      <Block
                        row
                        center
                        radius={4}
                        padding={[8, 10]}
                        color={COLORS.lightGray}
                      >
                        <Icon name="alert" size={14} color={COLORS.success} />
                        <Text
                          small
                          semibold
                          marginLeft={5}
                          transform="capitalize"
                        >
                          {card.priority}
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                </Card>
              ))}
            </Card>
          ))}
        </ScrollView>
      </ScrollView>
    </Block>
  );
};

export default Boards;
