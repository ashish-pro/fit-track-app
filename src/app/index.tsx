import { StyleSheet, Text, View , FlatList, TextInput, Button, ActivityIndicator} from 'react-native';
import FoodListItem from '../components/FoodListItem';
import {useState} from 'react'
import {gql, useLazyQuery} from '@apollo/client'


const query = gql `query search($ingr: String) {
  search(ingr: $ingr) {
    text
    hints {
      food {
        label
        brand
        foodId
        nutrients {
          ENERC_KCAL
        }
      }
    }
  }
}`
const foodItems = [
  {label:'Pizza', cal:75, brand: 'Dominos'},
  {label:'Apple', cal:50, brand: 'Generic'},
  {label:'Cofee', cal:150, brand: 'Americano'},
]

export default function App() {
  const [search, setSearch] = useState('')

  const [runSearch, {data, loading, error}] = useLazyQuery(query)
  const performSearch = () =>{
    runSearch({variables: {ingr: search}});

    // setSearch('');
  };

 if(error){
  return <Text>Failed to search</Text>
 }

 const items = data?.search?.hints || [];

//  console.log(JSON.stringify(data, null,2))
  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={setSearch} placeholder='Search..' style={styles.inputText} />
      { search && <Button title='Search' onPress={performSearch} />}
      {/* Food item View */}
      {loading && <ActivityIndicator />}
   <FlatList 
   data={items}
   renderItem={({item})=> <FoodListItem item={item} />}
   contentContainerStyle={{gap:5}}
   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    gap:5,
  },
  inputText:{
    backgroundColor:'#f2f2f2',
    padding:10,
    borderRadius:20,
  }
});
