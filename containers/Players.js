import { View, Text } from "react-native";
import styles from "@styles";
import Player from "@components/players/Player";
import { useDispatch, useSelector, useStore, shallowEqual, } from 'react-redux';
import { useEffect, useCallback } from 'react'
import * as postActions from '../src/store/modules/post';
import * as testActions from '../src/store/modules/test';

const Players = () => {
  const dispatch = useDispatch() 
  const post = useSelector(state => state.post.data);
  const count = useSelector(state => state.test.data);
  useEffect(()=> {
    console.log(post)
  }, [post])
  useEffect(()=> {
    console.log(count)
  }, [count])
  const test = useCallback(() => {
    dispatch(postActions.getPost(2))
  }, [])
  const test1 = useCallback(() => {
    dispatch(testActions.plus())
  }, [])
  const test2 = useCallback(() => {
    dispatch(testActions.minus())
  }, [])
  return (
    <View style={styles.playersContainer}>
      <Player name="홍길동" />
      <Player name="홍길순" />
      <Player name="철수" />
      <Player name="영희" />
      <button onClick={test}>123123</button>
      <button onClick={test1}>222222</button>
      <button onClick={test2}>333333</button>
    </View>
  );
};

export default Players;
