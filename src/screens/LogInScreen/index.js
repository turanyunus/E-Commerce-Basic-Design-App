import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { ValidateEmail } from '../../utils/validate-email'
import { colors } from '../../utils/theme'
import HeaderNoBar from '../../components/header-no-bar'

const LogInPage = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textEmailInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true
  })

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
      <Animatable.View animation="fadeInUpBig" style={styles.formStyle}>
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

        {/* Giriş Yap Buton Kısmı */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Giriş Yap</Text>
        </TouchableOpacity>

        {/* Footer Kısmı */}
        <View style={styles.footerSide}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Şifremi unuttum?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Kayıt Olmak istiyorum?</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ORANGE.default
  },
  containerTop: {
    flex: 0.5
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
    marginTop: 5
  },
  formStyle: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 50
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
  },
  footerSide: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  footerText: { color: '#000000', marginTop: 20, fontSize: 16 }
})

export default LogInPage
