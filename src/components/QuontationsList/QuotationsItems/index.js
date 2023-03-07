import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

export default function QuontationsItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                    style={styles.logBitcoin}
                    source={require("../../../img/bitcode.png")}
                    />
                    <Text style={styles.dayCotation}>06/03/2023</Text>
                </View>
            </View>
                <View style={styles.contextRigth}>
                    <Text style={styles.price}>$ 533331.052</Text>
                </View>
       </View>
    )
}