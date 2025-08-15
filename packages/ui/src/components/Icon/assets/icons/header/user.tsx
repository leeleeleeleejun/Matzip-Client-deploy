import { SVGProps } from 'react'

export const User = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={width ?? 26}
    height={height ?? 26}
    viewBox='0 0 27 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_76_1057)'>
      <path
        d='M13.0002 12.5469C15.6567 12.5469 17.8102 10.3934 17.8102 7.73695C17.8102 5.08046 15.6567 2.92695 13.0002 2.92695C10.3437 2.92695 8.19019 5.08046 8.19019 7.73695C8.19019 10.3934 10.3437 12.5469 13.0002 12.5469Z'
        fill='#3180F3'
      />
      <path
        d='M13.0001 14.0185C6.5352 14.0185 4.021 18.4268 4.021 20.4769C4.021 22.527 9.37375 23.073 13.0001 23.073C16.6264 23.073 21.9792 22.527 21.9792 20.4769C21.9792 18.4268 19.465 14.0185 13.0001 14.0185Z'
        fill='#3180F3'
      />
    </g>
    <defs>
      <clipPath id='clip0_76_1057'>
        <rect width='26' height='26' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
