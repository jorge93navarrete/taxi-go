import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
   providedIn: "root",
})
export class LoadingService {
   private loading: HTMLIonLoadingElement;

   constructor(private loadingController: LoadingController) {}

   async present() {
      this.dismiss();
      this.loading = await this.loadingController.create();
      this.loading.present();
   }

   dismiss() {
      if (this.loading) {
         this.loading.dismiss();
      }
   }
}
