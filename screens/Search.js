import React from "react";
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Utils } from "expo-ui-kit";

import BtnOptions from "../navigation/BtnOptions";
import { Card, Block, Text, Input, Icon } from "../components/";
import { mock, SIZES, COLORS } from "../constants/";

const SEARCH_OPTIONS = {
  all: "Search All",
  files: "Files",
  projects: "Projects",
  tasks: "Tasks"
};

const Search = ({ navigation, items = mock.SEARCH }) => {
  const [search, setSearch] = React.useState("");
  const [option, setOption] = React.useState("all");
  const [showOptions, setShowOptions] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <BtnOptions
            onPress={() => setShowOptions(!showOptions)}
            renderOptions={() => showOptions && renderOptions()}
          />
        );
      }
    });
  }, [navigation, showOptions]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  const renderOptions = () => {
    return (
      <Block
        white
        padding={28}
        style={styles.options}
        width={SIZES.width * 0.75}
      >
        {Object.entries(SEARCH_OPTIONS).map(([key, value]) => (
          <TouchableOpacity
            activeOpacity={1}
            key={`menu-${key}`}
            onPress={() => {
              setOption(key);
              setShowOptions(false);
            }}
          >
            <Block row>
              <Block
                row
                center
                flex={1}
                width="100%"
                padding={20}
                space="between"
                radius={SIZES.radius}
                color={key === option ? COLORS.lightGray : null}
              >
                <Text h2 bold gray={key !== option}>
                  {value}
                </Text>
                {key === option && (
                  <Icon
                    width={10}
                    name="arrowsVertical"
                    color={COLORS.primary}
                  />
                )}
              </Block>
            </Block>
          </TouchableOpacity>
        ))}
      </Block>
    );
  };

  const renderResults = () => {
    const searchAll = option === "all";

    const files = items?.files.filter(
      file =>
        file?.name?.toLowerCase().search(search.toLocaleLowerCase()) !== -1
    );
    const projects = items?.projects.filter(
      project =>
        project?.name?.toLowerCase().search(search.toLocaleLowerCase()) !== -1
    );
    const tasks = items?.tasks.filter(
      task =>
        task?.title?.toLowerCase().search(search.toLocaleLowerCase()) !== -1
    );

    if (!search?.length) return null;

    return (
      <Block>
        {(searchAll || option === "files") && Boolean(files?.length) && (
          <Block flex={0} marginBottom={28}>
            <Text h3 gray bold marginBottom>
              Files ({files?.length})
            </Text>

            <Block row wrap space="between">
              {files?.map(file => {
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
                    width={(SIZES.width - 68) / 2}
                  >
                    <Icon
                      name={file.type}
                      color="none"
                      height={60}
                      width={45}
                    />
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
          </Block>
        )}
        {(searchAll || option === "projects") && Boolean(projects?.length) && (
          <Block flex={0} marginBottom={28}>
            <Text h3 gray bold marginBottom>
              Projects ({projects?.length})
            </Text>

            {projects?.map((project, index) => (
              <Card
                key={`project-${index}`}
                radius={12}
                padding={12}
                marginBottom
              >
                <Text title semibold>
                  {project.name}
                </Text>
              </Card>
            ))}
          </Block>
        )}
        {(searchAll || option === "tasks") && Boolean(tasks?.length) && (
          <Block flex={0} marginBottom={28}>
            <Text h3 gray bold marginBottom>
              Tasks ({tasks?.length})
            </Text>
            {tasks?.map((task, index) => (
              <Card key={`task-${index}`} radius={12} padding={12} marginBottom>
                <Text title semibold>
                  {task.title}
                </Text>
              </Card>
            ))}
          </Block>
        )}
      </Block>
    );
  };

  return (
    <Block paddingHorizontal={28} marginTop={28}>
      <Input
        flex={0}
        value={search}
        color={COLORS.white}
        style={styles.input}
        placeholder="Type to search..."
        onChangeText={value => setSearch(value)}
        placeholderTextColor={Utils.rgba(COLORS.black, 0.2)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderResults()}
      </ScrollView>
    </Block>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 0
  },
  options: {
    borderRadius: 28,
    position: "absolute",
    right: 28,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    top: 48
  }
});
