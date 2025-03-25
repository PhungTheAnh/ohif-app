import React from 'react';
import type { IconProps } from '../types';

export const LaunchInfo = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    {...props}
    viewBox="0 0 21 22"
  >
    <g fillRule="evenodd">
      <circle
        cx="10.5"
        cy="11"
        r="10.192"
        fill="#015e70"
      />
      <path
        fill="#fff"
        d="M10.5.31C4.87.31.308 4.872.308 10.501c0 5.629 4.563 10.192 10.192 10.192 5.63 0 10.192-4.563 10.192-10.192C20.692 4.872 16.13.309 10.5.309zm0 1c5.077 0 9.192 4.115 9.192 9.192 0 5.076-4.115 9.192-9.192 9.192s-9.192-4.116-9.192-9.192c0-5.077 4.115-9.193 9.192-9.193z"
        transform="translate(0 .5)"
      />
      <path
        fill="#fff"
        d="M9.692 8.385c.677 0 1.234.514 1.301 1.174l.007.133v5.654c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41l-.008-.09V9.692c0-.145-.101-.267-.237-.3l-.07-.007H8.076c-.276 0-.5-.224-.5-.5 0-.246.177-.45.41-.492l.09-.008h1.615zM9.288 4.346l.114.007c.446.056.79.436.79.897 0 .5-.404.904-.904.904-.499 0-.903-.405-.903-.904 0-.46.344-.841.79-.897l.113-.007z"
        transform="translate(0 .5)"
      />
      <path
        fill="#fff"
        d="M12.923 14.848c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008H8.077c-.276 0-.5-.224-.5-.5 0-.246.177-.45.41-.492l.09-.008h4.846z"
        transform="translate(0 .5)"
      />
    </g>
  </svg>
);

export default LaunchInfo;
