import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import Icon from 'react-native-vector-icons/Feather';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const validarCampos = () => {
        if (!email || !senha) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        if (!validarCampos()) return;

        try {
            const response = await api.post('/usuarios/login', { email, senha });
            if (response.data.success) {
                Alert.alert("Sucesso", "Login realizado!");
                navigation.replace("Dashboard"); // Redireciona para Dashboard
            } else {
                Alert.alert("Erro", response.data.message);
            }
        } catch (error) {
            Alert.alert('Erro', 'E-mail ou senha inválidos.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            {/* IMAGEM NO TOPO */}
            <Image source={require('../../assets/senac.png')} style={styles.logo} />

            <Text style={styles.title}>Faça seu Login</Text>

            {/* INPUT EMAIL COM ÍCONE */}
            <View style={styles.inputContainer}>
                <Icon name="mail" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* INPUT SENHA COM ÍCONE */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
            </View>

            {/* BOTÃO DE LOGIN */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* LINK PARA CADASTRO */}
            <Text style={styles.linkText} onPress={() => navigation.navigate('CadastroUsuario')}>
                Ainda não tem conta? <Text style={styles.link}>Cadastre-se</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 12,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 16,
        fontSize: 14,
        color: '#666',
    },
    link: {
        color: '#007bff',
        fontWeight: 'bold',
    },
});

export default Login;
