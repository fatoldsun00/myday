 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import Sound from 'react-native-sound'
import { map, filter } from "rxjs/operators";
setUpdateIntervalForType(SensorTypes.accelerometer, 500); // defaults to 100ms

 const Home = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   useEffect(()=>{
    const subscription = accelerometer//.subscribe((e)=>console.log(e))
    .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 12)).subscribe((e)=>{
     
      console.log(e)
    })
   
    
    return subscription.unsubscribe;
   },[])



// Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

  // Play the sound with an onEnd callback
  whoosh.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
});

   const backgroundStyle = {
     backgroundColor: isDarkMode ? 'black' : 'grey',
   };
 
   return ( 
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View
           style={{
             backgroundColor: isDarkMode ? 'black' : 'white',
           }}>
           <Text style={{color:'red'}}>TTTTTTTT</Text>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Home;
 