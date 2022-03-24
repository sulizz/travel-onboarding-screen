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
                showsHorizontalScrollIndicator={false}
            >
                {onBoardings.map((item, index) => {
                    return (
                        <View key={index} style={styles.onBoardingContainer}>
                            <View style={{ width: SIZES.width }}>
                                <Image
                                    source={item.img}
                                    resizeMode="cover"
                                    style={styles.imageContainer}
                                />
                            </View>

                            {/* <View>
                                <Text>{item.title}</Text>
                                <Text>{item.description}</Text>
                            </View> */}
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
    onBoardingContainer: {
        width: SIZES.width,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        width: "100%",
        height: "100%",
    },
});

export default OnBoarding;
