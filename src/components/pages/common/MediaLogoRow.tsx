import Container from '@/components/common/atoms/Container'
import Image from 'next/image'
import clsx from 'clsx'

import CnetLogo from '@/assets/img/logo/media/cnet.svg'
import RakutenLogo from '@/assets/img/logo/media/rakuten.svg'
import YomiuriLogo from '@/assets/img/logo/media/yomiuri.svg'
import TBSLogo from '@/assets/img/logo/media/tbs.png'
import AsahiLogo from '@/assets/img/logo/media/asahi.svg'
import GendaiLogo from '@/assets/img/logo/media/gendai.png'
import { useTranslation } from 'next-i18next'

export default function MediaLogoRow() {
  const { t } = useTranslation()
  return (
    <>
      <Container className="py-24 text-center lg:py-32">
        <h2 className="font-display mx-auto max-w-4xl text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-gray-50 sm:text-5xl">
          {t('media')}
        </h2>

        <div className="mb-12 mt-16 lg:mt-24">
          <ul
            role="list"
            className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-10 sm:gap-x-0 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                {
                  name: 'CNET',
                  logo: CnetLogo,
                  link: 'https://japan.cnet.com/release/30866408/',
                },

                {
                  name: 'Rakuten',
                  logo: RakutenLogo,
                  link: 'https://news.infoseek.co.jp/article/prtimes_000000055_000105962/',
                },
                {
                  name: '読売新聞',
                  logo: YomiuriLogo,
                  link: 'https://yab.yomiuri.co.jp/adv/feature/release/detail/000000055000105962.html',
                },
              ],
              [
                {
                  name: 'TBS',
                  logo: TBSLogo,
                  link: 'https://newsdig.tbs.co.jp/articles/-/532228?display=1',
                },
                {
                  name: '朝日新聞',
                  logo: AsahiLogo,
                  link: 'https://www.asahi.com/and/pressrelease/424039828/',
                },
                {
                  name: '現代ビジネス',
                  logo: GendaiLogo,
                  link: 'https://gendai.media/ud/pressrelease/64dee810760b06917c000040',
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
                            'hover:opacity-60 dark:grayscale',
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
      </Container>
    </>
  )
}
