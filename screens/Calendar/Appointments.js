import React from "react";
import dayjs from "dayjs";
import { Image, ScrollView } from "react-native";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { Block, Card, Text, Icon } from "../../components";
import { mock, COLORS } from "../../constants";

dayjs.extend(advancedFormat);

const Appointments = ({ items = mock.APPOINTMENTS }) => {
  return (
    <Block paddingHorizontal={28}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 18 }}
      >
        {items?.map((card, index) => (
          <Card padding={[0]} marginBottom={18} key={`card-${index}`}>
            <Block row>
              <Block
                radius={4}
                maxWidth={5}
                margin={[8, 0, 8, 8]}
                error={card.priority === "high"}
                success={card.priority === "low"}
                secondary={card.priority === "medium"}
              />
              <Block margin={18}>
                <Text bold>{card.title}</Text>
                <Block marginVertical={18}>
                  <Text small gray>
                    {dayjs(card.startAt).format("MMMM Do")}
                  </Text>
                  <Text small gray>
                    {dayjs(card.startAt).format("HH:mm")} -{" "}
                    {dayjs(card.endsAt).format("HH:mm a")}
                  </Text>
                </Block>
                <Block row space="between">
                  <Block row center>
                    {card?.users?.slice(0, 3).map((avatar, index) => (
                      <Image
                        key={`avatar-${index}`}
                        source={{ uri: avatar }}
                        style={{
                          height: 28,
                          width: 28,
                          zIndex: -index + 1,
                          borderRadius: 8,
                          marginLeft: index ? -5 : 0,
                          backgroundColor:
                            COLORS[
                              index === 0
                                ? "primary"
                                : index === 1
                                ? "error"
                                : "success"
                            ]
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
                      <Icon
                        name="alert"
                        size={14}
                        color={
                          COLORS[
                            card.priority === "high"
                              ? "error"
                              : card.priority === "medium"
                              ? "secondary"
                              : "success"
                          ]
                        }
                      />
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
              </Block>
            </Block>
          </Card>
        ))}
      </ScrollView>
    </Block>
  );
};

export default Appointments;
