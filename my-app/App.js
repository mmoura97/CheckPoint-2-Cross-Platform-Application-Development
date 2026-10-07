import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  const [novoItem, setNovoItem] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (novoItem.trim() === '') return;
    
    const itemFormatado = {
      id: Date.now().toString(),
      nome: novoItem
    };

    setLista([...lista, itemFormatado]);
    setNovoItem('');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>🛒 Minhas Compras</Text>
        <Text style={styles.subtitulo}>{lista.length} {lista.length === 1 ? 'item na lista' : 'itens na lista'}</Text>
      </View>

      {/* Área de Entrada */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="O que falta comprar?"
          placeholderTextColor="#9CA3AF"
          value={novoItem}
          onChangeText={setNovoItem}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Itens */}
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaContainer}
        renderItem={({ item, index }) => (
          <View style={styles.cardItem}>
            <View style={styles.circuloNumero}>
              <Text style={styles.textoNumero}>{index + 1}</Text>
            </View>
            <Text style={styles.textoItem}>{item.nome}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.vazioContainer}>
            <Text style={styles.vazioTexto}>Sua lista está vazia 🛍️</Text>
            <Text style={styles.vazioSubtexto}>Adicione itens acima para começar.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#4F46E5',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
    elevation: 4,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#E0E7FF',
  },
  formContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    fontSize: 16,
    color: '#1F2937',
    elevation: 1,
  },
  botao: {
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
    height: 50,
    marginLeft: 10,
    elevation: 1,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listaContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 1,
  },
  circuloNumero: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  textoNumero: {
    color: '#4F46E5',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textoItem: {
    fontSize: 16,
    color: '#1F2937',
    flex: 1,
  },
  vazioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  vazioTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9CA3AF',
    marginBottom: 6,
  },
  vazioSubtexto: {
    fontSize: 14,
    color: '#D1D5DB',
  },
});