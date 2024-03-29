import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'

const CourseDetails = ({ route }) => {
  // Assuming you pass the course data as route.params.course
  const { course, courseTitle } = route.params;

  const handleLinkPress = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color:'#000',textAlign:'center'}}>{course.title}</Text>
        
      <View 
        style={{
            paddingHorizontal:10,
            paddingVertical:15,
            backgroundColor: "rgba(255,255,255,0.90)",
            borderRadius:5,
            shadowColor:"grey",
            shadowOffset:{width:0,height:0},
            shadowOpacity:0.5,
            shadowRadius:8,
            elevation:8,
            marginVertical:20,
        }}
      >
        <Image source={course.img1} style={{ width: '99%', height: 250,borderRadius:10, resizeMode:'contain' }}  />
        <TouchableOpacity 
          style={{
              marginTop:10,
              width:'90%',
              paddingHorizontal:20,
              paddingVertical:15,
              borderRadius:15,
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'center',
              backgroundColor:'#809fff'
          }}
          onPress={() => handleLinkPress(course.websiteLink1)}
        >
          <Text style={{fontFamily:"Protest Riot Regular",color:'#fff'}}>{course.course1}</Text>
        </TouchableOpacity>
      </View>
      
      <View 
        style={{
            paddingHorizontal:10,
            paddingVertical:15,
            backgroundColor: "rgba(255,255,255,0.90)",
            borderRadius:5,
            shadowColor:"grey",
            shadowOffset:{width:0,height:0},
            shadowOpacity:0.5,
            shadowRadius:8,
            elevation:8,
            marginVertical:20,
        }}
      >
        <Image source={course.img2} style={{ width: '99%', height: 250,borderRadius:10 , resizeMode:'contain'}} />
        <TouchableOpacity 
          style={{
              marginTop:10,
              width:'90%',
              paddingHorizontal:20,
              paddingVertical:15,
              borderRadius:15,
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'center',
              backgroundColor:'#809fff'
          }}
          onPress={() => handleLinkPress(course.websiteLink2)}
        >
          <Text style={{fontFamily:"Protest Riot Regular",color:'#fff'}}>{course.course2}</Text>
        </TouchableOpacity>
      </View>

      
      <View 
        style={{
            paddingHorizontal:10,
            paddingVertical:15,
            backgroundColor: "rgba(255,255,255,0.90)",
            borderRadius:5,
            shadowColor:"grey",
            shadowOffset:{width:0,height:0},
            shadowOpacity:0.5,
            shadowRadius:8,
            elevation:8,
            marginVertical:20,
        }}
      >
        <Image source={course.img3} style={{ width: '99%', height: 250,borderRadius:10 }} resizeMode="contain" />
        <TouchableOpacity 
          style={{
              marginTop:10,
              width:'90%',
              paddingHorizontal:20,
              paddingVertical:15,
              borderRadius:15,
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'center',
              backgroundColor:'#809fff'
          }}
          onPress={() => handleLinkPress(course.websiteLink3)}
        >
          <Text style={{fontFamily:"Protest Riot Regular",color:'#fff'}}>{course.course3}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    );
};
export default CourseDetails;
