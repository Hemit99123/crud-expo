import React, { useState } from 'react';
import { SafeAreaView ,Alert,StyleSheet, Text , TextInput, Button } from 'react-native';
import View2 from './View';
import SafeViewAndroid from "./SafeViewAndroid";

const App = () =>{
    const [book ,setBook] = useState('')
    const [details ,setDetails] = useState('')

    const _submitData = () =>{
        fetch("https://serverbookflixca.herokuapp.com/newbook", {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                book : book,
                details: details
            })
        })
        setBook('')
        setDetails('')
        Alert.alert('Added your information sucessfully!')
    }


    return(
 
       
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>


        <Text>Name of the book:</Text>
            <TextInput
                label='Name'
                style={styles.input}
                value={book}
                theme = {theme}
                mode="outlined"
                onChangeText={text => setBook( text )}
            />
            <Text>Detail of the book:</Text>
            <TextInput
                label='Detail'
                style={styles.input}
                value={details}
                theme = {theme}
                mode="outlined"
                onChangeText={text => setDetails( text)}
            />

                <Button icon="content-save" style={styles.input} mode="contained" onPress={() => _submitData()} title="Save">
                   
                </Button>

                <Text>The books!</Text>
                <View2 />

        </SafeAreaView>
    )
}

const theme = {
    colors: {  
      primary: 'red',
    },
  };

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }

})

export default App;