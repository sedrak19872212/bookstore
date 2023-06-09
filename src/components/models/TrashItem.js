// Library import
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';

import ActionSheet from 'react-native-actions-sheet';

// Local import
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import CButton from '../common/CButton';
import CDivider from '../common/CDivider';
import CartProductComponent from '../cartComponent/CartProductComponent';

import {deleteFromCartAction} from '../../redux/action/deleteFromCartAction';

export default function TrashItem(props) {
  const {SheetRef, item} = props;
  const colors = useSelector(state => state.theme.theme);


  const dispatch = useDispatch();

  const onPressYes = (item) => {
  console.log("on Press Yes",item);
   dispatch(deleteFromCartAction(item));
      SheetRef?.current?.hide();
  };


  const onPressCancel = () => SheetRef?.current?.hide();

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3,
        width: moderateScale(60),
        ...styles.mv10,
      }}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.backgroundColor},
      ]}>
      <CText type={'B22'} style={localStyles.headerText} align={'center'}>
        {strings.removeFromCart}
      </CText>
      <CDivider style={styles.mv5} />
      <View style={styles.mb15}>
        <CartProductComponent item={item} isTrash={true} trashIcon={false} isButton={false} />
      </View>
      <CDivider style={styles.mv5} />
      <View style={localStyles.btnContainer}>
        <CButton
          title={strings.cancel}
          type={'S16'}
          color={colors.dark ? colors.white : colors.primary}
          containerStyle={localStyles.skipBtnContainer}
          bgColor={colors.dark3}
          onPress={onPressCancel}
        />
        <CButton
          title={strings.yesRemove}
          type={'S16'}
          containerStyle={localStyles.skipBtnContainer}
          onPress={() => onPressYes(item)}
        />
      </View>
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
    ...styles.pb30,
  },
  headerText: {
    ...styles.mt5,
    ...styles.mb10,
  },
  btnContainer: {
    ...styles.pt10,
    ...styles.pb30,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '45%',
  },
});
