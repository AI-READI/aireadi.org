import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';

import UnstyledLink from '@/components/links/UnstyledLink';

const goals = [
  {
    label: 'Project-Wide Milestones',
    href: 'goals/project-wide-milestones',
    subLinks: [
      {
        href: 'goals/project-wide-milestones/multidisciplinary-team-science',
        title: 'Multidisciplinary Team Science',
      },
      {
        href: 'goals/project-wide-milestones/advisory-council',
        title: 'Advisory Council',
      },
      {
        title: 'American Indian Engagement',
        href: 'goals/project-wide-milestones/american-indian-engagement',
      },
      {
        title: 'Project Dissemination',
        href: 'goals/project-wide-milestones/project-dissemination',
      },
    ],
  },
  {
    label: 'Data Collection',
    href: 'goals/data-collection',
    subLinks: [
      {
        title: 'Facilitating Diversity of Recruitment',
        href: 'goals/data-collection/facilitating-diversity-of-recruitment',
      },
      {
        title: 'Clinical Data Collection and Biorepository',
        href: 'goals/data-collection/clinical-data-collection-and-biorepository',
      },
      {
        title: 'EHR Extraction',
        href: 'goals/data-collection/ehr-extraction',
      },
      {
        title:
          'Tools for ethically sourced and managed, FAIR, and AI-ready datasets',
        href: 'goals/data-collection/tools-for-ethically-sourced-and-managed-fair-and-ai-ready-datasets',
      },
    ],
  },
];

const links = [
  // {
  //   href: '/study',
  //   title: 'Study',
  // },
  // {
  //   href: '',
  //   title: 'Modules',
  //   sublinks: [
  //     { href: '/modules/data', title: 'Data Acquisition' },
  //     {
  //       href: '/modules/ethics',
  //       title: 'Ethical and Trustworthy Artificial Intelligence',
  //     },
  //     {
  //       href: '/modules/pedp',
  //       title: 'Plan for Enhancing Diverse Perspectives',
  //     },
  //     { href: '/modules/skills', title: 'Skills and Workforce Development' },
  //     { href: '/modules/standards', title: 'Standards' },
  //     { href: '/modules/teaming', title: 'Teaming' },
  //     { href: '/modules/tools', title: 'Tools' },
  //   ],
  // },
  {
    href: '/team',
    title: 'Team',
  },
  // {
  //   href: '/data',
  //   title: 'Data',
  // },
  {
    href: '/publications',
    title: 'Publications',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/contact',
    title: 'Contact Us',
  },
];

const mobileMenuLinks = [
  {
    href: '',
    title: 'Modules',
    subLinks: [
      { href: '/modules/data', title: 'Data Acquisition' },
      {
        href: '/modules/ethics',
        title: 'Ethical and Trustworthy Artificial Intelligence',
      },
      {
        href: '/modules/pedp',
        title: 'Plan for Enhancing Diverse Perspectives',
      },
      { href: '/modules/skills', title: 'Skills and Workforce Development' },
      { href: '/modules/standards', title: 'Standards' },
      { href: '/modules/teaming', title: 'Teaming' },
      { href: '/modules/tools', title: 'Tools' },
    ],
  },
  {
    href: '/team',
    title: 'Team',
  },
  {
    href: '/publications',
    title: 'Publications',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/contact',
    title: 'Contact Us',
  },
];

interface Props {
  link: string;
  children: React.ReactNode;
}

const ConditionalWrapper: React.FC<Props> = ({ link, children }) =>
  link === '' ? (
    <>{children}</>
  ) : (
    <Link href={link} passHref>
      {children}
    </Link>
  );

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  return (
    <header className='sticky top-0 z-10 border-b bg-white'>
      <div className='relative mx-auto flex h-14 max-w-screen-xl items-center justify-between'>
        <UnstyledLink
          href='/'
          className='pl-3 text-lg font-bold transition-all hover:text-sky-500'
        >
          {/* <FcBiotech size={30} /> */}
          AI-READI
        </UnstyledLink>

        <nav>
          <div className='hidden space-x-1 md:flex'>
            {links.map((link, index) => (
              <Menu key={index}>
                <ConditionalWrapper link={link.href}>
                  <MenuButton
                    bg='transparent'
                    as={Button}
                    rightIcon={
                      link.groupLinks ? <ChevronDownIcon /> : undefined
                    }
                    className='!flex !items-center !px-2 !py-1'
                  >
                    <span className='text-sm lg:text-base'>{link.title}</span>
                  </MenuButton>
                </ConditionalWrapper>

                {link.groupLinks && (
                  <MenuList className='transition-all'>
                    <Accordion
                      allowToggle
                      allowMultiple
                      defaultIndex={link.groupLinks.map((_item, index) => {
                        return index;
                      })}
                    >
                      {link.groupLinks.map((groupLink) => (
                        <AccordionItem key={groupLink.label}>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              {groupLink.label}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            {groupLink.subLinks.map((sublink) => (
                              <Link
                                key={sublink.href}
                                href={sublink.href}
                                passHref
                              >
                                <MenuItem>{sublink.title}</MenuItem>
                              </Link>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </MenuList>
                )}
              </Menu>
            ))}
          </div>

          <div className='mr-2 md:hidden'>
            <IconButton
              aria-label='Open Menu'
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />
          </div>

          <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <div className='pl-3 text-lg font-bold '>AI-READI</div>
              </DrawerHeader>

              <DrawerBody className='!pb-0'>
                <Accordion allowToggle={true}>
                  {mobileMenuLinks.map((link) => (
                    <AccordionItem key={link.title}>
                      <Link href={link.href} passHref>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              {link.title}
                            </Box>

                            {link.subLinks && <AccordionIcon />}
                          </AccordionButton>
                        </h2>
                      </Link>
                      {link.subLinks && (
                        <AccordionPanel pb={4}>
                          {link.subLinks.map((sublink) => (
                            <Link
                              href={sublink.href}
                              key={sublink.href}
                              passHref
                            >
                              <h3>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    {sublink.title}
                                  </Box>
                                </AccordionButton>
                              </h3>
                            </Link>
                          ))}
                        </AccordionPanel>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
    </header>
  );
}
