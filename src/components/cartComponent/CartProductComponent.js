// Library Imports
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import CText from '../common/CText';
import {deviceWidth, getHeight, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import strings from '../../i18n/strings';
import {TrashDark, TrashLight} from '../../assets/svgs';
import {incrementQuantityAction} from "../../redux/action/incrementQuantityAction";
import {decrementQuantityAction} from "../../redux/action/decrementQuantityAction";


export default function CartProductComponent(props) {
  const {item, isTrash = false, trashIcon = true, onPressTrash} = props;
  const colors = useSelector(state => state.theme.theme);

  const dispatch = useDispatch();

  const onPressAdd = (item) => {
    console.log('increment',item);
    dispatch(incrementQuantityAction(item));
  }
  const onPressRemove = (item) => {
    console.log('decrement',item);
    dispatch(decrementQuantityAction(item));
  };

  return (
    <View
      style={[
        localStyles.productContainer,
        {backgroundColor: colors.dark ? colors.dark2 : colors.grayScale1},
      ]}>
      <Image
        source={item?.productImage}
        style={[
          localStyles.productImageStyle,
          {backgroundColor: colors.dark ? colors.imageBg : colors.white},
        ]}
      />
      <View style={localStyles.rightContainer}>
        <View style={localStyles.titleContainer}>
          <CText style={styles.flex} numberOfLines={1} type={'b16'}>
            {item?.product}
          </CText>
          {!isTrash && trashIcon && (
            <TouchableOpacity onPress={onPressTrash} style={styles.ml5}>
              {colors.dark ? <TrashDark /> : <TrashLight />}
            </TouchableOpacity>
          )}
        </View>




        <View style={localStyles.subItemStyle}>

        <CText type={'s12'}>Author {item?.author}</CText>

        </View>




        <View style={localStyles.btnContainer}>
          <CText type={'b16'}>${(item?.price*item?.quantity).toFixed(2)}</CText>
          {isTrash ? (
            <View
              style={[
                localStyles.quantityContainer,
                {backgroundColor: colors.dark3},
              ]}>
              <CText
                type={'b14'}
                align={'center'}
                style={localStyles.quantityText}>
               {/* {quantity}*/}
                {item?.quantity}
              </CText>
            </View>
          ) : (
            <View
              style={[
                localStyles.quantityButton,
                {backgroundColor: colors.dark3},
              ]}>
              <TouchableOpacity onPress={() => onPressRemove(item)}>
                <Ionicons
                  name={'remove'}
                  size={moderateScale(18)}
                  color={colors.dark ? colors.white : colors.black}
                  style={styles.mr5}
                />
              </TouchableOpacity>
              <CText
                type={'b14'}
                align={'center'}
                style={localStyles.quantityText}>
              {/* {quantity}*/}
                {item?.quantity}
              </CText>
              <TouchableOpacity onPress={() => onPressAdd(item)}>
                <Ionicons
                  name={'add'}
                  size={moderateScale(18)}
                   color={colors.dark ? colors.white : colors.black}
                  style={styles.ml5}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  productContainer: {
    ...styles.p15,
    ...styles.flexRow,
    ...styles.mt15,
    borderRadius: moderateScale(20),
    ...styles.shadowStyle,
    ...styles.selfCenter,
    width: deviceWidth - moderateScale(40),
    minHeight: moderateScale(130),
  },
  productImageStyle: {
    height: '100%',
    width: moderateScale(90),
    borderRadius: moderateScale(20),
    resizeMode: 'contain',
    marginRight: moderateScale(15),
  },
  rightContainer: {
    ...styles.flex,
    ...styles.justifyBetween,
  },
  titleContainer: {
    ...styles.rowSpaceBetween,
    ...styles.flex,
  },
  circleContainer: {
    width: moderateScale(13),
    height: moderateScale(13),
    borderRadius: moderateScale(13) / 2,
    backgroundColor: '#7A5548',
    ...styles.mr10,
  },
  subItemStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mv15,
  },
  btnContainer: {
    ...styles.rowSpaceBetween,
  },
  quantityButton: {
    height: getHeight(30),
    ...styles.ph10,
    ...styles.rowCenter,
    borderRadius: moderateScale(15),
  },
  quantityText: {
    width: moderateScale(20),
  },
  quantityContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
    ...styles.center,
    borderRadius: moderateScale(15),
  },
});
