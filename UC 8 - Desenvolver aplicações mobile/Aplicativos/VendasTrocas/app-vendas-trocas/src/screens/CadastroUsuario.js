import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook para navegação entre telas
import api from '../services/api'; // Importa a API para comunicação com o backend
import Icon from 'react-native-vector-icons/Feather'; // Ícones visuais

const CadastroUsuario = () => {
    const navigation = useNavigation(); // Inicializa a navegação entre telas

    // Estados para armazenar os valores digitados pelo usuário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [loading, setLoading] = useState(false); // Estado para indicar carregamento

    // Função para validar os campos antes do cadastro
    const validarCampos = () => {
        if (!nome || !email || !senha || !telefone || !localizacao) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
            return false;
        }
        if (senha.length < 6) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
            return false;
        }
        return true;
    };

    // Função que lida com o cadastro do usuário
    const handleCadastro = async () => {
        if (!validarCampos()) return; // Se a validação falhar, a função para aqui
        setLoading(true); // Ativa o indicador de carregamento

        try {
            // Faz uma requisição POST para cadastrar o usuário no backend
            const response = await api.post('/usuarios', {
                nome,
                email,
                senha,
                telefone,
                localizacao,
            });
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
            console.log(response.data);
            navigation.navigate('Login'); // Redireciona para a tela de login após o cadastro
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
            console.error(error);
        } finally {
            setLoading(false); // Desativa o indicador de carregamento
        }
    };

    return (
        <View style={styles.container}>
            {/* IMAGEM NO TOPO */}
            <Image source={require('../../assets/cadastro.png')} style={styles.logo} />

            <Text style={styles.title}>Crie sua Conta</Text>

            {/* INPUT NOME COM ÍCONE */}
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />
            </View>

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

            {/* INPUT TELEFONE COM ÍCONE */}
            <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                    keyboardType="phone-pad"
                />
            </View>

            {/* INPUT LOCALIZAÇÃO COM ÍCONE */}
            <View style={styles.inputContainer}>
                <Icon name="map-pin" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Localização"
                    value={localizacao}
                    onChangeText={setLocalizacao}
                />
            </View>

            {/* INDICADOR DE CARREGAMENTO OU BOTÃO DE CADASTRO */}
            {loading ? (
                <ActivityIndicator size="large" color="#007bff" />
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            )}

            {/* LINK PARA LOGIN */}
            <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
                Já tem uma conta? <Text style={styles.link}>Faça login</Text>
            </Text>
        </View>
    );
};

// ESTILOS DA TELA
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

export default CadastroUsuario;
