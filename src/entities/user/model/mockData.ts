import type { User } from '@/entities/user';
import GirlAvatar from '@/assets/images/avatar_girl.jpg';

const usersData: User[] = [
  {
    id: '1',
    contact: 'alexsmith',
    name: 'Михаил',
    lastName: 'Дьяков',
    role: 'player',
    rating: 4,
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: '2',
    contact: 'mariapetrov',
    name: 'Мария',
    lastName: 'Петрова',
    role: 'coach',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: '3',
    contact: 'ivanivanov',
    name: 'Иван',
    lastName: 'Иванов',
    role: 'player',
    rating: 3 },
  {
    id: '4',
    contact: 'natashakuznetsova',
    name: 'Иван',
    lastName: 'Иванов',
    role: 'admin',
    rating: 5,
  },
  {
    id: '5',
    contact: 'redricshugart',
    name: 'Иван',
    lastName: 'Иванов',
    role: 'player',
    rating: 5,
    avatar: GirlAvatar,
  },
  {
    id: '6',
    contact: 'dmitryfedorov',
    name: 'Иван',
    lastName: 'Федоров',
    role: 'coach',
    rating: 4,
  },
  {
    id: '7',
    contact: 'ekaterinasidorova',
    name: 'Екатерина',
    lastName: 'Сидорова',
    role: 'player',
    rating: 3,
    avatar: GirlAvatar,
  },
];

export default usersData;
