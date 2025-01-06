import HeaderIcon from '../../assets/header-icon';
import KnockDogText from '../../assets/knock-dog-text';

const Header = () => {
  return (
    <header className='fixed top-0 z-50 flex w-full justify-between border border-line_gray px-4 py-4 sm:px-10 sm:py-5 md:px-20 md:py-6 lg:px-40 lg:py-8 xl:px-60 xl:py-10 2xl:px-[300px]'>
      <div className='flex items-center gap-1'>
        <HeaderIcon />
        <KnockDogText />
      </div>
      <nav className='flex items-center'>
        <ul className='flex gap-4 text-center text-nav_gray sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
          <li className='header-li hover:text-primaryColor'>홈</li>
          <li className='header-li hover:text-primaryColor'>주요기능</li>
          <li className='header-li rounded-full bg-primaryColor text-white'>
            앱 다운로드
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
