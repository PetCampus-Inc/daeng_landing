import AlbumIcon from '../../assets/album-icon';
import AlbumSectionImg from '../../assets/album-section-img.png';

const AlbumSection = () => {
  return (
    <section className='flex w-full items-center justify-between gap-[60px]'>
      <div className='section-text-wrapper'>
        <span className='section-service-text'>
          <AlbumIcon />
          사진앨범
        </span>
        <h3 className='section-title'>
          안전하고 즐거운 강아지의
          <br />
          하루를 <em>바로 전달</em>하세요
        </h3>
        <span className='section-sub-text'>믿음을 주는 사진앨범 기능!</span>
      </div>
      <div className='relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[44px] bg-[#F6F1ED]'>
        <img
          src={AlbumSectionImg}
          alt='사진앨범 서비스 이미지'
          className='absolute bottom-[-14%] left-[50%] translate-x-[-50%]'
        />
      </div>
    </section>
  );
};

export default AlbumSection;
