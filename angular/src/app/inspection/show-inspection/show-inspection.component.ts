import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';
InspectionApiService;

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css'],
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionTypeList: any = [];

  inspectionTypeMap: Map<number, string> = new Map();

  constructor(private service: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.refreshinspectionTypeMap();
    this.inspectionTypeList$ = this.service.getInspectionTypesList();
  }

  modalTitle: string = '';
  activateAddEditIC: boolean = false;
  inspection: any;

  modalAdd() {
    this.inspection = {
      id: 0,
      status: null,
      comment: null,
      inspectionTypeId: null,
    };
    this.modalTitle = 'Add Inspection';
    this.activateAddEditIC = true;
  }

  modalClose() {
    this.activateAddEditIC = false;
    this.inspectionList$ = this.service.getInspectionList();
  }

  modalEdit(item: any) {
    this.inspection = item;
    this.modalTitle = 'Edit Inspection';
    this.activateAddEditIC = true;
  }

  delete(item:any){
    if(confirm("emin misin?")){
      this.service.deleteInspection(item.id).subscribe(res=>{

        var closeModalBtn=document.getElementById('add-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }

        var showDeleteSuccess=document.getElementById("delete-success-alert");
        if(showDeleteSuccess){
          showDeleteSuccess.style.display="block";
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display="none"
          }
        },4000);
        this.inspectionList$=this.service.getInspectionList();
      })
    }
  }

  refreshinspectionTypeMap() {
    this.service.getInspectionTypesList().subscribe((data) => {
      this.inspectionTypeList = data;
      for (let i = 0; i < data.length; i++) {
        this.inspectionTypeMap.set(
          this.inspectionTypeList[i].id,
          this.inspectionTypeList[i].inspectionName
        );
      }
    });
  }
}
