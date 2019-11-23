import { Button, notification } from 'antd';
import React from 'react';

export function noticeError(
  message: string ,
  description: string ,
  btn: React.ReactNode = defaultBtn() ,
): void {

  notification.error({
    message,
    description,
    btn,
  });

}

export function noticeSuccess(
  message: string ,
  description: string ,
): void {
  notification.success({
    message,
    description,
    duration: 10
  } );
}

/*
* default notification Button
* */
const defaultBtn: () => React.ReactNode = () =>{
  const onClick = () => notification.close(keyGenerator());
  return (
    <Button type="primary" size="small" onClick={onClick}>
      Confirm
    </Button>
  );
};

const keyGenerator: () => string = () => {
  return Date.now() + ''
};
