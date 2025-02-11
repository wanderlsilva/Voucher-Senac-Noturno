import React, { useState, useEffect } from 'react'; // Adicionei os hooks aqui
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from 'react-native-vector-icons'; // Ícones do Google
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
    const navigation = useNavigation(); // Permite a navegação entre telas
    const [nome, setNome] = useState(''); // Estado para armazenar o nome do usuário

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await AsyncStorage.getItem('user'); // Busca os dados salvos
                if (user) {
                    setNome(JSON.parse(user).nome) // Define o nome do usuário
                }
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
            }
        };

        getUser();
    }, []);

    // Função para fazer logout
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('user'); // Remove os dados do usuário da sessão
            navigation.navigate('Login'); // Navega para a tela de login
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho com imagem de perfil e nome do usuário */}
            <View style={styles.header}>
                <Image 
                    source={{ uri: 'https://scontent.fcgr3-1.fna.fbcdn.net/v/t39.30808-6/275501769_5056022807769634_7988254696299922886_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGHZlZ875yuG03ElEdBlEWSuNNMQtQhuQ6400xC1CG5Dt8PGsgzSKgSZyB0EqggnqR1qLTACDRdpSK7JlBkm1-u&_nc_ohc=Jl6eVVo9UP0Q7kNvgG9Blyi&_nc_zt=23&_nc_ht=scontent.fcgr3-1.fna&_nc_gid=AyFzhd6zQNfbO6RCS8SHqS-&oh=00_AYAMhs-2EyjYXRxiiVLiuRJryyV5ZUVVc4HzWRNN709oyw&oe=67B078B8' }} 
                    style={styles.profileImage}
                />
                <Text style={styles.username}>Olá, {nome || 'Usuário'}</Text>
            </View>

            {/* Área de Botões para acessar diferentes partes do app */}
            <View style={styles.menu}>
                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('CadastroUsuario')}>
                    <MaterialIcons name="person-add" size={30} color="#fff" />
                    <Text style={styles.menuText}>Cadastrar Usuario</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('CadastroUsuario')}>
                    <MaterialIcons name="paid" size={30} color="#fff" />
                    <Text style={styles.menuText}>Cadastrar Produtos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('CadastroUsuario')}>
                    <MaterialIcons name="comment" size={30} color="#fff" />
                    <Text style={styles.menuText}>Anúncios</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('CadastroUsuario')}>
                    <MaterialIcons name="badge" size={30} color="#fff" />
                    <Text style={styles.menuText}>Transações</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuButton} 
                    onPress={() => navigation.navigate('CadastroUsuario')}>
                    <MaterialIcons name="send" size={30} color="#fff" />
                    <Text style={styles.menuText}>Mensagens</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuButtonLogout} 
                    onPress={handleLogout}>
                    <MaterialIcons name="login" size={30} color="#fff" />
                    <Text style={styles.menuText}>Logout</Text>
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
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    menuButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '48%',
        marginBottom: 10,
    },
    menuButtonLogout: {
        backgroundColor: '#ff0000',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
        width: '48%',
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
