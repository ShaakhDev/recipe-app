import {Chips, ScreenView, Text} from '@/components';
import {colors, spacing} from '@/theme';
import {Pressable, ScrollView, TextStyle, View, ViewStyle} from 'react-native';
import {Avatar, CategoryCard, NewRecipeCard} from './components';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabParamsList, RootStackParamList} from '@/navigators';
import {useState} from 'react';
import {setTheme, useAppDispatch, useAppSelector} from '@/store';

const chips = ['All', 'Indian', 'Italian', 'Asian', 'Mexican', 'Chinese'];

export const HomeScreen = ({
  navigation,
}: BottomTabScreenProps<BottomTabParamsList & RootStackParamList>) => {
  // const dispatch = useAppDispatch();
  // const {mode} = useAppSelector(state => state.theme);

  const [activeCategory, setActiveCategory] = useState('All');
  const handleSearch = () => {
    // dispatch(setTheme('light'));
    navigation.navigate('Search');
  };
  return (
    <ScreenView contentContainerStyle={{paddingHorizontal: 0}}>
      <View style={$headerRow}>
        <View>
          <Text size="xl" fontWeight="bold">
            Hello Shakhzod
          </Text>
          <Text
            style={{fontSize: 11, color: colors.textSecondary}}
            fontWeight="medium">
            What are you cooking today?
          </Text>
        </View>
        <Avatar />
      </View>
      <View style={$searchRow}>
        <Pressable style={$searchBar} onPress={handleSearch}>
          <Icon name="search1" size={26} color={colors.inputBorder} />
          <Text style={{fontSize: 11, color: colors.textSecondary}}>
            Search recipe
          </Text>
        </Pressable>
        <Pressable style={$filter}>
          <IonIcon
            name="options-outline"
            size={26}
            color={colors.inputBorder}
          />
        </Pressable>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{maxHeight: spacing.xl, marginTop: spacing.lg}}
        contentContainerStyle={{gap: 10, paddingHorizontal: spacing.md}}>
        {chips.map((chip, index) => (
          <Chips
            key={index}
            active={chip === activeCategory}
            onPress={() => setActiveCategory(chip)}>
            {chip}
          </Chips>
        ))}
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={$horizontalContainer}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </ScrollView>
      <Text style={$sectionTitle} size="md" fontWeight="bold">
        New recipes
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: spacing.md, maxHeight: 150}}>
        <NewRecipeCard />
        <NewRecipeCard />
        <NewRecipeCard />
      </ScrollView>
    </ScreenView>
  );
};
const $headerRow: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: spacing.md,
  marginTop: spacing.lg,
};
const $searchRow: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: spacing.lg,
  paddingHorizontal: spacing.md,
};
const $searchBar: ViewStyle = {
  flex: 1,
  gap: spacing.xs,
  height: 40,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: colors.inputBorder,
  paddingHorizontal: spacing.xs,
};

const $filter: ViewStyle = {
  height: 40,
  width: 40,
  borderRadius: 10,
  backgroundColor: colors.primary,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: spacing.xs,
};
const $horizontalContainer: ViewStyle = {
  marginTop: spacing.md,
  paddingHorizontal: spacing.md,
  maxHeight: 230,
};
const $sectionTitle: TextStyle = {
  paddingHorizontal: spacing.md,
  marginVertical: spacing.md,
};
