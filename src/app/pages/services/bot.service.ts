import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';
import { SOCKET_EVENTS } from '../models.ts/enums';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  private socket: SocketIOClient.Socket;

  private subject: Subject<any>;
  public botCommand: Observable<any>;

  constructor() {
    this.subject = new Subject<boolean>();

    this.botCommand = this.subject.asObservable();

    // this.socket = io.connect(environment.ioSocketUrl, {
    //   query: { uuid: uuidv4() }
    // });

    // this.on(SOCKET_EVENTS.PASSCODE).subscribe((result: any) => {
    //   if (result) {
    //     this.subject.next({ type: SOCKET_EVENTS.PASSCODE, payload: result });
    //   }
    // });

    // this.on(SOCKET_EVENTS.NAVIGATE).subscribe((result: any) => {
    //   if (result) {
    //     this.subject.next({ type: SOCKET_EVENTS.NAVIGATE, payload: result.url });
    //   }
    // });
  }



  on(event: string) {
    return new Observable(observer => {
      this.socket.on(event, data => {
        observer.next(data);
      });
    });
  }
}
