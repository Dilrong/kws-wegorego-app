import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableHighlight } from 'react-native';

const ListItem = ({list}) => (
    <TouchableHighlight onPress={()=>{Linking.openURL(list.chatUrl) }}>
    <View>
        <Text style={styles.header}>{list.name}</Text>
        <Text style={styles.content}>{list.langauge}</Text>
    </View>
    </TouchableHighlight>
)
const styles = StyleSheet.create({
    header: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 12,
        color: '#95a5a6',
    },
});
export default ListItem;