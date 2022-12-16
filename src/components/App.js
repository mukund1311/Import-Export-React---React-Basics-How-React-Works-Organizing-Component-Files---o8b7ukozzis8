import React, { Component, useState } from "react";
import  Heading from './Heading'
import  SubHeading from './SubHeading'
import  InputQuery from './InputQuery'
import  SubmitButton from './SubmitButton'
import '../styles/App.css';

export const  App = () => {
  return (
    <>
    

      <Heading/>
      <InputQuery/>
      <SubHeading/>
      <SubmitButton/>
    </>
  )
}

export default App;


