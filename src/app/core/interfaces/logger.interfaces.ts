import { AlertButton } from '@ionic/core';

export interface DialogBasic {
  header: string;
  message: string;
  aceptText?: string;
  // buttons: AlertButton[];
}

export interface LoggerMessageBody {
  dialogData: DialogBasic;
  yesCallback?: Function;
  useNobutton?: boolean;
  noCallback?: Function;
  cutomsButtons?: AlertButton[];
  dimissCallback?: Function;
}
