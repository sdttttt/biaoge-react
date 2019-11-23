import { Button, notification } from 'antd';
import React from 'react';

export function noticeError(
  message: string ,
  description: string ,
  btnFunc: (key: string) => React.ReactNode = defaultBtn,
): void {

  const key: string = keyGenerator();
  const btn: React.ReactNode = btnFunc(key);

  notification.error({
    message,
    description,
    btn,
    key,
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
const defaultBtn: (key: string) => React.ReactNode = (key) => {

  const onClick = () => notification.close(key);
  return (
    <Button type="primary" size="small" onClick={onClick}>
      Confirm
    </Button>
  );
};

const keyGenerator: () => string = () => {
  return Date.now() + ''
};
