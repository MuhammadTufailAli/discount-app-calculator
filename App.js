import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';

export default function App() {
  const [OPrice,setOPrice]=React.useState();
  const [DPrice,setDPrice]=React.useState();
  const [save,setsave]=React.useState();
  const [fprice,setfprice]=React.useState();
  return (
    
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      

      
      <TextInput placeholder='Original price' 
      style={styles.input}
      keyboardType='numeric'
      defaultValue={OPrice}
      onChangeText={(text)=>{setOPrice(text)}}
      />
         
      
      <TextInput
      placeholder='Discount percentage' style={styles.input}
      defaultValue={DPrice}
      onChangeText={(text)=>{setDPrice(text)}}
      />

      <Text style={{padding:10, fontWeight:'bold'}}>You Saved: {save} </Text>
      <Text style={{padding:10, fontWeight:'bold'}}>Final Price:{fprice} </Text>

     <TouchableOpacity
     onPress={()=>{setsave(OPrice*(DPrice/100))
    setfprice(OPrice-save)}}
     >
<Text style={styles.button}>Calculate</Text>
     </TouchableOpacity>
      
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    borderRadius:10,
    borderWidth:5,
    backgroundColor:'blue',
    color:'white',
    width: 200,
    textAlign:'center'
    

  },
  input:{
    width: 200,
    borderColor: 'red',
    borderWidth:1,
    borderRadius:20,
    padding:10,
    margin:10,
    marginRight:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
