import { SVGProps } from 'react'

export const Lightning = ({
  width,
  height,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width ?? '14'}
    height={height ?? '14'}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_1613_905)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.7979 5.58498H8.23694L8.95409 1.68248C9.07134 1.04373 8.26249 0.666775 7.84879 1.16763L2.71639 7.38398C2.37724 7.79488 2.66949 8.41508 3.20219 8.41508H5.76314L5.04599 12.3176C4.92874 12.9563 5.73759 13.3333 6.15129 12.8324L11.2837 6.61608C11.6228 6.20518 11.3306 5.58498 10.7979 5.58498Z'
        fill='#FFCD00'
      />
    </g>
    <defs>
      <clipPath id='clip0_1613_905'>
        <rect width='14' height='14' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
