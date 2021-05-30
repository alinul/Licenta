import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { SendDateService } from '../shared/calendar/send-date.service';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-calendar-row',
  templateUrl: './calendar-row.component.html',
  styleUrls: ['./calendar-row.component.css']
})

@Injectable({
  providedIn:  'root',
})


export class CalendarRowComponent implements OnInit{ 

  public db: any[];

  monthsMapNumber = new Map();
  workingDaysInJan = new Map();
  workingDaysInFeb = new Map();
  workingDaysInMar = new Map();
  workingDaysInApr = new Map();
  workingDaysInMay = new Map();
  workingDaysInJun = new Map();
  workingDaysInJul = new Map();
  workingDaysInAug = new Map();
  workingDaysInSep = new Map();
  workingDaysInOct = new Map();
  workingDaysInNov = new Map();
  workingDaysInDec = new Map();

  @Input() users: '';

  constructor(public idb: AngularFireDatabase,public angularFireAuth: AngularFireAuth, public dateService: SendDateService) {      
    
    
  }

  getWorkingDaysInJan(user){
    var date = new Date(Date.UTC(2021, 0,));
    while (date.getMonth() === 0) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInJan.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }
    let keys = Array.from( this.workingDaysInJan.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 1){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInJan.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 1){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInJan.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });

      
        
  }
  getWorkingDaysInFeb(user){
    var date = new Date(Date.UTC(2021, 1,));
    while (date.getMonth() === 1) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInFeb.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInFeb.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 2){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInFeb.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 2){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInFeb.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInMar(user){
    var date = new Date(Date.UTC(2021, 2,));
    while (date.getMonth() === 2) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInMar.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInMar.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 3){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInMar.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 3){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInMar.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInApr(user){
    var date = new Date(Date.UTC(2021, 3,));
    while (date.getMonth() === 3) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInApr.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInApr.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 4){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInApr.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 4){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInApr.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInMay(user){
    var date = new Date(Date.UTC(2021, 4,));
    while (date.getMonth() === 4) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInMay.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInMay.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 5){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInMay.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 5){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInMay.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInJun(user){
    var date = new Date(Date.UTC(2021, 5,));
    while (date.getMonth() === 5) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInJun.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInJun.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 6){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInJun.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 6){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInJun.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInJul(user){
    var date = new Date(Date.UTC(2021, 6,));
    while (date.getMonth() === 6) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInJul.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInJul.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 7){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInJul.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 7){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInJul.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInAug(user){
    var date = new Date(Date.UTC(2021, 7,));
    while (date.getMonth() === 7) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInAug.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInAug.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 8){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInAug.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 8){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInAug.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInSep(user){
    var date = new Date(Date.UTC(2021, 8,));
    while (date.getMonth() === 8) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInSep.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInSep.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 9){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInSep.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 9){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInSep.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInOct(user){
    var date = new Date(Date.UTC(2021, 9,));
    while (date.getMonth() === 9) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInOct.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInOct.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 10){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInOct.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 10){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInOct.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInNov(user){
    var date = new Date(Date.UTC(2021, 10,));
    while (date.getMonth() === 10) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInNov.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInNov.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 11){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInNov.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 11){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInNov.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }
  getWorkingDaysInDec(user){
    var date = new Date(Date.UTC(2021, 11,));
    while (date.getMonth() === 11) {
      if(!(date.getDay() == 0 || date.getDay() == 6)) {        
        this.workingDaysInDec.set(new Date(date).getDate(), "background-color: white;")
      }
    date.setDate(date.getDate() + 1);
    }    
    let keys = Array.from( this.workingDaysInDec.keys() );

    this.idb.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {
      
      days.forEach(item =>{        
        var date = new Date(item.toString());
        if(date.getMonth()+1 === 12){
          keys.forEach(key => {
            if(key === date.getDate()){
              this.workingDaysInDec.set(key, "background-color: yellow;")
            }
          })
        }
      })
      this.idb.list('users/'+user+'/approvedDaysOff').valueChanges().subscribe(days => {
      
        days.forEach(item =>{        
          var date = new Date(item.toString());
          if(date.getMonth()+1 === 12){
            keys.forEach(key => {
              if(key === date.getDate()){
                this.workingDaysInDec.set(key, "background-color: green;")
              }
            })
          }
        })
        });
      });
  }

  

ngOnInit(){ 
  this.getWorkingDaysInJan(this.users);
  this.getWorkingDaysInFeb(this.users);
  this.getWorkingDaysInMar(this.users);
  this.getWorkingDaysInApr(this.users);
  this.getWorkingDaysInMay(this.users);
  this.getWorkingDaysInJun(this.users);
  this.getWorkingDaysInJul(this.users);
  this.getWorkingDaysInAug(this.users);
  this.getWorkingDaysInSep(this.users);
  this.getWorkingDaysInOct(this.users);
  this.getWorkingDaysInNov(this.users);
  this.getWorkingDaysInDec(this.users);
}
}
