// Library import
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

// Custom imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CText from '../../../components/common/CText';
import {
    AppLogoDark,
    AppLogoLight,
    Menu_Dark,
    Menu_Light,
    Search_Dark,
    Search_Light,
} from '../../../assets/svgs';
import {styles} from '../../../themes';
import CHeader from '../../../components/common/CHeader';
import strings from '../../../i18n/strings';

import {moderateScale} from '../../../common/constants';
import OnGoing from './OnGoing';

;
import {StackNav} from '../../../navigation/NavigationKeys';
import {ref, onValue} from "firebase/database";
import {db} from "../../../database/firebase";

export default function OrderTab({navigation}) {
    const colors = useSelector(state => state.theme.theme);

    /* useEffect(() => {

         const starCountRef = ref(db, 'orders/ghgh2');
         onValue(starCountRef, (snapshot) => {
         const data = snapshot.val();
         const emailData = data.email;

         console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
          console.log(data);
          console.log(emailData);
         });

     }, []);*/


    const onPressSearch = () => navigation.navigate(StackNav.Search);

    const RightIcon = () => {
        return (
            <View style={styles.rowCenter}>
                <TouchableOpacity onPress={onPressSearch}>
                    {colors.dark ? <Search_Dark/> : <Search_Light/>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.ph10}>
                    {colors.dark ? <Menu_Dark/> : <Menu_Light/>}
                </TouchableOpacity>
            </View>
        );
    };

    const LeftIcon = () => {
        return (
            <View style={styles.pr10}>
                {colors.dark ? <AppLogoDark/> : <AppLogoLight/>}
            </View>
        );
    };

    return (
        <CSafeAreaView>
            <CHeader
                isHideBack={true}
                title={strings.order}
                isLeftIcon={<LeftIcon/>}
                rightIcon={<RightIcon/>}
            />
            <OnGoing/>
        </CSafeAreaView>
    );
}

const localStyles = StyleSheet.create({
    root: {
        borderBottomWidth: moderateScale(2),
        width: '50%',
    },
    mainContainer: {
        ...styles.rowSpaceBetween,
        ...styles.ph20,
        ...styles.mt10,
        width: '100%',
    },
});
