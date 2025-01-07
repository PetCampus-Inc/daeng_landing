import AppleLogo from '../../assets/apple-logo';
import GoogleLogo from '../../assets/google-logo';

const DownloadSection = () => {
  const gotoAppDownload = (type: string) => {
    console.log(`${type} app download`);
  };
  return (
    <section className='section-download-container bg-[url("./assets/download-section-bg.jpeg")] bg-cover bg-[center_bottom_85%]'>
      <div className='section-text-wrapper gap-[42px]'>
        <h3 className='section-title text-white'>
          사업의 시작부터 관리까지
          <br /> 똑독과 새로운 출발을 함께해요
        </h3>
        <div className='flex gap-[12px]'>
          <button
            onClick={() => gotoAppDownload('apple')}
            className='gag-[4px] relative flex items-center justify-center overflow-hidden rounded-[12px] border-[1px] border-white border-opacity-65 px-5 py-2 text-base font-bold text-white before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-white before:opacity-[10%] before:content-[""]'
          >
            <AppleLogo />
            APP Store
          </button>
          <button
            onClick={() => gotoAppDownload('google')}
            className='gag-[4px] relative flex items-center justify-center overflow-hidden rounded-[12px] border-[1px] border-white border-opacity-65 px-5 py-2 text-base font-bold text-white before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-white before:opacity-[10%] before:content-[""]'
          >
            <GoogleLogo /> Google Play
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-black opacity-[65%]'></div>
    </section>
  );
};

export default DownloadSection;
