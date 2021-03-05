import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icons from 'react-native-vector-icons/AntDesign';
import color from "../layout/color.js";
class button extends React.Component {
    constructor(){
        super(props);
    }
    render(){
        const {title, icono, onPress} = this.props;
        var icon = icono;
        return (
        <TouchableOpacity style={styles.btnstyles} 
            onPress={() => {
                onPress();
        }}>
         <Icons
          name={icon}
          size={22}
          color={color[color.key].fourcolor}     
         />
        </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    btnstyles: {
        flex: 1,
        backgroundColor: color[color.key].threecolor, 
        flexDirection: 'row',
        padding: 10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: color[color.key].fourcolor,
        marginLeft: 10,
    },
});
export default button;