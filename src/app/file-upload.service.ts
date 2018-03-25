import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class FileUploadService {
    constructor() {}

    // postFile(fileToUpload: File): Observable<FormData> {
    //     const endpoint = 'your-destination-url';
    //     const formData: FormData = new FormData();
    //     formData.append('fileKey', fileToUpload, fileToUpload.name);
    //     return new Observable<FormData>((observer) => {
    //         console.log(formData);
    //     })
    // }
    postFile(fileToUpload: File): Observable<FormData> {
        console.log('here');
        console.log(fileToUpload, 'file from service')
        const endpoint = 'your-destination-url';
        const formData: FormData = new FormData();
        console.log(formData);
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        console.log(formData);
        return new Observable<FormData>((observer) => {
            observer.next(formData);
        });
        //   .map(() => { return true; })
        //   .catch((e) => this.handleError(e));
    }


}

