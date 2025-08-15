import { SVGProps } from 'react'

export const Marker = ({
  width,
  height,
  color,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox='0 0 12 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_73_238)'>
      <path
        d='M6 12.5C6 12.5 10.5 8.2355 10.5 5C10.5 3.80653 10.0259 2.66193 9.18198 1.81802C8.33807 0.974106 7.19347 0.5 6 0.5C4.80653 0.5 3.66193 0.974106 2.81802 1.81802C1.97411 2.66193 1.5 3.80653 1.5 5C1.5 8.2355 6 12.5 6 12.5ZM6 7.25C5.40326 7.25 4.83097 7.01295 4.40901 6.59099C3.98705 6.16903 3.75 5.59674 3.75 5C3.75 4.40326 3.98705 3.83097 4.40901 3.40901C4.83097 2.98705 5.40326 2.75 6 2.75C6.59674 2.75 7.16903 2.98705 7.59099 3.40901C8.01295 3.83097 8.25 4.40326 8.25 5C8.25 5.59674 8.01295 6.16903 7.59099 6.59099C7.16903 7.01295 6.59674 7.25 6 7.25Z'
        fill={color || '#B0B9C2'}
      />
    </g>
    <defs>
      <clipPath id='clip0_73_238'>
        <rect
          width='12'
          height='12'
          fill='white'
          transform='translate(0 0.5)'
        />
      </clipPath>
    </defs>
  </svg>
)
