import React, { Fragment } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./style"

export default function QuotationsList(){
    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity 
            style={styles.buttonQuery} 
            onPress={()=> {}}
            >
                <Text style={styles.textButtonQuerry}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery} 
            onPress={()=> {}}
            >
                <Text style={styles.textButtonQuerry}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery} 
            onPress={()=> {}}
            >
                <Text style={styles.textButtonQuerry}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery} 
            onPress={()=> {}}
            >
                <Text style={styles.textButtonQuerry}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery} 
            onPress={()=> {}}
            >
                <Text style={styles.textButtonQuerry}>6M</Text>
            </TouchableOpacity>
        </View>
        </Fragment>
    )
}