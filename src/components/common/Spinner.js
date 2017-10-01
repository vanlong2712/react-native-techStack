import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1, // make sure the spinner full width of the screen you want to fill the full width
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
