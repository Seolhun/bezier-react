import React from 'react'

function SvgHyphen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M7 11h10v2H7z" />
    </svg>
  )
}

export default SvgHyphen
