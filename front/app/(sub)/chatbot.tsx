import React, { useState, useEffect, useRef } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
require('dotenv').config();

import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';

let api_key = process.env.API_KEY; // Replace with your actual API key

interface Message {
  text: string;
  isUser: boolean;
}

const { width, height } = Dimensions.get('screen');

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList<Message>>(null);

  const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(api_key);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  useEffect(() => {
    setMessages([{ text: "Welcome to ImpactHive! 🐝 We're buzzing with excitement to help you make smart investments. How can we assist you today?", isUser: false }]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    setIsLoading(true);
    const userMessage: Message = { text: inputText, isUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');

    try {
      const result = await model.generateContent(inputText);
      const response = await result.response;
      const botMessage: Message = { text: response.text(), isUser: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = { text: "Sorry, I encountered an error. Please try again.", isUser: false };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.messageBubble, item.isUser ? styles.userBubble : styles.botBubble]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground 
          source={require('@/assets/images/chatbotBG.png')} 
          style={styles.background}
          resizeMode="cover"
        >
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messageList}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type a message..."
              placeholderTextColor="#888"
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color="black" />
              ) : (
                <Entypo name="chevron-with-circle-right" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: height / 1.8,
    marginTop: height / 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF7D3",
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#CDCBC2",
    borderRadius: 25,
    marginRight: 10,
    height: 40,
    color: "black",
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFDD5E',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#CDCBC2',
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#FFE688',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
});

export default ChatBot;
