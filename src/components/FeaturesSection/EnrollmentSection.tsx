import EnrollmentIcon from '../../assets/enrollment-icon';
import EnrollmentSectionImg from '../../assets/enrollment-section-img.png';

const EnrollmentSection = () => {
  return (
    <div className='section-container justify-between gap-[60px] bg-[#F7F4F1]'>
      <div>
        <img src={EnrollmentSectionImg} alt='가입신청서 서비스 이미지' />
      </div>
      <div className='section-text-wrapper'>
        <span className='section-service-text'>
          <EnrollmentIcon />
          가입신청서
        </span>
        <h3 className='section-title'>
          한 번의 신청으로 신규 회원의
          <br />
          <em>모든 정보 관리 완료</em>
        </h3>
        <span className='section-sub-text'>
          강아지의 기본 정보부터 유의사항 동의까지 한 번에!
        </span>
      </div>
    </div>
  );
};

export default EnrollmentSection;
