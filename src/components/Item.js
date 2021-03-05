import React from "react";
import {View, Text, StyleSheet, Image, Button} from "react-native";
class Item extends React.Component {

     constructor(props){
         super(props); 
 
 
 }
 onDelete(id){
     const {ondelete} = this.props;
     ondelete(id);
 }
 render(){
     return (
 
  <View style={styles.containerlist}>
  <View style={styles.textstyle}>
   <Text> {this.props.name}</Text>
 </View>
  <View>
      <Button
         title="delete"
         onPress={() => {
         this.onDelete(this.props.id);
        }}
       />
     </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    containerlist: {
        flexDirection: 'row',
        backgroundColor:'#E1C9C4',
        marginTop: 5,
        padding: 10,
        borderRadius: 10,
        elevation: 4,
    },
    textstyle: {
        justifyContent: 'flex-start',
        width: '70%',
    },
});
export default Item;