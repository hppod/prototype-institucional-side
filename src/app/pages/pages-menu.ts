import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Notícias',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Listar',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Criar',
        link: '/pages/editors/tinymce'
      }
    ],
  },
  {
    title: 'Administrativo',
    icon: 'lock-outline',
    children: [
      {
        title: 'Sobre',
        link: ''
      },
      {
        title: 'Horários de visita',
        link: ''
      },
      {
        title: 'FAQ',
        link: ''
      },
      {
        title: 'Como ajudar',
        link: ''
      }
    ]
  },
  {
    title: 'Doações',
    icon: 'flash-outline',
    children: [
      {
        title: 'Gerenciar doações',
        link: ''
      }
    ]
  }
];
