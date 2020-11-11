import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultCalculate(props) {
    console.log(props);
    const {capital,interes,mes,total,errorMessage}=props;
    return(
        <View  style={style.content}>
            {total && (
                <View style={style.boxResult}>
                    <Text style={style.title}RESUMEN></Text>
                    <DataResult title="Cantidad " value={`${capital}`} />
                    <DataResult title="interes " value={`${interes}`} />
                    <DataResult title="mes " value={`${mes}`} />
                    <DataResult title="total " value={`${total.totalPayable}`} />
                </View>
            )}
            <View>
                <Text style={style.error}>{errorMessage} </Text>
            </View>
        </View>
    )
}

function DataResult(props)
{
    const{title,value}=props;
    return (
        <View style={style.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const style= StyleSheet.create(
    {
        boxResult:{

            color:"#000",
            backgroundColor:"#fff"
        },
        value:{
            color:"#000",
            backgroundColor:"#fff"
        },
        title:{
           color:"#000",
           backgroundColor:"#fff"
        },
        content:{
            marginTop:100,
            marginHorizontal:40
        },
        error:{
            textAlign:"center",
            fontSize:17,
            color:"#f00",
            fontWeight:"bold",
        }

    }
)