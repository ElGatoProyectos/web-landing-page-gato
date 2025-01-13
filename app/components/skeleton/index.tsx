import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CardClientPropd = {
  width: string | number;
  height: string | number;
};
export const CardClientSkeleton: React.FC<CardClientPropd> = ({
  width,
  height,
}) => {
  return (
    <div>
      <Skeleton width={width} height={height} className="aspect-square" />
    </div>
  );
};

export const CardSkeleton = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Skeleton width={"100%"} height={"100%"} />
    </div>
  );
};

export const ImgBannerClient = () => {
  return (
    <div className="w-full h-[300px]">
      <Skeleton width={"100%"} height={"100%"} className="aspect-square" />
    </div>
  );
};

export const SkeletonText = ({
  lines,
  width = '100%',
  height = 20,
}: {
  lines: number;
  width: string;
  height?:number;
}) => {
  return (
    <div style={{ width: width }}>
      <Skeleton count={lines} height={height} />
    </div>
  );
};
