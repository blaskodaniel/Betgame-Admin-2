import GameSettings from './pages/GameSettings';
import GroupsPage from './pages/Groups';
import HomePage from './pages/Home';
import LogsPage from './pages/Logs';
import MatchPage from './pages/Match';
import MatchListPage from './pages/MatchList';
import TeamsPage from './pages/Teams';
import UsersPage from './pages/Users';

const Routing = [
  {
    id: 'home',
    path: '/',
    icon: 'las la-home',
    component: HomePage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'matches',
    path: 'matches',
    icon: 'las la-home',
    component: MatchListPage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'matchpage',
    path: 'match',
    icon: 'las la-home',
    component: MatchPage,
    visibleinmenu: false,
    param: '/:matchid',
    disabled: false,
  },
  {
    id: 'teams',
    path: 'teams',
    icon: 'las la-home',
    component: TeamsPage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'users',
    path: 'users',
    icon: 'las la-home',
    component: UsersPage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'groups',
    path: 'groups',
    icon: 'las la-home',
    component: GroupsPage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'gamesettings',
    path: 'settings',
    icon: 'las la-home',
    component: GameSettings,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'logs',
    path: 'logs',
    icon: 'las la-home',
    component: LogsPage,
    visibleinmenu: true,
    disabled: false,
  },
];

export default Routing;
