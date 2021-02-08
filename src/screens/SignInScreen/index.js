import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { ValidateEmail } from '../../utils/validate-email'
import { colors } from '../../utils/theme'
import HeaderNoBar from '../../components/header-no-bar'

const SignInPage = ({ navigation }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',

    secureTextEntry: true,
    confirm_secureTextEntry: true,

    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,

    check_textNameInputChange: false,
    check_textEmailInputChange: false
  })

  const textNameInputChange = (val) => {
    if (val.trim().length >= 2) {
      setData({
        ...data,
        name: val,
        check_textNameInputChange: true,
        isValidName: true
      })
    } else {
      setData({
        ...data,
        name: val,
        check_textNameInputChange: false,
        isValidName: false
      })
    }
  }

  const textEmailInputChange = (val) => {
    let isValidEmail = ValidateEmail(val)

    if (val.trim().length >= 4 && isValidEmail) {
      setData({
        ...data,
        email: val,
        check_textEmailInputChange: true,
        isValidEmail: true
      })
    } else {
      setData({
        ...data,
        email: val,
        check_textEmailInputChange: false,
        isValidEmail: false
      })
    }
  }

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      })
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val
    })
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    })
  }

  return (
    <View style={styles.container}>
      <HeaderNoBar handleNavigate={navigation} backButton={false} profileButton={false} />
      <View style={styles.containerTop}>
        <View style={styles.header}>
          <Animatable.View style={styles.headerContent} animation="fadeInUp" duraton="1500">
            <Image style={styles.avatar} source={require('../../assets/img/logo.png')} />
          </Animatable.View>
          <Text style={styles.text_header}>Hoş Geldin</Text>
        </View>
      </View>
      <ScrollView animation="fadeInUpBig" style={styles.formStyle}>
        {/* Ad Soyad Kısmı */}
        <Text style={styles.formText}>Ad Soyad</Text>
        <View style={styles.formInputContainer}>
          <Image source={require('../../assets/img/login/user.png')} style={styles.formInputImage} />
          <TextInput
            placeholder="Ad Soyad"
            style={styles.textInput}
            autoCapitalize="none"
            value={data.name}
            onChangeText={(val) => textNameInputChange(val)}
          />
          {data.check_textNameInputChange ? (
            <Animatable.View animation="bounceIn">
              <Image source={require('../../assets/img/login/checked.png')} style={styles.formInputImage} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidName ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>2 karakterden az olamaz.</Text>
          </Animatable.View>
        )}

        {/* Email Kısmı */}
        <Text style={styles.formText}>Email</Text>
        <View style={styles.formInputContainer}>
          <Image source={require('../../assets/img/login/email.png')} style={styles.formInputImage} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={data.email}
            autoCapitalize="none"
            onChangeText={(val) => textEmailInputChange(val)}
          />
          {data.check_textEmailInputChange ? (
            <Animatable.View animation="bounceIn">
              <Image source={require('../../assets/img/login/checked.png')} style={styles.formInputImage} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Email geçersiz</Text>
          </Animatable.View>
        )}

        {/* Şifre Kısmı */}
        <Text style={[styles.formText]}>Password</Text>
        <View style={styles.formInputContainer}>
          <Image source={require('../../assets/img/login/padlock.png')} style={styles.formInputImage} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            value={data.password}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Image source={require('../../assets/img/login/visibility.png')} style={styles.formInputImage} />
            ) : (
              <Image source={require('../../assets/img/login/view.png')} style={styles.formInputImage} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
          </Animatable.View>
        )}

        {/* Şifre Tekrar Kısmı */}
        <Text style={[styles.formText]}>Confirm Password</Text>
        <View style={styles.formInputContainer}>
          <Image source={require('../../assets/img/login/padlock.png')} style={styles.formInputImage} />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={data.confirm_secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            value={data.confirm_password}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Image source={require('../../assets/img/login/visibility.png')} style={styles.formInputImage} />
            ) : (
              <Image source={require('../../assets/img/login/view.png')} style={styles.formInputImage} />
            )}
          </TouchableOpacity>
        </View>

        {/* Kayıt Ol Buton Kısmı */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ORANGE.default
  },
  containerTop: {
    flex: 0.4
  },
  header: {
    height: 200
  },
  headerContent: {
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white'
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10
  },
  formStyle: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  formText: {
    color: '#000000',
    fontSize: 18
  },
  formInputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    marginBottom: 10
  },
  formInputImage: { height: 20, width: 20 },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#000000'
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14
  },
  signInButton: {
    width: '100%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.ORANGE.default
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default SignInPage
