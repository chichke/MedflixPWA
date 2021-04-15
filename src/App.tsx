import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import "antd/dist/antd.less";
import {getToken, onMessageListener} from './service/firebase'
const App = () => {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    if (!isTokenFound)
    getToken(setTokenFound);
  }, [isTokenFound])


  onMessageListener().then((payload: any) => {
    setShow(true);
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  return (
    <div className={"App"}>
      <Typography.Title level={1} style={{ padding: 16 }}>
        {"React Medflix"}
      </Typography.Title>
    </div>
  );
};

export default App;
