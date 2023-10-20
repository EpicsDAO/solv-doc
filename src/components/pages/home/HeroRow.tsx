import Container from '@/components/common/atoms/Container'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import ubuntuLogo from '@/assets/img/logo/projects/Ubuntu.svg'
import linuxLogo from '@/assets/img/logo/projects/Tux.svg'
import solanaLogo from '@/assets/img/logo/projects/SolanaLogoHorizontal.svg'
import { Button } from '@/components/common/atoms/Button'
import clsx from 'clsx'
import siteConfig from '@/config/site'

export default function HomeHeroRow() {
  const { t } = useTranslation()

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-gray-600"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
        <Container className="flex flex-col justify-between gap-8 py-24 md:flex-row lg:py-32">
          <div>
            <h1 className="font-display mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
              {t('home:HeroRow.title')}
            </h1>
            <p className="text-md mt-3 max-w-lg font-normal tracking-tight text-gray-500 dark:text-gray-200 sm:text-lg">
              {t('home:HeroRow.body')}
            </p>
            <div className="mt-6 flex gap-x-6">
              <Button href="/doc" className="">
                {t('common:navs.defaultMainNav.doc')}
              </Button>
              <Button
                href={`${siteConfig.githubRepo}`}
                variant="outline"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
            </div>
            <ul
              role="list"
              className="mt-12 flex flex-col items-center justify-center gap-x-8 gap-y-10 sm:gap-x-0 xl:flex-row xl:gap-x-12 xl:gap-y-0"
            >
              {[
                [
                  {
                    name: 'Solana',
                    logo: solanaLogo,
                    link: 'https://solana.com/',
                  },

                  {
                    name: 'Linux',
                    logo: linuxLogo,
                    link: 'https://www.linux.org/',
                  },

                  {
                    name: 'Ubuntu',
                    logo: ubuntuLogo,
                    link: 'https://ubuntu.com/',
                  },
                ],
              ].map((group, groupIndex) => (
                <li key={`HeroRowLogoCloudList${groupIndex}`}>
                  <ul
                    role="list"
                    className="flex flex-row items-center gap-x-6 sm:gap-x-12"
                  >
                    {group.map((project) => (
                      <li key={project.name} className="flex">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <Image
                            src={project.logo}
                            alt={project.name}
                            className={clsx(
                              'max-h-12 hover:opacity-60 dark:grayscale',
                              project.name === 'React'
                                ? 'dark:invert-0'
                                : 'dark:invert'
                            )}
                            width={168}
                            height={48}
                            unoptimized
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-lg">
            <div className="relative mx-auto rounded-md bg-gray-900 p-4 text-white">
              <div className="absolute left-2 top-2 flex space-x-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="pt-4 text-left font-mono leading-relaxed">
                <p className="pb-3 text-xs">Linux Ubuntu 20.04 TS</p>
                $ solv setup
                <br />$ solv start
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
