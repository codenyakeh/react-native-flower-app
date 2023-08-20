import React from 'react';
import profileImg from "../../assets/images/Profile 3.jpg";
import { 
          StyleSheet, 
          Text, 
          View, 
          TextInput,
          Image, 
          TouchableOpacity 
       } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
    <View>

    </View>
    <Image source={profileImg} style={styles.img} />
    <View style={styles.infoContainer}>
       <Text style={styles.profileHeaders}>School</Text>
       <TextInput style={styles.info} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoHead}>Email Address</Text>
      <TextInput style={styles.info} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.infoHead}>Name</Text>
      <TextInput style={[styles.borders,styles.info]} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.infoHead}>Surname</Text>
      <TextInput style={[styles.borders, styles.info]} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.infoHead}>Emergency Contact</Text>
      <View style={styles.contact}>
          <TextInput style={[styles.borders, styles.info]} />

      </View>
    </View>

<TouchableOpacity style={styles.buttons}>
    <Text style={styles.textColor}>UPDATE PROFILE</Text>
  </TouchableOpacity>
  
</View>
);
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       marginHorizontal: 6
    },

  img: {
    width: 100,
    height: 100,
    marginTop: 90,
    marginBottom: 20,
    borderRadius: 100,
    alignSelf: 'center'
  },

infoContainer: {
flexDirection: 'column',
marginVertical: 10
},

profileHeaders: {
color: 'pink',
fontSize: 16,
opacity: 0.8
},

infoHead: {
color:"teal",
fontWeight: "bold"
},

info: {
paddingVertical: 3,
color: "blue",
fontWeight: "bold",
},

borders: {
borderWidth: 0.3,
borderRightWidth:0,
borderLeftWidth:0,
borderTopWidth: 0,
borderColor: "teal",
fontSize: 13,
},

buttons: {
width: 200,
backgroundColor: "pink",
marginVertical: 10,
padding: 20,
borderRadius:75,
alignItems: 'center',
color: "black",
alignSelf: "center",
},

textColor: {
color: "white",
fontSize: 15
}
});

export default Profile;





       