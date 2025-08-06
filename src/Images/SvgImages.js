export function HamburgerMd(props, height, width,) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 17h14M5 12h14M5 7h14"
      ></path>
    </svg>
  )
}
export function CartOutline(props, height, width,) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="10" cy="19" r="1.5"></circle>
        <circle cx="17" cy="19" r="1.5"></circle>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 4h2l3.504 11H17"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z"
        ></path>
      </g>
    </svg>
  )
}
export function BaselineKeyboardArrowDown(props, height, width) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
      ></path>
    </svg>
  )
}
