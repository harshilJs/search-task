import React, { useState } from 'react';
import { Image, View, TextInput, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { IMAGES } from '../../images';
import { USER_LIST } from '../../utils/constants';
import { styles } from './styles';

export const SearchScreen = () => {

    const [users, setUsers] = useState(USER_LIST);
    const [searchedText, setSearchedText] = useState('');
    const [order, setOrder] = useState(false);
    const [result, setResults] = useState(false);

    const handleSearch = (e) => {
        setSearchedText(e)
        let searchText = e.toLowerCase()
        if (searchText.length) {
            const searchedUsers = users.filter((val) => val.name.includes(searchedText));
            setResults(true);
            setUsers(searchedUsers)
        } else {
            setUsers(USER_LIST);
            setResults(false);
        }
    }

    const handleSortUsers = (inOrder) => {
        if (inOrder) {
            setUsers(users.sort((a, b) => {
                return a.name > b.name;
            }));
        } else {
            setUsers(users.reverse());
        }
        setOrder(inOrder)
    }


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Image style={styles.icon} source={IMAGES.searchIcon} />

                    <TextInput
                        style={[styles.userName, { marginLeft: 12, width: '80%', }]}
                        value={searchedText}
                        onChangeText={(input) => handleSearch(input)}
                        placeholder={'Search users'}
                        placeholderTextColor={'grey'}
                    />
                </View>
                <TouchableOpacity onPress={() => handleSortUsers(!order)} style={styles.filterContainer}>
                    <Image style={styles.icon} source={IMAGES.filterIcon} />
                </TouchableOpacity>
            </View>
            {result ? <Text style={styles.result}>{`${users.length} results for `}<Text style={{ fontWeight: '500' }}>{`"${searchedText}"`}</Text></Text> : undefined}
            <View style={styles.listContainer}>
                <FlatList
                    data={users}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                    renderItem={(item, index) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.userName}>{item.item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </View>

    );
};
