import {Svg, Path, SvgProps} from 'react-native-svg';

export const UserIcon = ({stroke, fill, ...props}: SvgProps) => {
  return (
    <>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill || 'none'}
        {...props}>
        <Path
          d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
          stroke={stroke || '#797979'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.16021 14.56C4.74021 16.18 4.74021 18.82 7.16021 20.43C9.91021 22.27 14.4202 22.27 17.1702 20.43C19.5902 18.81 19.5902 16.17 17.1702 14.56C14.4302 12.73 9.92021 12.73 7.16021 14.56Z"
          stroke={stroke || '#797979'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
};