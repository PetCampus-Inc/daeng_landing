import DownloadIcon from '../../assets/download-icon';
import KnockDogLogo from '../../assets/knockdog-logo';

const FloatingButton = () => {
  return (
    <button className='fixed bottom-36 right-10 sm:right-14 md:right-20 lg:right-32 xl:right-40 2xl:right-80'>
      <div className='relative flex h-52 w-52 flex-col items-start justify-center rounded-full bg-white p-14 shadow-round'>
        <p className='text-2xl font-bold text-gray_6'>똑독 앱</p>
        <p className='text-2xl font-bold text-gray_6'>다운로드</p>
        <DownloadIcon />
      </div>
      <div className='absolute -bottom-28 left-44 -translate-x-1/2 -translate-y-1/2 transform'>
        <KnockDogLogo />
      </div>
    </button>
  );
};

export default FloatingButton;
