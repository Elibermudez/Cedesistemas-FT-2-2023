import { Observable } from "rxjs";
import { EventDetail } from "../eventdetail";

export abstract class EventDetailGateway{
  abstract getOneEvent(id:string):Observable<EventDetail>
}
