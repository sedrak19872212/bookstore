import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
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

export default function SpecialOffers() {
  const colors = useSelector(state => state.theme.theme);

  const RightIcon = () => {
    return (
      <TouchableOpacity>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

    const bannerImages =  [
        {src: 'https://reactnative.dev/img/tiny_logo.png'}
    ];


    const renderItem = ({item}) => {
        console.log(item)
        return (

            <Image source={{uri:item.src}}
            />
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
              contentContainerStyle={localStyles.contentContainerStyle}
              estimatedItemSize={20}
          />
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
    root: {
        ...styles.flex,
    },
    contentContainerStyle: {
        ...styles.pb20,
    },
});
