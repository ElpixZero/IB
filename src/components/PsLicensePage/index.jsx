import React from 'react';
import axios from 'axios';
import './index.css';

function Main() {
  const [products, setProducts] = React.useState([]);

  const getLicension = async () => {
    try {
      const ans = await axios({
        method: 'get',
        url: 'https://hard-rock.site:1443/api/list/products',
      });


      if (ans.status === 200) {
        setProducts(ans.data.products);
      }
    } catch(e) {
      console.warn(e);
    }
  };

  const addLicension = async () => {
    try {
      const data = {
        id: 'fffc-cada-cbca-bfac-acab'
      };

      const ans = await axios({
        method: 'POST',
        url: 'https://hard-rock.site:1443/api/user/addproduct',
        data: JSON.stringify(data),
      });


      if (ans.status === 200) {
        setProducts(ans.data.products);
      }
    } catch(e) {

    }
  };

  React.useEffect(() => {
    getLicension();
  }, []);

  return (
    <div className="lp">
        <div className="lpAddLicenseBlock">
          <h3 className="lpTitle lpAddLicenseTitle">Добавить лицензию</h3>
          <div className="lpAddLicenseBlockContent">
            <div className="licenseView lpLicenseView ">XXXX-XXXX-XXXX-XXXX</div>
            <button className="addLicense" onClick={() => addLicension()}>Добавить</button>
          </div>
        </div>
       
        <div className="lpActiveLicenses">
          <div className="lpActiveLicenseView">
            <h3 className="lpTitle lpActiveLicenseTitle">Активные лицензии</h3>
            { products.length === 0 ? <div className="lpNoneLicension">Для вашей учетной записи активные лицензии не найдены.</div>
              : products.map( (product) => (
              <div key={product.id} className="lpAddLicenseBlockContent">
                <div className="lpActiveLicenseIcon">Иконка лицензии</div>
                <div className="lpActiveLicenseContent">
                  <h4 className="lpActiveLicenseCardTitle">{product.name}</h4>
              <p className="lpActiveLicenseKey">Лицензионный ключ: {product.id}</p>
                  <p className="lpActiveLicenseDate">Дата окончания лицензии: {product.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Main;
