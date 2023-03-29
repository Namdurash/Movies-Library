import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddMovie } from '@screens/AddMovie';
import { FilterMovies } from '@screens/FilterMovies';
import { Home } from '@screens/Home';
import { MovieDetailsPage } from '@screens/MovieDetailsPage';
import { SignUp } from '@screens/SignUp';
import { SignIn } from '@screens/SingIn';
import { useAppSelector } from '@store/hooks/hooks';
import * as React from 'react';

import { Routes } from './routes';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

interface Props {
  navigation?: NavigationContainerRef<ParamListBase>;
}

export const ScreenStack: React.FC<Props> = () => {
  const { status } = useAppSelector((state) => state.user);

  return (
    <Stack.Navigator
      initialRouteName={Routes.SignIn}
      screenOptions={{
        headerShown: false,
      }}>
      {status ? (
        <>
          <Stack.Screen name={Routes.Home} component={Home} />
          <Stack.Screen name={Routes.AddMovie} component={AddMovie} />
          <Stack.Screen name={Routes.MovieDetails} component={MovieDetailsPage} />
          <Stack.Screen name={Routes.FilterMovies} component={FilterMovies} />
        </>
      ) : (
        <>
          <Stack.Screen name={Routes.SignIn} component={SignIn} />
          <Stack.Screen name={Routes.SignUp} component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};
