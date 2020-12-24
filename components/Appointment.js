import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const Appointment = ({ item, handleDeletePatient }) => {


   return (

      <View style={styles.appointment}>

         <View style={styles.body}>
            <View style={styles.bodyRight}>
               <View>
                  <Text style={styles.label}>Patient </Text>
                  <Text style={styles.text}>{item.patient}</Text>
               </View>
               <View>
                  <Text style={styles.label}>Owner </Text>
                  <Text style={styles.text}>{item.owner}</Text>
               </View>
               <View>
                  <Text style={styles.label}>Symptoms </Text>
                  <Text style={styles.text}>{item.symptoms}</Text>
               </View>
            </View>

            <View style={styles.bodyLeft}>
               <View>
                  <Text style={styles.label}>Date </Text>
                  <Text style={styles.text}>{item.date}</Text>
               </View>
               <View>
                  <Text style={styles.label}>Time </Text>
                  <Text style={styles.text}>{item.time}</Text>
               </View>
            </View>
         </View>

         <View>
            <TouchableHighlight onPress={() => handleDeletePatient(item.id)} style={styles.deteleButton}>
               <Text style={styles.deleteText}>
                  Delete &times;
                  </Text>
            </TouchableHighlight>
         </View>
      </View>

   )
}

const styles = StyleSheet.create({
   appointment: {
      borderRadius: 10,
      marginVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderBottomColor: '#e1e1e1',
      borderStyle: 'solid',
      borderBottomWidth: 1,
   },
   body: {
      flex: 1,
      flexDirection: 'row'
   },
   bodyRight: {
      flex: 1,
      alignItems: 'flex-start'
   },
   bodyLeft: {
      flex: 1,
      alignItems: 'flex-start'
   },
   label: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 20
   },
   text: {
      marginTop: 3,
      fontSize: 18,
   },
   deteleButton: {
      padding: 10,
      backgroundColor: '#fc5185',
      marginVertical: 10,
      borderRadius: 6,
   },
   deleteText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
   }
})

export default Appointment
