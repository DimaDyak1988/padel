import type { User } from '@/entities/user';
import GirlAvatar from '@/assets/images/avatar_girl.jpg';

const usersData: User[] = [
  {
    id: '1',
    contact: 'alexsmith',
    name: 'Дьяков Михаил',
    role: 'player',
    rating: 4,
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: '2',
    contact: 'mariapetrov',
    name: 'Мария Петрова',
    role: 'coach',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  { id: '3', contact: 'ivanivanov', name: 'Иван Иванов', role: 'player', rating: 3 },
  { id: '4', contact: 'natashakuznetsova', name: 'Наташа Кузнецова', role: 'admin', rating: 5 },
  {
    id: '5',
    contact: 'redricshugart',
    name: 'Юлия Иванова',
    role: 'player',
    rating: 5,
    avatar: GirlAvatar,
  },
  {
    id: '6',
    contact: 'dmitryfedorov',
    name: 'Дмитрий Фёдоров',
    role: 'coach',
    rating: 4,
  },
  {
    id: '7',
    contact: 'ekaterinasidorova',
    name: 'Екатерина Сидорова',
    role: 'player',
    rating: 3,
    avatar: GirlAvatar,
  },
];

export default usersData;
