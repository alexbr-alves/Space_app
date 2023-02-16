import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, FlatList } from "react-native";
import dadosPlanets from "../../Mocks/dados";
import styles from "./styles";
import Header from "./component/header";
import Body from "./component/body";

export default function Galery() {
  const navigation = useNavigation();
  const handleGoBack = () => navigation.goBack();

  const navigationPlanet = (item) =>
    navigation.navigate("PlanetView", { id: item.planet });

  const renderItem = ({ item }) => {
    return <Body data={item} navigationPlanet={() => navigationPlanet(item)} styles={styles} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header onBack={handleGoBack} />}
        ListFooterComponent={<View style={{height: 35}}/>}
        style={{ marginTop: 20 }}
        data={dadosPlanets}
        numColumns={"2"}
        renderItem={renderItem}
      />
    </View>
  );
}
