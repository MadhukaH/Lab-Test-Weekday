import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const handleIconPress = (iconName: string) => {
    console.log(`${iconName} icon pressed`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: 'https://i.postimg.cc/hPGxBfNq/boy-1.png',
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi, Good Evening!</Text>
            <Text style={styles.username}>Madhuka</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleIconPress('Search')}>
          <Ionicons name="search" size={28} color="#4B0082" />
        </TouchableOpacity>
      </View>

      {/* Trending Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <TouchableOpacity onPress={() => handleIconPress('More')}>
            <Text style={styles.moreText}>More</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: 'https://i.postimg.cc/66nbv1QQ/rb-2149008339.png',
          }}
          style={styles.trendingImage}
        />
        <Text style={styles.trendingText}>Need Medical</Text>
      </View>

      
      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleIconPress('Education')}>
          <FontAwesome5 name="graduation-cap" size={28} color="#4B0082" />
          <Text style={styles.categoryText}>Education</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleIconPress('Medical')}>
          <FontAwesome5 name="medkit" size={28} color="#4B0082" />
          <Text style={styles.categoryText}>Medical</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleIconPress('Disaster')}>
          <FontAwesome5 name="water" size={28} color="#4B0082" />
          <Text style={styles.categoryText}>Disaster</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => handleIconPress('Other')}>
          <Ionicons name="document-text" size={28} color="#4B0082" />
          <Text style={styles.categoryText}>Other</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.charitySection}>
        <Image
          source={{
            uri: 'https://i.postimg.cc/zvCdY3Qh/rb-2148606120.png',
          }}
          style={styles.charityImage}
        />
        <Text style={styles.charityText}>Charity Day ❤️</Text>
      </View>

      
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => handleIconPress('Home')}>
          <Ionicons name="home" size={28} color="#4B0082" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('Events')}>
          <MaterialIcons name="event-note" size={28} color="#4B0082" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('Bookmarks')}>
          <Ionicons name="bookmark" size={28} color="#4B0082" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { handleIconPress('Profile'); router.push('/'); }}>
          <Ionicons name="person" size={28} color="#4B0082" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#4B0082',
    fontWeight: '600',
  },
  username: {
    fontSize: 14,
    color: '#4B0082',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B0082',
  },
  moreText: {
    fontSize: 14,
    color: '#4B0082',
    textDecorationLine: 'underline',
  },
  trendingImage: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    marginBottom: 10,
  },
  trendingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B0082',
    textAlign: 'center',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    color: '#4B0082',
    marginTop: 5,
  },
  charitySection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  charityImage: {
    width: '100%',
    height: 260,
    borderRadius: 15,
    marginBottom: 10,
  },
  charityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B0082',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default HomeScreen;