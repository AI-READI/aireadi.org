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

const links = [
  // {
  //   href: '/study',
  //   title: 'Study',
  // },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '',
    title: 'Modules',
    sublinks: [
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
                <div className='pl-3 text-lg font-bold '>AI-READI</div>
              </DrawerHeader>

              <DrawerBody className='!pb-0'>
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
