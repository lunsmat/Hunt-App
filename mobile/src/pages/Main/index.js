import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from './styles';

import api from '../../services/api';

export default class Main extends Component {
    state = {
        productInfo: [],
        products: [],
        page: 1
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } =  response.data;    

        this.setState({
            products: [...this.state.products, ...docs],
            productInfo,
            page
        })
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>

            <TouchableOpacity 
                style={styles.productButton} 
                onPress={()=>{
                    this.props.navigation.navigate('Product', {product: item})
                }}
            >
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
               <FlatList 
                    contentContainerStyle={styles.list}
                    data={this.state.products}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={.2}
               >

               </FlatList>
            </View>
        );
    }
}