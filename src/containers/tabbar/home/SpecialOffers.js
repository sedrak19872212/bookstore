import {Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

// Custom Imports

import strings from '../../../i18n/strings';
import CHeader from '../../../components/common/CHeader';
import {Menu_Dark, Menu_Light} from '../../../assets/svgs';
import {styles} from '../../../themes';
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import HomeBanner from '../../../components/homeComponent/HomeBanner';
import images from '../../../assets/images';
import {completedOrderData} from "../../../api/constant";
import {FlashList} from "@shopify/flash-list";
import ProductOrderComponent from "../../../components/ProductOrderComponent";
import {deviceHeight, deviceWidth, getHeight, moderateScale} from "../../../common/constants";

export default function SpecialOffers() {
  const colors = useSelector(state => state.theme.theme);

  const RightIcon = () => {
    return (
      <TouchableOpacity>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };


    const bannerImages = useMemo(() => {
        return [
            colors.dark ?images.swiperImageDark1 : images.swiperImageLight1,
            colors.dark ?images.swiperImageDark2 : images.swiperImageLight2,
            colors.dark ?images.swiperImageDark3 : images.swiperImageLight3,
            colors.dark ?images.swiperImageDark4 : images.swiperImageLight4,
        ]
    }, [colors]);



    const renderItem = ({item}) => {
        console.log(item)
        return (

            <ImageBackground
                source={item}
                style={[
                    /*localStyles.rootImage,*/
                    localStyles.swiperImageStyle,
                    {backgroundColor: colors.dark ? colors.imageBg : colors.grayScale1},
                ]}>

            </ImageBackground>
        );
    };
  return (

    <CSafeAreaView>
      <CHeader title={strings.specialOffers} rightIcon={<RightIcon />} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.ph20}>

          <FlashList
              data={bannerImages}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              bounces={false}
             /* contentContainerStyle={localStyles.contentContainerStyle}*/
              contentContainerStyle={localStyles.swiperItemContainer}
              estimatedItemSize={20}
          />
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
    /*rootImage: {
        /!*borderBottomRightRadius: 20,*!/
        marginBottom: 20,
        height: 150,
        width: '100%',
        resizeMode: 'contain',
    },
    contentContainerStyle: {
        /!*  ...styles.pb20,*!/
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
    },
*/
    swiperItemContainer: {
        ...styles.mb10,
        width: deviceWidth - moderateScale(40),
        height: getHeight(160),
    },
     swiperImageStyle: {
        width: deviceWidth - moderateScale(40),
        height: getHeight(160),
        /*borderRadius: moderateScale(20),*/
         marginBottom: 20,
         resizeMode: 'contain',
    },
});
