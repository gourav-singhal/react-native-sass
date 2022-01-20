import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { Utils } from "expo-ui-kit";
import dayjs from "dayjs";

import { Block, Text, Icon, Modal } from "../../components";
import { mock, COLORS } from "../../constants";

const Day = ({ date, state, onPress = () => {} }) => {
  const day = dayjs(date.dateString).format("D");
  const isToday = dayjs().isSame(dayjs(date.dateString), "day");
  const isDisabled = state === "disabled";

  return (
    <TouchableOpacity onPress={() => onPress(date.dateString)}>
      <Block
        noflex
        center
        middle
        radius={12}
        width={38}
        height={38}
        secondary={isToday}
      >
        <Text body center middle semibold gray={isDisabled}>
          {day}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

const TaskOverview = ({
  onClose = () => {},
  task = mock.TASK,
  isVisible = false
}) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0}
      coverScreen={false}
      thumbColor={COLORS.white}
      headerStyle={{ backgroundColor: COLORS.primary }}
      onSwipeComplete={() => {
        setVisible(false);
        onClose();
      }}
      onBackdropPress={() => {
        setVisible(false);
        onClose();
      }}
    >
      <Block primary paddingHorizontal={28} style={{ maxHeight: 350 }}>
        <Text white bold small marginTop={-18} marginBottom={18}>
          TASK OVERVIEW
        </Text>
        <Text white bold h3 marginBottom={28}>
          {task?.title}
        </Text>
        <Block row marginBottom={18}>
          <Block
            center
            middle
            noflex
            radius={12}
            height={38}
            padding={10}
            color={Utils.rgba(COLORS.white, 0.2)}
          >
            <Icon name="clock" color={COLORS.white} />
          </Block>
          <Block>
            <Text marginLeft white bold small transform="uppercase">
              {dayjs(task?.timestamp).format("dddd, MMMM DD")}
            </Text>
            <Text white marginLeft semibold transform="uppercase">
              {dayjs(task?.timestamp).format("HH:mm")}
              {" - "}
              {dayjs(task?.timestamp)
                .add(task?.duration, "minute")
                .format("HH:mm A")}
            </Text>
          </Block>
        </Block>
        <Block row marginBottom={18}>
          <Block
            center
            middle
            noflex
            radius={12}
            height={38}
            padding={10}
            color={Utils.rgba(COLORS.white, 0.2)}
          >
            <Icon name="alert" color={COLORS.white} />
          </Block>
          <Block marginLeft>
            <Text white bold small transform="uppercase">
              PRIORITY
            </Text>
            <Text white semibold>
              {task?.priority}
            </Text>
          </Block>
        </Block>
        <Block row marginBottom={18}>
          <Block
            center
            middle
            noflex
            radius={12}
            height={38}
            padding={10}
            color={Utils.rgba(COLORS.white, 0.2)}
          >
            <Icon name="info" size={16} color={COLORS.white} />
          </Block>
          <Block marginLeft>
            <Text white bold small marginBottom transform="uppercase">
              DESCRIPTION
            </Text>
            <Text white semibold>
              {task?.description}
            </Text>
          </Block>
        </Block>
        <Block row marginBottom={18}>
          <Block
            center
            middle
            noflex
            radius={12}
            height={38}
            padding={10}
            color={Utils.rgba(COLORS.white, 0.2)}
          >
            <Icon name="attachments" color={COLORS.white} />
          </Block>
          <Block marginLeft>
            <Text white bold small marginBottom transform="uppercase">
              ATTACHMENTS
            </Text>
            {task?.attachments?.map((file, index) => (
              <Text white semibold key={`file-${index}`}>
                {file}
              </Text>
            ))}
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default () => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(dayjs().month());
  const [showOverview, setVisible] = useState(false);

  return (
    <>
      <Block marginHorizontal={28}>
        <Block row center space="between">
          <Text h2 gray bold>
            {dayjs()
              .month(month)
              .format("MMMM YYYY")}
          </Text>
          <Block row center>
            <TouchableOpacity onPress={() => setMonth(month - 1)}>
              <Icon
                size={16}
                name="arrowLight"
                color={COLORS.primary}
                style={{ marginRight: 18, transform: [{ rotate: "90deg" }] }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMonth(month + 1)}>
              <Icon
                size={16}
                name="arrowLight"
                color={COLORS.primary}
                style={{ transform: [{ rotate: "-90deg" }] }}
              />
            </TouchableOpacity>
          </Block>
        </Block>
        <Block row space="around" marginTop={22} marginBottom={12}>
          <Text gray body center>
            S
          </Text>
          <Text gray body center>
            M
          </Text>
          <Text gray body center>
            T
          </Text>
          <Text gray body center>
            W
          </Text>
          <Text gray body center>
            T
          </Text>
          <Text gray body center>
            F
          </Text>
          <Text gray body center>
            S
          </Text>
        </Block>
        <Calendar
          current={dayjs()
            .month(month)
            .format("YYYY-MM-DD")}
          hideArrows
          headerStyle={{ maxHeight: 0 }}
          dayComponent={props => (
            <Day
              {...props}
              onPress={async day => {
                await setDay(day);
                setVisible(true);
              }}
            />
          )}
          style={{ paddingLeft: 0, paddingRight: 0 }}
          theme={{
            calendarBackground: "transparent",
            textSectionTitleColor: COLORS.black,
            dayTextColor: COLORS.black,
            todayTextColor: COLORS.black,
            monthTextColor: "transparent",
            textDisabledColor: COLORS.gray
          }}
        />
      </Block>
      <TaskOverview
        isVisible={showOverview}
        onClose={() => setVisible(false)}
        task={{ ...mock.TASK, timestamp: dayjs(day) }}
      />
    </>
  );
};
