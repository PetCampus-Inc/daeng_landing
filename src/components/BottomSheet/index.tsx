import { AnimatePresence, motion } from 'motion/react';
import Portal from '../Portal';
import CloseIcon from '../../assets/close-icon';
import QrCodeIcon from '../../assets/qr-code.svg';
import GoogleLogo from '../../assets/google-logo';
import AppleLogo from '../../assets/apple-logo';

export interface BottomSheetProps {
  isOpen: boolean;
  close: () => void;
}

const BottomSheet = ({ isOpen, close }: BottomSheetProps) => {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-50 flex items-end bg-black bg-opacity-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className='shadow-l flex h-1/2 w-full justify-center bg-white p-4'
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex w-2/3 flex-col'>
                <button onClick={close} className='mt-6 flex self-end'>
                  <CloseIcon />
                </button>
                <h2 className='mb-5 flex self-center p-14 text-4xl font-black tracking-tighter text-gray_6'>
                  지금 바로 <span className='ml-2 text-primaryColor'>똑독</span>
                  을 다운로드 해보세요
                </h2>
                <div className='flex h-2/5 justify-center'>
                  <div className='flex w-1/2 flex-col items-center gap-3 border-r'>
                    <p className='mb-6 text-xl text-gray_5'>스토어 다운로드</p>
                    <button className='pill-button'>
                      <AppleLogo /> APP Store
                    </button>
                    <button className='pill-button'>
                      <GoogleLogo /> Google Play
                    </button>
                  </div>
                  <div className='flex w-1/2 flex-col items-center justify-between gap-5'>
                    <p className='text-xl text-gray_5'>QR코드 다운로드</p>
                    <img src={QrCodeIcon} alt='Google Logo' />
                    <p className='text-gray_5'>
                      핸드폰 카메라로 코드를 스캔하세요
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default BottomSheet;
