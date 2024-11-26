import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  dalete(id: any) {
    throw new Error('Method not implemented.');
  }
  showdata() {
    throw new Error('Method not implemented.');
  }
  //ประกาศตัวแปรแบบอาเรย์เพื่อรับค่าข้อมูล
  data_detailMen: any=[] //ใช้งานคู่กับหน้าแสดงรายละเอียด

  constructor(public http:HttpClient,) {}

    //function การเพิ่มที่ส่งไปยัง api
    addmember(data:any){
      console.log("ข้อมูลที่ส่งไปยัง api",data);
      return this.http.post('http://127.0.0.1/sayada/api/insert.php',data)

   }

    //สร้างขึ้นมาเพื่อดึงข้อมูลมาจาก api
    listmember(){
      return this.http.get('http://127.0.0.1/sayada/API/listmember.php')
   }

    //ฟังก์ชันสำหรับแก้ไขข้อมูล
    editMember(dataEdit: any){
      return this.http.put('http://127.0.0.1/sayada/api/update.php',dataEdit)
    }

    //ฟังก์ชันสำหรับลบข้อมูล
    delMem(id : any){
      return this.http.delete('http://127.0.0.1/sayada/api/delete.php?id='+id);
    }

}
