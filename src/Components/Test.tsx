import React, {Dispatch} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {IRootState} from '../store/index';
import {addItemToList} from 'src/store/auth/actions';
import {DemoActions} from 'src/store/auth/types';
import * as asyncActions from 'src/store/auth/async-actions';

export default function Test() {
  const {list, loading} = useSelector((state: IRootState) => state.demo);

  const dispatch = useDispatch();
  const addDispatch = useDispatch<Dispatch<DemoActions>>();

  return (
    <View>
      <Text>{loading ? 'loading' : 'finish'}</Text>
      {list?.map((el) => {
        return <Text>{el}</Text>;
      })}
      <Button
        title={'add'}
        onPress={() => {
          dispatch(addItemToList('add'));
          asyncActions.addItemAsync(dispatch, 'item');
        }}></Button>
    </View>
  );
}
