import ArrendcareSectionCircle from '../../assets/arrendcare-section-circle';
import AttendcareIcon from '../../assets/attendcare-icon';
import AttendCareSectionImg from '../../assets/attendcare-section-img.png';

const AttendCareSection = () => {
  return (
    <section className='section-container justify-between gap-[60px] bg-[#FFFAF6]'>
      <div className='section-text-wrapper'>
        <span className='section-service-text'>
          <AttendcareIcon />
          출결 및 회원관리
        </span>
        <h3 className='section-title'>
          <em>출석 체크</em>도, <em>회원 관리</em>도 손쉽게
        </h3>
        <span className='section-sub-text'>
          회원권 재등록 푸시 알림으로
          <br />
          놓치는 고객 없이 매출도 쑥쑥 올려보세요!
        </span>
      </div>
      <div>
        <img src={AttendCareSectionImg} alt='출결 및 회원관리 서비스 이미지' />
      </div>

      <div className='absolute left-[8%] top-[59%] z-[-2] h-[13px] w-[235px] bg-white'></div>
      <div className='absolute top-[46%] z-[-2] ml-[40%] h-[20px] w-[314px] bg-white'></div>
      <ArrendcareSectionCircle className='absolute left-0 top-0 z-[-2]' />
    </section>
  );
};

export default AttendCareSection;
