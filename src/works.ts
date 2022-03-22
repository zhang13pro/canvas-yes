export const info = [
  {
    name: 'Mass',
    date: '11/06',
    draft: false,
  },
  {
    name: 'Hex',
    date: '11/07',
  },
  {
    name: 'Three',
    date: '11/08',
  },
  {
    name: 'Scope',
    date: '11/09',
  },
  {
    name: 'Polar',
    date: '11/10',
  },
  {
    name: 'M & M',
    date: '11/11',
  },
  {
    name: 'Ship',
    date: '11/12',
  },
  {
    name: 'Negative',
    date: '11/13',
  },
  {
    name: 'Unreproducible',
    date: '11/14',
  },
  {
    name: '方圓',
    date: '11/15',
  },
  {
    name: 'Box',
    date: '11/16',
  },
  {
    name: 'Displace',
    date: '11/17',
  },
  {
    name: 'Plum',
    date: '11/18',
  },
  {
    name: 'Orbit',
    date: '11/19',
  },
  {
    name: 'Rust',
    date: '11/20',
  },
  {
    name: 'Connect',
    date: '11/21',
  },
  {
    name: 'Gravity',
    date: '11/22',
  },
  {
    name: 'Field 1',
    date: '11/23',
  },
  {
    name: 'Fractal 1',
    date: '11/24',
  },
  {
    name: 'Clone',
    date: '11/25',
  },
  {
    name: 'Cross',
    date: '11/26',
  },
  {
    name: 'ㄇㄈㄩコロ',
    date: '11/27',
  },
  {
    name: 'Knitting',
    date: '11/28',
  },
  {
    name: 'Cast',
    date: '11/30',
  },
  {
    name: 'Kaleidoscope',
    date: '12/01',
  },
  {
    name: 'Lines',
    date: '12/02',
  },
  {
    name: 'Flat',
    date: '12/03',
  },
  {
    name: 'Joy',
    date: '12/04',
  },
  {
    name: 'Attractor',
    date: '12/05',
  },
  {
    name: 'River',
    date: '12/06',
  },
  {
    name: 'Arc',
    date: '12/07',
  },
  {
    name: 'z = tixy',
    date: '12/08',
  },
  {
    name: 'Glass',
    date: '12/15',
  },
  {
    name: 'Moiré',
    date: '12/15',
  },
  {
    name: 'Window',
    date: '12/15',
  },
  {
    name: 'Arch 1',
    date: '1/30',
  },
  {
    name: 'Arch 2',
    date: '1/30',
  },
]

export const works = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
