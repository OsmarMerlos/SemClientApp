import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import Icons from 'react-native-vector-icons/AntDesign';
import color from "../layout/color.js";
class textinput extends React.Component {
    constructor(){
        super(props);
    }
    render(){
        const {place, icono, onChangeText} = this.props;

        return (
        <View>
         <View style={styles.inputtext}>
            <Icons
            name="rightcircleo"
            size={24}
            color={color[color.key].twocolor}
            />
             <TextInput
              style={styles.textinputcolor}
              placeholder={place}
              onChangeText={(text) => {
                  if(onChangeText != null){
                    onChangeText(text);   
                  }  
              }}
              />
         </View>
        </View>
        );
    }
}
const styles = StyleSheet.add({
    container: {
        flex: 1,
        backgroundColor: color[color.key].onecolor, 
        alignItems: 'center',
    },
    inputtext: {
        flexDirection: 'row',
        paddingLeft: 5,
        backgroundColor: color[color.key].fourcolor,
        width: '89%',
        borderRadius: 11,
        elevation: 4,
        alignItems: 'center',
        textalign: 'center',
        marginBottom: 11,
    },
    textinputcolor: {
        height:'100%',
        color: color[color.key].threecolor,
    },
});
export default textinput;