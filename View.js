import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const View2 = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let repeat;

  const getBook = async () => {
     try {
      const response = await fetch('https://serverbookflixca.herokuapp.com/json');
      const json = await response.json();
      setData(json);
     repeat = setTimeout(getBook, 150); 
    
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            return  index.toString();
           }}
           renderItem={({ item, id }) => (
            <Text>  Book: {item.book} Details: {item.details}</Text>
          )}
        />
      )}
    </View>
  );
};


export default View2;
