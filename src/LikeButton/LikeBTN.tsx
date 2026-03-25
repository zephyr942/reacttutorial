import styles from "./LikeBTN.module.css";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import React, { useState, useSyncExternalStore } from "react";

interface LikeBtnProps {
  likeColor: string;
  likeSize: number;
  onClick: () => void;
}
export default function LikeBTN({
  likeColor = "red",
  likeSize = 30,
  onClick,
}: LikeBtnProps) {
  const [likeState, setLikeState] = useState(false);

  const toggle = () => {
    setLikeState(!likeState);
    onClick();
  };

  //   if (!likeState) return <FaRegHeart size={likeSize} onClick={toggle} />;
  //   return (
  //     <TiHeartFullOutline color={likeColor} size={likeSize} onClick={toggle} />
  //   );

  //   or 这个最简洁

  return likeState ? (
    <TiHeartFullOutline color={likeColor} size={likeSize} onClick={toggle} />
  ) : (
    <FaRegHeart size={likeSize} onClick={toggle} />
  );

  //下面是我写的
  //   return (
  //     <div>
  //       {likeState ? (
  //         <TiHeartFullOutline
  //           color={likeColor}
  //           size={likeSize}
  //           onClick={() => {
  //             onClick();
  //             setLikeState(!likeState);
  //           }}
  //         />
  //       ) : (
  //         <FaRegHeart
  //           size={likeSize}
  //           onClick={() => {
  //             onClick();
  //             setLikeState(!likeState);
  //           }}
  //         />
  //       )}
  //       <div
  //         onClick={() => {
  //           onClick();
  //           setLikeState(!likeState);
  //         }}
  //       >
  //         {likeState ? (
  //           <TiHeartFullOutline color={likeColor} size={likeSize} />
  //         ) : (
  //           <FaRegHeart size={likeSize} />
  //         )}
  //       </div>
  //     </div>
  //   );
}
