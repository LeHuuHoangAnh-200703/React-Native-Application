import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import TestAPI from '../components/TestAPI';

const index = () => {
    return (
        <SafeAreaView>
            <View>
                <Text className='text-red-600 font-bold text-2xl'>Hello worlds</Text>
                <TestAPI />
            </View>
        </SafeAreaView>
    );
};

export default index;