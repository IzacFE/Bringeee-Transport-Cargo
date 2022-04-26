import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileCostumer, ProfileDriver } from "../../components/profile/ProfileUser";
import { TabsProfileCostumer, TabsProfileDriver } from "../../components/tabsProfile/TabsProfile";

function Profile() {
  const [role, setRole] = useState("costumer");
  const [dataUser, setDataUser] = useState([]);
  const [dataCurrentOrderDriver, setDataCurrentOrderDriver] = useState([]);
  const [dataHistoryOrderDriver, setDataHistoryOrderDriver] = useState([]);
  const [dataHistoryOrderCostumer, setDataHistoryOrderCostumer] = useState([]);
  const [dataOrderActiveCostumer, setOrderActiveCostumer] = useState([]);

  useEffect(() => {
    fecthData();
    fetchCurrentOrderDriver();
    fetchHistoryOrderDriver();
    fetchHistoryOrderCostumer();
    fetchOrderActiveCostumer();
  }, []);

  const fecthData = () => {
    axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/auth/me`)
      .then((ress) => {
        setDataUser(ress.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchHistoryOrderCostumer = () => {
    axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/customers/orders?status=CONFIRMED%2CMANIFESTED%2CON_PROCESS%2CARRIVED%2CCANCELLED`)
      .then((ress) => {
        setDataHistoryOrderCostumer(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOrderActiveCostumer = () => {
    axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/customers/orders?status=ON_PROCESS`)
      .then((ress) => {
        setOrderActiveCostumer(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCurrentOrderDriver = () => {
    axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/drivers/current_order`)
      .then((ress) => {
        setDataCurrentOrderDriver(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchHistoryOrderDriver = () => {
    axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/drivers/orders?sortVolume=true&sortWeight=true&sortDistance=true`)
      .then((ress) => {
        setDataHistoryOrderDriver(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (role === "costumer") {
    return (
      <div className="container mx-auto py-5 px-3">
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-3/12">
            <ProfileCostumer dataUser={dataUser} />
          </div>
          <div className="w-full md:w-9/12">
            <TabsProfileCostumer dataHistoryOrder={dataHistoryOrderCostumer} dataOrderActive={dataOrderActiveCostumer} />
          </div>
        </div>
      </div>
    );
  } else if (role === "driver") {
    return (
      <div className="container mx-auto py-5 px-3">
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-3/12">
            <ProfileDriver dataUser={dataUser} />
          </div>
          <div className="w-full md:w-9/12">
            <TabsProfileDriver dataOrderActive={dataCurrentOrderDriver} dataHistoryOrder={dataHistoryOrderDriver} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
