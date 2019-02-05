import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.title}>WEEK OF 2/4/19</Text>
		
		
		<FlatList
			data={[{key: 'project a'}, {key: 'project b'}]}
			renderItem={({item}) => <Text style={s.listItem}>{item.key}</Text>}
		/>
		
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	paddingTop: 25,
  },
  
  title: {
	  fontSize: 40,
	  paddingBottom: 10,
  },
  
  listItem: {
	  fontSize: 20,
	  padding: 5
  }
});
