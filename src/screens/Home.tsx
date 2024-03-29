import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';

const Home = (props) => {
  const description = 
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneam commodo ligula eget Dynamic ColorIOS.";
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/image/main.jpeg")}/>
        
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text 
          style={[
            styles.mainHeader,
            {
              fontSize:33,
              color:"#4c5dab",
              marginTop:0,
            }]}>
              {props.channelName}
              {/* World Education */}
            </Text>
          
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
          <Menu/>
        <View style={[styles.lineStyle,{marginVertical:10,}]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height:"100%",
    display:"flex",
    backgroundColor:"#fff",
    textAlign:"center",
    justifyContent:"space-evenly",
    paddingHorizontal:20,
  },
  homeTop:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
  },
  headerImage:{
    height: undefined,
    width:"100%",
    aspectRatio:1,
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeader:{
    fontSize:30,
    color:"#344055",
    textTransform:"uppercase",
  },
  paraStyle:{
    textAlign:"center",
    fontSize:19,
    color:"#7d7d7d",
    marginTop:30,
    paddingBottom: 50,
    lineHeight:26,
  },
  lineStyle:{
    marginBottom:10,
    borderWidth:0.3,
    borderColor:"grey",
  },
  menuStyle:{
    
  }

});

export default Home;