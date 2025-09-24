import { SVGProps } from 'react'

export const Pencil = ({
  width,
  height,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox='0 0 23 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_1130_1108)'>
      <path
        d='M14.6742 3.63626L3.30908 15.0013L7.61936 19.3116L18.9844 7.94654L14.6742 3.63626Z'
        fill='#FFAA00'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7643 6.16766L18.9856 7.94691L14.6753 3.63601L16.454 1.85731C16.9352 1.37606 17.7151 1.37606 18.1958 1.85731L20.7643 4.42581C21.2456 4.90706 21.2456 5.68641 20.7643 6.16766Z'
        fill='#FF9000'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.31238 20.7339L4.41888 20.1696L2.45153 18.2017L1.88723 20.3087C1.81793 20.5667 2.05443 20.8026 2.31238 20.7339Z'
        fill='#313D4C'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.45215 18.2017L4.41895 20.1696L7.6205 19.3116L3.31015 15.0012L2.45215 18.2017Z'
        fill='#FFCCA8'
      />
    </g>
    <defs>
      <clipPath id='clip0_1130_1108'>
        <rect
          width='22'
          height='22'
          fill='white'
          transform='translate(0.5 0.240314)'
        />
      </clipPath>
    </defs>
  </svg>
)
