import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
        
        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("Course")}>
                {/* <Text>Course</Text> */}
                <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/image/course.png")}
                />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("Student")}>
                {/* <Text>Student</Text> */}
                <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/image/student.png")}
                />
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("About")}>
                {/* <Text>About</Text> */}
                <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/image/about.png")}
                />
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("Contact")}>
                {/* <Text>Contact</Text> */}
                <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/image/contact.png")}
                />
        </TouchableOpacity>
  
    </View>
  );
};

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    textStyle:{
        textTransform:"capitalize",
    },
    iconStyle:{
        width:"100%",
        height: 50,
        aspectRatio:1,
    },
    buttonStyle:{

    },
});

export default Menu;