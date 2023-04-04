import React from 'react';
import { View, Button, Alert } from 'react-native';

interface Props {
    title: string,
    message: string
    cancel?: () => void
    ok?: () => void
}
const CustomAlert = (title:string, message:string, ok?: () => void) => {
    Alert.alert(
        title,
        message,
      [
        // {
        //   text: 'Cancel',
        //   onPress: () => cancel,
        //   style: 'cancel'
        // },
        { text: 'OK', onPress: () => ok }
      ],
      { cancelable: false }
    );
};

export default CustomAlert;
