import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const Home = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello Word</Text>
      <Text style={styles.sectionTitle}>Hello Word</Text>
      <Text style={styles.sectionTitle}>Hello Word</Text>
    </View>
  );
};
