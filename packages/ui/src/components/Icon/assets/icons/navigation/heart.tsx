import { SVGProps } from 'react'

export const Heart = ({
  width,
  height,
  color,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width ?? 26}
    height={height ?? 26}
    viewBox='0 0 27 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_106_578)'>
      <path
        d='M5.44433 15.5383L12.5151 22.115C12.8086 22.3879 13.1956 22.5396 13.598 22.5388C14.0003 22.5381 14.3867 22.385 14.6792 22.111L21.7256 15.5081C22.911 14.4004 23.58 12.8484 23.577 11.2273L23.5766 11.0007C23.5715 8.27028 21.5945 5.94582 18.9023 5.50159C17.1205 5.20803 15.3091 5.79342 14.038 7.06922L13.5701 7.53884L13.1005 7.07096C11.8247 5.79989 10.0111 5.22122 8.23043 5.5214C5.53987 5.97561 3.57153 8.30739 3.5766 11.0379L3.57702 11.2644C3.58003 12.8855 4.25478 14.435 5.44433 15.5383Z'
        fill={color || '#B0B9C2'}
      />
    </g>
    <defs>
      <clipPath id='clip0_106_578'>
        <rect
          width='20'
          height='20'
          fill='white'
          transform='translate(3.56319 3.80737) rotate(-0.106333)'
        />
      </clipPath>
    </defs>
  </svg>
)
