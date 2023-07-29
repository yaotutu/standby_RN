import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import useProfilesStore from '../store';
import commonStyles from '../common/styles'
interface ClockProps {
  format?: 'hh:mm' | 'hh:mm:ss';
}

const Clock: React.FC<ClockProps> = ({ format = 'hh:mm:ss' }) => {

  const { fontSize, fontColor, backgroundColor } = useProfilesStore()
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (format === 'hh:mm:ss') {
        setTime(now.toTimeString().slice(0, 8));
      } else if (format === 'hh:mm') {
        setTime(now.toTimeString().slice(0, 5));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [format]);

  return (
    <View style={[{ backgroundColor: backgroundColor }, commonStyles.fullScreen]}>
      <Text style={{
        color: fontColor,
        fontSize,
        fontFamily: "Lobster-Regular"
      }}>{time}</Text>
    </View>
  );
};

export default Clock;
