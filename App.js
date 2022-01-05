import React, { useState, useEffect } from 'react';
import './assets/¡18n/¡18n';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function App() {

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState('es');
  const [languageIs, setLanguageIs] = useState("");
  const [testConditional, setTestConditional] = useState(false);

  useEffect(() => {
    const stateLanguage = setStateLanguage();
    setLanguageIs(stateLanguage);
  }, [language])


  const testChangeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const setStateLanguage = () => {
    switch (language) {
      case 'es':
        return "Español"
      case 'hi':
        return 'Hindi'
      default:
        return 'English'
    }
  }

  const testAtert = () => Alert.alert("",t('texto de ejemplo'))

  return (
    <View style={{ ...styles.container, justifyContent: 'center' }}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontWeight: 'bold' }} >{languageIs}</Text>
        <Text>{t('texto de ejemplo')}</Text>
        <Text>{t('este es un nuevo texto')}</Text>
        <Text>
          {
            testConditional ? t('texto de ejemplo') : t('este es un nuevo texto')
          }
        </Text>
      </View>


      <View style={styles.container}>
        <Button title="ingles" onPress={() => testChangeLanguage('en')} />
        <Button title="español" onPress={() => testChangeLanguage('es')} />
        <Button title="hindu" onPress={() => testChangeLanguage('hi')} />
        <Button title="cambio estado" onPress={() => setTestConditional(!testConditional)} />
        <Button title={languageIs} onPress={testAtert} />
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
