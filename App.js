import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import Icon from '@expo/vector-icons/Feather'; 

export default function JoinUs() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.circleBg}>
              <Image
                source={{ uri: '' }}
                style={styles.illustration}
                resizeMode="contain"
              />
            </View>
          </View>

          <Text style={styles.title}>Join Us!</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Your Name :</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor="#A0A0A0"
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
                <Icon name="user" size={18} color="#B0D4F1" style={styles.inputIcon} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Your Email :</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="hello@gmail.com"
                  placeholderTextColor="#A0A0A0"
                  keyboardType="email-address"
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
                <Icon name="send" size={18} color="#B0D4F1" style={styles.inputIcon} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password :</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="****************"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry
                  returnKeyType="done"
                />
                <Icon name="lock" size={18} color="#B0D4F1" style={styles.inputIcon} />
              </View>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <Icon name="globe" size={20} color="#0099cc" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Icon name="share-2" size={20} color="#0099cc" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Icon name="smartphone" size={20} color="#0099cc" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.mainButton}>
              <Text style={styles.buttonText}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  inner: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  form: {
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  circleBg: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1F2FF',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14,
    color: '#333',
  },
  inputIcon: {
    marginLeft: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1F2FF',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#CCC',
    fontSize: 14,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  socialBtn: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  mainButton: {
    backgroundColor: '#0099cc',
    height: 55,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0099cc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});