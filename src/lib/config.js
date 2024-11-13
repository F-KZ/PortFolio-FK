import { SiGithub, SiLinkedin, SiTwitter, SiMaildotru } from 'react-icons/si';

export const GITHUB_USERNAME = 'F-KZ';

export const EMAIL = 'Franck.Kanza@outlook.fr';

export const FULL_NAME = 'Franck Kanza';

export const Phone = `0644396284`;

export const SOCIAL_NETWORKS = [
  {
    url: 'https://www.twitter.com/',
    name: 'Twitter',
    icon: <SiTwitter />,
  },
  {
    url: 'https://www.linkedin.com/in/franck-kanza-6849b4195/',
    name: 'Linkedin',
    icon: <SiLinkedin />,
  },
  {
    url: ' https://github.com/F-KZ ',
    name: 'Github',
    icon: <SiGithub />,
  },
  {
    url: `mailto:${EMAIL}`,
    name: 'Mail',
    icon: <SiMaildotru />,
  }
];
