import React, { useEffect, useState } from 'react';

import { Text, StyleSheet, View, TextInput, Button, Alert, TouchableHighlight, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Form = ({ handleAddPatient, setShowForm }) => {


   const [appointment, setAppointment] = useState({
      patient: '',
      owner: '',
      phone: '',
      date: '',
      time: '',
      symptoms: ''
   })


   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

   const showDatePicker = () => {
      setDatePickerVisibility(true);
   };

   const hideDatePicker = () => {
      setDatePickerVisibility(false);
   };


   const handleConfirmDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: '2-digit' }
      setAppointment({
         ...appointment,
         date: date.toLocaleDateString('en-US', options)
      });
      hideDatePicker();
   };



   // Show o Hidde TimePicker
   const showTimePicker = () => {
      setTimePickerVisibility(true);
   };

   const hideTimePicker = () => {
      setTimePickerVisibility(false);
   };

   const handleConfirmTime = (time) => {
      const options = { hour: 'numeric', minute: '2-digit' }
      setAppointment({
         ...appointment,
         time: time.toLocaleString('en-US', options)
      })
      hideTimePicker();
   };


   const handleSubmit = () => {
      const { patient, owner, phone, date, time, symptoms } = appointment;

      if (
         patient.trim() === '' ||
         owner.trim() === '' ||
         phone.trim() === '' ||
         date.trim() === '' ||
         time.trim() === '' ||
         symptoms.trim() === ''
      ) {
         return showErrorAlert();
      }

      newAppointment = {
         ...appointment,
         id: new Date().getUTCMilliseconds()
      }
      handleAddPatient(newAppointment)


   }

   const showErrorAlert = () => {
      Alert.alert(
         'Error', // title
         'All the fields are required', //message
         [{
            text: 'Ok' // buttons arrays
         }]
      )
   }

   return (
      <ScrollView style={styles.form}>
         <View>
            <Text style={styles.label}>Patient:</Text>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setAppointment({ ...appointment, patient: text })}
            />
         </View>

         <View>
            <Text style={styles.label}>Owner:</Text>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setAppointment({ ...appointment, owner: text })}
            />
         </View>

         <View>
            <Text style={styles.label}>Phone:</Text>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setAppointment({ ...appointment, phone: text })}
               keyboardType="numeric"
            />
         </View>

         <View>
            <Text style={styles.label}>Date:</Text>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
               isVisible={isDatePickerVisible}
               mode="date"
               onConfirm={handleConfirmDate}
               onCancel={hideDatePicker}
               headerTextIOS="Pick a Date"
            //locale="es_ES"
            />
            <Text style={styles.pickedText}>{appointment.date}</Text>
         </View>

         <View>
            <Text style={styles.label}>Hour:</Text>
            <Button title="Show Time Picker" onPress={showTimePicker} />
            <DateTimePickerModal
               isVisible={isTimePickerVisible}
               mode="time"
               onConfirm={handleConfirmTime}
               onCancel={hideTimePicker}
               headerTextIOS="Pick an Hour"

            //locale="es_ES"
            />
            <Text style={styles.pickedText}>{appointment.time}</Text>
         </View>

         <View>
            <Text style={styles.label}>Symptoms:</Text>
            <TextInput
               multiline
               style={styles.input}
               onChangeText={(text) => setAppointment({ ...appointment, symptoms: text })}
            />
         </View>

         <View style={styles.buttonArea}>
            <TouchableHighlight onPress={handleSubmit} style={styles.submitButton}>
               <Text style={styles.submitText}>
                  G E N E R A T E
               </Text>
            </TouchableHighlight>
            <Button title="Cancel" color="red" onPress={() => setShowForm(false)} />
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   form: {
      borderRadius: 5,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      margin: '2.5%',
   },
   label: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 20
   },
   input: {
      marginTop: 10,
      height: 50,
      borderColor: '#e1e1e1',
      borderStyle: 'solid',
      borderWidth: 1,
   },
   pickedText: {
      marginVertical: 4,
      fontSize: 20
   },
   buttonArea: {
      flex: 1,
   },
   submitButton: {
      padding: 10,
      backgroundColor: '#3fc1c9',
      marginVertical: 10,
      borderRadius: 6,
   },
   submitText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
   },
})

export default Form
