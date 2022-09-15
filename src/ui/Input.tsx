import * as React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';
import {Control, Path, RegisterOptions, useController} from 'react-hook-form';

import {Text} from './Text';
import {View} from './View';
import {useTheme} from './theme';
import {Colors, FontFamily, Spacing} from '@configs';
import {spacing} from '@shopify/restyle';

// types
type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = {[name in keyof T]: TRule};
export type InputControllerType<T> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface Props<T> extends TextInputProps, InputControllerType<T> {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
}

export function Input<T>(props: Props<T>) {
  const {label, name, control, rules, placeholder, ...inputProps} = props;
  const {colors} = useTheme();
  const {field, fieldState} = useController({control, name, rules});
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = () => setIsFocussed(false);
  const onFocus = () => setIsFocussed(true);

  const borderColor = fieldState.invalid
    ? colors.red
    : isFocussed
    ? colors.blue_primary
    : '#ace4fa';
  return (
    <View style={{width: '95%'}} key={`input-${name}`} marginBottom="s">
      {label && (
        <Text
          variant="label"
          color={
            fieldState.invalid ? 'red' : isFocussed ? 'blue_primary' : 'grey1'
          }>
          {label}
        </Text>
      )}
      <TextInput
        placeholderTextColor={colors.grey3}
        style={[
          styles.input,
          {
            borderColor,
          },
        ]}
        placeholder={placeholder}
        autoCapitalize="none"
        onChangeText={field.onChange}
        value={field.value as string}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
      {fieldState.error && (
        <Text fontSize={12} color="red">
          {fieldState.error.message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F3F3F3',
  },
  input: {
    color: Colors.grey1,
    paddingVertical: Spacing(3),
    paddingHorizontal: Spacing(4),
    borderWidth: 1,
    marginBottom: 4,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: FontFamily.Bold,
  },
});
