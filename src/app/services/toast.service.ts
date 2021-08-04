import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { ToastOptions } from "@ionic/core/dist/types/interface";
@Injectable()
export class ToastService {
   constructor(private toastController: ToastController) {}
   async presentToast(toas: ToastOptions) {
      const toast = await this.toastController.create({
         message: toas.message,
         duration: toas.duration ? toas.duration : 4000,
         position: toas.position,
         color: toas.color,
      });
      toast.present();
   }

   httpErrorCallBack(fail: HttpErrorResponse) {
      let message = "";
      if (fail.error["errors"]) {
         let keys = Object.keys(fail.error.errors);
         message = fail.error.errors[keys[0]];
      } else {
         message = fail.error.message;
         message ? null : (message = "Ups something has gone wrong! ");
      }
      this.presentToast({
         message: `Detail: ${message}`,
         color: "danger",
      });
   }
}
