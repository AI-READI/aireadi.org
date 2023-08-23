import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const SkillsModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Skills & Workforce Development' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Skills & Workforce Development'
          image='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          tagline='Developing a diverse AI/ML-biomedical research workforce.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 py-8 px-4 text-left md:grid-cols-2 lg:py-16 lg:px-6'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Skills & Workforce Development Module
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The overall objective of the AI-READI Skills and Workforce
                Development Module is to develop and deploy training and career
                development activities for individuals from diverse backgrounds
                who will effectively contribute to translational AI research,
                particularly in the biomedical/clinical domain.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                To achieve this objective, our module is engaged in the
                following aims:
              </p>
              <ul className='mb-3 list-inside list-disc text-lg font-normal text-gray-700'>
                <li>
                  Design and implement a structured, yearlong mentored research
                  internship program to facilitate exposure to skills in AI and
                  data science for post-baccalaureate students, medical
                  students, pre-doctoral students, postdoctoral fellows, and
                  other health care professionals wanting to gain AI expertise.
                </li>
                <li>
                  Deploy training and skills development activities for
                  researchers at all levels using the flagship datasets,
                  spanning ethics, tools, and standards.
                </li>
                <li>
                  Increase the range of perspectives by creating a diverse
                  research team and encouraging broad exposure to AI-READI
                  dataset from a variety of individuals.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='bg-sky-50'>
          <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
            <div className='mx-auto mb-6 max-w-screen-sm text-center lg:mb-8'>
              <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Resources
              </h2>
            </div>

            <ul>
              {Resources.map((resource) => (
                <li
                  className='mb-8 flex items-start space-x-4'
                  key={resource.title}
                >
                  <ResourcesItemIcon type={resource.type} />
                  <div className='pt-2'>
                    <UnstyledLink
                      href={resource.link}
                      className='flex items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
                    >
                      <p className='text-xl font-medium'>{resource.title}</p>
                    </UnstyledLink>
                    <p className='pt-1 text-lg font-normal text-gray-700'>
                      {resource.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='bg-white'>
          <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
            <div className='mx-auto mb-6 max-w-screen-sm text-center lg:mb-8'>
              <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Intern Bootcamp
              </h2>
            </div>
            <div>
              Intern Bootcamp redefines internships by offering a dynamic blend
              of hands-on projects, and mentorship. This immersive program
              focuses on tangible outcomes, empowering interns to enhance their
              technical skills. Beyond technical skills, the bootcamp hones
              communication and teamwork, shaping well-rounded professionals
              poised for success.
            </div>
            <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
              <ResponsiveMasonry
                columnsCountBreakPoints={{
                  600: 1,
                  900: 2,
                  550: 3,
                  650: 4,
                  750: 5,
                }}
              >
                <Masonry>
                  <img
                    alt=''
                    className=' m-3 max-h-[500px] w-auto rounded-lg'
                    src='https://d3da1k6uo8tbjf.cloudfront.net/12dabfa6-4117-11ee-81b3-0e12be5f970b?response-content-disposition=inline%3B%20filename%3D%22IMG_2082.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_2082.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS5PME4CTY5HJXGX6%2F20230822%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230822T234723Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=450760a77fadebcb1f24e9d731256533155878a356b399917d2d75064d628ba5&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM2RhMWs2dW84dGJqZi5jbG91ZGZyb250Lm5ldC8xMmRhYmZhNi00MTE3LTExZWUtODFiMy0wZTEyYmU1Zjk3MGI~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IlMjBmaWxlbmFtZSUzRCUyMklNR18yMDgyLmpwZWclMjIlM0IlMjBmaWxlbmFtZSUyQSUzRFVURi04JTI3JTI3SU1HXzIwODIuanBlZ1x1MDAyNnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmpwZWdcdTAwMjZYLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1Nlx1MDAyNlgtQW16LUNyZWRlbnRpYWw9QUtJQVM1UE1FNENUWTVISlhHWDYlMkYyMDIzMDgyMiUyRnVzLWVhc3QtMiUyRnMzJTJGYXdzNF9yZXF1ZXN0XHUwMDI2WC1BbXotRGF0ZT0yMDIzMDgyMlQyMzQ3MjNaXHUwMDI2WC1BbXotRXhwaXJlcz04NjQwMFx1MDAyNlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdFx1MDAyNlgtQW16LVNpZ25hdHVyZT00NTA3NjBhNzdmYWRlYmNiMWYyNGU5ZDczMTI1NjUzMzE1NTg3OGEzNTZiMzk5OTE3ZDJkNzUwNjRkNjI4YmE1IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjkyODM0NDQzfX19XX0_&Signature=FFd0Hl637PnRvnVeUdow00xvV~Cmiu1ZZoBn8whL2qJehMfai7OCBBLHvrVDLKEiyAXRm0GM5-E3-YotJRyIXYyJw--LbRqNvx18ltlj9tRD00pfqBO0A2VFZ8LcCqwBIg-8PUQ-LM4rJTYI0Pdo0CajZBrbFLjr2QlhcFszZa2~XHhKPXw1m8xtTeqe-N3W0vDqpDLQAKjrnP~IiforHA4c4ZTFK6kQUMNmVK0LkHGymh7ZyRNqsjTcgmvCzR2~q1IwKVJb9hVas2g9FZ9O7hdvFRWLSZzpgIfAhErxcCn0evW~G3wRkJ7h4OLomx9SnQ5~glYjMSx2TwLTpvw5YA__&Key-Pair-Id=K2BMZZDBFKKL41'
                  />
                  <img
                    alt=''
                    className=' m-3 max-h-[500px] w-auto rounded-lg'
                    src='https://d3da1k6uo8tbjf.cloudfront.net/3de505b6-4113-11ee-85ef-f28505eae2ff?response-content-disposition=inline%3B%20filename%3D%22IMG_2069.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_2069.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS5PME4CTY5HJXGX6%2F20230823%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230823T005849Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e9b02dde78252b77d75811ee5f57d4a35ea401dafabb0b1a157d9563715ada21&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM2RhMWs2dW84dGJqZi5jbG91ZGZyb250Lm5ldC8zZGU1MDViNi00MTEzLTExZWUtODVlZi1mMjg1MDVlYWUyZmY~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IlMjBmaWxlbmFtZSUzRCUyMklNR18yMDY5LmpwZWclMjIlM0IlMjBmaWxlbmFtZSUyQSUzRFVURi04JTI3JTI3SU1HXzIwNjkuanBlZ1x1MDAyNnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmpwZWdcdTAwMjZYLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1Nlx1MDAyNlgtQW16LUNyZWRlbnRpYWw9QUtJQVM1UE1FNENUWTVISlhHWDYlMkYyMDIzMDgyMyUyRnVzLWVhc3QtMiUyRnMzJTJGYXdzNF9yZXF1ZXN0XHUwMDI2WC1BbXotRGF0ZT0yMDIzMDgyM1QwMDU4NDlaXHUwMDI2WC1BbXotRXhwaXJlcz04NjQwMFx1MDAyNlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdFx1MDAyNlgtQW16LVNpZ25hdHVyZT1lOWIwMmRkZTc4MjUyYjc3ZDc1ODExZWU1ZjU3ZDRhMzVlYTQwMWRhZmFiYjBiMWExNTdkOTU2MzcxNWFkYTIxIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjkyODM4NzI5fX19XX0_&Signature=icj6sUrk76RV5qvOOo0dxFS2cfaOUjUbpeQjIi2s7Wxv-jrJAnwRyNHpkj39fhVJLd2avTr3ELpNDEYn0uCqzt-0WFAx8J0HMCbsre5l56NbMCcZRGh-aSnNSa4hYI0PArNEBQ2miDv1AtqTQ8CHFYic4IV~thK8d34snOd7cSZq~Sz2G0twcs0SBX6ZRgfsziU~vxDHKocAH-Ks7LdRZnlyXdBD0YwlEw~8dsFYCggP8WiXoXfggHizw-lRk1iXY~VqlXrU9vHUKnm7UJH4WtuKCUo100s57mePQtXjrfxg~f0ucLh5BtIkyrGlONuw67WLdDwCOvtA7yez24dOLg__&Key-Pair-Id=K2BMZZDBFKKL41'
                  />
                  <img
                    alt=''
                    className='m-3 max-h-[500px] w-auto  rounded-lg'
                    src='https://d3da1k6uo8tbjf.cloudfront.net/40cc3ede-4113-11ee-8b0d-1ab7a0b123c9?response-content-disposition=inline%3B%20filename%3D%22IMG_2056.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_2056.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS5PME4CTY5HJXGX6%2F20230822%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230822T204358Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=76c6269d2681a114572ef5da0790288a10eede025fbad8d7577751b564e99596&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM2RhMWs2dW84dGJqZi5jbG91ZGZyb250Lm5ldC80MGNjM2VkZS00MTEzLTExZWUtOGIwZC0xYWI3YTBiMTIzYzk~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IlMjBmaWxlbmFtZSUzRCUyMklNR18yMDU2LmpwZWclMjIlM0IlMjBmaWxlbmFtZSUyQSUzRFVURi04JTI3JTI3SU1HXzIwNTYuanBlZ1x1MDAyNnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmpwZWdcdTAwMjZYLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1Nlx1MDAyNlgtQW16LUNyZWRlbnRpYWw9QUtJQVM1UE1FNENUWTVISlhHWDYlMkYyMDIzMDgyMiUyRnVzLWVhc3QtMiUyRnMzJTJGYXdzNF9yZXF1ZXN0XHUwMDI2WC1BbXotRGF0ZT0yMDIzMDgyMlQyMDQzNThaXHUwMDI2WC1BbXotRXhwaXJlcz04NjQwMFx1MDAyNlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdFx1MDAyNlgtQW16LVNpZ25hdHVyZT03NmM2MjY5ZDI2ODFhMTE0NTcyZWY1ZGEwNzkwMjg4YTEwZWVkZTAyNWZiYWQ4ZDc1Nzc3NTFiNTY0ZTk5NTk2IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjkyODIzNDM4fX19XX0_&Signature=Dd4lxoEI1-3W56Nsl~Dk5VPaV5ldNRZ2V20X4KlfKv4~KP~8Ma4AcjE156s5Y5ggcsQFGi2CvQtDNNJChVtoqRLOpqOf1IO3H1hk9FHA2JU-rnm9yybLnx08MtAR0l8dKyfVWWCJzYacaydsooqAdFstaDwtWPOuTNDQ93tSWoLi~bxRMs-Yuuo4r0fJFwFNGleWqC0-MqCuv2dxePbw~3iEenwLD89J3iMoYSNWk48rHTD6PhdHmWaVW9efb2-Xbtn1CGQifsE1pDRrpRByRO9cN1WO4-N1-Z9symPUzyxNvbbCHEBvaZK-nQ6ABSYV3Zwjo4tKJRLKqYPK0WyK8A__&Key-Pair-Id=K2BMZZDBFKKL41'
                  />
                  <img
                    alt=''
                    className='m-3 max-h-[500px] w-auto rounded-lg'
                    src='https://d3da1k6uo8tbjf.cloudfront.net/3fa7910c-4113-11ee-abbe-5ad6b39a946a?response-content-disposition=inline%3B%20filename%3D%22IMG_2063.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_2063.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS5PME4CTY5HJXGX6%2F20230823%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230823T010005Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6c0dc22318a46418e6cbcbc7adbad511df3e6ee88d599f64ec0cafd0fa023116&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM2RhMWs2dW84dGJqZi5jbG91ZGZyb250Lm5ldC8zZmE3OTEwYy00MTEzLTExZWUtYWJiZS01YWQ2YjM5YTk0NmE~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IlMjBmaWxlbmFtZSUzRCUyMklNR18yMDYzLmpwZWclMjIlM0IlMjBmaWxlbmFtZSUyQSUzRFVURi04JTI3JTI3SU1HXzIwNjMuanBlZ1x1MDAyNnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmpwZWdcdTAwMjZYLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1Nlx1MDAyNlgtQW16LUNyZWRlbnRpYWw9QUtJQVM1UE1FNENUWTVISlhHWDYlMkYyMDIzMDgyMyUyRnVzLWVhc3QtMiUyRnMzJTJGYXdzNF9yZXF1ZXN0XHUwMDI2WC1BbXotRGF0ZT0yMDIzMDgyM1QwMTAwMDVaXHUwMDI2WC1BbXotRXhwaXJlcz04NjQwMFx1MDAyNlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdFx1MDAyNlgtQW16LVNpZ25hdHVyZT02YzBkYzIyMzE4YTQ2NDE4ZTZjYmNiYzdhZGJhZDUxMWRmM2U2ZWU4OGQ1OTlmNjRlYzBjYWZkMGZhMDIzMTE2IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjkyODM4ODA1fX19XX0_&Signature=gf2bSoY3JRT2Tu3j1T9xOS~agFZiZYvxq2esQpLmnORcpP5QqHRigfBnBdjhnvBxjos8h1WaZda~2KDYpLRGRtqIwsCm7bckoCb-8WrhOM8-A0wE2Q~kJYkA7jeMEj756qaesGZxFTlWSDuZEDkSuyV6QhkvgZf5wYyZdiT-4PLCtPvSkwN11Adty2HnCpho0zTfIBo9rfuPqyzi8ycAin4DD2iiL-bucyNct-xz-~QxvehH5uV14myJC9PoQerdrJNAXAe2R-smJlTiW3axM326hVcfjyFlMKPbwApgAD9NK02S1qVQUPVY2zSkexhgcJ2umhw5xhIEiWhh~AT0mw__&Key-Pair-Id=K2BMZZDBFKKL41'
                  />
                  `{' '}
                  <img
                    alt=''
                    className='m-5 max-h-[500px] w-full rounded-lg '
                    src='https://d3da1k6uo8tbjf.cloudfront.net/10506844-4117-11ee-9763-0e12be5f970b?response-content-disposition=inline%3B%20filename%3D%22IMG_2074.jpeg%22%3B%20filename%2A%3DUTF-8%27%27IMG_2074.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS5PME4CTY5HJXGX6%2F20230823%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230823T010130Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=17ac94e80dc014bb62edc5b0935642f2e2b5f331d77774a6c8b341fd3d3cf18a&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM2RhMWs2dW84dGJqZi5jbG91ZGZyb250Lm5ldC8xMDUwNjg0NC00MTE3LTExZWUtOTc2My0wZTEyYmU1Zjk3MGI~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IlMjBmaWxlbmFtZSUzRCUyMklNR18yMDc0LmpwZWclMjIlM0IlMjBmaWxlbmFtZSUyQSUzRFVURi04JTI3JTI3SU1HXzIwNzQuanBlZ1x1MDAyNnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmpwZWdcdTAwMjZYLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1Nlx1MDAyNlgtQW16LUNyZWRlbnRpYWw9QUtJQVM1UE1FNENUWTVISlhHWDYlMkYyMDIzMDgyMyUyRnVzLWVhc3QtMiUyRnMzJTJGYXdzNF9yZXF1ZXN0XHUwMDI2WC1BbXotRGF0ZT0yMDIzMDgyM1QwMTAxMzBaXHUwMDI2WC1BbXotRXhwaXJlcz04NjQwMFx1MDAyNlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdFx1MDAyNlgtQW16LVNpZ25hdHVyZT0xN2FjOTRlODBkYzAxNGJiNjJlZGM1YjA5MzU2NDJmMmUyYjVmMzMxZDc3Nzc0YTZjOGIzNDFmZDNkM2NmMThhIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjkyODM4ODkwfX19XX0_&Signature=PNdGbkrRGcHHmz3yvQ~yh8ZrkrFDUAijN~LVNf46JEZXJ~0AFS8SsX-i1Ji5vZcWLxQ--Ght4aODH98PYWEQOIJHXWeACsfomXVqPK8wUzjiVdM~5Q44sUBW4X9SuwEOJ7LTpus6HhHodyGUQ5r126hG9temjBGvby9YFutCW3nRhhjsnuR5fvJ8JONaAzjEdDswhsn4n7W2r7DZ5c8ci4k5n2qHrmcV3Ev5n4EtCvByMogq5X5E7ukbfmGXgEX1VpmsJeAj5Ugp7PsPJkteUg9P~O35qjAv3e2E6004XwETZ6qXH4ce4zGiDJfL~RoarqvXmybKODpj0sv~4shw~A__&Key-Pair-Id=K2BMZZDBFKKL41'
                  />
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </section>
        <ModuleMembers Team={TeamMembers} />
      </main>
    </Layout>
  </>
);

const Resources = [
  {
    title: 'AI-READI Internship Program',
    description:
      'One component of AI-READI is the Skills and Workforce Development Module, which includes the development of a yearlong mentored research internship program aimed at diversifying the future workforce at the intersection of data science/AI and the biomedical sciences and clinical research.',
    link: 'https://shileyeye.ucsd.edu/research/ai_readi',
    type: 'website',
  },
];

export const getStaticProps = async () => {
  const TeamMembers = await ModuleMembersFilter('skills');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default SkillsModule;
