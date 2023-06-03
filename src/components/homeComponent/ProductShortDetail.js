import {Image, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useToast} from "react-native-toast-notifications";

// Custom Imports
import CText from '../common/CText';
import images from '../../assets/images';
import {CartDark, CartLight} from '../../assets/svgs';
import {deviceWidth, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import strings from '../../i18n/strings';
import {addInCartAction} from "../../redux/action/addInCartAction";

export default function ProductShortDetail(props) {
  const colors = useSelector(state => state.theme.theme);
  const [isCart, setIsCart] = useState(false);
  const {item, index, onPress} = props;

    const toast = useToast();

    const dispatch = useDispatch();

  const onPressCart = () => {
        setIsCart(!isCart);
      console.log("on Press Add like llllllllllllllllllllllll");
      const newItem = {
          ...item,
          quantity: 1
      }
      dispatch(addInCartAction(newItem));

      toast.show("Successfully added to cart",{
          type:'success',
          placement: "top",
          duration: 2000,
          animationType: "zoom-in",
      });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        localStyles.productContainer,
        index % 2 === 0 ? styles.mr5 : styles.ml5,
      ]}>

      <Image
        source={item?.productImage}
        style={[
          localStyles.productImageStyle,
          {backgroundColor: colors.dark ? colors.imageBg : colors.grayScale1},
        ]}
      />
      <CText style={[styles.flex, styles.mt10]} numberOfLines={1} type={'b16'}>
        {item?.product}
      </CText>
      <View style={localStyles.subItemStyle}>

          <View
              style={[localStyles.paidContainer, {backgroundColor: colors.dark3}]}>
              <CText type={'b14'}>${item?.price}</CText>
          </View>

        <CText
          type={'s14'}
          style={styles.mr5}
          color={colors.dark ? colors.grayScale3 : colors.grayScale7}>
          {'  | '}
        </CText>

          <TouchableOpacity  onPress={onPressCart}>
              {colors.dark ? (isCart ? <CartLight /> : <CartDark />) : (isCart ? <CartDark /> : <CartLight />)}
          </TouchableOpacity>


      </View>
    </TouchableOpacity>
  );
}


const localStyles = StyleSheet.create({
  productContainer: {
    width: (deviceWidth - moderateScale(50)) / 2,
    ...styles.mt15,
  },
  subItemStyle: {
    ...styles.mt5,
    ...styles.mb5,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  starStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
    ...styles.mr5,
  },
  paidContainer: {
    ...styles.ph10,
    ...styles.pv5,
    borderRadius: moderateScale(6),
  },
  productImageStyle: {
    width: (deviceWidth - moderateScale(50)) / 2,
    height: (deviceWidth - moderateScale(50)) / 2,
    borderRadius: moderateScale(15),
    resizeMode: 'contain',
    ...styles.selfCenter,
  },
  likeContainer: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
    zIndex: 1,
  },
});
