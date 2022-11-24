const array = [
   'ЭЛЕКТРОУГЛИ (23060)',
   'НАХОДКА-ВОСТОЧНАЯ (ЭКСП.) (98610)',
   'ЕКАТЕРИНБУРГ-ТОВАРНЫЙ (78030)'
];

const newArray = array.map((i) => {
   const [station, ...other] = i.split(' ');
   console.log(station);
   if (station.includes('-')) {
      const [first, second] = station.split('-');
      const normalizedStation = `${first[0].toUpperCase()}${first.toLowerCase().slice(1)}-${second[0].toUpperCase()}${second.toLowerCase().slice(1)}`;
      return `${normalizedStation} ${other.join(' ')}`;
   } else {
      const normalizedStation = `${station[0].toUpperCase()}${station.toLowerCase().slice(1)}`;
      return `${normalizedStation} ${other.join(' ')}`;
   }
});

console.log(newArray);


