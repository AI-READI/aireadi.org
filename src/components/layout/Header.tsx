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
import { FcBiotech } from 'react-icons/fc';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', title: 'Home' },
  {
    href: '',
    title: 'Modules',
    sublinks: [
      { href: '/modules/ethics', title: 'Ethics' },
      { href: '/modules/teaming', title: 'Teaming' },
      { href: '/modules/standards', title: 'Standards' },
      { href: '/modules/tools', title: 'Tools' },
      { href: '/modules/data', title: 'Data Acquisition' },
      { href: '/modules/skills', title: 'Skills and Workforce Development' },
      {
        href: '/modules/pedp',
        title: 'Plan for Enhancing Diverse Perspectives',
      },
    ],
  },
  {
    href: '/team',
    title: 'Team',
  },
  // {
  //   href: '/study',
  //   title: 'Study',
  // },
  // {
  //   href: '/data',
  //   title: 'Data',
  // },
  {
    href: '/publications',
    title: 'Publications',
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
    <header className='sticky top-0 z-10 bg-white'>
      <div className='relative mx-auto flex h-14 max-w-screen-xl items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <FcBiotech size={30} />
        </UnstyledLink>

        <nav>
          <div className='hidden space-x-1 md:flex'>
            {links.map((link) => (
              <Menu key={link.href}>
                <ConditionalWrapper link={link.href}>
                  <MenuButton
                    bg='transparent'
                    as={Button}
                    rightIcon={link.sublinks ? <ChevronDownIcon /> : null}
                    className='!flex !items-center !px-2 !py-1'
                  >
                    <span className='text-sm lg:text-base'>{link.title}</span>
                  </MenuButton>
                </ConditionalWrapper>

                {link.sublinks && (
                  <MenuList>
                    {link.sublinks.map((sublink) => (
                      <Link key={sublink.href} href={sublink.href} passHref>
                        <MenuItem>{sublink.title}</MenuItem>
                      </Link>
                    ))}
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
                <FcBiotech size={30} />
              </DrawerHeader>

              <DrawerBody>
                <Accordion allowToggle={true}>
                  {links.map((link) => (
                    <AccordionItem key={link.title}>
                      <Link href={link.href} passHref>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              {link.title}
                            </Box>

                            {link.sublinks && <AccordionIcon />}
                          </AccordionButton>
                        </h2>
                      </Link>
                      {link.sublinks && (
                        <AccordionPanel pb={4}>
                          {link.sublinks.map((sublink) => (
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
