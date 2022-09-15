import Jazzmaster60s from '../img/guitars/Jazzmaster60s.jpg';
import Stratocaster50s from '../img/guitars/Stratocaster50s.jpg';
import Stratocaster60s from '../img/guitars/Stratocaster60s.jpg';
import Telecaster50s from '../img/guitars/Telecaster50s.jpg';
import Telecaster60s from '../img/guitars/Telecaster60s.jpg';
import Telecaster60sSunBurst from '../img/guitars/Telecaster60sSunBurst.jpg';
import TelecasterCustom70s from '../img/guitars/TelecasterCustom70s.jpg';
import TelecasterThinline60s from '../img/guitars/TelecasterThinline60s.jpg';

export default function getItems() {
  const brand = 'Fender';
  const items = [
    {
      name: `${brand} \`60s Jazzmaster`,
      img: Jazzmaster60s,
      price: 2399,
      new: false,
    },
    {
      name: `${brand} \`50s Stratocaster`,
      img: Stratocaster50s,
      price: 2399,
      new: false,
    },
    {
      name: `${brand} \`60s Stratocaster`,
      img: Stratocaster60s,
      price: 2399,
      new: false,
    },
    {
      name: `${brand} \`50s Telecaster`,
      img: Telecaster50s,
      price: 2399,
      new: false,
    },
    {
      name: `${brand} \`60s Telecaster`,
      img: Telecaster60s,
      price: 2399,
      new: false,
    },
  ];
  return items;
}
