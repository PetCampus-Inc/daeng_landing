import AlarmIcon from '../../assets/alarm-icon';
import AlarmSectionImg from '../../assets/alarm-section-img.png';

const AlarmSection = () => {
  return (
    <div className='mb-[134px] flex w-full items-center justify-between gap-[60px]'>
      <div className='relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[44px] bg-[#FFFAF6]'>
        <img
          src={AlarmSectionImg}
          alt='알림장 서비스 이미지'
          className='absolute bottom-[-19%] left-[50%] translate-x-[-50%]'
        />
      </div>
      <div className='section-text-wrapper'>
        <span className='section-service-text'>
          <AlarmIcon />
          알림장
        </span>
        <h3 className='section-title'>
          앱에서 알림장 하나로
          <br />
          <em> 완벽 소통</em>
        </h3>
        <span className='section-sub-text'>
          강아지의 오늘 상태를 <br />
          클릭 한 번으로 기록하고 공유해요
        </span>
      </div>
    </div>
  );
};

export default AlarmSection;
