import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity,Modal} from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [OPrice,setOPrice]=React.useState();
  const [DPrice,setDPrice]=React.useState();
  const [save,setsave]=React.useState();
  const [fprice,setfprice]=React.useState();
  const [getarrayobj,setarrayobj]=React.useState([]);
  var [getmodel,setmodel]=React.useState(false);

  


  
  return (
    
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <Modal
      
      visible={getmodel}>
        <Text>{
          getarrayobj.map(obj=>
            <Text>Original Price:{obj.originalPrice}{'\n'} Discount Price :{obj.DiscountPrice} {'\n'} Final price:{obj.FinalPrice} {'\n'} {'\n'}</Text>
              )
          
          }</Text>
          <Button
          title="Close"
          onPress={()=>{setmodel(false)}}/>

      </Modal>
      
    
      
      <TextInput placeholder='Original price' 
      style={styles.input}
      keyboardType='numeric-pad'
      
      defaultValue={OPrice}
      onChangeText={
        (text)=>{
          if(text<0){
            alert("Number must be positive");
          }
          else if(text>=0){
            setOPrice(text)
          }
          else{
            alert("Input must be number")
          }
          
        }
        }
      />
         
      
      <TextInput
      placeholder='Discount percentage' style={styles.input}
      defaultValue={DPrice}
      keyboardType='numeric-pad'
      onChangeText={(text)=>{if(text>100){
        alert("Discount can not be greater than 100");
      }
      else{
        {setDPrice(text)}
      }
    }
      
    }
      />

      <Text style={{padding:10, fontWeight:'bold'}}>You Saved: {save} </Text>
      <Text style={{padding:10, fontWeight:'bold'}}>Final Price:{fprice} </Text>

     <TouchableOpacity
     onPress={()=>{
       
       setsave(OPrice*(DPrice/100));
    setfprice(OPrice-OPrice*(DPrice/100));
       

        setarrayobj(prevObj => [...prevObj,{originalPrice:OPrice,DiscountPrice:DPrice,FinalPrice:OPrice-OPrice*(DPrice/100)}]);
      
       
      }}
     >
        <Text style={styles.button}>Calculate</Text>
     </TouchableOpacity>

     <Text>{'\n'}</Text>

     <TouchableOpacity
     onPress={()=>setmodel(true)}
     >
        <Text style={styles.button}>Save</Text>
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
