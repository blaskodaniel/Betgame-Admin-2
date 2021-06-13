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
    displayname: 'Főoldal',
    component: HomePage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'matches',
    path: 'matches',
    icon: 'las la-futbol',
    displayname: 'Mérkőzések',
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
    icon: 'las la-users',
    displayname: 'Csapatok',
    component: TeamsPage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'users',
    path: 'users',
    icon: 'las la-user-cog',
    displayname: 'Játékosok',
    component: UsersPage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'groups',
    path: 'groups',
    icon: 'las la-home',
    displayname: 'Csoportok',
    component: GroupsPage,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'gamesettings',
    path: 'settings',
    icon: 'las la-cog',
    displayname: 'Beállítások',
    component: GameSettings,
    visibleinmenu: true,
    disabled: false,
  },
  {
    id: 'logs',
    path: 'logs',
    icon: 'las la-comment',
    displayname: 'Logok',
    component: LogsPage,
    visibleinmenu: true,
    disabled: false,
  },
];

export default Routing;
