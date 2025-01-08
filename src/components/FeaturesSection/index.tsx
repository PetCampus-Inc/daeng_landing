import AlarmSection from './AlarmSection';
import AlbumSection from './AlbumSection';
import AttendCareSection from './AttendCareSection';
import EnrollmentSection from './EnrollmentSection';

const FeaturesSection = () => {
  return (
    <>
      <EnrollmentSection />
      <AttendCareSection />
      <section className='section-group-container'>
        <AlarmSection />
        <AlbumSection />
      </section>
    </>
  );
};

export default FeaturesSection;
