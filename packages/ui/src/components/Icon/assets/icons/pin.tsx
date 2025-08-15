import { SVGProps } from 'react'

export const Pin = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox='0 0 17 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_148_818)'>
      <path
        d='M8.74306 16.5807C8.39586 16.5807 8.11426 16.2991 8.11426 15.9519V7.84474C8.11426 7.49754 8.39586 7.21594 8.74306 7.21594C9.09026 7.21594 9.37186 7.49754 9.37186 7.84474V15.9519C9.37186 16.2991 9.09026 16.5807 8.74306 16.5807Z'
        fill='#4B596A'
      />
      <path
        d='M8.74309 11.6152C11.522 11.6152 13.7747 9.36248 13.7747 6.5836C13.7747 3.80473 11.522 1.552 8.74309 1.552C5.96421 1.552 3.71149 3.80473 3.71149 6.5836C3.71149 9.36248 5.96421 11.6152 8.74309 11.6152Z'
        fill='#EF4452'
      />
    </g>
    <defs>
      <clipPath id='clip0_148_818'>
        <rect
          width='16'
          height='16'
          fill='white'
          transform='translate(0.743103 0.751953)'
        />
      </clipPath>
    </defs>
  </svg>
)
