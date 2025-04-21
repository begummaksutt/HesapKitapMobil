import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexGrow: 1,
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#2e86de',
      },
      subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#333',
      },
      button: {
        backgroundColor: '#2e86de',
        padding: 15,
        marginVertical: 8,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        alignSelf: 'flex-start',
      },
      categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
      },
      categoryButton: {
        backgroundColor: '#f1f1f1',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
        width: '48%',
        alignItems: 'center',
      },
      categoryText: {
        color: '#444',
        fontSize: 14,
      },
});