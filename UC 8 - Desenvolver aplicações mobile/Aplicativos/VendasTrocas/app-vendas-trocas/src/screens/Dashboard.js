import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from 'react-native-vector-icons'; // Ícones do Google

const Dashboard = () => {
    const navigation = useNavigation(); // Permite a navegação entre telas

    return (
        <View style={styles.container}>
            {/* Cabeçalho com imagem de perfil e nome do usuário */}
            <View style={styles.header}>
                <Image 
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
                    style={styles.profileImage}
                />
                <Text style={styles.username}>Olá, Usuário!</Text>
            </View>

            {/* Área de Botões para acessar diferentes partes do app */}
            <View style={styles.menu}>
                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('CadastroUsuario')}>
                    <MaterialIcons name="person-add" size={30} color="#fff" />
                    <Text style={styles.menuText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('Login')}>
                    <MaterialIcons name="login" size={30} color="#fff" />
                    <Text style={styles.menuText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* Área de Informações */}
            <View style={styles.infoCard}>
                <Text style={styles.infoText}>Status do Sistema</Text>
                <Text style={styles.status}>Tudo funcionando corretamente</Text>
            </View>
        </View>
    );
};

// Estilos do Dashboard
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    menuButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '40%',
    },
    menuText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
    },
    infoCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 16,
        color: 'green',
        marginTop: 5,
    },
});

export default Dashboard;
