import {View, Text, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const FoodListItem = ({ item }) => {
  return (
    <View
      style={styles.foodItemContainer}
    >
      <View style={styles.textContainer}>
        <Text style={styles.textLabel}>{item.food.label}</Text>
        <Text style={styles.textCal}>
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
    foodItemContainer:{
        backgroundColor: "#f6f6f8",
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer:{
        flex: 1, 
        gap: 5
    },
    textLabel:{
        fontWeight: "bold", 
        fontSize: 16
    },
    textCal:{
        color: "dimgray" 
    }
})
export default FoodListItem;