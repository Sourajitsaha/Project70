import React from "react"
import {Text,View,TextInput,TouchableOpacity, Alert} from "react-native"

export default class WriteScreen extends React.Component{
    render(){
        return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      
            <Text style={{textAlign: 'center', fontSize: 30,marginBottom:100,marginTop:20}}>Write Screen</Text>  
            <TextInput
            style= {{width: 150,height: 30,borderWidth: 2.5,borderRightWidth: 1,fontSize: 20,marginRight:5,borderColor:'#000000',justifyContent:'center'}}
            placeholder="Story title"
            />  
             <TextInput
            style= {{width: 150,height: 30,borderWidth: 2.5,borderRightWidth: 1,fontSize: 20,marginLeft:5,borderColor:'#000000',justifyContent:'center'}}
            placeholder="Author"
            />  
            <TextInput
            style= {{width: 450,height: 500,borderWidth: 2.5,borderRightWidth: 1,fontSize: 20,marginLeft:5,borderColor:'#000000',justifyContent:'center'}}
            placeholder="Write Your Story"
            />  
            <TouchableOpacity
            style={{width:100,height:60,alignSelf: 'center',backgroundColor:'red',marginTop:20,marginBottom:20}}
            onPress={()=>{
alert("Your Submission Is Recorded");
            }}>
 <Text style={{fontWeight: 'bold',textAlign: 'center',fontSize: 30,color:'blue'}}>Submit</Text>
            </TouchableOpacity>
            </View>
        );
    }}