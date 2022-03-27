import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import { useState } from 'react';

const countries = countryList.getData();

const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code)
    return (
        <View>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry}>
                    {countries.map(country => (
                        <Picker.Item value={country.code} label={country.name} />
                    ))}
                    
                </Picker>
            </View>

            
        </View>
    )
};

export default AddressScreen;
