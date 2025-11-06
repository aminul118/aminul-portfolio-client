import { MenuGroup } from '@/types';
import {
  BookOpen,
  Briefcase,
  FileUser,
  Gauge,
  Globe,
  SquareChartGantt,
  Users,
} from 'lucide-react';

const adminSidebarMenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      { name: 'Dashboard', url: '/admin', icon: Gauge },
      { name: 'Resume', url: '/admin/resume', icon: FileUser },
      { name: 'Projects', url: '/admin/projects', icon: SquareChartGantt },
      { name: 'Blogs', url: '/admin/blogs', icon: BookOpen },
      { name: 'Experience', url: '/admin/experience', icon: Briefcase },
      { name: 'Users', url: '/admin/users', icon: Users },
      { name: 'Website', url: '/', icon: Globe },
    ],
  },
];

export { adminSidebarMenu };
