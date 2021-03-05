import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Request from '../server/Request,js';
import {show_homework} from '../server/EndPoints.js';
import Item from '../components/Item.js';
import color from "../layout/color.js";
class listhomework extends React.Component {
    constructor(){
        super(props);
        this.state = {
            list: [],
        };
    }
    componentDidMount(){
        var request = new Request('get', show_homework, {}, (response) => {
        if (response.status == 200) {
            this.setState({
                list: response.data,
            });
        }
    });
    request.start();
    }
    render(){
        return (
        <View>
              <FlatList
              data={this.state.list}
              renderItme={({item}) => (
                <Item
                 name={item.name}
                 path={item.path}
                 id={item.id}
                 ondelete={(id) => {
                    this.removeData(id);
                 }}
              />
              )}
              KeyExtractor={(item) => item._id}
              />
        </View>
        );
    }
}
export default listhomework;