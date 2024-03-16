/* eslint-disable @next/next/no-img-element */
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const goals = [
  {
    name: 'Project Wide Milestones',
    description: 'A high-level overview of the project goals and objectives.',
    id: 'project-wide-milestones',
    icon: 'ic:baseline-bar-chart',
  },
  {
    name: 'Data Collection',
    description: 'Policy and procedures for data collection and management.',
    id: 'data-collection',
    icon: 'ic:baseline-chat',
  },
  {
    name: 'Considerations for Releasing Data',
    description: 'Guidelines for releasing data to the public.',
    id: 'considerations-for-releasing-data',
    icon: 'ic:baseline-lock',
  },
  {
    name: 'Capacity Building Initiatives',
    description: 'Training and resources for capacity building.',
    id: 'capacity-building-initiatives',
    icon: 'ic:baseline-extension',
  },
];

const projectWideMilestones = [
  {
    name: 'Multidisciplinary Team Science',
    description: 'Apply multidisciplinary team science',
    href: '/goals/project-wide-milestones/multidisciplinary-team-science',
    id: 'project-wide-milestones:multidisciplinary-team-science',
    icon: 'ic:baseline-bar-chart',
  },
  {
    name: 'Advisory Council',
    description: 'Establish an advisory council',
    href: '/goals/project-wide-milestones/advisory-council',
    id: 'project-wide-milestones:advisory-council',
    icon: 'ic:baseline-chat',
  },
  {
    name: 'American Indian Engagement',
    description: 'Engage American Indian communities',
    href: '/goals/project-wide-milestones/american-indian-engagement',
    id: 'project-wide-milestones:american-indian-engagement',
    icon: 'ic:baseline-lock',
  },
  {
    name: 'Project Dissemination: Data and Other Outcomes',
    description: 'Disseminate data and other outcomes',
    href: '/goals/project-wide-milestones/project-dissemination-data-and-other-outcomes',
    id: 'project-wide-milestones:project-dissemination-data-and-other-outcomes',
    icon: 'ic:baseline-extension',
  },
];

const dataCollection = [
  {
    name: 'Facilitating Diversity of Recruitment',
    description: 'Addressing diversity in recruitment and data collection',
    href: '/goals/data-collection/facilitating-diversity-of-recruitment',
    id: 'data-collection:facilitating-diversity-of-recruitment',
    icon: 'ic:baseline-bar-chart',
  },
  {
    name: 'Clinical Data Collection and Biorepository',
    description: 'Standardize clinical data collection and biorepository',
    href: '/goals/data-collection/clinical-data-collection-and-biorepository',
    id: 'data-collection:clinical-data-collection-and-biorepository',
    icon: 'ic:baseline-chat',
  },
  {
    name: 'EHR Extraction',
    description: 'Extract data from electronic health records',
    href: '/goals/data-collection/ehr-extraction',
    id: 'data-collection:ehr-extraction',
    icon: 'ic:baseline-lock',
  },
  {
    name: 'Tools for ethically sourced and managed, FAIR, and AI-ready datasets',
    description:
      'Develop tools for ethically sourced and managed, FAIR, and AI-ready datasets',
    href: '/goals/data-collection/tools-for-ethically-sourced-and-managed-fair-and-ai-ready-datasets',
    id: 'data-collection:tools-for-ethically-sourced-and-managed-fair-and-ai-ready-datasets',
    icon: 'ic:baseline-extension',
  },
];

const considerationsForReleasingData = [
  {
    name: 'Data Standardization and Harmonization',
    description: 'Standardize and harmonize data',
    href: '/goals/considerations-for-releasing-data/data-standardization-and-harmonization',
    id: 'considerations-for-releasing-data:data-standardization-and-harmonization',
    icon: 'ic:baseline-bar-chart',
  },
  {
    name: 'Public Data: License and Training',
    description: 'Licensing and training for public data',
    href: '/goals/considerations-for-releasing-data/public-data-license-and-training',
    id: 'considerations-for-releasing-data:public-data-license-and-training',
    icon: 'ic:baseline-chat',
  },
  {
    name: 'Controlled Data: Data Use Agreement',
    description: 'Data use agreement for controlled data',
    href: '/goals/considerations-for-releasing-data/controlled-data-data-use-agreement',
    id: 'considerations-for-releasing-data:controlled-data-data-use-agreement',
    icon: 'ic:baseline-lock',
  },
];

const capacityBuildingInitiatives = [
  {
    name: 'Monthly Speaker Series',
    description: 'Monthly speaker series',
    href: '/goals/capacity-building-initiatives/monthly-speaker-series',
    id: 'capacity-building-initiatives:monthly-speaker-series',
    icon: 'ic:baseline-bar-chart',
  },
  {
    name: 'Educational Materials for Participants and Data Users',
    description: 'Create educational materials for participants and data users',
    href: '/goals/capacity-building-initiatives/educational-materials-for-participants-and-data-users',
    id: 'capacity-building-initiatives:educational-materials-for-participants-and-data-users',
    icon: 'ic:baseline-chat',
  },
  {
    name: 'Internship Program',
    description: 'Develop an internship program',
    href: '/goals/capacity-building-initiatives/internship-program',
    id: 'capacity-building-initiatives:internship-program',
    icon: 'ic:baseline-lock',
  },
];

const regularLinks = [
  {
    href: '/team',
    title: 'Team',
  },
  {
    href: '/events',
    title: 'Events',
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

type GoalItem = {
  name: string;
  description: string;
  href: string;
  icon: string;
};

type GoalItemsProps = {
  items: GoalItem[];
};

const GoalItems: React.FC<GoalItemsProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className='group relative flex items-start gap-x-2 rounded-lg p-4 text-sm transition-all hover:bg-sky-100'
        >
          <div className='flex h-5 w-5 flex-none items-center justify-center rounded-lg  transition-all group-hover:bg-sky-50'>
            <Icon icon={item.icon} />
          </div>
          <div className='flex-auto'>
            <div className='block text-left font-semibold text-gray-900'>
              {item.name}
            </div>
            <p className='mt-1 text-left text-gray-600'>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [selectedGoal, setSelectedGoal] = useState('project-wide-milestones');

  const handleGoalChange = (goal: string) => {
    setSelectedGoal(goal);
  };

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <UnstyledLink
            href='/'
            className='pl-3 text-lg font-bold transition-all hover:text-sky-500'
          >
            AI-READI
          </UnstyledLink>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Icon icon='ic:round-menu' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-6'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 font-semibold text-gray-800 transition-all hover:text-blue-400'>
              Goals
              <Icon
                icon='ic:round-keyboard-arrow-down'
                width={20}
                height={20}
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl  bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='grid grid-cols-8 divide-x divide-gray-900/5'>
                  <div className='col-span-4 bg-sky-50 p-4'>
                    {goals.map((item) => (
                      <button
                        onClick={() => handleGoalChange(item.id)}
                        key={item.name}
                        className={clsx(
                          'group relative my-2 flex items-start gap-x-6 rounded-lg p-4 text-sm transition-all hover:bg-sky-200',
                          selectedGoal === item.id && '!bg-sky-300'
                        )}
                      >
                        <div
                          className={clsx(
                            'flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white transition-all group-hover:bg-sky-100',
                            selectedGoal === item.id && '!bg-sky-200'
                          )}
                        >
                          <Icon icon={item.icon} />
                        </div>
                        <div className='flex-auto'>
                          <div className='block text-left font-semibold text-gray-900'>
                            {item.name}
                          </div>
                          <p className='mt-1 text-left text-gray-600'>
                            {item.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className='col-span-4 px-4 py-8'>
                    {selectedGoal === 'project-wide-milestones' && (
                      <GoalItems items={projectWideMilestones} />
                    )}
                    {selectedGoal === 'data-collection' && (
                      <GoalItems items={dataCollection} />
                    )}
                    {selectedGoal === 'considerations-for-releasing-data' && (
                      <GoalItems items={considerationsForReleasingData} />
                    )}
                    {selectedGoal === 'capacity-building-initiatives' && (
                      <GoalItems items={capacityBuildingInitiatives} />
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {regularLinks.map((link, index) => (
            <UnstyledLink
              key={index}
              href={link.href}
              className='font-semibold text-gray-800 transition-all hover:text-blue-400'
            >
              {link.title}
            </UnstyledLink>
          ))}
        </Popover.Group>
      </nav>

      {/* Mobile Menu */}

      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <UnstyledLink
              href='/'
              className='-m-1.5 p-1.5 text-lg font-bold transition-all hover:text-sky-500 '
            >
              AI-READI
            </UnstyledLink>

            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <Icon icon='ic:round-close' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Goals
                        <Icon icon='ic:round-keyboard-arrow-down' />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        <Disclosure as='div' className='mx-1'>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-5 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                Project Wide Milestones
                                <Icon icon='ic:round-keyboard-arrow-down' />
                              </Disclosure.Button>
                              <Disclosure.Panel className='mt-2 space-y-2'>
                                {[...projectWideMilestones].map((item) => (
                                  <Disclosure.Button
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className='flex gap-x-2 rounded-lg py-2 pl-10 pr-3  text-sm font-semibold text-gray-900 hover:bg-gray-50'
                                  >
                                    <div className='flex h-5 w-5 flex-none items-center justify-center rounded-lg  transition-all group-hover:bg-sky-50'>
                                      <Icon icon={item.icon} />
                                    </div>
                                    <div className='flex-auto'>
                                      <div className='block text-left font-semibold text-gray-900'>
                                        {item.name}
                                      </div>
                                      <p className='mt-1 text-left text-gray-600'>
                                        {item.description}
                                      </p>
                                    </div>
                                  </Disclosure.Button>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        <Disclosure as='div' className='mx-1'>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-5 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                Data Collection
                                <Icon icon='ic:round-keyboard-arrow-down' />
                              </Disclosure.Button>
                              <Disclosure.Panel className='mt-2 space-y-2'>
                                {[...dataCollection].map((item) => (
                                  <Disclosure.Button
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className='flex gap-x-2 rounded-lg py-2 pl-10 pr-3  text-sm font-semibold text-gray-900 hover:bg-gray-50'
                                  >
                                    <div className='flex h-5 w-5 flex-none items-center justify-center rounded-lg  transition-all group-hover:bg-sky-50'>
                                      <Icon icon={item.icon} />
                                    </div>
                                    <div className='flex-auto'>
                                      <div className='block text-left font-semibold text-gray-900'>
                                        {item.name}
                                      </div>
                                      <p className='mt-1 text-left text-gray-600'>
                                        {item.description}
                                      </p>
                                    </div>
                                  </Disclosure.Button>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        <Disclosure as='div' className='mx-1'>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-5 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                Considerations for Releasing Data
                                <Icon icon='ic:round-keyboard-arrow-down' />
                              </Disclosure.Button>
                              <Disclosure.Panel className='mt-2 space-y-2'>
                                {[...considerationsForReleasingData].map(
                                  (item) => (
                                    <Disclosure.Button
                                      key={item.name}
                                      as='a'
                                      href={item.href}
                                      className='flex gap-x-2 rounded-lg py-2 pl-10 pr-3  text-sm font-semibold text-gray-900 hover:bg-gray-50'
                                    >
                                      <div className='flex h-5 w-5 flex-none items-center justify-center rounded-lg  transition-all group-hover:bg-sky-50'>
                                        <Icon icon={item.icon} />
                                      </div>
                                      <div className='flex-auto'>
                                        <div className='block text-left font-semibold text-gray-900'>
                                          {item.name}
                                        </div>
                                        <p className='mt-1 text-left text-gray-600'>
                                          {item.description}
                                        </p>
                                      </div>
                                    </Disclosure.Button>
                                  )
                                )}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        <Disclosure as='div' className='mx-1'>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-5 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                Capacity Building Initiatives
                                <Icon icon='ic:round-keyboard-arrow-down' />
                              </Disclosure.Button>
                              <Disclosure.Panel className='mt-2 space-y-2'>
                                {[...capacityBuildingInitiatives].map(
                                  (item) => (
                                    <Disclosure.Button
                                      key={item.name}
                                      as='a'
                                      href={item.href}
                                      className='flex gap-x-2 rounded-lg py-2 pl-10 pr-3  text-sm font-semibold text-gray-900 hover:bg-gray-50'
                                    >
                                      <div className='flex h-5 w-5 flex-none items-center justify-center rounded-lg  transition-all group-hover:bg-sky-50'>
                                        <Icon icon={item.icon} />
                                      </div>
                                      <div className='flex-auto'>
                                        <div className='block text-left font-semibold text-gray-900'>
                                          {item.name}
                                        </div>
                                        <p className='mt-1 text-left text-gray-600'>
                                          {item.description}
                                        </p>
                                      </div>
                                    </Disclosure.Button>
                                  )
                                )}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {regularLinks.map((link, index) => (
                  <UnstyledLink
                    key={index}
                    href={link.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {link.title}
                  </UnstyledLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
