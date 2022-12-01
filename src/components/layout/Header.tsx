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
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { FcBiotech } from 'react-icons/fc';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  {
    href: '',
    label: 'Modules',
    sublinks: [
      { href: '/modules/ethics', label: 'Ethics' },
      { href: '/modules/teaming', label: 'Teaming' },
      { href: '/modules/standards', label: 'Standards' },
      { href: '/modules/tools', label: 'Tools' },
      { href: '/modules/data', label: 'Data' },
      { href: '/modules/skills', label: 'Skills' },
    ],
  },
  {
    href: '/team',
    label: 'Team',
  },
  {
    href: '/study',
    label: 'Study',
  },
  {
    href: '/mentorship',
    label: 'Mentorship Program',
  },
  {
    href: '/data',
    label: 'Data',
  },
  {
    href: '/resources',
    label: 'Resources',
  },
  {
    href: '/publications',
    label: 'Publications',
  },
  {
    href: '/contact',
    label: 'Contact Us',
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
                    <span className='text-sm lg:text-base'>{link.label}</span>
                  </MenuButton>
                </ConditionalWrapper>

                {link.sublinks && (
                  <MenuList>
                    {link.sublinks.map((sublink) => (
                      <Link key={sublink.href} href={sublink.href} passHref>
                        <MenuItem>{sublink.label}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                )}
              </Menu>
            ))}
          </div>

          <div className='flex space-x-2 md:hidden '>
            <IconButton
              aria-label='Open Menu'
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />

            <Menu>
              <MenuButton as={Button} colorScheme='pink'>
                <HamburgerIcon />
              </MenuButton>

              <MenuList>
                {links.map((link) => (
                  <Fragment key={link.href}>
                    <MenuGroup title={link.sublinks ? link.label : ''}>
                      <Link href={link.href} passHref>
                        <MenuItem>{link.label}</MenuItem>
                      </Link>

                      {link.sublinks &&
                        link.sublinks.map((sublink) => (
                          <LinkBox key={sublink.href}>
                            <LinkOverlay
                              href={sublink.href ? sublink.href : undefined}
                            >
                              <MenuItem>{sublink.label}</MenuItem>
                            </LinkOverlay>
                          </LinkBox>
                        ))}
                    </MenuGroup>
                    <MenuDivider />
                  </Fragment>
                ))}
              </MenuList>
            </Menu>
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
                    <AccordionItem key={link.label}>
                      <Link href={link.href} passHref>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              {link.label}
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
                                    {sublink.label}
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
