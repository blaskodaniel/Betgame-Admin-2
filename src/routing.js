import GameSettings from './pages/GameSettings';
import GroupsPage from './pages/Groups';
import HomePage from './pages/Home';
import LogsPage from './pages/Logs';
import MatchesPage from './pages/Matches';
import TeamsPage from './pages/Teams';
import UsersPage from './pages/Users';

const Routing = [
  {
    id: 'home',
    path: '/',
    icon: 'las la-home',
    component: HomePage,
    visible: true,
    disabled: false,
  },
  {
    id: 'matches',
    path: 'matches',
    icon: 'las la-home',
    component: MatchesPage,
    visible: true,
    disabled: false,
  },
  {
    id: 'teams',
    path: 'teams',
    icon: 'las la-home',
    component: TeamsPage,
    visible: true,
    disabled: false,
  },
  {
    id: 'users',
    path: 'users',
    icon: 'las la-home',
    component: UsersPage,
    visible: true,
    disabled: false,
  },
  {
    id: 'groups',
    path: 'groups',
    icon: 'las la-home',
    component: GroupsPage,
    visible: true,
    disabled: false,
  },
  {
    id: 'gamesettings',
    path: 'settings',
    icon: 'las la-home',
    component: GameSettings,
    visible: true,
    disabled: false,
  },
  {
    id: 'logs',
    path: 'logs',
    icon: 'las la-home',
    component: LogsPage,
    visible: true,
    disabled: false,
  },
];

export default Routing;
