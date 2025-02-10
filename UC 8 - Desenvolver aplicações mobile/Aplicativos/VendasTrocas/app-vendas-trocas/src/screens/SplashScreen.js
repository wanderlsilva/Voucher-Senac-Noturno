import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation(); // Permite a navegação entre telas

    useEffect(() => {
        // Aguarda 3 segundos e depois navega para a tela de login
        setTimeout(() => {
            navigation.replace('Login'); // Substitui a splash pela tela de login
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            {/* Animação carregada do arquivo JSON */}
            <LottieView
                source={require('../../assets/animation.json')} // Caminho da animação
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
};

// Estilos da Splash Screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Fundo branco para um design clean
    },
    animation: {
        width: 300,
        height: 300,
    },
});

export default SplashScreen;
