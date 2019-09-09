import {StyleSheet} from 'react-native';
import {
  buttonDefaultStyles,
  inputButtonDefaultStyles,
} from '@mgcrea/react-native-button';

Object.assign(buttonDefaultStyles, {
  view: {
    ...buttonDefaultStyles.view,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 4,
    minWidth: 200,
  },
  text: {
    color: 'black',
    padding: 12,
    fontSize: 18,
  },
});

Object.assign(inputButtonDefaultStyles, {
  view: {
    ...inputButtonDefaultStyles.view,
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 4,
    elevation: 4,
    minWidth: 200,
    borderColor: '#C5CAE9',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: 'black',
    padding: 12,
    fontSize: 18,
  },
});
