import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventDetail } from '../../../domain/models/EventDetail/eventdetail';
import { Eventdetailusecase } from '../../../domain/usecases/evendetailusecase';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent implements OnInit{

  constructor(private route:ActivatedRoute, private _eventsdetailUseCases:Eventdetailusecase){}
  id !:string;
  eventdetail!:EventDetail;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      const eventId = params.get('eventId');
      if(eventId){
        this.id = eventId;

      }
    })
    this.getOneEvent();
    }


   getOneEvent(){
     this._eventsdetailUseCases.getOneEvent(this.id).subscribe((data:any) =>{
      if (data){
        this.eventdetail = data
      }
    });
    console.log(`loggggg: eventdetail`,this.eventdetail)
  }

}
