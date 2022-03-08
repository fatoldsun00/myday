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

 import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import Sound from 'react-native-sound'
import { map, filter } from "rxjs/operators";
import {StartListenAcceleration} from '@/components/StartListenAcceleration'

 const Home = () => {
   const isDarkMode = useColorScheme() === 'dark';
  const subscription = useRef()
   useEffect(()=>{
    //const subscription = accelerometer.subscribe((e)=>console.log(e))
    /*.pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 12)).subscribe((e)=>{
     
      console.log(e)
    })*/
   
    return subscription.current?.unsubscribe;
   },[])

   const startSensor = ()=>{
    //subscription.current = accelerometer.subscribe((e)=>console.log(e))
    setUpdateIntervalForType(SensorTypes.accelerometer, 1000); // defaults to 100ms

    subscription.current = accelerometer
    .pipe(map(({ x, y, z }) => Math.abs(x) + Math.abs(y) + Math.abs(z)), filter(speed => speed > 20))
    .subscribe((e)=>{ whipSound.play()})
   }

   const stopSensor = ()=>{
    subscription.current?.unsubscribe()
   }


  // Enable playback in silence mode
  Sound.setCategory('Playback');

  var whipSound = new Sound('whip.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whipSound.getDuration() + 'number of channels: ' + whipSound.getNumberOfChannels());
  });

  var fartSound = new Sound('fart.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whipSound.getDuration() + 'number of channels: ' + whipSound.getNumberOfChannels());
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
           <Pressable style={styles.button} onPress={()=>{
             whipSound.play()
           }}>
              <Text style={{color:'red'}}>Whip sound</Text>
           </Pressable>
           <StartListenAcceleration />
           <Pressable style={styles.button} onPress={startSensor}>
             <Text>Start accelerometer</Text>
           </Pressable>
           <Pressable style={styles.button} onPress={stopSensor}>
             <Text>Stop accelerometer</Text>
           </Pressable>
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
 