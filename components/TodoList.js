import { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from "react-native";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        list: [], //{key:"test"}, {key:"test2"}
        inputTxt: "",
    };
    title = "Ma TodoList";
    insertList() {
        let listTmp = this.state.list;
        listTmp.push({ key: this.state.inputTxt });
        this.setState({ list: listTmp });
        this.setState({ inputTxt: "" });
    }
    render() {
        return (
            <View>
                <Text>{this.title}</Text>
                <TextInput
                    onChangeText={(text) => {
                        this.setState({ inputTxt: text });
                    }}
                    value={this.state.inputTxt}
                ></TextInput>
                <Button
                    title="OK"
                    onPress={() => {
                        this.state.inputTxt.length !== 0 && this.insertList();
                    }}
                ></Button>
                <ScrollView>
                    <FlatList
                        data={this.state.list}
                        renderItem={({ item }) => (
                            <Text>
                                {item.key}
                                <Button title="X"></Button>
                            </Text>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}

export { TodoList };
