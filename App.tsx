import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Course from './src/screens/Course';
import About from './src/screens/About';
import UserData from './src/screens/UserData';
import Contact from './src/screens/Contact';
import CourseDetails from './src/screens/CourseDetails';

const App = () => {
 
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} channelName={"EduWorld"} /> }
        </Stack.Screen>

        {/* Course Screen */}
        <Stack.Screen 
          name="Course" 
          component={Course}
          options={{
            headerTitleStyle:{
              fontSize:25,
              fontFamily:"Protest Riot Regular",
            },
            headerTitle: "Courses",
            headerTitleAlign:"center",
          }}
        />

        <Stack.Screen 
          name="CourseDetails" 
          component={CourseDetails}
          options={{
            headerTitleStyle:{
              fontSize:25,
              fontFamily:"Protest Riot Regular",
            },
            headerTitle: "Course Details",
            headerTitleAlign:"center",
          }}
        />

        {/* UserData Screen */}
        <Stack.Screen 
          name="Student" 
          component={UserData}
          options={{
            headerTitleStyle:{
              fontSize:25,
              fontFamily:"Protest Riot Regular",
            },
            headerTitle: "Students Data",
            headerTitleAlign:"center",
          }}
        />
        
        {/* About Screen */}
        <Stack.Screen 
          name="About" 
          component={About}
          options={{
            headerTitleStyle:{
              fontSize:25,
              fontFamily:"Protest Riot Regular",
            },
            headerTitle: "About",
            headerTitleAlign:"center",
          }}
        />
        
        {/* Contact Screen */}
        <Stack.Screen 
          name="Contact" 
          component={Contact}
          options={{
            headerTitleStyle:{
              fontSize:25,
              fontFamily:"Protest Riot Regular",
            },
            headerTitle: "Contact",
            headerTitleAlign:"center",
          }}
        />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})