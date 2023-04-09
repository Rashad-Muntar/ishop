import React, {useState} from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView, Modal } from 'react-native'
import OrderProcessBullet from '../Order/orderProcessBullet'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'
import PrimaryButton from '../../../shared/PrimaryButton'
import { Colors } from '../../../shared/Constants'


const OrderSubmitted = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headingTextArea}>
          <Image
            style={{ height: 120, width: 120 }}
            source={require('../../../../assets/Solids/done.png')}
          />
          <View style={styles.textArea}>
            <Text style={styles.heading}>
              You personal shopper will contact shortly
            </Text>
            <Text style={styles.subText}>
              You will receive a video call notifcation to show your shopper exactly what to pick 
            </Text>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <Text> Enjoy your personalize shopping experience</Text>
          {/* <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <OrderPeriod closeModal={() => setModalVisible(!modalVisible)} />
            </View>
          </View> */}
        </Modal>
        <View style={styles.steps}>
          <OrderProcessBullet
            icon={
              <Ionicons name="checkmark-done-outline" size={24} color="black" />
            }
            header="Order accepted"
            subtext="We connect you to a personal shopper"
          />
          <OrderProcessBullet
            icon={<AntDesign name="videocamera" size={24} color="black" />}
            header="Shopping starts"
            subtext="Shopper calls to show him exaclty what to pick "
          />
          <OrderProcessBullet
            icon={
              <MaterialIcons name="delivery-dining" size={24} color="black" />
            }
            header="Order delivered"
            subtext="Your order delivered how you want it"
          />
        </View>
        <PrimaryButton onPress={() => navigation.navigate("Categories")} fontSize={15} textColors={Colors.light.whiteText} width="35%" height={50} title="Go home" bg={Colors.light.primary} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTextArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    marginVertical: 20,
    width: '80%',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
    color: Colors.light.textPrimaryBlack,
  },
  subText: {
    textAlign: 'center',
  },
  steps: {
    width: '90%',
    margin: 10,
    padding: 15,
  },
})

export default OrderSubmitted
