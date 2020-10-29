export default function Number(props) {
    const { navigation } = props;
    const { setUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                What's your number?
            </Text>
            <Text style={styles.subHeaderText}>
                We just need your number for verification and won't spam you or sell your data.
            </Text>
            <TextInput 
                placeholder="(123)-456-7890"
                placeholderTextColor={color.inactive}
                
                style={{
                    fontSize: 20
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    let data = {
                        id: "123",
                        name: "Hayden"
                    }
                    login(setUser, data);
                    navigation.navigate('Verify');
                }}
            >
                <View style={styles.button}>
                    <Text style={{color: color.primary}}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}