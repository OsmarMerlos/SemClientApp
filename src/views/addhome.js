import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import Icons from 'react-native-vector-icons/AntDesign';
import textinput from '../components/color.js';
import color from '../layout/color.js';
import request from '../server/Request.js';
import {create_homework, update_homework, delete_homework} from '../server/Request.js';
class addhomework extends React.Component {
    constructor(){
        super(props);
        this.state = {
            name: '',
            description: '',
            date: '',
            hour: '',
            done: '',
        };
    }
    componentDidMount(){}
    registerData() {
        console.log(this.state);
        var req = new Request('post', create_homework, this.state, (response) => {
            if (response.status == 200) {
                alert('homework added');
            }
        });
        req.start();
        var req = new Request('put', update_homework, this.state, (response) => {
            if (response.status == 200) {
                alert('update homework');
            }
        });
        req.start();
        var req = new Request('delete', delete_homework, this.state, (response) => {
            if (response.status == 200) {
                alert('homework deleted');
            }
        });
        req.start();
    }
    render(){
        return(
            <View style={styles.container}>
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Name" 
                    onChangeText={(txt) => {
                        this.setState({
                            name: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Description" 
                    onChangeText={(txt) => {
                        this.setState({
                            description: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Date" 
                    onChangeText={(txt) => {
                        this.setState({
                            date: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Hour" 
                    secureTextEntry={true}
                    onChangeText={(txt) => {
                        this.setState({
                            hour: txt,
                        });
                    }} 
                />
                <CustomButtons 
                    title="Add homework" 
                    iconname="documents" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                <CustomButtons 
                    title="Delete homework" 
                    iconname="trash" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                <CustomButtons 
                    title="Update homework" 
                    iconname="back-in-time" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                <CustomButtons 
                    title="Update Done" 
                    iconname="refresh" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color[color.key].onecolor,
        alignItems: 'center',
    },
});
export default addhomework;