import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Button,
  TextInput
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Player from "./Player";






//start first home screen
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center",  backgroundColor:"#030303" }}>
      
    <Image style={{width:360,height:350}}
 source={require('./assets/rename.png')}
  />


<TouchableOpacity style={styles.btn1}
     
 onPress={() => navigation.navigate("spotify")}   >
<Text  style={{color:"#000",fontSize:15,fontWeight:"bold"}}>  Sign up free</Text>

</TouchableOpacity>



<TouchableOpacity  style={styles.btn2}   
    onPress={() => navigation.navigate("singup-with-google")}     >
 <Image style={{width:30,height:30}}
   source={require('./assets/google.png')}
    />
 <Text  style={{color:"white"}} >  Continue with Google</Text>
 </TouchableOpacity>


 <TouchableOpacity  style={styles.btn2}   
 onPress={() => navigation.navigate("singup-with-fb")}   >
 <Image style={{width:30,height:30}}
   source={require('./assets/facebook.png')}
    />
 <Text  style={{color:"white"}} >  Continue with Facebook</Text>
 </TouchableOpacity>

      
      
    </View>
  );
}

// End start first home screen






//start second singup screen
function singup({ navigation }) {
  return (
    <View style={{ flex: 1,   backgroundColor:"#030303",  alignItems:"center", }}>

   
<View style={{ marginTop:50}}>
    <Text  style={{color:"#FFFFFF", fontSize:25, fontWeight:"bold", marginLeft:10}}>What's your email?</Text> 
    <TextInput  
                  style={{height: 50, width:330, marginLeft:10, backgroundColor: '#212122', fontSize: 20, borderRadius:5, margin:10}}  
                  
                  
              />  

<Text  style={{color:"#FFFFFF", fontSize:10,fontWeight:"bold",marginLeft:10}}>You'll need to confirm this email later.</Text>
   

<TouchableOpacity onPress={() => navigation.navigate("Player")}  style={{height:50, marginTop:30, marginLeft:130, width:120,backgroundColor:"#212122", borderRadius:30,justifyContent:"center", alignItems:"center"}}>

  
<Text  style={{color:"#41FB1C",fontSize:20, fontWeight:"bold"}} >  Log In</Text>
</TouchableOpacity>


    <Image   style={styles.piclogpage} 
    source={require('./assets/log.png')}
     
    />
    
  </View>




  </View>
  );
}

// End start Second singup  screen








//start Third screen singup-with-google
function singupgoogle({ navigation }) {
  return (
  
<View style={{ flex: 1,   backgroundColor:"#030303",   }}>
           
           <View  style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
           <Image style={{width:60,height:60, margin:30}}
    source={require('./assets/google.png')}
     />
 
 <Image style={{width:60,height:60,  margin:30}}
    source={require('./assets/spotify.png')}
     />
           </View>
              
 
       <Text  style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold", marginTop:20, marginLeft:10}}>Enter Gmail Address:</Text> 
       <TextInput  
                     style={{height: 45, width:330, marginLeft:10, backgroundColor: '#212122', fontSize: 20, borderRadius:5, margin:10}}  
                     placeholder=""  
                     
                 />
 
                  <Text  style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold", marginTop:10, marginLeft:10}}>Enter Password:</Text> 
       <TextInput  
                     style={{height: 45, width:330, marginLeft:10, backgroundColor: '#212122', fontSize: 20, borderRadius:5, margin:10}}  
                     placeholder=""  
                     
                 />
 
                  <Text  style={{color:"#FFFFFF", fontSize:20, marginTop:10, fontWeight:"bold", marginLeft:10}}>Confirm Password:</Text> 
       <TextInput  
                     style={{height: 45, width:330, marginLeft:10, backgroundColor: '#212122', fontSize: 20, borderRadius:5, margin:10}}  
                     placeholder=""  
                     
                 />  
                <Text style={{color:"#41FB1C",}}> Confirm from you email check confirm checkbox</Text>
  <TouchableOpacity  style={{borderWidth:1,
     flexDirection:'row',
           borderColor:'#41FB1C',
           alignItems:'center',
           justifyContent:'center',
           width:290,
           height:44,
           backgroundColor:'#030303',
           borderRadius:50,
           margin:5,
         marginTop:40,
       marginLeft:30}}   
  onPress={() => navigation.navigate("Player")}   >
  <Image style={{width:30,height:30}}
    source={require('./assets/google.png')}
     />
  <Text  style={{color:"white"}} >  Log in</Text>
  </TouchableOpacity>


</View>
  
  );
}

// End Third screen singup-with-google








//start 4th screen singup-with-fb



function singupfb({ navigation }) {
  return (
    <View style={{ flex: 1,   backgroundColor:"#030303",   }}>
           
    <View  style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
    <Image style={{width:60,height:60, margin:30}}
source={require('./assets/facebook.png')}
/>

<Image style={{width:60,height:60,  margin:30}}
source={require('./assets/spotify.png')}
/>
    </View>
       

<Text  style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold", marginTop:20, marginLeft:10}}>Enter Facebook ID :</Text> 
<TextInput  
              style={{height: 45, width:330, marginLeft:10, backgroundColor: '#212122', fontSize: 20, borderRadius:5, margin:10}}  
              placeholder=""  
              
          />

           <Text  style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold", marginTop:10, marginLeft:10}}>Enter Password:</Text> 
<TextInput  
              style={{height: 45, width:330, marginLeft:10, backgroundColor: '#212122', fontSize: 20, borderRadius:5, margin:10}}  
              placeholder=""  
              
          />

           <Text  style={{color:"#FFFFFF", fontSize:20, marginTop:10, fontWeight:"bold", marginLeft:10}}>Confirm Password:</Text> 
<TextInput  
              style={{height: 45, width:330, marginLeft:10, backgroundColor: '#212122', fontSize: 20, borderRadius:5, margin:10}}  
              placeholder=""  
              
          />  
         <Text style={{color:"#0237FB",}}> Confirm from you  Facebook ID notifications:</Text>
<TouchableOpacity  style={{borderWidth:1,
flexDirection:'row',
    borderColor:'#0237FB',
    alignItems:'center',
    justifyContent:'center',
    width:290,
    height:44,
    backgroundColor:'#030303',
    borderRadius:50,
    margin:5,
  marginTop:40,
marginLeft:30}}   
onPress={() => navigation.navigate("Player")}   >
<Image style={{width:30,height:30}}
source={require('./assets/facebook.png')}
/>
<Text  style={{color:"white"}} >  Log in</Text>
</TouchableOpacity>




</View>
  
  );
}

// End 4th screen singup-with-fb






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="spotify" component={singup} />
        <Stack.Screen name="singup-with-google" component={singupgoogle} />
        <Stack.Screen name="singup-with-fb" component={singupfb} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  frontpic: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250,
  },
  heading: {
    marginTop: 30,
    marginBottom: 30,
  }, btn1:{backgroundColor:"#2AE81E",
  width:290,
   height:45,
    borderRadius:50,
     margin:5,
 alignItems:'center',
 justifyContent:'center',
 marginTop:20
},

piclogpage:{
  width:370,
  height:400
  
    },
 btn2:{borderWidth:1,
   flexDirection:'row',
         borderColor:'#fff',
         alignItems:'center',
         justifyContent:'center',
         width:290,
         height:44,
         backgroundColor:'#030303',
         borderRadius:50,
         margin:5}
});
