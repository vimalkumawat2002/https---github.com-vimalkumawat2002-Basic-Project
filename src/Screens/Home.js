import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ficon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>
          Good Morning, <Text style={{fontWeight: 'bold'}}>Jenifer</Text>
        </Text>
        <MaterialIcons name="notifications" size={30} color="black" />
      </View>
      <View style={styles.icon}>
        <Ficon name="comments" size={30} color="lightblue" />

        <MaterialIcons name="monitor" size={30} color="lightblue" />
        <Ficon name="users" size={30} color="lightblue" />
        <MIcon name="dots-horizontal" size={30} color="lightblue" />
      </View>
      <View style={styles.text}>
        <Text style={{color:'black'}}> Forum</Text>
        <Text style={{color:'black'}} >Task</Text>
        <Text style={{color:'black'}}> People</Text>
        <Text style={{color:'black'}}>Other</Text>
      </View>

      <View style={styles.main1}>
        <Text style={{fontWeight: 'bold',marginLeft:10,}}> Your Course</Text>
        <Text style={{color: 'skyblue'}}> See All</Text>
      </View>

<View style={styles.main3}>

      <View style={styles.main2}>
        <Ficon name="balance-scale" size={30} style={{marginHorizontal:40,marginVertical:10,}}/>
        <Text style={{fontWeight:'bold',marginVertical:15,color:'white'}}>   Law Class</Text>
      </View>

      <View style={styles.text1}>

<Text style={{color:'white'}}> Your Personal Task</Text>
<Text style={{color:'white'}}> Your Team Task</Text>
      </View>
      <View style={styles.text2}>

        <Text style={{color:'white'}}>2/2 Done</Text>
        <Text style={{color:'white'}}>3/4 Done</Text>
      </View>
      <Text style={{marginLeft:35,marginTop:30,fontWeight:'bold',color:'white'}}>Lecture</Text>
<View style={{width:40,height:30,backgroundColor:'white',borderRadius:70,marginLeft:30,marginTop:30}}>
</View>
<View>
<Text style={{marginLeft:90,marginTop:-25,color:'white'}}>Emma Larson</Text>

</View>
<View style={styles.text3}>
<Ficon name="info-circle" size={30} style={{marginLeft:30,marginTop:20}}/>
<Text style={{marginTop:25,marginLeft:5,color:'white'}}> Plise Finish Your Team Task </Text>
</View>
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    
  }}

/>
<View style={styles.text4}> 
<Text style={{color:'white',fontWeight:'bold'}}> Class Progress</Text>

<Text style={{color:'white',fontWeight:'bold'}} > 82% </Text>

</View>
</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  icon: {
    flexDirection: 'row',
    gap: 70,
    marginHorizontal: 20,
  },
  text: {
    flexDirection: 'row',
    gap: 65,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  main1: {
    flexDirection: 'row',
    gap: 230,
    marginVertical: 50,
  },
  main2:{
flexDirection:'row'


  },
  text1:{

    flexDirection:'row',
    gap:80,
    marginHorizontal:30,
    marginTop:30,
  },
  text2:{
flexDirection:'row',
gap:160,
marginHorizontal:35,
marginTop:20,
  },
  text3:{
  flexDirection:'row'
  },
  main3:{

    backgroundColor:"blue",
    height:370,
    width:370,
    marginHorizontal:10,
    borderRadius:10,
    
  },
  text4:{
    flexDirection:'row',
    gap:190,
    marginTop:10,
    
  }
});
export default Home;
