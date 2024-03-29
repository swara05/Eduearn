import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Contact = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert('Please fill all the fields');
    } else if (!agree) {
      Alert.alert('Please agree to the terms and conditions');
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
          placeholder="srushti hirpara"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="demo@hirpara.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Mobile number </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="1234567890"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Message </Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder="Tell us about yourself"
          value={message}
          onChangeText={text => setMessage(text)}
          numberOfLines={5}
          multiline
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          checked={agree}
          onPress={() => setAgree(!agree)}
          checkedColor={agree ? "#4630EB" : "grey"}
        />
        <Text style={styles.wrapperText}>I have read and agreed with the TC</Text>
      </View>


      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#4630EB' : 'grey',
          },
        ]}
        disabled={!agree}
        onPress={submit}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: 'Protest Riot Regular',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#eee',
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  wrapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    paddingBottom: 5,
    lineHeight: 25,
  },
});

export default Contact;
