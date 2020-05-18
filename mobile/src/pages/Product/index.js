import React from 'react';
import { WebView } from "react-native-webview"

const Product = ({ route: { params: { product } } }) => (
    <WebView
    source={{
      uri: product.url 
    }}
  />
);

export default Product;