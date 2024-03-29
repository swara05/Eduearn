import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      <Text style={styles.mainHeader}> SRUSHTI KANTILAL HIRPARA </Text>
      <Text style={styles.paraStyle}> I am a Software developer 😎</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/image/user.jpg')}/>
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor,. Lorem ipsum dolor sit  amet, consectet
          adipiscing elit. Aenean commodo ligula eget dolor.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>
      
      <View style={styles.menuContainer}>
        
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          Linking.openURL(
            "https://www.instagram.com/srushti_2520/"
          )
        }>

          <Image 
          style={styles.iconStyle}
          source={require('../../assets/image/instagram.png')}/>
        </TouchableOpacity>
       
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          Linking.openURL(
            "https://www.youtube.com/results?search_query=thapa+technical+react+native"
          )
        }>

          <Image 
          style={styles.iconStyle}
          source={require('../../assets/image/youtube.png')}/>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>
          Linking.openURL(
            "https://wa.me/qr/SQQ2XY47KYQYD1"
          )
        }>

          <Image 
          style={styles.iconStyle}
          source={require('../../assets/image/whatsapp.png')}/>
        </TouchableOpacity>
 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    alignItems:"center",
  },
  imgStyle:{
    width:150,
    height:150,
    alignSelf:"center",
    borderRadius:100,
  },
  mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:20,
    marginBottom:10,
    lineHeight:30,
    textAlign:"center",
  },
  paraStyle:{
    fontSize:18,
    color:"#7d7d7d",
    paddingBottom:30,
    textAlign:"center",
  },
  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,
  },
  aboutSubHeader:{
   fontSize:18,
   color:"#fff",
   textTransform:"uppercase",
   fontWeight:"500",
   marginVertical:15,
   lineHeight:30,
   alignSelf:"center", 
  },
  aboutPara:{
    color:"#fff",
  },
  menuContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    paddingHorizontal:75,
  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,
  },
  buttonStyle:{

  },  
});

export default About;