import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getData, decrease, overwrite, fetchTODOS } from '../store/actions'
import styles from '../styles/Home.module.css'
import { State } from '../store/reducer'
import { useState } from 'react'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const {counterReducer} = useSelector( (state: State) => state);

  const [inputValue, setValue] = useState(0)

  const fire = () =>{
    dispatch(getData())
  }

  const decrement = () =>{
    dispatch(decrease())
  }

  const replace = (value: number) =>{
    dispatch(overwrite(value))
  }

  const fetchData = (val: string)=>{
    dispatch(fetchTODOS(val))
  }

  return (
    <div>
      <h1> Home </h1>
      <p> Testing Actions </p>
      <button onClick = {fire}> Press Me </button>
      <button onClick = {decrement}>Decrement</button>
      <input type='text' onChange= { e => setValue(parseInt(e.target.value)) }></input>
      <p>{counterReducer}</p>
      <button onClick = {() => replace(inputValue)}>Over</button>
      <button onClick = {() => fetchData(inputValue.toString()) }>Saga</button>
    </div>
  );
}

export default Home
