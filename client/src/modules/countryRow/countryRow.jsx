import { Link } from 'react-router-dom';

export default function CountryRow(props) {
      return (
          <Link to={`/countries/${props.id}`}>
              <li>
                  <img src={props.flag} alt={props.name} />
                  <span>{props.name}</span>
                  <span>{props.region}</span>
              </li>
          </Link>
    )
};