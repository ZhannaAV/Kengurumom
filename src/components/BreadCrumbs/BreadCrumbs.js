import './BreadCrumbs.css'
import {pathTranslate as translate} from "../../config/links";
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {useHistory, useLocation} from 'react-router-dom';

function BreadCrumbs() {
  const {pathname} = useLocation();
  const history = useHistory()
  const pathNames = pathname.split('/').filter(x => x)

  return (
    <Breadcrumbs className='bread' separator='>' aria-label="breadcrumb">
      <Link color="inherit" onClick={() => history.push('/')}>Главная</Link>
      {pathNames.map((name, index) => {
        const pathBack = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathNames.length - 1;
        return isLast ? (<Typography className="bread__crumb">{translate[name]}</Typography>)
          : (<Link color="inherit" onClick={() => history.push(pathBack)}>{translate[name]}</Link>)
      })}
    </Breadcrumbs>
  )
}

export default BreadCrumbs