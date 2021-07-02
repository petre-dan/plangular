import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { myFriendList } from '../mock-data/FriendList';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  friendList: User[] = myFriendList;

  constructor() { }

  onSelect(friend: User): void{
    console.log(friend);
  }


  ngOnInit(): void {
  }

}
