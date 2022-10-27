import * as React from 'react';
import {KeyboardAvoidingView, Pressable, StyleSheet} from 'react-native';
import {Colors, FontFamily, Spacing} from '@configs';
import {View} from '@ui/View';
import {Text} from '@ui/Text';
// import {TextInput} from 'react-native-gesture-handler';
import TouchableOpacityBase from '../touchable-opacity-base';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props<T> {
  lengthInput: number;
  disabled?: boolean;
}

export function CodeInput<T>(props: Props<T>) {
  const {lengthInput, disabled} = props;
  const [code, setCode] = React.useState('');
  const [containerIsFocused, setContainerIsFocused] = React.useState(false);
  const codeDigitsArray = new Array(lengthInput);
  // const ref = React.useRef<TextInput>(null);

  const handleOnPress = () => {
    setContainerIsFocused(true);
    // ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setContainerIsFocused(false);
  };

  const toDigitInput = (_value: number, idx: number) => {
    const emptyInputChar = ' ';
    const digit = code[idx] || emptyInputChar;
    const isCurrentDigit = idx === code.length;
    const isLastDigit = idx === lengthInput - 1;
    const isCodeFull = code.length === lengthInput;
    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const containerStyle =
      containerIsFocused && isFocused
        ? {...style.inputContainer, ...style.inputContainerFocused}
        : style.inputContainer;

    return (
      <View key={idx} style={containerStyle}>
        <Text style={style.inputText}>{digit}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <Pressable style={style.inputsContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toDigitInput)}
      </Pressable>
      {/* <TextInput
        ref={ref}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={lengthInput}
        style={style.hiddenCodeInput}
      /> */}
      {/* <TextInput
        style={style.input}
        ref={ref}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={lengthInput}
      /> */}
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
  },
  inputContainerFocused: {
    borderColor: '#0f5181',
  },
  inputText: {
    fontSize: 24,
    fontFamily: 'Menlo-Regular',
  },
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
});

//   const {lengthInput, disabled} = props;
//   const textInput = React.useRef<any>(null);
//   const [isFocussed, setIsFocussed] = React.useState(false);
//   const onBlur = () => setIsFocussed(false);
//   const onFocus = () => setIsFocussed(true);
//   const [internalVal, setInternalVal] = React.useState<any>();
//   const onChangeText = (val: string) => {
//     setInternalVal(val);
//   };
//   React.useEffect(() => {}, []);

//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView
//         keyboardVerticalOffset={50}
//         behavior={'padding'}
//         style={styles.containerAvoidingView}>
//         <Text style={styles.textTitle}>
//           {/* <TextInput
//             ref={textInput}
//             value={internalVal}
//             maxLength={lengthInput}
//             returnKeyType="done"
//             keyboardType="numeric"
//             onChangeText={onChangeText}
//             style={styles.textInput}>
//             <View style={styles.containnerInput}>
//               {Array(lengthInput)
//                 .fill({})
//                 .map((data: any, index: number) => (
//                   <TouchableOpacityBase
//                     key={index}
//                     style={styles.cellView}
//                     onPress={() => {
//                       console.log('sdfsd');
//                       textInput.current?.focus();
//                     }}>
//                     <Text key={index} style={styles.cellText}>
//                       {internalVal && internalVal.length > 0
//                         ? internalVal[index]
//                         : ''}
//                     </Text>
//                   </TouchableOpacityBase>
//                 ))}
//             </View>
//           </TextInput> */}
//         </Text>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {},
//   containerAvoidingView: {
//     alignItems: 'center',
//     padding: 10,
//   },
//   textTitle: {
//     marginTop: 50,
//     marginBottom: 50,
//     fontSize: 16,
//   },
//   inputContainer: {
//     backgroundColor: '#F3F3F3',
//   },
//   textInput: {
//     width: 0,
//     height: 0,
//   },
//   containnerInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     color: Colors.grey1,
//     paddingVertical: Spacing(3),
//     paddingHorizontal: Spacing(4),
//     borderWidth: 1,
//     marginBottom: 4,
//     borderRadius: 8,
//     fontSize: 16,
//     fontFamily: FontFamily.Bold,
//   },
//   cellView: {
//     paddingVertical: 11,
//     width: 40,
//     margin: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1.5,
//   },
//   cellText: {
//     textAlign: 'center',
//     fontSize: 16,
//     fontFamily: FontFamily.Bold,
//   },
// });
