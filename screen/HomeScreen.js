import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


var apiKey = "1aeH15oaFRwgTAxfTuRRhU0lLujvENQ6m2iBOjXM";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            astroidId: "",
        }
    }

    onAstroidIdEnter = (text) => {

        if (text.trim() != "") {
            this.setState({ astroidId: text });
        }
    }
    onSubmitClick = () => {
        this.getAsteroidDetailById(this.state.astroidId);
    }
    onRandomAsteroidClick = () => {
        this.getRandomAsteroidId();
    }

    getAsteroidDetailById(astroidId) {
        fetch("https://api.nasa.gov/neo/rest/v1/neo/" + astroidId + "?api_key=" + apiKey)
            .then(res => res.json())
            .then((response) => {
                this.props.navigation.navigate("Detail", { detail: response });

            }).catch(error => {
                Alert.alert("", "Please enter correct Asteroid id");
            })
    }


    getRandomAsteroidId = () => {
        fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=" + apiKey)
            .then(res => res.json())
            .then((response) => {
                var randomIndex = Math.floor(Math.random() * Math.floor(response.page.size - 1));
                this.getAsteroidDetailById(response.near_earth_objects[randomIndex].id);

            }).catch((error) => {
                Alert.alert("", "Something went wrong Please try again!");

            })
    }
    render() {
        return (
            <View style={{ padding: 20 }}>

                <TextInput style={{ backgroundColor: "#0006" }} placeholder="Enter Asteroid ID"
                    onChangeText={(text) => this.onAstroidIdEnter(text)}>
                </TextInput>

                <TouchableOpacity style={styles.btnStyle}
                    disabled={this.state.astroidId === "" ? true : false}
                    onPress={this.onSubmitClick}>
                    <Text style={styles.btnTextStyle}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStyle}
                    onPress={this.onRandomAsteroidClick}>
                    <Text style={styles.btnTextStyle}>Random Asteroid</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: "black",
        marginTop: 20,
        padding: 15
    },
    btnTextStyle: {
        textAlign: 'center',
        color: 'white'
    }

})