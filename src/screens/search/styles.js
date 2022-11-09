import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 28,
        backgroundColor: '#FFF',
        marginTop: '5%'
    },
    searchContainer: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        borderRadius: 6,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        height: 18,
        width: 18,
        resizeMode: 'contain'
    },
    filterContainer: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        backgroundColor: '#F8F8F8',
        borderRadius: 6,
    },
    listContainer: {
        height: '100%',
        marginTop: 18
    },
    itemContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#252427'
    },
    separator: {
        backgroundColor: "grey",
        height: 0.5
    },
    result: {
        fontSize: 16,
        color: '#252427',
        marginTop: 16
    }
});