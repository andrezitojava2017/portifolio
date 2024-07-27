import { FaHtml5, FaGitAlt } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill } from 'react-icons/ri';
import { RiSupabaseFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiFirebase } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';

export const listaProjetos = [
  {
    id: 1,
    titulo: 'Prestador Web',
    descricao:
      'Sistema Web para controle de prestadores e geração de guias de INSS para terceiros',
    href: 'https://github.com/andrezitojava2017/prestador-web.git',
    tech: [
      {
        icon: FaHtml5,
        size: 50,
        color: '#E65100',
      },
      {
        icon: RiNextjsFill,
        size: 50,
        color: 'cyan',
      },
      {
        icon: BiLogoTypescript,
        size: 50,
        color: '#0D61A9',
      },
      {
        icon: RiJavascriptFill,
        size: 50,
        color: 'yellow',
      },
      {
        icon: RiSupabaseFill,
        size: 48,
        color: 'green',
      },
      {
        icon: FaReact,
        size: 48,
        color: 'cyan',
      },
    ],
  },

  {
    id: 2,
    titulo: 'App Paycheck',
    descricao: 'Aplicativo Android para geração e consulta de holerites',
    href: 'https://play.google.com/store/apps/details?id=com.js.mobile.paycheck',
    tech: [
      {
        icon: FaReact,
        size: 48,
        color: 'cyan',
      },
      {
        icon: RiJavascriptFill,
        size: 50,
        color: 'yellow',
      },
      {
        icon: SiFirebase,
        size: 45,
        color: 'yellow',
      },
      {
        icon: IoLogoNodejs,
        size: 45,
        color: 'green',
      },
      {
        icon: SiExpress,
        size: 45,
        color: 'green',
      },
      {
        icon: FaGitAlt,
        size: 45,
        color: '#F4511E',
      },
    ],
  },

  {
    id: 3,
    titulo: 'App Cleanserviços',
    descricao:
      'Aplicativo Android para busca de prestadores de serviços, ao qual disponiblizam em determinada área',
    href: 'https://play.google.com/store/apps/details?id=com.cleanservicos',
    tech: [
      {
        icon: FaReact,
        size: 48,
        color: 'cyan',
      },
      {
        icon: RiJavascriptFill,
        size: 50,
        color: 'yellow',
      },
      {
        icon: SiFirebase,
        size: 45,
        color: 'yellow',
      },

      {
        icon: FaGitAlt,
        size: 45,
        color: '#F4511E',
      },
    ],
  },

  {
    id: 4,
    titulo: 'Gestão Agro',
    descricao:
      'Sistema Web para gerenciamento e controle de estoque de insumos agricolas',
    href: 'https://gestao-agro.vercel.app/',
    tech: [
      {
        icon: FaHtml5,
        size: 50,
        color: '#E65100',
      },
      {
        icon: BiLogoTypescript,
        size: 50,
        color: '#0D61A9',
      },
      {
        icon: RiJavascriptFill,
        size: 50,
        color: 'yellow',
      },
      {
        icon: RiSupabaseFill,
        size: 48,
        color: 'green',
      },
      {
        icon: FaReact,
        size: 48,
        color: 'cyan',
      },
    ],
  },
  {
    id: 5,
    titulo: 'Lista de países',
    descricao:
      'Site que exibe uma lista de países, consumindo da API REST COUNTRIES',
    href: 'https://countries-virid-phi.vercel.app/',
    tech: [
      {
        icon: RiNextjsFill,
        size: 50,
        color: 'cyan',
      },
      {
        icon: FaHtml5,
        size: 50,
        color: '#E65100',
      },
      {
        icon: BiLogoTypescript,
        size: 50,
        color: '#0D61A9',
      },
      {
        icon: RiJavascriptFill,
        size: 50,
        color: 'yellow',
      },
      {
        icon: FaReact,
        size: 48,
        color: 'cyan',
      },
    ],
  },
  {
    id: 6,
    titulo: 'Tattoo Shop',
    descricao: 'Web site da Tattoo Shop, desafio aplicado da pagina codante.io',
    href: 'https://tattoo-shop-three.vercel.app/',
    tech: [
      {
        icon: RiNextjsFill,
        size: 50,
        color: 'cyan',
      },
      {
        icon: FaHtml5,
        size: 50,
        color: '#E65100',
      },
      {
        icon: BiLogoTypescript,
        size: 50,
        color: '#0D61A9',
      },
      {
        icon: RiJavascriptFill,
        size: 50,
        color: 'yellow',
      },
      {
        icon: FaReact,
        size: 48,
        color: 'cyan',
      },
    ],
  },
];
