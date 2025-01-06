import HeaderIcon from '../../assets/header-icon';
import KnockDogText from '../../assets/knockdog-text';

const Header = () => {
  return (
    <header className='sticky top-0 flex w-full justify-between border border-line_gray px-3 py-3 sm:px-10 sm:py-4 md:px-20 md:py-5 lg:px-32 lg:py-6 xl:px-40 xl:py-7 2xl:px-80'>
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
