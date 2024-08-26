
// ---------- import Packs
import { Pressable, Text, View } from 'react-native';

// ---------- import Local Tools
import { useState } from 'react';
import { stls } from './styles';
import { SvgMinus } from './SvgMinus';
import { SvgPlus } from './SvgPlus';

export type Tprops2 = {
  initValue: number;
  cbFunc: (count: number, mode: 'inc' | 'dec') => void;
};

export const BtnCounter = ({ initValue, cbFunc }: Tprops2) => {
  const [sttCount, setCount] = useState(initValue);

  const btnInc = () => {
    // ---------- set Increment Amount
    const newCount = sttCount + 1;
    setCount(newCount);
    cbFunc(newCount, 'inc');
  };

  const btnDec = () => {
    // ---------- set Decrement Amount
    const newCount = sttCount - 1;
    setCount(newCount);
    cbFunc(newCount, 'dec');
  };

  return (
    <View style={stls.container}>
      <Pressable style={stls.btn1} onPress={btnDec}>
        <SvgMinus />
      </Pressable>

      <Text style={{ marginHorizontal: 6 }}>{sttCount}</Text>

      <Pressable style={stls.btn1} onPress={btnInc}>
        <SvgPlus />
      </Pressable>
    </View>
  );
};

