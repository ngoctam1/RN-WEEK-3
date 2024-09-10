import { View, Alert, Button } from "react-native";

export default function App(){
    return(
        <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
            <Button title="Alert" onPress={() => Alert.alert("Bam lam gi?")}/>
        </View>
    );
}