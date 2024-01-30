import { ThreeDots } from 'react-loader-spinner';
import { LodeWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LodeWrapper>
      <ThreeDots visible={true} height="80" width="80" />
    </LodeWrapper>
  );
};

export default Loader;
