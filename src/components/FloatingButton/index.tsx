import DownloadIcon from '../../assets/download-icon';

import knockdogLogo from '../../assets/knockdog-logo.svg';

const FloatingButton = () => {
  return (
    <button className='fixed bottom-36 right-10 z-50 sm:right-14 md:right-20 lg:right-32 xl:right-40 2xl:right-80'>
      <div className='relative flex h-36 w-36 flex-col items-start justify-center rounded-full bg-white px-9 py-7 shadow-round sm:h-36 sm:w-36 md:h-40 md:w-40 md:px-11 md:py-8 lg:h-44 lg:w-44 lg:px-12 lg:py-10 xl:h-48 xl:w-48 xl:px-14 2xl:h-52 2xl:w-52 2xl:px-14 2xl:py-12'>
        <span className='text-base font-bold text-gray_6 md:text-lg lg:text-xl 2xl:text-2xl'>
          똑독 앱
        </span>
        <span className='text-base font-bold text-gray_6 md:text-lg lg:text-xl 2xl:text-2xl'>
          다운로드
        </span>
        <DownloadIcon />
      </div>
      <div className='absolute -bottom-16 left-32 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform sm:h-20 sm:w-20 md:-bottom-16 md:left-32 md:h-20 md:w-20 lg:-bottom-20 lg:left-36 lg:h-24 lg:w-24 xl:-bottom-20 xl:left-40 xl:h-24 xl:w-24 2xl:-bottom-24 2xl:left-40 2xl:h-28 2xl:w-28'>
        <img src={knockdogLogo} alt='KnockDog Logo' />
      </div>
    </button>
  );
};

export default FloatingButton;
