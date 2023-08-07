// Library Imports
import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Custom Imports
import CText from './common/CText';
import CButton from './common/CButton';
import strings from '../i18n/strings';
import {deviceWidth, getHeight, moderateScale} from '../common/constants';
import {styles} from '../themes';
import {StackNav} from '../navigation/NavigationKeys';

export default function ProductOrderComponent(props) {
    const {
        item, dataDate
    } = props;

    const colors = useSelector(state => state.theme.theme);

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
                <CText style={styles.flex} numberOfLines={3} type={'b16'}>
                    {item?.product}
                </CText>

                <View style={[localStyles.subItemStyle, styles.mv15]}>
                    <CText type={'s12'}>{strings.qty + ' = ' + item?.quantity}</CText>

                </View>


                <View style={localStyles.priceDateContainer}>
                    <CText type={'b16'}>${item?.price*item?.quantity}</CText>
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

    subItemStyle: {
        ...styles.flexRow,
        ...styles.itemsCenter,
        ...styles.mv5,
    },
    paidContainer: {
        ...styles.selfStart,
        ...styles.ph10,
        ...styles.pv5,
        ...styles.mb5,
        borderRadius: moderateScale(6),
    },

    priceDateContainer: {
        ...styles.rowSpaceBetween,
    },
});
