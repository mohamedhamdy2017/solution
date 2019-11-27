import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {images} from './assets';
import {strings} from './strings';

class App extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    const {
      container,
      imageStyle,
      itemContainer,
      menuTextStyle,
      itemImageStyle,
      titleStyle,
      menuItemContainer,
      buttonStyle,
      menuImageStyle,
      menuListStyle,
    } = styles;

    const {selectedIndex} = this.state;
    return (
      <View style={container}>
        <Image source={images.food} style={imageStyle} />
        <View style={{height: '15%'}}>
          <FlatList
            style={{marginTop: 5}}
            contentContainerStyle={{paddingHorizontal: 5}}
            showsHorizontalScrollIndicator={false}
            data={_data}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({item, index}) => {
              const {image, title} = item;
              return (
                <TouchableOpacity
                  style={itemContainer}
                  onPress={() => this.setState({selectedIndex: index})}>
                  <Image source={image} style={itemImageStyle} />
                  <Text style={titleStyle}>{title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={menuTextStyle}>{strings.menu}</Text>
        </View>

        <FlatList
          style={menuListStyle}
          contentContainerStyle={{paddingHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
          data={_data[selectedIndex].subCategory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            const {image, title, price} = item;
            return (
              <View style={menuItemContainer}>
                <Image source={image} style={menuImageStyle} />
                <View style={{height: 60}}>
                  <Text style={titleStyle}>{title}</Text>
                  <Text style={titleStyle}>
                    {strings.price} : {price}
                  </Text>
                </View>

                <TouchableOpacity
                  style={buttonStyle}
                  onPress={() => alert('Added to cart')}>
                  <Text>Add to cart</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const _data = [
  {
    id: 1,
    image: images.food_1,
    title: 'food1',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
  {
    id: 2,
    image: images.food_1,
    title: 'food2',
    subCategory: [
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
      {image: images.food, title: 'سبانخ', price: 630},
    ],
  },
  {
    id: 3,
    image: images.food_1,
    title: 'food3',
    subCategory: [
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
      {image: images.food_2, title: 'سبانخ', price: 630},
    ],
  },
  {
    id: 4,
    image: images.food_1,
    title: 'food4',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
  {
    id: 5,
    image: images.food_1,
    title: 'food5',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
  {
    image: images.food_1,
    title: 'food6',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
  {
    image: images.food_1,
    title: 'food7',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
  {
    image: images.food_1,
    title: 'food8',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
  {
    image: images.food_1,
    title: 'food9',
    subCategory: [
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
      {image: images.food_1, title: 'سبانخ', price: 630},
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '40%',
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  menuTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemImageStyle: {
    width: 110,
    height: 80,
    marginHorizontal: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  menuImageStyle: {
    width: 110,
    height: 90,
    borderRadius: 10,
  },
  buttonStyle: {
    width: 150,
    height: 40,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  menuListStyle: {
    marginTop: 5,
    width: '100%',
  },
});

export default App;
