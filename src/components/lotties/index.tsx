import Lottie from 'react-lottie-player';

interface LottieProps {
  animationData: Record<string, unknown>;
  width: number;
  height: number;
  speed?: number;
}

const LottieAnimation: React.FC<LottieProps> = ({
  animationData,
  width,
  height,
  speed
}) => {
  return (
    <div>
      <Lottie
        loop
        speed={speed}
        animationData={animationData}
        play
        segments={[0, 70]}
        style={{ width, height }}
      />
    </div>
  );
};

export default LottieAnimation;
