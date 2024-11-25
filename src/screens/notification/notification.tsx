import {ScreenView} from '@/components';
import {NotificationCard} from './components';
import {FlatList} from 'react-native';

const notifications = [
  {
    id: 1,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: false,
  },
  {
    id: 2,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: true,
  },
  {
    id: 3,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: false,
  },

  {
    id: 4,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: true,
  },
  {
    id: 5,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: false,
  },
  {
    id: 6,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: true,
  },
  {
    id: 7,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: false,
  },
  {
    id: 8,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: true,
  },
  {
    id: 9,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: false,
  },
  {
    id: 10,
    title: 'New recipe alert!',
    description: 'Check out the new recipe from your favorite chef',
    created_at: '2021-09-01T12:00:00Z',
    isRead: true,
  },
];

export const NotificationScreen = () => {
  return (
    <ScreenView>
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationCard item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </ScreenView>
  );
};
