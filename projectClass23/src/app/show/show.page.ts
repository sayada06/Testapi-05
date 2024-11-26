import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member: any = []; //ประกาศตัวแปรแบบอาเรย์ เพื่อมารับค่า

  constructor(
    private http: HttpClient,
    public dataapi: DataapiService,
    private nav: NavController
  ) {
      this.loadDataMem();
  }

  ngOnInit() {
    this.loadDataMem(); //เรียกใช้งานฟังก์ชัน การดึงข้อมูล
  }

  loadDataMem(){
    this.dataapi.listmember().subscribe({
      next: (res: any) => {
        console.log('Successfully');
        this.member = res;
      },

      error: (error: any) => {
        console.log('Error',error);
      }

    });

  }

  edit(datamem: any){
    this.dataapi.data_detailMen = datamem;
    console.log(datamem);
    this.nav.navigateForward('/edit')
  }

  delMem(id: any){
    this.dataapi.delMem(id).subscribe({
      next: (res:any) => {
        console.log("ลบข้อมูลสำเร็จ", res);
        this.loadDataMem();
      },
      error: (err: any) => {
        console.log("เกิดข้อผิดพลาดใในการลบข้อมูล", err);
      }
    });
  }

}
