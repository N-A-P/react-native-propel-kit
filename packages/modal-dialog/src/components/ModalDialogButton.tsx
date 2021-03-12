import {Pressable, PressableProps} from '@mgcrea/react-native-button';
import React, {FunctionComponent} from 'react';
import {Platform, TextStyle, ViewStyle} from 'react-native';

export type ModalDialogButtonProps = PressableProps;

export const ModalDialogButton: FunctionComponent<ModalDialogButtonProps> = ({...otherPressableProps}) => {
  return <Pressable defaultStyles={defaultStyles} activeOpacity={0.5} {...otherPressableProps} />;
};

export const defaultStyles = {
  view: Platform.select<ViewStyle>({
    ios: {
      flexGrow: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      height: 56
    },
    android: {
      flexGrow: 0,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      paddingVertical: 10,
      marginRight: 8,
      marginBottom: 3,
      borderRadius: 2,
      minWidth: 56
    }
  }),
  disabledView: Platform.select<ViewStyle>({
    ios: {},
    android: {}
  }),
  text: Platform.select<TextStyle>({
    ios: {
      fontSize: 20,
      color: '#007aff' // iOS.systemBlue (@see https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/)
    },
    android: {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#009688', // android.teal500 (@see https://material.io/design/color/the-color-system.html)
      paddingHorizontal: 8,
      paddingBottom: 2
    }
  }),
  disabledText: Platform.select<TextStyle>({
    ios: {color: '#cdcdcd'},
    android: {color: '#cdcdcd'}
  })
};
