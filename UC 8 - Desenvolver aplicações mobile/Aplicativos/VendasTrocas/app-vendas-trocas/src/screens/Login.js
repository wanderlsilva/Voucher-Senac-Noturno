import React from "react";
import { View, Text, Button, StyleSheet  } from "react-native";

const Login = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Tela de Login </Text>
            <Button
            title = 'Ir para Cadastro'
            onPress={() => navigation.navigate('CadastroUsuario')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default Login;