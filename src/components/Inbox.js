import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View, Image } from 'react-native';
import { Container, Header, Title, Content, Icon, Left, Right, Body} from "native-base";
import { AppLoading } from 'expo';
import InboxContent from './InboxContent';

class Inbox extends React.Component {
    state = {
        fontLoaded: false,
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            title=""
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Inbox</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <InboxContent />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
});

export default Inbox;
