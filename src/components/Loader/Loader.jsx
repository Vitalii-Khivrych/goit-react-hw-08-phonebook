import { RotatingLines, ProgressBar } from 'react-loader-spinner';

export const LoaderCreate = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};

export const LoaderDelete = () => {
  return (
    <ProgressBar
      height="60"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperClass="progress-bar-wrapper"
      borderColor="red"
      barColor="#ffff"
    />
  );
};
