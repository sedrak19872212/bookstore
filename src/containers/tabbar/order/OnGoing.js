// Library Imports
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import ProductOrderComponent from '../../../components/ProductOrderComponent';
import {onGoingData} from '../../../api/constant';
import RenderNullComponent from '../../../components/RenderNullComponent';

import {onValue, ref} from "firebase/database";
import {db} from "../../../database/firebase";
import CText from "../../../components/common/CText";
import {useSelector} from "react-redux";
import moment from "moment";
import SubHeader from "../../../components/SubHeader";

export default function OnGoing() {

    const user = useSelector(state => state.user.user);

    const userOrdersRef = ref(db, 'orders/' + user.uid);

    const [loading, setLoading] = useState(false);
    const [onGoingData, setOnGoingData] = useState([]);

    useEffect(() => {
        onValue(userOrdersRef, (snapshot) => {
            const data = snapshot.val();
            setLoading(true);
            setOnGoingData(data);
        });
    }, []);

    const renderItem = ({item}) => {
        return <ProductOrderComponent item={item} key={item.id}/>;
    };

    if (loading) {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={localStyles.root}>

                    {!!onGoingData && !!Object.keys(onGoingData).length ? (
                        Object.keys(onGoingData).map((key, index) => {
                            return (
                                <View>
                                    <SubHeader
                                        title1={'Order #' + key}
                                        title2={moment.unix(key).format("MM/DD/YYYY")}
                                       style={localStyles.order}
                                      // style={styles.ml20}
                                      // style={styles.mr15}
                                    />
                                    <CText type={'b12'} align={'center'} style={styles.ml20}>
                                        {'Order #' + key}                       ( {moment.unix(key).format("MM/DD/YYYY")})
                                    </CText>
                                    <FlashList
                                        data={onGoingData[key]}
                                        renderItem={renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                        showsVerticalScrollIndicator={false}
                                        bounces={false}
                                        contentContainerStyle={localStyles.contentContainerStyle}
                                        estimatedItemSize={20}
                                    />
                                </View>
                            )
                        })

                    ) : (
                        <RenderNullComponent
                            title1={strings.onGoingNullTitle}
                            title2={strings.onGoingNullDesc}
                        />
                    )}
                </View>
            </ScrollView>
        );
    }

}

const localStyles = StyleSheet.create({
    root: {
        ...styles.flex,
    },
    contentContainerStyle: {
        ...styles.pb20,
    },
    renderItemContainer: {
        ...styles.rowSpaceBetween,
        ...styles.ph20,
        ...styles.mb15,
    },
    order:{
        flex: 1,
       // alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "space-around", // ignore this - we'll come back to it
      //  flexDirection: "row",
    }
})
