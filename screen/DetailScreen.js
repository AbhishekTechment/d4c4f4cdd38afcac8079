import React from 'react';
import{
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class DetailScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           detail: this.props.route.params.detail,
        }
    }
    render(){
        return(
            <View>
                <Text style={styles.textStyle} > name : {this.state.detail.name} </Text>
                < Text style={styles.textStyle} > nasa_jpl_url : {this.state.detail.nasa_jpl_url} </Text>
                < Text style={styles.textStyle} > is_potentially_hazardous_asteroid : {this.state.detail.is_potentially_hazardous_asteroid ? "Yes" : "No"} </Text>
                </View>
        )
    }

}
const styles= StyleSheet.create({
    textStyle:{
        fontSize: 18,
        padding: 5,
        paddingTop:20
    }
})