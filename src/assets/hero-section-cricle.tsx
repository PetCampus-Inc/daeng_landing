const HeroSectionCricle = ({ className }: { className?: string }) => {
  return (
    <svg
      width='761'
      height='761'
      viewBox='0 0 761 761'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle
        opacity='0.1'
        cx='379.933'
        cy='379.933'
        r='379.933'
        transform='matrix(-0.707107 0.707107 0.707107 0.707107 380.305 -157)'
        fill='url(#paint0_linear_12784_154043)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_12784_154043'
          x1='141.207'
          y1='183.484'
          x2='473.507'
          y2='194.194'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFC554' />
          <stop offset='1' stopColor='#E66C13' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroSectionCricle;
