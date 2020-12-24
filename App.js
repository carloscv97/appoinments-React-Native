import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Appointment from './components/Appointment';
import Form from './components/Form';


const App = () => {

   const [appointments, setAppointments] = useState([]);

   const [showForm, setShowForm] = useState(false)

   const handleDeletePatient = (id) => {
      const newList = appointments.filter(el => el.id !== id)
      setAppointments(newList);
   }

   const handleAddPatient = (data) => {
      setAppointments([
         ...appointments,
         data
      ])

      // Hidde Form 
      setShowForm(false)
   }

   const handleShowForm = () => setShowForm(true)

   return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <View style={styles.content}>
            <Text style={styles.title}>Appointment Administrator</Text>

            <View style={styles.body}>
               {
                  showForm
                     ? <Form handleAddPatient={handleAddPatient} setShowForm={setShowForm} />
                     :
                     (
                        <>
                           <FormButton handleShowForm={handleShowForm} />
                           <Text style={styles.subTitle}>{appointments.length > 0 ? `Administrate Your Appointments (${appointments.length})` : 'You do not have Appointments'} </Text>
                           <FlatList
                              style={styles.list}
                              data={appointments}
                              renderItem={({ item }) => (
                                 <Appointment item={item} handleDeletePatient={handleDeletePatient} />
                              )}
                              keyExtractor={el => el.id}
                           />
                        </>
                     )

               }
            </View>
         </View>
      </TouchableWithoutFeedback>
   );
};

const FormButton = ({ handleShowForm }) => {
   return (
      <TouchableHighlight onPress={handleShowForm} style={styles.modalButton}>
         <Text style={styles.modalText}>
            Add Appointment
         </Text>
      </TouchableHighlight>
   )
}

const styles = StyleSheet.create({
   content: {
      backgroundColor: '#364f6b',
      flex: 1
   },
   body: {
      flex: 1,
      paddingVertical: 5,
      paddingHorizontal: '2%'
   },
   list: {
      flex: 1,
   },
   title: {
      marginTop: Platform.OS == 'ios' ? 50 : 20,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
   },
   subTitle: {
      marginVertical: 12,
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#fff',
   },
   modalButton: {
      padding: 10,
      backgroundColor: '#3fc1c9',
      marginVertical: 10,
      borderRadius: 6,
      margin: 10
   },
   modalText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
   }
})

export default App;
