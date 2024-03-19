import { StyleSheet, Text, View , FlatList} from 'react-native';
import FoodListItem from '../components/FoodListItem';

const foodItems = [
  {label:'Pizza', cal:75, brand: 'Dominos'},
  {label:'Apple', cal:50, brand: 'Generic'},
  {label:'Cofee', cal:150, brand: 'Americano'},
]

export default function App() {
  return (
    <View style={styles.container}>
      {/* Food item View */}
   <FlatList 
   data={foodItems}
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
});
