import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Animated,
    Image,
} from "react-native";

import { theme, images } from "../../constants"; //constants

import { COLORS, FONTS, SIZES } from "../../constants"; //theme
//dummy data
import onBoardings from "../../constants/data";

const OnBoarding = () => {
    //render content

    function renderContent() {
        return (
            <Animated.ScrollView
                snapToAlignment="start"
                pagingEnabled
                horizontal
                scrollEnabled
            >
                {onBoardings.map((item, index) => {
                    return (
                        <View key={index} style={{ width: SIZES.width }}>
                            <Text>{item.title}</Text>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                    );
                })}
            </Animated.ScrollView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
});

export default OnBoarding;
