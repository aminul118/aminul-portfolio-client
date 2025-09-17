/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import images from '@/constants/images';
import WriterEffect from '@/components/ui/writer-effect';
import Logo from '@/components/common/Logo';
import DownloadResume from '@/components/common/DownloadResume';

const HeroBanner = () => {
  return (
    <section className=" pt-12 lg:pt-32 bg-slate-900">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto px-2">
        <div className="max-w-2xl">
          <div className="flex flex-col h-full justify-center pb-12 gap-6 text-white/60">
            <div>
              <p>I'm</p>
              <h1 className="text-3xl lg:text-4xl font-bold mt-1">
                <WriterEffect
                  words={[
                    'Md. Aminul Islam',
                    'Full Stack Developer',
                    'SEO Expert',
                  ]}
                />
              </h1>
            </div>
            <p>
              Creative front-end & Backend developer with Proficient in
              TypeScript, React, Next js, MongoDB, MySQL, Postgresql Node JS,
              Express js and SEO, Passionate about programming.
            </p>
            <Logo />
            <DownloadResume />
          </div>
        </div>
        <Image
          src={images.banner.hero}
          width={500}
          height={300}
          alt="aminul islam web developer image"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
