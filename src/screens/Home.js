 import React, { useEffect, useRef } from 'react';
 import {
   Pressable,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';


import Sound from 'react-native-sound'

import {StartListenAcceleration} from '@/components/StartListenAcceleration'

 const Home = () => {
   const isDarkMode = useColorScheme() === 'dark';
  
  // Enable playback in silence mode
  Sound.setCategory('Playback');

  

  var fartSound = new Sound('fart.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

   const backgroundStyle = {
     backgroundColor: isDarkMode ? 'black' : 'grey',
     flex: 1
   };
 
   return ( 
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View>

           <StartListenAcceleration />
          
              <Pressable style={styles.neumorphButton} onPress={()=>{fartSound.play()}}>
               <Text>Prout</Text>
            </Pressable>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   button: {
    borderWidth:1,
    borderColor: 'red',
    width:50,
    height: 50
   },
   neumorphButton:{
    width:50,
    height: 50,
    borderRadius:30
   }
 });
 
 export default Home;
 