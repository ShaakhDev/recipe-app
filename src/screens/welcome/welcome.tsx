import {Button, Text} from '@/components';
import {colors, spacing} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthStackParamList} from 'src/navigators/auth-navigator';

export const WelcomeScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={$container}>
      <Image
        source={require('/assets/welcome-bg.png')}
        resizeMode="cover"
        style={$image}
      />
      <Image
        source={require('/assets/logo.png')}
        resizeMode="contain"
        style={$logo}
      />
      <Text size="lg" fontWeight="medium" appearance="white">
        100k+ premium recipes
      </Text>

      <Text appearance="white" style={$title} fontWeight="bold">
        Get Cooking
      </Text>
      <Text appearance="white" size="sm">
        Simple way to find tasty recipe
      </Text>
      <Button style={$button} onPress={handleNavigate}>
        <>
          <Text appearance="white">Start cooking</Text>
          <Icon
            name="arrowright"
            size={20}
            color={colors.palette.white}
            style={{marginLeft: spacing.xs}}
          />
        </>
      </Button>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};
const $image: ImageStyle = {
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%',
};
const $logo: ImageStyle = {
  width: 100,
  marginTop: 'auto',
  height: 100,
};

const $button: ViewStyle = {
  width: '80%',
  flexDirection: 'row',
  marginVertical: spacing.xxl,
};
const $title: TextStyle = {
  fontSize: 50,
  marginTop: 'auto',
  maxWidth: '90%',
  textAlign: 'center',
};
