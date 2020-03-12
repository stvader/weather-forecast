const generateWindDegreeData = (): number[] => {
  const circleSegment = 45;
  const circleOffset = circleSegment / 2;
  const data = [];
  let deg = circleOffset;

  while (deg < 360) {
    data.push(deg);
    deg += circleSegment;
  }

  return data;
};

const getWindDirection = (deg: number): string => {
  const degData = generateWindDegreeData();

  switch (true) {
    case deg <= degData[0] || deg > degData[7]:
      return 'North';
    case deg > degData[0] || deg <= degData[1]:
      return 'North-East';
    case deg > degData[1] || deg <= degData[2]:
      return 'East';
    case deg > degData[2] || deg <= degData[3]:
      return 'South-East';
    case deg > degData[3] || deg <= degData[4]:
      return 'South';
    case deg > degData[4] || deg <= degData[5]:
      return 'South-West';
    case deg > degData[5] || deg <= degData[6]:
      return 'West';
    case deg > degData[6] || deg <= degData[7]:
      return 'North-West';
    default:
      return '';
  }
};

export default getWindDirection;
