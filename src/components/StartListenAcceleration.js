const StartListenAcceleration = ()=>{

        return  (
        <Pressable style={styles.button} onPress={startSensor}>
                <Text>Start accelerometer</Text>
        </Pressable>
      )
}

export {StartListenAcceleration}