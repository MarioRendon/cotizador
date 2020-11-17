import React,{useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import Form from './src/components/Form.js';
import Footer from './src/components/Footer.js';
import ResultCalculate from './src/components/ResultCalculate.js';
import color from './src/utils/Color.js';

export default function App() {
  const [capital,setCapital]= useState(null);
  const [interes,setInteres]= useState(null);
  const [mes,setMes]= useState(null);
  const [total,setTotal]= useState(null);
  const [errorMessage,setErrorMessage]=useState('');
useEffect(()=>{
if(capital && interes&& mes) calculate();
else reset();

},[capital,interes,mes]);

  const calculate=()=>{
    reset();
   if(!capital)
   {
    setErrorMessage('Ingrese capital');
   }else if(!interes)
   {
    setErrorMessage('Ingrese interes');
   }else if(!mes)
   {
    setErrorMessage('Ingrese mes');
   }else{
     const i=interes/100;
     const fee=capital/((1-Math.pow(i+1,-mes))/i);
     setTotal(
       {
         mesFee:fee.toFixed(2).replace('.',','),
         totalPayable:(fee*mes).toFixed(2).replace('.',',')
       }
     )

   }
  }
  const reset=()=>
  {
    setErrorMessage(""),
    setTotal(null)
  }
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.backgroundTitle} />
        <Text style={styles.titleApp}>Cotizador prestamo</Text>
        <Form setCapital={setCapital} setInteres={setInteres} setMes={setMes}/>
      </SafeAreaView>
      <ResultCalculate 
      capital={capital}
      interes={interes}
      mes={mes}
      total={total}
      errorMessage={errorMessage} />
     <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    height:290,
    alignItems:"center",
  
    
  },
  backgroundTitle:{
    backgroundColor:color.PRIMARY_COLOR,
    height:200,
    width:"100%",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position:"absolute",
    zIndex:-1,
  },
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff'
  }
});


