import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import Sound from 'react-native-sound'
import {useRef} from 'react-native'
import { map, filter } from "rxjs/operators";

const StartListenAcceleration = ()=>{
        const subscription = useRef()
				const timeout = useRef()
				const [sensorState,setSensorState] = useState(false)

        useEffect(()=>{
         return ()=> {
					 subscription.current?.unsubscribe;
					 if (timeout.current) clearInterval(timeout.current)
					}
        },[])
     
				var whipSound = new Sound('whip.mp3', Sound.MAIN_BUNDLE, (error) => {
					if (error) {
						console.log('failed to load the sound', error);
						return;
					}
				});

        const startSensor = ()=>{
          subscription.current?.unsubscribe;
					//subscription.current = accelerometer.subscribe((e)=>console.log(e))
					setUpdateIntervalForType(SensorTypes.accelerometer, 100);
	
					/*subscription.current = accelerometer
					.pipe(map(({ x, y, z }) => Math.abs(x) + Math.abs(y) + Math.abs(z)), filter(speed => speed > 20))
					.subscribe((e)=>{ whipSound.play()})*/
					subscription.current = accelerometer.subscribe((e)=>{ console.log(e);})
					setSensorState(true)
					//stop after timeout
					timeout.current = setTimeout(() => {
						setSensorState(false)
						subscription.current?.unsubscribe;
					}, 10000);
        }

				const checkForSound = ()=>{
					whipSound.play()
				}

        return  (
        <Pressable style={styles.button} onPress={startSensor}>
          <Text>Start accelerometer</Text>
					<View style={{backgroundColor: sensorState ? 'green':'red', width:20,height:20,borderRadius:30}} />					
        </Pressable>
      )
}

export {StartListenAcceleration}