import React, { Component } from "react";
import { View, Text, Image, Modal, Alert, Button, Picker } from "react-native";
import {
 Header,
 Body,
 List,
 ListItem,
 Content,
 Container,
 InputGroup,
 Input,
 Left,
 Right,
 Badge,
 Fab,
 Icon
} from "native-base";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import FontAwesome from "react-native-vector-icons/FontAwesome";

window.Expo = Object.freeze({ ...window.Expo, SQLite });

//import RNFetchBlob from 'rn-fetch-blob'
var CryptoJS = require("crypto-js");

const db = SQLite.openDatabase("db.db", "v1", "v1", 2000);

export default class ExpenseTrack extends React.Component {
 state = {
 image: null,
 detailModalVisible: false,
 viewModalVisible: false,
 name: "",
 amount: "",
 date: new Date().toString(),
 category: "food",
 li:
 '{"_array":[{"name":"Burger King India Pvt. Lta.","amount":"121 . 00","category":"food","date":"24","location":"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FEasyExpense-aeb07441-928c-4147-9dd9-ddc9f0b8d0d7/ImagePicker/a2543280-fa86-4f00-a7d8-c5e9b42bcb75.jpg"},{"name":"TACO BELL","amount":"679.00","category":"food","date":"24","location":"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FEasyExpense-aeb07441-928c-4147-9dd9-ddc9f0b8d0d7/ImagePicker/28f129be-db13-4ce1-818c-df8ea6877791.jpg"}],"length":2}',
 totalAmount: 0,
 fabActive: false
 };
 render() {
 return (
 <View style={{ marginTop:20 }}>
 <Fab
 active={this.state.fabActive}
 direction="left"
 containerStyle={{}}
 style={{ backgroundColor: "#5067FF" }}
 onPress={() => this.setState({ fabActive: !this.state.fabActive })}
 >
 <Icon name="cog" />
 <Button
 style={{ backgroundColor: "#5067FF" }}
 onPress={this._snapImage}
 >
 <FontAwesome name="camera" color="white" />
 </Button>
 <Button
 style={{ backgroundColor: "#5067FF" }}
 onPress={this._pickImage}
 >
 <FontAwesome name="image" color="white" />
 </Button>
 <Button
 style={{ backgroundColor: "#5067FF" }}
 onPress={() => this.setState({ detailModalVisible: true })}
 >
 <FontAwesome name="pencil" color="white" />
 </Button>
 <Button
 style={{ backgroundColor: "#5067FF" }}
 onPress={() => {
 this.databaseView();
 this.setState({ viewModalVisible: true });
 }}
 >
 <FontAwesome name="book" color="white" />
 </Button>
 </Fab>
 <View style={{ marginTop: 60 }}>
 <Modal
 animationType="slide"
 transparent={false}
 visible={this.state.detailModalVisible}
 >
 <View style={{ marginTop: 70, flex: 1 }}>
 <View
 style={{
 backgroundColor: "#5067FF",
 alignItems: "center"
 }}
 >
 <Text style={{ marginTop: 12, color: "white", fontSize: 25 }}>
 Your New Expense!
 </Text>
 </View>
 <View style={{ flex: 2, alignItems: "center" }}>
 <InputGroup borderType="rounded">
 <Text>Name: </Text>
 <Input
 value={String(this.state.name)}
 onChangeText={text => this.setState({ name: text })}
 />
 </InputGroup>
 <InputGroup>
 <Text>Amount: </Text>
 <Input
 value={String(this.state.amount)}
 onChangeText={text => this.setState({ amount: text })}
 />
 </InputGroup>
 <InputGroup>
 <Text>Date: </Text>
 <Input
 value={String(this.state.date)}
 onChangeText={text => this.setState({ date: text })}
 />
 </InputGroup>
 <InputGroup>
 <Text>Category: </Text>
 <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
    <Picker.Item label="Food" value="food" />
    <Picker.Item label="Medicine" value="medicine" />
    <Picker.Item label="Groceries" value="groceries" />
    <Picker.Item label="Electricity" value="electricity" />
    <Picker.Item label="Water" value="water" />
    <Picker.Item label="Alcohol" value="alcohol" />
</Picker>
 </InputGroup>
 </View>
 <View>
 <Button
 color="#5067FF"
 title="Log My Expense!"
 onPress={() => {
 //Alert.alert("Your Expenses Have Been Logged!");
 db.transaction(
 tx => {
 tx.executeSql(
 "create table if not exists details (name text primary key not null, amount text, category text,date text,location text)"
 ),
 tx.executeSql(
 "insert into details (name, amount,category,date,location) values (?, ?,?,?,?)",
 [
 String(this.state.name),
 this.state.amount,
 String(this.state.category),
 String(this.state.date),
 String(this.state.image)
 ]
 );
 tx.executeSql(
 "select * from details",
 [],
 (_, { rows }) => console.log(rows.length)
 );
 },
 this.handleDbError,
 this.insertDone()
 );
 this.setState({ detailModalVisible: false });
 }}
 />
 </View>
 </View>
 </Modal>
 {/*View The Data Modal*/}
 <Modal
 animationType="slide"
 transparent={false}
 visible={this.state.viewModalVisible}
 onRequestClose={() => {
 //Alert.alert('Modal has been closed.');
 this.setState({ viewModalVisible: false });
 }}
 >
 <View style={{ flex: 1 }}>
 <View
 style={{
 flex: 1,
 backgroundColor: "#5067FF",
 alignItems: "center"
 }}
 >
 <Text style={{ fontSize: 25, marginTop: 50, color: "white" }}>
 Your Recent Logs!
 </Text>
 </View>
 <View style={{ flex: 5 }}>
 <List>{this.showList()}</List>
 </View>
 <View style={{ flex: 1, alignItems: "stretch" }}>
 <Button color="#5067FF"
 onPress={() => this.setState({ viewModalVisible: false })}
 title="Okay, I am done"
 />
 </View>
 </View>
 </Modal>
 </View>
 </View>
 );
 }



 handleDbError(ex) {
 console.log(ex);
 }

 databaseView() {
 let obj = {};
 db.transaction(
 tx => {
 //tx.executeSql('insert into items (name, amount,category,date,location) values (?, ?,?,?,?)', [String(this.state.name),String(this.state.amount),String(this.state.category),String(this.state.date),String(this.state.image)]);
 tx.executeSql(
 "create table if not exists details (name text primary key not null, amount text, category text,date text,location text)"
 );
 tx.executeSql("select * from details", [], (_, { rows }) => {
 console.log(JSON.stringify(rows));
 this.setState({ li: JSON.stringify(rows) });
 });
 },
 this.handleDbError,
 null
 );
 }

 showList() {
 let r = JSON.parse(this.state.li);
 let results = r["_array"];
 let total = 0;
 results.map((ele, index) => {
 total += parseFloat(ele["amount"]);
 });
 return results.map((ele, index) => {
 return (
 <ListItem key={index}>
 <Left>
 <Image
 source={{ uri: `file://${ele["location"]}` }}
 style={{ width: 70, height: 70 }}
 />
 </Left>
 <Body>
 <View style={{ flex: 1 }}>
 <View style={{ flex: 2 }}>
 <Text style={{ marginTop: 5 }}>Name: {ele["name"]}</Text>
 </View>
 <View style={{ flex: 1 }}>
 <Text>Amount: {ele["amount"]}</Text>
 </View>
 <View style={{ flex: 1 }}>
 <Text>Date: {ele["date"]}</Text>
 </View>
 </View>
 </Body>
 <Right>
 <View style={{ flex: 1, justifyContent: "center" }}>
 <Badge style={{ backgroundColor: "maroon" }}>
 <Text style={{ color: "white" }}> {ele["category"]}</Text>
 </Badge>
 </View>
 </Right>
 </ListItem>
 );
 });
 }

 insertDone() {
 Alert.alert("Expenses Have Been Saved!");
 }
 componentDidMount() {
 this.getPermissionAsync();
 }

 getPermissionAsync = async () => {
 //if (Constants.platform.ios) {
 let { status } = await Permissions.askAsync(
 Permissions.CAMERA_ROLL,
 Permissions.CAMERA
 );
 if (status !== "granted") {
 alert("Sorry, we need camera roll permissions to make this work!");
 }
 };

 _snapImage = async () => {
 let result = await ImagePicker.launchCameraAsync({
 mediaTypes: ImagePicker.MediaTypeOptions.All,
 allowsEditing: true,
 //aspect: [6, 3],
 base64: true
 });

 if (!result.cancelled) {
 this.setState({ image: result.uri });
 this.uploadImage(result.uri, this.postData);
 }
 };

 _pickImage = async () => {
 let result = await ImagePicker.launchImageLibraryAsync({
 mediaTypes: ImagePicker.MediaTypeOptions.All,
 allowsEditing: true,
 //aspect: [6, 3],
 base64: true
 });

 //console.log(result);

 if (!result.cancelled) {
 this.setState({ image: result.uri });
 this.uploadImage(result.uri, this.postData);
 }
 };

 uploadImage(uri, callback) {
 let timestamp = ((Date.now() / 1000) | 0).toString();
 let api_key = "661715462383451";
 let api_secret = "v654zQ_f3dD38f8xaYjllSBdmGY";
 let cloud = "da3aybov8";
 let hash_string = "timestamp=" + timestamp + api_secret;
 let signature = CryptoJS.SHA1(hash_string).toString();
 let upload_url =
 "https://api.cloudinary.com/v1_1/" + cloud + "/image/upload";

 let xhr = new XMLHttpRequest();
 xhr.open("POST", upload_url);
 xhr.onload = () => {
 console.log(xhr);
 callback(JSON.parse(xhr._response));
 };
 let formdata = new FormData();
 formdata.append("file", {
 uri: uri,
 type: "image/png",
 name: "upload.png"
 });
 formdata.append("timestamp", timestamp);
 formdata.append("api_key", api_key);
 formdata.append("signature", signature);
 xhr.send(formdata);
 }

 postData = async uploadOutput => {
 alert("Now you can check your previous receipts by going to the receipt");
 let url =
 "https://centralindia.api.cognitive.microsoft.com/vision/v2.0/read/core/asyncBatchAnalyze";
 return fetch(url, {
 method: "POST",
 headers: {
 "Content-Type": "application/json",
 "Ocp-Apim-Subscription-Key": "6085c28359cb4c0c8dccfd0366da0252"
 // 'Content-Type': 'application/x-www-form-urlencoded',
 },
 body: '{"url": ' + '"' + uploadOutput["url"] + '"}'
 }).then(response => {
 let operationLocation = "";
 for (var pair of response.headers.entries()) {
 if (pair[0] === "operation-location") {
 operationLocation = pair[1];

 break;
 }
 }

 let ref = this;

 setTimeout(function() {
 fetch(operationLocation, {
 headers: {
 "Content-Type": "application/json",
 "Ocp-Apim-Subscription-Key": "6085c28359cb4c0c8dccfd0366da0252"
 },

 type: "GET"
 })
 .then(data => data.json())
 .then(data => ref.parseResults(data))
 .catch(error => alert(error));
 }, 8000);
 });
 };

 parseResults = data => {
 let lines = data["recognitionResults"][0]["lines"];
 let results = "";
 let resultsList = [];
 for (let i = 0; i < lines.length; i++) {
 if (i === 0) {
 results += `Name: ` + lines[i]["text"];
 this.setState({ name: lines[i]["text"] });
 } else {
 let com = lines[i]["text"].toLowerCase();
 if (com.indexOf("total") !== -1) {
 console.log(`${com} Total exists`);
 if (i + 1 < lines.length) {
 if (isNumeric(lines[i + 1]["text"])) {
 resultsList.push({
 totalText: com,
 amount: lines[i + 1]["text"]
 });
 } else {
 let j = i + 1;
 while (j < lines.length) {
 if (
 parseFloat(lines[j]["text"]) &&
 parseFloat(lines[j]["text"]) > 0
 ) {
 console.log(`ADD ${lines[j]["text"]}`);
 resultsList.push({
 totalText: com,
 amount: lines[j]["text"]
 });
 break;
 }
 console.log(`ESCAPE ${lines[j]["text"]}`);
 j += 1;
 }
 }
 }
 }
 }
 }
 if (resultsList.length > 0)
 results += `\n${resultsList[resultsList.length - 1]["totalText"]} ${
 resultsList[resultsList.length - 1]["amount"]
 }`;
 this.setState({
 detailModalVisible: true,
 amount: resultsList[resultsList.length - 1]["amount"]
 });
 };
}

function isNumeric(value) {
 return /^-{0,1}\d+$/.test(value);
}
