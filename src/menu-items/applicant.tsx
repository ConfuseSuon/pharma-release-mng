import { IconUsers } from '@tabler/icons';

const icon = { IconUsers };

const applicants = {
  id: 'applicant-roadmap',
  title: 'Cv Manager',
  type: 'group',
  children: [
    {
      id: 'applicants',
      title: 'Applicants',
      type: 'item',
      url: '/applicants',
      icon: icon.IconUsers,
      breadcrumbs: false
    }
  ]
};

export default applicants;
