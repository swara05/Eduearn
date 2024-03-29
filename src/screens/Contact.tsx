import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Contact = ({ navigation }) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');
  const [agree, setagree] = useState(false);

  const submit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert('Plzz fill all the fields');
    } else {
      Alert.alert(`Thank you ${name}`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge</Text>
      <Text style={styles.description}>You can reach us anytime via thapa@vinod.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"srushti hirpara"}
          value={name}
          onChangeText={(text) => setname(text)} // Use onChangeText
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@hirpara.com"}
          value={email}
          onChangeText={(text) => setemail(text)} // Use onChangeText
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Mobile number </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"1234567890"}
          value={phone}
          onChangeText={(text) => setphone(text)} // Use onChangeText
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Message </Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"Tell us about your self"}
          value={message}
          onChangeText={(text) => setmessage(text)} // Use onChangeText
          numberOfLines={5}
          multiline={true}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setagree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>I have read and agreed with the TC</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}
      >
        <Text style={styles.buttonText}> Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "Protest Riot Regular",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 2,
  },
  multilineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  wrapperText: {
    marginLeft: 10,
    marginTop: 23,
    color: "#7d7d7d",
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    color: "#7d7d7d",
    paddingBottom: 5,
    lineHeight: 25,
  }

});

export default Contact;