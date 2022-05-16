import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { useAppContext } from '../App.provider';
import { HomeIcon } from '../components/Icons';
import { MoodPicker } from '../components/MoodPicker';

const imageUrl = require('../../assets/background.jpg');

export const Home: React.FC = () => {
  const appContext = useAppContext();

  return (
    <ImageBackground source={imageUrl} style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifySelf: 'flex-end',
  },
});
