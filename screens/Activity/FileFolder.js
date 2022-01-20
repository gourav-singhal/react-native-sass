import React from "react";
import { Utils } from "expo-ui-kit";
import { TouchableOpacity, ScrollView } from "react-native";

import { Block, Button, Card, Text, Icon } from "../../components";
import { COLORS, SIZES } from "../../constants";

const FileFolder = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ onPress }) => {
        return (
          <Button
            primary
            onPress={event => onPress(event)}
            style={{ marginHorizontal: 28 }}
            icon={
              <Icon
                size={16}
                name="arrowLight"
                color={COLORS.white}
                style={{ transform: [{ rotate: "90deg" }] }}
              />
            }
          />
        );
      }
    });
  }, [navigation, route]);

  const folder = route.params.folder;

  return (
    <Block margin={28}>
      <Block row center marginBottom={28}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text h3 gray bold>
            Main Library
          </Text>
        </TouchableOpacity>
        <Icon
          size={10}
          name="arrowLight"
          color={COLORS.gray}
          marginHorizontal={10}
          style={{ transform: [{ rotate: "-90deg" }] }}
        />
        <Text h3 bold>
          {folder.name}
        </Text>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          row
          center
          middle
          marginBottom={28}
          paddingVertical={28}
          style={{
            borderWidth: 2,
            borderRadius: 12,
            borderStyle: "dashed",
            borderColor: COLORS.success
          }}
        >
          <Icon name="upload" color={COLORS.success} width={28} />
          <Text center title bold marginLeft>
            Browse your files
          </Text>
        </Block>
        <Block row wrap space="between">
          <Card
            center
            middle
            noflex
            marginBottom={11}
            padding={[30, 12]}
            width={(SIZES.width - 67) / 2}
          >
            <Icon width={45} height={60} name="excel" color={COLORS.gray} />
            <Text title center bold marginTop={20}>
              Uploading...
            </Text>
            <Text gray center caption>
              65% • 4 seconds left
            </Text>
            <Block row center marginHorizontal={15} marginTop={10}>
              <Block
                row
                width="90%"
                radius={5}
                height={5}
                marginRight={10}
                color={Utils.rgba(COLORS.primary, 0.2)}
              >
                <Block primary radius={5} maxWidth="75%" />
              </Block>
              <Icon name="close" color={COLORS.gray} size={9} />
            </Block>
          </Card>
          {folder?.files?.map(file => {
            const fileType =
              file.type === "excel"
                ? "Spreadsheet"
                : file.type === "sketch"
                ? "Sketch"
                : file.type === "powerpoint"
                ? "Slide"
                : "Word";
            return (
              <Card
                key={`file-${file.id}`}
                center
                middle
                noflex
                marginBottom={11}
                padding={[30, 12]}
                width={(SIZES.width - 67) / 2}
              >
                <Icon name={file.type} color="none" height={60} width={45} />
                <Text title center bold marginTop={20}>
                  {file.name}
                </Text>
                <Text gray center caption>
                  {file.size}mb {fileType} file
                </Text>
              </Card>
            );
          })}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default FileFolder;
