import { Text, View } from "react-native";
import { Link } from 'expo-router';

const Navigate = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href={'/Signup'}>Signup</Link>
      <Link href={'/Login'}>Login</Link>
      <Link href={'/Dashboard'}>Dashboard</Link>
      <Link href={'/Navigate'}>Landing</Link>
      <Link href={'/'}>index</Link>
      <Link href={'/ForgotPassword'}>ForgotPassword</Link>
    </View>
  )
}

export default Navigate