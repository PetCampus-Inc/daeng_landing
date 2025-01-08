import HeroSectionCricle from '../../assets/hero-section-cricle';
import HeroSectionImg from '../../assets/hero-section-img.png';

const HeroSection = () => {
  return (
    <section className='section-container justify-start bg-gradient-to-b from-white to-[#FFF8EF] to-90%'>
      <div className='section-text-wrapper'>
        <h3 className='section-title'>
          강아지 유치원의
          <br /> 스마트한 비서 <em>똑독!</em>
        </h3>
        <span className='section-sub-text'>
          운영은 간편하게, 서비스는 완벽하게!
        </span>
        <button className='rounded-full bg-primaryColor px-12 py-3 text-2xl font-bold text-white'>
          앱 다운로드
        </button>
      </div>

      <div className='lg:left-unset absolute bottom-[-250px] left-[66%] z-[-1] w-[889px] translate-x-[-50%] md:right-[-200px] lg:bottom-[-250px] xl:left-[75%]'>
        <img src={HeroSectionImg} alt='똑독 서비스 이미지' />
      </div>
      <HeroSectionCricle className='absolute right-[115px] top-[100px] z-[-2]' />
    </section>
  );
};

export default HeroSection;
