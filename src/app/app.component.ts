import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileToUpload: File = null;

  constructor(private fileUploadService: FileUploadService) {}

  handleFileInput(files: FileList) {
    console.log('file:', files);
    this.fileToUpload = files.item(0);
    this.fileUploadService.postFile(this.fileToUpload).subscribe((data: FormData) => {
      console.log(data);
      console.log(data.has('filekey'), 'in subscribe');
    }, error => {
      console.log('error');
    });
  };
}


