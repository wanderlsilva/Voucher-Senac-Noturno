import React, { useState} from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from '../services/api';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [localizacao, setLocalizacao] = useState('');

    const handleCadastro = async () => {
        try{
            const response = await api.post('/usuarios', {
                nome,
                email,
                senha,
                telefone,
                localizacao,
            });
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
            console.log(response.data);
        }catch (error) {
            Alert.alert('Erro', 'Não foi possivel cadastrar o usuário');
            console.error(error);
        }
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Cadastro de Usuário</Text>
            
            <TextInput 
            style = {styles.input} 
            placeholder = 'Nome' 
            value = {nome} 
            onChangeText = {setNome}
            />
            
            <TextInput 
            style = {styles.input} 
            placeholder = 'Email' 
            value = {email} 
            onChangeText = {setEmail}
            keyboardType = 'email-address'
            />

            <TextInput 
            style = {styles.input} 
            placeholder = 'Senha' 
            value = {senha} 
            onChangeText = {setSenha}
            secureTextEntry
            />

            <TextInput 
            style = {styles.input} 
            placeholder = 'Telefone' 
            value = {telefone} 
            onChangeText = {setTelefone}
            keyboardType = 'phone-pad'
            />

            <TextInput 
            style = {styles.input} 
            placeholder = 'Localização' 
            value = {localizacao} 
            onChangeText = {setLocalizacao}
            />

            <Button title = 'Cadastrar' onPress = {handleCadastro} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        margiunBottom: 12,
        paddingHorizontal: 8,
    },
});

export default CadastroUsuario;