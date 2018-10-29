import { Component } from '@angular/core';
// import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { ServerDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {
  // data:any = [];
  // source: ServerDataSource;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      
      email: {
        title: 'Correo',
        type: 'string',
      },

      phone_number: {
        title: 'Teléfono',
        type: 'string',
      },
    },

  };
  
  source: ServerDataSource=new ServerDataSource(this.http, { endPoint: 'https://ertourister.appspot.com/user'});
  // pager.display =false;
  // source: LocalDataSource = new LocalDataSource();
  usuarios: any;
  constructor(private service: SmartTableService,private http: HttpClient) {
    // const data = this.service.getUsuarios();
    // this.source.load(data);
    // this.source = new ServerDataSource(http, { endPoint: 'https://ertourister.appspot.com/user' });
  }

  ngOnInit() {
    // this.source = new ServerDataSource(this.http, { endPoint: 'https://ertourister.appspot.com/user'})
    this.getUsuarios();
  }

  getUsuarios() {
    this.service.getUsuarios().subscribe(res => {
      this.usuarios = res;
    });
  }
  
    


  onDeleteConfirm(event): void {
    if (window.confirm('¿Estas seguro que quieres eliminar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
