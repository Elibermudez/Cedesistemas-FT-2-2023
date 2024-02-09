import { Injectable } from "@angular/core";
import { EventDetailGateway } from "../models/EventDetail/gateway/eventdetail-gateway";
import { Observable } from "rxjs";
import { EventDetail } from "../models/EventDetail/eventdetail";

@Injectable({
  providedIn:'root'
})

export class Eventdetailusecase {
  constructor(private _eventdetailGateway:EventDetailGateway){}

  getOneEvent(id:string):Observable<EventDetail>{
    //this._eventdetailGateway.getOneEvent(id)
    return   this._eventdetailGateway.getOneEvent(id)

  }
}
