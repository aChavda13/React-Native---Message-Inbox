import React, { Component } from "react";
import { Image, StyleSheet, View, Text, PixelRatio } from "react-native";
import { Container, Content } from "native-base";

const logo1 = require("../../Images/1.png");
const logo2 = require("../../Images/2.png");
const logo3 = require("../../Images/3.png");
const logo4 = require("../../Images/4.png");
const logo5 = require("../../Images/5.png");
const logo6 = require("../../Images/6.png");
const logo7 = require("../../Images/7.png");

class InboxContent extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View>
                        <View style={styles.row}>
                            <Image
                                source={logo1}
                                style={styles.cellImage}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    John Smith
                                </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    Hey Ya!
                                </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    5 days ago
                            </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder} />


                        <View style={styles.row}>
                            <Image
                                source={logo2}
                                style={styles.cellImage}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    Andrew Parker
                                </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    Let's go for dinner tonight.
                                </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    3 days ago
                            </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder} />

                        <View style={styles.row}>
                            <Image
                                source={logo3}
                                style={styles.cellImage}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    Diana Timms
                            </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    Ya sure. Thank you.
                            </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    1 days ago
                        </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder} />

                        <View style={styles.row}>
                            <Image
                                source={logo4}
                                style={styles.cellImage}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    Marie Polaco
                        </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    Not sure why? Let's wait for tomorrow.
                        </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    3 days ago
                    </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder} />


                        <View style={styles.row}>
                            <Image
                                source={logo5}
                                style={styles.cellImage}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    Peter Chen
                    </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    Thanks, Have a good day.
                     </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    4 days ago
                </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder} />

                        <View style={styles.row}>
                            <Image
                                source={logo6}
                                style={styles.cellImage}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    Kurt Shen
                                </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    Ohh I see. Not sure why?
                                </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    2 days ago
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder} />


                        <View style={styles.row}>
                            <Image
                                source={logo7}
                                style={styles.cellImage}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    Brian Scott
                            </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    I had a great time. Enjoyed a lot.
                                 </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    8 days ago
                             </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder} />

                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10
    },
    textContainer: {
        flex: 1
    },
    cellImage: {
        height: 60,
        borderRadius: 30,
        marginRight: 5,
        width: 60
    },
    time: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: 12,
        color: '#cccccc'
    },
    name: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 1
    },
    lastMessage: {
        color: '#999999',
        fontSize: 12
    },
    cellBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 1 / PixelRatio.get(),
        marginLeft: 4
    }
});

export default InboxContent;
