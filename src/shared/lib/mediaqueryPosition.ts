type MediaQueryProps = {
  isMin325: boolean;
  isMin350: boolean;
  isMin488: boolean;
  isMin508: boolean;
  isMin528: boolean;
  isMin548: boolean;
  isMin568: boolean;
  isMin588: boolean;
  isMin608: boolean;
  isMin628: boolean;
  isMin648: boolean;
  isMin668: boolean;
  isMin688: boolean;
  isMin708: boolean;
  isMin728: boolean;
  isMin748: boolean;
  isMin768: boolean;
  isMin1024: boolean;
  isMin1540: boolean;
  isMin1557: boolean;
  isMin1585: boolean;
  isMin1600: boolean;
  isMin1625: boolean;
  isMin1650: boolean;
  isMin1675: boolean;
  isMin1700: boolean;
};

export const getHeroTextPosition = (queries: MediaQueryProps): string => {
  const {
    isMin1700,
    isMin1675,
    isMin1650,
    isMin1625,
    isMin1600,
    isMin1585,
    isMin1557,
    isMin1540,
    isMin1024,
    isMin768,
    isMin748,
    isMin728,
    isMin708,
    isMin688,
    isMin668,
    isMin648,
    isMin628,
    isMin608,
    isMin588,
    isMin568,
    isMin548,
    isMin528,
    isMin508,
    isMin488,
    isMin350,
    isMin325,
  } = queries;

  if (isMin1700) return "160px";
  if (isMin1675) return "156px";
  if (isMin1650) return "153px";
  if (isMin1625) return "150px";
  if (isMin1600) return "147px";
  if (isMin1585) return "145px";
  if (isMin1557) return "143px";
  if (isMin1540) return "140px";
  if (isMin1024) return "140px";
  if (isMin768) return "140px";
  if (isMin748) return "115px";
  if (isMin728) return "110px";
  if (isMin708) return "105px";
  if (isMin688) return "100px";
  if (isMin668) return "95px";
  if (isMin648) return "90px";
  if (isMin628) return "90px";
  if (isMin608) return "80px";
  if (isMin588) return "80px";
  if (isMin568) return "70px";
  if (isMin548) return "70px";
  if (isMin528) return "70px";
  if (isMin508) return "70px";
  if (isMin488) return "70px";
  if (isMin350) return "54px";
  if (isMin325) return "50px";
  return "50px";
};

type DoorLabel = {
  imageUrl: string;
  position: {
    top: string;
    left?: string;
    right?: string;
  };
  size: {
    width: string;
    height: string;
  };
};

export const getDoorLabelPositions = (
  queries: MediaQueryProps
): DoorLabel[] => {
  const { isMin1700, isMin1675, isMin768 } = queries;

  const leftDoor1Top = (() => {
    if (isMin1700) return "37%";
    if (isMin1675) return "35.5%";
    return "0%";
  })();

  const leftDoor1Left = (() => {
    if (isMin1700) return "28%";
    if (isMin1675) return "27.8%";
    if (isMin768) return "24%";
    return "0%";
  })();

  const leftDoor2Top = (() => {
    if (isMin1700) return "45.7%";
    if (isMin1675) return "44.5%";
    return "0%";
  })();

  const leftDoor2Left = (() => {
    if (isMin1700) return "37.4%";
    if (isMin1675) return "37.4%";
    return "0%";
  })();

  const centerDoorTop = (() => {
    if (isMin1700) return "50%";
    if (isMin1675) return "48.7%";
    return "0%";
  })();

  const centerDoorLeft = (() => {
    if (isMin1700) return "47.5%";
    if (isMin1675) return "47.3%";
    return "0%";
  })();

  const rightDoor1Top = (() => {
    if (isMin1700) return "38%";
    if (isMin1675) return "36.4%";
    return "0%";
  })();

  const rightDoor1Right = (() => {
    if (isMin1700) return "29.2%";
    if (isMin1675) return "28.5%";
    return "0%";
  })();

  const rightDoor2Top = (() => {
    if (isMin1700) return "45.5%";
    if (isMin1675) return "44.5%";
    return "0%";
  })();

  const rightDoor2Right = (() => {
    if (isMin1700) return "37.6%";
    if (isMin1675) return "37.5%";
    return "0";
  })();

  return [
    {
      imageUrl: "/images/left-door-label-1.png",
      position: { top: leftDoor1Top, left: leftDoor1Left },
      size: {
        width: "68px",
        height: "54px",
      },
    },
    {
      imageUrl: "/images/left-door-label-2.png",
      position: { top: leftDoor2Top, left: leftDoor2Left },
      size: {
        width: "42px",
        height: "34px",
      },
    },
    {
      imageUrl: "/images/center-door-label.png",
      position: { top: centerDoorTop, left: centerDoorLeft },
      size: {
        width: "92px",
        height: "14px",
      },
    },
    {
      imageUrl: "/images/right-door-label-1.png",
      position: { top: rightDoor1Top, right: rightDoor1Right },
      size: {
        width: "68px",
        height: "54px",
      },
    },
    {
      imageUrl: "/images/right-door-label-2.png",
      position: { top: rightDoor2Top, right: rightDoor2Right },
      size: {
        width: "42px",
        height: "34px",
      },
    },
  ];
};

type HoverImage = {
  imageUrl: string;
  position: {
    top: string;
    left?: string;
    right?: string;
  };
  size: {
    width: string;
    height: string;
  };
  href: string;
};

export const getHoverImagePositions = (
  queries: MediaQueryProps
): HoverImage[] => {
  const { isMin1700, isMin1675, isMin768 } = queries;

  const leftHover1Top = (() => {
    if (isMin1700) return "35%";
    if (isMin1675) return "34%";
    return "0%";
  })();

  const leftHover1Left = (() => {
    if (isMin1700) return "25.7%";
    if (isMin1675) return "25.6%";
    return "0%";
  })();

  const leftHover2Top = (() => {
    if (isMin1700) return "44.5%";
    if (isMin1675) return "43.5%";
    return "0%";
  })();

  const leftHover2Left = (() => {
    if (isMin1700) return "36.5%";
    if (isMin1675) return "36.4%";
    return "0%";
  })();

  const centerHoverTop = (() => {
    if (isMin1700) return "50.5%";
    if (isMin1675) return "49.5%";
    return "0%";
  })();

  const centerHoverLeft = (() => {
    if (isMin1700) return "44%";
    if (isMin1675) return "44%";
    return "0%";
  })();

  const rightHover1Top = (() => {
    if (isMin1700) return "35.5%";
    if (isMin1675) return "34%";
    return "0%";
  })();

  const rightHover1Right = (() => {
    if (isMin1700) return "26%";
    if (isMin1675) return "25.6%";
    return "0%";
  })();

  const rightHover2Top = (() => {
    if (isMin1700) return "44.6%";
    if (isMin1675) return "43.5%";
    return "0%";
  })();

  const rightHover2Right = (() => {
    if (isMin1700) return "36.6%";
    if (isMin1675) return "36.5%";
    return "0%";
  })();

  return [
    {
      imageUrl: "/images/left-door-hover-1.png",
      position: { top: leftHover1Top, left: leftHover1Left },
      size: {
        width: "159px",
        height: "482px",
      },
      href: "/raffles",
    },
    {
      imageUrl: "/images/left-door-hover-2.png",
      position: { top: leftHover2Top, left: leftHover2Left },
      size: {
        width: "76px",
        height: "265px",
      },
      href: "/loot",
    },
    {
      imageUrl: "/images/center-door-hover.png",
      position: { top: centerHoverTop, left: centerHoverLeft },
      size: {
        width: "209px",
        height: "138px",
      },
      href: "/arcade",
    },
    {
      imageUrl: "/images/right-door-hover-1.png",
      position: { top: rightHover1Top, right: rightHover1Right },
      size: {
        width: "158px",
        height: "480px",
      },
      href: "/cops",
    },
    {
      imageUrl: "/images/right-door-hover-2.png",
      position: { top: rightHover2Top, right: rightHover2Right },
      size: {
        width: "75px",
        height: "264px",
      },
      href: "/staking",
    },
  ];
};
