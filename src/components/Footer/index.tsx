import AppleLogo from '../../assets/apple-logo';
import GoogleLogo from '../../assets/google-logo';

const Footer = () => {
  return (
    <footer className='mb-28 mt-12 text-gray_6 xl:px-60 2xl:px-[300px]'>
      <div className='flex border-b pb-5'>
        <div className='flex w-2/3 flex-col gap-3'>
          <div className='flex gap-3'>
            <span className='border-r pr-3 font-bold'>펫캠퍼스</span>
            <span className='border-r pr-3 font-bold'>
              사업자번호
              <span className='footer-subtext'>181-04-02998</span>
            </span>
            <span className='font-bold'>
              대표
              <span className='footer-subtext'>최진영</span>
            </span>
          </div>
          <div>
            <span className='pr-3 font-bold'>
              주소
              <span className='footer-subtext'>
                서울 성북구 길음동 숭인로 50
              </span>
            </span>
            <span className='font-bold'>
              대표번호
              <span className='footer-subtext'>010-6684-3515</span>
            </span>
          </div>
        </div>
        <div className='flex w-1/3 flex-col gap-3'>
          <span className='font-bold tracking-tight'>똑독 APP Download</span>
          <div className='flex gap-3'>
            <button className='footer-download-button w-32'>
              <AppleLogo color='#233142' /> APP Store
            </button>
            <button className='footer-download-button w-36'>
              <GoogleLogo /> Google Play
            </button>
          </div>
        </div>
      </div>
      <div className='flex gap-8 pt-7'>
        <span className='font-bold'>서비스 이용약관</span>
        <span className='font-bold'>개인정보처리방침</span>
      </div>
    </footer>
  );
};

export default Footer;
